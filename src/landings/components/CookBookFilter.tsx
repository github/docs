import { TextInput, ActionMenu, ActionList, Button } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'

export const CookBookFilter = () => {
  return (
    <>
      <div>
        <TextInput
          leadingVisual={SearchIcon}
          className="float-lg-left m-1"
          sx={{ minWidth: ['stretch', 'stretch', 'stretch', 250] }}
          placeholder="Search articles"
        />
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
