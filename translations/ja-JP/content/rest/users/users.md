---
title: ユーザ
intro: Users APIを使うと、認証を受けたユーザに関するパブリック及びプライベートな情報を取得できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

ユーザ API のリソースの多くには、現在認証されているユーザについての情報を取得するためのショートカットがあります。 リクエスト URL に `{username}` パラメータが含まれていない場合、レスポンスはログインしているユーザに対して行われます (リクエストで [認証情報](/rest/overview/resources-in-the-rest-api#authentication) を渡す必要があります)。{% ifversion fpt or ghes or ghec %}ユーザが 2 要素認証を有効にしているかなど、その他の個人情報は、基本認証または `user` スコープ付きで OAuth 認証されている場合に含まれます。{% endif %}
