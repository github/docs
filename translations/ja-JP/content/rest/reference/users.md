---
title: ユーザ
intro: Users APIを使うと、認証を受けたユーザに関するパブリック及びプライベートな情報を取得できます。
redirect_from:
  - /v3/users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

ユーザ API のリソースの多くには、現在認証されているユーザについての情報を取得するためのショートカットがあります。 リクエスト URL に `{username}` パラメータが含まれていない場合、レスポンスはログインしているユーザに対して行われます (リクエストで [認証情報](/rest/overview/resources-in-the-rest-api#authentication) を渡す必要があります)。{% ifversion fpt or ghes %}ユーザが 2 要素認証を有効にしているかなど、その他の個人情報は、基本認証または `user` スコープ付きで OAuth 認証されている場合に含まれます。{% endif %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt %}
## ユーザのブロック

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes %}
## Emails

API を通じたメールアドレスの管理には、基本認証、またはエンドポイントに対する正しいスコープの付いた OAuth で認証する必要があります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'emails' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## フォロワー

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'followers' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Git SSHキー

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## GPG keys

`public_key` レスポンスフィールドで返されるデータは、GPG 形式のキーではありません。 ユーザが GPG キーをアップロードすると、そのキーは解析され、暗号化された公開鍵が抽出、保存されます。 この暗号鍵が、このページの API によって返されるものです。 この鍵は、GPG のようなプログラムで直接使用するには適していません。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'gpg-keys' %}{% include rest_operation %}{% endif %}
{% endfor %}
