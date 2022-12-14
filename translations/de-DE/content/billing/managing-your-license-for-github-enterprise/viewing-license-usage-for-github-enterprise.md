---
title: Anzeigen der Lizenznutzung für GitHub Enterprise
intro: 'Du kannst die Lizenznutzung für dein Unternehmen auf {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %} anzeigen.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 7f3c3c6e65928601d01ac17139928af6ceedf354
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '147572616'
---
## Informationen zur Lizenznutzung für {% data variables.product.prodname_enterprise %}

Du kannst die Lizenznutzung für {% data variables.product.product_name %} auf {% data variables.product.product_location %} anzeigen.

Wenn du sowohl {% data variables.product.prodname_ghe_cloud %} als auch {% data variables.product.prodname_ghe_server %} verwendest und die Lizenznutzung zwischen den Produkten synchronisierst, kannst du die Lizenznutzung für beide Produkte auf {% data variables.product.prodname_dotcom_the_website %} einsehen. Weitere Informationen zur Lizenzsynchronisierung findest du unter [Synchronisieren der Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

{% ifversion ghes %}

Weitere Informationen zum Anzeigen der Lizenznutzung auf {% data variables.product.prodname_dotcom_the_website %} und zum Ermitteln, wann die letzte Lizenzsynchronisierung stattfand, findest du in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation unter [Anzeigen der Lizenznutzung für {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise).

{% endif %}

Du kannst auch die REST-API verwenden, um verbrauchte Lizenzdaten und den Status des Lizenzsynchronisierungsauftrags zurückzugeben. Weitere Informationen findest du in der REST-API-Dokumentation unter [Verwaltung von GitHub Enterprise](/enterprise-cloud@latest/rest/enterprise-admin/license).

Weitere Informationen zu den Lizenzdaten, die deinem Unternehmenskonto zugeordnet sind, und wie die Anzahl der verbrauchten Benutzerarbeitsplätze berechnet werden, findest du unter [Problembehandlung bei der Lizenznutzung für GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).


## Anzeigen der Lizenznutzung auf {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Du kannst die Lizenznutzung für dein Unternehmen anzeigen und eine Datei mit Lizenzdetails herunterladen. Wenn in diesem Bericht nicht die erwartete Lizenzanzahl vorhanden ist, ist es möglich, dass die E-Mail-Adresse des {% data variables.product.prodname_vs %}-Abonnements, die dem Abonnenten bzw. der Abonnentin zugewiesen ist, sowie die E-Mail-Adressen von {% data variables.product.prodname_dotcom_the_website %} nicht übereinstimmen. Weitere Informationen findest du unter [Problembehandlung bei der Lizenznutzung für GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Klicke auf der linken Seitenleiste auf **Enterprise-Lizenzierung**.
  ![Registerkarte „Unternehmenslizenzierung“ in der Randleiste mit den Unternehmenskontoeinstellungen](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Überprüfe deine aktuelle {% data variables.product.prodname_enterprise %}-Lizenz sowie verbrauchte und verfügbare Benutzerlizenzen.
    - Um den genutzten Lizenzbericht als CSV-Datei herunterzuladen, klicke oben rechts auf {% octicon "download" aria-label="The download icon" %}. Weitere Informationen zum Überprüfen der Daten für diesen Bericht findest du unter [Problembehandlung bei der Lizenznutzung für GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).
    - Wenn deine Lizenz {% data variables.product.prodname_GH_advanced_security %} enthält, kannst du deine gesamte Arbeitsplatznutzung überprüfen. Weitere Informationen findest du unter [Anzeigen deiner {% data variables.product.prodname_GH_advanced_security %}-Nutzung](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage).

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Überprüfe deine aktuelle {% data variables.product.prodname_enterprise %}-Lizenz sowie verbrauchte und verfügbare Benutzerlizenzen.{% ifversion ghes %}
    - Um den genutzten Lizenzbericht als JSON-Datei herunterzuladen, wähle oben rechts unter „Direktlinks“ die Option **Lizenzverwendung exportieren** aus. Weitere Informationen zum Überprüfen der Daten für diesen Bericht findest du unter [Problembehandlung bei der Lizenznutzung für GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).
    - Wenn deine Lizenz {% data variables.product.prodname_GH_advanced_security %} enthält, kannst du deine gesamte Arbeitsplatznutzung sowie eine Aufschlüsselung der Commiter nach Organisation überprüfen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen](/admin/advanced-security).{% endif %}

{% endif %} {% ifversion ghec %}
## Anzeigen des letzten Lizenzsynchronisierungsdatums

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Klicke auf der linken Seitenleiste auf **Enterprise-Lizenzierung**.
  ![Registerkarte „Unternehmenslizenzierung“ in der Randleiste mit den Unternehmenskontoeinstellungen](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Um zu ermitteln, wann die letzte Lizenzsynchronisierung aufgetreten ist, suche unter „Enterprise Server-Instanzen“ nach Zeitstempeln neben dem Verbrauch der hochgeladenen oder synchronisierten Ereignisse.
   - „Servernutzung hochgeladen“ gibt an, dass die Lizenznutzung zwischen Umgebungen manuell aktualisiert wurde, als eine {% data variables.product.prodname_ghe_server %}-Lizenzdatei hochgeladen wurde.
   - „{% data variables.product.prodname_github_connect %}-Servernutzung synchronisiert“ gibt an, dass die Lizenznutzung zwischen Umgebungen automatisch aktualisiert wurde.
   - „{% data variables.product.prodname_github_connect %}-Servernutzung nie synchronisiert“ gibt an, dass {% data variables.product.prodname_github_connect %} zwar konfiguriert wurde, die Lizenznutzung zwischen den Umgebungen jedoch nicht erfolgreich aktualisiert wurde.

{% endif %}
