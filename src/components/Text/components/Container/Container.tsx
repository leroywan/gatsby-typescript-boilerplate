import React from 'react';

import styles from '../../Text.module.scss';
import {classNames, classVariants} from '../../../utils/classNames';

interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
}

type State = {};
type ComposedProps = Props;

export default class Container extends React.PureComponent<
  ComposedProps,
  State
> {
  render() {
    const {children, align} = this.props;

    const className = classNames(
      styles.TextContainer,
      align && styles[classVariants('align', align)],
    );
    return <div className={className}>{children}</div>;
  }
}
