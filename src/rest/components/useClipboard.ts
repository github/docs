import { useState, useEffect } from 'react'

interface IOptions {
  /**
   * Reset the status after a certain number of milliseconds. This is useful
   * for showing a temporary success message.
   */
  successDuration?: number
}

export default function useCopyClipboard(
  text: string,
  options?: IOptions,
): [boolean, () => Promise<void>] {
  const [isCopied, setIsCopied] = useState(false)
  const successDuration = options && options.successDuration

  useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false)
      }, successDuration)

      return () => {
        clearTimeout(id)
      }
    }
  }, [isCopied, successDuration])

  return [
    isCopied,
    async () => {
      try {
        await navigator.clipboard.writeText(text)
        setIsCopied(true)
      } catch {
        setIsCopied(false)
      }
    },
  ]
}
