---
title: Enterprise アカウントのプランおよび利用状況を表示する
intro: 'You can view the current {% ifversion ghec %}subscription, {% endif %}license usage{% ifversion ghec %}, invoices, payment history, and other billing information{% endif %} for {% ifversion ghec %}your enterprise account{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}.'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
---

## Enterprise アカウントの支払いについて

You can view an overview of {% ifversion ghec %}your subscription and paid{% elsif ghes %}the license{% endif %} usage for {% ifversion ghec %}your{% elsif ghes %}the{% endif %} enterprise account on {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

For invoiced {% data variables.product.prodname_enterprise %} customers{% ifversion ghes %} who use both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}{% endif %}, each invoice includes details about billed services for all products. For example, in addition to your usage for {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, you may have usage for {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}, {% elsif ghes %}. You may also have usage on {% data variables.product.prodname_dotcom_the_website %}, like {% endif %}paid licenses in organizations outside of your enterprise account, data packs for {% data variables.large_files.product_name_long %}, or subscriptions to apps in {% data variables.product.prodname_marketplace %}. For more information about invoices, see "[Managing invoices for your enterprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %}."{% elsif ghes %}" in the {% data variables.product.prodname_dotcom_the_website %} documentation.{% endif %}

{% ifversion ghec %}

In addition to enterprise owners, billing managers can view the subscription and usage for your enterprise account. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)" and "[Inviting people to manage your enterprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."

{% endif %}

{% ifversion ghes %}

If you want to view an overview of your subscription and usage for {% data variables.product.prodname_enterprise %} and any related services on {% data variables.product.prodname_dotcom_the_website %}, see "[Viewing the subscription and usage for your enterprise account](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

{% endif %}

## Enterprise アカウントのプランおよび利用状況を表示する

You can view the subscription and usage for your enterprise and download a file with license details.

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. [User licenses] の下に、合計ライセンス数、消費ライセンス数、プランの有効期限が表示されます。
  {% ifversion ghec %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Enterprise 支払い設定のライセンスおよびプラン情報](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %} file with license details{% ifversion ghec %}, to the right of "User Licenses"{% endif %}, click **View {% ifversion ghec %}details{% elsif ghes %}users{% endif %}** or {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Export license usage**{% endif %}.{% ifversion ghec %} !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. 必要に応じて、他の機能の使用状況の詳細を表示するには、左サイドバーで [**Billing**] をクリックします。 ![Enterpriseアカウント設定のサイドバーの支払いタブ](/assets/images/help/business-accounts/settings-billing-tab.png)
{% endif %}
