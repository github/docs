---
title: Java bauen und testen mit Ant
intro: 'Du kannst einen Workflow für kontinuierliche Integration (CI) in GitHub-Aktionen erstellen, um Dein Java-Projekt mit Ant zu bauen und zu testen.'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
  - /actions/guides/building-and-testing-java-with-ant
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Ant
shortTitle: Build & test Java & Ant
ms.openlocfilehash: d1e73fdce7bf23bf1b86ec3eb4d0f8acd9b6d292
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088732'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden zeigt Dir, wie Du einen Workflow erstellen kannst, der eine kontinuierliche Integration (CI) für Dein Java-Projekt mit Hilfe des Build-Systems Ant durchführt. Der Workflow, den Du erstellst, zeigt Dir, wenn Commits zu einem Pull-Request zu Build- oder Testfehlern für deinen Standard-Zweig führen. Dieser Ansatz kann dazu beitragen, dass Dein Code immer brauchbar ist. Du kannst Deinen CI-Workflow so erweitern, dass er Artefakte von einem Workflow-Lauf hochlädt.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %}-gehostete Runner verfügen über einen Toolcache mit vorinstallierter Software, die Java Development Kits (JDKs) und Ant umfasst. Eine Liste der Software und der vorinstallierten Versionen für JDK und Ant findest du unter [Spezifikationen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Voraussetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen finden Sie unter
- [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)

Du solltest ein grundlegendes Verständnis von Java und dem Framework Ant haben. Weitere Informationen findest du im [Handbuch zu Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

## Verwenden des Ant-Starterworkflows

{% data variables.product.prodname_dotcom %} bietet einen Ant-Starterworkflow, der für die meisten Ant-basierten Java-Projekte funktionieren wird. Weitere Informationen findest du im [Ant-Starterworkflow](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

Um schnell loszulegen, kannst du beim Erstellen eines neuen Workflows den vorkonfigurierten Ant-Starterworkflow auswählen. Weitere Informationen findest du in der [Schnellstartanleitung für {% data variables.product.prodname_actions %}](/actions/quickstart).

Du kannst diesen Workflow auch manuell hinzufügen, indem du eine neue Datei im Verzeichnis `.github/workflows` deines Repositorys erstellst.

```yaml{:copy}
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
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```

Dieser Workflow führt die folgenden Schritte aus:

1. Im Schritt `checkout` wird eine Kopie deines Repositorys auf den Runner heruntergeladen.
2. Im Schritt `setup-java` wird das Java 11-JDK von Adoptium konfiguriert.
3. Der Schritt „Mit Ant erstellen“ führt das Standardziel in deiner Datei `build.xml` im nicht-interaktiven Modus aus.

Die Standardstarterworkflows sind ausgezeichnete Ausgangspunkte beim Erstellen von Build- und Testworkflows, und du kannst den Starterworkflow den Anforderungen deines Projekts anpassen.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die Du auch lokal verwendest, um Deinen Code zu bauen und zu testen.

Der Starterworkflow führt das in der Datei _build.xml_ angegebene Standardziel aus.  Dein Standard-Ziel wird normalerweise eingestellt, um Klassen zu bauen, Tests durchzuführen und Klassen in ihr verteilbares Format (z.B . eine JAR-Datei) zu paketieren.

Wenn Du zum Bauen Deines Projekts andere Befehle verwenden oder ein anderes Ziel auszuführen möchtest, kannst Du dies angeben. Du kannst beispielsweise das `jar`-Ziel ausführen, das in deiner Datei `_build-ci.xml_` konfiguriert ist.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```

## Workflow-Daten als Artefakte paketieren

Nachdem sowohl Build erfolgreich war und deine Tests bestanden hat, wirst du die resultierenden Java-Pakete als Build-Artefakt hochladen wollen. Dies speichert die gebauten Pakete als Teil der Workflow-Ausführung und ermöglicht Dir, sie herunterzuladen. Artefakte können Dir helfen, Pull-Requests in deiner lokalen Umgebung zu testen und zu debuggen, bevor sie zusammengeführt werden („merge“). Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Ant erstellt normalerweise Ausgabedateien wie JAR-, EAR- oder WAR-Dateien im Verzeichnis `build/jar`. Du kannst den Inhalt dieses Verzeichnisses mit der Aktion `upload-artifact` hochladen.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  
  - run: ant -noinput -buildfile build.xml
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/jar
```
