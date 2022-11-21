import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from "react";
import { ContactList } from './ContactForm/Contact';




export class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  handleNameChange = ev => {
    this.setState({name: ev.currentTarget.value});
  }

  handleSubmit = ev => {
    ev.preventDefault();

    console.log(this.state);

    this.addContacts(this.state.name);

    this.reset();
  }

  reset = () => {
    this.setState({name: ''})
  }

    addContacts = name => {
      console.log(name);

      const contactId = nanoid(10);

      const contact = {
        contactId,
        name,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit}>
      <label> Name
      <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </label>
      <button type="submit">Add contacts</button>
    </form>
    <h2>Contacts</h2>
    <ContactList contacts={contacts}/>
    </div>
    )
  }
}


// App.propTypes = {
//   state: PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   })
// }