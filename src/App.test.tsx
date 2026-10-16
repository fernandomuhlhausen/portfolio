import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the owner name as the page heading', () => {
  render(<App />)
  expect(screen.getByText('Fernando Muhlhausen')).toBeInTheDocument()
})
