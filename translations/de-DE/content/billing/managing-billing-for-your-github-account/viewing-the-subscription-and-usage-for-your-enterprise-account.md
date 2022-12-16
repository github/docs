---
title: Abonnement und Nutzung für dein Enterprise-Konto anzeigen
intro: 'Du kannst aktuelle {% ifversion ghec %}Abonnements, {% endif %}Lizenznutzungen{% ifversion ghec %}, Rechnungen, Zahlungsverläufe und andere Abrechnungsinformationen{% endif %} für {% ifversion ghec %}dein Unternehmenskonto{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %} anzeigen.'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
ms.openlocfilehash: 503f870542180cfe9ae088a161370b9370d36f1c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145189638'
---
## Informationen zur Abrechnung für Enterprise-Konten

Du kannst einen Überblick über{% ifversion ghec %}dein Abonnement und deine kostenpflichtige{% elsif ghes %}die Lizenz{% endif %} Nutzung {% ifversion ghec %}deines{% elsif ghes %}des{% endif %} Unternehmenskontos auf {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %} anzeigen.{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Weitere Informationen findest du unter [Erstellen eines Unternehmenskontos](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account).{% endif %}

Für fakturierte {% data variables.product.prodname_enterprise %}Kunden,{% ifversion ghes %} die sowohl {% data variables.product.prodname_ghe_cloud %} als auch {% data variables.product.prodname_ghe_server %}{% endif %} verwenden, enthält jede Rechnung Details zu in Rechnung gestellten Diensten für alle Produkte. Zusätzlich zu deiner Verwendung von {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} hast du möglicherweise Verbrauch bei {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}, {% elsif ghes %}. Möglicherweise nutzt du auch Dienste auf {% data variables.product.prodname_dotcom_the_website %}, wie z. B. {% endif %}gebührenpflichtige Lizenzen in Organisationen außerhalb deines Unternehmenskontos, Datenpakete für {% data variables.large_files.product_name_long %} oder Abonnements für Apps in {% data variables.product.prodname_marketplace %}. Weitere Informationen zu Rechnungen findest du unter [Verwalten von Rechnungen für dein Unternehmen]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %}.{% elsif ghes %}." in der Dokumentation für {% data variables.product.prodname_dotcom_the_website %}.{% endif %}

{% ifversion ghec %}

Zusätzlich zu Unternehmensinhaber*innen können Rechnungsmanager*innen das Abonnement und die Nutzung deines Unternehmenskontos anzeigen. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager) und [Einladen von Personen zum Verwalten deines Unternehmens](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Weitere Informationen findest du unter [Verknüpfen eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).

{% endif %}

{% ifversion ghes %}

Wenn du einen Überblick über dein Abonnement und die Nutzung für {% data variables.product.prodname_enterprise %} und alle zugehörigen Dienste auf {% data variables.product.prodname_dotcom_the_website %} anzeigen möchtest, lies [Anzeigen des Abonnements und der Nutzung für dein Unternehmenskonto](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.

{% endif %}

## Abonnement und Nutzung für dein Enterprise-Konto anzeigen

Du kannst das Abonnement und die Nutzung für dein Unternehmen anzeigen und eine Datei mit Lizenzdetails herunterladen.

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Zeige unter „Benutzerlizenzen“ deine Gesamtlizenzen, die Anzahl der genutzten Lizenzen und das Ablaufdatum deines Abonnements an.
  {% ifversion ghec %}![ Lizenz- und Abonnementinformationen in Unternehmensabrechnungseinstellungen](/assets/images/help/business-accounts/billing-license-info.png){% else %} ![Lizenz- und Abonnementinformationen in Unternehmensabrechnungseinstellungen](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Optional kannst du Details zur Lizenznutzung anzeigen oder eine {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %}-Datei mit Lizenzdetails herunterladen{% ifversion ghec %}. Klicke dazu rechts neben „Benutzerlizenzen“ auf {% endif %} **Benutzer {% ifversion ghec %}details{% elsif ghes %}anzeigen{% endif %}** oder {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Lizenznutzung exportieren**{% endif %}.{% ifversion ghec %} ![Schaltfläche „Details anzeigen“ mit Downloadsymbol rechts neben „Benutzerlizenzen“](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. Wenn du optional Nutzungsdetails für andere Features anzeigen möchtest, klicke auf der linken Seitenleiste auf **Abrechnung**.
  ![Registerkarte „Abrechnung“ auf der Randleiste mit den Unternehmenskontoeinstellungen](/assets/images/help/business-accounts/settings-billing-tab.png) {% endif %}
