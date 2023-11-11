import cx from 'classnames'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  neutral: 'badge-neutral',
  'base-100': 'badge-base-100',
  'base-200': 'badge-base-200',
  'base-300': 'badge-base-300',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
}

const sizeClassName = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
}

interface Props {
  title: string
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  className?: string
}

const Badge: FC<Props> = ({
  title,
  color = 'primary',
  size = 'md',
  className,
}) => {
  return (
    <span
      className={twMerge(
        cx(
          `badge badge-${size} badge-${color}`,
          { [colorClassName[color]]: color },
          { [sizeClassName[size]]: size },
          className
        )
      )}
    >
      {title}
    </span>
  )
}

export default Badge
