---
title: Anzeigen der GitHub Actions-Nutzung
intro: 'Du kannst Details über Deine Nutzung von Minuten und Speicher für {% data variables.product.prodname_actions %} anzeigen.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
shortTitle: View your Actions usage
ms.openlocfilehash: a41da21abe606b0de11bf7cf7e1b8be6f4e2edbe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065170'
---
Du kannst auch die verrechenbaren Auftrags-Ausführungsminuten für eine einzelne Workflow-Ausführung anzeigen. Weitere Informationen findest du unter [Anzeigen der Auftragsausführungszeit](/actions/managing-workflow-runs/viewing-job-execution-time).

## Anzeigen der {% data variables.product.prodname_actions %}-Nutzung für dein persönliches Konto

Jeder Benutzer kann die Nutzung von {% data variables.product.prodname_actions %} für sein eigenes persönliches Konto anzeigen.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## {% data variables.product.prodname_actions %}-Nutzung für Deine Organisation anzeigen

Organisationsinhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_actions %} für eine Organisation anzeigen. Für Organisationen, die von einem Unternehmenskonto verwaltet werden, können nur die Organisationsinhaber die {% data variables.product.prodname_actions %}-Nutzung auf der Abrechnungsseite der Organisation anzeigen.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## {% data variables.product.prodname_actions %}-Nutzung für Dein Enterprise-Konto anzeigen

Enterprise-Inhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_actions %} für ein Enterprise-Konto anzeigen.

{% note %}

**Hinweis:** Die verbrauchten Minuten für jedes Betriebssystem werden in den Abrechnungsdetails für Unternehmenskonten nicht zusammengefasst. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Unter „{% data variables.product.prodname_actions %}" siehst Du die Details der Nutzung der Datenübertragung für jede Organisation in Deinem Enterprise-Konto.
  ![Details der verbrauchten Minuten](/assets/images/help/billing/actions-minutes-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
