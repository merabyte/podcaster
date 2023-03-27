import { render } from '@testing-library/react'

import Loading from './'

describe('Loading', () => {
  it('should match snapshot', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })

  it('should render the component', () => {
    const { container } = render(<Loading />)
    const loadingElement = container.querySelector('.blob')

    expect(loadingElement).toBeInTheDocument()
  })
})
