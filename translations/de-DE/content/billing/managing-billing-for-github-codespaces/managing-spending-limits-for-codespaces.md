---
title: Managing spending limits for Codespaces
intro: 'Du kannst ein Ausgabenlimit für {% data variables.product.prodname_codespaces %} festlegen.'
versions:
  fpt: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
shortTitle: Spending limits
---

## Über Ausgabenlimits für {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Once you've reached your spending limit, your organization or repository will no longer be able to create new codespaces, and won't be able to start existing codespaces. Any existing codespaces that are still running will not be shutdown; if you don't change the spending limit, you will not be charged for the amount that exceeds the limit.

Weitere Informationen zur Preisgestaltung für {% data variables.product.prodname_codespaces %}-Nutzung findest du unter „[Über die Abrechnung für {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)."

## Using your Azure Subscription
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_codespaces %} usage. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

## Das Ausgabenlimit für {% data variables.product.prodname_codespaces %} für Deine Organisation verwalten

Organisationsinhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_codespaces %} für eine Organisation verwalten.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit-codespaces %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Das Ausgabenlimit für {% data variables.product.prodname_codespaces %} für Dein Enterprise-Konto verwalten

Enterprise-Inhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_codespaces %} für ein Enterprise-Konto verwalten.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Above "{% data variables.product.prodname_codespaces %} monthly usage", click **Spending Limit**. ![Spending limit tab](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Exporting changes when you have reached your spending limit

{% data reusables.codespaces.exporting-changes %}
## Managing usage and spending limit email notifications

Email notifications are sent to account owners and billing managers when spending reaches 50%, 75%, and 90% of your account's spending limit.

You can disable these notifications anytime by navigating to the bottom of the **Spending Limit** page.
