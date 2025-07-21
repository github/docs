---
title: Connecting an Azure subscription
intro: 'You can enable and pay for usage-based billing on {% data variables.location.product_location %} by connecting an Azure subscription.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
  - /billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise
  - /billing/managing-billing-for-your-github-account/connecting-an-azure-subscription
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect an Azure subscription
---


{% data reusables.billing.usage-based-billing %}

## About connection of an Azure subscription

You can pay for usage of {% data variables.product.github %} features through Azure by connecting an Azure Subscription ID to your organization {% ifversion ghec %}or enterprise{% endif %} account on {% data variables.location.product_location %}. {% ifversion fpt %}For more information about organization accounts, see [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations).{% elsif ghec %}

In this article, the instructions that you must follow to connect an Azure subscription depend on whether your company uses a single organization or an enterprise account on {% data variables.location.product_location %}. For more information about the differences between these two types of accounts, see [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts).{% endif %}

{% ifversion ghec %}

If you use {% data variables.product.prodname_ghe_cloud %} through a Microsoft Enterprise Agreement, connecting an Azure subscription is the only way to use {% data variables.product.prodname_GHAS %}, {% data variables.product.prodname_github_codespaces %}, or {% data variables.product.prodname_copilot %}, or to use {% data variables.product.prodname_actions %}, Git Large File Storage (LFS), or {% data variables.product.prodname_registry %} beyond your plan's included amounts.

{% endif %}

{% ifversion fpt or ghec %}

## About usage-based billing on {% data variables.product.github %}

{% data variables.product.github %} provides usage-based billing for the following products.

