---
title: Azure subscription payments
intro: 'Learn about paying for metered usage of {% data variables.product.github %} plans, licenses, and usage with an Azure subscription.'
shortTitle: Azure subscriptions
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Team
  - Azure subscription
contentType: concepts
product: 'Organization and enterprise accounts can pay for any metered use of {% data variables.product.github %} using an Azure subscription. This option is not available for personal accounts.'
---

## Payment using an Azure subscription

You can pay for {% data variables.product.github %} use through an Azure subscription by connecting the subscription to {% data variables.product.github %}. See [AUTOTITLE](/billing/how-tos/set-up-payment/connect-azure-sub).

{% data variables.product.github %} installs a Subscription Permission Validation app (SPV app) on the Azure tenant, which it uses to get a list of available subscriptions from active directory. Installing the SPV app requires tenant-wide admin consent. You must sign into an Azure account that can provide tenant-wide admin consent, or work with an Azure administrator to configure the admin consent workflow.

* [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/azure/active-directory/manage-apps/grant-admin-consent) in Microsoft Docs
* [User and admin consent in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview#admin-consent-workflow) in Microsoft Docs.

>[!TIP] If your tenant provides user consent settings, users included in those settings might not require admin consent to install the {% data variables.product.company_short %} SPV app. See [User consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/user-admin-consent-overview#user-consent) in Microsoft Docs.

## Billing cycle for Azure

If you link your {% data variables.product.github %} account to Azure, any usage-based costs starting from that point will be billed through Azure and charged on the 1st of each month. However, any remaining {% data variables.product.github %} charges, for example, charges for your {% data variables.product.prodname_dotcom %} plan, will still be billed on your usual billing date.

Prepaid usage is not currently available for usage-based billing through Azure.

### Calculation example

You link your Azure subscription to your organization or enterprise account on **June 16th** and you also have a {% data variables.copilot.copilot_for_business %} subscription.

* From that June 16th onwards, any usage costs for {% data variables.copilot.copilot_business_short %}, with any costs for metered use over the included amounts, is included in your Azure bill and charged on **July 1st** and on the first of every month.
* Any charges incurred before June 16th are billed separately through {% data variables.product.github %} on your account's usual billing date.

## Use of {% data variables.product.prodname_ghe_cloud %} through a Microsoft Enterprise Agreement

If you use {% data variables.product.prodname_ghe_cloud %} through a Microsoft Enterprise Agreement, connecting an Azure subscription is the only way to use {% data variables.product.prodname_GHAS %}, {% data variables.product.prodname_github_codespaces %}, or {% data variables.product.prodname_copilot %}, or to use {% data variables.product.prodname_actions %}, Git Large File Storage (LFS), or {% data variables.product.prodname_registry %} beyond your plan's included amounts.

## Next steps

For instructions on connecting your Azure subscription, see [AUTOTITLE](/billing/how-tos/set-up-payment/connect-azure-sub).

For reference information, see [AUTOTITLE](/billing/reference/azure-subscription).
