---
title: Gists
intro: Gist API 允许授权用户在 GitHub 上列出、创建、更新和删除公共 gist。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 47961c5dfeeb5f320bbac67ffb0573c31709bd5b
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181285'
---
## 关于 Gist API

通过 Gist API，可以查看和修改 Gist。 有关 Gist 的详细信息，请参阅“[使用 Gist 编辑和共享内容](/get-started/writing-on-github/editing-and-sharing-content-with-gists)”。

### 身份验证

可以匿名读取公共 Gist {% ifversion ghae or ghes %}并为没有令牌的匿名用户创建它们。{% else %}，但是必须要登录到 GitHub 才能创建 Gist。{% endif %}要代表用户读取或写入 Gist，需要 Gist OAuth 作用域和令牌。 有关详细信息，请参阅“[OAuth 应用的作用域](/developers/apps/scopes-for-oauth-apps)”。

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### 截断

Gist API 为 Gist 中的每个文件提供最多一兆字节的内容。 通过 API 为 Gist 返回的每个文件都有一个名为 `truncated` 的密钥。 如果 `truncated` 是 `true`，则文件太大，仅返回了 `content` 部分内容。

如果需要文件的完整内容，可以向 `raw_url` 指定的 URL 发出 `GET` 请求。 请注意，对于超过十兆字节的文件，需要通过 `git_pull_url` 提供的 URL 克隆 Gist。

除了特定文件的内容被截断外，如果文件总数超过 300 个，则整个文件列表也可能被截断。 如果顶层 `truncated` 键为 `true`，则仅返回文件列表中的前 300 个文件。 如果需要获取 Gist 的所有文件，需要通过 `git_pull_url` 提供的 URL 克隆 Gist。

### Gist 的自定义媒体类型

以下是获取 Gist 内容所支持的媒体类型。

    application/vnd.github.raw
    application/vnd.github.base64

有关详细信息，请参阅“[媒体类型](/rest/overview/media-types)”。
