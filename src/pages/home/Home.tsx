import React from 'react';

import {Page} from '../../components';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class Home extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <Page title="Page title">
        <Page.Layout>
          {/* ================================================================================================================= */}
          {/* HERO SECTION */}
          {/* ================================================================================================================= */}
          <Page.Section>This is the homepage.</Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
