import React from 'react';
import type {
  FC,
  ButtonHTMLAttributes,
} from 'react';

import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  return (
    <button
      className={styles.Button}
      {...props}
    />
  );
};

export default Button;
