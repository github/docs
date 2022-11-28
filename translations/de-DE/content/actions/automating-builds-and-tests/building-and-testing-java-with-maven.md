---
title: Java bauen und testen mit Maven
intro: 'Du kannst einen Workflow für Continuous Integration (CI) in GitHub Actions erstellen, um dein Java-Projekt mit Maven zu erstellen und zu testen.'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
  - /actions/guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Build & test Java with Maven
ms.openlocfilehash: 59d8961a7fdd1d8b84a05b8762bb09be3d2ab01c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179807'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden zeigt Dir, wie du einen Workflow erstellen kannst, der eine kontinuierliche Integration (CI) für dein Java-Projekt mit Hilfe des Software-Projektmanagement-Tools Maven durchführt. Der Workflow, den du erstellst, zeigt Dir, wenn Commits zu einem Pull-Request zu Build- oder Testfehlern für deinen Standard-Zweig führen. Dieser Ansatz kann dazu beitragen, dass dein Code immer brauchbar ist. Du kannst deinen CI-Workflow so erweitern, dass er {% ifversion actions-caching %}Dateien zwischenspeichert und{% endif %} Artefakte aus einer Workflowausführung hochlädt.

Von {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} gehostete Runner verfügen über einen Toolcache mit vorinstallierter Software, die Java Development Kits (JDKs) und Maven umfasst. Eine Liste der Software und der vorinstallierten Versionen für JDK und Maven findest du unter [Spezifikationen für von {% data variables.product.prodname_dotcom %} gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Voraussetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen finden Sie unter
- [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)

Du solltest ein grundlegendes Verständnis von Java und dem Framework Maven haben. Weitere Informationen findest du in der Maven-Dokumentation im [Maven-Leitfaden zu den ersten Schritten](http://maven.apache.org/guides/getting-started/index.html).

{% data reusables.actions.enterprise-setup-prereq %}

## Verwenden des Maven-Startworkflows

{% data variables.product.prodname_dotcom %} bietet einen Maven-Startworkflow, der für die meisten Maven-basierten Java-Projekte funktioniert. Weitere Informationen findest du unter [Maven-Startworkflow](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

Um schnell loszulegen, kannst du beim Erstellen eines neuen Workflows den vorkonfigurierten Maven-Startworkflow auswählen. Weitere Informationen findest du in der [Schnellstartanleitung für {% data variables.product.prodname_actions %}](/actions/quickstart).

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
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

Dieser Workflow führt die folgenden Schritte aus:

1. Im Schritt `checkout` wird eine Kopie deines Repositorys auf den Runner heruntergeladen.
2. Im Schritt `setup-java` wird das Java 11-JDK von Adoptium konfiguriert.
3. Der Schritt „Mit Maven erstellen“ führt das Maven-`package`-Ziel im nicht interaktiven Modus aus, um sicherzustellen, dass dein Code erstellt wird, Tests erfolgreich durchgeführt werden und ein Paket erstellt werden kann.

Die Standardstartworkflows sind ausgezeichnete Ausgangspunkte beim Erstellen von Build- und Testworkflows, und du kannst den Startworkflow den Anforderungen deines Projekts anpassen.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die du auch lokal verwendest, um deinen Code zu bauen und zu testen.

Der Startworkflow führt standardmäßig das `package`-Ziel aus. In der Standard-Maven-Konfiguration lädt dieser Befehl Abhängigkeiten herunter, baut Klassen, führt Tests durch und paketiert Klassen in ihr verteilbares Format, zum Beispiel eine JAR-Datei.

Wenn du zum Bauen deines Projekts andere Befehle verwenden oder ein anderes Ziel auszuführen möchtest, kannst du dies angeben. Du kannst beispielsweise das `verify`-Ziel ausführen, das in einer Datei _pom-ci.xml_ konfiguriert ist.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

{% ifversion actions-caching %}

## Abhängigkeiten „cachen“ (zwischenspeichern)

Du kannst deine Abhängigkeiten zwischenspeichern, um die Workflow-Ausführungen zu beschleunigen. Nach einer erfolgreichen Ausführung wird dein lokales Maven-Repository in einem Cache gespeichert. Bei zukünftigen Workflow-Ausführungen wird der Cache wiederhergestellt, so dass Abhängigkeiten nicht aus entfernten Maven-Repositories heruntergeladen werden müssen. Du kannst Abhängigkeiten einfach mithilfe der [`setup-java`-Aktion](https://github.com/marketplace/actions/setup-java-jdk) zwischenspeichern oder die [`cache`-Aktion](https://github.com/actions/cache) für eine benutzerdefinierte und erweiterte Konfiguration verwenden.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

Dieser Workflow speichert den Inhalt deines lokalen Maven-Repositorys, das sich im Verzeichnis `.m2` des Basisverzeichnisses auf dem Runner befindet. Der Cacheschlüssel ist der Hashinhalt von _pom.xml_, sodass Änderungen an _pom.xml_ den Cache ungültig machen.

{% endif %}

## Workflow-Daten als Artefakte paketieren

Nachdem sowohl Build erfolgreich war und deine Tests bestanden hat, wirst du die resultierenden Java-Pakete als Build-Artefakt hochladen wollen. Dies speichert die gebauten Pakete als Teil der Workflow-Ausführung und ermöglicht Dir, sie herunterzuladen. Artefakte können Dir helfen, Pull-Requests in deiner lokalen Umgebung zu testen und zu debuggen, bevor sie zusammengeführt werden („merge“). Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Maven erstellt normalerweise Ausgabedateien wie JARs, EARs oder WARs im Verzeichnis `target`. Um diese als Artefakte hochzuladen, kannst du sie in ein neues Verzeichnis kopieren, welches Artefakte zum Hochladen enthält. Zum Beispiel kannst du ein Verzeichnis namens `staging` erstellen. Anschließend kannst du den Inhalt dieses Verzeichnisses mithilfe der Aktion `upload-artifact` hochladen.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
