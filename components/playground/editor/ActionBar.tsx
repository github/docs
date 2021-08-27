import { ClippyIcon, CheckIcon } from '@primer/octicons-react'
import { Tooltip } from '@primer/components'

import useClipboard from 'components/hooks/useClipboard'

interface Props {
  code: string
}

export const ActionBar = ({ code }: Props) => {
  const [isCopied, setCopied] = useClipboard(code, {
    successDuration: 1400,
  })

  return (
    <div className="d-flex flex-justify-between flex-items-center color-bg-primary border-left border-top border-right px-3 py-1">
      <div />
      <div className="d-flex">
        {/* <Tooltip aria-label="View repository" className="mr-2">
           <button className="btn-octicon ml-0">
             <EyeIcon />
           </button>
         </Tooltip>
         <Tooltip aria-label="Fork repository" className="mr-2">
           <button className="btn-octicon ml-0">
             <RepoForkedIcon />
           </button>
         </Tooltip> */}
        <Tooltip
          align="right"
          direction="nw"
          aria-label={isCopied ? 'Copied!' : 'Copy to clipboard'}
        >
          <button className="btn-octicon" onClick={() => setCopied()}>
            {isCopied ? <CheckIcon /> : <ClippyIcon />}
          </button>
        </Tooltip>
      </div>
    </div>
  )
}
