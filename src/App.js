import "./App.css";
import React, { Component } from "react";
import { Section } from "./components/Section/Section";
import { ContactList } from "./components/ContactList/ContactList";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = (item) => {
    const { contacts } = this.state;
    const normalizedName = item.name.toLowerCase();
    contacts.find((el) => {
      return el.name.toLowerCase() === normalizedName;
    })
      ? alert(`${item.name} is already in contacts`)
      : this.changeContacts(item);
  };

  changeContacts = (item) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, item],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { formSubmitHandler, changeFilter } = this;
    const { filter } = this.state;
    return (
      <div className="App">
        <Section title="Phonebook">
          <ContactForm onSubmit={formSubmitHandler} />
          <h1>Contacts</h1>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            list={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
