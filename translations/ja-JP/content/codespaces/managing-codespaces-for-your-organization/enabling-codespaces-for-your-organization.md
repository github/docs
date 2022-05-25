---
title: Organization の Codespaces を有効にする
shortTitle: Enable Codespaces
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
- [Enable {% data variables.product.prodname_codespaces %} for users in your organization](#enable-codespaces-for-users-in-your-organization). You can choose to allow {% data variables.product.prodname_codespaces %} for selected users or only for specific users.
- [Set a spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Ensure that your organization does not have an IP address allow list enabled. For more information, see "[Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

By default, a codespace can only access the repository from which it was created. Organization 内の Codespaces で、codespace の作者がアクセスできる他の Organization リポジトリにアクセスできるようにする場合は、「[{% data variables.product.prodname_codespaces %} のアクセスとセキュリティを管理する](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)」を参照してください。

## Enable {% data variables.product.prodname_codespaces %} for users in your organization

{% ifversion fpt %}
{% note %}

**Note:** If you are a verified educator or a teacher, you must enable {% data variables.product.prodname_codespaces %} from a {% data variables.product.prodname_classroom %} to use your {% data variables.product.prodname_codespaces %} Education benefit. For more information, see "[Using GitHub Codespaces with GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)."

{% endnote %}
{% endif %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. [User permissions] で、次のいずれかのオプションを選択します。

   * [**Selected users**] にすると、{% data variables.product.prodname_codespaces %} を使用する特定の Organization メンバーを選択できます。
   * **Allow for all members** to allow all your organization members to use {% data variables.product.prodname_codespaces %}.
   * **Allow for all members and outside collaborators** to allow all your organization members as well as outside collaborators to use {% data variables.product.prodname_codespaces %}.

   !["User permissions" のラジオボタン](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Note:** When you select **Allow for all members and outside collaborators**,  all outside collaborators who have been added to specific repositories can create and use {% data variables.product.prodname_codespaces %}. Your organization will be billed for all usage incurred by outside collaborators. For more information on managing outside collaborators, see "[About outside collaborators](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)."

   {% endnote %}

1. [**Save**] をクリックします。

## Disabling {% data variables.product.prodname_codespaces %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select **Disabled**.

## 利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

アカウントの利用上限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。
