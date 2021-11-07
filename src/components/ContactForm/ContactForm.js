import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      id: uuidv4(),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    const nameId = uuidv4();
    const telId = uuidv4();
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor={nameId} className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameId}
        />
        <br />
        <label htmlFor={telId} className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={telId}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
