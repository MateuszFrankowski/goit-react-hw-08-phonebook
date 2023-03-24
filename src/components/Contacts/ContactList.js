import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/ContactsSelectors';
import { deleteSelectedContact } from 'redux/contacts/ContactsThunk';
import { getFilter } from 'redux/filter/FilterSelectors';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleDelete = id => dispatch(deleteSelectedContact(id));
  const filter = useSelector(getFilter);

  const phoneContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>My contacts</TableCaption>
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>phone</Th>
              <Th>delete contact</Th>
            </Tr>
          </Thead>
          <Tbody>
            {phoneContacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>
                  <Button
                    leftIcon={<DeleteIcon />}
                    colorScheme="teal"
                    variant="solid"
                    id={contact.name}
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
