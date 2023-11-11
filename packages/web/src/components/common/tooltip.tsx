import { InformationCircleIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'select-primary focus:ring-primary',
  secondary: 'select-secondary focus:ring-secondary',
  accent: 'select-accent focus:ring-accent',
  neutral: 'select-neutral focus:ring-neutral',
  info: 'select-info focus:ring-info',
  success: 'select-success focus:ring-success',
  warning: 'select-warning focus:ring-warning',
  error: 'select-error focus:ring-error',
}

const variantClassName = {
  top: 'tooltip-open',
  bottom: 'tooltip-bottom',
  left: 'tooltip-left',
  right: 'tooltip-right',
}

interface Props {
  data: string
  icon?: boolean
  color?: keyof typeof colorClassName
  variant?: keyof typeof variantClassName
  className?: string
  children?: ReactNode
}

const Tooltip: FC<Props> = ({
  data,
  icon,
  variant = 'top',
  color = 'primary',
  className,
  children,
}) => {
  return (
    <div
      className={twMerge(
        cx(
          `flex items-center gap-2 tooltip w-fit`,
          { [colorClassName[color]]: color },
          { [variantClassName[variant]]: variant },
          className
        )
      )}
      data-tip={data}
    >
      {icon && <InformationCircleIcon className="h-6 w-6 text-gray-500" />}
      {children}
    </div>
  )
}

export default Tooltip
