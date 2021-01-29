---
title: Java bauen und testen mit Gradle
intro: Du kannst einen Workflow für kontinuierliche Integration (CI) in GitHub-Aktionen erstellen, um Dein Java-Projekt mit Gradle zu bauen und zu testen.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

Dieser Leitfaden zeigt Dir, wie Du einen Workflow erstellen kannst, der eine kontinuierliche Integration (CI) für Dein Java-Projekt mit Hilfe des Build-Systems Gradle durchführt. Der Workflow, den Du erstellst, zeigt Dir, wenn Commits zu einem Pull-Request zu Build- oder Testfehlern für deinen Standard-Zweig führen. Dieser Ansatz kann dazu beitragen, dass Dein Code immer brauchbar ist. Du kannst Deinen CI-Workflow so erweitern, dass er Dateien im Cache zwischenspeichert und Artefakte von einem Workflow-Lauf hochlädt.

{% data variables.product.prodname_dotcom %}-gehostete Runnner haben einen Tools-Cache mit vorinstallierter Software, einschließlich Java Development Kits (JDKs) und Gradle. For a list of software and the pre-installed versions for JDK and Gradle, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Vorrausetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen findest Du unter:
- „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)“
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Du solltest ein grundlegendes Verständnis von Java und dem Framework Gradle haben. Weitere Informationen findest Du unter [Erste Schritte](https://docs.gradle.org/current/userguide/getting_started.html) in der Gradle-Dokumentation.

{% data reusables.actions.enterprise-setup-prereq %}

### Einstieg mit einer Gradle-Workflow-Vorlage

{% data variables.product.prodname_dotcom %} bietet eine Gradle-Workflow-Vorlage, die für die meisten Gradle-basierten Java-Projekte funktionieren wird. For more information, see the [Gradle workflow template](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

Um schnell loszulegen, kannst Du beim Erstellen eines neuen Workflows die vorkonfigurierte Gradle-Vorlage auswählen. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

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
      - name: Build with Gradle
        run: ./gradlew build
```
{% endraw %}

Dieser Workflow führt die folgenden Schritte aus:

1. Der Schritt `checkout` lädt eine Kopie Deines Repositorys auf den Runner herunter.
2. Der Schritt `setup-java` konfiguriert das Java 1.8 JDK.
3. Der Schritt "Build with Gradle" führt das Wrapper-Skript `gradlew` aus, um sicherzustellen, dass dein Code gebaut, Tests bestanden und ein Paket erstellt werden kann.

Die Standard-Workflow-Vorlagen sind ausgezeichnete Ausgangspunkte beim Erstellen des Build- und Testworkflows, und Du kannst die Vorlage an die Anforderungen Deines Projekts anpassen.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die Du auch lokal verwendest, um Deinen Code zu erstellen und zu testen.

Der Starter-Workflow führt standardmäßig den Task `build` aus. In der Standard-Gradle-Konfiguration lädt dieser Befehl Abhängigkeiten herunter, baut Klassen, führt Tests durch und paketiert Klassen in ihr verteilbares Format, zum Beispiel eine JAR-Datei.

Wenn Du zum Bauen Deines Projekts andere Befehle verwenden oder einen anderen Task auszuführen möchtest, kannst Du dies angeben. Vielleicht möchtest Du beispielsweise den Task `package` ausführen, der in Deiner Datei _ci.gradle_ konfiguriert ist.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Gradle package task
    run: ./gradlew -b ci.gradle package
```
{% endraw %}

### Abhängigkeiten „cachen“ (zwischenspeichern)

When using {% data variables.product.prodname_dotcom %}-hosted runners, you can cache your dependencies to speed up your workflow runs. Nach einem erfolgreichen Lauf wird Dein lokaler Paket-Cache von Gradle in der Aktions-Infrastruktur auf GitHub gespeichert. Bei zukünftigen Workflow-Ausführungen wird der Cache wiederhergestellt, so dass Abhängigkeiten nicht aus entfernten Paket-Repositories heruntergeladen werden müssen. Weitere Informationen findest Du unter „<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching-Abhängigkeiten zur Beschleunigung von Workflows</a>“ und der [Aktion `cache`](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 1.8
    uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Cache Gradle packages
    uses: actions/cache@v2
    with:
      path: ~/.gradle/caches
      key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle') }}
      restore-keys: ${{ runner.os }}-gradle
  - name: Build with Gradle
    run: ./gradlew build
```
{% endraw %}

Dieser Workflow speichert den Inhalt Deines lokalen Gradle-Package-Caches im Verzeichnis `.gradle/caches` des Home-Verzeichnisses auf dem Runner. Der Cache-Schlüssel wird der gehashte Inhalt der Gradle-Build-Dateien sein, so dass Änderungen an ihnen den Cache ungültig machen.

### Workflow-Daten als Artefakte paketieren

Nachdem sowohl Build erfolgreich war und Deine Tests bestanden hat, wirst Du die resultierenden Java-Pakete als Build-Artefakt hochladen wollen. Dies speichert die gebauten Pakete als Teil der Workflow-Ausführung und ermöglicht Dir, sie herunterzuladen. Artefakte können Dir helfen, Pull-Requests in Deiner lokalen Umgebung zu testen und zu debuggen, bevor sie zusammengeführt werden („merge“). Weitere Informationen findest Du unter „[Workflow-Daten mittels Artefakten persistieren](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)“.

Gradle erstellt normalerweise Ausgabedateien wie JARs, EARs oder WARs im Verzeichnis `build/libs`. Du kannst den Inhalt dieses Verzeichnisses mit der Aktion `upload-artifact` hochladen.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: ./gradlew build
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/libs
```
{% endraw %}
