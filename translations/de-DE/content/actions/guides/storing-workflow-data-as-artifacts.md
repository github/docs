---
title: Storing workflow data as artifacts
shortTitle: Storing workflow artifacts
intro: Mit Artefakten kannst Du Daten zwischen Aufträgen in einem Workflow freigeben und Daten nach Abschluss des Workflows speichern.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Workflow-Artefakten

Artefakte erlauben es dir, Daten nach dem Job-Abschluss abzuspeichern und diese Daten an einen anderen Job im selben Workflow weiterzugeben. Ein Artefakt ist eine Datei oder eine Dateisammlung, die während einer Workflow-Ausführung erstellt wird. Zum Beispiel kannst Du Artefakte verwenden, um Deine Build- und Testausgabe zu speichern, nachdem ein Workflow-Lauf beendet ist.

{% data reusables.github-actions.artifact-log-retention-statement %} The retention period for a pull request restarts each time someone pushes a new commit to the pull request.

Dies sind einige der gängigen Artefakte, die du hochladen kannst:

- Protokolldateien und Coredumps
- Testergebnisse, Fehler und Screenshots
- Binäre oder komprimierte Dateien
- Ergebnisse zur Stresstest-Leistungsausgabe und Codeabdeckung

{% if currentVersion == "free-pro-team@latest" %}

Das Speichern von Artefakten verwendet Speicherplatz auf {% data variables.product.product_name %}. {% data reusables.github-actions.actions-billing %} Weitere Informationen findest Du unter „[Abrechnung für {% data variables.product.prodname_actions %} verwalten](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)“.

{% else %}

Artefakte verfallen automatisch nach 90 Tagen, aber du kannst jederzeit den verwendeten Speicher auf {% data variables.product.prodname_actions %} wieder verfügbar machen, indem du Artefakte löschst, bevor sie auf {% data variables.product.product_name %} ablaufen.

{% endif %}

Artefakte werden während eines Workflow-Laufs hochgeladen und Du kannst den Namen und die Größe eines Artefakts in der Benutzeroberfläche anzeigen. Wenn ein Artefakt mit der {% data variables.product.product_name %}-Oberfläche heruntergeladen wird, werden alle Dateien, die als Teil des Artefakts einzeln hochgeladen wurden, zusammen in eine einzige Datei gezippt. Die Abrechnung erfolgt anhand der Größe des hochgeladenen Artefakts und nicht der Größe der Zip-Datei erfolgt.

{% data variables.product.product_name %} bietet zwei Aktionen, über die Sie Build-Artefakte hoch- und herunterladen können. For more information, see the {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact) actions{% else %} `actions/upload-artifact` and `download-artifact` actions on {% data variables.product.product_location %}{% endif %}.

Daten zwischen Aufträgen freigeben:

* **Dateien hochladen**: Gib der hochgeladenen Datei einen Namen und lade die Daten hoch, bevor der Job endet.
* **Dateien herunterladen**: Du kannst nur Artefakte herunterladen, die während des gleichen Workflow-Laufs hochgeladen wurden. Wenn Du eine Datei herunterlädst, kannst Du sie mit Namen referenzieren.

Die Steps („Schritte“) eines Jobs teilen sich die selbe Umgebung auf der Runner-Maschine, laufen aber in ihren eigenen individuellen Prozessen. Mithilfe von Ein- und Ausgaben können Sie Daten zwischen den Schritten in einem Auftrag weitergeben. Weitere Informationen zu Ein- und Ausgaben finden Sie unter „[Metadatensyntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions)“.

### Build- und Testartefakte hochladen

Du kannst einen Workflow für kontinuierliche Integration (CI) erstellen, um Deinen Code zu bauen und zu testen. For more information about using {% data variables.product.prodname_actions %} to perform CI, see "[About continuous integration](/articles/about-continuous-integration)."

Durch die Ergebnisse der Erstellung und des Tests Deines Codes werden oft zum Debuggen von Testfehlern einsetzbare Dateien und bereitstellbarer Produktionscode erstellt. Du kannst einen Workflow konfigurieren, um den per Push-Vorgang an Dein Repository übertragenen Code zu erstellen und zu testen und um einen erfolgreichen oder fehlerhaften Status zu melden. Du kannst die Build- und Testausgabe hochladen, um sie für Bereitstellungen, zum Debuggen fehlerhafter Tests oder von Abstürzen und zum Anzeigen der Testsuite-Abdeckung zu verwenden.

