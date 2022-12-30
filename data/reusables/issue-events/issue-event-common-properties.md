Name | Type | Description
-----|------|--------------
`id` | `integer` | The unique identifier of the event.
`node_id` | `string` | The [Global Node ID](/graphql/guides/using-global-node-ids) of the event.
`url`| `string` | The REST API URL for fetching the event.
`actor` | `object`| The person who generated the event.
`event` | `string` | Identifies the actual type of event that occurred.
`commit_id` | `string` | The SHA of the commit that referenced this issue.
`commit_url` | `string` | The GitHub REST API link to the commit that referenced this issue.
`created_at` | `string` | The timestamp indicating when the event occurred.
