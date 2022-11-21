---
title: Informationen zur Ticketpriorität
intro: Du kannst den Schweregrad deines Problems und dessen Auswirkungen auf dich und dein Team über die Priorität deines Supporttickets kommunizieren.
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
ms.openlocfilehash: bce2a30ad25b93274e982991f81be5b1b796c685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134154'
---
Wenn du den {% data variables.contact.enterprise_support %} kontaktierst, kannst du eine von {% ifversion ghes or ghae %}vier{% else %}three{% endif %} Prioritäten für das Ticket auswählen: {% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %},{% endif %} {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %} oder {% data variables.product.support_ticket_priority_low %}.

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## Ticketpriorität für {% data variables.product.prodname_ghe_server %}

{% data reusables.support.ghes-priorities %}

## Ticketpriorität für {% data variables.product.prodname_advanced_security %}

| Priority | Beschreibung |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %} funktioniert nicht oder bricht ab oder ist stark beeinträchtigt, so dass der Endbenutzer die Software nicht vernünftig nutzen kann und es gibt keine Möglichkeit, das Problem zu umgehen. |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %} funktioniert inkonsistent, was die Nutzung und Produktivität für den Endbenutzer beeinträchtigt. |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %} funktioniert beständig, aber der Endbenutzer bittet um geringfügige Änderungen in der Software, wie z.B. Dokumentationsaktualisierungen, Behebung kosmetischer Fehler oder Erweiterungen.|

{% elsif ghae %} {% data reusables.support.ghae-priorities %} {% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

Du kannst Prioritätsfragen einreichen, wenn du {% data variables.product.prodname_ghe_cloud %} gekauft hast oder ein Mitglied, externer Mitarbeiter oder Abrechnungsmanager einer {% data variables.product.prodname_dotcom %}-Organisation bist, die aktuell {% data variables.product.prodname_ghe_cloud %} abonniert hat.

Fragen, die für Prioritätsantworten qualifiziert sind:
- Fragen, die sich darauf beziehen, dass du nicht auf die zentrale Funktion zur Versionskontrolle von {% data variables.product.prodname_dotcom %} zugreifen oder sie nicht nutzen kannst
- Fragen in Zusammenhang mit der Sicherheit deines Kontos
- Fragen zu peripheren Diensten und Funktionen sind nicht abgedeckt, z. B. Fragen zu Gists, {% data variables.product.prodname_pages %} oder E-Mail-Benachrichtigungen
- Fragen ausschließlich zu Organisationen, die aktuell {% data variables.product.prodname_ghe_cloud %} verwenden

Damit du Dich für eine Prioritätsantwort qualifizierst, musst du folgende Voraussetzungen erfüllen:
- Du reichst deine Frage an den [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic) über eine verifizierte E-Mail-Adresse ein, die mit einer Organisation verknüpft ist, die {% data variables.product.prodname_ghe_cloud %} aktuell verwendet.
- Du reichst bei jeder einzelnen Prioritätssituation ein neues Supportticket ein
- Du reichst deine Frage von Montag bis Freitag in deiner lokalen Zeitzone ein
- Du weißt, dass du die Antwort auf eine Prioritätsanfrage per E-Mail erhältst
- Du arbeitest mit {% data variables.contact.github_support %} zusammen und stellst sämtliche Informationen bereit, um die dich {% data variables.contact.github_support %} bittet.

{% note %}

**Hinweis:** Fragen, die an einem lokalen Feiertag in deiner Region eingereicht werden, sind nicht für eine Prioritätsantwort qualifiziert.

{% endnote %}

Für die angestrebte Reaktionszeit von acht Stunden gilt:
- Sie beginnt zu dem Zeitpunkt, zu dem deine qualifizierte Frage bei {% data variables.contact.github_support %} eingeht.
- Sie beginnt erst, wenn du ausreichend Informationen bereitgestellt hast, damit die Frage beantwortet werden kann, es sei denn, du gibst explizit an, dass dir nicht genügend Informationen vorliegen.
- Sie gilt nicht an Wochenenden in deiner lokalen Zeitzone oder an lokalen Feiertagen in deiner Region.

{% note %}

**Hinweis:** {% data variables.contact.github_support %} garantiert keine Lösung für deine Prioritätsanfrage. {% data variables.contact.github_support %} kann Issues auf einen anderen Prioritätsfragen-Status hoch- oder herabstufen, basierend auf unserer vernünftigen Bewertung der von Ihnen bereitgestellten Informationen.

{% endnote %}

{% endif %}

## Weiterführende Themen

- [Erstellen eines Supporttickets](/support/contacting-github-support/creating-a-support-ticket)
