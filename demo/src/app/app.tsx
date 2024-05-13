import classNames from 'classnames'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import { BpHeader, BpWebformLayout } from '@bplus-community/webform-components'

import 'bootstrap-icons/font/bootstrap-icons.css'
import '@bplus-community/webform-styles'

export const App = () => {
  return (
    <>
      <BpHeader
        imgSrc='/assets/logo.png'
        imgHeight={60}
        headerText='BusinessPlus Community Demonstration Webform'
      />
      <BpWebformLayout>
        <Form>
          <Row className={classNames('g-3', 'mb-3')}>
            <Col>
              <Form.Label>Input 1</Form.Label>
              <Form.Control />
            </Col>
            <Col>
              <Form.Label>Input 2</Form.Label>
              <Form.Control />
            </Col>
            <Col>
              <Form.Label>Input 3</Form.Label>
              <Form.Control />
            </Col>
            <Col>
              <Form.Label>Input 4</Form.Label>
              <Form.Control />
            </Col>
          </Row>
          <Row
            className={classNames(
              'g-3',
              'mb-3',
              'justify-content-evenly',
              'text-center',
            )}
          >
            <Col xs={4} className={classNames('mx-3', 'g-3')}>
              <Button type='reset' style={{ background: 'var(--bs-accent1)' }}>
                <i className={classNames('bi', 'bi-arrow-repeat')} />
                &nbsp;&nbsp;Reset
              </Button>
            </Col>
            <Col xs={4} className={classNames('mx-3')}>
              <Button type='submit' variant='secondary'>
                <i className={classNames('bi', 'bi-send-fill')} />
                &nbsp;&nbsp;Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </BpWebformLayout>
    </>
  )
}

export default App
