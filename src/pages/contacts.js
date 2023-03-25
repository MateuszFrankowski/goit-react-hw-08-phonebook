import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/ContactsThunk';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/PhoneBookForm';
import { ContactsList } from 'components/Contacts/ContactList';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <ContactForm />
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
