import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../redux/tasks/tasks.thunk';

import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/ContactList';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks('arg'));
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
