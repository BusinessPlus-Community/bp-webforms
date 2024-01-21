import {Layout, Menu, theme } from 'antd'
import styles from './components.module.scss';

/* eslint-disable-next-line */
export interface BpHeaderProps {}

export function Components(props: BpHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Components!</h1>
    </div>
  );
}

export default Components;
