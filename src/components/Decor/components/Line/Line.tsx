import React from 'react';

import styles from './Line.module.scss';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Line extends React.PureComponent<ComposedProps, State> {
  render() {
    return <div className={styles.Line} />;
  }
}
