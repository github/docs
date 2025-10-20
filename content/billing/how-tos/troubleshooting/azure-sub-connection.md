---
title: Troubleshooting Azure subscription connection problems
intro: 'Tips for resolving some common issues with connection of an Azure subscription to your account on {% data variables.product.github %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Troubleshooting
shortTitle: Azure sub connection
contentType: how-tos
---

## Message: "Need admin approval"

This message is displayed if the user account you used to sign into Azure does not have adequate permissions to install the {% data variables.product.github %} Subscription Permission Validation app (SPV app). {% data variables.product.github %} uses the SPV app during the connection process to get a list of available subscriptions from active directory.

> **Need admin approval**
>
> GitHub Inc needs permission to access resources in your organization that only an admin can grant. Please ask an admin to grant permission to this app before you can use it.

 Installing the SPV app requires tenant-wide admin consent. You must sign into an Azure account that can provide tenant-wide admin consent, or work with an Azure administrator to configure the admin consent workflow.

* [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/azure/active-directory/manage-apps/grant-admin-consent) in Microsoft Docs
* [User and admin consent in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview#admin-consent-workflow) in Microsoft Docs.

>[!TIP] If your tenant provides user consent settings, users included in those settings might not require admin consent to install the {% data variables.product.company_short %} SVP app. See [User consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/user-admin-consent-overview#user-consent) in Microsoft Docs.

## Banner saying my Azure ID is missing

If you see this banner, it means your Azure payment method information is missing. To avoid service interruptions for your enterprise or organization, update your Azure subscription connection as soon as possible. See [AUTOTITLE](/billing/how-tos/set-up-payment/connect-azure-sub).
