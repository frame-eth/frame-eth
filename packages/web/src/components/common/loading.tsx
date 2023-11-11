import cx from 'classnames'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'text-primary focus:ring-primary',
  secondary: 'text-secondary focus:ring-secondary',
  accent: 'text-accent focus:ring-accent',
  neutral: 'text-neutral focus:ring-neutral',
  info: 'text-info focus:ring-info',
  success: 'text-success focus:ring-success',
  warning: 'text-warning focus:ring-warning',
  error: 'text-error focus:ring-error',
}

const sizeClassName = {
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
}

const variantClassName = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
}

interface Props {
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  variant?: keyof typeof variantClassName
  className?: string
}

const Loading: FC<Props> = ({
  color = 'primary',
  size = 'md',
  variant = 'spinner',
  className,
}) => {
  return (
    <span
      className={twMerge(
        cx(
          `loading`,
          { [colorClassName[color]]: color },
          { [sizeClassName[size]]: size },
          { [variantClassName[variant]]: variant },
          className
        )
      )}
    ></span>
  )
}

export default Loading
