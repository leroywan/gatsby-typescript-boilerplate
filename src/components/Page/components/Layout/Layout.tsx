import React from 'react';

import styles from './Layout.module.scss';

import Header from './components/Header';
import Footer from './components/Footer';

export interface Props {}

type State = {};
type ComposedProps = Props;

export default class Layout extends React.PureComponent<ComposedProps, State> {
  render() {
    const {children} = this.props;
    return (
      <div>
        <div className={styles.Header}>
          <Header />
        </div>
        <div className={styles.Content}>{children}</div>
        <div className={styles.Footer}>
          <Footer />
        </div>
      </div>
    );
  }
}
