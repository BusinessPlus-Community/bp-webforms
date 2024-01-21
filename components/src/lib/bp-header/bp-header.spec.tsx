import { render } from '@testing-library/react';

import Components from './bp-header';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components />);
    expect(baseElement).toBeTruthy();
  });
});
