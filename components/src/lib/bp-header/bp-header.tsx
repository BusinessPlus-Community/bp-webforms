import styles from './bp-header.module.scss';

/* eslint-disable-next-line */
export interface BpHeaderProps {}

export function BpHeader(props: BpHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BpHeader!</h1>
    </div>
  );
}

export default BpHeader;
