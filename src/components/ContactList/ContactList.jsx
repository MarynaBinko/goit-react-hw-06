import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css"

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact id={contact.id} name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;




