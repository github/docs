---
title: Java bauen und testen mit Ant
intro: 'Du kannst einen Workflow für kontinuierliche Integration (CI) in GitHub-Aktionen erstellen, um Dein Java-Projekt mit Ant zu bauen und zu testen.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

Dieser Leitfaden zeigt Dir, wie Du einen Workflow erstellen kannst, der eine kontinuierliche Integration (CI) für Dein Java-Projekt mit Hilfe des Build-Systems Ant durchführt. Der Workflow, den Du erstellst, zeigt Dir, wenn Commits zu einem Pull-Request zu Build- oder Testfehlern für deinen Standard-Zweig führen. Dieser Ansatz kann dazu beitragen, dass Dein Code immer brauchbar ist. Du kannst Deinen CI-Workflow so erweitern, dass er Artefakte von einem Workflow-Lauf hochlädt.

{% data variables.product.prodname_dotcom %}-gehostete Runnner haben einen Tools-Cache mit vorinstallierter Software, einschließlich Java Development Kits (JDKs) und Ant. Eine Liste der Software und der vorinstallierten Versionen für JDK und Ant findest Du unter „[Software auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern](/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners)“.

### Vorrausetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen findest Du unter:
- „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)“
- "[Einen Workflow konfigurieren](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)"

Du solltest ein grundlegendes Verständnis von Java und dem Framework Ant haben. Weitere Informationen findest Du im [Handbuch zu Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

### Einstieg mit einer Ant-Workflow-Vorlage

{% data variables.product.prodname_dotcom %} bietet eine Ant-Workflow-Vorlage, die für die meisten Ant-basierten Java-Projekte funktionieren wird. Weitere Informationen findest Du im [Workflow-Template für Ant](https://github.com/actions/starter-workflows/blob/master/ci/maven.yml).

Um schnell loszulegen, kannst Du beim Erstellen eines neuen Workflows die vorkonfigurierte Ant-Vorlage auswählen. Weitere Informationen findest Du unter „[Mit vorkonfigurierten Workflow-Vorlagen beginnen](/actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates)“.

Du kannst auch manuell diesen Workflow hinzufügen, indem Du eine neue Datei im Verzeichnis `.github/workflows` Deines Reporitorys erstellst.

{% raw %}
```yaml
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```
{% endraw %}

Dieser Workflow führt die folgenden Schritte aus:

1. Der Schritt `checkout` lädt eine Kopie Deines Repositorys auf den Runner herunter.
2. Der Schritt `setup-java` konfiguriert das Java 1.8 JDK.
3. Der Schritt „Build with Ant“ (mittels Ant bauen) führt das standardmäßige „Target“ (Ziel) in Deiner `build.xml` im nicht-interaktiven Modus aus.

Die Standard-Workflow-Vorlagen sind ausgezeichnete Ausgangspunkte beim Erstellen des Build- und Testworkflows, und Du kannst die Vorlage an die Anforderungen Deines Projekts anpassen.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die Du auch lokal verwendest, um Deinen Code zu erstellen und zu testen.

Der Starter-Workflow führt das in der Datei _build.xml_ angegebene „default target“ (Standardziel) aus.  Dein Standard-Ziel wird normalerweise eingestellt, um Klassen zu bauen, Tests durchzuführen und Klassen in ihr verteilbares Format (z.B . eine JAR-Datei) zu paketieren.

Wenn Du zum Bauen Deines Projekts andere Befehle verwenden oder ein anderes Ziel auszuführen möchtest, kannst Du dies angeben. Vielleicht möchtest Du beispielsweise das Ziel `jar` ausführen, das in Deiner Datei _build-ci.xml_ konfiguriert ist.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```
{% endraw %}

### Workflow-Daten als Artefakte paketieren

Nachdem sowohl Build erfolgreich war und Deine Tests bestanden hat, wirst Du die resultierenden Java-Pakete als Build-Artefakt hochladen wollen. Dies speichert die gebauten Pakete als Teil der Workflow-Ausführung und ermöglicht Dir, sie herunterzuladen. Artefakte können Dir helfen, Pull-Requests in Deiner lokalen Umgebung zu testen und zu debuggen, bevor sie zusammengeführt werden („merge“). Weitere Informationen findest Du unter „[Workflow-Daten mittels Artefakten persistieren](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)“.

Ant erstellt normalerweise Ausgabedateien wie JARs, EARs oder WARs im Verzeichnis `build/jar`. Du kannst den Inhalt dieses Verzeichnisses mit der Aktion `upload-artifact` hochladen.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: ant -noinput -buildfile build.xml
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/jar
```
{% endraw %}
