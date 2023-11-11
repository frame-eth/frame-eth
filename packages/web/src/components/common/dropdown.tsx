import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import cx from 'classnames'
import { FC, Fragment, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const btnColorClassName = {
  primary: 'btn-primary focus:ring-primary',
  secondary: 'btn-secondary focus:ring-secondary',
  accent: 'btn-accent focus:ring-accent',
  neutral: 'btn-neutral focus:ring-neutral',
  info: 'btn-info focus:ring-info',
  success: 'btn-success focus:ring-success',
  warning: 'btn-warning focus:ring-warning',
  error: 'btn-error focus:ring-error',
}

const colorClassName = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  neutral: 'bg-neutral',
  'base-100': 'bg-base-100',
  'base-200': 'bg-base-200',
  'base-300': 'bg-base-300',
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
}

interface MenuItem {
  content: ReactNode
  onClick: () => void
}

interface Props {
  title: string
  menuItems: MenuItem[]
  color?: keyof typeof btnColorClassName
  bgColor?: keyof typeof colorClassName
  className?: string
}

const Dropdown: FC<Props> = ({
  title,
  menuItems,
  color = 'primary',
  bgColor = 'base-200',
  className,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={twMerge(
            cx(`btn`, { [btnColorClassName[color]]: color }, className)
          )}
        >
          {title}
          <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={twMerge(
            cx(
              `absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10`,
              { [colorClassName[bgColor]]: bgColor }
            )
          )}
        >
          <div className="px-1 py-1">
            {menuItems.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={item.onClick}
                    className={twMerge(
                      cx(
                        `group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`,
                        { [colorClassName[color]]: active },
                        { 'bg-opacity-20': active }
                      )
                    )}
                  >
                    {item.content}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
