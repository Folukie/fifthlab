import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md'
import Button from './button'

export interface Props {
  nPages?: number
  currentPage: number
  setCurrentPage: any
  pageStep: number
}

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  pageStep,
}: Props) => {
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  return (
    <div className="flex gap-5">
      <Button
        variant={'secondary'}
        icon={<MdOutlineArrowBackIosNew />}
        disabled={pageStep === 1}
        onClick={() => goToPrevPage()}
        className={'flex'}
      />
      <Button
        variant={'tertiary'}
        icon={<MdOutlineArrowForwardIos />}
        disabled={pageStep === 1}
        onClick={() => goToNextPage()}
        className={'flex '}
      />
    </div>
  )
}

export default Pagination
