import cx from 'classnames'
import { ChangeEvent, FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'input-primary focus:ring-primary',
  secondary: 'input-secondary focus:ring-secondary',
  accent: 'input-accent focus:ring-accent',
  neutral: 'input-neutral focus:ring-neutral',
  info: 'input-info focus:ring-info',
  success: 'input-success focus:ring-success',
  warning: 'input-warning focus:ring-warning',
  error: 'input-error focus:ring-error',
}

const sizeClassName = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
}

interface Props {
  placeholder?: string
  value?: string
  defaultValue?: string
  readOnly?: boolean
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  tlLabel?: string
  trLabel?: string
  blLabel?: string
  brLabel?: string
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({
  placeholder,
  value,
  defaultValue,
  readOnly,
  color = 'primary',
  size = 'md',
  tlLabel,
  trLabel,
  blLabel,
  brLabel,
  className,
  onChange,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      {tlLabel ||
        (trLabel && (
          <label className="label">
            {tlLabel && <span className="label-text">{tlLabel}</span>}
            {trLabel && <span className="label-text-alt">{trLabel}</span>}
          </label>
        ))}
      <input
        type="text"
        placeholder={placeholder}
        className={twMerge(
          cx(
            `input input-bordered w-full max-w-xs`,
            { [colorClassName[color]]: color },
            { [sizeClassName[size]]: size },
            className
          )
        )}
        value={value}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onChange={onChange}
      />
      {blLabel ||
        (brLabel && (
          <label className="label">
            {blLabel && <span className="label-text-alt">{blLabel}</span>}
            {brLabel && <span className="label-text-alt">{brLabel}</span>}
          </label>
        ))}
    </div>
  )
}

export default Input
