---
title: Speichern von Workflowdaten als Artefakte
shortTitle: Storing workflow artifacts
intro: Mit Artefakten kannst du Daten zwischen Aufträgen in einem Workflow freigeben und Daten nach Abschluss des Workflows speichern.
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
  - /actions/guides/storing-workflow-data-as-artifacts
  - /actions/advanced-guides/storing-workflow-data-as-artifacts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
ms.openlocfilehash: d23b62f1e77fd08fd798f4fb1af9f44e4d1b1123
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179735'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Workflow-Artefakten

Artefakte erlauben es dir, Daten nach dem Job-Abschluss abzuspeichern und diese Daten an einen anderen Job im selben Workflow weiterzugeben. Ein Artefakt ist eine Datei oder eine Dateisammlung, die während einer Workflow-Ausführung erstellt wird. Zum Beispiel kannst du Artefakte verwenden, um deine Build- und Testausgabe zu speichern, nachdem ein Workflow-Lauf beendet ist. {% data reusables.actions.reusable-workflow-artifacts %}

{% data reusables.actions.artifact-log-retention-statement %} Der Aufbewahrungszeitraum für einen Pull Request beginnt jedes Mal neu, wenn eine Person einen neuen Commit für den Pull Request durchführt.

Dies sind einige der gängigen Artefakte, die du hochladen kannst:

- Protokolldateien und Coredumps
- Testergebnisse, Fehler und Screenshots
- Binäre oder komprimierte Dateien
- Ergebnisse zur Stresstest-Leistungsausgabe und Codeabdeckung

{% ifversion fpt or ghec %}

Das Speichern von Artefakten verwendet Speicherplatz auf {% data variables.product.product_name %}. {% data reusables.actions.actions-billing %} Weitere Informationen findest du unter [Verwalten der Abrechnung von {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions).

{% else %}

Artefakte verfallen automatisch nach 90 Tagen, aber du kannst jederzeit den verwendeten Speicher auf {% data variables.product.prodname_actions %} wieder verfügbar machen, indem du Artefakte löschst, bevor sie auf {% data variables.product.product_location %} ablaufen.

{% endif %}

Artefakte werden während eines Workflow-Laufs hochgeladen und du kannst den Namen und die Größe eines Artefakts in der Benutzeroberfläche anzeigen. Wenn ein Artefakt mit der {% data variables.product.product_name %}-Oberfläche heruntergeladen wird, werden alle Dateien, die als Teil des Artefakts einzeln hochgeladen wurden, zusammen in eine einzige Datei gezippt. Die Abrechnung erfolgt anhand der Größe des hochgeladenen Artefakts und nicht der Größe der Zip-Datei erfolgt.

{% data variables.product.product_name %} bietet zwei Aktionen, über die du Build-Artefakte hoch- und herunterladen kannst. Weitere Informationen findest du unter {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact)- und [download-artifact](https://github.com/actions/download-artifact)-Aktionen {% else %} sowie den `actions/upload-artifact`- und `download-artifact`-Aktionen auf {% data variables.product.product_location %}{% endif %}.

Daten zwischen Aufträgen freigeben:

* **Hochladen von Dateien**: Gib der hochgeladenen Datei einen Namen, und lade die Daten hoch, bevor der Auftrag beendet ist.
* **Herunterladen von Dateien**: Du kannst nur Artefakte herunterladen, die während derselben Workflowausführung hochgeladen wurden. Wenn du eine Datei herunterlädst, kannst du sie mit Namen referenzieren.

Die Steps („Schritte“) eines Jobs teilen sich die selbe Umgebung auf der Runner-Maschine, laufen aber in ihren eigenen individuellen Prozessen. Mithilfe von Ein- und Ausgaben kannst du Daten zwischen den Schritten in einem Auftrag weitergeben. Weitere Informationen zu Eingaben und Ausgaben findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions).

{% ifversion actions-caching %}

{% data reusables.actions.comparing-artifacts-caching %}

Weitere Informationen zur Abhängigkeitszwischenspeicherung findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching).

{% endif %}

## Build- und Testartefakte hochladen

Du kannst einen Workflow für kontinuierliche Integration (CI) erstellen, um deinen Code zu bauen und zu testen. Weitere Informationen zur Verwendung von {% data variables.product.prodname_actions %} zum Ausführen von CI findest du unter [Informationen zu Continuous Integration](/articles/about-continuous-integration).

