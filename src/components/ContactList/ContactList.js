import { Component } from "react";
import { ContactListItem } from "./ContactListItem";
import s from "./ContactList.module.css";
export class ContactList extends Component {
  render() {
    const { list, onDeleteContact } = this.props;
    return (
      <ul className={s.list}>
        {list.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}
