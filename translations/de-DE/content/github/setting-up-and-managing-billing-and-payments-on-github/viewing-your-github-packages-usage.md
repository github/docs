---
title: Deine GitHub Packages-Nutzung anzeigen
intro: 'Du kannst Details über Deine Nutzung von Speicher und Datenübertragung für {% data variables.product.prodname_registry %} anzeigen.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_registry %}-Nutzung für Dein Benutzerkonto anzeigen

Jeder kann die Nutzung von {% data variables.product.prodname_registry %} für sein eigenes Benutzerkonto anzeigen.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### {% data variables.product.prodname_registry %}-Nutzung für Deine Organisation anzeigen

Organization owners and billing managers can view {% data variables.product.prodname_registry %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_registry %} usage in the organization billing page.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### {% data variables.product.prodname_registry %}-Nutzung für Dein Enterprise-Konto anzeigen

Enterprise-Inhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_registry %} für ein Enterprise-Konto anzeigen.

{% note %}

**Hinweis:** Abrechnungsdetails für Enterprise-Konten fassen nur die Datenspeichernutzung pro Organisation zusammen. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Unter „{% data variables.product.prodname_registry %}" siehst Du die Details der Nutzung der Datenübertragung für jede Organisation in Deinem Enterprise-Konto. ![Details zur Nutzung der Datenübertragung](/assets/images/help/billing/packages-data-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
