| Name         | Тип       | Description                                                          |
| ------------ | --------- | -------------------------------------------------------------------- |
| `id`         | `integer` | The unique identifier of the event.                                  |
| `node_id`    | `строка`  | The [Global Node ID](/v4/guides/using-global-node-ids) of the event. |
| `url`        | `строка`  | The REST API URL for fetching the event.                             |
| `actor`      | `объект`  | The person who generated the event.                                  |
| `событие`    | `строка`  | Identifies the actual type of event that occurred.                   |
| `commit_id`  | `строка`  | The SHA of the commit that referenced this issue.                    |
| `commit_url` | `строка`  | The GitHub REST API link to the commit that referenced this issue.   |
| `created_at` | `строка`  | The timestamp indicating when the event occurred.                    |
