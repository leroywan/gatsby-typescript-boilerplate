import React from 'react';

import {classNames, classVariants} from '../utils/classNames';
import styles from './Heading.module.scss';

interface Props {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  uppercase?: boolean;
  center?: boolean;
  spaceUnder?: 'tight' | 'loose' | 'extra-loose';
}

type State = {};
type ComposedProps = Props;

export default class Heading extends React.PureComponent<ComposedProps, State> {
  render() {
    const {tag, uppercase, center, spaceUnder, children} = this.props;

    const propsToClassNameMap = {
      uppercase: 'UpperCase',
      center: 'Center',
      tag: {
        h1: 'Heading1',
        h2: 'Heading2',
        h3: 'Heading3',
        h4: 'Heading4',
        h5: 'Heading5',
        h6: 'Heading6',
      },
      spaceUnder: {
        tight: 'SpaceUnderTight',
        loose: 'SpaceUnderLoose',
        extraLoose: 'SpaceUnderExtraLoose',
      },
    };

    const composedClass = classNames(
      styles.Heading,
      uppercase && styles.uppercase,
      center && styles.center,
      tag && classVariants('tag', tag),
      spaceUnder && classVariants('spaceUnder', spaceUnder),
    );

    let tagMarkup;
    switch (tag) {
      case 'h1':
        tagMarkup = <h1 className={composedClass}>{children}</h1>;
        break;
      case 'h2':
        tagMarkup = <h2 className={composedClass}>{children}</h2>;
        break;
      case 'h3':
        tagMarkup = <h3 className={composedClass}>{children}</h3>;
        break;
      case 'h4':
        tagMarkup = <h4 className={composedClass}>{children}</h4>;
        break;
      case 'h5':
        tagMarkup = <h5 className={composedClass}>{children}</h5>;
        break;
      case 'h6':
        tagMarkup = <h6 className={composedClass}>{children}</h6>;
        break;
      default:
        tagMarkup = <h2 className={composedClass}>{children}</h2>;
        break;
    }

    return tagMarkup;
  }
}
