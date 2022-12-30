---
title: 仓库内容
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: 此 API 端点允许您在仓库中创建、修改和删除 Base64 编码的内容。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: fd3619faeb8ccaeaa70e8a2be050881b4a169b64
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181283'
---
## 关于存储库内容 API

要请求原始格式或渲染的 HTML（如果支持），请对仓库内容使用自定义媒体类型。

### 仓库内容的自定义媒体类型

[README](/rest/reference/repos#get-a-repository-readme)、[文件](/rest/reference/repos#get-repository-content)和[符号链接](/rest/reference/repos#get-repository-content)支持以下自定义媒体类型：

    application/vnd.github.raw
    application/vnd.github.html

使用 `.raw` 媒体类型检索文件的内容。

对于 Markdown 或 AsciiDoc 等标记文件，可以使用 `.html` 媒体类型检索呈现的 HTML。 使用我们的开源[标记库](https://github.com/github/markup)将标记语言呈现为 HTML。

[所有对象](/rest/reference/repos#get-repository-content)都支持以下自定义媒体类型：

    application/vnd.github.object

无论内容类型如何，使用 `object` 媒体类型参数以一致的对象格式检索内容。 例如，响应不是目录的对象数组，而是具有包含对象数组的 `entries` 属性的对象。

可在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。
