import userImage from '../image/user.png';

const ContactCard = (props) => {
    return (
        <div className = "item" style = {{borderBottom:"0.5px solid black"}} style = {{padding : "10px 0"}}>
            <img className = "ui avatar image" src = {userImage} />
            <div className = "content" >
                <div className = "header" >{props.contact.name}</div>
                <div style = {{marginBottom : "1rem"}}>{props.contact.email}</div>
            </div>
            <i className = "trash alternate outline icon" style = {{color : "red", cursor:"pointer"}}></i>
        </div>

    );
}
// 
export default ContactCard;