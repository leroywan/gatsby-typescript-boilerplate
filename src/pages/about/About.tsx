import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import styles from './About.module.scss';
import {Text, Page, Decor, Theme} from '../../components';

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

export default class About extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <Page title="About">
        <Page.Layout>
          <Page.Section>This is the About page.</Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
