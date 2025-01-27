import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import userContacts from "./contacts.json"

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("phonebook");
    return savedContacts ? JSON.parse(savedContacts) : userContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("phonebook", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId )
    })
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
