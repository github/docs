---
title: Erstellen einer zusammengesetzten Ausführungsschritteaktion
intro: 'In diesem Handbuch erfahren Sie, wie Sie eine Aktion für zusammengesetzte Ausführungsschritte erstellen.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

In diesem Handbuch erfahren Sie mehr über die grundlegenden Komponenten, die zum Erstellen und Verwenden einer Aktion für die verwendungsgemäßen zusammengesetzten Ausführungsschritte erforderlich sind. Diese Anleitung fokussiert jene Komponenten, welche zum Paketieren der Aktion benötigt werden. Daher hat der Aktions-Code nur minimale Funktionalität. Die Aktion druckt "Hello World" und dann "Goodbye", oder wenn Sie einen benutzerdefinierten Namen angeben, druckt sie "Hello [who-to-greet]" und dann "Goodbye". Die Aktion ordnet auch eine Zufallszahl der `Zufallszahl` Ausgabevariablen zu und führt ein Skript mit dem Namen `goodbye.sh`aus.

Nachdem Sie dieses Projekt abgeschlossen haben, sollten Sie verstehen, wie Sie Ihre eigene Aktion für zusammengesetzte Ausführungsschritte erstellen und in einem Workflow testen.

### Vorrausetzungen

Before you begin, you'll create a {% data variables.product.product_name %} repository.

1. Create a new public repository on {% data variables.product.product_location %}. Sie können einen beliebigen Repository-Namen auswählen oder die folgenden `hello-world-composite-run-steps-action` Beispiel verwenden. Du kannst diese Dateien hinzufügen, nachdem Dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde. Weitere Informationen finden Sie unter „[Neues Repository erstellen](/articles/creating-a-new-repository)“.

1. Clone Dein Repository auf Deinen Computer. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.

1. Gehe in Deinem Terminal zum Verzeichnisse Deines neuen Repositorys.

  ```shell
  cd hello-world-composite-run-steps-action
  ```

2. Erstellen Sie im `hello-world-composite-run-steps-action` -Repository eine neue Datei mit dem Namen `goodbye.sh`, und fügen Sie den folgenden Beispielcode hinzu:

  ```bash
  echo "Auf Wiedersehen"
  ```

3. From your terminal, make `goodbye.sh` executable.

  ```shell
  chmod +x goodbye.sh
  ```

1. Checken Sie von Ihrem Terminal aus Ihre `goodbye.sh` Datei ein.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

### Eine Datei für die Metadaten der Aktion erstellen

1. Erstellen Sie im `hello-world-composite-run-steps-action` -Repository eine neue Datei mit dem Namen `action.yml` und fügen Sie den folgenden Beispielcode hinzu. Weitere Informationen zu dieser Syntax finden Sie unter "[`` für eine zusammengesetzte Ausführungsschritte](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-run-steps-actions)ausgeführt wird."

    {% raw %}
    **action.yml**
    ```yaml
    Name: 'Hello World'
    Beschreibung: 'Greet someone'
    inputs:
      who-to-greet: 'id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      zuzufällige Zahl: 
        Beschreibung: "Zufallszahl"
        Wert:{{ steps.random-number-generator.outputs.random-id }}
    läuft:
      mit: "composite"
      Schritten: 
        - laufen:{{ inputs.who-to-greet }}echo
          shell: bash
        - id: random-number-generator
          run: echo "::set-output name=random-id::'(echo $RANDOM)"
          shell: bash
        - run: '{{ github.action_path }}/goodbye.sh
          shell: bash
    ```
    {% endraw %}
  Diese Datei definiert die `Who-to-Greet-` Eingabe, ordnet die zuzufällig generierte Zahl der `Zufallszahl` Ausgabevariablen zu und führt das `goodbye.sh` Skript aus. Außerdem wird dem Läufer erläutert, wie die Aktion "Composite-Laufschritte" ausgeführt werden soll.

  Weitere Informationen zum Verwalten von Ausgaben finden Sie unter "[`Ausgaben` für eine zusammengesetzte Ausführungsschritte](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-run-steps-actions)".

  Weitere Informationen zur Verwendung von `github.action_path`finden Sie unter "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. From your terminal, check in your `action.yml` file.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. From your terminal, add a tag. This example uses a tag called `v1`. Weitere Informationen finden Sie unter „[Informationen zu Aktionen](/actions/creating-actions/about-actions#using-release-management-for-actions)“.

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

### Deine Aktion in einem Workflow testen

Der folgende Workflowcode verwendet die abgeschlossene Hello-World-Aktion, die Sie in "[Erstellen einer Aktionsmetadatendatei](/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)" ausgeführt haben.

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, but replace `actions/hello-world-composite-run-steps-action@v1` with the repository and tag you created. Darüber hinaus können Sie die Eingabe `who-to-greet` durch Ihren Namen ersetzen.

{% raw %}
**.github/workflows/main.yml**
```yaml
zu: [push]

Jobs:
  hello_world_job:
    läuft auf: ubuntu-latest
    Name: Ein Job, um Hallo zu sagen
    Schritte:
    - verwendet: aktionen/checkout@v2
    - id: foo
      verwendet: actions/hello-world-composite-run-steps-action@v1
      mit:
        who-to-greet: 'Mona the Octocat'
    - run: echo random-{{ steps.foo.outputs.random-number }} 
      number
```
{% endraw %}

Klicke in Deinem Repository auf die Registerkarte **Actions** (Aktionen), und wähle die neueste Workflow-Ausführung aus. Die Ausgabe sollte folgendes enthalten: "Hello Mona the Octocat", das Ergebnis des Skripts "Goodbye" und eine Zufallszahl.
