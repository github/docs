---
title: Pre-receive Environments
intro: 预接收环境 API 允许您创建、列出、更新和删除预接收挂钩的环境。
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*它只适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)站点管理员。*普通用户尝试访问它时会收到 `404` 响应。

### 对象属性

#### 预接收环境

| 名称                    | 类型    | 描述                                                      |
| --------------------- | ----- | ------------------------------------------------------- |
| `name`                | `字符串` | UI 中显示的环境名称。                                            |
| `image_url`           | `字符串` | 将要下载并解压缩的 tarball 的 URL。                                |
| `default_environment` | `布尔值` | 这是否是 {% data variables.product.product_name %} 附带的默认环境。 |
| `download`            | `对象`  | 此环境的下载状态。                                               |
| `hooks_count`         | `整数`  | 使用此环境的预接收挂钩数量。                                          |

#### 预接收环境下载

| 名称              | 类型    | 描述            |
| --------------- | ----- | ------------- |
| `state`         | `字符串` | 最近下载的状态。      |
| `downloaded_at` | `字符串` | 最近下载开始的时间。    |
| `message`       | `字符串` | 在失败时生成任何错误消息。 |

`state` 的可能值包括 `not_started`、`in_progress`、`success`、`failed`。
