import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact id={contact.id} name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;




