import type { Meta } from '@storybook/react';
import { v4 as uuid } from 'uuid'

import { BpHeader } from './bp-header'

const Story: Meta<typeof BpHeader> = {
  component: BpHeader,
  title: 'BpHeader',
};
export default Story;

export const Primary = {
  args: {
    uniqueId: uuid().slice(0, 8),
    headerText: 'BP Community Components Header Example',
    imgSrc: './assets/logo-dark.svg',},
}
