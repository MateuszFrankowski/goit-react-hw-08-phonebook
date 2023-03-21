import { useDispatch } from 'react-redux';
import { useEffect, useSelector } from 'react';
import { fetchContacts } from 'redux/contacts/ContactsThunk';
import { getIsLoading } from 'redux/contacts/ContactsSelectors';

import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/ContactList';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchContacts('arg'));
  }, [dispatch]);

  return (
    <>
      <div>
        <div>{isLoading && 'Request in progress...'}</div>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
