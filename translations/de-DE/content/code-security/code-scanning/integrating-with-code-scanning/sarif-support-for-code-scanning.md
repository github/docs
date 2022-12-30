---
title: SARIF-Unterstützung für die Codeüberprüfung
shortTitle: SARIF support
intro: "Um Ergebnisse aus einem statischen Drittanbieter-Analysetool in deinem Repository auf {% data variables.product.prodname_dotcom %} anzuzeigen, müssen deine Ergebnisse in einer SARIF-Datei gespeichert sein, die einen bestimmten Teil des JSON-Schemas von SARIF\_2.1.0 für {% data variables.product.prodname_code_scanning %} unterstützt. Wenn du die statische Standard-Analyse-Engine von {% data variables.product.prodname_codeql %} verwendest, werden deine Ergebnisse automatisch in deinem Repository auf {% data variables.product.prodname_dotcom %} angezeigt."
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
  - /code-security/secure-coding/sarif-support-for-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/sarif-support-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
ms.openlocfilehash: 98d0e4620d240c3e1863aaee6f57a5834c86018b
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162791'
---
{% data reusables.code-scanning.beta %}

## Informationen zur SARIF-Unterstützung

SARIF (Static Analysis Results Interchange Format) ist ein [OASIS-Standard](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html), der ein Ausgabedateiformat definiert. Der SARIF-Standard wird verwendet, um zu optimieren, wie statische Analysetools ihre Ergebnisse freigeben. Das {% data variables.product.prodname_code_scanning_capc %} unterstützt eine Teilmenge des SARIF 2.1.0-JSON-Schemas.

