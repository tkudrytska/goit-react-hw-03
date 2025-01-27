import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({contacts, onDelete}) => {
    return (
        <div>
            <ul className={s.list}>
                {contacts.map((contact) => {
                    const { name, number, id } = contact;
                    return (
                    <li className={s.item} key={id}>
                        <Contact name={name} number={number} id={id} onDelete={onDelete} />
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default ContactList