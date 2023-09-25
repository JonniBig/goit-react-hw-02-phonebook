import React, { Component } from 'react';
import css from './ContactForm.module.scss';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.formContainer} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Name"
          required
          className={css.formInput}
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          placeholder="Number"
          required
          className={css.formInput}
        />
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
