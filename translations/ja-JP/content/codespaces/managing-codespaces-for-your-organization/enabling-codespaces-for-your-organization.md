---
title: Enabling Codespaces for your organization
shortTitle: Enabling Codespaces
intro: 'Organization 内のどのユーザが {% data variables.product.prodname_codespaces %} を使用できるかを制御できます。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## About enabling {% data variables.product.prodname_codespaces %} for your organization

Organization のオーナーは、Organization 内のどのユーザが Codespaces を作成および使用できるかを制御できます。

To use codespaces in your organization, you must do the following:

- Ensure that users have [at least write access](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) to the repositories where they want to use a codespace.
- [Enable {% data variables.product.prodname_codespaces %} for users in your organization](#configuring-which-users-in-your-organization-can-use-codespaces). You can choose allow {% data variables.product.prodname_codespaces %} for selected users or only for specific users.
- [Set a spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

By default, a codespace can only access the repository from which it was created. Organization 内の Codespaces で、codespace の作者がアクセスできる他の Organization リポジトリにアクセスできるようにする場合は、「[{% data variables.product.prodname_codespaces %} のアクセスとセキュリティを管理する](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)」を参照してください。

## Enable {% data variables.product.prodname_codespaces %} for users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. [User permissions] で、次のいずれかのオプションを選択します。

   * [**Allow for all users**] にすると、Organization のすべてのメンバーが {% data variables.product.prodname_codespaces %} を使用できるようになります。
   * [**Selected users**] にすると、{% data variables.product.prodname_codespaces %} を使用する特定の Organization メンバーを選択できます。

   !["User permissions" のラジオボタン](/assets/images/help/codespaces/organization-user-permission-settings.png)

## Disabling {% data variables.product.prodname_codespaces %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select **Disabled**.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

アカウントの利用上限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。
