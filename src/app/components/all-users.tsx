'use client'

import React, { useEffect, useState } from 'react'
import { MdOutlineCloudDownload } from 'react-icons/md'
import {
  getAllUsers,
  getUserByNationality,
  getUserCSV,
  searchByName,
  userSelector,
} from '@/features/user'
import UsersCard from './users-card'
import Button from './button'
import UserType from '@/types/users'
import Pagination from './pagination'
import { downloadCSV } from '../../utils'
import { useAppDispatch, useAppSelector } from '../hooks'
import FilterHeader from './filter-header'
import UserDetails from './users-details'
import { SkeletonCard } from './loader-skeleton'

const AllUsers = () => {
  const dispatch = useAppDispatch()
  const [pageStep, setPageStep] = useState(0)
  const [userData, setUserData] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(3)
  const [searchTerm, setSearchTerm] = useState<any>('')
  const {
    users,
    filteredUsers,
    response,
    toggleStatus,
    pending,
  } = useAppSelector(userSelector)

  const viewUserDetails = (item: any) => {
    setPageStep((cur) => cur + 1)
    setUserData(item)
  }

  const goBackToList = () => {
    setPageStep((cur) => cur - 1)
  }

  const filterSearchTerm = (e: any) => {
    setSearchTerm(e.target.value)
  }

  const filterByNationality = (e: any) => {
    dispatch(getUserByNationality(e.target.value))
  }

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(searchByName(searchTerm))
  }, [searchTerm, dispatch])

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = filteredUsers?.slice(
    indexOfFirstRecord,
    indexOfLastRecord,
  )
  const nPages = Math.ceil(filteredUsers?.length / recordsPerPage)

  const downloadCSVUsers = () => {
    dispatch(getUserCSV())
    downloadCSV([response], users, 'users record')
  }

  return (
    <div className="bg-[#F7F7FF] h-[90vh] overflow-scroll w-full space-y-10 rounded-[30px] py-10 md:py-16 md:px-10 px-3 mt-20 xl:mt-0 ">
      <FilterHeader
        pageStep={pageStep}
        filterSearchTerm={filterSearchTerm}
        searchTerm={searchTerm}
        filterByNationality={filterByNationality}
      />
      <div
        className={`transition-all duration-300 ease-in-out ${
          pageStep >= 1 ? 'translate-x-[-100%]' : 'translate-x-0'
        }`}
      >
        {pending ? (
          <SkeletonCard />
        ) : (
          <div className="">
            {currentRecords?.map((item: UserType, idx: number) => {
              return (
                <UsersCard
                  key={item.cell}
                  viewUserDetails={viewUserDetails}
                  pageStep={pageStep}
                  item={item}
                  toggleStatus={toggleStatus}
                />
              )
            })}
          </div>
        )}
      </div>

      {pageStep >= 1 && (
        <UserDetails
          goBackToList={goBackToList}
          pageStep={pageStep}
          user={userData}
        />
      )}

      <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between items-center pt-10">
        <Button
          variant={'neutral'}
          icon={<MdOutlineCloudDownload size={25} className="mr-4" />}
          value={'Download Results'}
          disabled={pageStep === 1}
          onClick={() => downloadCSVUsers()}
          className={'flex'}
        />

        <Pagination
          pageStep={pageStep}
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default AllUsers
