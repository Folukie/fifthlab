import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button, { IProps } from '@/app/components/button'

describe('Button Component', () => {
  const defaultProps: IProps = {
    value: 'Click Me',
    variant: 'primary',
    size: 'lg',
    disabled: false,
    isLoading: false,
  }

  it('renders with default props', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByTestId('rob-button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click Me')
    expect(button).toHaveClass('bg-[#74D6D0]', 'py-4', 'px-6')
  })

  it('renders with custom variant and size', () => {
    render(<Button {...defaultProps} variant="neutral" size="md" />)
    const button = screen.getByTestId('rob-button')
    expect(button).toHaveClass('bg-[#7846C1]', 'py-3', 'px-5')
  })

  it('renders with icon', () => {
    const icon = <span>Icon</span>
    render(<Button {...defaultProps} icon={icon} />)
    const iconElement = screen.getByTestId('rob-icon')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveTextContent('Icon')
  })

  it('renders with iconTwo', () => {
    const iconTwo = <span>IconTwo</span>
    render(<Button {...defaultProps} iconTwo={iconTwo} />)
    const iconTwoElement = screen.getByTestId('rob-icon')
    expect(iconTwoElement).toBeInTheDocument()
    expect(iconTwoElement).toHaveTextContent('IconTwo')
  })

  it('is disabled when the disabled prop is true', () => {
    render(<Button {...defaultProps} disabled={true} />)
    const button = screen.getByTestId('rob-button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass(
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
    )
  })
})
