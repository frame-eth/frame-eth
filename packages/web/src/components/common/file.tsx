import { ArrowUpOnSquareStackIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'
import { ChangeEvent, FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  fileName?: string
  placeholder?: string
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const FileInput: FC<Props> = ({
  fileName,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <label
      className={twMerge(
        cx(
          `flex justify-center items-center gap-2 p-4 border cursor-pointer rounded-xl`,
          className
        )
      )}
    >
      {fileName ? (
        fileName
      ) : (
        <>
          <ArrowUpOnSquareStackIcon className="w-6 h-6" />
          {placeholder}
        </>
      )}

      <input
        className="hidden"
        type="file"
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </label>
  )
}

export default FileInput
