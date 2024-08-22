import React from 'react'
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa'
import UserType from '@/types/users'
import Image from 'next/image'

export interface Props {
  goBackToList: () => void
  pageStep: number
  user: UserType | any
}

const UserDetails = ({ goBackToList, pageStep, user }: Props) => {
  const {
    name: { first, last },
    location: {
      street: { name, number },
    },
    picture: { large },
    email,
    cell,
    phone,
    dob: { age },
    registered: { date },
  } = user

  return (
    <div
      className={`transition-all duration-300 ease-in-out  ${
        pageStep === 1
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <button
        onClick={goBackToList}
        className="flex items-center uppercase mb-6"
      >
        <FaArrowLeft className="text-[#74D6D0] mr-4" size={20} /> Results
      </button>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
        <Image
          src={large}
          width={200}
          height={200}
          alt={`${first} ${last}`}
          className="rounded-full border-8 border-[#74D6D0]"
        />
        <div className="flex flex-col items-center lg:items-start lg:ml-20">
          <div className="flex items-center mt-3">
            <h3 className="text-2xl font-black mr-4">
              {first} {last}
            </h3>
            <span className="text-2xl font-thin">{age}</span>
          </div>
          <p className="my-2 text-sm font-light italic">
            {number}, {name}
          </p>
          <p className="my-4 flex items-center mr-5 bg-[#D9D9E0] px-4 py-2 rounded-full">
            <MdOutlineMailOutline className="mr-2" size={20} />
            {email}
          </p>
          <p className="my-2 flex items-center bg-[#E5CAE1] px-4 py-2 rounded-full uppercase">
            Joined: {date}
          </p>
          <p className="pt-6 flex items-center ">
            <MdOutlinePhoneInTalk className="mr-2" size={20} />
            {cell}
          </p>
          <p className="my-5 flex items-center mr-10 ">
            <MdOutlinePhoneInTalk className="mr-2" size={20} />
            {phone}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
