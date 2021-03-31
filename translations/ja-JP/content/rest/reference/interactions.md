---
title: インタラクション
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
topics:
  - api
---

リポジトリに対するインタラクションには、コミット、Issueのオープン、プルリクエストの作成があります。 インタラクションAPIを使用すると、オーナーまたは管理者アクセス権のあるユーザはパブリックリポジトリの操作を一時的に特定のユーザのタイプに制限することができます。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Organization

OrganizationのインタラクションAPIを使用すると、OrganizationのオーナーはOrganizationのパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザのタイプを一時的に制限することができます。 {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* Organizationの{% data reusables.interactions.existing-user-limit-definition %}
* Organizationの{% data reusables.interactions.contributor-user-limit-definition %}
* Organizationの{% data reusables.interactions.collaborator-user-limit-definition %}

Organizationレベルでインタラクション制限を設定すると、Organizationが所有する個々のリポジトリに設定されているインタラクション制限は上書きされます。 Organizationが所有する個々のリポジトリに対して異なるインタラクション制限を設定するには、かわりに[リポジトリ](#repository)インタラクションエンドポイントを使用してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repository

リポジトリのインタラクションAPIを使用すると、オーナーまたは管理者アクセス権のあるユーザはパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザのタイプを一時的に制限することができます。 {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* リポジトリの{% data reusables.interactions.existing-user-limit-definition %}
* リポジトリの{% data reusables.interactions.contributor-user-limit-definition %}
* リポジトリの{% data reusables.interactions.collaborator-user-limit-definition %}

リポジトリを所有しているユーザまたはOrganizationについてインタラクション制限を有効にしている場合、個々のリポジトリについてその制限を変更することはできません。 インタラクション制限を変更するには、[ユーザ](#user)または[Organization](#organization)インタラクションエンドポイントを使用してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ユーザ

ユーザのインタラクションAPIを使用すると、自分のパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザのタイプを一時的に制限することができます。 {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* {% data reusables.interactions.existing-user-limit-definition %}が自分のリポジトリの操作を制限されます。
* {% data reusables.interactions.contributor-user-limit-definition %}が自分のリポジトリの操作を制限されます。
* {% data reusables.interactions.collaborator-user-limit-definition %}が自分のリポジトリの操作を制限されます。

ユーザレベルでインタラクション制限を設定すると、ユーザが所有する個々のリポジトリに設定されているインタラクション制限は上書きされます。 ユーザが所有する個々のリポジトリに対して異なるインタラクション制限を設定するには、かわりに[リポジトリ](#repository)インタラクションエンドポイントを使用してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'user' %}{% include rest_operation %}{% endif %}
{% endfor %}
