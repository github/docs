---
title: Informationen zur Abrechnung von GitHub Advanced Security
intro: 'Wenn du {% data variables.product.prodname_GH_advanced_security %}-Features{% ifversion fpt or ghec %} in einem privaten oder internen Repository{% endif %} verwenden möchtest, benötigst du eine Lizenz{% ifversion fpt %} für dein Unternehmen{% endif %}.{% ifversion fpt or ghec %} Diese Features sind für öffentliche Repositorys auf {% data variables.product.prodname_dotcom_the_website %} kostenlos.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: 09e7634b5ab0ace00c847f9db9faf229fc8e840e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066930'
---
## Informationen zur Abrechnung von {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

Wenn du {% data variables.product.prodname_GH_advanced_security %}-Features für ein beliebiges Repository außer einem öffentlichen Repository für {% data variables.product.prodname_dotcom_the_website %} verwenden möchtest, benötigst du eine {% data variables.product.prodname_GH_advanced_security %}-Lizenz, die mit {% data variables.product.prodname_ghe_cloud %} oder {% data variables.product.prodname_ghe_server %} verfügbar ist. Weitere Informationen zu {% data variables.product.prodname_GH_advanced_security %} findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security).

Weitere Informationen zur Abrechnung für {% data variables.product.prodname_GH_advanced_security %} findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

Wenn du {% data variables.product.prodname_GH_advanced_security %}-Features für ein beliebiges Repository außer einem öffentlichen Repository für {% data variables.product.prodname_dotcom_the_website %} verwenden möchtest, benötigst du eine {% data variables.product.prodname_GH_advanced_security %}-Lizenz. Weitere Informationen zu {% data variables.product.prodname_GH_advanced_security %} findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security).

{% elsif ghes %}

Du kannst zusätzliche Features für die Codesicherheit für Benutzer zur Verfügung stellen, indem du eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} erwirbst und hochlädst. Weitere Informationen zu {% data variables.product.prodname_GH_advanced_security %} findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security).

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

Bei Fragen zur Lizenzierung von {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen wende dich an {% data variables.contact.contact_enterprise_sales %}.

## Informationen zu Committernummern von {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

Du kannst Richtlinien erzwingen, um die Verwendung von {% data variables.product.prodname_advanced_security %} durch Organisationen, die ihrem Unternehmenskonto gehören, zu ermöglichen oder zu deaktivieren. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_advanced_security %} in deinem Unternehmen]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% ifversion fpt or ghes or ghec %}

Weitere Informationen zur Anzeige der Lizenznutzung findest du unter [Anzeigen deiner {% data variables.product.prodname_GH_advanced_security %}-Nutzung](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage).

{% endif %}

## Grundlegendes zur aktiven Committernutzung

In der Zeitleiste des folgenden Beispiels wird veranschaulicht, wie sich die Anzahl der aktiven Committer für {% data variables.product.prodname_GH_advanced_security %} im Laufe der Zeit in einem Unternehmen ändern kann. Für jeden Monat werden Ereignisse zusammen mit der resultierenden Committerzahl aufgeführt.

| Date | Ereignisse im Monat | Committer insgesamt | 
| :- | :- | -: | 
| <nobr>15. April</nobr> | Ein Mitglied deines Unternehmens aktiviert {% data variables.product.prodname_GH_advanced_security %} für Repository **X**. 50 Personen haben in den letzten 90 Tagen in Repository **X** Code committet. | **50** | 
| <nobr>1\. Mai</nobr> | Entwickler **A** verlässt das Team, das an Repository **X** arbeitet. Die Beiträge von Entwickler **A** zählen weiterhin für 90 Tage. | **50** | **50** |
| <nobr>1\. August</nobr> | Die Beiträge von Entwickler **A** zählen nicht mehr zu den erforderlichen Lizenzen, da 90 Tage abgelaufen sind. | <sub>_50 – 1_</sub></br>**49** | 
| <nobr>15. August</nobr> | Ein Mitglied deines Unternehmens aktiviert {% data variables.product.prodname_GH_advanced_security %} für ein zweites Repository, Repository **Y**. In den letzten 90 Tagen leisteten insgesamt 20 Entwickler*innen einen Beitrag zu diesem Repository. Von diesen 20 Entwicklern arbeiteten 10 auch kürzlich an Repository **X** und benötigen keine zusätzlichen Lizenzen. | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>16. August</nobr> | Ein Mitglied deines Unternehmens deaktiviert {% data variables.product.prodname_GH_advanced_security %} für Repository **X**. Von den 49 Entwickler*innen, die an Repository **X** arbeiten, arbeiten 10 ebenfalls an Repository **Y**, zu dem insgesamt 20 Entwickler*innen in den letzten 90 Tagen Beiträge geleistet haben. | <sub>_49 – 29_</sub><br/>**20** |

{% note %}

**Hinweis:** Ein Benutzer wird als aktiv gekennzeichnet, wenn seine Commits zu jedem Branch eines Repositorys gepusht werden, auch wenn die Commits vor mehr als 90 Tagen erstellt wurden.

{% endnote %}

## Optimale Nutzung von {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
