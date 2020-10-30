| 名称           | 类型    | 描述                                                                   |
| ------------ | ----- | -------------------------------------------------------------------- |
| `id`         | `整数`  | The unique identifier of the event.                                  |
| `node_id`    | `字符串` | The [Global Node ID](/v4/guides/using-global-node-ids) of the event. |
| `url`        | `字符串` | The REST API URL for fetching the event.                             |
| `actor`      | `对象`  | The person who generated the event.                                  |
| `event`      | `字符串` | Identifies the actual type of event that occurred.                   |
| `commit_id`  | `字符串` | The SHA of the commit that referenced this issue.                    |
| `commit_url` | `字符串` | The GitHub REST API link to the commit that referenced this issue.   |
| `created_at` | `字符串` | The timestamp indicating when the event occurred.                    |