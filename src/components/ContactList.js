import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactsList = props.contacts.map((contact) => {
        return (
            <ContactCard contact = {contact} contacts = {props.contacts} setContacts = {props.setContacts}/>
        );
    })

    return (
        <div className = "ui celled list">
             <h2>Contact List</h2> 
             {renderContactsList}
        </div>
    );
}

export default ContactList;