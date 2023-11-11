import cx from 'classnames'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'bg-primary focus:ring-primary',
  secondary: 'bg-secondary focus:ring-secondary',
  accent: 'bg-accent focus:ring-accent',
  neutral: 'bg-neutral focus:ring-neutral',
  'base-100': 'bg-base-100 focus:ring-neutral',
  'base-200': 'bg-base-200 focus:ring-neutral',
  'base-300': 'bg-base-300 focus:ring-neutral',
  info: 'bg-info focus:ring-info',
  success: 'bg-success focus:ring-success',
  warning: 'bg-warning focus:ring-warning',
  error: 'bg-error focus:ring-error',
}

const variantClassName = {
  arrow: 'collapse-arrow',
  plus: 'collapse-plus',
}

interface Props {
  title: string
  color?: keyof typeof colorClassName
  variant?: keyof typeof variantClassName
  className?: string
  children?: ReactNode
}

const Accordion: FC<Props> = ({
  title,
  color = 'base-200',
  variant = 'plus',
  className,
  children,
}) => {
  return (
    <div
      className={twMerge(
        cx(`collapse`, {
          [colorClassName[color]]: color,
          [variantClassName[variant]]: variant,
          className,
        })
      )}
    >
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  )
}

export default Accordion
