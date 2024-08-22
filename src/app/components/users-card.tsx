import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md'
import Button from './button'
import UserType from '@/types/users'
import Image from 'next/image'

export interface Props {
  viewUserDetails: (item: UserType) => void
  pageStep: number
  item: UserType
  toggleStatus?: boolean
}

const UsersCard: React.FC<Props> = ({
  viewUserDetails,
  pageStep,
  item,
  toggleStatus,
}) => {
  const {
    name: { first, last },
    location: {
      street: { name, number },
      country,
    },
    picture: { large },
    email,
    cell,
  } = item

  const handleUserClick = () => {
    viewUserDetails(item)
  }

  if (pageStep !== 0) {
    return null
  }
  console.log(item, 'item')

  return (
    <section className="bg-white w-full px-6 py-10 rounded-xl shadow-xl my-10">
      <div className="flex  space-x-3 flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
        <Image
          src={large}
          width={100}
          height={100}
          alt={`${first} ${last}`}
          className="rounded-full border-8 border-[#74D6D0]"
        />
        <div className="flex flex-col items-center lg:items-start space-y-4 w-full ">
          <div>
            <h3 className="text-xl font-bold">
              {first} {last}
            </h3>
            <p className=" text-lg font-light italic">
              {number}, {name}
              {toggleStatus && <span>, {country}</span>}
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full space-x-0 md:space-x-3 gap-3 lg:gap-0">
            <p className="flex items-center text-sm">
              <MdOutlineMailOutline size={20} className="mr-2" />
              {email}
            </p>
            <p className="flex items-center text-sm">
              <MdOutlinePhoneInTalk size={20} className="mr-2" />
              {cell}
            </p>
          </div>
        </div>

        <div className="shadow-sm rounded-lg">
          <Button
            iconTwo={<FaArrowRight className="text-white " size={20} />}
            onClick={handleUserClick}
            className="flex mt-5"
          />
        </div>
      </div>
    </section>
  )
}

export default UsersCard
