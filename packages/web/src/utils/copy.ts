import {
  generateError,
  generateSuccess,
  throwNotification,
} from './notification'

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    throwNotification(generateSuccess('Copied to clipboard!'))
  } catch (err) {
    console.error('Failed to copy text to clipboard: ' + err)
    throwNotification(generateError('Failed to copy text to clipboard!'))
  }
}
