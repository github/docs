---
title: Viewing the subscription and usage for your enterprise account
intro: 'You can view the current {% ifversion fpt %}subscription, {% endif %}license usage{% ifversion fpt %}, invoices, payment history, and other billing information{% endif %} for {% ifversion fpt %}your enterprise account{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners {% ifversion fpt %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
---

## About billing for enterprise accounts

You can view an overview of {% ifversion fpt %}your subscription and paid{% elsif ghes %}the license{% endif %} usage for {% ifversion fpt %}your{% elsif ghes %}the{% endif %} enterprise account on {% ifversion fpt %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

For invoiced {% data variables.product.prodname_enterprise %} customers{% ifversion ghes %} who use both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}{% endif %}, each invoice includes details about billed services for all products. For example, in addition to your usage for {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, you may have usage for {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt %}, {% elsif ghes %}. You may also have usage on {% data variables.product.prodname_dotcom_the_website %}, like {% endif %}paid licenses in organizations outside of your enterprise account, data packs for {% data variables.large_files.product_name_long %}, or subscriptions to apps in {% data variables.product.prodname_marketplace %}. For more information about invoices, see "{% ifversion fpt %}[Managing invoices for your enterprise](/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)."{% elsif ghes %}<a href="/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account" class="dotcom-only">Viewing the subscription and usage for your enterprise account</a>" in the {% data variables.product.prodname_dotcom_the_website %} documentation.{% endif %}

{% ifversion fpt %}

In addition to enterprise owners, billing managers can view the subscription and usage for your enterprise account. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)" and "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

{% endif %}

{% ifversion ghes %}

If you want to view an overview of your subscription and usage for {% data variables.product.prodname_enterprise %} and any related services on {% data variables.product.prodname_dotcom_the_website %}, see "[Viewing the subscription and usage for your enterprise account](/free-pro-team@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" in the {% data variables.product.prodname_dotcom_the_website %} documentation.

{% endif %}

## Viewing the subscription and usage for your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "User licenses", view your total licenses, number of consumed licenses, and your subscription expiration date.
  {% ifversion fpt %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![License and subscription information in enterprise billing settings](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a {% ifversion fpt %}CSV{% elsif ghes %}JSON{% endif %} file with license details{% ifversion fpt %}, to the right of "User Licenses"{% endif %}, click **View {% ifversion fpt %}details{% elsif ghes %}users{% endif %}** or {% ifversion fpt %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Export license usage**{% endif %}.{% ifversion fpt %}
  !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion fpt %}
1. Optionally, to view usage details for other features, in the left sidebar, click **Billing**.
  ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png)
{% endif %}
