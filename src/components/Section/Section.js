import { Component } from "react";
import s from "./Section.module.css";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}
