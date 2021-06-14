import { Tooltip } from '@primer/components'
import { PrinterIcon } from './PrinterIcon'

type Props = {
  children: React.ReactNode
}
export const ArticleTitle = ({ children }: Props) => {
  return (
    <div className="d-flex flex-items-baseline flex-justify-between">
      <h1 className="my-4 border-bottom-0">{children}</h1>
      <div className="d-none d-lg-block ml-2">
        <Tooltip aria-label="Print this article" noDelay direction="n">
          <button
            className="btn-link Link--muted"
            onClick={() => {
              try {
                document.execCommand('print', false)
              } catch (e) {
                window.print()
              }
            }}
          >
            <PrinterIcon />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}
