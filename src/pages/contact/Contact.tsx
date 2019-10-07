import React from 'react';
import styles from './Contact.module.scss';

import {Page, Grid, Input} from '../../components';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Contact extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <Page title="Contact">
        <Page.Layout>
          <Page.Section>
            <Grid>
              <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <Input
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  placeholder="Ex. example@email.com"
                />
                <Input
                  name="name"
                  label="Company / Name"
                  type="text"
                  id="company"
                  placeholder="Ex. Amazon"
                />
                <Input
                  textarea
                  name="message"
                  label="Your Message"
                  type="text"
                  id="message"
                  placeholder="Write your message here"
                />
                <button type="submit" value="Submit">
                  Submit
                </button>
              </form>
            </Grid>
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