Um eine SARIF-Datei aus einer Drittanbieter-Engine für die statische Codeanalyse hochzuladen, musst du sicherstellen, dass die hochgeladenen Dateien die SARIF 2.1.0-Version verwenden. {% data variables.product.prodname_dotcom %} analysiert die SARIF-Datei und zeigt Warnungen an, die die Ergebnisse in deinem Repository als Teil der {% data variables.product.prodname_code_scanning %}-Erfahrung verwenden. Weitere Informationen findest du unter [Hochladen einer SARIF-Datei auf {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github). Weitere Informationen zum SARIF 2.1.0-JSON-Schema findest du unter [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json).

Wenn du {% data variables.product.prodname_actions %} mit dem {% data variables.code-scanning.codeql_workflow %}{% ifversion codeql-runner-supported %}, {% data variables.code-scanning.codeql_runner %},{% endif %} oder der {% data variables.product.prodname_codeql_cli %} nutzt, verwenden die {% data variables.product.prodname_code_scanning %}-Ergebnisse automatisch die unterstützte Teilmenge von SARIF 2.1.0. Weitere Informationen findest du unter [Einrichten der {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository){% ifversion codeql-runner-supported %}, [Ausführen von {% data variables.code-scanning.codeql_runner %} in deinem CI-System](/code-security/secure-coding/running-codeql-runner-in-your-ci-system){% endif %} oder [Installieren der CodeQL-CLI in deinem CI-System](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system).

Du kannst mehrere SARIF-Dateien für denselben Commit hochladen und die Daten aus jeder Datei als {% data variables.product.prodname_code_scanning %}-Ergebnisse anzeigen. Wenn du mehrere SARIF-Dateien für einen Commit hochlädst, musst du eine „Kategorie“ für jede Analyse angeben. Das Angeben einer Kategorie variiert je nach Analysemethode:
- Wenn du direkt die {% data variables.product.prodname_codeql_cli %} verwendest, übergib beim Generieren von SARIF-Dateien das `--sarif-category`-Argument an den `codeql database analyze`-Befehl. Weitere Informationen findest du unter [Konfigurieren der CodeQL-CLI in deinem CI-System](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli).
- Wenn du {% data variables.product.prodname_actions %} mit `codeql-action/analyze` verwendest, wird die Kategorie automatisch über den Workflownamen und beliebige Matrixvariablen (in der Regel `language`) festgelegt. Du kannst dies überschreiben, indem du eine `category`-Eingabe für die Aktion angibst, was beim Analysieren verschiedener Abschnitte eines Monorepositorys in einem einzelnen Workflow nützlich ist.
- Bei Verwendung von {% data variables.product.prodname_actions %} zum Hochladen von Ergebnissen aus anderen Tools für die statische Analyse musst du eine `category`-Eingabe angeben, wenn du mehr als eine Ergebnisdatei für dasselbe Tool in einem Workflow hochlädst. Weitere Informationen findest du unter [Hochladen einer {% data variables.product.prodname_code_scanning %}-Analyse mit {% data variables.product.prodname_actions %}](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions).
- Wenn du keinen dieser beiden Ansätze verwendest, musst du in jeder SARIF-Datei, die hochgeladen werden soll, eine eindeutige `runAutomationDetails.id`-Eigenschaft angeben. Weitere Informationen zu dieser Eigenschaft findest du im Abschnitt zum [`runAutomationDetails`-Objekt](#runautomationdetails-object) weiter unten.

Wenn du eine zweite SARIF-Datei für einen Commit mit derselben Kategorie und aus demselben Tool hochlädst, werden die früheren Ergebnisse überschrieben. Sollten du jedoch versuchen, mehrere SARIF-Dateien für dasselbe Tool und dieselbe Kategorie in einer einzelnen {% data variables.product.prodname_actions %}-Workflowausführung hochzuladen, wird die Fehlkonfiguration erkannt, und bei der Ausführung tritt ein Fehler auf.

{% data variables.product.prodname_dotcom %} verwendet Eigenschaften in der SARIF-Datei, um Warnungen anzuzeigen. Beispielsweise werden `shortDescription` und `fullDescription` oben in einer {% data variables.product.prodname_code_scanning %}-Warnung angezeigt. `location` ermöglicht {% data variables.product.prodname_dotcom %} das Anzeigen von Anmerkungen in deiner Codedatei. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Wenn du noch nicht mit SARIF vertraut bist und mehr erfahren möchtest, kannst du dir das Repository [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) von Microsoft ansehen.

## Bereitstellen von Daten zum Nachverfolgen von ausführungsübergreifenden {% data variables.product.prodname_code_scanning %}-Warnungen

Jedes Mal, wenn die Ergebnisse eines neuen Codescans hochgeladen werden, werden die Ergebnisse verarbeitet und dem Repository Warnungen hinzugefügt. Um doppelte Warnungen für dasselbe Problem zu verhindern, verwendet das {% data variables.product.prodname_code_scanning %} Fingerabdrücke, um Ergebnisse in verschiedenen Ausführungen abzugleichen, sodass sie nur einmal in der letzten Ausführung für den ausgewählten Branch angezeigt werden. So ist es möglich, beim Bearbeiten von Dateien Warnungen den richtigen Codezeilen zuzuordnen. Die `ruleID` für ein Ergebnis muss für alle Analysen gleich lauten.
 
### Melden konsistenter Dateipfade

Der Dateipfad muss über alle Ausführungen hinweg konsistent sein, damit ein stabiler Fingerabdruck berechnet werden kann. Wenn sich die Dateipfade für dasselbe Ergebnis unterscheiden, wird bei jeder neuen Analyse eine neue Warnung erstellt und die alte geschlossen. Dies führt dazu, dass für dasselbe Ergebnis mehrere Warnungen ausgegeben werden.

### Einschließen von Daten zum Generieren eines Fingerabdrucks

{% data variables.product.prodname_dotcom %} verwendet die `partialFingerprints`-Eigenschaft im OASIS-Standard, um zu erkennen, wann zwei Ergebnisse logisch identisch sind. Weitere Informationen findest du im Eintrag zur [Eigenschaft „partFingerprints“](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611) in der OASIS-Dokumentation.

SARIF-Dateien, die über den {% data variables.code-scanning.codeql_workflow %}, {% ifversion codeql-runner-supported %}mit dem {% data variables.code-scanning.codeql_runner %} {% endif %}oder der {% data variables.product.prodname_codeql_cli %} erstellt wurden, enthalten Fingerabdruckdaten. Wenn du eine SARIF-Datei mithilfe der `upload-sarif`-Aktion hochlädst und diese Daten fehlen, versucht {% data variables.product.prodname_dotcom %}, das `partialFingerprints`-Feld aus den Quelldateien aufzufüllen. Weitere Informationen zum Hochladen von Ergebnissen findest du unter [Hochladen einer SARIF-Datei auf {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions).

Wenn du eine SARIF-Datei mithilfe des API-Endpunkts `/code-scanning/sarifs` ohne Fingerabdruckdaten hochlädst, werden {% data variables.product.prodname_code_scanning %}-Warnungen verarbeitet und angezeigt, aber Benutzer*innen werden möglicherweise doppelte Warnungen angezeigt. Um zu vermeiden, dass doppelte Warnungen angezeigt werden, solltest du Fingerabdruckdaten berechnen und die `partialFingerprints`-Eigenschaft auffüllen, bevor du die SARIF-Datei hochlädst. Möglicherweise erachtest du das Skript, das die `upload-sarif`-Aktion verwendet, als hilfreichen Startpunkt: https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. Weitere Informationen zur API findest du unter [Hochladen einer Analyse als SARIF-Daten](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data).

## Grundlegendes zu Regeln und Ergebnissen

SARIF-Dateien unterstützen sowohl Regeln als auch Ergebnisse. Die in diesen Elementen gespeicherten Informationen sind ähnlich, dienen jedoch unterschiedlichen Zwecken.

- Regeln sind ein Array von `reportingDescriptor`-Objekten, die im `toolComponent`-Objekt enthalten sind. Hier speicherst du Details der Regeln, die während der Analyse ausgeführt werden. Informationen in diesen Objekten sollten sich selten ändern – normalerweis nur, wenn du das Tool aktualisierst.

- Ergebnisse werden als Eine Reihe von `result`-Objekten unter `results` im `run`-Objekt gespeichert. Jedes `result`-Objekt enthält Details zu einer Warnung in der Codebasis. Innerhalb des `results`-Objekts kannst du auf die Regel verweisen, die die Warnung erkannt hat.

Wenn du SARIF-Dateien vergleichst, die durch die Analyse verschiedener Codebasen mit demselben Tool und den gleichen Regeln generiert werden, solltest du Unterschiede in den Ergebnissen der Analysen, aber nicht in den Regeln sehen.

## Angeben des Stamms für Quelldateien

{% data variables.product.prodname_code_scanning_capc %} interpretiert Ergebnisse, die mit relativen Pfaden gemeldet werden, als relativ zum Stamm des analysierten Repositorys. Wenn ein Ergebnis einen absoluten URI enthält, wird er in einen relativen URI konvertiert. Der relative URI kann dann mit einer Datei abgeglichen werden, die per Commit in das Repository übertragen wurde.

Du kannst den Quellstamm für die Konvertierung von absoluten in relative URIs auf eine der folgenden Arten bereitstellen.

- [`checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47)-Eingabe für die Aktion `github/codeql-action/analyze`
- `checkout_uri`-Parameter für den API-Endpunkt zum SARIF-Upload. Weitere Informationen findest du unter [{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data) in der REST-API-Dokumentation
- [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365)-Eigenschaft in der SARIF-Datei

Wenn du einen Quellstamm angibst, muss jeder Speicherort eines Artefakts, der mit einem absoluten URI angegeben wird, das gleiche URI-Schema verwenden. Wenn das URI-Schema für den Quellstamm und mindestens einen der absoluten URIs nicht übereinstimmen, wird der Upload abgelehnt.

Ein Beispiel: Eine SARIF-Datei wird mit dem Quellstamm `file:///github/workspace` hochgeladen. 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

Der Upload der Datei ist erfolgreich, weil beide absoluten URIs das gleiche URI-Schema verwenden wie der Quellstamm.

## Überprüfen deiner SARIF-Datei

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

Du kannst eine SARIF-Datei mit {% data variables.product.prodname_code_scanning %} kompatibel sein, indem du sie anhand der {% data variables.product.prodname_dotcom %}}-Aufnahmeregeln testest. Weitere Informationen findest du auf der [Seite mit dem SARIF-Validator von Microsoft](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Unterstützte SARIF-Ausgabedateieigenschaften

Wenn du eine andere Codeanalyse-Engine als {% data variables.product.prodname_codeql %} verwendest, kannst du die unterstützten SARIF-Eigenschaften überprüfen, um zu optimieren, wie deine Analyseergebnisse auf {% data variables.product.prodname_dotcom %} angezeigt werden.

{% note %}

**Hinweis:** Du musst für jede als erforderlich gekennzeichnete Eigenschaft einen expliziten Wert angeben. Die leere Zeichenfolge wird für erforderliche Eigenschaften nicht unterstützt.

{% endnote %}

Jede gültige SARIF 2.1.0-Ausgabedatei kann hochgeladen werden, aber das {% data variables.product.prodname_code_scanning %} verwendet nur die folgenden unterstützten Eigenschaften.

### `sarifLog`-Objekt

| Name | BESCHREIBUNG |
|----|----|
|  `$schema` | **Erforderlich.** URI des SARIF-JSON-Schemas für Version 2.1.0. Beispiel: `https://json.schemastore.org/sarif-2.1.0.json`. |
| `version` | **Erforderlich.** Das {% data variables.product.prodname_code_scanning_capc %} unterstützt nur die SARIF-Version `2.1.0`.
| `runs[]` | **Erforderlich.** Eine SARIF-Datei enthält ein Array einer oder mehrerer Ausführungen. Jede Ausführung stellt eine einzelne Ausführung eines Analysetools dar. Weitere Informationen zu einem `run` findest du im Abschnitt zum [`run`-Objekt](#run-object).

### `run`-Objekt

Das {% data variables.product.prodname_code_scanning_capc %} verwendet das `run`-Objekt, um Ergebnisse nach Tool zu filtern und Informationen zur Quelle eines Ergebnisses bereitzustellen. Das `run`-Objekt enthält das `tool.driver`-Toolkomponentenobjekt, das Informationen zum Tool enthält, das die Ergebnisse generiert hat. Jeder `run` kann nur Ergebnisse für ein Analysetool umfassen.

| Name | BESCHREIBUNG |
|----|----|
| `tool.driver` | **Erforderlich.** Ein `toolComponent`-Objekt, das das Analysetool beschreibt. Weitere Informationen findest du im Abschnitt zum [`toolComponent`-Objekt](#toolcomponent-object). |
| `tool.extensions[]` | **Optional.** Ein Array von `toolComponent`-Objekten, die alle Plug-Ins oder Erweiterungen darstellen, die das Tool während der Analyse verwendet. Weitere Informationen findest du im Abschnitt zum [`toolComponent`-Objekt](#toolcomponent-object). |
| `invocation.workingDirectory.uri` | **Optional.** Dieses Feld wird ausschließlich dann verwendet, wenn `checkout_uri` (nur SARIF-Upload-API) oder `checkout_path` (nur {% data variables.product.prodname_actions %}) nicht angegeben wurden. Der Wert wird verwendet, um absolute URIs, die in [`physicalLocation`-Objekten](#physicallocation-object) verwendet werden, in relative URIs umzuwandeln. Weitere Informationen findest du unter [Angeben des Stamms für Quelldateien](#specifying-the-root-for-source-files).|
| `results[]` | **Erforderlich.** Ergebnisse des Analysetools. Das {% data variables.product.prodname_code_scanning_capc %} zeigt die Ergebnisse auf {% data variables.product.prodname_dotcom %} an. Weitere Informationen findest du im Abschnitt zum [`result`-Objekt](#result-object).

### `toolComponent`-Objekt

| Name | BESCHREIBUNG |
|----|----|
| `name` | **Erforderlich.** Name des Analysetools. Das {% data variables.product.prodname_code_scanning_capc %} zeigt den Namen auf {% data variables.product.prodname_dotcom %} an, damit du die Ergebnisse nach Tool filtern kannst. |
| `version` | **Optional.** Version des Analysetools. Das {% data variables.product.prodname_code_scanning_capc %} verwendet die Versionsnummer, um nachzuverfolgen, wann die Ergebnisse aufgrund einer Toolversionsänderung und nicht wegen einer Änderung im analysierten Code geändert wurden. Wenn die SARIF-Datei das `semanticVersion`-Feld enthält, wird `version` nicht vom {% data variables.product.prodname_code_scanning %} verwendet. |
| `semanticVersion` | **Optional.** Version des Analysetools, angegeben durch das Format für die semantische Versionierung 2.0. Das {% data variables.product.prodname_code_scanning_capc %} verwendet die Versionsnummer, um nachzuverfolgen, wann die Ergebnisse aufgrund einer Toolversionsänderung und nicht wegen einer Änderung im analysierten Code geändert wurden. Wenn die SARIF-Datei das `semanticVersion`-Feld enthält, wird `version` nicht vom {% data variables.product.prodname_code_scanning %} verwendet. Weitere Informationen findest du unter [Semantische Versionierung 2.0.0](https://semver.org/) in der Dokumentation zur semantischen Versionierung. |
| `rules[]` | **Erforderlich.** Array von `reportingDescriptor`-Objekten, die Regeln darstellen. Das Analysetool verwendet Regeln zum Suchen von Problemen im analysierten Code. Weitere Informationen findest du im Abschnitt zum [`reportingDescriptor`-Objekt](#reportingdescriptor-object). |

### `reportingDescriptor`-Objekt

Hier speicherst du Details der Regeln, die während der Analyse ausgeführt werden. Informationen in diesen Objekten sollten sich selten ändern – normalerweis nur, wenn du das Tool aktualisierst. Weitere Informationen findest du weiter oben unter [Grundlegendes zu Regeln und Ergebnissen](#understanding-rules-and-results).

| Name | BESCHREIBUNG |
|----|----|
| `id` |  **Erforderlich.** Eindeutiger Bezeichner für die Regel. Auf die `id` wird von anderen Teilen der SARIF-Datei verwiesen, und sie kann vom {% data variables.product.prodname_code_scanning %} verwendet werden, um URLs auf {% data variables.product.prodname_dotcom %} anzuzeigen. |
| `name` | **Optional.** Der Name der Regel. Das {% data variables.product.prodname_code_scanning_capc %} zeigt den Namen auf {% data variables.product.prodname_dotcom %} an, damit die Ergebnisse nach Tool gefiltert werden können. |
| `shortDescription.text` | **Erforderlich.** Präzise Beschreibung der Regel. Das {% data variables.product.prodname_code_scanning_capc %} zeigt die kurze Beschreibung auf {% data variables.product.prodname_dotcom %} neben den zugeordneten Ergebnissen an.
| `fullDescription.text` | **Erforderlich.** Eine Beschreibung der Regel. Das {% data variables.product.prodname_code_scanning_capc %} zeigt die vollständige Beschreibung auf {% data variables.product.prodname_dotcom %} neben den zugeordneten Ergebnissen an. Die maximale Zeichenanzahl ist auf 1000 beschränkt.
| `defaultConfiguration.level` | **Optional.** Standardschweregrad der Regel. Das {% data variables.product.prodname_code_scanning_capc %} verwendet Schweregrade, damit du verstehst, wie wichtig das Ergebnis für eine bestimmte Regel ist. Dieser Wert kann durch das `level`-Attribut im `result`-Objekt überschrieben werden. Weitere Informationen findest du im Abschnitt zum [`result`-Objekt](#result-object). Standardwert: `warning`.
| `help.text` | **Erforderlich.** Dokumentation für die Regel mithilfe des Textformats. Das {% data variables.product.prodname_code_scanning_capc %} zeigt diese Hilfedokumentation neben den zugeordneten Ergebnissen an.
| `help.markdown` | **Empfohlen.** Dokumentation für die Regel mithilfe des Markdown-Formats. Das {% data variables.product.prodname_code_scanning_capc %} zeigt diese Hilfedokumentation neben den zugeordneten Ergebnissen an. Wenn `help.markdown` verfügbar ist, wird dieses Element anstelle von `help.text` angezeigt.
| `properties.tags[]` | **Optional.** Ein Array der Zeichenfolgen. Das {% data variables.product.prodname_code_scanning_capc %} verwendet `tags`, damit du Ergebnisse auf {% data variables.product.prodname_dotcom %} filtern kannst. Beispielsweise kannst du nach allen Ergebnissen filtern, die das Tag `security` umfassen.
| `properties.precision` | **Empfohlen.** Zeichenfolge, die angibt, wie oft die von dieser Regel angegebenen Ergebnisse „true“ sind. Wenn eine Regel beispielsweise bekanntermaßen eine hohe False-Positive-Rate aufweist, sollte die Genauigkeit `low` entsprechen. Das {% data variables.product.prodname_code_scanning_capc %} ordnet Ergebnisse nach Genauigkeit auf {% data variables.product.prodname_dotcom %} an, sodass die Ergebnisse mit dem höchsten `level` und dem höchsten `precision`-Wert zuerst angezeigt werden. Dies kann `very-high`, `high`, `medium` oder `low` entsprechen. 
| `properties.problem.severity` | **Empfohlen.** Zeichenfolge, die den Schweregrad aller Warnungen angibt, die von einer nicht sicherheitsrelevanten Abfrage generiert werden. Dies bestimmt mit der `properties.precision`-Eigenschaft, ob die Ergebnisse standardmäßig auf {% data variables.product.prodname_dotcom %} angezeigt werden, sodass die Ergebnisse mit der höchsten `problem.severity` und dem höchsten `precision`-Wert zuerst angezeigt werden. Diese können `error`, `warning` oder `recommendation` lauten.
| `properties.security-severity` | **Empfohlen.** Zeichenfolge, die eine Bewertung darstellt, die den Schweregrad zwischen 0.0 und 10.0 für Sicherheitsabfragen angibt (`@tags` umfasst `security`). Dies bestimmt mit der `properties.precision`-Eigenschaft, ob die Ergebnisse standardmäßig auf {% data variables.product.prodname_dotcom %} angezeigt werden, sodass die Ergebnisse mit der höchsten `security-severity` und dem höchsten `precision`-Wert zuerst angezeigt werden. Das {% data variables.product.prodname_code_scanning_capc %} übersetzt numerische Bewertungen wie folgt: über 9.0 entspricht `critical`, 7.0 bis 8.9 ergibt `high`, 4.0 bis 6.9 hat `medium` die Bewertung zur Folge und 3.9 oder weniger entspricht `low`. 

### `result`-Objekt

Jedes `result`-Objekt enthält Details zu einer Warnung in der Codebasis. Innerhalb des `results`-Objekts kannst du auf die Regel verweisen, die die Warnung erkannt hat. Weitere Informationen findest du weiter oben unter [Grundlegendes zu Regeln und Ergebnissen](#understanding-rules-and-results).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Name | BESCHREIBUNG |
|----|----|
| `ruleId`| **Optional.** Eindeutiger Bezeichner der Regel (`reportingDescriptor.id`). Weitere Informationen findest du im Abschnitt zum [`reportingDescriptor`-Objekt](#reportingdescriptor-object). Das {% data variables.product.prodname_code_scanning_capc %} verwendet den Regelbezeichner, damit du Ergebnisse nach Regel auf {% data variables.product.prodname_dotcom %} filtern kannst.
| `ruleIndex`| **Optional.** Index der zugeordneten Regel (`reportingDescriptor`-Objekt) im `rules`-Toolkomponentenarray. Weitere Informationen findest du im Abschnitt zum [`run`-Objekt](#run-object). Zulässiger Bereich für diese Eigenschaft: 0 bis 2^63 – 1.
| `rule`| **Optional.** Verweis, der zum Suchen der Regel (Berichterstellungsdeskriptor) für dieses Ergebnis verwendet wird. Weitere Informationen findest du im Abschnitt zum [`reportingDescriptor`-Objekt](#reportingdescriptor-object).
| `level`| **Optional.** Schweregrad des Ergebnisses. Diese Ebene überschreibt den Standardschweregrad, der von der Regel definiert wird. Das {% data variables.product.prodname_code_scanning_capc %} verwendet die Ebene zum Filtern der Ergebnisse nach Schweregrad auf {% data variables.product.prodname_dotcom %}.
| `message.text`| **Erforderlich.** Meldung, in der das Ergebnis beschrieben wird. Das {% data variables.product.prodname_code_scanning_capc %} zeigt den Meldungstext als Titel des Ergebnisses an. Nur der erste Satz der Meldung wird angezeigt, wenn der sichtbare Bereich begrenzt ist.
| `locations[]`| **Erforderlich.** Gruppe der Speicherorte (maximal 10), an denen das Ergebnis gefunden wurde. Nur ein Speicherort sollte einbezogen werden, es sei denn, das Problem kann nur behoben werden, indem an jedem Speicherort eine Änderung vorgenommen wird. **Hinweis:** Mindestens ein Speicherort ist für das {% data variables.product.prodname_code_scanning %} erforderlich, um ein Ergebnis anzuzeigen. Das {% data variables.product.prodname_code_scanning_capc %} verwendet diese Eigenschaft, um zu entscheiden, welche Datei mit dem Ergebnis kommentiert werden soll. Nur der erste Wert dieses Arrays wird verwendet. Alle anderen Werte werden ignoriert.
| `partialFingerprints`| **Erforderlich.** Reihe von Zeichenfolgen, die zum Nachverfolgen der eindeutigen Identität des Ergebnisses verwendet werden. Das {% data variables.product.prodname_code_scanning_capc %} verwendet `partialFingerprints`, um genau zu identifizieren, welche commit- und branchübergreifenden Ergebnisse identisch sind. Das {% data variables.product.prodname_code_scanning_capc %} versucht `partialFingerprints` zu verwenden, wenn diese vorhanden sind. Wenn du SARIF-Dateien von Drittanbietern mithilfe von `upload-action` hochlädst, werden von der Aktion `partialFingerprints` für dich erstellt, wenn sie nicht in der SARIF-Datei enthalten sind. Weitere Informationen findest du unter [Bereitstellen von Daten zum Nachverfolgen von ausführungsübergreifenden Warnungen bei der Codeüberprüfung](#providing-data-to-track-code-scanning-alerts-across-runs).  **Hinweis:** Das {% data variables.product.prodname_code_scanning_capc %} verwendet nur `primaryLocationLineHash`.
| `codeFlows[].threadFlows[].locations[]`| **Optional.** Array von `location`-Objekten für ein `threadFlow`-Objekt, das den Fortschritt eines Programms durch einen Ausführungsthread beschreibt. Ein `codeFlow`-Objekt beschreibt ein Muster der Codeausführung, das zum Erkennen eines Ergebnisses verwendet wird. Wenn Codeflows bereitgestellt werden, erweitert das {% data variables.product.prodname_code_scanning %} Codeflows auf {% data variables.product.prodname_dotcom %} für das relevante Ergebnis. Weitere Informationen findest du im Abschnitt zum [`location`-Objekt](#location-object).
| `relatedLocations[]`| Reihe von Speicherorten, die für dieses Ergebnis relevant sind. Das {% data variables.product.prodname_code_scanning_capc %} stellt eine Verknüpfung mit zugehörigen Speicherorten her, wenn sie in die Ergebnismeldung eingebettet werden. Weitere Informationen findest du im Abschnitt zum [`location`-Objekt](#location-object).

### `location`-Objekt

Speicherort in einem Programmierartefakt (z. B. eine Datei im Repository oder eine während eines Builds generierte Datei).

| Name | BESCHREIBUNG |
|----|----|
| `location.id` | **Optional.** Eindeutiger Bezeichner, der diesen Speicherort von allen anderen Speicherorten innerhalb eines einzelnen Ergebnisobjekts unterscheidet. Zulässiger Bereich für diese Eigenschaft: 0 bis 2^63 – 1.
| `location.physicalLocation` | **Erforderlich.** Identifiziert das Artefakt und den Bereich. Weitere Informationen findest du unter [`physicalLocation`](#physicallocation-object).
| `location.message.text` | **Optional.** Meldung, die für den Speicherort relevant ist.

### `physicalLocation`-Objekt

| Name | BESCHREIBUNG |
|----|----|
| `artifactLocation.uri`| **Erforderlich.** URI, der den Speicherort eines Artefaktes angibt (in der Regel eine Datei im Repository oder eine während eines Builds generierte Datei). Für optimale Ergebnisse empfehlen wir, einen relativen Pfad zum Stamm des zu analysierenden GitHub-Repositorys anzugeben. Beispiel: `src/main.js`. Weitere Informationen zu Artefakt-URIs findest du unter [Angeben des Stamms für Quelldateien](#specifying-the-root-for-source-files).|
| `region.startLine` | **Erforderlich.** Zeilennummer des ersten Zeichens im Bereich.
| `region.startColumn` | **Erforderlich.** Spaltennummer des ersten Zeichens im Bereich.
| `region.endLine` | **Erforderlich.** Zeilennummer des letzten Zeichens im Bereich.
| `region.endColumn` | **Erforderlich.** Spaltennummer des Zeichens nach dem Ende des Bereichs.

### `runAutomationDetails`-Objekt

Das `runAutomationDetails`-Objekt enthält Informationen, die die Identität einer Ausführung angeben.

{% note %}

**Hinweis:** `runAutomationDetails` ist ein SARIF v2.1.0-Objekt. Wenn du die {% data variables.product.prodname_codeql_cli %} verwendest, kannst du die zu verwendende SARIF-Version angeben. Das entsprechende Objekt für `runAutomationDetails` ist `<run>.automationId` fpr SARIF v1 und `<run>.automationLogicalId` für SARIF v2.

{% endnote %}

| Name | BESCHREIBUNG |
|----|----|
| `id`| **Optional.** Zeichenfolge, die die Kategorie der Analyse und die Ausführungs-ID identifiziert. Verwende sie, wenn du mehrere SARIF-Dateien für dasselbe Tool und denselben Commit hochladen möchtest, dabei aber verschiedene Sprachen oder Teile des Codes verwendest. |

Die Verwendung des `runAutomationDetails`-Objekts ist optional.

Das `id`-Feld kann eine Analysekategorie und eine Ausführungs-ID enthalten. Der Teil mit der Ausführungs-ID des `id`-Felds wird nicht verwendet, aber gespeichert.

Verwende die Kategorie, um zwischen mehreren Analysen für dasselbe Tool oder denselben Commit zu unterscheiden, die jedoch für verschiedene Sprachen oder Teile des Codes ausgeführt werden. Verwende die Ausführungs-ID, um die spezifische Ausführung der Analyse zu identifizieren (z. B. das Datum, an dem die Analyse ausgeführt wurde).

Die `id` wird als `category/run-id` interpretiert. Wenn die `id` keinen Schrägstrich (`/`) enthält, entspricht die gesamte Zeichenfolge der `run_id` und `category` ist leer. Andernfalls entspricht `category` dem Inhalt der Zeichenfolge bis zum letzten Schrägstrich und `run_id` dem danach folgenden Inhalt.

| `id` | category | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | _keine `run-id`_
| my-analysis for tool1 | _Keine Kategorie_ | my-analysis for tool1

- Die Ausführung mit der `id` „my-analysis/tool1/2021-02-01“ gehört zur Kategorie „my-analysis/tool1“. Vermutlich ist dies die Ausführung vom 2. Februar 2021.
- Die Ausführung mit der `id` „my-analysis/tool1/“ gehört zur Kategorie „my-analysis/tool1“, wird jedoch nicht von anderen Ausführungen in dieser Kategorie unterschieden.
- Die Ausführung mit der `id` „my-analysis for tool1“ hat einen eindeutigen Bezeichner, es kann jedoch nicht abgeleitet werden, dass sie zu einer beliebigen Kategorie gehört.

Weitere Informationen zum `runAutomationDetails`-Objekt und dem `id`-Feld findest du im Abschnitt zum [runAutomationDetails-Objekt](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479) in der OASIS-Dokumentation.

Beachte, dass der Rest der unterstützten Felder ignoriert wird.

## SARIF-Ausgabedateibeispiele

Diese SARIF-Ausgabedateibeispiele umfassen unterstützte Eigenschaften und Beispielwerte.

### Beispiel für minimal erforderliche Eigenschaften

Diese SARIF-Ausgabedatei umfasst Beispielwerte, um zu veranschaulichen, welche Eigenschaften mindestens erforderlich sind, damit die {% data variables.product.prodname_code_scanning %}-Ergebnisse wie erwartet funktionieren. Wenn du Eigenschaften entfernst, Werte auslässt oder eine leere Zeichenfolge verwendest, werden diese Daten nicht ordnungsgemäß angezeigt oder mit {% data variables.product.prodname_dotcom %} synchronisiert. 

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "rules": [
            {
              "id": "R01"
                      ...
              "properties" : {
                 "id" : "java/unsafe-deserialization",
                 "kind" : "path-problem",
                 "name" : "...",
                 "problem.severity" : "error",
                 "security-severity" : "9.8",
               }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. This result does not have a rule associated."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "fileURI"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1"
          }
        }
      ]
    }
  ]
}
```

### Beispiel mit allen unterstützten SARIF-Eigenschaften

Diese SARIF-Ausgabedatei umfasst Beispielwerte, um alle unterstützten SARIF-Eigenschaften für das {% data variables.product.prodname_code_scanning %} zu veranschaulichen.

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "automationDetails": {
        "id": "my-category/"
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```

