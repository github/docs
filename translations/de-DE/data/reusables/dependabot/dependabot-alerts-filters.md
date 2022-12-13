---
ms.openlocfilehash: dfbf31bbfeea726bcd0c1852d881aefc8f149c0e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160286"
---
Du kannst {% data variables.product.prodname_dependabot_alerts %} sortieren und filtern, indem du Filter als `key:value`-Paare in die Suchleiste eingibst. 

| Option | BESCHREIBUNG | Beispiel | 
|:---|:---|:---|
| `ecosystem` | Zeigt Warnungen für das ausgewählte Ökosystem an. | Verwende `ecosystem:npm` zum Anzeigen von {% data variables.product.prodname_dependabot_alerts %} für npm. |{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
| `has` | Zeigt Warnungen an, die den ausgewählten Filterkriterien entsprechen. | Verwende `has:patch`, um Warnungen im Zusammenhang mit Empfehlungen anzuzeigen, die einen Patch betreffen.{% ifversion dependabot-alerts-vulnerable-calls %}</br>Verwende `has:vulnerable-calls` zum Anzeigen von Warnungen im Zusammenhang mit Aufrufen anfälliger Funktionen.{% endif %} |{% endif %}
| `is` | Zeigt Warnungen basierend auf ihrem Status an. | Verwende `is:open`, um offene Warnungen anzuzeigen. |
| `manifest` | Zeigt Warnungen für das ausgewählte Manifest an. | Verwende `manifest:webwolf/pom.xml`, um Warnungen für die Datei „pom.xml“ der Webwolf-Anwendung anzuzeigen. |
| `package` | Zeigt Warnungen für das ausgewählte Paket an. | Verwende `package:django`, um Warnungen für Django anzuzeigen. |
| `resolution` | Zeigt Warnungen mit dem ausgewählten Auflösungsstatus an. | Verwende `resolution:no-bandwidth` zum Anzeigen von Warnungen, die ausgesetzt wurden, weil zur Behebung keine Zeit oder keine Ressourcen verfügbar sind. |
| `repo` |  Zeigt Warnungen basierend auf dem Repository an, auf das sie sich beziehen.</br>Beachte, dass dieser Filter nur in Sicherheitsübersichten verfügbar ist. Weitere Informationen findest du unter [Informationen zu Sicherheitsübersichten](/code-security/security-overview/about-the-security-overview). | Verwende `repo:octocat-repo`, um Warnungen im Repository namens `octocat-repo` anzuzeigen. |{%- ifversion dependabot-alerts-development-label %}
| `scope` | Zeigt Warnungen basierend auf dem Bereich der Abhängigkeit an, auf die sie sich beziehen. | Verwende `scope:development`, um Warnungen für Abhängigkeiten anzuzeigen, die nur während der Entwicklung verwendet werden. |{% endif %}
| `severity` | Zeigt Warnungen basierend auf ihrem Schweregrad an. | Verwende `severity:high`, um Warnungen mit dem Schweregrad „Hoch“ anzuzeigen. |{%- ifversion dependabot-most-important-sort-option %}
| `sort` | Zeigt Warnungen entsprechend der ausgewählten Sortierreihenfolge an. | Die Standardsortieroption für Warnungen ist `sort:most-important`, die Warnungen nach Wichtigkeit bewertet.</br>Verwende `sort:newest`, um die neuesten von {% data variables.product.prodname_dependabot %} gemeldeten Warnungen anzuzeigen. |{% endif %}
