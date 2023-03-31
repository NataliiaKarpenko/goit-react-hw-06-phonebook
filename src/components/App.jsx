import { useSelector } from 'react-redux';

import { FormInput } from './Form/FormInput';
import { ContactsList } from './ContactsList/ContactsList';
import { getContacts } from 'redux/selectors';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = contactInfo => {
  //   if (contacts.some(({ name }) => name === contactInfo.name)) {
  //     alert(`${contactInfo.name} is already in contacts`);
  //     return;
  //   }

  //   const finalContact = {
  //     id: nanoid(),
  //     ...contactInfo,
  //   };

  //   setContacts(prevContacts => [finalContact, ...prevContacts]);
  //   return true;
  // };

  // const contactDeleteHandler = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const contactFilterHandler = event => {
  //   setFilter(event.target.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <>
      <h1>Phonebook</h1>
      {/* <FormInput onFormSubmit={formSubmitHandler} /> */}
      <FormInput />

      {/* <Filter value={filter} contactFilter={contactFilterHandler} /> */}
      <Filter />

      {contacts.length !== 0 && (
        <ContactsList
        // onContactDelete={contactDeleteHandler}
        // contacts={getFilteredContacts()}
        //
        />
      )}
    </>
  );
};
