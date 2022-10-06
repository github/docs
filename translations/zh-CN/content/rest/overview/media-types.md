---
title: 媒体类型
intro: 了解用于指定要使用的数据格式的媒体类型。
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681123'
---
自定义媒体类型在 API 中用于让使用者选择他们想要接收的数据格式。 可在发出请求时将以下一种或多种类型添加到 `Accept` 标头来实现此功能。 媒体类型特定于资源，允许它们独立更改并支持其他资源不支持的格式。

所有 {% data variables.product.product_name %} 媒体类型如下所示：

    application/vnd.github.param[+json]

API 支持的最基本媒体类型是：

    application/vnd.github+json
    application/json

{% note %}

注意：过去，我们建议在 `Accept` 标头中包含 `v3`。 现在不再需要此操作，对你的 API 请求没有影响。

{% endnote %}

如果要指定属性（例如下面定义的 full/raw 等），请将它放在 `github` 之后：

    application/vnd.github.raw+json

## 注释正文属性

注释正文可采用 [GitHub Flavored Markdown][gfm] 格式，[问题](/rest/reference/issues)、[问题注释](/rest/reference/issues#comments)、[拉取请求注释](/rest/reference/pulls#comments)和 [gist 注释](/rest/reference/gists#comments) API 都接受这些相同的媒体类型：

### 原始

    application/vnd.github.raw+json

返回原始 Markdown 正文。 响应将包括 `body`。 这是在不传递任何特定媒体类型时的默认值。

### 文本

    application/vnd.github.text+json

返回 Markdown 正文的纯文本表示形式。 响应将包括 `body_text`。

### HTML

    application/vnd.github.html+json

返回从正文的 Markdown 中渲染的 HTML。 响应将包括 `body_html`。

### 完全

    application/vnd.github.full+json

返回 raw、text 和 HTML 表示形式。 响应将包括 `body`、`body_text` 和 `body_html`：

## Git blob 属性

[获取 Blob](/rest/reference/git#get-a-blob) 时，可使用以下媒体类型：

### JSON

    application/vnd.github+json
    application/json

返回 Blob 的 JSON 表示形式，`content` 为 base64 编码的字符串。 这是在未传递任何参数时的默认值。

### 原始

    application/vnd.github.raw

返回原始 blob 数据。

## 提交、提交比较和拉取请求

[提交 API](/rest/reference/repos#commits) 和[拉取请求 API](/rest/reference/pulls) 支持 [diff][git-diff] 和 [patch][git-patch] 格式：

### diff

    application/vnd.github.diff

### 修补程序

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## 仓库内容

### 原始

    application/vnd.github.raw

返回文件的原始内容。 这是在不传递任何特定媒体类型时的默认值。

### HTML

    application/vnd.github.html

对于 Markdown 或 AsciiDoc 等标记文件，可以使用 `.html` 媒体类型检索呈现的 HTML。 使用开源[标记库](https://github.com/github/markup)将标记语言呈现给 HTML。

## Gists

### 原始

    application/vnd.github.raw

返回 gist 的原始内容。 这是在不传递任何特定媒体类型时的默认值。

### base64

    application/vnd.github.base64

gist 内容在发送之前会进行 base64 编码。这在 gist 包含任何无效的 UTF-8 序列时非常有用。

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
