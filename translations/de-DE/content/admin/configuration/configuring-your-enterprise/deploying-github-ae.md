---
title: Bereitstellen von GitHub AE
intro: 'Du kannst {% data variables.product.product_name %} in einer verfügbaren Azure-Region bereitstellen.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614367'
---
## Informationen zur Bereitstellung von {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae).

Nachdem du eine Testversion von {% data variables.product.product_name %} erworben oder gestartet hast, kannst du {% data variables.product.product_name %} in einer verfügbaren Azure-Region bereitstellen. Dieser Leitfaden bezieht sich auf die Azure-Ressource, die die Bereitstellung von {% data variables.product.product_name %} als {% data variables.product.product_name %}-Konto enthält. Du stellst das {% data variables.product.product_name %}-Konto unter [https://portal.azure.com](https://portal.azure.com) im Azure-Portal bereit.

## Voraussetzungen

Du benötigst die Berechtigung zum Ausführen des `/register/action`-Vorgangs für den Ressourcenanbieter in Azure. Die Berechtigung ist in den Rollen `Contributor` und `Owner` enthalten. Weitere Informationen findest du in der Microsoft-Dokumentation unter [Azure-Ressourcenanbieter und -Typen](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider).

## Bereitstellen von {% data variables.product.product_name %} mit den {% data variables.actions.azure_portal %}

Im {% data variables.actions.azure_portal %} kannst du das {% data variables.product.product_name %}-Konto in deiner Azure-Ressourcengruppe bereitstellen.

1. Klicke auf einen der folgenden beiden Links, um mit der Bereitstellung von {% data variables.product.product_name %} zu beginnen. Auf welchen Link du klicken solltest, hängt von der Azure-Cloud ab, in der du {% data variables.product.product_name %} bereitstellen möchtest. Weitere Informationen zu Azure Government findest du in der Microsoft-Dokumentation unter [Was ist Azure Government?](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome).
   
   - [Bereitstellen von {% data variables.product.product_name %} in Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [Bereitstellen von {% data variables.product.product_name %} in Azure Government](https://aka.ms/create-github-ae-instance-gov)
1. Um mit dem Hinzufügen eines neuen {% data variables.product.product_name %}-Kontos zu beginnen, klicke auf **GitHub AE-Konto erstellen**.
1. Fülle die Felder „Projektdetails“ und „Instanzdetails“ aus.
    ![{% data variables.actions.azure_portal %}-Suchergebnisse](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Kontoname:** Der Hostname für dein Unternehmen
    - **Administratorname:** Ein Benutzername für den ursprünglichen Unternehmensbesitzer, der in {% data variables.product.product_name %} erstellt wird.
    - **Administrator-E-Mail:** Die E-Mail-Adresse, die die Anmeldeinformationen empfängt.
1. Um eine Zusammenfassung der vorgeschlagenen Änderungen anzuzeigen, klicke auf **Überprüfen + erstellen**.
1. Klicke nach Abschluss der Überprüfung auf **Erstellen**.

Die oben eingegebene E-Mail-Adresse empfängt Anweisungen zum Zugriff auf dein Unternehmen. Sobald du Zugriff hast, kannst du mit den ersten Setupschritte beginnen. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.product_name %}](/admin/configuration/initializing-github-ae).

{% note %}

**Hinweis:** Softwareupdates für deine {% data variables.product.product_name %}-Bereitstellung werden von {% data variables.product.prodname_dotcom %} ausgeführt. Weitere Informationen findest du unter [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases).

{% endnote %}

## Navigieren zu deinem Unternehmen

Du kannst im {% data variables.actions.azure_portal %} zu deiner {% data variables.product.product_name %}-Bereitstellung navigieren. Die resultierende Liste enthält alle {% data variables.product.product_name %}-Bereitstellungen in deiner Azure-Region.

1. Klicke im {% data variables.actions.azure_portal %} im linken Bereich auf **Alle Ressourcen**.
1. Klicke in den verfügbaren Filtern auf **Alle Typen**, wähle dann **Alle auswählen** ab, und wähle **GitHub AE** aus: ![{% data variables.actions.azure_portal %}-Suchergebnisse](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Nächste Schritte

- Nachdem deine Bereitstellung erfolgt ist, initialisiere im nächsten Schritt {% data variables.product.product_name %}. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.product_name %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae).
- Wenn du {% data variables.product.product_name %} ausprobierst, kannst du jederzeit während des Testzeitraums auf eine vollständige Lizenz aktualisieren, indem du dich an den Kontakt {% data variables.contact.contact_enterprise_sales %} wendest. Wenn du am letzten Tag deiner Testphase kein Upgrade durchgeführt hast, wird die Bereitstellung automatisch gelöscht. Wenn du mehr Zeit für die Beurteilung von {% data variables.product.product_name %} benötigst, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %} für eine Verlängerung.

## Weitere Informationsquellen 

- [Aktivieren von {% data variables.product.prodname_advanced_security %}-Features für {% data variables.product.product_name %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)
- [{% data variables.product.product_name %}-Versionshinweise](/github-ae@latest/admin/overview/github-ae-release-notes) 
