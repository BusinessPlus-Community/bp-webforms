import type { Meta, StoryObj } from '@storybook/react';
import { BpHeader } from './bp-header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BpHeader> = {
  component: BpHeader,
  title: 'BpHeader',
};
export default meta;
type Story = StoryObj<typeof BpHeader>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BpHeader!/gi)).toBeTruthy();
  },
};
