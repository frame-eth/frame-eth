import cx from 'classnames'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'radio-primary focus:ring-primary',
  secondary: 'radio-secondary focus:ring-secondary',
  accent: 'radio-accent focus:ring-accent',
  neutral: 'radio-neutral focus:ring-neutral',
  info: 'radio-info focus:ring-info',
  success: 'radio-success focus:ring-success',
  warning: 'radio-warning focus:ring-warning',
  error: 'radio-error focus:ring-error',
}

const sizeClassName = {
  xs: 'radio-xs',
  sm: 'radio-sm',
  md: 'radio-md',
  lg: 'radio-lg',
}

interface Props {
  name?: string
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  isActive?: boolean
  className?: string
}

const Radio: FC<Props> = ({
  name,
  color = 'primary',
  size = 'md',
  isActive,
  className,
}) => {
  return (
    <input
      type="radio"
      name={name}
      className={twMerge(
        cx(
          `radio`,
          { [colorClassName[color]]: color },
          { [sizeClassName[size]]: size },
          className
        )
      )}
      checked={isActive}
    />
  )
}

export default Radio
