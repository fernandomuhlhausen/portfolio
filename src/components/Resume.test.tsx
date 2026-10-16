import { render, screen } from '@testing-library/react'
import Resume from './Resume'

test('renders the curated resume section', () => {
  render(<Resume />)
  expect(document.querySelector('section#curriculo')).not.toBeNull()
  expect(screen.getByText('Ensino médio completo')).toBeInTheDocument()
})

test('lists core technical skills including debugging and testing', () => {
  render(<Resume />)
  expect(screen.getByText('Three.js')).toBeInTheDocument()
  expect(screen.getByText('TypeScript')).toBeInTheDocument()
  expect(screen.getByText('Debugging')).toBeInTheDocument()
  expect(screen.getByText('Testes de software')).toBeInTheDocument()
})

test('shows the current freelance work and drops the old studies', () => {
  render(<Resume />)
  expect(screen.getByText(/Projetos de software e IA/)).toBeInTheDocument()
  expect(screen.queryByText(/IFSC/)).not.toBeInTheDocument()
})

test('shows at most two curated past experiences including Mahalo Foods', () => {
  render(<Resume />)
  expect(screen.getByText(/Mahalo Foods/)).toBeInTheDocument()
  // curadoria: experiências não-técnicas antigas ficam fora da página
  expect(screen.queryByText(/LVC LOG/)).not.toBeInTheDocument()
  expect(screen.queryByText(/Karsten/)).not.toBeInTheDocument()
  expect(screen.queryByText(/Brubring/)).not.toBeInTheDocument()
})
