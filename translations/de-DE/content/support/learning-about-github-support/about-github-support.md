---
title: Informationen zum GitHub Support
intro: 'Du kannst den GitHub-Support kontaktieren, wenn du Hilfe bei der Behebung von GitHub-Problemen benötigst.'
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: 4044d5741b6df2827fa41c71476f4fb66ac717a4
ms.sourcegitcommit: 5b0becac9098ab45c2204882d719f5cf17bfff18
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120864'
---
## Informationen zum {% data variables.contact.github_support %}

Die für {% data variables.product.prodname_dotcom %}-Benutzer verfügbaren Supportoptionen hängen von den von ihren persönlichen Konten verwendeten Produkten, von Organisationen oder Unternehmen, deren Mitglied sie sind, sowie von den von ihnen verwalteten {% data variables.product.prodname_ghe_server %}-Instanzen ab. Jedes Produkt umfasst eine Standardsupportstufe, und Konten, die {% data variables.product.prodname_enterprise %} verwenden, können {% data variables.contact.premium_support %} erwerben.

{% ifversion fpt %} Wenn du Mitglied einer Organisation bist, die {% data variables.product.prodname_enterprise %} verwendet, kannst du in der oberen rechten Ecke von {% data variables.product.prodname_docs %} das Dropdownmenü verwenden, um eine für das Produkt geeignete Version dieser Artikel anzuzeigen. Weitere Informationen findest du unter [Informationen zu Versionen der GitHub-Dokumentation](/get-started/learning-about-github/about-versions-of-github-docs).
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | Standard-Support | Premium Support |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Zum Kauf verfügbar |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Zum Kauf verfügbar |

{% endif %}

{% ifversion ghes %}

Du kannst den {% data variables.contact.enterprise_support %} über das {% data variables.contact.contact_enterprise_portal %} kontaktieren, um Hilfe zu folgenden Themen zu erhalten:
 - Installieren und Verwenden von {% data variables.product.product_name %}
 - Identifizierung und Überprüfung der Ursachen von vermuteten Fehlern
 - Installieren und Verwenden von {% data variables.product.prodname_advanced_security %}

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

Weitere Informationen findest du unter [Informationen zu GitHub Premium Support](/support/about-github-support/about-github-premium-support).

{% endif %}

{% ifversion fpt or ghec or ghae %}

Überprüfe, bevor du den {% data variables.contact.github_support %} kontaktierst, ob aktuelle Incidents sich auf Dienste auf {% data variables.product.product_name %} auf {%- ifversion fpt or ghec %} [{% data variables.product.prodname_dotcom %}-Status](https://githubstatus.com/) {%- elsif ghae %} [{% data variables.product.product_name %}-Status](https://ghestatus.com/) {%- endif %} auswirken. Weitere Informationen findest du unter [Informationen zum GitHub-Status](#about-github-status).

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

Um Konto-, Sicherheits- und Missbrauchsprobleme zu melden oder Supportunterstützung für ein kostenpflichtiges Konto zu erhalten, besuche das {% data variables.contact.contact_support_portal %}. Weitere Informationen findest du unter [Erstellen eines Supporttickets](/support/contacting-github-support/creating-a-support-ticket).
{% endif %}

{% ifversion fpt %} Wenn du über ein kostenpflichtiges Produkt verfügst oder Mitglied einer Organisation mit einem kostenpflichtigen Produkt bist, kannst du den englischsprachigen {% data variables.contact.github_support %} kontaktieren.
{% else %} Mit {% data variables.product.product_name %} hast du Zugang zum Support auf Englisch und Japanisch.
{% endif %}

{% ifversion ghes or ghec %}

Wenn du den {% data variables.contact.github_support %} kontaktieren möchtest, besuche das {% data variables.contact.contact_support_portal %}. Weitere Informationen findest du unter [Erstellen eines Supporttickets](/support/contacting-github-support/creating-a-support-ticket).

{% elsif ghae %}

Du kannst den {% data variables.contact.enterprise_support %} über das {% data variables.contact.ae_azure_portal %} kontaktieren, um Probleme schriftlich zu melden. Weitere Informationen findest du unter [Erstellen eines Supporttickets](/support/contacting-github-support/creating-a-support-ticket).

{% endif %}

{% ifversion not ghae %} E-Mail-Kommunikation vom GitHub-Support wird immer von einer `github.com`- oder `githubsupport.com`-Adresse gesendet.
{% endif %}

## Supportumfang

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## Informationen zum GitHub-Status

Auf der {% data variables.product.prodname_dotcom %}-[Statusseite]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %}) kannst du nachsehen, ob es derzeit Vorfälle gibt, die sich auf die {% data variables.product.product_name %}-Dienste auswirken, und Informationen zu früheren Vorfällen anzeigen.

Du kannst auch ein Abonnement abschließen und per E-Mail, Textnachricht und Webhook benachrichtigt werden, wenn sich ein Vorfall auf {% data variables.product.product_name %} auswirkt.

{% endif %}

{% ifversion ghec or ghes %}
## Informationen zu Supportberechtigungen

