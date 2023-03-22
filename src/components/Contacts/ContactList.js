import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/ContactsSelectors';
import { deleteSelectedContact } from 'redux/contacts/ContactsThunk';
import { getFilter } from 'redux/filter/FilterSelectors';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);
  const handleDelete = id => dispatch(deleteSelectedContact(id));
  const filter = useSelector(getFilter);

  const phoneContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2 className={css['contacts-title']}>Contacts</h2>
      <ul className={css['contacts-list']}>
        {phoneContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <p className={css.name}>{contact.name}</p>
            <p className={css.number}>{contact.number}</p>
            <button
              className={css.button}
              id={contact.name}
              onClick={() => handleDelete(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
