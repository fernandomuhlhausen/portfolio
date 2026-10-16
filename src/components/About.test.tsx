import { render, screen } from '@testing-library/react'
import About from './About'

test('renders the about section with IFSC mention', () => {
  render(<About />)
  expect(document.querySelector('section#sobre')).not.toBeNull()
  expect(screen.getByText(/IFSC/)).toBeInTheDocument()
})
