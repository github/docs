---
title: "Phase\_5: Rollout und Skalierung der Codeüberprüfung"
intro: 'Du kannst die verfügbaren APIs nutzen, um den Rollout von {% data variables.product.prodname_code_scanning %} programmgesteuert nach Team und Sprache in deinem Unternehmen vorzunehmen, indem du die zuvor gesammelten Repositorydaten nutzt.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: abbcdf4c1e4a231a568e8d8cd488877ebdf2fd9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108486'
---
{% note %}

Dieser Artikel ist Teil einer Reihe zur Einführung von {% data variables.product.prodname_GH_advanced_security %} nach Maß. Den vorherigen Artikel in dieser Reihe findest du unter [Phase 4: Erstellen interner Dokumentation](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation).

{% endnote %}

### Aktivieren der Codeüberprüfung

Mit den Daten, die du in [Phase 2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale) gesammelt hast, kannst du zunächst GHAS und dann {% data variables.product.prodname_code_scanning %} für deine Repositorys aktivieren, jeweils für eine bestimmte Sprache. Die Schritte im Prozess zur Aktivierung von GHAS sind wie folgt:

1. Aktiviere GHAS für das Repository. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).
1. Erstelle einen Pull Request für den Standardbranch des Repositorys mit der Datei `codeql-analysis.yml`, die ein Beispiel für die Ausführung von CodeQL für die jeweilige Sprache enthält. Weitere Informationen findest du unter [Erstellen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
1. Erstelle ein Issue im Repository, um zu erklären, warum ein Pull Request ausgelöst wurde. Das Issue, das du erstellst, kann einen Link zur vorherigen Mitteilung enthalten, die an alle Benutzer gesendet wurde. Es kann aber auch erklären, welche Änderungen der Pull Request einführt, welche nächsten Schritte das Team unternehmen muss, welche Zuständigkeiten das Team hat und wie das Team {% data variables.product.prodname_code_scanning %} nutzen sollte. Weitere Informationen findest du unter [Erstellen eines Issues](/issues/tracking-your-work-with-issues/creating-an-issue).

Es gibt mit [ghas-enablement](https://github.com/NickLiffen/ghas-enablement) ein öffentlich verfügbares Tool, mit dem die ersten beiden Schritte erledigt werden können. Du kannst das Tool ghas-enablement in Batches von Sprachen erneut ausführen, sofern dies sinnvoll ist. Beispielsweise weisen JavaScript, TypeScript, Python und Go einen vergleichbaren Buildprozess auf, sodass dafür eine ähnliche CodeQL-Analysedatei verwendet werden kann. Das Tool ghas-enablement kann auch für Sprachen wie Java, C und C++ zum Einsatz kommen. Da diese Sprachen jedoch sehr unterschiedliche Build- und Kompilierungsverfahren aufweisen, musst du möglicherweise spezifischere CodeQL-Analysedateien erstellen.

{% note %}

**Hinweis**: Wenn du vorhast, {% data variables.product.prodname_actions %} mithilfe von {% data variables.product.prodname_code_scanning %} zu steuern, ohne auf das Tool [ghas-enablement](https://github.com/NickLiffen/ghas-enablement) zurückzugreifen, beachte, dass kein API-Zugriff auf das Verzeichnis `.github/workflow` möglich ist. Das bedeutet, dass du ein Skript nicht ohne einen Git-Client erstellen kannst, der der Automatisierung zugrunde liegt. Die Umgehung besteht darin, Bash-Skripts auf einem Computer oder in einem Container mit einem Git-Client zu nutzen. Der Git-Client kann Dateien in das Verzeichnis `.github/workflows` mit der Datei `codeql-analysis.yml` pushen und pullen.

{% endnote %}

Es ist wichtig, dass du die Datei `codeql-analysis.yml` nicht einfach in den Standardbranch des Repositorys pushst. Ein Pull Request überträgt dem Entwicklungsteam den Besitz für Review- und Mergeprozesse und ermöglicht dem Entwicklungsteam, {% data variables.product.prodname_code_scanning %} kennenzulernen und das Team in den Prozess einzubeziehen. 

Du solltest die URLs der Pull Requests erfassen, die per Automatisierung erstellt werden, und jede Woche überprüfen, ob es Aktivitäten gibt und welche geschlossen wurden. Nach ein paar Wochen kann es sich lohnen, ein weiteres Issue zu erstellen oder interne E-Mails zu senden, wenn der Pull Request weiterhin nicht gemergt wurde.

### Bestimmen fachlicher Ansprechpartner

Dann kannst du zur nächsten Phase der Implementierung übergehen, die darin besteht, interne fachliche Ansprechpartner zu bestimmen und Besprechungen im Unternehmen anzuberaumen. Das Öffnen von Pull Requests und Issues in Repositorys wird wahrscheinlich einen großen Teil deiner Akzeptanzprobleme lösen. Das gilt aber nicht für punktuelle Anwendungsfälle, bei denen ein bestimmter Prozess, ein bestimmtes Framework oder eine bestimmte Bibliothek die Aktivierung bestimmter Featureflags erfordert. Ein stärker personalisierter und praxisorientierter Ansatz ist erforderlich, um eine hohe Akzeptanz zu erreichen, insbesondere für Java, C und C++.

Regelmäßige Besprechungen zu bestimmten Themen sind eine gute Idee, um den Rollout in einer größeren Gruppe zu erörtern. Dieser Ansatz ist für ein Unternehmen mit Tausenden von Repositorys viel zeitsparender als das Arbeiten mit nur jeweils einem Team. Teams können zu Sitzungen kommen, die für sie relevant sind. Es folgen einige bereits durchgeführte Beispielsitzungen:

- {% data variables.product.prodname_code_scanning_capc %} in einem Container
- {% data variables.product.prodname_code_scanning_capc %} und Java Struts
- {% data variables.product.prodname_code_scanning_capc %} und JSP

Du kannst die Daten, die du über die Verteilung verschiedener Sprachen auf Repositorys gesammelt hast, nutzen, um Besprechungen gezielt auszurichten.

{% note %}

Den nächsten Artikel in dieser Reihe findest du unter [Phase 6: Rollout und Skalierung der Geheimnisüberprüfung](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning).

{% endnote %}
