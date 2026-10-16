import { render, screen } from '@testing-library/react'
import Contact from './Contact'

test('renders email, GitHub and X links', () => {
  render(<Contact />)

  const email = screen.getByRole('link', { name: 'Email' })
  expect(email).toHaveAttribute(
    'href',
    'mailto:fernandomuhlhausen@gmail.com',
  )

  const github = screen.getByRole('link', { name: 'GitHub' })
  expect(github).toHaveAttribute(
    'href',
    'https://github.com/fernandomuhlhausen',
  )
  expect(github).toHaveAttribute('target', '_blank')
  expect(github.getAttribute('rel')).toContain('noopener')

  const x = screen.getByRole('link', { name: 'X' })
  expect(x).toHaveAttribute('href', 'https://x.com/FehDev')
  expect(x).toHaveAttribute('target', '_blank')
  expect(x.getAttribute('rel')).toContain('noopener')
})
