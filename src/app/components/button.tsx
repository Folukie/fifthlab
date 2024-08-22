import React, { FC, ReactElement } from 'react'

export interface IProps {
  value?: string | ReactElement
  variant?: 'primary' | 'secondary' | 'neutral' | 'tertiary'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  icon?: ReactElement
  iconTwo?: ReactElement
  isLoading?: boolean
  spinner?: 'white' | 'gray'
  [key: string]: any
}

const buttonStyles = {
  primary: 'bg-[#74D6D0] rounded-xl shadow-xl hover:bg-opacity-90',
  secondary:
    'bg-[#D2D3DA] h-10 w-12 flex justify-center items-center rounded-lg hover:bg-opacity-90',
  neutral:
    'bg-[#7846C1] flex items-center justify-center text-sm font-medium text-white px-5 py-3 rounded-full hover:bg-opacity-90 h-14',
  tertiary:
    'bg-[#262B40] text-white h-10 w-12 flex justify-center items-center rounded-lg hover:bg-opacity-90',
}

const buttonSizes = {
  lg: 'py-4 px-6',
  md: 'py-3 px-5',
  sm: 'py-2 px-4',
  xs: 'py-1 px-1.5',
}

const Button: FC<IProps> = ({
  value = '',
  variant = 'primary',
  size = 'lg',
  icon,
  iconTwo,
  className = '',
  disabled,
  isLoading = false,
  spinner = 'white',
  ...props
}) => {
  const variantClass = buttonStyles[variant]
  const sizeClass = buttonSizes[size]
  const combinedStyles = `${variantClass} ${sizeClass} ${className} disabled:cursor-not-allowed disabled:opacity-50`

  return (
    <button
      data-testid="rob-button"
      className={combinedStyles}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <span data-testid="rob-icon" className="mr-2">
          {icon}
        </span>
      )}
      <span>{value}</span>
      {iconTwo && (
        <span data-testid="rob-icon" className="ml-2">
          {iconTwo}
        </span>
      )}
    </button>
  )
}

export default Button
