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
ms.openlocfilehash: b140c41062e4fea4c1cb1299b23de774963913af
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181284'
---
## 关于拉取 API

拉取请求 API 允许您列出、查看、编辑、创建甚至合并拉取请求。 可通过[问题注释 API](/rest/reference/issues#comments) 管理对拉取请求的注释。

每个拉取请求都是一个议题，但并非每个议题都是拉取请求。 因此，[问题 API](/rest/reference/issues) 中为这两项功能提供了“共享”操作，如操作代理人、标签和里程碑。

### 拉取请求的自定义媒体类型

以下是拉取请求支持的媒体类型。

    application/vnd.github.raw+json
    application/vnd.github.text+json
    application/vnd.github.html+json
    application/vnd.github.full+json
    application/vnd.github.diff
    application/vnd.github.patch

有关详细信息，请参阅“[自定义媒体类型](/rest/overview/media-types)”。

如果 diff 损坏，请联系 {% data variables.contact.contact_support %}。 在您的消息中包括仓库名称和拉取请求 ID。

### 链接关系

拉取请求具有以下可能的链接关系：

名称 | 说明
-----|-----------|
`self`| 此拉取请求的 API 位置。
`html`| 此拉取请求的 HTML 位置。
`issue`| 此拉取请求的[问题](/rest/reference/issues)的 API 位置。
`comments`| 此拉取请求的[问题注释](/rest/reference/issues#comments)的 API 位置。
`review_comments`| 此拉取请求的[评审注释](/rest/reference/pulls#comments)的 API 位置。
`review_comment`| 用于为此拉取请求存储库中的[评审注释](/rest#hypermedia)构造 API 位置的 [URL 模板](/rest/reference/pulls#comments)。
`commits`|此拉取请求的[注释](#list-commits-on-a-pull-request)的 API 位置。
`statuses`| 此拉取请求的[提交状态](/rest/reference/commits#commit-statuses)的 API 位置，即其 `head` 分支的状态。
