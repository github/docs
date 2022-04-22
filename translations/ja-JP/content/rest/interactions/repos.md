---
title: リポジトリ
intro: リポジトリのインタラクションAPIを使用すると、オーナーまたは管理者アクセス権のあるユーザはパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザのタイプを一時的に制限することができます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* リポジトリの{% data reusables.interactions.existing-user-limit-definition %}
* リポジトリの{% data reusables.interactions.contributor-user-limit-definition %}
* リポジトリの{% data reusables.interactions.collaborator-user-limit-definition %}

リポジトリを所有しているユーザまたはOrganizationについてインタラクション制限を有効にしている場合、個々のリポジトリについてその制限を変更することはできません。 インタラクション制限を変更するには、[ユーザ](#user)または[Organization](#organization)インタラクションエンドポイントを使用してください。
