import React from 'react';
import Hyphenate from 'react-hyphen';

import {classNames, classVariants} from '../utils/classNames';
import Container from './components/Container';
import styles from './Text.module.scss';

interface Props {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small' | 'subscript';
  align?: 'left' | 'center' | 'right' | 'justify';
  uppercase?: boolean;
  hyphenated?: boolean;
  color?: string;
  subdued?: boolean;
  spaceUnder?: 'tight' | 'loose' | 'extra-loose';
  italic?: boolean;
  className?: string;
}

type State = {};
type ComposedProps = Props;

function wrapComponentWithTag(
  reactElement: React.ReactNode,
  className: string,
  tag: Props['tag'],
  color: string,
): React.ReactElement {
  const headerClass = classNames(styles.Heading, className);

  let tagMarkup;
  switch (tag) {
    case 'h1':
      tagMarkup = (
        <h1 style={{color}} className={headerClass}>
          {reactElement}
        </h1>
      );
      break;
    case 'h2':
      tagMarkup = (
        <h2 style={{color}} className={headerClass}>
          {reactElement}
        </h2>
      );
      break;
    case 'h3':
      tagMarkup = (
        <h3 style={{color}} className={headerClass}>
          {reactElement}
        </h3>
      );
      break;
    case 'h4':
      tagMarkup = (
        <h4 style={{color}} className={headerClass}>
          {reactElement}
        </h4>
      );
      break;
    case 'h5':
      tagMarkup = (
        <h5 style={{color}} className={headerClass}>
          {reactElement}
        </h5>
      );
      break;
    case 'h6':
      tagMarkup = (
        <h6 style={{color}} className={headerClass}>
          {reactElement}
        </h6>
      );
      break;
    default:
      tagMarkup = (
        <p style={{color}} className={className}>
          {reactElement}
        </p>
      );
      break;
  }

  return tagMarkup;
}

export default class Text extends React.PureComponent<ComposedProps, State> {
  static Container = Container;

  render() {
    const {
      tag,
      uppercase,
      align,
      size,
      color,
      subdued,
      italic,
      hyphenated,
      className,
      children,
    } = this.props;

    const composedClass = classNames(
      styles.Text,
      uppercase && styles.uppercase,
      subdued && styles.subdued,
      italic && styles.italic,
      align && styles[classVariants('align', align)],
      tag && styles[classVariants('tag', tag)],
      size && styles[classVariants('size', size)],
      className,
    );

    const content = wrapComponentWithTag(children, composedClass, tag, color);

    const processedText = hyphenated ? (
      <Hyphenate>{content}</Hyphenate>
    ) : (
      content
    );
    return processedText;
  }
}
