import React from 'react';

import {SeoWrapper} from '..';
import {Layout, Section} from './components';

import styles from './Page.module.scss';

interface NoProps {}

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
  lang?: string;
  disableSiteName?: boolean;
}

type State = {};
type ComposedProps = Props;
export default class Page extends React.PureComponent<ComposedProps, State> {
  static Layout: React.FC<NoProps>;
  static Section: any;
  render() {
    const {
      title,
      description,
      keywords,
      lang,
      disableSiteName,
      children,
    } = this.props;

    return (
      <div className={styles.Page}>
        <SeoWrapper
          title={title}
          description={description}
          keywords={keywords}
          lang={lang}
          disableSiteName={disableSiteName}
        />
        {children}
      </div>
    );
  }
}

Page.Layout = Layout;
Page.Section = Section;
