import { render } from '@testing-library/react'

import Loading from './'

describe('Loading', () => {
  it('should render the loading component', () => {
    const { container } = render(<Loading />)
    const loadingElement = container.getElementsByClassName('lds-ellipsis')

    expect(loadingElement).toBeInTheDocument
  })
})
