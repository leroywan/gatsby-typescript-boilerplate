import React from 'react';

import styles from './Footer.module.scss';
import {Grid, Text} from '../../../../../../components';

export interface Props {}

type State = {};
type ComposedProps = Props;

export default class Footer extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <footer className={styles.Footer}>
        <Grid>
          <Grid.ScreenWidth>
            <div className={styles.FooterGrid} />
          </Grid.ScreenWidth>
        </Grid>
        <div className={styles.Copyright}>
          <Grid>
            <Grid.ScreenWidth>
              <Text size="subscript">
                Copyright © {new Date().getFullYear()} Company name
              </Text>
            </Grid.ScreenWidth>
          </Grid>
        </div>
      </footer>
    );
  }
}
