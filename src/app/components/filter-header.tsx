import { Key, useEffect, useState } from 'react'
import { getAllUsers, searchByName } from '@/features/user'
import { countrySelector, getCountries } from '@/features/country'
import { useAppDispatch, useAppSelector } from '../hooks'
import Input from './input'
import ToggleButton from './toggle'

export interface Props {
  pageStep: number
  searchTerm: string
  filterSearchTerm: (e: any) => void
  filterByNationality: (e: any) => void
}

const FilterHeader = ({
  pageStep,
  filterSearchTerm,
  searchTerm,
  filterByNationality,
}: Props) => {
  const dispatch = useAppDispatch()
  const { countries } = useAppSelector(countrySelector)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div>
      <h3 className="text-2xl font-bold ">
        {pageStep === 0 ? 'All Users' : 'User List'}
      </h3>
      <p className="text-sm ">Filter by</p>

      <div className="flex justify-between flex-wrap items-center mt-5 gap-5">
        <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
          <Input
            onChange={filterSearchTerm}
            value={searchTerm}
            name="user"
            type="text"
            placeholder={'Find in List'}
            cssstyles={
              'h-14 md:w-64 w-full pl-16 rounded-full text-lg placeholder:text-[#3f4350] focus:outline-none bg-[#E8E8F1]'
            }
          />

          <select
            name="country"
            id="country"
            className="bg-gray-200 h-14 outline-none max-w-full md:w-44 px-4 text-sm text-gray-500 rounded-full appearance-none pr-10"
            onChange={filterByNationality}
           
          >
            {countries?.map((item: any, idx: Key | null | undefined) => {
              const {
                name: { common },
                cca2,
              } = item
              return (
                <option key={idx} value={cca2}>
                  {common}
                </option>
              )
            })}
          </select>

          <ToggleButton />
        </div>
      </div>
    </div>
  )
}

export default FilterHeader
