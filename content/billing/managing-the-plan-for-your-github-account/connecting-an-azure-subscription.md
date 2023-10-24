---
title: Connecting an Azure subscription
intro: 'If you use {% data variables.product.product_name %} through a Microsoft Enterprise Agreement, you can enable and pay for usage-based billing on {% data variables.location.product_location %} by connecting an Azure subscription.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
  - /billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise
  - /billing/managing-billing-for-your-github-account/connecting-an-azure-subscription
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Connect an Azure subscription
---

## About connection of an Azure subscription

You can pay for usage of {% data variables.product.product_name %} features through Azure by connecting an Azure Subscription ID to your organization {% ifversion ghec %}or enterprise{% endif%} account on {% data variables.location.product_location %}. {% ifversion fpt %}For more information about organization accounts, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)."{% elsif ghec %}

In this article, the instructions that you must follow to connect an Azure subscription depend on whether your company uses a single organization or an enterprise account on {% data variables.location.product_location %}. For more information about the differences between these two types of accounts, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."{% endif %}

{% ifversion ghec %}

If you use {% data variables.product.product_name %} through a Microsoft Enterprise Agreement, connection to an Azure subscription is the only way to use {% data variables.product.prodname_github_codespaces %} and {% data variables.product.prodname_copilot_business_short %}, or to use {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} beyond your plan's included amounts.

{% endif %}

## About usage-based billing on {% data variables.product.prodname_dotcom_the_website %}

{% data variables.product.company_short %} provides usage-based billing for the following features and situations. You can learn more about billing and spending limits.

| Billed feature or situation | Information about billing | Information about spending limits |
| :- | :- | -: |
| {% data variables.product.prodname_github_codespaces %} usage | "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)" | "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)" |
| {% data variables.product.prodname_actions %} usage beyond the amounts included with your plan | "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)" | "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-spending-limits)" |
| {% data variables.product.prodname_registry %} usage beyond the amounts included with your plan | "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)" | "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages#about-spending-limits)" |
| {% data variables.product.prodname_copilot_business_short %} usage | "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)" | N/A |

## About billing through Azure

If you link your {% data variables.product.company_short %} account to Azure, any usage-based costs starting from that point will be billed through Azure and charged on the 1st of each month. However, remaining {% data variables.product.company_short %} charges, for example charges for your {% data variables.product.prodname_dotcom %} plan, will still be billed on your usual billing date.

For example, you link your Azure subscription to your organization {% ifversion ghec %}or enterprise{% endif%} account on June 16th and you also have a {% data variables.product.prodname_copilot_for_business %} subscription. From that date onwards, any usage costs for {% data variables.product.prodname_copilot_business_short %} will be included in your Azure bill and charged on July 1st. However, any charges incurred before June 16th for {% data variables.product.prodname_copilot_business_short %} will be billed separately through {% data variables.product.company_short %} on your account's usual billing date.

## Prerequisites

- You must have {% ifversion ghec %}either an {% endif %} organization {% ifversion ghec %}or an enterprise{% endif %} account on {% data variables.location.product_location %}. For more information about the differences between these two types of accounts, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

  {%- ifversion ghec %}
  - {% data reusables.enterprise.ghec-trial-azure %}
  {%- endif %}
  - If the organization you want to connect an Azure subscription to belongs to an enterprise account, you must connect your Azure subscription to the enterprise account, not the organization. {% ifversion fpt %}For more information, see [the {% data variables.product.prodname_ghe_cloud %} version](/enterprise-cloud@latest/{{ currentArticle }}) of this article.{% endif %}

- You must be an owner of the organization{% ifversion ghec %} or enterprise{% endif %} account. For more information, see {% ifversion fpt %}"[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."{% elsif ghec %}the following articles.

  - "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
  - "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise)"
  {% endif %}

