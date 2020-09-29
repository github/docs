---
title: Informationen zu Aktionen
intro: 'Aktionen sind einzelne Aufgaben, die Du kombinieren kannst, um Aufträge zu erstellen und Deinen Workflow anzupassen. Sie können eigene Aktionen erstellen oder Aktionen verwenden und anpassen, die von der {% data variables.product.prodname_dotcom %} -Community gemeinsam genutzt werden.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Aktionen

Zum Erstellen von Aktionen können Sie benutzerdefinierten Code schreiben, der mit Ihrem Repository auf die gewünschte Weise interagiert und sich dabei beispielsweise in die APIs von {% data variables.product.prodname_dotcom %} und in öffentlich zugängliche Drittanbieter-APIs integriert. Mit einer Aktion können Sie beispielsweise npm-Module veröffentlichen, SMS-Nachrichten bei dringenden Problemen senden oder produktionsreifen Code bereitstellen.

{% if currentVersion == "free-pro-team@latest" %}
Sie können eigene Aktionen schreiben und ausschließlich in Ihrem Workflow verwenden oder auch Ihre erstellten Aktionen mit der {% data variables.product.prodname_dotcom %}-Community schreiben. Die erstellten Aktionen können nur dann freigegeben werden, wenn das Repository öffentlich ist.
{% endif %}

Aktionen können direkt auf einem Computer oder in einem Docker-Container laufen. Sie können die Eingabe, die Ausgabe und die Umgebungsvariablen für eine Aktion definieren.

### Arten von Aktionen

Sie können Docker-Container- und JavaScript-Aktionen erstellen. Für Aktionen wird eine Metadaten-Datei benötigt, in der die Eingaben, Ausgaben und der Haupteinstiegspunkt für die Aktion definiert werden. Der Dateiname für die Metadaten muss entweder `action.yml` oder `action.yaml` sein. Weitere Informationen findest Du unter „[Metadatensyntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions)“.

| Typ                                  | Betriebssystem        |
| ------------------------------------ | --------------------- |
| Docker-Container                     | Linux                 |
| JavaScript                           | Linux, MacOS, Windows |
| Zusammengesetzte Ausführungsschritte | Linux, MacOS, Windows |

#### Docker-Containeraktionen

Docker-Container packen die Umgebung mit dem {% data variables.product.prodname_actions %}-Code. So entsteht eine konsistentere, zuverlässigere Arbeitseinheit, da der Aktionsbenutzer sich nicht um Tools oder Abhängigkeiten kümmern muss.

Mit einem Docker-Container können Sie bestimmte Versionen eines Betriebssystems sowie bestimmte Abhängigkeiten, Tools und Code verwenden. Bei Aktionen, die in einer bestimmten Umgebungskonfiguration ausgeführt werden müssen, ist Docker eine ideale Option, da Sie das Betriebssystem und die Tools anpassen können. Wegen der Latenz für das Erstellen und Abrufen des Containers sind Docker-Container-Aktionen langsamer als JavaScript-Aktionen.

Docker Container-Aktionen können nur auf Runnern mit einem Linux-Betriebssystem ausgeführt werden. {% data reusables.github-actions.self-hosted-runner-reqs-docker %}

#### JavaScript-Aktionen

JavaScript-Aktionen können direkt auf einem Runner-Rechner laufen und den Aktions-Code von der Umgebung trennen, in der der Code läuft. Eine JavaScript-Aktion umfasst einfacheren Aktionscode und lässt sich schneller ausführen als eine Docker-Container-Aktion.

{% data reusables.github-actions.pure-javascript %}

