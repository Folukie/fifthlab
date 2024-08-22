import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { toggleState } from '@/features/user'
import { useAppDispatch } from '../hooks'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ToggleButton() {
  const dispatch = useAppDispatch()
  const [enabled, setEnabled] = useState<boolean | any>(true)

  useEffect(() => {
    dispatch(toggleState(enabled))
  }, [enabled])

  return (
    <div className="flex items-center md:justify-between gap-2">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-[#BFE4E8]' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#BFE4E8] focus:ring-offset-2',
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[white] shadow ring-0 transition duration-200 ease-in-out',
          )}
        />
      </Switch>
      <p className="text-[#2EBCB5]">Show Country</p>
    </div>
  )
}
