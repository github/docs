---
title: Java bauen und testen mit Ant
intro: Du kannst einen Workflow für kontinuierliche Integration (CI) in GitHub-Aktionen erstellen, um Dein Java-Projekt mit Ant zu bauen und zu testen.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'CI'
  - 'Java'
  - 'Ant'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

Dieser Leitfaden zeigt Dir, wie Du einen Workflow erstellen kannst, der eine kontinuierliche Integration (CI) für Dein Java-Projekt mit Hilfe des Build-Systems Ant durchführt. Der Workflow, den Du erstellst, zeigt Dir, wenn Commits zu einem Pull-Request zu Build- oder Testfehlern für deinen Standard-Zweig führen. Dieser Ansatz kann dazu beitragen, dass Dein Code immer brauchbar ist. Du kannst Deinen CI-Workflow so erweitern, dass er Artefakte von einem Workflow-Lauf hochlädt.

{% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}
{% data variables.product.prodname_dotcom %}-gehostete Runnner haben einen Tools-Cache mit vorinstallierter Software, einschließlich Java Development Kits (JDKs) und Ant. For a list of software and the pre-installed versions for JDK and Ant, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

### Vorrausetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen findest Du unter:
- „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)“
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Du solltest ein grundlegendes Verständnis von Java und dem Framework Ant haben. Weitere Informationen findest Du im [Handbuch zu Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

### Einstieg mit einer Ant-Workflow-Vorlage

{% data variables.product.prodname_dotcom %} bietet eine Ant-Workflow-Vorlage, die für die meisten Ant-basierten Java-Projekte funktionieren wird. For more information, see the [Ant workflow template](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

Um schnell loszulegen, kannst Du beim Erstellen eines neuen Workflows die vorkonfigurierte Ant-Vorlage auswählen. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

Du kannst auch manuell diesen Workflow hinzufügen, indem Du eine neue Datei im Verzeichnis `.github/workflows` Deines Reporitorys erstellst.

{% raw %}
```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 11
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```
{% endraw %}

Dieser Workflow führt die folgenden Schritte aus:

1. Der Schritt `checkout` lädt eine Kopie Deines Repositorys auf den Runner herunter.
2. The `setup-java` step configures the Java 11 JDK by Adoptium.
3. Der Schritt „Build with Ant“ (mittels Ant bauen) führt das standardmäßige „Target“ (Ziel) in Deiner `build.xml` im nicht-interaktiven Modus aus.

Die Standard-Workflow-Vorlagen sind ausgezeichnete Ausgangspunkte beim Erstellen des Build- und Testworkflows, und Du kannst die Vorlage an die Anforderungen Deines Projekts anpassen.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die Du auch lokal verwendest, um Deinen Code zu erstellen und zu testen.

Der Starter-Workflow führt das in der Datei _build.xml_ angegebene „default target“ (Standardziel) aus.  Dein Standard-Ziel wird normalerweise eingestellt, um Klassen zu bauen, Tests durchzuführen und Klassen in ihr verteilbares Format (z.B . eine JAR-Datei) zu paketieren.

Wenn Du zum Bauen Deines Projekts andere Befehle verwenden oder ein anderes Ziel auszuführen möchtest, kannst Du dies angeben. Vielleicht möchtest Du beispielsweise das Ziel `jar` ausführen, das in Deiner Datei _build-ci.xml_ konfiguriert ist.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```
{% endraw %}

### Workflow-Daten als Artefakte paketieren

Nachdem sowohl Build erfolgreich war und Deine Tests bestanden hat, wirst Du die resultierenden Java-Pakete als Build-Artefakt hochladen wollen. Dies speichert die gebauten Pakete als Teil der Workflow-Ausführung und ermöglicht Dir, sie herunterzuladen. Artefakte können Dir helfen, Pull-Requests in Deiner lokalen Umgebung zu testen und zu debuggen, bevor sie zusammengeführt werden („merge“). Weitere Informationen findest Du unter „[Workflow-Daten mittels Artefakten persistieren](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)“.

Ant erstellt normalerweise Ausgabedateien wie JARs, EARs oder WARs im Verzeichnis `build/jar`. Du kannst den Inhalt dieses Verzeichnisses mit der Aktion `upload-artifact` hochladen.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'

  - run: ant -noinput -buildfile build.xml
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/jar
```
{% endraw %}
