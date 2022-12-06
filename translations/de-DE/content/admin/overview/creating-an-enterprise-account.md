---
title: Erstellen eines Unternehmenskontos
intro: 'Wenn du {% data variables.product.prodname_ghe_cloud %} derzeit mit einer einzelnen Organisation verwendest, kannst du ein Unternehmenskonto erstellen, um mehrere Organisationen zentral zu verwalten.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573401'
---
## Informationen zur Erstellung von Unternehmenskonten

{% data variables.product.prodname_ghe_cloud %} enthält die Option zum Erstellen eines Unternehmenskontos, das die Zusammenarbeit zwischen mehreren Organisationen ermöglicht und Administratoren einen zentralen Punkt für Sichtbarkeit und Verwaltung bietet. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).

{% data reusables.enterprise.create-an-enterprise-account %} Wenn du per Rechnung bezahlst, kannst du ein Unternehmenskonto auf {% data variables.product.prodname_dotcom %} selbst erstellen. Wenn nicht, kannst du [dich an unser Vertriebsteam wenden](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards), um ein Unternehmenskonto für dich erstellen zu lassen.

In {% data variables.product.prodname_ghe_cloud %} ist ein Unternehmenskonto eingeschlossen. Die Erstellung eines Unternehmenskontos führt nicht zu zusätzlichen Gebühren auf deiner Rechnung.

Wenn du ein Unternehmenskonto erstellst, das deine vorhandene Organisation auf {% data variables.product.product_name %} besitzt, bleiben die Ressourcen der Organisation für Mitglieder unter denselben URLs zugänglich. Nachdem du dem Unternehmenskonto deine Organisation hinzugefügt hast, gelten die folgenden Änderungen für die Organisation.

- Deine vorhandene Organisation ist automatisch im Besitz des Unternehmenskontos.
- {% data variables.product.company_short %} berechnet das Unternehmenskonto für die Nutzung innerhalb aller Organisationen im Besitz des Unternehmens. Die aktuellen Abrechnungsdetails der Organisation, einschließlich deren E-Mail-Adresse für die Abrechnung, werden Rechnungsdetails des neuen Unternehmenskontos. Weitere Informationen findest du unter [Informationen zur Abrechnung für ein Unternehmen](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).
- Alle aktuellen Besitzer*innen deiner Organisation werden Besitzer*innen des Unternehmenskontos, und alle aktuellen Abrechnungsmanager*innen der Organisation werden Abrechnungsmanager*innen des neuen Unternehmenskontos. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

Weitere Informationen zu den Änderungen, die für eine Organisation gelten, nachdem du ihr ein Unternehmen hinzugefügt hast, findest du unter [Hinzufügen von Organisationen zu deinem Unternehmen](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account).

## Erstellen eines Unternehmenskontos auf {% data variables.product.prodname_dotcom %}

Zum Erstellen eines Unternehmenskontos muss deine Organisation {% data variables.product.prodname_ghe_cloud %} verwenden.

Wenn du per Rechnung zahlst, kannst du direkt über {% data variables.product.prodname_dotcom %} ein Unternehmenskonto erstellen. Wenn du derzeit nicht per Rechnung zahlst, kannst du [dich an unser Vertriebsteam wenden](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards), um ein Unternehmenskonto für dich erstellen zu lassen.


{% data reusables.organizations.billing-settings %}
1. Klicke auf **Auf Unternehmenskonto aktualisieren**.

   ![Screenshot der Schaltfläche „Upgrade to enterprise account“ (Auf Unternehmenskonto aktualisieren)](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. Gib unter „Unternehmensname“ einen Namen für dein Unternehmenskonto ein.

   ![Screenshot des Felds „Enterprise name“ (Unternehmensname)](/assets/images/help/business-accounts/enterprise-name-field.png)
1. Gib unter „Unternehmens-URL-Slug“ einen Slug für dein Unternehmenskonto ein. Dieser Slug wird in der URL deines Unternehmens verwendet. Wenn du z. B. `octo-enterprise` auswählest, lautet die URL für dein Unternehmen `https://github.com/enterprises/octo-enterprise`.

   ![Screenshot des Felds „Enterprise URL slug“ (Unternehmens-URL-Slug)](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. Klicke auf **Bestätigen und aktualisieren**.

   ![Screenshot der Schaltfläche „Confirm and upgrade“ (Bestätigen und aktualisieren)](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. Lies die Warnungen, und klicke auf **Unternehmenskonto erstellen**.

   ![Screenshot der Schaltfläche „Create enterprise account“ (Unternehmenskonto erstellen)](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## Nächste Schritte

Nachdem dein Unternehmenskonto erstellt wurde, empfehlen wir, dass du dich genauer darüber informierst, wie Unternehmenskonten funktionieren, und dass du Einstellungen und Richtlinien konfigurierst. Weitere Informationen hierzu findest du im Lernpfad [Erste Schritte mit deinem Unternehmenskonto](/admin/guides#get-started-with-your-enterprise-account).
