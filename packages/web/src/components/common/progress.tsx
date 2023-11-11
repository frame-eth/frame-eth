import cx from 'classnames'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'progress-primary focus:ring-primary',
  secondary: 'progress-secondary focus:ring-secondary',
  accent: 'progress-accent focus:ring-accent',
  neutral: 'progress-neutral focus:ring-neutral',
  info: 'progress-info focus:ring-info',
  success: 'progress-success focus:ring-success',
  warning: 'progress-warning focus:ring-warning',
  error: 'progress-error focus:ring-error',
}

interface Props {
  value?: number
  max?: number
  color?: keyof typeof colorClassName
  className?: string
}

const Progress: FC<Props> = ({
  value,
  max = 100,
  color = 'primary',
  className,
}) => {
  return (
    <progress
      className={twMerge(
        cx(`progress`, { [colorClassName[color]]: color }, className)
      )}
      value={value}
      max={max}
    ></progress>
  )
}

export default Progress
