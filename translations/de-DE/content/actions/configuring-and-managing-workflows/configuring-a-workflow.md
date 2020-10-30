---
title: Konfigurieren eines Workflows
intro: 'Sie können benutzerdefinierte Workflows erstellen, um die Lebenszyklusprozesse der Softwareentwicklung Ihres Projekts zu automatisieren.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-github-action/
  - /articles/creating-a-workflow-with-github-actions/
  - /articles/configuring-a-workflow
  - /github/automatisieren-ihren-workflow-mit-github-aktionen/configuring-a-workflow
  - /actions/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /actions/creating-workflows/workflow-configuration-options
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

Personen mit Schreib- oder Administratorberechtigungen für ein Repository können Workflows erstellen, bearbeiten oder anzeigen.

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Workflows

Workflows sind benutzerdefinierte automatisierte Prozesse, die Sie in Ihrem Repository einrichten können, um ein Projekt auf {% data variables.product.prodname_dotcom %}zu erstellen, zu testen, zu verpacken, freizugeben oder bereitzustellen. Mit Workflows können Sie Ihren Softwareentwicklungslebenszyklus mit einer Vielzahl von Tools und Services automatisieren. Weitere Informationen finden Sie unter "[über {% data variables.product.prodname_actions %}](/articles/about-github-actions)".

Sie können mehr als einen Workflow in einem Repository erstellen. Sie müssen Workflows im `.github/workflows` Verzeichnis im Stammverzeichnis Ihres Repositorys speichern.

Workflows müssen über mindestens einen Auftrag verfügen, und Aufträge enthalten eine Reihe von Schritten, die einzelne Aufgaben ausführen. Steps können Befehle ausführen oder eine Aktion verwenden. Sie können eigene Aktionen erstellen oder Aktionen verwenden, die von der {% data variables.product.prodname_dotcom %} Community gemeinsam genutzt werden, und sie nach Bedarf anpassen.

Sie können einen Workflow so konfigurieren, dass er gestartet wird, wenn ein {% data variables.product.prodname_dotcom %} Ereignis, nach einem Zeitplan oder von einem externen Ereignis aus auftritt.

Sie müssen Workflows mithilfe der YAML-Syntax konfigurieren und als Workflowdateien in Ihrem Repository speichern. Nachdem Sie erfolgreich eine YAML-Workflowdatei erstellt und den Workflow ausgelöst haben, werden die Buildprotokolle, Testergebnisse, Artefakte und Status für jeden Schritt Ihres Workflows angezeigt. Weitere Informationen finden Sie unter "[Verwalten eines Workflows, der](/articles/managing-a-workflow-run)ausgeführt wird."

 ![Annotiertes Workflow-Ausführungsbild](/assets/images/help/repository/annotated-workflow.png)

Sie können auch Benachrichtigungen für Workflowstatusaktualisierungen erhalten. Weitere Informationen zu Benachrichtigungsoptionen finden Sie unter "[Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".

Nutzungsbeschränkungen gelten für einzelne Workflows. Weitere Informationen finden Sie unter "[Verwendungsgrenzen für Workflows](/articles/workflow-syntax-for-github-actions#usage-limits)."

### Erstellen einer Workflowdatei

Auf einer hohen Ebene sind dies die Schritte zum Hinzufügen einer Workflowdatei. Spezifische Konfigurationsbeispiele finden Sie in den folgenden Abschnitten.

1. Erstellen Sie im Stammverzeichnis Ihres Repositorys ein Verzeichnis mit dem Namen `.github/workflows` , um Ihre Workflowdateien zu speichern.

1. Fügen Sie in `.github/workflows`eine `.yml-` oder `.yaml-` -Datei für Ihren Workflow hinzu. Beispielsweise `.github/workflows/continuous-integration-workflow.yml`.

1. Verwenden Sie die "[Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)" Referenzdokumentation, um Ereignisse auszuwählen, um eine Aktion auszulösen, Aktionen hinzuzufügen und Ihren Workflow anzupassen.

