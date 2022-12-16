---
title: Filtern von Codescanbenachrichtigungen in Pull-Anforderungen
shortTitle: Triage alerts in pull requests
intro: 'Wenn {% data variables.product.prodname_code_scanning %} ein Problem in einem Pull Request erkennt, kannst du den hervorgehobenen Code überprüfen und die Warnung beheben.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
ms.openlocfilehash: f73b0ef30b4512bc951fdbae4ae2f3c300e4c534
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162742'
---
{% data reusables.code-scanning.beta %}

## Informationen zu {% data variables.product.prodname_code_scanning %} Ergebnissen für Pull-Anforderungen

In Repositorys, in denen {% data variables.product.prodname_code_scanning %} als Pull-Anforderungsprüfung konfiguriert ist, prüft {% data variables.product.prodname_code_scanning %} den Code in der Pull-Anforderung. Standardmäßig ist dies auf Pull-Anforderungen beschränkt, die auf den Standardzweig abzielen, aber du kannst diese Konfiguration in {% data variables.product.prodname_actions %} oder in einem CI/CD-System eines Drittanbieters ändern. Wenn das Zusammenführen der Änderungen neue {% data variables.product.prodname_code_scanning %}-Warnungen im Zielbranch verursacht, werden diese Warnungen an mehreren Stellen gemeldet.

- Ergebnisse im Pull Request überprüfen {% ifversion code-scanning-pr-conversations-tab %}
- Die Registerkarte **Unterhaltung** des Pull Requests als Teil einer Pull Request-Überprüfung {% endif %} 
- Die Registerkarte **Geänderte Dateien** des Pull Requests

Wenn du Schreibberechtigung für das Repository hast, kannst du alle vorhandenen {% data variables.product.prodname_code_scanning %} Warnungen auf der Registerkarte **Sicherheit** anzeigen. Informationen zu Repository-Warnungen findest du unter „[Verwalten von {% data variables.product.prodname_code_scanning %} Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).“

In Repositorys, in denen die {% data variables.product.prodname_code_scanning %} so konfiguriert ist, dass bei jedem Codepush eine Überprüfung durchgeführt wird, ordnet die {% data variables.product.prodname_code_scanning %} die Ergebnisse auch allen offenen Pull Requests zu und fügt die Warnungen als Anmerkungen an denselben Stellen wie andere Pull Request-Überprüfungen ein. Weitere Informationen findest du unter [Überprüfen bei Push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push).

Wenn deine Pull-Anforderung auf eine geschützte Verzweigung ausgerichtet ist, die {% data variables.product.prodname_code_scanning %}verwendet, und der Repositorybesitzer hat erforderliche Statusüberprüfungen konfiguriert, muss die Überprüfung "{% data variables.product.prodname_code_scanning_capc %} Ergebnisse" übergeben werden, bevor du die Pull-Anforderung zusammenführen kannst. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging).

## Informationen zu {% data variables.product.prodname_code_scanning %} als Pull-Anforderungsprüfung

Es gibt viele Optionen zum Konfigurieren von {% data variables.product.prodname_code_scanning %} als Pull-Anforderungsprüfung, sodass die genaue Einrichtung jedes Repositorys variieren wird und einige mehr als eine Überprüfung haben. 

### {% data variables.product.prodname_code_scanning_capc %} Ergebnisüberprüfung

Für alle Konfigurationen von {% data variables.product.prodname_code_scanning %} lautet die Prüfung, die die Ergebnisse von {% data variables.product.prodname_code_scanning %} enthält: **{% data variables.product.prodname_code_scanning_capc %} Ergebnisse**. Die Ergebnisse für jedes verwendete Analysetool werden separat angezeigt. Alle neuen Warnungen, die durch Änderungen in der Pull-Anforderung verursacht werden, werden als Anmerkungen angezeigt. 

Klicke auf **Alle Branchwarnungen anzeigen**, um alle Warnungen für den analysierten Branch anzuzeigen. Dadurch wird die vollständige Warnungsansicht geöffnet, in der du alle Warnungen auf der Verzweigung nach Typ, Schweregrad, Tag usw. filtern kannst. Weitere Informationen findest unter „[Verwalten von Codescanbenachrichtigungen für dein Repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts).“

![Überprüfen der Ergebnisse einer {% data variables.product.prodname_code_scanning_capc %} für einen Pull Request](/assets/images/help/repository/code-scanning-results-check.png)

### {% data variables.product.prodname_code_scanning_capc %} Ergebnisüberprüfung Ausfälle