Unternehmensinhaber und Abrechnungsmanager verfügen automatisch über eine Supportberechtigung, mit der sie Supporttickets erstellen, anzeigen und kommentieren können, die ihrem Unternehmenskonto zugeordnet sind.

Unternehmensinhaber können auch Mitgliedern von Organisationen, die sich im Besitz ihres Unternehmenskontos befinden, Supportberechtigungen zuweisen, sodass diese Mitglieder Supporttickets erstellen, anzeigen und kommentieren können. Weitere Informationen findest du unter [Verwalten von Supportberechtigungen für dein Unternehmen](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

{% endif %}

{% ifversion fpt or ghec %}
## {% data variables.contact.github_support %} temporären Zugriff auf ein privates Repository gewähren

Wenn der {% data variables.contact.github_support %} auf ein privates Repository zugreifen muss, um deine Supportanfrage zu bearbeiten, erhält der Inhaber des Repositorys eine E-Mail mit einem Link, um den temporären Zugriff zuzulassen oder abzulehnen. Der Inhaber hat 20 Tage Zeit, um die Anfrage anzunehmen oder abzulehnen, bevor diese abläuft. Wenn der Inhaber die Anfrage annimmt, hat der {% data variables.contact.github_support %} fünf Tage lang Zugriff auf das Repository. In diesem Zeitfenster können {% data variables.contact.github_support %}-Mitarbeiter mit den erforderlichen Berechtigungen das Repository jeweils bis zu zwei Stunden entsperren und das Repository erneut sperren, wenn die Arbeit frühzeitig abgeschlossen ist. Jeder {% data variables.contact.github_support %}-Mitarbeiterzugriff generiert Überwachungsprotokollereignisse, und die Sichtbarkeit des Repositorys ist zu keinem Zeitpunkt beeinträchtigt.

Der {% data variables.contact.github_support %} greift ohne deine ausdrückliche Zustimmung niemals auf deine privaten Repositorys zu. Weitere Informationen findest du in den [Nutzungsbestimmungen](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).
{% endif %}

{% ifversion ghec or ghes %}
## Kontakt zu GitHub Sales und GitHub Training

Wende dich bei Fragen zur Preisgestaltung, Lizenzierung, zu Verlängerungen, Angeboten und Zahlungen sowie bei anderen damit zusammenhängenden Fragen an {% data variables.contact.contact_enterprise_sales %} oder rufe [+1 (877) 448-4820](tel:+1-877-448-4820) an.

Weitere Informationen zu den Weiterbildungsmöglichkeiten, einschließlich individuell angepasster Schulungen, findest du auf der [Schulungsseite von {% data variables.product.company_short %}](https://services.github.com/).

{% note %}

**Hinweis:** Schulungen sind im Leistungsumfang des {% data variables.product.premium_plus_support_plan %}s enthalten. Weitere Informationen findest du unter [Informationen zu GitHub Premium Support](/support/about-github-support/about-github-premium-support).

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## Geschäftszeiten

### Support auf Englisch

Bei nicht dringenden herkömmlichen Probleme bieten wir 24 Stunden am Tag, 5 Tage die Woche, außer an Wochenenden und nationalen Feiertagen in den USA, Support in englischer Sprache. Die Antwortdauer beträgt in der Regel 24 Stunden.

{% ifversion ghes %} In dringenden Fällen sind wir rund um die Uhr (7 Tage die Woche) erreichbar, auch an nationalen Feiertagen in den USA.
{% endif %}

### Support auf Japanisch

Bei einfachen, nicht dringenden Problemen ist der Support auf Japanisch von Montag bis Freitag von 9:00 bis 17:00 Uhr JST verfügbar, außer an nationalen Feiertagen in Japan. 

{% ifversion ghes %} Bei dringenden Problemen bieten wir rund um die Uhr (7 Tage die Woche), auch an nationalen Feiertagen in den USA, Support in englischer Sprache.
{% endif %}

Eine vollständige Liste der vom {% data variables.contact.enterprise_support %} wahrgenommenen nationalen Feiertage in den USA und in Japan findest du unter [Feiertagsübersicht](#holiday-schedules).

## Feiertagsübersicht

Bei dringenden Problemen können wir dir rund um die Uhr auf Englisch helfen, auch an Feiertagen in den USA und Japan.

### Feiertage in den USA

{% data variables.contact.enterprise_support %} beobachtet diese Feiertage in den USA. dessen ungeachtet steht unser Support-Team zur Verfügung, um dringende Tickets zu beantworten.

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### Feiertage in Japan

{% data variables.contact.enterprise_support %} bietet vom 28. Dezember bis zum 3. Januar sowie an den unter [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html) aufgelisteten Feiertagen keinen Support auf Japanisch.

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## Support-Tickets lösen und schließen

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## Weiterführende Themen

{%- ifversion ghes %}
- Abschnitt 10 zum Support in der [{% data variables.product.prodname_ghe_server %}-Lizenzvereinbarung](https://enterprise.github.com/license) {%- endif %}
- [Erstellen eines Supporttickets](/support/contacting-github-support/creating-a-support-ticket) {%- ifversion not ghae %}
- [Anzeigen und Aktualisieren von Supporttickets](/support/contacting-github-support/viewing-and-updating-support-tickets) {%- endif %}
