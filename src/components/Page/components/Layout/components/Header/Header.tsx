import React from 'react';

import styles from './Header.module.scss';
import {Grid, List, Link} from '../../../../../../components';

export interface Props {}

type State = {};
type ComposedProps = Props;

export default class Header extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <Grid>
        <Grid.ScreenWidth>
          <header className={styles.Header}>
            <div className={styles.LogoContainer}>
              <Link to="/">Logo</Link>
            </div>
            <nav className={styles.Navigation}>
              <List unstyled>
                <List.Item>
                  <Link to="/about">About</Link>
                </List.Item>
                <List.Item>
                  <Link to="/contact">Contact</Link>
                </List.Item>
              </List>
            </nav>
          </header>
        </Grid.ScreenWidth>
      </Grid>
    );
  }
}
