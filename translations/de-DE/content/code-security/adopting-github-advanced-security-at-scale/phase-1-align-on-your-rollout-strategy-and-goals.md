---
title: 'Phase 1: Abstimmen deiner Rolloutstrategie und -ziele'
intro: 'Ehe du {% data variables.product.prodname_code_scanning %} und {% data variables.product.prodname_secret_scanning %} aktivierst, solltest du planen, wie der Rollout von GHAS in deinem Unternehmen erfolgen soll.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Align on strategy
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b2677cf11c300ad657f9bd6b8862fb1f292c2fb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109707'
---
{% note %}

Dieser Artikel ist Teil einer Reihe zur Einführung von {% data variables.product.prodname_GH_advanced_security %} nach Maß. Eine Einführung in diese Reihe findest du unter [Informationen zur Einführung von {% data variables.product.prodname_GH_advanced_security %} nach Maß](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale).

{% endnote %}

### Klare Ziele für den Rollout deines Unternehmens festlegen

Um eine Grundlage für die Umsetzung des Rollouts in deinem Unternehmen zu schaffen, solltest du Ziele für GHAS in deinem Unternehmen formulieren und diese Ziele deinem Team mitteilen. Deine Ziele können einfach oder komplex sein, solange dein Team am gleichen Strang zieht. Wenn du Unterstützung bei deinen Zielen brauchst, können {% data variables.product.prodname_professional_services %} dir Empfehlungen geben, die auf unseren Erfahrungen mit deinem Unternehmen und anderen Kunden basieren.

Im Folgenden findest du einige Beispiele dafür, wie deine Ziele für den Rollout von GHAS lauten könnten:

  - **Reduzierung der Anzahl von Sicherheitsrisiken:** Dies kann allgemein oder deshalb formuliert werden, weil Ihr Unternehmen vor Kurzem von einem erheblichen Sicherheitsrisiko beeinträchtigt wurde, das Ihrer Meinung nach durch ein Tool wie GHAS hätte verhindert werden können.
  - **Identifizierung von Repositorys mit hohem Risiko:** Einige Unternehmen möchten einfach die Repositorys mit dem größten Risiko gezielt anvisieren, um Risiken durch die Beseitigung von Schwachstellen zu verringern.
  -  **Steigerung der Beseitigungsraten**: Um die Anhäufung von Sicherheitsschulden zu verhindern, solltest du die Umsetzung von Erkenntnissen durch Entwickler fördern und sicherstellen, dass diese Sicherheitsrisiken rechtzeitig behoben werden.  
  - **Erfüllen von Complianceanforderungen**: Wir haben festgestellt, dass in vielen Unternehmen im Gesundheitswesen GHAS zur Verhinderung der Preisgabe personenbezogener Gesundheitsdaten zum Einsatz kommt.
  - **Verhindern der Kompromittierung von Geheimnissen**: Viele Unternehmen möchten verhindern, dass wichtige Informationen kompromittiert werden, wie z. B. Softwareschlüssel oder Finanzdaten.

### Das Sicherheits- und Entwicklungsteam die Leitung deines Rollouts übernehmen lassen

Unternehmen, die sowohl ihr Sicherheits- als auch ihr Entwicklungsteam in den Rollout von GHAS einbinden, sind meist erfolgreicher als Unternehmen, die nur ihre Sicherheitsabteilung einbeziehen und mit der Einbeziehung der Entwicklungsabteilung warten, bis die Pilotphase abgeschlossen ist. 

Bei GHAS wird in puncto Softwaresicherheit durch die nahtlose Integration in den Entwicklerworkflow ein entwicklerorientierter Ansatz verfolgt. Wenn deine Entwicklungsabteilung schon am Anfang des Prozesses maßgeblich vertreten ist, werden die Risiken deines Rollouts verringert und die Akzeptanz in der Organisation gefördert.

