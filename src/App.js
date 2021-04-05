import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  state = {
    contacts: [],
    filter: '',
  };

  deleteContacts = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);

    const todo = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    const { contacts } = this.state;
    const isExistContacts = !!contacts.find(
      contact => contact.name === data.name,
    );
    !isExistContacts
      ? this.setState(prevState => ({
          contacts: [todo, ...prevState.contacts],
        }))
      : alert(`${data.name} is already in contacts`);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContacts={this.deleteContacts}
          />
        </div>
      </Container>
    );
  }
}

export default App;
