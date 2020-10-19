| 名称           | 类型    | 描述                                                                   |
| ------------ | ----- | -------------------------------------------------------------------- |
| `id`         | `整数`  | The unique identifier of the event.                                  |
| `node_id`    | `字符串` | The [Global Node ID](/v4/guides/using-global-node-ids) of the event. |
| `url`        | `字符串` | 用于提取事件的 REST API URL。                                                |
| `actor`      | `对象`  | The person who generated the event.                                  |
| `event`      | `字符串` | 识别所发生事件的实际类型。                                                        |
| `commit_id`  | `字符串` | 引用此议题的提交的 SHA。                                                       |
| `commit_url` | `字符串` | 指向引用此议题的提交的 GitHub REST API 链接。                                      |
| `created_at` | `字符串` | 指示事件发生时间的时间戳。                                                        |