1. Übertragen Sie Ihre Änderungen in der Workflowdatei an die Verzweigung, in der der Workflow ausgeführt werden soll.

#### Beispiel für Workflowdateien

{% raw %}
```yaml
name: Greet Everyone
- Dieser Workflow wird bei Pushes in das Repository ausgelöst.
on: [push]

Jobs:
  build:
    ' Jobname ist Greeting
    name: Greeting
    ' Dieser Job läuft unter Linux
    läuft auf: ubuntu-latest
    steps:
      - Dieser Schritt verwendet GitHubs hello-world-javascript-action: https://github.com/actions/hello-world-javascript-action
      - Name: Hello world
        verwendet: actions/hello-world-javascript-action@v1.1
        mit:
          who-to-greet: 'Mona the Octocat'
        id: hello
      - Dieser Schritt druckt eine Ausgabe (Zeit) von der Aktion des vorherigen Schritts.
      - Name: Echo der Begrüßungszeit
        Laufen: Echo 'Die Zeit war '{{ steps.hello.outputs.time }}.'
```
{% endraw %}

{% data reusables.github-actions.invalid-workflow-files %}

### Auslösen eines Workflows mit Ereignissen

Sie können einen Workflow so konfigurieren, dass er einmal gestartet wird:
- Ein Ereignis auf {% data variables.product.prodname_dotcom %} tritt auf, z. B. wenn jemand einen Commit an ein Repository überträgt oder wenn ein Problem oder eine Pull-Anforderung erstellt wird.
- Ein geplantes Ereignis beginnt.
- Ein externes Ereignis tritt auf.

Um einen Workflow auszulösen, nachdem ein Ereignis auf {% data variables.product.prodname_dotcom %}passiert, fügen Sie `zu:` und einen Ereigniswert nach dem Workflownamen hinzu. Dieser Workflow wird beispielsweise ausgelöst, wenn Änderungen an eine Verzweigung im Repository übertragen werden.

```yaml
Name: descriptive-workflow-name
on: push
```

Zum Planen eines Workflows können Sie die POSIX-Cron-Syntax in Ihrer Workflowdatei verwenden. Das kürzeste Intervall, in dem Sie geplante Workflows ausführen können, ist einmal alle 5 Minuten. Dieser Workflow wird z. B. stündlich ausgelöst.

```yaml
zu:
  Zeitplan:
    - cron: '0 * * * *'
```

#### Manuelle Ausführung eines Workflows

Um einen Workflow manuell auszuführen, müssen Sie zuerst den Workflow so konfigurieren, dass er das `workflow_dispatch` -Ereignis verwendet. Sie können benutzerdefinierte Eingabeeigenschaften, Standardeingabewerte und erforderliche Eingaben direkt in Ihrem Workflow konfigurieren. Wenn der Workflow ausgeführt wird, können Sie auf die Eingabewerte im `github.event.inputs` Kontextzugreifen. Weitere Informationen finden Sie unter "[Ereignisse, die Workflows](/actions/reference/events-that-trigger-workflows/#workflow_dispatch)auslösen" und "[Kontext- und Ausdruckssyntax für {% data variables.product.prodname_dotcom %} Aktionen](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

In diesem Beispiel wird der `Name` definiert und</code> ein- und `zu Hause verwendet, und sie werden mit den Kontexten <code>github.event.inputs.name` und `github.event.inputs.home` gedruckt. Wenn ein `Name` nicht angegeben wird, wird der Standardwert 'Mona the Octocat' gedruckt.

{% raw %}
```yaml
Name: Manuell ausgelöster Workflow
auf:
  workflow_dispatch:
    Eingaben:
      Name:
        Beschreibung: 'Person zu grüßen'
        erforderlich: true
        Standard: 'Mona the Octocat'
      Home:
        Beschreibung: 'Standort'
        erforderlich: falsche

Jobs:
  say_hello:
    läuft auf: ubuntu-latest
    Schritte:
    - laufen: |
        Echo "Hallo{{ github.event.inputs.name }}!"
        echo "- in{{ github.event.inputs.home }}!"
```
{% endraw %}

