import { Component } from "react";
import s from "./ContactList.module.css";
export class ContactListItem extends Component {
  render() {
    const { name, number, id, onDeleteContact } = this.props;
    return (
      <li className={s.listItem}>
        <span className={s.span}>{name}:</span>
        <span className={s.span}>{number}:</span>
        <button
          className={s.button}
          type="button"
          id={id}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
