---
title: 拉取
intro: 拉取 API 允许您列出、查看、编辑、创建甚至合并拉取请求。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于拉取 API

拉取请求 API 允许您列出、查看、编辑、创建甚至合并拉取请求。 可以通过[议题评论 API](/rest/reference/issues#comments) 管理对拉取请求的评论。

每个拉取请求都是一个议题，但并非每个议题都是拉取请求。 因此，在[议题 API](/rest/reference/issues) 中为这两项功能提供了“共享”操作，如操作受理人、标签和里程碑。

### 拉取请求的自定义媒体类型

以下是拉取请求支持的媒体类型。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

更多信息请参阅“[自定义媒体类型](/rest/overview/media-types)”。

如果 diff 损坏，请联系 {% data variables.contact.contact_support %}。 在您的消息中包括仓库名称和拉取请求 ID。

### 链接关系

拉取请求具有以下可能的链接关系：

| 名称                | 描述                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `self`            | 此拉取请求的 API 位置。                                                                           |
| `html`            | 此拉取请求的 HTML 位置。                                                                          |
| `议题`              | 此拉取请求的[议题](/rest/reference/issues)的 API 位置。                                              |
| `comments`        | 此拉取请求的[议题评论](/rest/reference/issues#comments)的 API 位置。                                   |
| `review_comments` | 此拉取请求的[审查评论](/rest/reference/pulls#comments)的 API 位置。                                    |
| `review_comment`  | 用于为此拉取请求仓库中的[审查评论](/rest/reference/pulls#comments)构建 API 位置的 [URL 模板](/rest#hypermedia)。 |
| `commits`         | 此拉取请求的[提交](#list-commits-on-a-pull-request)的 API 位置。                                     |
| `状态`              | 此拉取请求的[提交状态](/rest/reference/commits#commit-statuses)的 API 位置，即其`头部`分支的状态。               |
