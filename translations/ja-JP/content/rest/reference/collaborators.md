---
title: コラボレータ
intro: 'The collaborators API allows you to add, invite, and remove collaborators from a repository.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 招待

Repository Invitations API を使用すると、他のユーザにリポジトリでコラボレーションするようユーザや外部サービスを招待できます。 招待されたユーザ (または招待されたユーザを代行する外部サービス) は、招待を受諾または拒否できます。

`repo` スコープはコードにも招待にもアクセス権を付与するのに対し、`repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) は招待のみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。

### ユーザをリポジトリに招待する

コラボレータを追加するには、API エンドポイントを使用します。 詳しい情報については「[リポジトリコラボレータを追加する](/rest/reference/collaborators#add-a-repository-collaborator)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}
