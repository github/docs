---
ms.openlocfilehash: d36caae48a389b9b84d9659277996834ec58f3ba
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147683699"
---
1. Klicke unter „{% data variables.product.prodname_secret_scanning_caps %}“ unter „Pushschutz“ auf **Alle aktivieren**.
   ![Screenshot, der die Aktivierung von Pushschutz für {% data variables.product.prodname_secret_scanning %} für eine Organisation zeigt](/assets/images/help/organizations/secret-scanning-enable-push-protection.png)
1. Klicke optional auf „Automatisch für zu {% data variables.product.prodname_secret_scanning %} hinzugefügte private Repositorys aktivieren“.{% ifversion push-protection-custom-link-orgs %}
1. Wenn du optional einen benutzerdefinierten Link in die Nachricht einfügen möchtest, die Mitgliedern bei dem Versuch zum Pushen eines Geheimnisses angezeigt wird, wähle **Ressourcenlink in CLI und Webbenutzeroberfläche hinzufügen, wenn ein Commit blockiert ist** aus, gib eine URL ein, und klicke auf **Link speichern**.
   {% ifversion push-protection-custom-link-orgs-beta %}{% indented_data_reference reusables.advanced-security.custom-link-beta spaces=3 %}{% endif %}

   ![Screenshot: Kontrollkästchen und Textfeld zum Aktivieren eines benutzerdefinierten Links](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}