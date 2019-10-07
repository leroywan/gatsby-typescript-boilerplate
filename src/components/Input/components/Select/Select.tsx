import React from 'react';

import styles from '../../Input.module.scss';

export interface Props {
  name: string;
  id: string;
  label?: string;
}

type State = {};
type ComposedProps = Props;

export default class Select extends React.PureComponent<ComposedProps, State> {
  render() {
    const {name, id, label, children} = this.props;

    const labelMarkup = label ? (
      <label className={styles.Label} htmlFor={id}>
        {label}
      </label>
    ) : (
      ''
    );

    return (
      <div className={styles.InputContainer}>
        {labelMarkup}
        <select
          name={name}
          id={id}
          className={`${styles.Input} ${styles.Select}`}
        >
          {children}
        </select>
      </div>
    );
  }
}
