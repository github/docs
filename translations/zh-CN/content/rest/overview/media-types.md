---
title: 媒体类型
intro: 了解用于指定要使用的数据格式的媒体类型。
redirect_from:
  - /v3/media
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


自定义媒体类型在 API 中用于让使用者选择他们希望接收的数据格式。 此功能通过在发出请求时将以下一种或多种类型添加到 `Accept` 标头中来实现。 媒体类型特定于资源，可以进行独立更改并支持其他资源不支持的格式。

所有 {% data variables.product.product_name %} 媒体类型如下所示：

    application/vnd.github[.version].param[+json]

API 支持的最基本媒体类型是：

    application/json
    application/vnd.github+json

Neither of these specify a [version][versions], so you will always get the current default JSON representation of resources.

{% note %}

**重要提示：**API 的默认版本将来可能会更改。 如果您要构建应用程序，但担心 API 的稳定性，请务必在 `Accept` 标头中请求特定的版本，如以下示例所示。

{% endnote %}

您可以这样指定一个版本：

    application/vnd.github.v3+json

如果要指定属性（例如下面定义的 full/raw/等等），请将版本放在属性之前：

    application/vnd.github.v3.raw+json

您可以通过每个响应的标头检查当前版本。  查看 `X-GitHub-Media-Type` 标头：

```shell
$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I
> HTTP/1.1 200 OK
> X-GitHub-Media-Type: github.v3

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.full+json"
> HTTP/1.1 200 OK
> X-GitHub-Media-Type: github.v3; param=full; format=json

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.v3.full+json"
> HTTP/1.1 200 OK
> X-GitHub-Media-Type: github.v3; param=full; format=json
```

### 注释正文属性

The body of a comment can be written in [GitHub Flavored Markdown][gfm], [issues](/rest/reference/issues), [issue comments](/rest/reference/issues#comments), [pull request comments](/rest/reference/pulls#comments), and the [gist comments](/rest/reference/gists#comments) APIs all accept these same media types:

#### Raw

    application/vnd.github.VERSION.raw+json

返回原始 Markdown 正文。 响应将包含 `body`。 这是在不传递任何特定媒体类型时的默认值。

#### Text

    application/vnd.github.VERSION.text+json

返回 Markdown 正文的纯文本表示形式。 响应将包含 `body_text`。

#### HTML

    application/vnd.github.VERSION.html+json

返回从正文的 Markdown 中渲染的 HTML。 响应将包含 `body_html`。

#### Full

    application/vnd.github.VERSION.full+json

返回 raw、text 和 HTML 表示形式。 响应将包含 `body`、`body_text` 和 `body_html`。

### Git blob 属性

The following media types are allowed when [getting a blob](/rest/reference/git#get-a-blob):

#### JSON

    application/vnd.github.VERSION+json
    application/json

返回 blob 的 JSON 表示形式，`content` 为 base64 编码的字符串。 这是在未传递任何参数时的默认值。

#### Raw

    application/vnd.github.VERSION.raw

返回原始 blob 数据。

### 提交、提交比较和拉取请求

The [commits API](/rest/reference/repos#commits) and [pull requests API](/rest/reference/pulls) support [diff][git-diff] and [patch][git-patch] formats:

#### 差异

    application/vnd.github.VERSION.diff

#### patch

    application/vnd.github.VERSION.patch

#### sha

    application/vnd.github.VERSION.sha

### 仓库内容

#### Raw

    application/vnd.github.VERSION.raw

返回文件的原始内容。 这是在不传递任何特定媒体类型时的默认值。

#### HTML

    application/vnd.github.VERSION.html

对于 Markdown 或 AsciiDoc 等标记文件，您可以使用 `.html` 媒体类型检索渲染的 HTML。 使用我们的开源[标记库](https://github.com/github/markup)将标记语言渲染为 HTML。

### Gist

#### Raw

    application/vnd.github.VERSION.raw

返回 gist 的原始内容。 这是在不传递任何特定媒体类型时的默认值。

#### base64

    application/vnd.github.VERSION.base64

Gist 内容在发送前经过 base64 编码。 这在 gist 包含任何无效的 UTF-8 序列时非常有用。

[gfm]: http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[versions]: /developers/overview/about-githubs-apis
