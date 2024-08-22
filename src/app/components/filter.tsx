import React, { ReactElement } from 'react'

export interface FilterProps {
  name: string
  icon: ReactElement
  bgColor: string
  query: string
  filterUser?: any
  getUser?: any
}

const Filter = ({
  name,
  icon,
  bgColor,
  query,
  filterUser,
  getUser,
}: FilterProps) => {
  const handleClick = () => {
    filterUser(query)
    if (!query) getUser()
  }

  return (
    <div className={`flex flex-col w-full`}>
      <button
        onClick={handleClick}
        className={`w-28 h-24 mt-5 ${bgColor} flex items-center justify-center rounded-3xl shadow-xl`}
      >
        {icon && icon}
      </button>
      <p className="lg:text-center mt-5 text-white font-thin text-xs">{name}</p>
    </div>
  )
}

export default Filter
