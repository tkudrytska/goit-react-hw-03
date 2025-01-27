import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import userContacts from "./contacts.json"

function App() {
  const [contacts, setContacts] = useState(userContacts);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  )
}

export default App
