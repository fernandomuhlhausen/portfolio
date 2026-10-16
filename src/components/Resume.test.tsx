import { render, screen } from '@testing-library/react'
import Resume from './Resume'

test('renders the curated resume section', () => {
  render(<Resume />)
  expect(document.querySelector('section#curriculo')).not.toBeNull()
  expect(
    screen.getByText('IFSC — Instituto Federal de Santa Catarina'),
  ).toBeInTheDocument()
})

test('lists core technical skills', () => {
  render(<Resume />)
  expect(screen.getByText('Three.js')).toBeInTheDocument()
  expect(screen.getByText('TypeScript')).toBeInTheDocument()
})

test('shows at most two curated experiences including Mahalo Foods', () => {
  render(<Resume />)
  expect(screen.getByText(/Mahalo Foods/)).toBeInTheDocument()
  // curadoria: experiências não-técnicas antigas ficam fora da página
  expect(screen.queryByText(/LVC LOG/)).not.toBeInTheDocument()
  expect(screen.queryByText(/Karsten/)).not.toBeInTheDocument()
  expect(screen.queryByText(/Brubring/)).not.toBeInTheDocument()
})
