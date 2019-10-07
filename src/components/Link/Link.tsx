import React from 'react';
import {Link as GatsbyLink} from 'gatsby';

import styles from './Link.module.scss';
import {classNames} from '../../components/utils/classNames';

interface Props {
  to: string;
  unstyled?: boolean;
  secondaryFont?: boolean;
  animated?: boolean;
  className?: string;
  aTag?: boolean;
}

interface State {}

export default class Link extends React.PureComponent<Props & State> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      to,
      animated,
      secondaryFont,
      unstyled,
      children,
      aTag,
      className: classNameProp,
    } = this.props;

    const className = classNames(
      classNameProp,
      styles.Link,
      unstyled && styles.unstyled,
      animated && styles.animated,
      secondaryFont && styles.secondaryFont,
    );

    const tagMarkup = aTag ? (
      <a href={to}>{children}</a>
    ) : (
      <GatsbyLink to={to}>{children}</GatsbyLink>
    );

    return <span className={className}>{tagMarkup}</span>;
  }
}
