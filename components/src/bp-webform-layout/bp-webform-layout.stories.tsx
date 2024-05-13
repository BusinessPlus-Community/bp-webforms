import type { Meta, StoryObj } from '@storybook/react'
import classNames from 'classnames'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { BpWebformLayout } from './bp-webform-layout'

const meta: Meta<typeof BpWebformLayout> = {
  component: BpWebformLayout,
  title: 'BpWebformLayout',
}
export default meta
type Story = StoryObj<typeof BpWebformLayout>

export const Layout: Story = {
  render: () => {
    return (
      <BpWebformLayout>
        <Row className={classNames('my-3')}>
          <Col>
            <p className={classNames('text-center')}>
              Example Usage of BpWebformLayout Component
            </p>
          </Col>
        </Row>
      </BpWebformLayout>
    )
  },
}
