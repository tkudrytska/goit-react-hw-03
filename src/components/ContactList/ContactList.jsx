import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({contacts}) => {
    return (
        <div>
            <ul className={s.list}>
                {contacts.map((contact) => (
                    <li className={s.item} key={contact.id}>
                        <Contact name={contact.name} number={contact.number} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList