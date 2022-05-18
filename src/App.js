import React, {useState, useEffect} from 'react';
import './Style.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  
  const LOCAL_STORAGE_KEY = "contacts";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);

  // offloading data from the local storage
  useEffect( () => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) {
      setContacts(retriveContacts);
    }
  }, [])

  // adding data to the browsers local storage
  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); 
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact name = {name} email = {email} setName = {setName} setEmail = {setEmail} contacts = {contacts} setContacts = {setContacts}/>
      <ContactList contacts = {contacts} setContacts = {setContacts} />
    </div>
  );
}

export default App;
