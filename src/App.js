import './Style.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const contacts = [    
    {
      id : "1",
      name : "Peter",
      email : "peter@gmail.com",
    },

    {
      id : "2",
      name : "Jhonny",
      email : "jhonny123@gmail.com",
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
