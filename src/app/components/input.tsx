import React, { FC, ReactElement } from 'react'
import { SlMagnifier } from 'react-icons/sl'

export interface InputProps {
  name: string
  type: string
  label?: string
  icon?: ReactElement
  placeholder?: string
  cssstyles?: string
  [key: string]: any
}

const Input: FC<InputProps> = ({
  name,
  type = 'text',
  label,
  placeholder,
  icon,
  cssstyles,
  ...props
}) => {
  return (
    <div className="relative">
      <SlMagnifier
        className="absolute top-5 left-5 "
        size={20}
        data-testid="rob-input-icon"
      />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${cssstyles} placeholder:text-base`}
        {...props}
      />
    </div>
  )
}

export default Input
