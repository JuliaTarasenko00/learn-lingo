import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, query, orderByChild, onValue, startAt } from 'firebase/database';
import { FormControl, MenuItem, Select, styled } from '@mui/material';
import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
import { database } from 'config/firebase-config';
import { languages, levels, price } from 'helpers/optionsFilter';

import { addFilter } from 'redux/sliceFilter';
import { Title, Wrapper } from './Filter.styled';

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
  const [optionsLanguage, setOptionsLanguage] = useState('');
  const [optionsLevels, setOptionsLevels] = useState('');
  const [optionsPrice, setOptionsPrice] = useState('');
  const [search, setSearch] = useState(false);

  const handelClickLanguage = ev => {
    const selectedLanguage = ev.target.value;
    setOptionsLanguage(selectedLanguage);
    setSearch(true);

    if (optionsLanguage !== selectedLanguage) {
      setOptionsLevels('');
      setOptionsPrice('');
    }

    const q = query(dbRef, orderByChild('languages'));

    onValue(q, snapshot => {
      const teachers = snapshot.val();

      const teachersFilter =
        filter.length !== 0 && optionsLanguage === '' ? filter : teachers;

      const language = Object.keys(teachersFilter)
        .filter(key => teachersFilter[key].languages.includes(selectedLanguage))
        .map(key => ({ ...teachersFilter[key] }));

      return dispatch(addFilter(language));
    });
  };

  const handelClickLanguageLevel = ev => {
    const selectedLevels = ev.target.value;
    setOptionsLevels(selectedLevels);
    setSearch(true);

    const q = query(dbRef, orderByChild('levels'));

    onValue(q, snapshot => {
      const teachers = snapshot.val();

      const teachersFilter = filter.length !== 0 ? filter : teachers;

      const levels = Object.keys(teachersFilter)
        .filter(key => teachersFilter[key].levels.includes(selectedLevels))
        .map(key => ({ ...teachersFilter[key] }));

      return dispatch(addFilter(levels));
    });
  };

  const handelClickPrice = ev => {
    const selectedPrice = ev.target.value;
    setOptionsPrice(selectedPrice);
    setSearch(true);

    const dbQuery = query(
      dbRef,
      orderByChild('price_per_hour'),
      startAt(Number(selectedPrice))
    );

    onValue(dbQuery, snapshot => {
      const data = snapshot.val();

      const dataArray = Object.values(data);

      const teachers = filter.filter(
        teacher => teacher.price_per_hour >= Number(selectedPrice)
      );

      const teachersFilter = filter.length !== 0 ? teachers : dataArray;

      return dispatch(addFilter(teachersFilter));
    });
  };

  return (
    <>
      <Wrapper>
        <FormControl sx={{ marginRight: '20px', minWidth: 221 }} size="small">
          <Title>Languages</Title>
          <Input
            id="demo-select-small"
            value={optionsLanguage}
            onChange={handelClickLanguage}
          >
            {languages.map((options, index) => (
              <MenuItem value={options} key={index}>
                <em>{options}</em>
              </MenuItem>
            ))}
          </Input>
        </FormControl>
        <FormControl sx={{ marginRight: '20px', minWidth: 198 }} size="small">
          <Title>Level of knowledge</Title>

          <Input value={optionsLevels} onChange={handelClickLanguageLevel}>
            {levels.map((options, index) => (
              <MenuItem value={options} key={index}>
                <em>{options}</em>
              </MenuItem>
            ))}
          </Input>
        </FormControl>
        <FormControl sx={{ minWidth: 124 }} size="small">
          <Title>Price</Title>
          <Input value={optionsPrice} onChange={handelClickPrice}>
            {price.map((options, index) => (
              <MenuItem value={options} key={index}>
                <em>{options}</em>
              </MenuItem>
            ))}
          </Input>
        </FormControl>
      </Wrapper>
      {filter.length === 0 && search && (
        <p>
          Oops, unfortunately, we did not find among our teachers according to
          your criteria. You can choose from our list 😊
        </p>
      )}
      <TeachersMarkup item={filter} />
    </>
  );
};