Sie können das `workflow_dispatch` -Ereignis über die Registerkarte Aktionen auf {% data variables.product.prodname_dotcom %} oder mithilfe der REST-API auslösen. Weitere Informationen zur Verwendung der REST-API finden Sie unter "[Erstellen eines Workflow-Dispatch-Ereignisses](/rest/reference/actions/#create-a-workflow-dispatch-event)." Wenn Sie die REST-API verwenden, konfigurieren Sie die `eingaben` und `ref` als Anforderungstextparameter. Wenn die Eingaben weggelassen werden, werden die in der Workflowdatei definierten Standardwerte verwendet.

Um das `workflow_dispatch` Ereignis auf {% data variables.product.prodname_dotcom %}auszulösen, muss sich Ihr Workflow in der Standardverzweigung befinden. Führen Sie die folgenden Schritte aus, um eine Workflowausführung manuell auszulösen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Klicken Sie in der linken Seitenleiste auf den Workflow, den Sie ausführen möchten. ![Aktionen auswählen Workflow](/assets/images/actions-select-workflow.png)
1. Wählen Sie über der Liste der Workflowausführungen **Workflow ausführen**. ![Aktionsworkflow-Dispatch](/assets/images/actions-workflow-dispatch.png)
1. Wählen Sie die Verzweigung aus, in der der Workflow ausgeführt wird, und geben Sie die Eingabeparameter ein, die vom Workflow verwendet werden. Klicken Sie auf **Workflow ausführen**. ![Aktionen manuell ausgeführt Workflow](/assets/images/actions-manually-run-workflow.png)

#### Auslösen von Workflows aus externen Ereignissen

Um einen Workflow auszulösen, nachdem ein externes Ereignis auftritt, können Sie ein `repository_dispatch` Webhook-Ereignis aufrufen, indem Sie den REST-API-Endpunkt "Erstellen eines Repository-Dispatch-Ereignisses" aufrufen. Weitere Informationen finden Sie unter "[Erstellen eines Repository-Dispatchereignisses](/v3/repos/#create-a-repository-dispatch-event)."

Weitere Informationen und Beispiele finden Sie unter "[Ereignisse, die Workflows](/articles/events-that-trigger-workflows#webhook-events)auslösen".

### Filtern nach bestimmten Zweigen, Tags und Pfaden

Sie können Ihren Workflow so einrichten, dass er nur für bestimmte Verzweigungen ausgeführt wird.

Dieser Workflow wird z. B. ausgeführt, wenn ein Push, der Dateien im `Test` Verzeichnis enthält, auf dem `Master-` -Zweig ausgeführt wird oder an das `v1-` -Tag überführt wird.

```yaml
auf:
  push:
    verzweigt:
      - Master-
    -Tags:
      - v1
    - Dateipfade, die im Ereignis zu berücksichtigen sind. Optional; Standardeinstellungen für alle.
    Pfade:
      - 'test/*'
```

Weitere Informationen zur Zweig-, Tag- und Pfadfiltersyntax finden Sie unter "[`weiter.<push|pull_request>.<branches|tags>`](/articles/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)" und "[`weiter.<push|pull_request>.paths`](/articles/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

### Die Wahl eines Läufers

Sie können Workflows auf {% data variables.product.prodname_dotcom %}-gehosteten Läufern oder selbst gehosteten Läufern ausführen. Aufträge können direkt auf dem Computer oder in einem Docker-Container ausgeführt werden.

Sie können den Läufer für jeden Auftrag in einem Workflow mithilfe `ausläuften`angeben. Weitere Informationen zu `ausgeführten`finden Sie unter "[Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

{% data reusables.actions.enterprise-github-hosted-runners %}

#### Verwenden eines {% data variables.product.prodname_dotcom %}-gehosteten Läufers

