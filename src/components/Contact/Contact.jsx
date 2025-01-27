import s from "./Contact.module.css";
import { BiSolidUser } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

const Contact = ({name, number}) => {
    return (
        <div className={s.container}>
            <div>
                <p className={s.text}><span className={s.icon}><BiSolidUser /></span>{name}</p>
                <p className={s.text}><span className={s.icon}><FaPhone /></span>{number}</p>
            </div>
            <button type="button" className={s.btn}>Delete</button>
        </div>
    )
}

export default Contact