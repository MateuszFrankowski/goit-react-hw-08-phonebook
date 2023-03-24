import css from './PhoneBookForm.module.css';
import { useState } from 'react';
import { getFilter } from 'redux/filter/FilterSelectors';
import { addNewContact } from 'redux/contacts/ContactsThunk';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/ContactsSelectors';
import { nanoid } from 'nanoid';
import { AddIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import {
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import React from 'react';
export const ContactForm = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [inputName, setInputName] = useState('');
  const handleInputNumberChange = e => setInputNumber(e.target.value);
  const handleInputNameChange = e => setInputName(e.target.value);
  const isErrorNumber = inputNumber === '';
  const isErrorName = inputName === '';
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const nameInputId = nanoid();
  const telInputId = nanoid();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    if (contacts) {
      if (contacts.find(element => element.name === name.value)) {
        return alert(name.value + ' is already in contacts');
      }
    }
    dispatch(addNewContact({ name: name.value, number: number.value }));
    form.reset();
    const input = document.getElementsByName('filter');
    input.value = filter;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isErrorName}>
          <FormLabel>Name</FormLabel>
          <Input
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={inputName}
            onChange={handleInputNameChange}
          />
          {!isErrorName ? (
            <FormHelperText>Enter the contact name.</FormHelperText>
          ) : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isErrorName}>
          <FormLabel>Name</FormLabel>
          <Input
            id={telInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={inputNumber}
            onChange={handleInputNumberChange}
          />{' '}
          {!isErrorNumber ? (
            <FormHelperText>Enter the phone contact number.</FormHelperText>
          ) : (
            <FormErrorMessage>Number is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          type="submit"
          rightIcon={<AddIcon boxSize={6} />}
          colorScheme="teal"
          variant="solid"
        >
          Add contact
        </Button>
      </form>
    </>
  );
};
