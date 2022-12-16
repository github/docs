---
title: Gists
intro: Gists API を使うと、認可されたユーザーは、GitHub 上のパブリック Gist を一覧表示、作成、更新、削除できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181326'
---
## Gists API について

Gist API を使うと、gist を表示および変更できます。 gist について詳しくは、「[Gist でコンテンツを編集・共有する](/get-started/writing-on-github/editing-and-sharing-content-with-gists)」をご覧ください。

### 認証

パブリック gist を{% ifversion ghae or ghes %}読んで、トークンを持たない匿名ユーザー向けに作成できます。{% else %}匿名で読むことはできますが、gist を作成するには GitHub にサインインする必要があります。{% endif %}ユーザーに代わって gist を読み書きするには、Gist OAuth スコープとトークンが必要です。 詳細については、「[Scopes for OAuth Apps](/developers/apps/scopes-for-oauth-apps)」 (OAuth アプリのスコープ) を参照してください。

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### 切り捨て

Gist API は、Gist 内の各ファイルに最大 1 メガバイトのコンテンツを提供します。 API から gist に対して返される各ファイルには、`truncated` というキーがあります。 `truncated` が `true` の場合は、ファイルが大きすぎるため、コンテンツの一部のみが `content` で返されました。

ファイルの完全なコンテンツが必要な場合は、`raw_url` で指定された URL に `GET` 要求を送信できます。 10 メガバイトを超えるファイルの場合、`git_pull_url` が提供する URL を介して gist をクローンする必要があることに注意してください。

ファイル総数が 300 個を超えると、特定のファイルの内容が切り捨てられることに加えて、ファイルリスト全体が切り捨てられる場合があります。 最上位の `truncated` キーが `true` の場合、最初の 300 ファイルのみがファイル リストで返されます。 gist のファイルをすべてフェッチする必要がある場合は、`git_pull_url` が提供する URL を介して gist をクローンする必要があります。

### Gist のカスタムメディアタイプ

これらは、Gist コンテンツをフェッチするためにサポートされているメディアタイプです。

    application/vnd.github.raw
    application/vnd.github.base64

詳細については、「[メディア タイプ](/rest/overview/media-types)」を参照してください。