- You must be logged into Azure as a user who is able to provide tenant-wide admin consent, which is required to install {% data variables.product.company_short %}'s Subscription Permission Validation app on the Azure AD tenant. The app requires read access to display a list of available subscriptions, and is only used during this one-time process of connecting the Azure subscription. For more information, see [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/azure/active-directory/manage-apps/grant-admin-consent) in Microsoft Docs.

    - Alternatively, before following the instructions in this article, users who are not able to provide tenant-wide admin consent can work with an Azure AD global administrator to configure an admin consent workflow. For more information, see [User and admin consent in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview#admin-consent-workflow) in Microsoft Docs.

- To select an Azure subscription from the list of available subscriptions, the user must be an owner of the Azure subscription. For more information, see [Assign a user as an administrator of an Azure subscription](https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal-subscription-admin) in Microsoft docs.

- You must know your Azure subscription ID. For more information, see [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft Docs or [contact Azure support](https://azure.microsoft.com/support/).

## Connecting your Azure subscription to your organization account

To connect your Azure subscription, you must have owner permissions to the Azure subscription and be an organization owner on {% data variables.product.prodname_dotcom %}.

{% ifversion ghec %}

{% note %}

**Note**: If your organization account on {% data variables.location.product_location %} belongs an enterprise account, you must connect your Azure subscription to the enterprise account instead of the organization account. For more information, see "[Connecting your Azure subscription to your enterprise account](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#connecting-your-azure-subscription-to-your-enterprise-account)."

{% endnote %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
1. Under "Billing Management", to the right of "Metered billing via Azure", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   {% data reusables.enterprise-accounts.azure-admin-approval-required-message %}
1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your enterprise. {% data reusables.enterprise-accounts.tenant-app-permissions %}
1. Click **Connect**.
1. To the right of "Metered billing via Azure", click **Enable**.

{% ifversion ghec %}

## Connecting your Azure subscription to your enterprise account

To connect your Azure subscription, you must have owner permissions to the Azure subscription and be an enterprise owner on {% data variables.product.prodname_dotcom %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Under "Payment Information", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   {% data reusables.enterprise-accounts.azure-admin-approval-required-message %}
1. Under "Select a subscription", select the Azure subscription ID that you want to connect to your enterprise. {% data reusables.enterprise-accounts.tenant-app-permissions %}
1. Click **Connect**.
1. Go back to the "Payment information" page in your enterprise billing settings. (To return to the "Payment information" page, follow steps three through five above.)
1. Under "Metered billing settings", select **Enable metered billing through Azure**, then click **Update metered billing settings**.

   {% note %}

   **Note:** If you pay for {% data variables.product.prodname_enterprise %} via invoice, you do not need to select **Enable metered billing through Azure**, as Azure will be targeted automatically.

   {% endnote %}

{% endif %}

## Disconnecting your Azure subscription from your organization account

After you disconnect your Azure subscription from your organization account, your usage can no longer exceed the amounts included with your plan.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
1. Under "Billing Management", then under "Metered billing via Azure", to the right of the subscription ID you want to disconnect, click **{% octicon "trash" aria-label="The trash icon" %}**.
1. Review the prompt, then click **Remove**.

{% ifversion ghec %}

## Disconnecting your Azure subscription from your enterprise account

After you disconnect your Azure subscription from your enterprise account, your usage can no longer exceed the amounts included with your plan.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Under "Azure subscription", to the right of the subscription ID you want to disconnect, click **{% octicon "trash" aria-label="The trash icon" %}**.
1. Review the prompt, then click **Remove**.
{% endif %}

## Troubleshooting connection of an Azure subscription

You can troubleshoot some common issues with connection of an Azure subscription to your account on {% data variables.product.prodname_dotcom_the_website %}.

### Message: "Need admin approval"

If the user account you used to sign into Azure does not have adequate permissions to install the app that {% data variables.product.company_short %} uses to connect a subscription, you'll see a message with the following text.

> **Need admin approval**
>
> GitHub Inc needs permission to access resources in your organisation that only an admin can grant. Please ask an admin to grant permission to this app before you can use it.

To avoid this message when you try again, you must either ensure that the Azure user can provide tenant-wide admin consent, or you must work with an Azure administrator to configure the admin consent workflow. For more information, review "[Prerequisites](#prerequisites)".
