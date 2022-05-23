---
title: 拉取请求审查评论
shortTitle: 审查评论
intro: ''
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

## 关于拉取请求审查评论 API

拉取请求审查评论是在拉取请求审查期间对统一差异的一部分所发表的评论。 提交评论和议题评论不同于拉取请求审查评论。 将提交评论直接应用于提交，然后应用议题评论而不引用统一差异的一部分。 更多信息请参阅“[创建提交评论](/rest/reference/commits#create-a-commit-comment)”和“[创建议题评论](/rest/reference/issues#create-an-issue-comment)”。

### 拉取请求审查评论的自定义媒体类型

以下是拉取请求审查评论支持的媒体类型。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

更多信息请参阅“[自定义媒体类型](/rest/overview/media-types)”。
