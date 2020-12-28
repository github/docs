---
title: Gist
redirect_from:
  - /v3/gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 認証

You can read public gists {% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}and create them for anonymous users without a token.{% else %} anonymously, but you must be signed into GitHub to create gists.{% endif %} To read or write gists on a user's behalf, you need the gist OAuth scope and a token. 詳しい情報については、「[OAuth App のスコープ](/developers/apps/scopes-for-oauth-apps)」を参照してください。

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

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## コメント

### Gist コメントのカスタムメディアタイプ

これらは、Gist コメントでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

メディアタイプの詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}
