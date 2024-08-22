'use client'
import React, { useEffect, useState } from 'react'
import { FaFemale, FaMale, FaUsers } from 'react-icons/fa'
import Filter from './filter'
import Input from './input'
import { filterUserByGender, getAllUsers, searchByName } from '@/features/user'
import { useAppDispatch } from '../hooks'

const FindUsers = () => {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState<any | undefined>('')

  const filterSearchTerm = (e: any) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    dispatch(searchByName(searchTerm))
  }, [searchTerm, dispatch])

  const getAllUser = () => {
    dispatch(getAllUsers())
  }

  const handleFilterUserByGender = (query: any) => {
    dispatch(filterUserByGender(query))
  }
  return (
    <div className="w-full px-4 lg:px-20 lg:my-20 pt-20 xl:pt-20">
      <h2 className="text-3xl text-white font-thin mb-8">
        Hello, <span className="font-black ">Emerald</span>{' '}
      </h2>
      <p className="text-white font-thin text-sm mb-5">
        Welcome to your dashboard, kindly sort through the user base
      </p>
      <Input
        onChange={filterSearchTerm}
        value={searchTerm}
        name={'user'}
        type={'text'}
        placeholder={'Find a user'}
        cssstyles={
          'h-16 w-full pl-16 rounded-2xl text-xl placeholder:text-[#3f4350] focus:outline-none bg-[#7c808d]'
        }
      />

      <div className="mt-16">
        <h4 className="text-white text-sm ">Show Users</h4>
        <div className="flex lg:flex-row flex-col justify-between items-start gap-3 lg:gap-20">
          <Filter
            query={''}
            getUser={getAllUser}
            filterUser={handleFilterUserByGender}
            name={'All users'}
            icon={<FaUsers size={40} className="text-white" />}
            bgColor="bg-[#F935A9]"
          />
          <Filter
            query={'male'}
            filterUser={handleFilterUserByGender}
            name={'Male users'}
            icon={<FaMale size={40} className="text-white" />}
            bgColor="bg-[#2EBCB5]"
          />
          <Filter
            query={'female'}
            filterUser={handleFilterUserByGender}
            name={'Female users'}
            icon={<FaFemale size={40} className="text-white" />}
            bgColor="bg-[#7846C1]"
          />
        </div>
      </div>
    </div>
  )
}

export default FindUsers
