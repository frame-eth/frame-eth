import cx from 'classnames'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'checkbox-primary focus:ring-primary',
  secondary: 'checkbox-secondary focus:ring-secondary',
  accent: 'checkbox-accent focus:ring-accent',
  neutral: 'checkbox-neutral focus:ring-neutral',
  info: 'checkbox-info focus:ring-info',
  success: 'checkbox-success focus:ring-success',
  warning: 'checkbox-warning focus:ring-warning',
  error: 'checkbox-error focus:ring-error',
}

const sizeClassName = {
  xs: 'checkbox-xs',
  sm: 'checkbox-sm',
  md: 'checkbox-md',
  lg: 'checkbox-lg',
}

interface Props {
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  className?: string
}

const Checkbox: FC<Props> = ({ color = 'primary', size = 'md', className }) => {
  return (
    <input
      type="checkbox"
      className={twMerge(
        cx(
          `checkbox`,
          { [colorClassName[color]]: color },
          { [sizeClassName[size]]: size },
          className
        )
      )}
    />
  )
}

export default Checkbox
