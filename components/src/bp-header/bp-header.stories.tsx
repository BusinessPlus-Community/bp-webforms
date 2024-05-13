import type { Meta, StoryObj } from '@storybook/react'
import { within, expect } from '@storybook/test'

import { BpHeader } from './bp-header'

const meta: Meta<typeof BpHeader> = {
  component: BpHeader,
  title: 'BpHeader',
}
export default meta
type Story = StoryObj<typeof BpHeader>

export const ColorPrimary: Story = {
  args: {
    imgSrc: '/assets/logo.png',
    headerText: 'BP Community Components Header Example',
    imgHeight: 60,
  },
  /* eslint-disable-next-line @typescript-eslint/require-await */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText(/BP Community Components Header Example/i),
    ).toBeTruthy()
  },
}

export const ColorSecondary: Story = {
  args: {
    imgSrc: '/assets/logo.png',
    headerText: 'BP Community Components Header Example',
    imgHeight: 60,
    bgColor: 'secondary',
  },
  /* eslint-disable-next-line @typescript-eslint/require-await */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText(/BP Community Components Header Example/i),
    ).toBeTruthy()
  },
}

export const ColorAccent1: Story = {
  args: {
    imgSrc: '/assets/logo.png',
    headerText: 'BP Community Components Header Example',
    imgHeight: 60,
    bgColor: 'accent-1',
  },
  /* eslint-disable-next-line @typescript-eslint/require-await */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText(/BP Community Components Header Example/i),
    ).toBeTruthy()
  },
}

export const ColorAccent2: Story = {
  args: {
    imgSrc: '/assets/logo.png',
    headerText: 'BP Community Components Header Example',
    imgHeight: 60,
    bgColor: 'accent-2',
  },
  /* eslint-disable-next-line @typescript-eslint/require-await */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText(/BP Community Components Header Example/i),
    ).toBeTruthy()
  },
}

export const ColorAccent3: Story = {
  args: {
    imgSrc: '/assets/logo.png',
    headerText: 'BP Community Components Header Example',
    imgHeight: 60,
    bgColor: 'accent-3',
  },
  /* eslint-disable-next-line @typescript-eslint/require-await */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText(/BP Community Components Header Example/i),
    ).toBeTruthy()
  },
}
