import React from 'react'

export const SkeletonCard = ({ numberofCards = 3 }) => {
  const skeletonTabArray = new Array(numberofCards)?.fill(0)
  return (
    <div>
      {skeletonTabArray?.map((item, idx) => (
        <div
          key={idx}
          className=" bg-white w-full shadow-auth pt-4 pb-1 px-4 rounded-2xl animate-pulse my-6"
        >
          <div className="mb-6 bg-gray-200 rounded-2xl h-[180px] w-full">
            <div className="flex p-10 space-x-4">
              <div>
                <div className=" bg-gray-300 rounded-full w-32 h-32" />
              </div>
              <div className=" space-y-4 w-full">
                <div className="h-6 bg-gray-300 rounded w-3/6" />
                <div className="h-6 bg-gray-300 rounded w-5/6" />
                <div className="h-6 bg-gray-300 rounded w-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
