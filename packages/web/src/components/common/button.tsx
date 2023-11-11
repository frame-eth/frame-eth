import cx from 'classnames'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'btn-primary focus:ring-primary',
  secondary: 'btn-secondary focus:ring-secondary',
  accent: 'btn-accent focus:ring-accent',
  neutral: 'btn-neutral focus:ring-neutral',
  info: 'btn-info focus:ring-info',
  success: 'btn-success focus:ring-success',
  warning: 'btn-warning focus:ring-warning',
  error: 'btn-error focus:ring-error',
}

const sizeClassName = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const variantClassName = {
  none: '',
  wide: 'btn-wide',
  block: 'btn-block',
  circle: 'btn-circle',
  square: 'btn-square',
}

interface Props {
  title: string
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  variant?: keyof typeof variantClassName
  icon?: ReactNode
  isActive?: boolean
  className?: string
  onClick?: () => void
}

const Button: FC<Props> = ({
  title,
  color = 'primary',
  size = 'md',
  variant = 'none',
  icon,
  isActive,
  className,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        cx(
          `flex items-center gap-2 btn`,
          { [colorClassName[color]]: color },
          { [sizeClassName[size]]: size },
          { [variantClassName[variant]]: variant },
          { 'btn-active': isActive },
          { 'btn-disabled': !isActive },
          className
        )
      )}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  )
}

export default Button