Wenn die {% data variables.product.prodname_code_scanning %}-Ergebnisprüfung Probleme mit einem Schweregrad von `error`, `critical` oder `high` ermittelt, schlägt die Prüfung fehl, und der Fehler wird in den Überprüfungsergebnissen gemeldet. Wenn alle von {% data variables.product.prodname_code_scanning %} gefundenen Ergebnisse einen niedrigeren Schweregrad aufweisen, werden die Benachrichtigungen als Warnungen oder Hinweise behandelt und die Prüfung ist erfolgreich.

![Fehlgeschlagene {% data variables.product.prodname_code_scanning %} Prüfung einer Pull-Anforderung](/assets/images/help/repository/code-scanning-check-failure.png)

Du kannst das Standardverhalten in deinen Repositoryeinstellungen außer Kraft setzen, indem du die Schweregrade sowie Sicherheitsgrade festlegst, die zu einem Fehler bei der Pull Request-Überprüfung führen. Weitere Informationen findest du unter „[Definieren der Schweregrade, die einen Fehler bei der Überprüfung von Pull-Anforderungen verursachen](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure).“

### Andere {% data variables.product.prodname_code_scanning %} Prüfungen

Abhängig von deiner Konfiguration kann es sein, dass bei Pull-Anforderungen mit {% data variables.product.prodname_code_scanning %} zusätzliche Prüfungen laufen. Dies sind in der Regel Workflows, die den Code analysieren oder {% data variables.product.prodname_code_scanning %}-Ergebnisse hochladen. Diese Überprüfungen sind nützlich für die Problembehandlung, wenn Probleme mit der Analyse auftreten. 

