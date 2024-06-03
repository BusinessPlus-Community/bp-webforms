import type { Meta, StoryObj } from '@storybook/react'
import { within, expect } from '@storybook/test'

import { App } from './app'

const meta: Meta<typeof App> = {
  component: App,
  title: 'App',
}
export default meta
type Story = StoryObj<typeof App>

export const Primary: Story = {
  args: {},
  /* eslint-disable-next-line @typescript-eslint/require-await */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Welcome to App!/gi)).toBeTruthy()
  },
}
