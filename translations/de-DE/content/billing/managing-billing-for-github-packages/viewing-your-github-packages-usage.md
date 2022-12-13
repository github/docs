---
title: Anzeigen der GitHub Packages-Nutzung
intro: 'Du kannst Details über Deine Nutzung von Speicher und Datenübertragung für {% data variables.product.prodname_registry %} anzeigen.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Packages
  - Organizations
  - User account
shortTitle: View your usage
ms.openlocfilehash: 98cce486487c5f8a3801852b6a2b4ce7fdeb210d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060442'
---
## Anzeigen der {% data variables.product.prodname_registry %}-Nutzung für dein persönliches Konto

Jeder Benutzer kann die Nutzung von {% data variables.product.prodname_registry %} für sein eigenes persönliches Konto anzeigen.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## {% data variables.product.prodname_registry %}-Nutzung für Deine Organisation anzeigen

Organisationsinhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_registry %} für eine Organisation anzeigen. Für Organisationen, die von einem Unternehmenskonto verwaltet werden, können nur die Organisationsinhaber die {% data variables.product.prodname_registry %}-Nutzung auf der Abrechnungsseite der Organisation anzeigen.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## {% data variables.product.prodname_registry %}-Nutzung für Dein Enterprise-Konto anzeigen

Enterprise-Inhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_registry %} für ein Enterprise-Konto anzeigen.

{% note %}

**Hinweis:** In den Abrechnungsdetails für Unternehmenskonten wird nur die Datenspeichernutzung pro Organisation zusammengefasst. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Unter „{% data variables.product.prodname_registry %}" siehst Du die Details der Nutzung der Datenübertragung für jede Organisation in Deinem Enterprise-Konto.
  ![Details der Nutzung der Datenübertragung](/assets/images/help/billing/packages-data-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
