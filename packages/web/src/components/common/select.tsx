import cx from 'classnames'
import { FC } from 'react'
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

const sizeClassName = {
  xs: 'select-xs',
  sm: 'select-sm',
  md: 'select-md',
  lg: 'select-lg',
}

interface Props {
  title?: string
  options?: string[]
  selected?: string
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  trLabel?: string
  blLabel?: string
  brLabel?: string
  className?: string
  onClick?: (option: string) => void
}

const Select: FC<Props> = ({
  title,
  options,
  selected,
  color = 'primary',
  size = 'md',
  trLabel,
  blLabel,
  brLabel,
  className,
  onClick,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{title}</span>
        {trLabel && <span className="label-text-alt">{trLabel}</span>}
      </label>
      <select
        className={twMerge(
          cx(
            `select select-bordered`,
            { [colorClassName[color]]: color },
            { [sizeClassName[size]]: size },
            className
          )
        )}
      >
        {options?.map((option, index) => {
          return (
            <option
              key={option}
              selected={selected === option}
              disabled={index === 0}
              onClick={onClick ? () => onClick(option) : undefined}
            >
              {option}
            </option>
          )
        })}
      </select>
      {(blLabel || brLabel) && (
        <label className="label">
          {blLabel && <span className="label-text-alt">{blLabel}</span>}
          {brLabel && <span className="label-text-alt">{brLabel}</span>}
        </label>
      )}
    </div>
  )
}

export default Select
