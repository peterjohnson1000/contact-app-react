const AddContact = ({name, setName, email, setEmail, contacts, setContacts}) => {
    
    const inputNameHandeler = (e) => {
        setName(e.target.value);
    }
    
    const inputEmailHandeler = (e) => {
        setEmail(e.target.value);
    }
    const assignUserData = (e) => {
        e.preventDefault();
        if(name === "" && email === "") {
            alert("All fields are mandatory");
            return;
        }
        setContacts([
            ...contacts,{name: name, email : email, id : Math.random() * 1000},
        ]);
        setName("");
        setEmail("");
    }
    return (
        <div className = "ui main"style = {{marginTop:"1rem"}}>
            <h2>Add Contact</h2> 
            <form className = "ui form">
                <div className = "field">
                    <label>Name</label>
                    <input type="text" placeholder = "Name" onChange = {inputNameHandeler} value = {name} />
                </div>
                <div className = "field">
                    <label>Email</label> 
                    <input type="email" placeholder = "Email" onChange = {inputEmailHandeler} value = {email} />
                </div>
                <button className = "ui button blue" onClick = {assignUserData} >Add</button>
            </form>
        </div>
    );
}

export default AddContact;