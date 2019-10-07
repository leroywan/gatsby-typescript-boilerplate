import React from 'react';

import Select from './components/Select';
import styles from './Input.module.scss';

interface Props {
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
  textarea?: boolean;
}

type State = {};
type ComposedProps = Props;

export default class Input extends React.PureComponent<ComposedProps, State> {
  static Select = Select;

  render() {
    const {
      children,
      name,
      id,
      type = 'text',
      placeholder,
      label,
      textarea,
    } = this.props;

    const labelMarkup = label ? (
      <label className={styles.Label} htmlFor={id}>
        {label}
      </label>
    ) : (
      ''
    );

    const textareaMarkup = (
      <textarea
        className={styles.Textarea}
        id={id}
        name={name}
        placeholder={placeholder}
      >
        {children}
      </textarea>
    );

    const inputMarkup = (
      <input
        className={styles.Input}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
      >
        {children}
      </input>
    );

    const input = textarea ? textareaMarkup : inputMarkup;

    return (
      <div className={styles.InputContainer}>
        {labelMarkup}
        {input}
      </div>
    );
  }
}