Du kannst die Aktion `upload-artifact` verwenden um Artefakte hochzuladen. Beim Hochladen eines Artefakts können Sie eine einzelne Datei oder ein Verzeichnis oder mehrere Dateien oder Verzeichnisse angeben. Sie können auch bestimmte Dateien oder Verzeichnisse ausschließen und Platzhaltermuster verwenden. Es wird empfohlen, einen Namen für ein Artefakt bereitzustellen, aber wenn kein Name angegeben wird, wird `Artefakt` als Standardname verwendet. For more information on syntax, see the {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) action{% else %} `actions/upload-artifact` action on {% data variables.product.product_location %}{% endif %}.

#### Beispiel

Zum Beispiel kann Dein Projektarchiv oder eine Webanwendung SASS- und TypeScript-Dateien enthalten, die Du in CSS und JavaScript konvertieren musst. Falls Dein Build-Konfiguration die kompilierten Dateien im Verzeichnis `dist` ausgibt, würdest Du die im Verzeichnis `dist` enthaltenen Dateien auf Deinem Webanwendungsserver bereitstellen, sofern alle Tests erfolgreich abgeschlossen werden.

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

In diesem Beispiel wird gezeigt, wie Du einen Workflow für ein Node.js-Projekt erstellst, das den Code im `src`-Verzeichnis `erstellt` und die Tests im `tests`-Verzeichnis ausführt. Wenn `npm test` ausgeführt wird, wird im Verzeichnis `output/test/` ein Bericht zur Codeabdeckung mit dem Namen `code-coverage.html` erstellt und gespeichert.

Der Workflow lädt die Produktionsartefakte in das `dist` Verzeichnis, schließt jedoch alle Markdowndateien aus. Es lädt auch die `code-coverage.html` Bericht als ein weiteres Artefakt.

```yaml
Name: Node CI

on: [push]

jobs:
  build_and_test:
    läuft auf: ubuntu-latest
    schritte:
      - name: Checkout repository
        verwendet: actions/checkout@v2
      - name: npm install, build, and test
        run: |
          npm installieren sie
          npm run build --if-present
          npm test
      - name: Archiv production artifacts
        uses: actions/upload-artifact@v2
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*md
      - Name: Archivcodeabdeckungsergebnisse
        verwendet: Aktionen/Upload-artifact@v2
        mit:
          Name: code-coverage-report
          pfad: output/test/code-coverage.html
```

