---
title: Java bauen und testen mit Gradle
intro: 'Du kannst einen Workflow für Continuous Integration (CI) in GitHub Actions erstellen, um dein Java-Projekt mit Gradle zu kompilieren und zu testen.'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
  - /actions/guides/building-and-testing-java-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Gradle
shortTitle: Build & test Java & Gradle
ms.openlocfilehash: 00fa6888a45dda090df51260795717bc994be022
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410443'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden zeigt Dir, wie du einen Workflow erstellen kannst, der eine kontinuierliche Integration (CI) für dein Java-Projekt mit Hilfe des Build-Systems Gradle durchführt. Der Workflow, den du erstellst, zeigt Dir, wenn Commits zu einem Pull-Request zu Build- oder Testfehlern für deinen Standard-Zweig führen. Dieser Ansatz kann dazu beitragen, dass dein Code immer brauchbar ist. Du kannst deinen CI-Workflow so erweitern, dass er {% ifversion actions-caching %}Dateien zwischenspeichert und{% endif %} Artefakte aus einer Workflowausführung hochlädt.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %}-gehostete Runner verfügen über einen Toolcache mit vorinstallierter Software, die Java Development Kits (JDKs) und Gradle umfasst. Eine Liste der Software und der vorinstallierten Versionen für JDK und Gradle findest du unter „[Spezifikationen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software)“.
{% endif %}

## Voraussetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen finden Sie unter
- [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)

Du solltest ein grundlegendes Verständnis von Java und dem Framework Gradle haben. Weitere Informationen findest du in der Gradle-Dokumentation unter [Erste Schritte](https://docs.gradle.org/current/userguide/getting_started.html).

{% data reusables.actions.enterprise-setup-prereq %}

## Verwenden des Gradle-Starterworkflows

{% data variables.product.prodname_dotcom %} bietet einen Gradle-Starterworkflow, der für die meisten Gradle-basierten Java-Projekte funktioniert. Weitere Informationen findest du unter [Gradle-Starterworkflow](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

Um schnell loszulegen, kannst du beim Erstellen eines neuen Workflows den vorkonfigurierten Gradle-Starterworkflow auswählen. Weitere Informationen findest du in der [Schnellstartanleitung für {% data variables.product.prodname_actions %}](/actions/quickstart).

Du kannst diesen Workflow auch manuell hinzufügen, indem du eine neue Datei im Verzeichnis `.github/workflows` deines Repositorys erstellst.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Build with Gradle
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: build
```

Dieser Workflow führt die folgenden Schritte aus:

1. Im Schritt `checkout` wird eine Kopie deines Repositorys auf den Runner heruntergeladen.
2. Im Schritt `setup-java` wird das Java 11-JDK von Adoptium konfiguriert.
3. Im Schritt „Valid Gradle wrapper“ werden die Prüfsummen von Gradle Wrapper JAR-Dateien überprüft, die in der Quellstruktur vorhanden sind.
4. Im Schritt „Build with Gradle“ wird mit der Aktion `gradle/gradle-build-action`, die von der Gradle-Organisation auf {% data variables.product.prodname_dotcom %} bereitgestellt wird, ein Build ausgeführt. Die Aktion umfasst das Aufrufen von Gradle, das Sammeln von Ergebnissen und das Zwischenspeichern des Status zwischen Aufträgen. Weitere Informationen findest du unter [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

Die Standardstarterworkflows sind ausgezeichnete Ausgangspunkte beim Erstellen von Build- und Testworkflows, und du kannst den Starterworkflow den Anforderungen deines Projekts anpassen.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die du auch lokal verwendest, um deinen Code zu bauen und zu testen.

Der Starterworkflow führt standardmäßig die `build`-Aufgabe aus. In der Standard-Gradle-Konfiguration lädt dieser Befehl Abhängigkeiten herunter, baut Klassen, führt Tests durch und paketiert Klassen in ihr verteilbares Format, zum Beispiel eine JAR-Datei.

Wenn du zum Bauen deines Projekts andere Befehle verwenden oder einen anderen Task auszuführen möchtest, kannst du dies angeben. Du kannst beispielsweise die `package`-Aufgabe ausführen, die in der _ci.gradle_-Datei konfiguriert ist.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Run the Gradle package task
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: -b ci.gradle package
```

{% ifversion actions-caching %}

## Abhängigkeiten „cachen“ (zwischenspeichern)

Deine Buildabhängigkeiten können zwischengespeichert werden, um deine Workflowausführungen zu beschleunigen. Nach einer erfolgreichen Ausführung werden wichtige Teile des Basisverzeichnisses für Gradle-Benutzer von `gradle/gradle-build-action` zwischengespeichert. In künftigen Aufträgen wird der Cache wiederhergestellt, sodass Buildskripts nicht neu kompiliert werden müssen und Abhängigkeiten nicht erneut aus Remotepaketrepositorys heruntergeladen werden müssen.

Das Zwischenspeichern ist standardmäßig aktiviert, wenn die Aktion `gradle/gradle-build-action` verwendet wird. Weitere Informationen findest du unter [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## Workflow-Daten als Artefakte paketieren

Nachdem sowohl Build erfolgreich war und deine Tests bestanden hat, wirst du die resultierenden Java-Pakete als Build-Artefakt hochladen wollen. Dies speichert die gebauten Pakete als Teil der Workflow-Ausführung und ermöglicht Dir, sie herunterzuladen. Artefakte können Dir helfen, Pull-Requests in deiner lokalen Umgebung zu testen und zu debuggen, bevor sie zusammengeführt werden („merge“). Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Gradle erstellt normalerweise Ausgabedateien wie JARs, EARs oder WARs im Verzeichnis `build/libs`. Du kannst den Inhalt dieses Verzeichnisses mit der Aktion `upload-artifact` hochladen.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Build with Gradle
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: build
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/libs
```