Wenn Sie ein Node.js Projekt entwickeln, bietet das {% data variables.product.prodname_actions %} Toolkit Pakete, die Sie in Ihrem Projekt verwenden können, um die Entwicklung zu beschleunigen. Weitere Informationen findest Du im Repository [actions/toolkit](https://github.com/actions/toolkit).

#### Zusammengesetzte Ausführungsschritte Aktionen

Ein _zusammengesetzten Ausführungsschritte_ Aktion ermöglicht es Ihnen, mehrere Workflowausführungsschritte innerhalb einer Aktion zu kombinieren. Sie können diese Funktion beispielsweise verwenden, um mehrere Ausführungsbefehle in einer Aktion zu bündeln, und dann einen Workflow haben, der die gebündelten Befehle in einem einzigen Schritt mit dieser Aktion ausführt. Um ein Beispiel anzuzeigen, sehen Sie sich "[Erstellen einer zusammengesetzten Ausführungsschritteaktion](/actions/creating-actions/creating-a-composite-run-steps-action)" an.

### Ort für eine Aktion auswählen

Wenn Du eine Aktion entwickelst, die von anderen Personen genutzt werden soll, empfehlen wir, die Aktion in ihrem eigenen Repository zu belassen, also nicht mit anderem Anwendungscode zu einem Bundle zusammenzufassen. Damit kannst Du die Aktion wie jede andere Software versionieren, nachverfolgen und veröffentlichen.

{% if currentVersion == "free-pro-team@latest" %}
Wenn Du eine Aktion in einem eigenen Repository speicherst, kann die {% data variables.product.prodname_dotcom %}-Community die Aktion eher entdecken. Außerdem wird damit die Codebasis begrenzt, auf die die Entwickler bei der Fehlerbehebung und bei der Erweiterung der Aktion angewiesen sind, und die Versionierung der Aktion wird von der Versionierung des anderen Anwendungscodes getrennt.
{% endif %}

Wenn Du eine Aktion erstellst, die nicht öffentlich zugänglich sein soll, kannst Du die Dateien für die Aktion an einem beliebigen Speicherort in Deinem Repository ablegen. Wenn der Aktions-, der Workflow- und der Anwendungscode in einem einzigen Repository abgelegt werden sollen, empfehlen wir, die Aktionen im Verzeichnis `.github` zu speichern. Beispiel: `.github/actions/action-a` und `.github/actions/action-b`.

### Kompatibilität mit {% data variables.product.prodname_ghe_server %}

Um sicherzustellen, dass Ihre Aktion mit {% data variables.product.prodname_ghe_server %}kompatibel ist, sollten Sie sicherstellen, dass Sie keine hartcodierten Verweise auf {% data variables.product.prodname_dotcom %} API-URLs verwenden. Sie sollten stattdessen Umgebungsvariablen verwenden, um auf die {% data variables.product.prodname_dotcom %} -API zu verweisen:

- Verwenden Sie für die REST-API die `GITHUB_API_URL` -Umgebungsvariable.
- Verwenden Sie für GraphQL die Umgebungsvariable `GITHUB_GRAPHQL_URL` .

Weitere Informationen finden Sie unter "[Standardumgebungsvariablen](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables)".

### Verwenden der Releaseverwaltung für Aktionen

In diesem Abschnitt wird erläutert, wie Sie die Releaseverwaltung verwenden können, um Aktualisierungen auf vorhersehbare Weise an Ihre Aktionen zu verteilen.

#### Bewährte Verfahren für das Release-Management

Wenn Sie eine Aktion für andere Benutzer entwickeln, empfehlen wir die Verwendung der Releaseverwaltung, um zu steuern, wie Sie Updates verteilen. Benutzer können erwarten, dass die Hauptversion einer Aktion die erforderlichen kritischen Korrekturen und Sicherheitspatches enthält, während sie weiterhin mit ihren vorhandenen Workflows kompatibel bleiben. Sie sollten die Veröffentlichung einer neuen Hauptversion in Betracht ziehen, wenn sich Ihre Änderungen auf die Kompatibilität auswirken.

Bei diesem Releaseverwaltungsansatz sollten Benutzer nicht auf den `Master` Zweig einer Aktion verweisen, da dieser wahrscheinlich den neuesten Code enthält und daher möglicherweise instabil ist. Stattdessen können Sie den Benutzern empfehlen, bei der Verwendung Ihrer Aktion eine Hauptversion anzugeben und sie nur dann an eine bestimmte Version weiterzuleiten, wenn Probleme auftreten.

Um eine bestimmte Aktionsversion zu verwenden, können Benutzer ihre {% data variables.product.prodname_actions %} Workflow so konfigurieren, dass sie auf ein Tag, die SHA eines Commits oder einen Zweig abzielen, der nach einer Version benannt ist.

#### Verwenden von Tags für die Releaseverwaltung

Es wird empfohlen, Tags für die Releaseverwaltung von Aktionen zu verwenden. Mit diesem Ansatz können Ihre Benutzer leicht zwischen Haupt- und Nebenversionen unterscheiden:

- Erstellen und überprüfen Sie eine Version auf einem Release-Zweig (z. B. `release/v1`), bevor Sie das Release-Tag erstellen (z. B. `v1.0.2`).
- Erstellen Sie eine Version mit semantischer Versionierung. Weitere Informationen finden Sie unter „[Veröffentlichungen erstellen](/articles/creating-releases)“.
- Verschieben Sie das Hauptversions-Tag (z. B. `v1`, `v2`), um auf die Git-Ref der aktuellen Version zu verweisen. Weitere Informationen findest Du unter „[Git-Grundlagen - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)“.
- Führen Sie ein neues Hauptversions-Tag (`v2`) für Änderungen ein, die vorhandene Workflows unterbrechen. Eine störende Änderung liegt beispielsweise vor, wenn die Eingabe einer Aktion geändert wird.
- Hauptversionen können zunächst mit einem `Beta-` -Tag veröffentlicht werden, um ihren Status anzugeben, z. B. `v2-beta`. Das `-beta-` -Tag kann dann entfernt werden, wenn es fertig ist.

In diesem Beispiel wird veranschaulicht, wie ein Benutzer auf ein Hauptversions-Tag verweisen kann:

```yaml
Schritte:
    - verwendet: actions/javascript-action@v1
```

In diesem Beispiel wird veranschaulicht, wie ein Benutzer auf ein bestimmtes Patch-Release-Tag verweisen kann:

```yaml
Schritte:
    - verwendet: actions/javascript-action@v1.0.1
```

#### Verwenden von Zweigen für die Releaseverwaltung

Wenn Sie Zweigstellennamen für die Releaseverwaltung verwenden möchten, wird in diesem Beispiel veranschaulicht, wie Sie auf eine benannte Zweigstelle verweisen:

```yaml
Schritte:
    - verwendet: actions/javascript-action@v1-beta
```

#### Verwenden des SHA eines Commits für die Releaseverwaltung

Jeder Git-Commit erhält einen berechneten SHA-Wert, der eindeutig und unveränderlich ist. Die Benutzer Ihrer Aktion möchten sich möglicherweise auf den SHA-Wert eines Commits verlassen, da dieser Ansatz zuverlässiger sein kann als die Angabe eines Tags, das gelöscht oder verschoben werden könnte. Dies bedeutet jedoch, dass die Benutzer keine weiteren Aktualisierungen der Aktion erhalten. Die Verwendung des vollständigen SHA-Werts eines Commits anstelle des abgekürzten Werts kann dazu beitragen, dass Personen einen böswilligen Commit verwenden, der dieselbe Abkürzung verwendet.

```yaml
Schritte:
    - verwendet: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### Eine README-Datei für die Aktion erstellen

Wenn Du Deine Aktion öffentlich bereitstellen möchten, empfehlen wir, eine README-Datei zu erstellen, damit andere Benutzer verstehen, wie die Aktion zu verwenden ist. Du kannst die folgenden Informationen in Ihre `README.md`-Datei aufnehmen:

- eine ausführliche Beschreibung, was die Aktion bewirkt
- erforderliche Eingabe- und Ausgabeargumente
- optionale Eingabe- und Ausgabeargumente
- Geheimnisse, die in der Aktion verwendet werden
- Umgebungsvariablen, die in der Aktion verwendet werden
- ein Beispiel für die Verwendung der Aktion in einem Workflow

### Unterschiede zwischen {% data variables.product.prodname_actions %} und {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_marketplace %} bietet Tools, um Deinen Workflow zu verbessern. Wenn Du die Unterschiede und die Vorteile der einzelnen Tools verstehst, kannst Du das beste Tool für Deinen Auftrag auswählen. Weitere Informationen zum Erstellen von Aktionen und Apps finden Sie unter "[über GitHub-Aktionen](/actions/getting-started-with-github-actions/about-github-actions)" und "[über Apps](/apps/about-apps/)".

#### Stärken von GitHub Aktionen und GitHub Apps

Beide, sowohl {% data variables.product.prodname_actions %} als auch {% data variables.product.prodname_github_app %}s unterstützen die Erstellung von Automatisierungs- und Workflow-Tools. Dennoch haben beide ihre unterschiedlichen nützlichen Stärken.

{% data variables.product.prodname_github_apps %}:
* Laufen dauerhaft und können schnell auf Ereignisse reagieren.
* Funktionieren hervorragend, wenn persistente Daten benötigt werden.
* Funktionieren am besten mit API-Anforderungen, die nicht zeitaufwändig sind.
* Laufen auf Deinem Server oder auf Deiner Rechner-Infrastruktur.

{% data variables.product.prodname_actions %}:
* Bieten Automatisierung für eine kontinuierliche Integration und kontinuierliche Bereitstellung.
* Können direkt auf Runner-Maschinen oder in Docker-Containern laufen.
* Können auch Zugriff auf einen Clone Ihres Repositorys einschließen und dadurch Bereitstellungs- und Veröffentlichungs-Tools, Code-Formatierer und Befehlszeilen-Tools den Zugriff auf Ihren Code erlauben.
* Erfordern weder, dass Du Code noch eine App bereitstellst.
* Verfügen Sie über eine einfache Schnittstelle zum Erstellen und Verwenden von Geheimnissen. Dadurch können die Aktionen mit Diensten von Drittanbietern interagieren, ohne die Anmelde-Informationen des Aktions-Benutzers speichern zu müssen.

### Weiterführende Informationen

- „[Entwicklungstools für {% data variables.product.prodname_actions %}](/articles/development-tools-for-github-actions)“