Sie können aus verschiedenen Typen und Versionen virtueller Host-Maschinen auswählen, einschließlich Linux, Windows und macOS. Jeder Auftrag in einem Workflow wird in einer neuen Instanz der virtuellen Umgebung ausgeführt, und Schritte innerhalb eines Auftrags können Informationen mithilfe des Dateisystems freigeben. Weitere Informationen finden Sie unter "virtuelle Umgebungen für {% data variables.product.prodname_actions %}gehostete Läufer</a>"
.</p> 

Sie können z. B.  `neuesten` verwenden, um die neueste Version eines Ubuntu- {% data variables.product.prodname_dotcom %}-gehosteten Läufers anzugeben.



```yaml
Runs-on: ubuntu-latest
```




#### Verwenden eines selbst gehosteten Läufers

Sie können Beschriftungen verwenden, um Aufträge an bestimmte Arten von selbst gehosteten Läufern weiterzuleiten. Alle selbst gehosteten Läufer erhalten die `selbst gehosteten` Label und jeder selbst gehostete Läufer hat Labels für sein Betriebssystem und seine Systemarchitektur. Weitere Informationen finden Sie unter "[Verwenden von selbst gehosteten Läufern in einem Workflow](/actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

Wenn Sie beispielsweise einen selbst gehosteten Läufer mit einem Linux-Betriebssystem und einer ARM32-Architektur hinzugefügt haben, können Sie diesen Läufer mithilfe der `selbst gehosteten`, `Linux-`und `ARM32-` -Beschriftungen auswählen.



```yaml
Runs-on: [selbst gehostet, linux, ARM32]
```




### Konfigurieren einer Buildmatrix

Um mehrere Betriebssysteme, Plattformen und Sprachversionen gleichzeitig zu testen, können Sie eine Buildmatrix konfigurieren.

Mit einer Buildmatrix können Sie Ihren Code mit unterschiedlichen Software- und Betriebssystemkonfigurationen testen. Ein Workflow kann z. B. einen Auftrag für mehr als eine unterstützte Version einer Sprache, eines Betriebssystems oder eines Tools ausführen. Für jede Konfiguration wird eine Kopie des Auftrags ausgeführt und ein Status meldet.

Sie können eine Buildmatrix in Ihrer Workflowdatei mit einem Array angeben, das die Konfigurationsoptionen unter `Strategie auflistet:`. Diese Buildmatrix führt z. B. einen Auftrag mit verschiedenen Versionen von Node.js und Ubuntu, einem Linux-Betriebssystem, aus.

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}


```yaml
{{ matrix.os }}
-Strategie:
  Matrix:
    os: [ubuntu-16.04, ubuntu-18.04]
    Knoten: [6, 8, 10]
```


{% endraw %}

Weitere Informationen finden Sie unter "[Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)."



### Verwenden der Auscheckaktion

Es gibt mehrere Standardaktionen, die Sie in Ihrem Workflow verwenden können. Die Auscheckaktion ist eine Standardaktion, die Sie in Ihren Workflow einbeziehen müssen, bevor andere Aktionen ausgeführt werden, wenn:

- Ihr Workflow erfordert eine Kopie des Codes Ihres Repositorys, z. B. beim Erstellen und Testen des Repositorys oder mithilfe einer kontinuierlichen Integration.
- Es gibt mindestens eine Aktion in Ihrem Workflow, die im selben Repository definiert ist. Weitere Informationen finden Sie unter "[Verweisen auf Aktionen in Ihrem Workflow](#referencing-actions-in-your-workflow)."

Um die Standard-Checkout-Aktion ohne weitere Spezifikationen zu verwenden, fügen Sie diesen Schritt hinzu:


```yaml
- verwendet: Aktionen/checkout@v2
```


