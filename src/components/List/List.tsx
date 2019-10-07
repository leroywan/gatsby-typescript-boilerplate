import React from 'react';

import styles from './List.module.scss';
import {classNames} from '../../components/utils/classNames';

interface Props {
  ordered?: boolean;
  noPadding?: boolean;
  noBullets?: boolean;
  unstyled?: boolean;
  listStyle?: 'disc' | 'circle' | 'square' | 'decimal' | 'lower-roman';
}

type State = {};
type ComposedProps = Props;

export default class List extends React.PureComponent<ComposedProps, State> {
  static Item;

  render() {
    const {
      children,
      ordered,
      noPadding,
      noBullets = false,
      listStyle,
      unstyled,
    } = this.props;

    const className = classNames(
      styles.List,
      noBullets && styles.noBullets,
      noPadding && styles.noPadding,
      ordered && styles.ordered,
      unstyled && styles.unstyled,
    );

    const list = ordered ? (
      <ol style={{listStyleType: listStyle}} className={className}>
        {children}
      </ol>
    ) : (
      <ul style={{listStyleType: listStyle}} className={className}>
        {children}
      </ul>
    );

    return list;
  }
}

const Item = ({children, icon, iconSize}) => {
  const className = classNames(icon && styles.ListItemBullet);
  const iconSizeStyle = iconSize ? iconSize : '';
  const iconMarkup = icon ? (
    <span style={{fontSize: iconSizeStyle}} className={className}>
      {icon}
    </span>
  ) : (
    ''
  );
  return (
    <li className={styles.ListItem}>
      {iconMarkup}
      {children}
    </li>
  );
};

List.Item = Item;
