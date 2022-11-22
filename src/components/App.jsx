import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';

export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  addContacts = ({name, number}) => {

      const contactId = nanoid(10);

      const contact = {
        id: contactId,
        name,
        number,
      };

      const normalizedName = name.toLowerCase();
      const findedContact = this.state.contacts.find(contact => contact.name.toLowerCase().includes(normalizedName));

      if (findedContact) {
        console.log('alert');
      } else {
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
      };
  };

  changeFilter = ev => {
    this.setState({
      filter: ev.currentTarget.value
    });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter } = this.state;

    const filtredContacts = this.getFiltredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} addContacts={this.addContacts}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={filtredContacts}/>
      </div>
    )
  }
}

App.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })),
    filter: PropTypes.string.isRequired,
  })
};