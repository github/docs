import React from 'react'

type Props = {
  children: React.ReactElement
}
export function PrintAction({ children }: Props) {
  const onClick = () => {
    try {
      document.execCommand('print', false)
    } catch (e) {
      window.print()
    }
  }

  return React.cloneElement(React.Children.only(children), { onClick })
}
