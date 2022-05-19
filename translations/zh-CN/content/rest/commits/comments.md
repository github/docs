---
title: 提交注释
intro: 提交评论 API 允许您创建和编辑与特定提交相关的评论。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## 关于提交评论 API

提交评论 API 允许您创建和编辑与特定提交相关的评论。

### 提交评论的自定义媒体类型

以下是提交评论支持的媒体类型。 您可以在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

更多信息请参阅“[自定义媒体类型](/rest/overview/media-types)”。
