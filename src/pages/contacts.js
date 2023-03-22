import { useDispatch } from 'react-redux';
import { useEffect, useSelector } from 'react';
import { fetchContacts } from 'redux/contacts/ContactsThunk';
import { getIsLoading } from 'redux/contacts/ContactsSelectors';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/PhoneBookForm';
import { ContactsList } from 'components/Contacts/ContactList';

export default function ContactsPage() {
  const dispatch = useDispatch();
  //console.log('tu byłem', useSelector(getIsLoading));
  // const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        {/* <div>{isLoading && 'Request in progress...'}</div> */}
        <ContactForm />
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