* {% data variables.product.prodname_actions %}, see [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
* {% data variables.product.prodname_github_codespaces %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)
* {% data variables.product.prodname_registry %}, see [AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)
* {% data variables.large_files.product_name_long %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)

In addition, usage-based billing is available for the following licenses

* {% data variables.product.prodname_enterprise %}, see [AUTOTITLE](/billing/managing-your-billing/about-billing-for-your-enterprise)
* {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
* {% data variables.product.prodname_GHAS %}, see [AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)

For information about controlling spending, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

{% endif %}

## About billing through Azure

If you link your {% data variables.product.company_short %} account to Azure, any usage-based costs starting from that point will be billed through Azure and charged on the 1st of each month. However, remaining {% data variables.product.company_short %} charges, for example charges for your {% data variables.product.prodname_dotcom %} plan, will still be billed on your usual billing date.

For example, you link your Azure subscription to your organization {% ifversion ghec %}or enterprise{% endif %} account on June 16th and you also have a {% data variables.copilot.copilot_for_business %} subscription. From that date onwards, any usage costs for {% data variables.copilot.copilot_business_short %} will be included in your Azure bill and charged on July 1st. However, any charges incurred before June 16th for {% data variables.copilot.copilot_business_short %} will be billed separately through {% data variables.product.company_short %} on your account's usual billing date.

## Prerequisites

* You must have {% ifversion ghec %}either {% endif %}an organization {% ifversion ghec %}or an enterprise {% endif %}account on {% data variables.location.product_location %}. For more information about the differences between these two types of accounts, see [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts).

  If the organization you want to connect an Azure subscription to belongs to an enterprise account, you must connect your Azure subscription to the enterprise account, not the organization. {% ifversion fpt %}See [the {% data variables.product.prodname_ghe_cloud %} version](/enterprise-cloud@latest/{{ currentArticle }}) of this article.{% endif %}

* You must be an owner of the organization{% ifversion ghec %} or enterprise{% endif %} account. See {% ifversion fpt %}[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).{% elsif ghec %}the following articles.

  * [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
  * [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise)
    {% endif %}

* You must be logged into Azure as a user who is able to provide tenant-wide admin consent, which is required to install {% data variables.product.company_short %}'s Subscription Permission Validation app on the Azure AD tenant. The app requires read access to display a list of available subscriptions, and is only used during this one-time process of connecting the Azure subscription. See [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/azure/active-directory/manage-apps/grant-admin-consent) in Microsoft Docs.

  * Alternatively, before following the instructions in this article, users who are not able to provide tenant-wide admin consent can work with an Azure AD global administrator to configure an admin consent workflow. See [User and admin consent in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview#admin-consent-workflow) in Microsoft Docs.

     >[!NOTE] If your tenant provides user consent settings, users included in those settings might not require admin consent to install {% data variables.product.company_short %}'s Subscription Permission Validation app. See [User consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/user-admin-consent-overview#user-consent) in Microsoft Docs.

* To select an Azure subscription from the list of available subscriptions, the user must be an owner of the Azure subscription. See [Assign a user as an administrator of an Azure subscription](https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal-subscription-admin) in Microsoft docs.

* You must know your Azure subscription ID. See [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft Docs or [contact Azure support](https://azure.microsoft.com/support/).

## Video demonstration of connecting a subscription

To connect an Azure subscription, you'll need appropriate access permissions on both {% data variables.product.github %} and the Azure billing portal. This may require coordination between two different people.

To see a demo of the process from beginning to end, see [Billing GitHub consumption through an Azure subscription](https://www.youtube.com/watch?v=Y-f7JKJ4_8Y) on {% data variables.product.company_short %}'s YouTube channel. This video demonstrates the process for an enterprise account. If you're connecting a subscription to an organization account, see [Connecting your Azure subscription to your organization account](/free-pro-team@latest/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#connecting-your-azure-subscription-to-your-organization-account).

{% ifversion fpt %}

## Connecting your Azure subscription to your organization account

To connect your Azure subscription, you must have owner permissions to the Azure subscription and be an organization owner on {% data variables.product.prodname_dotcom %}.

> [!NOTE]
> If your organization account on {% data variables.location.product_location %} belongs an enterprise account, you must connect your Azure subscription to the enterprise account instead of the organization account. See [Connecting your Azure subscription to your enterprise account](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#connecting-your-azure-subscription-to-your-enterprise-account) in the {% data variables.product.prodname_ghe_cloud %} version of this article.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and plans**.
1. Under "Billing Management", to the right of "Metered billing via Azure", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   {% data reusables.enterprise-accounts.azure-admin-approval-required-message %}

1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your organization. {% data reusables.enterprise-accounts.tenant-app-permissions %}
   {% data reusables.enterprise-accounts.connect-azure %}

{% endif %}

{% ifversion ghec %}

## Connecting your Azure subscription to your enterprise account

To connect your Azure subscription, you must have owner permissions to the Azure subscription and be an enterprise owner on {% data variables.product.prodname_dotcom %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.billing-tab-both-platforms %}
{% data reusables.enterprise-accounts.payment-information-tab-both-platforms %}

1. Under "Payment Information", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   {% data reusables.enterprise-accounts.azure-admin-approval-required-message %}

1. Under "Select a subscription", select the Azure subscription ID that you want to connect to your enterprise. {% data reusables.enterprise-accounts.tenant-app-permissions %}

{% data reusables.enterprise-accounts.connect-azure %}

{% endif %}

{% ifversion fpt %}

## Disconnecting your Azure subscription from your organization account

After you disconnect your Azure subscription from your organization account, your usage can no longer exceed the amounts included with your plan.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and plans**.
1. Under "Billing Management", then under "Metered billing via Azure", to the right of the subscription ID you want to disconnect, click **{% octicon "trash" aria-label="The trash icon" %}**.
1. Review the prompt, then click **Remove**.

{% endif %}

{% ifversion ghec %}

## Disconnecting your Azure subscription from your enterprise account

After you disconnect your Azure subscription from your enterprise account, your usage can no longer exceed the amounts included with your plan.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.billing-tab-both-platforms %}
{% data reusables.enterprise-accounts.payment-information-tab-both-platforms %}

1. Under "Azure subscription", to the right of the subscription ID you want to disconnect, click **{% octicon "trash" aria-label="The trash icon" %}**.
1. Review the prompt, then click **Remove**.
   {% endif %}

## Troubleshooting connection of an Azure subscription

You can troubleshoot some common issues with connection of an Azure subscription to your account on {% data variables.product.prodname_dotcom %}.

### Message: "Need admin approval"

If the user account you used to sign into Azure does not have adequate permissions to install the app that {% data variables.product.company_short %} uses to connect a subscription, you'll see a message with the following text.

> **Need admin approval**
>
> GitHub Inc needs permission to access resources in your organization that only an admin can grant. Please ask an admin to grant permission to this app before you can use it.

To avoid this message when you try again, you must either ensure that the Azure user can provide tenant-wide admin consent, or you must work with an Azure administrator to configure the admin consent workflow. For more information, review [Prerequisites](#prerequisites).

{% ifversion ghec %}

## Frequently asked questions about Azure subscriptions

The following are answers to some common questions about connecting an Azure subscription to your account on {% data variables.product.prodname_dotcom %}.

### Can I connect more than one enterprise or cost center to the same Azure subscription?

Yes. There’s no limit to the number of enterprises or cost centers you can connect to a single Azure subscription. For details on how charges are applied to cost centers, see [AUTOTITLE](/billing/managing-your-billing/charging-business-units).

### Can I connect multiple Azure subscriptions to one enterprise?

Yes. You can connect multiple Azure subscriptions to a single enterprise account by creating **cost centers**. Cost centers let you allocate metered usage across different Azure subscriptions.

### How are charges split in Azure for multiple enterprises?

Azure usage is separated by **SKU** and either **enterprise ID** or **cost center ID**. The format used is `enterprise:sku` or `costcenter:sku`.

> [!NOTE]
> Azure currently shows internal IDs, which may make it difficult to identify the corresponding enterprise or cost center.

### What happens if I don’t assign an Azure subscription to a cost center?

Charges will fall back to the **enterprise-level Azure subscription**. This also happens if a cost center becomes invalid or is deleted—any future usage from those resources is billed to the enterprise-level subscription.

### Can billing managers connect to Azure subscriptions?

Yes. Billing managers for organizations or enterprises can connect Azure subscriptions.

### Can I use metered products during an {% data variables.product.prodname_emu %} trial without connecting an Azure subscription?

Yes. During an **{% data variables.product.prodname_emu %} trial**, you can use metered products up to the included limits. To exceed the included limits, you’ll need to link an Azure subscription.

### What should I do if I see a banner saying my Azure ID is missing?

If you see this banner, it means your Azure payment method information is missing. To avoid service interruptions for your enterprise or organization, make sure to add this information before the date provided in the alert.

If you have questions or if you believe you are seeing this banner by mistake, contact {% data variables.contact.contact_support_page %}.
{% endif %}
