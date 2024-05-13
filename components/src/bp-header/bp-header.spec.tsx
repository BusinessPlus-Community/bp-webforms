import { render } from '@testing-library/react'

import { BpHeader } from './bp-header'

describe('BpHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BpHeader imgSrc='' imgHeight='' headerText='' bgColor='primary' />,
    )
    expect(baseElement).toBeTruthy()
  })
})
