import cx from 'classnames'
import { ChangeEvent, FC } from 'react'
import { twMerge } from 'tailwind-merge'

const colorClassName = {
  primary: 'textarea-primary focus:ring-primary',
  secondary: 'textarea-secondary focus:ring-secondary',
  accent: 'textarea-accent focus:ring-accent',
  neutral: 'textarea-neutral focus:ring-neutral',
  info: 'textarea-info focus:ring-info',
  success: 'textarea-success focus:ring-success',
  warning: 'textarea-warning focus:ring-warning',
  error: 'textarea-error focus:ring-error',
}

const sizeClassName = {
  xs: 'textarea-xs',
  sm: 'textarea-sm',
  md: 'textarea-md',
  lg: 'textarea-lg',
}

interface Props {
  title?: string
  placeholder?: string
  isDisabled?: boolean
  value?: string
  color?: keyof typeof colorClassName
  size?: keyof typeof sizeClassName
  trLabel?: string
  blLabel?: string
  brLabel?: string
  className?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<Props> = ({
  title,
  placeholder,
  isDisabled,
  value,
  color = 'primary',
  size = 'md',
  trLabel,
  blLabel,
  brLabel,
  className,
  onChange,
}) => {
  return (
    <div className="form-control">
      {title ||
        (trLabel && (
          <label className="label">
            {title && <span className="label-text">{title}</span>}
            {trLabel && <span className="label-text-alt">{trLabel}</span>}
          </label>
        ))}
      <textarea
        className={twMerge(
          cx(
            `textarea textarea-bordered`,
            { [colorClassName[color]]: color },
            { [sizeClassName[size]]: size },
            className
          )
        )}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={isDisabled}
      ></textarea>
      {(blLabel || brLabel) && (
        <label className="label">
          {blLabel && <span className="label-text-alt">{blLabel}</span>}
          {brLabel && <span className="label-text-alt">{brLabel}</span>}
        </label>
      )}
    </div>
  )
}

export default TextArea
