---
title: Informationen zu Codeüberprüfungswarnungen
intro: 'Hier erfährst du mehr über die verschiedenen Arten von Codeüberprüfungswarnungen und die Informationen, die dir dabei helfen, das Problem zu verstehen, das von der jeweiligen Warnung hervorgehoben wird.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 1e540aa8b061e0bbdd5b7be1a2563cd983cfb753
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881227'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zu Warnungen durch die {% data variables.product.prodname_code_scanning %}

Du kannst die {% data variables.product.prodname_code_scanning %} so einstellen, dass der Code in einem Repository mit der {% data variables.product.prodname_codeql %}-Standardanalyse, einer Analyse eines Drittanbieters oder mehreren Arten von Analysen überprüft wird. Nach Abschluss der Analyse werden die daraus resultierenden Warnungen in der Sicherheitsansicht des Repositorys nebeneinander angezeigt. Ergebnisse von Drittanbietertools oder benutzerdefinierten Abfragen enthalten möglicherweise nicht alle Eigenschaften, die in Warnungen der {% data variables.product.prodname_codeql %}-Standardanalyse von {% data variables.product.company_short %} angezeigt werden. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

Standardmäßig wird dein Code im Standardbranch und bei Pull Requests über das {% data variables.product.prodname_code_scanning %} regelmäßig analysiert. Informationen zur Verwaltung von Warnungen für Pull Requests findest du unter [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

## Informationen zu Warnungsdetails

Bei jeder Warnung werden das Problem mit dem Code und der Name des Tools, das dieses erkannt hat, hervorgehoben. Du kannst die Codezeile anzeigen, die die Warnung ausgelöst hat, sowie Eigenschaften der Warnung (z. B. Warnungsschweregrad, Sicherheitsschweregrad und die Art des Problems). Warnungen informieren dich auch darüber, seit wann das Problem besteht. Bei Warnungen, die von der {% data variables.product.prodname_codeql %}-Analyse identifiziert wurden, werden auch Informationen zur Behebung des Problems angezeigt.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Beispielwarnung der {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png) {% else %} ![Beispielwarnung der {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.4/repository/code-scanning-alert.png) {% endif %}

Wenn du die {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %} festlegst, können auch Datenflussprobleme in deinem Code erkannt werden. Die Datenflussanalyse findet potenzielle Sicherheitsprobleme in Code wie die unsichere Verwendung von Daten, die Übergabe gefährlicher Argumente an Funktionen und das Durchsickern vertraulicher Informationen.

Wenn die {% data variables.product.prodname_code_scanning %} Datenflusswarnungen meldet, zeigt {% data variables.product.prodname_dotcom %} Ihnen, wie die Daten durch den Code fließen. Mit der {% data variables.product.prodname_code_scanning_capc %} kannst du die Bereiche deines Codes identifizieren, in denen vertrauliche Informationen durchsickern und die einen möglichen Ansatzpunkt für Angriffe böswilliger Benutzer*innen darstellen.

### Informationen zu Schweregraden

Mögliche Warnungsschweregrade sind `Error`, `Warning` und `Note`.

Wenn die {% data variables.product.prodname_code_scanning %} als Überprüfung für Pull Requests aktiviert ist, tritt bei der Überprüfung ein Fehler auf, wenn Ergebnisse mit dem Schweregrad `error` gefunden werden. Du kannst angeben, welcher Schweregrad für Codeüberprüfungswarnungen einen Überprüfungsfehler verursacht. Weitere Informationen findest du unter [Definieren der Schweregrade, die einen Fehler bei der Überprüfung von Pull Requests verursachen](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure).

### Informationen zu Sicherheitsschweregraden

Die {% data variables.product.prodname_code_scanning_capc %} zeigt Sicherheitsschweregrade für Warnungen an, die von Sicherheitsabfragen generiert wurden. Die Sicherheitsschweregrade können `Critical`, `High`, `Medium` oder `Low` sein.

Für die Berechnung des Sicherheitsschweregrads einer Warnung verwenden wir CVSS-Daten (Common Vulnerability Scoring System). Das CVSS ist ein offenes Framework, über das die Merkmale und Schweregrade von Sicherheitsrisiken bei Software kommuniziert werden und das häufig von anderen Sicherheitsprodukten für die Bewertung von Warnungen verwendet wird. Weitere Informationen dazu, wie Schweregrade berechnet werden, findest du in [diesem Blogbeitrag](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/).

Standardmäßig führen alle Ergebnisse der {% data variables.product.prodname_code_scanning %} mit einem Sicherheitsschweregrad von `Critical` oder `High` dazu, dass bei der Überprüfung ein Fehler auftritt. Du kannst angeben, welcher Sicherheitsschweregrad bei Ergebnissen der {% data variables.product.prodname_code_scanning %} zu einem Fehler bei der Überprüfung führen soll. Weitere Informationen findest du unter [Definieren der Schweregrade, die einen Fehler bei der Überprüfung von Pull Requests verursachen](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure).

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
### Informationen zu Analyseursprüngen

Du kannst für ein Repository mehrere Konfigurationen für Codeanalysen mit verschiedenen Tools sowie für verschiedene Sprachen oder Bereiche des Codes festlegen. Jede Konfiguration der Codeüberprüfung ist der Analyseursprung für alle von ihr generierten Warnungen. So verfügt beispielsweise eine mithilfe der CodeQL-Standardanalyse mit GitHub Actions generierte Warnung über einen anderen Analyseursprung als eine extern generierte Warnung, die über die Codeüberprüfungs-API hochgeladen wurde.

Wenn du mehrere Konfigurationen zum Analysieren einer Datei verwendest, werden alle im Rahmen einer einzelnen Abfrage erkannten Probleme als Warnungen mit verschiedenen Analyseursprüngen gemeldet. Wenn eine Warnung über mehr als einen Analyseursprung verfügt, wird das Symbol {% octicon "workflow" aria-label="The workflow icon" %} neben allen relevanten Branches im Abschnitt **Betroffene Branches** rechts auf der Warnungsseite angezeigt. Du kannst auf das Symbol {% octicon "workflow" aria-label="The workflow icon" %} zeigen, um die Namen der einzelnen Analyseursprünge und den Status der Warnung für den jeweiligen Analyseursprung anzuzeigen. Darüber hinaus kannst du auf der Zeitachse auf der Warnungsseite anzeigen, seit wann die Warnungen für die einzelnen Analyseursprünge jeweils vorliegen. Wenn eine Warnung über nur einen Analyseursprung verfügt, werden auf der Warnungsseite keine Informationen zu Analyseursprüngen angezeigt.

![Codeüberprüfungswarnung mit mehreren Analyseursprüngen](/assets/images/help/repository/code-scanning-analysis-origins.png)

{% note %}

**Hinweis:** Manchmal werden Codeüberprüfungswarnungen bei einem Analyseursprung als behoben angezeigt, bei einem anderen Analyseursprung jedoch noch als offen. Dieses Problem kannst du beheben, indem du die zweite Codeüberprüfungskonfiguration erneut ausführst, um den Warnungsstatus für diesen Analyseursprung zu aktualisieren.

{% endnote %}

{% endif %}
### Informationen zu Kennzeichnungen für nicht in Anwendungscode gefundene Warnungen

{% data variables.product.product_name %} weist Warnungen, die nicht in Anwendungscode gefunden wurden, eine Kategoriekennzeichnung zu. Mit dieser Kennzeichnung wird angegeben, wo die Warnung gefunden wurde.

- **Generiert**: Vom Buildprozess generierter Code
- **Test**: Testcode
- **Bibliothek**: Bibliotheks- oder Drittanbietercode
- **Dokumentation**: Dokumentation

Bei der {% data variables.product.prodname_code_scanning_capc %} werden die Dateien basierend auf dem Dateipfad den Kategorien zugeordnet. Ein manuelles Kategorisieren von Quelldateien ist nicht möglich.

Im Folgenden siehst du ein Beispiel aus der Warnungsliste der {% data variables.product.prodname_code_scanning %}, bei dem eine Warnung als in Bibliothekscode auftretend gekennzeichnet ist.

![Codeüberprüfungswarnung für eine Bibliothek in einer Liste](/assets/images/help/repository/code-scanning-library-alert-index.png)

Auf der Warnungsseite kannst du sehen, dass der Dateipfad als Bibliothekscode gekennzeichnet ist (Kennzeichnung `Library`).

![Details für eine Codeüberprüfungswarnung für eine Bibliothek](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

## Informationen zu experimentellen Warnungen

{% data reusables.code-scanning.beta-codeql-ml-queries %}

In Repositorys, die die {% data variables.product.prodname_code_scanning %} mithilfe der {% data variables.product.prodname_codeql %}-Aktion ausführen, wirst du möglicherweise sehen, dass einige Warnungen als experimentell gekennzeichnet sind. Dies sind Warnungen, die mithilfe eines Machine Learning-Modells gefunden wurden, mit dem die Funktionen einer bestehenden {% data variables.product.prodname_codeql %}-Abfrage erweitert wurden.

![Experimentelle Codeüberprüfungswarnung in einer Liste](/assets/images/help/repository/code-scanning-experimental-alert-list.png)

### Vorteile der Verwendung von Machine Learning-Modellen zum Erweitern von Abfragen

Abfragen, bei denen Machine Learning-Modelle verwendet werden, können Sicherheitsrisiken in Code finden, der mithilfe von Frameworks und Bibliotheken geschrieben wurde, die die Person, die die ursprüngliche Abfrage erstellt hat, in der Abfrage nicht berücksichtigt hat.

Alle Sicherheitsabfragen für {% data variables.product.prodname_codeql %} erkennen Code, der anfällig für eine bestimmte Art von Angriff ist. Die Abfragen werden von Sicherheitsforschern erstellt, die dabei die am häufigsten verwendeten Frameworks und Bibliotheken berücksichtigen. Daher findet jede vorhandene Abfrage Anwendungsfälle für häufig verwendete Frameworks und Bibliotheken, durch die Sicherheitsrisiken entstehen. Entwickler verwenden jedoch viele verschiedene Frameworks und Bibliotheken, und eine manuell verwaltete Abfrage kann nicht alle davon berücksichtigen. Daher decken manuell verwaltete Abfragen nicht alle Frameworks und Bibliotheken ab.

{% data variables.product.prodname_codeql %} verwendet ein Machine Learning-Modell, um eine vorhandene Sicherheitsabfrage zu erweitern, sodass eine größere Auswahl von Frameworks und Bibliotheken abgedeckt wird. Das Machine Learning-Modell wird darauf trainiert, Probleme in Code zu erkennen, der ihm noch nie zuvor begegnet ist. Abfragen, die das Modell verwenden, finden Ergebnisse für Frameworks und Bibliotheken, die in der ursprünglichen Abfrage nicht beschrieben werden.

### Mithilfe von maschinellem Lernen gefundene Warnungen

Warnungen, die mithilfe eines Machine Learning-Modells gefunden wurden, werden als „Experimentelle Warnungen“ gekennzeichnet, um zu zeigen, dass diese Technologie sich derzeit in einer Phase der aktiven Entwicklung befindet. Bei diesen Warnungen gibt es eine höhere Rate falsch positiver Ergebnisse als bei den Abfragen, auf denen sie basieren. Das Machine Learning-Modell verbessert sich durch Benutzeraktionen wie das Kennzeichnen eines schlechten Ergebnisses als False Positive oder das Beheben eines Problems aus einem guten Ergebnis.

![Details für eine experimentelle Codeüberprüfungswarnung](/assets/images/help/repository/code-scanning-experimental-alert-show.png)

## Aktivieren von experimentellen Warnungen

Die {% data variables.product.prodname_codeql %}-Standardabfragesammlungen enthalten keine Abfragen, die maschinelles Lernen zum Generieren experimenteller Warnungen verwenden. Damit während der {% data variables.product.prodname_code_scanning %} Machine-Learning-Abfragen ausgeführt werden, musst du die zusätzlichen Abfragen in einer der folgenden Abfragesammlungen ausführen.

{% data reusables.code-scanning.codeql-query-suites %}

Wenn du deinen Workflow so aktualisierst, dass eine zusätzliche Abfragesammlung ausgeführt wird, erhöht sich die Analysezeit.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Run extended queries including queries using machine learning
    queries: security-extended
```

Weitere Informationen findest du unter [Konfigurieren der Codeüberprüfung](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs).

## Deaktivieren von experimentellen Warnungen

Die einfachste Möglichkeit, Abfragen zu deaktivieren, die maschinelles Lernen zum Generieren experimenteller Warnungen verwenden, besteht darin, das Ausführen der Abfragesammlung `security-extended` oder `security-and-quality` zu beenden. Im obigen Beispiel würdest du hierfür die `queries`-Zeile auskommentieren. Wenn du die Sammlung `security-extended` oder `security-and-quality` weiterhin ausführen musst und die Machine-Learning-Abfragen Probleme verursachen, kannst du ein Ticket mit den folgenden Angaben an den [{% data variables.product.company_short %}-Support](https://support.github.com/contact) senden.

- Tickettitel: „{% data variables.product.prodname_code_scanning %}: Entfernen aus der Betaversion für experimentelle Warnungen“
- Gib ausführliche Informationen zu den betroffenen Repositorys oder Organisationen an.
- Beantrage eine Eskalation an das Entwicklungsteam.

{% endif %}
