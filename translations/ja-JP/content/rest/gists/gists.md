---
title: Gist
intro: Gists APIを使うと、認可されたユーザはGitHub上のパブリックGistのリスト、作成、更新、削除ができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Gists API

The Gist API lets you view and modify gists. For more information about gists, see "[Editing and sharing content with gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists)."

### 認証

パブリック Gist {% ifversion ghae or ghes %} を読んで、トークンなしで匿名ユーザ向けに作成できます。{% else %} 匿名でも、Gist を作成するには GitHub にサインインする必要があります。{% endif %}ユーザに代わって Gist を読み書きするには、Gist OAuth スコープとトークンが必要です。 詳しい情報については、「[OAuth App のスコープ](/developers/apps/scopes-for-oauth-apps)」を参照してください。

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### 切り捨て

Gist API は、Gist 内の各ファイルに最大 1 メガバイトのコンテンツを提供します。 API を介して Gist として返される各ファイルには、`truncated` というキーがあります。 `truncated` が `true` の場合、ファイルが大きすぎるためコンテンツの一部のみが `content` で返されました。

ファイルのフルコンテンツが必要な場合は、`raw_url` で指定された URL に `GET` リクエストを送信できます。 10 メガバイトを超えるファイルの場合、`git_pull_url` が提供する URL を介して Gist をクローンする必要があることに注意してください。

ファイル総数が 300 個を超えると、特定のファイルの内容が切り捨てられることに加えて、ファイルリスト全体が切り捨てられる場合があります。 最上位の `truncated` キーが `true` の場合、最初の 300 ファイルのみがファイルリストに返されます。 Gist のファイルをすべてフェッチする必要がある場合は、`git_pull_url` が提供する URL を介して Gist のクローンを作成する必要があります。

### Gist のカスタムメディアタイプ

これらは、Gist コンテンツをフェッチするためにサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。
