import React from 'react';

const ContactList = ({ contacts, onDeleteContacts }) =>
  contacts !== [] ? (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: <span>{contact.number}</span>
          <button onClick={() => onDeleteContacts(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
export default ContactList;
