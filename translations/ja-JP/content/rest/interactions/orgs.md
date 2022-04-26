---
title: Organization
intro: OrganizationのインタラクションAPIを使用すると、OrganizationのオーナーはOrganizationのパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザのタイプを一時的に制限することができます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* Organizationの{% data reusables.interactions.existing-user-limit-definition %}
* Organizationの{% data reusables.interactions.contributor-user-limit-definition %}
* Organizationの{% data reusables.interactions.collaborator-user-limit-definition %}

Organizationレベルでインタラクション制限を設定すると、Organizationが所有する個々のリポジトリに設定されているインタラクション制限は上書きされます。 Organizationが所有する個々のリポジトリに対して異なるインタラクション制限を設定するには、かわりに[リポジトリ](#repository)インタラクションエンドポイントを使用してください。
