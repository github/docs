---
title: インタラクション
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

リポジトリに対するインタラクションには、コミット、Issueのオープン、プルリクエストの作成があります。 インタラクションAPIを使用すると、オーナーまたは管理者アクセス権のあるユーザは特定のユーザによるパブリックリポジトリの操作を一時的に制限することができます。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Organization

OrganizationのインタラクションAPIを使用すると、OrganizationのオーナーはOrganizationのパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザを一時的に制限することができます。 {{ site.data.reusables.interactions.interactions-detail }} {{ site.data.variables.product.product_name }} ユーザのグループについては以下を参照してください。

* Organizationの{{ site.data.reusables.interactions.existing-user-limit-definition }}
* Organizationの{{ site.data.reusables.interactions.contributor-user-limit-definition }}
* Organizationの{{ site.data.reusables.interactions.collaborator-user-limit-definition }}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repository

リポジトリのインタラクションAPIを使用すると、オーナーまたは管理者アクセス権のあるユーザはパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザを一時的に制限することができます。 {{ site.data.reusables.interactions.interactions-detail }} {{ site.data.variables.product.product_name }} ユーザのグループについては以下を参照してください。

* リポジトリの{{ site.data.reusables.interactions.existing-user-limit-definition }}
* リポジトリの{{ site.data.reusables.interactions.contributor-user-limit-definition }}
* リポジトリの{{ site.data.reusables.interactions.collaborator-user-limit-definition }}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}
