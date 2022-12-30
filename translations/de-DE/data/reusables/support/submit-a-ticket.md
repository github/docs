---
ms.openlocfilehash: b7f16729209b711d9ea95d059f5868ae867fa040
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419881"
---
1. Klicke im Dropdownmenü **Konto oder Organisation** auf den Namen des Kontos, auf das sich dein Supportticket bezieht.
![Screenshot: Dropdownmenü „Konto oder Organisation“](/assets/images/help/support/account-field.png)
1. Wähle im Dropdownmenü **Von** die E-Mail-Adresse aus, die der {% data variables.contact.github_support %} kontaktieren soll.
![Screenshot: Dropdownmenü „Von“](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Wähle das Dropdownmenü **Produkt** aus, und klicke auf {% ifversion ghes %}**GitHub Enterprise Server (selbstgehostet)** {% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Screenshot: Dropdownmenü „Produkt“](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot: Dropdownmenü „Produkt“](/assets/images/help/support/product-field.png){% endif %} {%- endif %} {%- ifversion ghes %}
1. Wenn du dazu aufgefordert wirst, wähle im Dropdownmenü **Serverinstallation** die Installation aus, auf die sich dein Supportticket bezieht. Wenn die Installation nicht aufgeführt ist, klicke auf **Andere**.
![Screenshot: Dropdownmenü „Serverinstallation“](/assets/images/help/support/installation-field.png) {%- endif %} {%- ifversion ghes %}
1. Wähle im Dropdownmenü **Releasereihe** das Release aus, das {% data variables.product.product_location_enterprise %} ausführt.
![Screenshot: Dropdownmenü „Releasereihe“](/assets/images/help/support/release-field.png) {%- endif %} {%- ifversion ghes or ghec %}
1. Klicke auf das Dropdownmenü **Priorität**, und wähle die entsprechende Dringlichkeit aus. Weitere Informationen findest du unter [Informationen zur Ticketpriorität](/support/learning-about-github-support/about-ticket-priority).
  ![Screenshot: Dropdownmenü „Priorität“](/assets/images/help/support/priority-field.png)
{%- endif %} {%- ifversion ghes %}
    - Wähle **{% data variables.product.support_ticket_priority_urgent %}** aus, um {% ifversion fpt or ghec %}kritische Systemfehler{% else %}fatale Systemfehler, wichtige Systemvorgänge beeinträchtigende Ausfälle, Sicherheitsvorfälle und abgelaufene Lizenzen zu melden{% endif %}.
    - Wähle **{% data variables.product.support_ticket_priority_high %}** aus, um Issues, die sich auf Geschäftsvorgänge auswirken (einschließlich des {% ifversion fpt or ghec %}Entfernens vertraulicher Daten wie Commits, Issues, Pull Requests und hochgeladener Anhänge aus deinen eigenen Konto- und Organisationswiederherstellungen{% else %}Systemleistungsissues{% endif %}) oder kritische Fehler zu melden.
    - Wähle **{% data variables.product.support_ticket_priority_normal %}** aus, um {% ifversion fpt or ghec %}eine Kontowiederherstellung oder das Entfernen einer Spamkennzeichnung anzufordern{% else %}technische Anforderungen wie Konfigurationsänderungen und Drittanbieterintegrationen zu übermitteln{% endif %} und nicht kritische Fehler zu melden.
    - Wähle **{% data variables.product.support_ticket_priority_low %}** aus, um allgemeine Fragen zu stellen und Anforderungen für neue Features, Käufe, Schulungen oder Integritätsprüfungen zu übermitteln.
{%- endif %} {%- ifversion ghes or ghec %}
1. Wenn dein Konto {% data variables.contact.premium_support %} umfasst und dein Ticket die Priorität {% ifversion ghes %}„Dringend“ oder „Hoch“{% elsif ghec %}„Hoch“{% endif %} aufweist, kannst du optional einen Rückruf in englischer Sprache anfordern. Klicke auf **Rückruf des GitHub-Supports anfordern**, wähle im Dropdownmenü für die Landeskennzahl dein Land aus, und gib deine Telefonnummer ein.
![Screenshot: Kontrollkästchen „Rückruf anfordern“, Dropdownmenü „Landeskennzahl“ und Textfeld „Telefonnummer“](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Gib unter „Betreff“ einen beschreibenden Titel zu deinem Issue ein.
![Screenshot: Textfeld „Betreff“](/assets/images/help/support/subject-field.png)
1. Gib unter „How can we help“ (Wie können wir dir helfen?) weitere Informationen ein, die dem Support-Team bei der Lösung deines Problems helfen. Mittels Markdown kannst du deine Nachricht formatieren.
  ![Screenshot: Textbereich „Wie können wir helfen?“](/assets/images/help/support/how-can-we-help-field.png)
   Helpful information may include:
    - Schritte zum Reproduzieren des Problems
    - Alle besonderen Umstände im Zusammenhang mit der Ermittlung des Problems (z. B. das erste Vorkommen oder Vorkommen nach einem bestimmten Ereignis, die Häufigkeit des Auftretens, die geschäftlichen Auswirkungen des Problems und die vorgeschlagene Dringlichkeit)
    - Genaue Formulierung von Fehlermeldungen {% indented_data_reference reusables.repositories.anyone-can-view-anonymized-url spaces=3 %}

{%- ifversion ghes %}
1. Optional kannst du Diagnosedateien und andere Dateien auch per Drag & Drop, Hochladen oder Einfügen aus der Zwischenablage anfügen.
{%- endif %}
1. Klicke auf **Anforderung senden**.
![Screenshot: Schaltfläche „Anforderung senden“](/assets/images/help/support/send-request-button.png)
