---
title: Deine GitHub Actions-Nutzung anzeigen
intro: 'Du kannst Details über Deine Nutzung von Minuten und Speicher für {{ site.data.variables.product.prodname_actions }} anzeigen.'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

Du kannst auch die verrechenbaren Auftrags-Ausführungsminuten für eine einzelne Workflow-Ausführung anzeigen. Weitere Informationen findest Du unter „[Eine Workflow-Ausführung verwalten](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes).“

### {{ site.data.variables.product.prodname_actions }}-Nutzung für Dein Benutzerkonto anzeigen

Jeder kann die Nutzung von {{ site.data.variables.product.prodname_actions }} für sein eigenes Benutzerkonto anzeigen.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### {{ site.data.variables.product.prodname_actions }}-Nutzung für Deine Organisation anzeigen

Organization owners and billing managers can view {{ site.data.variables.product.prodname_actions }} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {{ site.data.variables.product.prodname_actions }} usage in the organization billing page.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### {{ site.data.variables.product.prodname_actions }}-Nutzung für Dein Enterprise-Konto anzeigen

Enterprise-Inhaber und Abrechnungsmanager können die Nutzung von {{ site.data.variables.product.prodname_actions }} für ein Enterprise-Konto anzeigen.

{% note %}

**Hinweis:** Abrechnungsdetails für Enterprise-Konten fassen nicht die Nutzungsminuten für jedes Betriebssystem zusammen. {{ site.data.reusables.github-actions.enterprise-billing-details }}

{% endnote %}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Unter „{{ site.data.variables.product.prodname_actions }}" siehst Du die Details der Nutzung der Datenübertragung für jede Organisation in Deinem Enterprise-Konto. ![Details der Nutzung von Minuten](/assets/images/help/billing/actions-minutes-enterprise.png)
{{ site.data.reusables.dotcom_billing.actions-packages-storage-enterprise-account }}
{{ site.data.reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts }}