Wenn das Repository beispielsweise den {% data variables.code-scanning.codeql_workflow %} verwendet, wird eine Überprüfung **{% data variables.product.prodname_codeql %} / Analyze (SPRACHE)** für jede Sprache ausgeführt, bevor die Ergebnisüberprüfung durchgeführt wird. Die Analyseprüfung kann fehlschlagen, wenn es Probleme mit der Konfiguration gibt oder wenn die Pull-Anforderung den Build für eine Sprache unterbricht, die für die Analyse kompiliert werden muss (zum Beispiel C/C++, C# oder Java). 

Wie bei anderen Pull-Anforderungsprüfungen kannst du auf der Registerkarte **Prüfungen** alle Details zum Fehler der Prüfung einsehen. Weitere Informationen zum Konfigurieren und zur Fehlerbehebung findest du unter „[Konfigurieren von {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)“ oder „[ Fehlerbehebung für den {% data variables.product.prodname_codeql %} Workflow](/code-security/secure-coding/troubleshooting-the-codeql-workflow).“

## Anzeigen einer Warnung auf deiner Pull-Anforderung

{% ifversion code-scanning-pr-conversations-tab %} Du kannst alle {% data variables.product.prodname_code_scanning %}-Warnungen anzeigen, die in einem Pull Request eingeführt wurden, indem du die Registerkarte **Unterhaltung** aufrufst. {% data variables.product.prodname_code_scanning_capc %} postet eine Pull Request-Überprüfung, die jede Warnung in den Codezeilen, die diese ausgelöst haben, als Anmerkung anzeigt. Du kannst die Warnungen kommentieren, diese löschen und auch Pfade für die Warnungen direkt über die Anmerkungen anzeigen. Du kannst die vollständigen Details einer Warnung anzeigen, indem du auf den Link „Weitere Details anzeigen“ klickst, über den du zur Detailseite der Warnung gelangst.

![Warnungsanmerkung auf der Registerkarte „Unterhaltung“ eines Pull Requests](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

Du kannst auch alle {% data variables.product.prodname_code_scanning %}-Warnungen auf der Registerkarte **Geänderte Dateien** des Pull Requests anzeigen. Vorhandene {% data variables.product.prodname_code_scanning %}-Warnungen zu einer Datei, die sich außerhalb des Diff der im Pull Request eingeführten Änderungen befinden, werden nur auf der Registerkarte **Geänderte Dateien** angezeigt.

{% else %} Du kannst alle {% data variables.product.prodname_code_scanning %}-Warnungen anzeigen, die in einem Pull Request eingeführt wurden, indem du die Registerkarte **Geänderte Dateien** anzeigst. Jede Warnung wird als Anmerkung in den Codezeilen angezeigt, die die Warnung ausgelöst haben. Der Schweregrad der Warnung wird in der Anmerkung angezeigt. 

![Warnungsanmerkung innerhalb eines Pull-Request-Diffs](/assets/images/help/repository/code-scanning-pr-annotation.png) {% endif %}

Wenn du über Schreibberechtigungen für das Repository verfügst, enthalten einige Anmerkungen Links mit zusätzlichem Kontext für die Warnung. Im obigen Beispiel aus der {% data variables.product.prodname_codeql %} Analyse kannst du auf den vom **Benutzer bereitgestellten Wert** klicken, um zu sehen, wo die nicht vertrauenswürdigen Daten in den Datenfluss gelangen (dies wird als Quelle bezeichnet). In diesem Fall kannst du auch den vollständigen Pfad von der Quelle zu dem Code anzeigen, der die Daten (die Senke) verwendet, indem du auf **Pfade anzeigen** klickst. So lässt sich leicht überprüfen, ob die Daten nicht vertrauenswürdig sind oder ob die Analyse einen Datenbereinigungsschritt zwischen der Quelle und der Senke nicht erkannt hat. Informationen zum Analysieren des Datenflusses mithilfe von {% data variables.product.prodname_codeql %} findest du unter „[Informationen zur Datenflussanalyse](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/).“

Um weitere Informationen zu einer Warnung anzuzeigen, können Benutzer mit Schreibberechtigung auf den Link **Weitere Details anzeigen** klicken, der in der Anmerkung angezeigt wird. Auf diese Weise kannst du alle Kontext- und Metadaten anzeigen, die vom Tool in einer Warnungsansicht bereitgestellt werden. Im folgenden Beispiel kannst du Tags sehen, die den Schweregrad, den Typ und die relevanten allgemeinen Schwächeaufzählungen (CWEs) für das Problem anzeigen. Die Ansicht zeigt auch, welche Commit das Problem eingeführt hat.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

In der Detailansicht einer Warnung enthalten einige {% data variables.product.prodname_code_scanning %} Tools, wie z.B. {% data variables.product.prodname_codeql %}-Analyse, auch eine Beschreibung des Problems und einen Link **Mehr anzeigen**, der Dir zeigt, wie du deinen Code beheben kannst.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} ![ Warnungsbeschreibung und Link zum Anzeigen weiterer Informationen](/assets/images/help/repository/code-scanning-pr-alert.png) {% else %} ![Warnungsbeschreibung und Link zum Anzeigen weiterer Informationen](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png) {% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## Kommentieren einer Warnung in einem Pull Request

Du kannst alle von den Änderungen in einem Pull Request eingeführten {% data variables.product.prodname_code_scanning %}-Warnungen kommentieren. Warnungen werden als Anmerkungen auf der Registerkarte **Unterhaltung** eines Pull Requests als Teil einer Pull Request-Überprüfung und auch auf der Registerkarte **Geänderte Dateien** angezeigt. Du kannst nur Warnungen kommentieren, die von den Änderungen in einem Pull Request eingeführt wurden. Vorhandene {% data variables.product.prodname_code_scanning %}-Warnungen zu einer Datei, die sich außerhalb der im Pull Request eingeführten Änderungen befinden, werden zwar auf der Registerkarte **Geänderte Dateien** angezeigt, können aber nicht kommentiert werden.

Du kannst auswählen, dass alle Unterhaltungen in einem Pull Request erforderlich sind, einschließlich derer zu {% data variables.product.prodname_code_scanning %}-Warnungen, die aufgelöst werden sollen, bevor ein Pull Request zusammengeführt werden kann. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging).
{% endif %}
## Beheben einer Warnung auf deiner Pull-Anforderung

Jeder, der Push-Zugriff auf eine Pull-Anforderung hat, kann eine {% data variables.product.prodname_code_scanning %} Warnung beheben, die in dieser Pull-Anforderung enthalten ist. Wenn du Änderungen an der Pull-Anforderung vornimmst, löst dies einen neuen Durchlauf der Pull-Anforderungsprüfung aus. Wenn deine Änderungen das Problem beheben, wird die Meldung geschlossen und der Vermerk entfernt.

## Verwerfen einer Warnung auf deiner Pull-Anforderung

Eine andere Möglichkeit, eine Meldung zu schließen, ist, sie zu verwerfen. Du kannst eine Meldung verwerfen, wenn du der Meinung bist, dass sie nicht behoben werden muss. {% data reusables.code-scanning.close-alert-examples %} Wenn du eine Schreibberechtigung für das Repository hast, ist die Schaltfläche **Verwerfen** in den Code-Anmerkungen und in der Zusammenfassung der Alarme verfügbar. Wenn du auf **Verwerfen** klickst, wirst du aufgefordert, einen Grund zum Verwerfen der Warnung auszuwählen.
{% ifversion comment-dismissed-code-scanning-alert %} ![Screenshot der Codeüberprüfungswarnung mit Dropdownmenü zum Auswählen eines Löschgrunds](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {% else %} ![Auswählen, warum eine Warnung gelöscht wird](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {% endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Weitere Informationen zum Verwerfen von Warnungen findest du unter {% ifversion delete-code-scanning-alerts %}[Verwalten von {% data variables.product.prodname_code_scanning %} Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts).{% else %} [Verwalten von {% data variables.product.prodname_code_scanning %} Warnungen für dein Repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts).{% endif %}
