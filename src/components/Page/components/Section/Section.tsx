import React from 'react';

import styles from './Section.module.scss';

export interface Props {
  bgColor?: string;
}

const Section: React.FC<Props> = ({bgColor, children}) => {
  return (
    <div style={{backgroundColor: bgColor}} className={styles.Section}>
      {children}
    </div>
  );
};

export default Section;
