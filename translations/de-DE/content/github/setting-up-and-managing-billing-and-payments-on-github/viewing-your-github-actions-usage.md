---
title: Deine GitHub Actions-Nutzung anzeigen
intro: 'Du kannst Details über Deine Nutzung von Minuten und Speicher für {% data variables.product.prodname_actions %} anzeigen.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

Du kannst auch die verrechenbaren Auftrags-Ausführungsminuten für eine einzelne Workflow-Ausführung anzeigen. Weitere Informationen findest Du unter „[Eine Workflow-Ausführung verwalten](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes).“

### {% data variables.product.prodname_actions %}-Nutzung für Dein Benutzerkonto anzeigen

Jeder kann die Nutzung von {% data variables.product.prodname_actions %} für sein eigenes Benutzerkonto anzeigen.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### {% data variables.product.prodname_actions %}-Nutzung für Deine Organisation anzeigen

Organization owners and billing managers can view {% data variables.product.prodname_actions %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_actions %} usage in the organization billing page.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### {% data variables.product.prodname_actions %}-Nutzung für Dein Enterprise-Konto anzeigen

Enterprise-Inhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_actions %} für ein Enterprise-Konto anzeigen.

{% note %}

**Hinweis:** Abrechnungsdetails für Enterprise-Konten fassen nicht die Nutzungsminuten für jedes Betriebssystem zusammen. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Unter „{% data variables.product.prodname_actions %}" siehst Du die Details der Nutzung der Datenübertragung für jede Organisation in Deinem Enterprise-Konto. ![Details der Nutzung von Minuten](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
