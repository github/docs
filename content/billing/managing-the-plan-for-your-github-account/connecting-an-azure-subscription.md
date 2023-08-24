---
title: Connecting an Azure subscription
intro: 'You can connect an Azure Subscription to your organization{% ifversion ghec %} or enterprise account{% endif %} to enable and pay for any {% data variables.product.prodname_dotcom %} metered services.'
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

## About Azure subscriptions

{% data reusables.enterprise-accounts.billing-azure-subscription %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)," "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)," and "[AUTOTITLE](/billing/managing-billing-for-github-copilot)."

{% ifversion ghec %}
If your organization is a part of an enterprise account, you can only connect your Azure subscription to the enterprise account, not the organization.
{% endif %}

{% data reusables.enterprise.ghec-trial-azure %}

{% ifversion ghec %}
{% note %}

**Note:** If your enterprise account is on a Microsoft Enterprise Agreement, connecting an Azure subscription is the only way to use {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} beyond the included amounts, or to use {% data variables.product.prodname_github_codespaces %} and {% data variables.product.prodname_copilot_business_short %} at all.

{% endnote %}
{% endif %}

After you connect an Azure subscription, you can also manage your spending limits.

- "[AUTOTITLE](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[AUTOTITLE](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)"

## Prerequisites

To link an Azure subscription, a user must sign into Azure AD with adequate permissions. For more information, see [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent?pivots=portal#prerequisites) in Microsoft Docs.

If the user does not have adequate permissions, the user must obtain admin approval before linking a subscription. Alternatively, users can work with a Azure AD global administrators to configure an admin consent workflow. For more information, see [User and admin consent in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview#admin-consent-workflow) in Microsoft Docs.

## Connecting your Azure subscription to your organization account

To connect your Azure subscription, you must have owner permissions to the Azure subscription and be an organization owner on {% data variables.product.prodname_dotcom %}.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
1. Under "Billing Management", to the right of "Metered billing via Azure", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.
1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your enterprise.

   {% note %}

   **Note:** {% data variables.product.company_short %}'s Subscription Permission Validation requests read-only access to display the list of available subscriptions. To select an Azure subscription, you must have owner permissions to the subscription. If the default tenant does not have the right permissions, you may need to specify a different tenant ID. For more information, see [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) in Microsoft Docs.

   {% endnote %}
1. Click **Connect**.

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
1. Under "Select a subscription", select the Azure subscription ID that you want to connect to your enterprise.

   {% note %}

   **Note:** {% data variables.product.company_short %}'s Subscription Permission Validation requests read-only access to display the list of available subscriptions. To select an Azure subscription, you must have owner permissions to the subscription. If the default tenant does not have the right permissions, you may need to specify a different tenant ID. For more information, see [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) in Microsoft Docs.

   {% endnote %}
1. Click **Connect**.
1. Go back to the "Payment information" page in your enterprise billing settings. (To return to the "Payment information" page, follow steps three through five above.)
1. Under "Metered billing settings", select **Enable metered billing through Azure**, then click **Update metered billing settings**.
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
