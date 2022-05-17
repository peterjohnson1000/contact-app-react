const AddContact = () => {
    return (
        <div className = "ui main"style = {{marginTop:"1rem"}}>
            <h2>Add Contact</h2> 
            <form className = "ui form">
                <div className = "field">
                    <label>Name</label>
                    <input type="text" placeholder = "Name" />
                </div>
                <div className = "field">
                    <label>Email</label> 
                    <input type="email" placeholder = "Email" />
                </div>
                <button className = "ui button blue">Add</button>
            </form>
        </div>
    );
}

export default AddContact;