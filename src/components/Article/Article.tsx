import React from 'react';
import ReactHtmlParser, {processNodes} from 'react-html-parser';
import cuid from 'cuid';
import LazyLoad from 'react-lazy-load';

import styles from './Article.module.scss';

import {Text, List} from '../../components';

const options = {
  transform,
};

function transform(node) {
  if (node.type === 'tag' && node.name === 'p') {
    return (
      <Text hyphenated key={cuid()}>
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h1') {
    return (
      <Text key={cuid()} tag="h1">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h2') {
    return (
      <Text key={cuid()} tag="h2">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h3') {
    return (
      <Text key={cuid()} tag="h3" size="small" uppercase>
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h4') {
    return (
      <Text key={cuid()} tag="h4">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h5') {
    return (
      <Text key={cuid()} tag="h5">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h6') {
    return (
      <Text key={cuid()} tag="h6">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'ul') {
    return <List>{processNodes(node.children, transform)}</List>;
  }

  if (node.type === 'tag' && node.name === 'li') {
    return <List.Item>{processNodes(node.children, transform)}</List.Item>;
  }

  if (node.type == 'tag' && node.attribs.class != null) {
    const {class: className} = node.attribs;
    if (className.includes('full-width')) {
      return (
        <Article.FullWidth key={cuid()}>
          <LazyLoad key={cuid()} offset={1000}>
            <figure>{processNodes(node.children, transform)}</figure>
          </LazyLoad>
        </Article.FullWidth>
      );
    }

    if (className.includes('wide')) {
      return (
        <Article.Wide key={cuid()}>
          <figure>{processNodes(node.children, transform)}</figure>
        </Article.Wide>
      );
    }
  }
}

export interface Props {
  title?: string;
  date: string;
  html: string;
}

type State = {};
type ComposedProps = Props;

class Article extends React.PureComponent<ComposedProps, State> {
  static FullWidth;
  static Wide;

  render() {
    const {title, date, html} = this.props;
    const markup = ReactHtmlParser(html, options);

    const titleMarkup = title ? (
      <div className={styles.ArticleTitle}>
        <Text tag="h1">{title}</Text>
      </div>
    ) : (
      ''
    );
    return (
      <div className={styles.ArticleContainer}>
        <article className={styles.Article}>
          {titleMarkup}
          {markup}
        </article>
      </div>
    );
  }
}

const FullWidth = ({children}) => (
  <div className={styles.FullWidth}>{children}</div>
);

const Wide = ({children}) => <div className={styles.Wide}>{children}</div>;

Article.FullWidth = FullWidth;
Article.Wide = Wide;
export default Article;