Durch die Ergebnisse der Erstellung und des Tests deines Codes werden oft zum Debuggen von Testfehlern einsetzbare Dateien und bereitstellbarer Produktionscode erstellt. Du kannst einen Workflow konfigurieren, um den per Push-Vorgang an dein Repository übertragenen Code zu erstellen und zu testen und um einen erfolgreichen oder fehlerhaften Status zu melden. Du kannst die Build- und Testausgabe hochladen, um sie für Bereitstellungen, zum Debuggen fehlerhafter Tests oder von Abstürzen und zum Anzeigen der Testsuite-Abdeckung zu verwenden.

Du kannst die `upload-artifact`-Aktion verwenden, um Artefakte hochzuladen. Beim Hochladen eines Artefakts kannst du eine einzelne Datei oder ein einzelnes Verzeichnis oder mehrere Dateien oder Verzeichnisse angeben. Du kannst auch bestimmte Dateien oder Verzeichnisse ausschließen und Platzhaltermuster verwenden. Es wird empfohlen, einen Namen für ein Artefakt anzugeben, aber wenn kein Name angegeben wird, wird `artifact` als Standardname verwendet. Weitere Informationen zur Syntax findest du bei der {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) action{% else %} `actions/upload-artifact`-Aktion auf {% data variables.product.product_location %}{% endif %}.

### Beispiel

Zum Beispiel kann dein Projektarchiv oder eine Webanwendung SASS- und TypeScript-Dateien enthalten, die du in CSS und JavaScript konvertieren musst. Wenn du davon ausgehst, dass deine Buildkonfiguration die kompilierten Dateien in das Verzeichnis `dist` ausgibt, würdest du die Dateien im Verzeichnis `dist` auf deinem Webanwendungsserver bereitstellen, wenn alle Tests erfolgreich abgeschlossen wurden.

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|   
```

Dieses Beispiel zeigt dir, wie du einen Workflow für ein Node.js-Projekt erstellst, der den Code im Verzeichnis `src` erstellt und die Tests im Verzeichnis `tests` ausführt. Du kannst davon ausgehen, dass die Ausführung von `npm test` einen Code Coverage-Bericht namens `code-coverage.html` erstellt, der im Verzeichnis `output/test/` gespeichert wird.

Der Workflow lädt die Produktionsartefakte im Verzeichnis `dist` hoch, schließt jedoch alle Markdowndateien aus. Außerdem wird der `code-coverage.html`-Bericht als weiteres Artefakt hochgeladen.

```yaml{:copy}
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

## Konfigurieren eines benutzerdefinierten Aufbewahrungszeitraums für Artefakte

Du kannst einen benutzerdefinierten Aufbewahrungszeitraum für einzelne Artefakte definieren, die von einem Workflow erstellt wurden. Wenn du einen Workflow zum Erstellen eines neuen Artefakts verwendest, kannst du `retention-days` mit der `upload-artifact`-Aktion verwenden. In diesem Beispiel wird veranschaulicht, wie du einen benutzerdefinierten Aufbewahrungszeitraum von 5 Tagen für das Artefakt namens `my-artifact` festlegst:

```yaml{:copy}
  - name: 'Upload Artifact'
    uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

Der `retention-days`-Wert darf den vom Repository, der Organisation oder dem Unternehmen festgelegten Aufbewahrungsgrenzwert nicht überschreiten.

## Artefakte herunterladen oder löschen

Während einer Workflowausführung kannst du die [`download-artifact`](https://github.com/actions/download-artifact)-Aktion verwenden, um Artefakte herunterzuladen, die zuvor in derselben Workflowausführung hochgeladen wurden.

Nach Abschluss einer Workflowausführung kannst du Artefakte auf {% data variables.product.prodname_dotcom %} oder mithilfe der REST-API herunterladen oder löschen. Weitere Informationen findest du unter [Herunterladen von Workflowartefakten](/actions/managing-workflow-runs/downloading-workflow-artifacts), [Entfernen von Workflowartefakten](/actions/managing-workflow-runs/removing-workflow-artifacts) und [Artefakt-REST-API](/rest/reference/actions#artifacts).

### Herunterladen von Artefakten während einer Workflowausführung

Die [`actions/download-artifact`](https://github.com/actions/download-artifact)-Aktion kann verwendet werden, um zuvor hochgeladene Artefakte während einer Workflowausführung herunterzuladen.

{% note %}

**Hinweis**: Du kannst nur Artefakte in einem Workflow herunterladen, die während derselben Workflowausführung hochgeladen wurden.

{% endnote %}

Gib den Namen eines Artefaktes an, um ein einzelnes Artefakt herunterzuladen. Wenn du ein Artefakt hochgeladen hast, ohne einen Namen anzugeben, lautet der Standardname `artifact`.

```yaml
- name: Download a single artifact
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: my-artifact
```

Du kannst auch alle Artefakte in einer Workflowausführung herunterladen, indem du keinen Namen angibst. Dies kann nützlich sein, wenn du mit zahlreichen Artefakten arbeitest.

```yaml
- name: Download all workflow run artifacts
  uses: {% data reusables.actions.action-download-artifact %}
