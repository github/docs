---
title: ユーザ
redirect_from:
  - /v3/users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

ユーザ API のリソースの多くには、現在認証されているユーザについての情報を取得するためのショートカットがあります。 If a request URL does not include a `{username}` parameter then the response will be for the logged in user (and you must pass [authentication information](/rest/overview/resources-in-the-rest-api#authentication) with your request).{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} Additional private information, such as whether a user has two-factor authentication enabled, is included when authenticated through basic auth or OAuth with the `user` scope.{% endif %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## ユーザのブロック

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
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
