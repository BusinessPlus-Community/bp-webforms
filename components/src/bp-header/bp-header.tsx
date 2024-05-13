/* eslint @typescript-eslint/no-unsafe-argument: 0 */
import { forwardRef, memo } from 'react'

import classNames from 'classnames'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import { v4 as uuid } from 'uuid'

export interface BpHeaderProps {
  uniqueId?: string
  className?: string
  imgSrc: string
  imgHeight?: number | string
  headerText?: string
  bgColor?: BackgroundColors
}

export const BACKGROUND_COLORS = [
  'primary',
  'secondary',
  'accent-1',
  'accent-2',
  'accent-3',
] as const

export type BackgroundColors = (typeof BACKGROUND_COLORS)[number]

export const backgroundColor: { [key in BackgroundColors]: string } = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  'accent-1': 'bg-accent1',
  'accent-2': 'bg-accent2',
  'accent-3': 'bg-accent3',
}

export const BpHeader = memo(
  forwardRef<HTMLElement, BpHeaderProps>((props, ref) => {
    const {
      uniqueId = uuid().slice(0, 8),
      imgSrc = '@@Err',
      imgHeight = '40px',
      headerText = '@@Err',
      bgColor = 'primary',
      className,
    } = props

    return (
      <Navbar
        ref={ref}
        variant='dark'
        expand='lg'
        fixed='top'
        className={classNames(
          className,
          backgroundColor[bgColor],
          'bg-gradient',
        )}
        id={`header-navbar-${uniqueId}`}
      >
        <Container fluid='lg'>
          <Navbar.Brand>
            <img
              src={imgSrc}
              alt='District Logo'
              className={classNames('d-inline-block', 'me-auto')}
              height={imgHeight}
            />
            <span
              className={classNames('m-0', 'p-3', 'flex-fill', 'align-middle')}
            >
              {headerText}
            </span>
          </Navbar.Brand>
          <Navbar
            variant='dark'
            className={classNames(
              'navbar-right',
              'navbar-isolate',
              'text-light',
            )}
            style={{ backgroundImage: 'none' }}
          >
            <NavDropdown
              title='UK'
              align='end'
              navbar
              className={classNames('btn-circle', 'no-caret')}
            >
              <NavDropdown.ItemText style={{ width: 'max-content' }}>
                <Row>
                  <Col sm={2}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20'
                      fill='currentColor'
                      className={classNames('bi', 'bi-person-vcard', 'mr-15px')}
                      viewBox='0 0 16 16'
                    >
                      <path d='M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z' />
                      <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z' />
                    </svg>
                  </Col>
                  <Col>
                    <span className={classNames('fs-7')}>UNKNOWN</span>
                  </Col>
                </Row>
              </NavDropdown.ItemText>
              <NavDropdown.Item>
                <Row>
                  <Col sm={2}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20'
                      fill='currentColor'
                      className={classNames(
                        'bi',
                        'bi-box-arrow-right',
                        'mr-15px',
                      )}
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
                      />
                    </svg>
                  </Col>
                  <Col>
                    <span className={classNames('fs-7')}>Sign Out</span>
                  </Col>
                </Row>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar>
        </Container>
      </Navbar>
    )
  }),
)

export default BpHeader
