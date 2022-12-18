---
title: Verwalten von Codescanwarnungen für dein Repository
shortTitle: Manage alerts
intro: 'Über die Sicherheitsansicht {% ifversion delete-code-scanning-alerts %}kannst du Warnungen anzeigen, korrigieren, schließen oder löschen {% else %}kannst du Warnungen{% endif %} für mögliche Sicherheitsrisiken oder Fehler im Code deines Projekts anzeigen, beheben oder schließen.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693327'
---
{% data reusables.code-scanning.beta %}

## Anzeigen der Warnungen für ein Repository

Jeder mit Leseberechtigung für ein Repository kann {% data variables.product.prodname_code_scanning %}-Anmerkungen zu Pull Requests anzeigen. Weitere Informationen findest du unter [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

du benötigst Schreibberechtigungen, um eine Zusammenfassung aller Warnungen für ein Repository auf der Registerkarte **Sicherheit** anzuzeigen.

Standardmäßig wird die Seite für Codeüberprüfungswarnungen so gefiltert, dass Warnungen ausschließlich für den Standardbranch des Repositorys angezeigt werden.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Verwende optional das Feld für die Freitextsuche oder die Dropdownmenüs, um Warnungen zu filtern. Du kannst beispielsweise nach dem Tool filtern, das zum Identifizieren von Warnungen verwendet wurde.
   ![Nach Tool filtern](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![Zusammenfassung der Warnungen](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![Der Abschnitt „Betroffene Branches“ in einer Warnung](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. Wenn die Warnung auf ein Problem mit dem Datenfluss hinweist, klicke optional auf **Show paths** (Pfade anzeigen), um den Pfad von der Datenquelle zur Senke anzuzeigen, in der sie verwendet wird.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Der Link „Show paths“ (Pfade anzeigen) für eine Warnung](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![Der Link „Show paths“ (Pfade anzeigen) für eine Warnung](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. Warnungen aus der {% data variables.product.prodname_codeql %}-Analyse beinhalten eine Beschreibung des Problems. Klicke auf **Mehr anzeigen**, um weitere Informationen dazu anzuzeigen, wie du den Code korrigierst.
   ![Details einer Warnung](/assets/images/help/repository/code-scanning-alert-details.png)

Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %}-Warnungen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts).

{% note %}

**Hinweis:** Für die {% data variables.product.prodname_code_scanning %}-Analyse mit {% data variables.product.prodname_codeql %} kannst du Informationen zu der neuesten Ausführung in einer Kopfzeile oben in der Liste der {% data variables.product.prodname_code_scanning %}-Warnungen für das Repository anzeigen. 

Einsehen kannst du hier beispielsweise den Zeitpunkt, zu dem der letzte Scan ausgeführt wurde, die Anzahl der Codezeilen, die im Vergleich zur Gesamtzahl der Codezeilen im Repository analysiert wurden, und die Gesamtzahl der Warnungen, die generiert wurden.
  ![UI-Banner](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## Filtern von {% data variables.product.prodname_code_scanning %}-Warnungen

Du kannst die Warnungen filtern, die in der Ansicht für {% data variables.product.prodname_code_scanning %}-Warnungen angezeigt werden. Dies ist nützlich, wenn viele Warnungen vorhanden sind, da du dich auf einen bestimmten Warnungstyp konzentrieren kannst. Es gibt einige vordefinierte Filter und einen Bereich von Schlüsselwörtern, mit denen du die Liste der angezeigten Warnungen verfeinern kannst. 

- Klicke zum Verwenden eines vordefinierten Filters auf **Filter** oder einen Filter, der in der Kopfzeile der Liste der Warnungen angezeigt wird, und wähle einen Filter aus der Dropdownliste aus.
  {% ifversion fpt or ghes or ghec %}![Vordefinierte Filter](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![Vordefinierte Filter](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Wenn du ein Schlüsselwort verwenden möchtest, tätige eine Eingabe entweder direkt im Textfeld „Filter“, oder:
  1. Klicke in das Textfeld „Filter“, um eine Liste aller verfügbaren Filterschlüsselwörter anzuzeigen.
  2. Klicke auf das Schlüsselwort, das du verwenden möchtest, und wähle dann einen Wert aus der Dropdownliste aus.
  ![Filterliste für Schlüsselwörter](/assets/images/help/repository/code-scanning-filter-keywords.png)

Der Vorteil der Verwendung von Schlüsselwortfiltern besteht darin, dass nur Werte mit Ergebnissen in den Dropdownlisten angezeigt werden. So lässt es sich erleichtern, die Festlegung von Filtern zu verhindern, mit denen keine Ergebnisse gefunden werden.

Wenn du mehrere Filter eingibst, werden in der Ansicht Warnungen angezeigt, die mit _allen_ festgelegten Filtern übereinstimmen. Beispielsweise werden mit `is:closed severity:high branch:main` nur geschlossene Warnungen mit hohem Schweregrad angezeigt, die im `main`-Branch vorhanden sind. Die Ausnahme sind Filter im Zusammenhang mit Referenzen (`ref`, `branch` und `pr`): Mit `is:open branch:main branch:next` werden geöffnete Warnungen aus dem `main`-Branch und dem `next`-Branch angezeigt.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

Du kannst dem `tag` Filter `-` voranstellen, um Ergebnisse mit diesem Tag auszuschließen. Beispielsweise werden mit `-tag:style` nur Warnungen angezeigt, die nicht über das `style`-Tag verfügen{% ifversion codeql-ml-queries %}, und mit `-tag:experimental` werden alle experimentellen Warnungen ausgelassen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %}-Warnungen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts).{% else %}.{% endif %}

{% endif %}

### Beschränken von Ergebnissen nur auf Anwendungscode

Du kannst den Filter „Nur Warnungen im Anwendungscode“ oder `autofilter:true`-Schlüsselwort und -Wert verwenden, um Ergebnisse auf Warnungen im Anwendungscode einzuschränken. Weitere Informationen zu Codetypen, bei denen es sich nicht um Anwendungscode handelt, findest du im obigen Abschnitt unter [Informationen zu nicht Teil des Anwendungscodes darstellenden Bezeichnungen für Warnungen](#about-labels-for-alerts-that-are-not-found-in-application-code).

{% ifversion fpt or ghes or ghec %}

## Durchsuchen von {% data variables.product.prodname_code_scanning %}-Warnungen

Du kannst die Liste der Warnungen durchsuchen. Dies ist zum Beispiel nützlich, wenn es eine große Anzahl von Warnungen im Repository gibt oder wenn du den genauen Namen für eine Warnung nicht kennst. Die Freitextsuche wird von {% data variables.product.product_name %} anhand folgender Parameter durchgeführt:
- Der Name der Warnung
- Die Warnungsdetails (dies umfasst auch die Informationen, die standardmäßig im reduzierbaren Abschnitt **Mehr anzeigen** ausgeblendet sind) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Die in Suchvorgängen verwendeten Warnungsinformationen](/assets/images/help/repository/code-scanning-free-text-search-areas.png) {% else %} ![Die in Suchvorgängen verwendeten Warnungsinformationen](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| Unterstützte Suche | Syntaxbeispiel | Ergebnisse |
| ---- | ---- | ---- |
| Einzelwortsuche | `injection` | Gibt alle Warnungen zurück, die das Wort `injection` enthalten |
| Suche nach mehreren Wörtern | `sql injection` | Gibt alle Warnungen zurück, die das Wort `sql` oder `injection` enthalten |
| Suchen nach genauen Übereinstimmungen</br>(doppelte Anführungszeichen verwenden) |  `"sql injection"` | Gibt alle Warnungen zurück, die die genaue Wortgruppe `sql injection` enthalten |
| OR-Suche | `sql OR injection` | Gibt alle Warnungen zurück, die das Wort `sql` oder `injection` enthalten |
| AND-Suche | `sql AND injection` | Gibt alle Warnungen zurück, die sowohl das Wort `sql` als auch das Wort `injection` enthalten | 

{% tip %}

**Tipps:** 
- Die Suche nach mehreren Wörtern entspricht einer OR-Suche.
- Bei der AND-Suche werden Ergebnisse zurückgegeben, in denen die Suchbegriffe _an beliebiger Stelle_ ungeachtet der Reihenfolge im Warnungsnamen oder in den Warnungsdetails gefunden werden.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Gib rechts neben dem Dropdownmenü **Filter** im Feld für die Freitextsuche die Schlüsselwörter ein, nach denen gesucht werden soll.
  ![Das Feld für die Freitextsuche](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Drücke die <kbd>EINGABETASTE</kbd>. Die Liste der Warnungen enthält die geöffneten {% data variables.product.prodname_code_scanning %}-Warnungen, die den Suchkriterien entsprechen.

{% endif %}

{% ifversion code-scanning-task-lists %}
## Nachverfolgen von {% data variables.product.prodname_code_scanning %}-Warnungen in Issues

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Beheben einer Warnung

Alle Benutzer mit Schreibberechtigung für ein Repository können eine Warnung beheben, indem sie eine Korrektur am Code committen. Wenn im Repository die Ausführung von {% data variables.product.prodname_code_scanning %} für Pull Requests geplant ist, ist es am besten, einen Pull Request mit der Korrektur auszulösen. Dadurch wird eine {% data variables.product.prodname_code_scanning %}-Analyse der Änderungen ausgelöst und getestet, ob durch die Korrektur neue Probleme entstehen. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) und [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

Wenn du über Schreibberechtigungen für ein Repository verfügst, kannst du behobene Warnungen anzeigen, indem du die Zusammenfassung von Warnungen anzeigen und auf **Geschlossen** klickst. Weitere Informationen findest du unter [Anzeigen der Warnungen für ein Repository](#viewing-the-alerts-for-a-repository). In der Liste „Geschlossen“ werden behobene Warnungen und solche Warnungen angezeigt, die Benutzer verworfen haben.

Du kannst die Freitextsuche oder die Filter nutzen, um eine Teilmenge der Warnungen anzuzeigen und dann alle übereinstimmenden Warnungen als geschlossen markieren. 

Warnungen können in einem Branch behoben werden, aber nicht in einem anderen. Du kannst den Filter „Branch“ in der Zusammenfassung der Warnungen verwenden, um zu überprüfen, ob eine Warnung in einem bestimmten Branch behoben ist.

![Filtern von Warnungen nach Branch](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

**Hinweis:** Wenn du die Codeüberprüfung mit mehreren Konfigurationen ausführst, kann es passieren, dass eine Warnung mehrere Analyse-Ursprünge aufweist. Wenn du nicht alle Konfigurationen regelmäßig ausführst, werden möglicherweise Warnungen angezeigt, die in einem Analyse-Ursprung behoben sind, aber nicht in einem anderen. Weitere Informationen findest du unter [Informationen zu Analyse-Ursprüngen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins).

{% endnote %} {% endif %}
## Schließen {% ifversion delete-code-scanning-alerts %}oder Löschen{% endif %} von Warnungen

Es gibt zwei Möglichkeiten zum Schließen einer Warnung. Du kannst das Problem im Code beheben oder die Warnung verwerfen. {% ifversion delete-code-scanning-alerts %}Wenn über du Administratorberechtigungen für das Repository verfügst, kannst du Warnungen auch löschen. Das Löschen von Warnungen ist in Situationen nützlich, in denen du ein {% data variables.product.prodname_code_scanning %}-Tool eingerichtet und dann beschlossen hast, dieses zu entfernen, oder in denen du eine {% data variables.product.prodname_codeql %}-Analyse mit einer größeren Gruppe von Abfragen konfiguriert hast, als du weiterhin verwenden möchtest, und dann einige Abfragen aus dem Tool entfernt haben. In beiden Fällen kannst du durch das Löschen von Warnungen die {% data variables.product.prodname_code_scanning %}-Ergebnisse bereinigen. Du kannst Warnungen in der Zusammenfassungsliste auf der Registerkarte **Sicherheit** löschen.{% endif %}

Das Verwerfen einer Warnung ist eine Möglichkeit, eine Warnung zu schließen, die deiner Meinung nach nicht behandelt werden muss. {% data reusables.code-scanning.close-alert-examples %} Du kannst Warnungen aus {% data variables.product.prodname_code_scanning %}-Anmerkungen im Code oder auf der Registerkarte **Sicherheit** in der Zusammenfassungsliste schließen.

Wenn du eine Warnung verwirfst, passiert Folgendes:

- Sie wird in allen Branches geschlossen.
- Die Warnung wird aus den aktuellen Warnungen für dein Projekt entfernt.
- Die Warnung wird in der Zusammenfassung der Warnungen in die Liste „Geschlossen“ verschoben, aus der du die Warnung bei Bedarf erneut öffnen kannst.
- Der Grund für das Schließen der Warnung wird aufgezeichnet.{% ifversion comment-dismissed-code-scanning-alert %} 
- Optional kannst du eine Schließung kommentieren, um den Kontext des Schließens einer Warnung aufzuzeichnen.{% endif %}
- Wenn {% data variables.product.prodname_code_scanning %} das nächste Mal ausgeführt wird, wird durch denselben Code keine Warnung mehr generiert.

{% ifversion delete-code-scanning-alerts %}Wenn du eine Warnung löschst, gilt Folgendes:

- Sie wird in allen Branches gelöscht.
- Die Warnung wird aus den aktuellen Warnungen für dein Projekt entfernt.
- Sie wird in der Zusammenfassung der Warnungen _nicht_ der Liste „Geschlossen“ hinzugefügt.
- Wenn der Code, durch den die Warnung generiert wurde, gleich bleibt und dasselbe {% data variables.product.prodname_code_scanning %}-Tool ohne Konfigurationsänderungen noch einmal ausgeführt wird, wird die Warnung wieder in den Analyseergebnissen angezeigt.{% endif %}

So schließt {% ifversion delete-code-scanning-alerts %}oder löschst{% endif %} du Warnungen:

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. Wenn du über Administratorberechtigungen für das Repository verfügst und Warnungen für dieses {% data variables.product.prodname_code_scanning %}-Tool löschen möchtest, wähle einige oder alle Kontrollkästchen aus, und klicke auf **Löschen**.

   ![Löschen von Warnungen](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Du kannst optional die Freitextsuche oder die Filter nutzen, um eine Teilmenge der Warnungen anzuzeigen und dann alle übereinstimmenden Warnungen als geschlossen markieren. Wenn du beispielsweise eine Abfrage aus der {% data variables.product.prodname_codeql %}-Analyse entfernt hast, kannst du den Filter „Regel“ verwenden, um nur die Warnungen für diese Abfrage aufzulisten und dann all diese Warnungen auszuwählen und zu löschen.

{% ifversion ghes or ghae %} ![Filtern von Warnungen nach Regel](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![Filtern von Warnungen nach Regel](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. Wenn du eine Warnung verwerfen möchtest, ist es wichtig, die Warnung zunächst zu begutachten, damit du den richtigen Grund zum Verwerfen auswählen kannst. Klicke auf die Warnung, die du begutachten möchtest.
![Warnung über die Zusammenfassungsliste öffnen](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. Überprüfe die Warnung. Klicke dann auf **Warnung schließen**, und wähle einen Grund für das Schließen der Warnung aus, oder gib einen Grund ein. 
  ![Screenshot: Warnung für Codescan mit hervorgehobenem Dropdownmenü zur Auswahl des Schließungsgrunds](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {%- else %}
1. Überprüfe die Warnung. Klicke dann auf **Verwerfen**, und wähle einen Grund für das Schließen der Warnung aus.
  ![Schließungsgrund für eine Warnung auswählen](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Gleichzeitiges Verwerfen mehrerer Warnungen

Wenn ein Projekt mehrere Warnungen aufweist, die du aus demselben Grund verwerfen möchtest, kannst du die Warnungen in der Zusammenfassung der Warnungen mithilfe einer Massenaktion verwerfen. Normalerweise musst du die Liste filtern und dann alle übereinstimmenden Warnungen verwerfen. Beispiel: Du musst alle aktuellen Warnungen im Projekt schließen, die mit einem Tag für ein bestimmtes CWE-Sicherheitsrisiko (Common Weakness Enumeration) versehen wurden.

## Weitere Informationsquellen

- [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)
- [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)
- [Informationen zur Integration mit {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)
