import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/ContactsThunk';

import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/ContactList';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts('arg'));
  }, [dispatch]);

  return (
    <>
      <div>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};