Die frühzeitige Einbeziehung von Entwicklungsteams, idealerweise schon zum Zeitpunkt des Kaufs, hilft Unternehmen dabei, mithilfe von GHAS Sicherheitsbedenken in einem früheren Stadium des Entwicklungsprozesses aufzugreifen. Wenn beide Teams zusammenarbeiten, können sie sich frühzeitig im Prozess abstimmen, Silos beseitigen, ihre Arbeitsbeziehungen aufbauen und stärken und mehr Verantwortung für den Rollout übernehmen. 


### Informationen zu GHAS

Um realistische Erwartungen für den Rollout festzulegen, stelle sicher, dass alle Beteiligten mit den folgenden Fakten über die Funktionsweise von GHAS vertraut sind.

#### 1. Bei GHAS handelt es sich um eine Sammlung von Sicherheitstools, die Maßnahmen zum Schutz deines Codes erfordern

Bei GHAS handelt es sich um eine Sammlung von Tools, deren Nutzen sich erhöht, wenn sie konfiguriert, gewartet und in täglichen Workflows sowie in Kombination mit anderen Tools eingesetzt werden. 

#### 2. GHAS muss nach der Implementierung angepasst werden

Nachdem du GHAS für deine Repositorys eingerichtet hast, musst du die Lösung entsprechend den Anforderungen deines Unternehmens konfigurieren. Vor allem die Codeüberprüfung erfordert weitere Anpassungen, z. B. die Auswertung erster Ergebnisse und Anpassungen für künftige Überprüfungen. Viele Kunden stellen fest, dass die ersten Überprüfungen nur begrenzt nützliche bzw. irrelevante Ergebnisse liefern, bis die Codeüberprüfung auf Grundlage des Bedrohungsmodells der Anwendung angepasst wurde.

#### 3. GHAS-Tools sind am effektivsten, wenn sie zusammen eingesetzt und in dein Anwendungssicherheitsprogramm integriert werden

GHAS ist am effektivsten, wenn alle Tools zusammen verwendet werden. Die Wirksamkeit deines Anwendungssicherheitsprogramms wird durch die Integration von GHAS und anderen Tools und Aktivitäten, wie z. B. Penetrationstests und dynamische Überprüfungen, weiter verbessert. Es wird empfohlen, immer mehrere Schutzebenen zu verwenden.

#### 4. Benutzerdefinierte {% data variables.product.prodname_codeql %}-Abfragen werden von einigen Unternehmen verwendet, um Überprüfungsergebnisse anzupassen und gezielt zu erfassen 

Die Codeüberprüfung wird von {% data variables.product.prodname_codeql %}, einer der weltweit leistungsfähigsten Codeanalyse-Engine, unterstützt. Für viele unserer Kunden sind die Basisabfragen und zusätzlichen in der Community verfügbaren Abfragen mehr als ausreichend. Andere Unternehmen benötigen jedoch möglicherweise benutzerdefinierte {% data variables.product.prodname_codeql %}-Abfragen, um andere Ergebnisse zu erzielen oder falsch positive Ergebnisse zu reduzieren.

Wenn dein Unternehmen an benutzerdefinierten {% data variables.product.prodname_codeql %}-Abfragen interessiert ist, solltest du jedoch zunächst deinen Rollout und die Implementierung von GHAS abschließen. Wenn dein Unternehmen dann soweit ist, können {% data variables.product.prodname_professional_services %} dir helfen, deine Anforderungen zu bestimmen, um sicherzustellen, dass dein Unternehmen benutzerdefinierte Abfragen benötigt.  

#### 5. Mit {% data variables.product.prodname_codeql %} werden nicht nur die in einem Pull Request vorgenommenen Änderungen, sondern die gesamte Codebasis überprüft

Wenn die Codeüberprüfung über einen Pull Request ausgeführt wird, enthält die Überprüfung die gesamte Codebasis und nicht nur die Änderungen, die im Pull Request vorgenommen wurden. Das Überprüfen der gesamten Codebasis ist ein wichtiger Schritt, um sicherzustellen, dass die Änderung mit allen Interaktionen in der Codebasis in Einklang ist.

{% note %}

Den nächsten Artikel dieser Reihe findest du unter [Phase 2: Vorbereiten der Aktivierung nach Maß](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale).

{% endnote %}
