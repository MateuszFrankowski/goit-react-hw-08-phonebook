import css from './Filter.module.css';
import { Input, Box } from '@chakra-ui/react';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/FilterSelectors';
import { setNameFilterAction } from 'redux/filter/FilterSlice';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = evt => {
    const { value, name } = evt.target;
    if (name === 'filter') {
      dispatch(setNameFilterAction(value));
    }
  };
  const filterId = nanoid();
  return (
    <Box>
      <Input
        placeholder="find contact"
        id={filterId}
        value={filter}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </Box>
  );
};
