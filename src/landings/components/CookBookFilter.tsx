import { TextInput, ActionMenu, ActionList, Button } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import { useRef, useEffect } from 'react'
import { ArticleCardItems } from '#src/landings/types.ts'

type Props = {
  tokens: ArticleCardItems
  onSearch: (query: string) => void
  isSearchOpen?: boolean
}

export const CookBookFilter = ({ onSearch, isSearchOpen }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus()
    }
  }, [isSearchOpen])

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextInput
            leadingVisual={SearchIcon}
            className="float-lg-left m-1"
            sx={{ minWidth: ['stretch', 'stretch', 'stretch', 250] }}
            placeholder="Search articles"
            ref={inputRef}
            autoComplete="false"
            onChange={(e) => {
              const query = e.target.value || ''
              onSearch(query)
            }}
          />
        </form>
      </div>
      <div className="d-flex">
        <ActionMenu>
          <ActionMenu.Button className="col-md-1 col-sm-2 float-md-left m-1">
            Category
          </ActionMenu.Button>
          <ActionMenu.Overlay width="small">
            <ActionList>
              <ActionList.Item>Item 1</ActionList.Item>
              <ActionList.Item>Item 2</ActionList.Item>
              <ActionList.Item>Item 3</ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>

        <ActionMenu>
          <ActionMenu.Button className="col-md-1 col-sm-2 float-left m-1">
            Complexity
          </ActionMenu.Button>
          <ActionMenu.Overlay width="small">
            <ActionList>
              <ActionList.Item>Item 1</ActionList.Item>
              <ActionList.Item>Item 2</ActionList.Item>
              <ActionList.Item>Item 3</ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>

        <ActionMenu>
          <ActionMenu.Button className="col-md-1 col-sm-2 float-left m-1">
            Industry
          </ActionMenu.Button>
          <ActionMenu.Overlay width="small">
            <ActionList>
              <ActionList.Item>Item 1</ActionList.Item>
              <ActionList.Item>Item 2</ActionList.Item>
              <ActionList.Item>Item 3</ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
        <Button variant="invisible" className="col-md-1 col-sm-2 float-left mt-1">
          Reset filters
        </Button>
      </div>
    </>
  )
}