Durch die Verwendung `v2-` in diesem Beispiel wird sichergestellt, dass Sie eine stabile Version der Auscheckaktion verwenden. Weitere Informationen finden Sie unter [der](https://github.com/actions/checkout).



### Auswählen des Typs der Aktionen für Ihren Workflow

Es gibt verschiedene Arten von Aktionen, die Sie in Ihrem Workflow verwenden können, um den Anforderungen Ihres Projekts gerecht zu werden:

- Docker-Containeraktionen
- JavaScript-Aktionen
- Zusammengesetzte Ausführungsschritte Aktionen

Weitere Informationen finden Sie unter "[über Aktionen](/articles/about-actions#types-of-actions)".

Wenn Sie die Art der Aktionen auswählen, die in Ihrem Workflow verwendet werden sollen, empfehlen wir, vorhandene Aktionen in öffentlichen Repositorys oder auf Docker Hub zu untersuchen und diese Aktionen möglicherweise an Ihr Projekt anzupassen.

Sie können Aktionen durchsuchen und verwenden, die von {% data variables.product.prodname_dotcom %} in der [github.com/actions](https://github.com/actions) -Organisation erstellt wurden. Informationen zum Besuch von Docker Hub finden Sie unter "[Docker Hub](https://www.docker.com/products/docker-hub)" auf der Docker-Site.



### Verweisen auf Aktionen in Ihrem Workflow

Um Aktionen in Ihrer Workflowdatei mit der richtigen Syntax zu referenzieren, müssen Sie berücksichtigen, wo die Aktion definiert ist.

Workflows können Aktionen verwenden, die in:

- Ein öffentliches Repository
- Das gleiche Repository, in dem Ihre Workflowdatei auf die Aktionen verweist
- Ein veröffentlichtes Docker-Containerimage auf Docker Hub

Um eine in einem privaten Repository definierte Aktion zu verwenden, müssen sich sowohl die Workflowdatei als auch die Aktion im selben Repository befinden. Ihr Workflow kann keine Aktionen verwenden, die in anderen privaten Repositorys definiert sind, auch wenn sich das andere private Repository in derselben Organisation befindet.

Um Ihren Workflow auch dann stabil zu halten, wenn Aktualisierungen an einer Aktion vorgenommen werden, können Sie auf die Version der Aktion verweisen, die Sie verwenden, indem Sie in Ihrer Workflowdatei eine Git-Ref- oder Docker-Tag-Nummer angeben. Beispiele finden Sie unter "[Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".

{% if currentVersion == "free-pro-team@latest" %}



{% data reusables.dependabot.version-updates-for-actions %}



{% endif %}

Ausführlichere Konfigurationsoptionen finden Sie unter "[Workflowsyntax für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".



#### Verweisen auf eine Aktion aus einem öffentlichen Repository

Wenn eine Aktion in einem öffentlichen Repository definiert ist, müssen Sie auf die Aktion verweisen, indem Sie die Syntax `{owner}/{repo}{ref}` oder `{owner}/{repo}/{path}-{ref}`verwenden.



```yaml
jobs:
  my_first_job:
    Name: Mein Jobname
      Schritte:
        - verwendet: aktionen/setup-node@v1
          mit:
            Node-Version: 10.x
```


Ein vollständiges Workflowbeispiel finden Sie im [Setupknoten](https://github.com/actions/setup-node) Vorlagen-Repository.



#### Verweisen auf eine Aktion im selben Repository, in dem eine Workflowdatei die Aktion verwendet

Wenn eine Aktion im selben Repository definiert ist, in dem Ihre Workflowdatei die Aktion verwendet, können Sie auf die Aktion mit der`{owner}/{repo}-{ref}` oder `./path/to/dir-` Syntax in ihrer Workflowdatei verweisen.

Beispiel-Repository-Dateistruktur:



```
|-- hello-world (Repository)
|   |__ .github
|       Workflows
|           My-First-Workflow.yml
|       • Maßnahmen
|           |__ hello-world-action
|               • action.yml
```


Beispiel-Workflowdatei:



```yaml
jobs:
  build:
    läuft auf: ubuntu-latest
    Schritte:
      - Dieser Schritt checkt eine Kopie Ihres Repositorys aus.
      - verwendet: actions/checkout@v2
      - Dieser Schritt verweist auf das Verzeichnis, das die Aktion enthält.
      - verwendet: ./.github/actions/hello-world-action
```




#### Verweisen auf einen Container auf Docker Hub

Wenn eine Aktion in einem veröffentlichten Docker-Containerimage auf Docker Hub definiert ist, müssen Sie auf die Aktion mit der `docker://{image}:{tag}` Syntax in Ihrer Workflowdatei verweisen. Zum Schutz Ihres Codes und Ihrer Daten wird dringend empfohlen, die Integrität des Docker-Containerimages von Docker Hub zu überprüfen, bevor Sie es in Ihrem Workflow verwenden.



```yaml
jobs:
  my_first_job:
    Schritte:
      - Name: Mein erster Schritt
        verwendet: docker://alpine:3.8
```


Einige Beispiele für Docker-Aktionen finden Sie im [Docker-image.yml-Workflow](https://github.com/actions/starter-workflows/blob/master/ci/docker-image.yml) und "[Erstellen einer Docker-Containeraktion](/articles/creating-a-docker-container-action)."

Weitere Informationen finden Sie unter "[Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)."



### Hinzufügen eines Workflowstatus-Badges zu Ihrem Repository

{% data reusables.repositories.actions-workflow-status-badge-into %}

Wenn Ihr Workflow den `Namen` Schlüsselwort verwendet, müssen Sie auf den Workflow anhand des Namens verweisen. Wenn der Name Ihres Workflows Leerraum enthält, müssen Sie das Leerzeichen durch die URL codierte Zeichenfolge `%20`ersetzen. Weitere Informationen zum Schlüsselwort `Name` finden Sie unter "[Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)".



```
https://github.com/<OWNER>/<REPOSITORY>/Workflows/<WORKFLOW_NAME>/badge.svg
```


Wenn Ihr Workflow keinen `Namen`hat, müssen Sie auch auf die Workflowdatei verweisen, indem Sie den Dateipfad relativ zum Stammverzeichnis des Repositorys verwenden.

{% note %}

**Hinweis:** Verweisen auf die Workflowdatei mithilfe des Dateipfads funktioniert nicht, wenn der Workflow einen `Namen`hat.

{% endnote %}



```
https://github.com/<OWNER>/<REPOSITORY>/Workflows/<WORKFLOW_FILE_PATH>/badge.svg
```




#### Beispiel für die Verwendung eines Workflownamens

In diesem Markdown-Beispiel wird ein Status-Badge für einen Workflow mit dem Namen "Greet Everyone" hinzugefügt. Die `owner` des Repositorys sind die `Aktionen` Organisation, und der name `REPOSITORY` ist `hello-world`.



```
! [Beispiel-Workflowname] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```




#### Beispiel für die Verwendung eines Workflowdateipfads

In diesem Markdown-Beispiel wird ein Status-Badge für einen Workflow mit dem Dateipfad `.github/workflows/main.yml`hinzugefügt. Die `owner` des Repositorys sind die `Aktionen` Organisation, und der name `REPOSITORY` ist `hello-world`.



```
! [Beispiel Workflowdateipfad] (https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```




#### Beispiel für die Verwendung des `-Zweig-` -Parameters

In diesem Markdown-Beispiel wird ein Status-Badge für eine Verzweigung mit dem Namen `Feature-1-`hinzugefügt.



```
! [Beispiel-Zweigparameter] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```




#### Beispiel für die Verwendung des Parameters `-Ereignis`

In diesem Markdown-Beispiel wird ein Badge hinzugefügt, das den Status von Workflowausführungen anzeigt, die durch das `pull_request` -Ereignis ausgelöst werden.



```
! [Beispielereignisparameter] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```


{% if currentVersion == "free-pro-team@latest" %}


### Weiterführende Informationen

- "[Verwalten der Abrechnung für {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)" 
  
  {% endif %}