![Bild mit Workflow-Ausführung des Workflow-Upload-Artefakts](/assets/images/help/repository/upload-build-test-artifact.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Configuring a custom artifact retention period

You can define a custom retention period for individual artifacts created by a workflow. When using a workflow to create a new artifact, you can use `retention-days` with the `upload-artifact` action. This example demonstrates how to set a custom retention period of 5 days for the artifact named `my-artifact`:

```
  - name: 'Upload Artifact'
    uses: actions/upload-artifact@v2
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

The `retention-days` value cannot exceed the retention limit set by the repository, organization, or enterprise.
{% endif %}

### Artefakte herunterladen oder löschen

During a workflow run, you can use the [`download-artifact`](https://github.com/actions/download-artifact)action to download artifacts that were previously uploaded in the same workflow run.

After a workflow run has been completed, you can download or delete artifacts on {% data variables.product.prodname_dotcom %} or using the REST API. For more information, see "[Downloading workflow artifacts](/actions/managing-workflow-runs/downloading-workflow-artifacts)," "[Removing workflow artifacts](/actions/managing-workflow-runs/removing-workflow-artifacts)," and the "[Artifacts REST API](/v3/actions/artifacts/)."

#### Herunterladen von Artefakten während einer Workflowausführung

The [`actions/download-artifact`](https://github.com/actions/download-artifact) action can be used to download previously uploaded artifacts during a workflow run.

{% note %}

**Hinweis:** Sie können nur Artefakte in einem Workflow herunterladen, die während desselben Workflowlaufs hochgeladen wurden.

{% endnote %}

Geben Sie den Namen eines Artefakts an, um ein einzelnes Artefakt herunterzuladen. Wenn Sie ein Artefakt hochgeladen haben, ohne einen Namen anzugeben, lautet der Standardname `Artefakt`.

```yaml
- Name: Laden Sie ein einzelnes Artefakt
  verwendet: Aktionen/Download-artifact@v2
  mit:
    Name: my-artifact
```

Sie können auch alle Artefakte in einem Workflow herunterladen, der ausgeführt wird, indem Sie keinen Namen angeben. Dies kann nützlich sein, wenn Sie mit vielen Artefakten arbeiten.

```yaml
- Name: Laden Sie alle Workflow-Ausführungsartefakte
  verwendet: Aktionen/Download-artifact@v2
```

Wenn Sie alle Artefakte einer Workflowausführung herunterladen, wird ein Verzeichnis für jedes Artefakt mit seinem Namen erstellt.

For more information on syntax, see the {% if currentVersion == "free-pro-team@latest" %}[actions/download-artifact](https://github.com/actions/download-artifact) action{% else %} `actions/download-artifact` action on {% data variables.product.product_location %}{% endif %}.

### Daten zwischen Aufträgen in einem Workflow weitergeben

Du kannst die Aktionen `upload-artifact` und `download-artifact` verwenden, um innerhalb eines Workflows Daten zwischen Jobs auszutauschen. In diesem Beispiel-Workflow wird veranschaulicht, wie Daten zwischen Aufträgen im selben Workflow weitergegeben werden. For more information, see the {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact) actions{% else %} `actions/upload-artifact` and `download-artifact` actions on {% data variables.product.product_location %}{% endif %}.

Von den Artefakten eines vorherigen Auftrags abhängige Aufträge müssen auf den erfolgreichen Abschluss des abhängigen Auftrags warten. Bei diesem Workflow kommt das Stichwort `needs` zum Einsatz, um sicherzustellen, dass `job_1`, `job_2` und `job_3` sequenziell ausgeführt werden. Beispielsweise schreibt `job_2` vor, dass `job_1` die Syntax `needs: job_1` verwendet.

Auftrag 1 führt die folgenden Schritte durch:
- Führt eine mathematische Berechnung aus und speichert das Ergebnis in einer Textdatei namens `math-homework.txt`.
- Verwendet die Aktion `upload-artifact`, um die Datei `math-homework.txt` mit dem Namen `homework` hochzuladen. Die Aktion platziert die Datei in einem Verzeichnis mit dem Namen `homework`.

Auftrag 2 verwendet das Ergebnis des vorherigen Auftrags:
- Lädt das im vorherigen Auftrag hochgeladene `homework`-Artefakt herunter. Die Aktion `download-artifact` lädt die Artefakte standardmäßig in das Verzeichnis der Arbeitsoberfläche, in dem der Schritt ausgeführt wird. Du kannst den Eingabeparameter `path` verwenden, um ein anderes Download-Verzeichnis anzugeben.
- Liest den Wert in der Datei `homework/math-homework.txt`, führt eine mathematische Berechnung durch und speichert das Ergebnis in `math-homework.txt`.
- Lädt die Datei `math-homework.txt` hoch. Dieser Upload überschreibt den vorherigen Upload, da beide Uploads den gleichen Namen haben.

Auftrag 3 zeigt das im vorherigen Auftrag hochgeladene Ergebnis an:
- Lädt das `homework`-Artefakt herunter.
- Gibt das Ergebnis der mathematischen Gleichung im Protokoll aus.

Die vollständige, in diesem Workflow-Beispiel durchgeführte mathematische Operation lautet `(3 + 7) x 9 = 90`.

```yaml
name: Daten zwischen Jobs

teilen: [push]

Jobs:
  job_1:
    Name: Hinzufügen von 3 und 7
    -Runs-on: ubuntu-latest
    Schritte:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - Name: Math-Ergebnis für Job 1
        verwendet: Aktionen/Upload-artifact@v2
        mit:
          Name: Hausaufgaben
          Pfad: math-homework.txt

  job_2:
    Name: Multiplizieren mit 9
    benötigt: job_1
    -Run-on: Windows-neueste
    Schritte:
      - Name: Download Mathe-Ergebnis für Job 1
        verwendet: Aktionen
        
      
          artifact@v2
        /
          value='cat math-homework.txt'
          expr $value '* 9 > math-homework.txt
      - Name: Math-Ergebnis für Job 2
        verwendet: aktionen/upload-artifact@v2
        mit:
          Name: Hausaufgaben
          Pfad: math-homework.txt

  job_3:
    Name: Anzeigeergebnisse
    Bedürfnisse: job_2
    -Auslauf: macOS-neueste
    Schritte:
      - Name: Mathematisches Ergebnis für Job 2
        verwendet: Aktionen/Download-artifact@v2
        mit:
          Name: Hausaufgaben
      - Name: Drucken sie das Endergebnis
        Shell: bash
        run: |
          value='cat math-homework.txt'
          echo Das Ergebnis ist $value
```

![Workflow, der zum Durchführen mathematischer Operationen Daten zwischen Aufträgen weitergibt](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow.png)

{% if currentVersion == "free-pro-team@latest" %}

### Weiterführende Informationen

- "[ Abrechnung für {% data variables.product.prodname_actions %} verwalten](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

{% endif %}
