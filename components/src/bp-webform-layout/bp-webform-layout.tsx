import { ReactElement, forwardRef, memo } from 'react'

import classNames from 'classnames'
import Container from 'react-bootstrap/Container'

// import styles from './bp-webform-layout.module.scss'

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface BpWebformLayoutProps {
  children: ReactElement | ReactElement[]
}

export const BpWebformLayout = memo(
  forwardRef<HTMLDivElement, BpWebformLayoutProps>((props, ref) => {
    const { children } = props

    return (
      <Container>
        <div style={{ marginTop: 80 }} />
        <Container
          fluid='xl'
          ref={ref}
          className={classNames(
            'bg-white',
            'mx-4',
            'my-3',
            'border',
            'border-2',
            'border-dark-subtle',
            'rounded-3',
            'shadow',
            'p-3',
          )}
        >
          {children}
        </Container>
      </Container>
    )
  }),
)

export default BpWebformLayout
