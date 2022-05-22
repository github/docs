| 이름           | 유형        | 설명                                                                        |
| ------------ | --------- | ------------------------------------------------------------------------- |
| `id`         | `integer` | The unique identifier of the event.                                       |
| `node_id`    | `문자열`     | The [Global Node ID](/graphql/guides/using-global-node-ids) of the event. |
| `url`        | `문자열`     | The REST API URL for fetching the event.                                  |
| `actor`      | `개체`      | The person who generated the event.                                       |
| `event`      | `문자열`     | Identifies the actual type of event that occurred.                        |
| `commit_id`  | `문자열`     | The SHA of the commit that referenced this issue.                         |
| `commit_url` | `문자열`     | The GitHub REST API link to the commit that referenced this issue.        |
| `created_at` | `문자열`     | The timestamp indicating when the event occurred.                         |
