import React from 'react';

import {Page} from '../components';

const NotFoundPage = () => (
  <Page
    title="404"
    description="404 Description"
    keywords={['keywords', 'go', 'here']}
  >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
);

export default NotFoundPage;