```

Wenn du die Artefakte aller Workflowausführungen herunterlädst, wird ein Verzeichnis für jedes Artefakt unter Verwendung seines Namens erstellt.

Weitere Informationen zur Syntax findest du in der {% ifversion fpt or ghec %}[actions/download-artifact](https://github.com/actions/download-artifact) action{% else %} `actions/download-artifact`-Aktion auf {% data variables.product.product_location %}{% endif %}.

## Übergeben von Daten zwischen Aufträgen in einem Workflow

Du kannst die Aktionen `upload-artifact` und `download-artifact` verwenden, um Daten zwischen Aufträgen in einem Workflow freizugeben. In diesem Beispiel-Workflow wird veranschaulicht, wie Daten zwischen Aufträgen im selben Workflow weitergegeben werden. Weitere Informationen findest du unter {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact)- und [download-artifact](https://github.com/actions/download-artifact)-Aktionen {% else %} sowie den `actions/upload-artifact`- und `download-artifact`-Aktionen auf {% data variables.product.product_location %}{% endif %}.

Von den Artefakten eines vorherigen Auftrags abhängige Aufträge müssen auf den erfolgreichen Abschluss des abhängigen Auftrags warten. Dieser Workflow verwendet das `needs`-Schlüsselwort, um sicherzustellen, dass `job_1`, `job_2` und `job_3` sequenziell ausgeführt werden. `job_2` erfordert z. B. `job_1` mit der `needs: job_1`-Syntax.

Auftrag 1 führt die folgenden Schritte durch:
- Führt eine mathematische Berechnung aus und speichert das Ergebnis in einer Textdatei namens `math-homework.txt`.
- Verwendet die `upload-artifact`-Aktion, um die Datei `math-homework.txt` mit dem Artefaktnamen `homework` hochzuladen.

Auftrag 2 verwendet das Ergebnis des vorherigen Auftrags:
- Lädt das `homework`-Artefakt herunter, das im vorherigen Auftrag hochgeladen wurde. Die Aktion `download-artifact` lädt die Artefakte standardmäßig in das Arbeitsbereichverzeichnis herunter, in dem der Schritt ausgeführt wird. Du kannst den Eingabeparameter `path` verwenden, um ein anderes Downloadverzeichnis anzugeben.
- Liest den Wert in der Datei `math-homework.txt`, führt eine mathematische Berechnung aus, und speichert das Ergebnis erneut in `math-homework.txt`, wobei der Inhalt überschrieben wird.
- Lädt die Datei `math-homework.txt` hoch. Durch diesen Upload wird das zuvor hochgeladene Artefakt überschrieben, da beide denselben Namen tragen.

Auftrag 3 zeigt das im vorherigen Auftrag hochgeladene Ergebnis an:
- Lädt das Artefakt `homework` herunter.
- Gibt das Ergebnis der mathematischen Gleichung im Protokoll aus.

Die vollständige, in diesem Workflow-Beispiel durchgeführte mathematische Operation lautet `(3 + 7) x 9 = 90`.

```yaml{:copy}
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

Die Workflowausführung archiviert alle von ihr generierten Artefakte. Weitere Informationen zum Herunterladen archivierter Artefakte findest du unter [Herunterladen von Workflowartefakten](/actions/managing-workflow-runs/downloading-workflow-artifacts).
![Workflow, der zum Durchführen mathematischer Operationen Daten zwischen Aufträgen übergibt](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion fpt or ghec %}

## Weiterführende Themen

- [Verwalten der Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions).

{% endif %}
