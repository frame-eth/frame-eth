import cx from 'classnames'
import { ChangeEvent, FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'toggle-primary focus:ring-primary',
  secondary: 'toggle-secondary focus:ring-secondary',
  accent: 'toggle-accent focus:ring-accent',
  neutral: 'toggle-neutral focus:ring-neutral',
  info: 'toggle-info focus:ring-info',
  success: 'toggle-success focus:ring-success',
  warning: 'toggle-warning focus:ring-warning',
  error: 'toggle-error focus:ring-error',
}

const sizeClassName = {
  xs: 'toggle-xs',
  sm: 'toggle-sm',
  md: 'toggle-md',
  lg: 'toggle-lg',
}

interface Props {
  isChecked?: boolean
  isDisabled?: boolean
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Toggle: FC<Props> = ({
  isChecked,
  isDisabled,
  color = 'primary',
  size = 'md',
  className,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      className={twMerge(
        cx(
          `toggle`,
          { [colorClassName[color]]: color },
          { [sizeClassName[size]]: size },
          className
        )
      )}
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
  )
}

export default Toggle
