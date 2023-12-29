import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, query, orderByChild, onValue } from 'firebase/database';
import { FormControl, MenuItem, Select, styled } from '@mui/material';
import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
import { database } from 'config/firebase-config';
import { languages, levels, price } from 'helpers/optionsFilter';

import { addFilter } from 'redux/sliceFilter';
import { NotFound, Title, Wrapper } from './Filter.styled';

const Input = styled(Select)(() => ({
  borderRadius: '14px',
  backgroundColor: '#fff',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filterTeachers);
  const dbRef = ref(database, 'teachers');

  const [options, setOptions] = useState({
    language: '',
    levels: '',
    price: '',
  });
  const [item, setItem] = useState({
    language: [],
    levels: [],
  });
  const [search, setSearch] = useState(false);

  const handelClickLanguage = useCallback(
    ev => {
      const selectedLanguage = ev.target.value;
      setOptions(prev => ({ ...prev, language: selectedLanguage }));
      setSearch(true);

      const q = query(dbRef, orderByChild('languages'));

      if (options.language !== selectedLanguage) {
        setOptions(prev => ({ ...prev, price: '', levels: '' }));
      }

      onValue(q, snapshot => {
        const teachers = snapshot.val();

        const language = Object.keys(teachers)
          .filter(key => teachers[key].languages.includes(selectedLanguage))
          .map(key => ({ ...teachers[key] }));

        setItem(prev => ({ ...prev, language }));

        return dispatch(addFilter(language));
      });
    },
    [dbRef, dispatch, options.language]
  );

  const handelClickLanguageLevel = useCallback(
    ev => {
      const selectedLevels = ev.target.value;
      setOptions(prev => ({ ...prev, levels: selectedLevels }));
      setSearch(true);

      if (options.price !== '') {
        setOptions(prev => ({ ...prev, price: '' }));
      }

      const levels = item.language.filter(teacher =>
        teacher.levels.includes(selectedLevels)
      );

      setItem(prev => ({ ...prev, levels }));

      return dispatch(addFilter(levels));
    },
    [options.price, item, dispatch]
  );

  const handelClickPrice = useCallback(
    ev => {
      const selectedPrice = ev.target.value;
      setOptions(prev => ({ ...prev, price: selectedPrice }));
      setSearch(true);

      const filterByLevel =
        item.levels.length !== 0 ? item.levels : item.language;

      const teachers = filterByLevel.filter(
        teacher => teacher.price_per_hour >= Number(selectedPrice)
      );

      return dispatch(addFilter(teachers));
    },
    [item, dispatch]
  );

  return (
    <>
      <Wrapper>
        <FormControl sx={{ marginRight: '20px', minWidth: 221 }} size="small">
          <Title>Languages</Title>
          <Input value={options.language} onChange={handelClickLanguage}>
            {languages.map((options, index) => (
              <MenuItem value={options} key={index}>
                <em>{options}</em>
              </MenuItem>
            ))}
          </Input>
        </FormControl>
        <FormControl sx={{ marginRight: '20px', minWidth: 198 }} size="small">
          <Title>Level of knowledge</Title>

          <Input
            value={options.levels}
            onChange={handelClickLanguageLevel}
            disabled={options.language === ''}
          >
            {levels.map((options, index) => (
              <MenuItem value={options} key={index}>
                <em>{options}</em>
              </MenuItem>
            ))}
          </Input>
        </FormControl>
        <FormControl sx={{ minWidth: 124 }} size="small">
          <Title>Price</Title>
          <Input
            value={options.price}
            onChange={handelClickPrice}
            disabled={options.language === ''}
          >
            {price.map((options, index) => (
              <MenuItem value={options} key={index}>
                <em>{options}</em>
              </MenuItem>
            ))}
          </Input>
        </FormControl>
      </Wrapper>
      {filter.length === 0 && search && (
        <NotFound>
          Oops, unfortunately, we did not find among our teachers according to
          your criteria. You can choose from our list 😊
        </NotFound>
      )}
      <TeachersMarkup item={filter} />
    </>
  );
};
