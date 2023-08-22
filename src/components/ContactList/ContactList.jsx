import React from 'react';
import propTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onRemoveContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // delete contact
          <Button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </Button>
        }
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
  onRemoveContact: propTypes.func.isRequired,
};

export default ContactList;
