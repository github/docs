---
title: Synchronisieren der Lizenzverwendung zwischen GitHub Enterprise Server und GitHub Enterprise Cloud
intro: 'Du kannst die Lizenznutzung von {% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_ghe_cloud %} synchronisieren, um die gesamte Lizenznutzung in deinem Unternehmen zentral anzuzeigen und sicherzustellen, dass Personen mit Konten in beiden Umgebungen nur eine Benutzerlizenz in Anspruch nehmen.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
ms.openlocfilehash: 8434c6f76d4cd63f7c95e7b5971f795126be7066
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147572592'
---
## Informationen zur Synchronisierung der Lizenzverwendung

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

Um sicherzustellen, dass die aktuellen Lizenzdetails zu {% data variables.product.prodname_dotcom_the_website %} angezeigt werden, kannst du die Lizenzverwendung zwischen den Umgebungen mithilfe von {% data variables.product.prodname_github_connect %} automatisch synchronisieren. Weitere Informationen zu {% data variables.product.prodname_github_connect %} findest du unter [Informationen zu {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %} in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}{% endif %}

Wenn du {% data variables.product.prodname_github_connect %} nicht aktivieren möchtest, kannst du die Lizenzverwendung manuell synchronisieren, indem du eine Datei aus {% data variables.product.prodname_ghe_server %} auf {% data variables.product.prodname_dotcom_the_website %} hochlädst.

Wenn du die Lizenznutzung synchronisierst, werden nur die Benutzer-ID und die E-Mail-Adressen für jedes Benutzerkonto in{% data variables.product.prodname_ghe_server %} an {% data variables.product.prodname_ghe_cloud %} übertragen.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Automatisches Synchronisieren der Lizenzverwendung

Mithilfe von {% data variables.product.prodname_github_connect %} kannst du die Anzahl und Nutzung der Benutzerlizenzen zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} automatisch wöchentlich synchronisieren. Weitere Informationen findest du unter [Aktivieren der automatischen Benutzerlizenzsynchronisierung für dein Unternehmen]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %} in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}{% endif %}

{% ifversion ghec or ghes > 3.4 %} Nach dem Aktivieren von {% data variables.product.prodname_github_connect %} werden die Lizenzdaten automatisch wöchentlich synchronisiert. Du kannst deine Lizenzdaten auch jederzeit manuell synchronisieren, indem du einen Lizenzsynchronisierungsauftrag auslöst.

### Auslösen eines Lizenzsynchronisierungsauftrags

1. Melde dich bei deiner {% data variables.product.prodname_ghe_server %}-Instanz an.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Klicke unter „Lizenzsynchronisierung“ auf {% octicon "sync" aria-label="The Sync icon" %} **Jetzt synchronisieren**.
  ![Screenshot der Schaltfläche „Jetzt synchronisieren“ im Abschnitt „Lizenzsynchronisierung“](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Manuelles Hochladen der GitHub Enterprise Server-Lizenzverwendungsdaten

Auf {% data variables.product.prodname_ghe_server %} kannst du eine JSON-Datei herunterladen und die Datei auf {% data variables.product.prodname_ghe_cloud %} hochladen, um die Nutzung der Benutzerlizenzen zwischen den zwei Bereitstellungen manuell zu synchronisieren.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
5. Klicke unter „Quicklinks“ auf **Lizenzverwendung exportieren**, um eine Datei herunterzuladen, in der deine aktuelle Lizenzverwendung für {% data variables.product.prodname_ghe_server %} enthalten ist.
  ![Link „Lizenzverwendung exportieren“](/assets/images/enterprise/business-accounts/export-license-usage-link.png) {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
10. Klicke unter „Enterprise Server-Instanzen“ auf **Servernutzung hinzufügen**.
  ![Link zum Hochladen der GitHub Enterprise Server-Verwendungsdaten](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Lade die JSON-Datei hoch, die du von {% data variables.product.prodname_ghe_server %} heruntergeladen hast.
  ![Datei zum Hochladen ziehen und ablegen oder auswählen](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
