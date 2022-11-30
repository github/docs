---
title: Java-Pakete mit Gradle veröffentlichen
intro: 'Du kannst Gradle verwenden, um Java-Pakete als Teil deines Workflows zur kontinuierlichen Integration (CI) in einer Registry zu veröffentlichen.'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
  - /actions/guides/publishing-java-packages-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
shortTitle: Java packages with Gradle
ms.openlocfilehash: 58bb9f872dbb136624c82ab7ae073d9b670e98e3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410283'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

{% data reusables.actions.publishing-java-packages-intro %}

## Voraussetzungen

Wir empfehlen Dir, ein grundlegendes Verständnis von Workflow-Dateien und Konfigurationsoptionen zu haben. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Weitere Informationen zum Erstellen eines CI-Workflows für dein Java-Projekt mit Gradle findest du unter [Erstellen und Testen von Java mit Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle).

Vielleicht findest du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- [Arbeiten mit der npm-Registrierung](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Umgebungsvariablen](/actions/reference/environment-variables)
- [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets)
- [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow)

## Informationen zur Paketkonfiguration

Die Felder `groupId` und `artifactId` in dem Abschnitt `MavenPublication` der Datei _build.gradle_ erstellen einen eindeutigen Bezeichner für dein Paket, der von Registrierungen zum Verknüpfen deines Pakets mit einer Registrierung verwendet wird.  Dies ähnelt den Feldern `groupId` und `artifactId` der Maven-Datei _pom.xml_.  Weitere Informationen findest du in der Gradle-Dokumentation unter [Maven-Veröffentlichungs-Plug-In](https://docs.gradle.org/current/userguide/publishing_maven.html).

Die Datei _build.gradle_ enthält auch die Konfiguration für die Distributionsverwaltungsrepositorys, in denen Gradle Pakete veröffentlicht. Jedes Repository braucht einen Namen, eine Deployment-URL und Anmeldeinformationen zur Authentifizierung.

## Pakete im „Maven Central Repository“ veröffentlichen

Jedes Mal, wenn du ein neues Release erstellst, kannst du einen Workflow anstoßen, um dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird ausgeführt, wenn das `release`-Ereignis mit dem `created`-Typ ausgelöst wird. Der Workflow veröffentlicht das Paket im „Maven Central Repository“, sofern es die CI-Tests besteht. Weitere Informationen zum `release`-Ereignis findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#release).

Du kannst ein neues Maven-Repository im Veröffentlichungsblock deiner Datei _build.gradle_ definieren, das auf dein Paketrepository verweist.  Wenn du die Bereitstellung für das Maven Central Repository beispielsweise über das OSSRH-Hostingprojekt durchgeführt hast, könnte deine Datei _build.gradle_ ein Repository mit dem Namen `"OSSRH"` angeben.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}
```
{% endraw %}

Mit dieser Konfiguration kannst du einen Workflow erstellen, der dein Paket im Maven Central Repository veröffentlicht, indem du den `gradle publish`-Befehl ausführst. Im Deploy-Schritt musst du Umgebungsvariablen für den Benutzernamen und das Passwort oder für den Token festlegen, mit dem du Dich im Maven-Repository authentifizierst. Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Führt die Aktion [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) mit dem `publish`-Argument aus, um das `OSSRH`-Maven-Repository zu veröffentlichen. Die Umgebungsvariable `MAVEN_USERNAME` wird mit dem Inhalt deines `OSSRH_USERNAME`-Geheimnisses und die Umgebungsvariable `MAVEN_PASSWORD` mit dem Inhalt deines `OSSRH_TOKEN`-Geheimnisses festgelegt.

   Weitere Informationen zur Verwendung von Geheimnissen in deinem Workflow findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

## Pakete in der {% data variables.product.prodname_registry %} veröffentlichen

Jedes Mal, wenn du ein neues Release erstellst, kannst du einen Workflow anstoßen, um dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird ausgeführt, wenn das `release`-Ereignis mit dem `created`-Typ ausgelöst wird. Der Workflow veröffentlicht das Paket in {% data variables.product.prodname_registry %} , wenn die CI-Tests bestanden wurden. Weitere Informationen zum `release`-Ereignis findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#release).

Du kannst ein neues Maven-Repository im Veröffentlichungsblock deiner Datei _build.gradle_ definieren, das auf {% data variables.product.prodname_registry %} verweist.  In dieser Repository-Konfiguration kannst du auch die in deinem CI-Workflow-Lauf eingestellten Umgebungsvariablen nutzen.  Du kannst die Umgebungsvariable `GITHUB_ACTOR` als Benutzername verwenden und die Umgebungsvariable `GITHUB_TOKEN` mit deinem `GITHUB_TOKEN`-Geheimnis festlegen.

{% data reusables.actions.github-token-permissions %}

Wenn deine Organisation beispielsweise „octocat“ und dein Repository „hello-world“ heißt, ähnelt die {% data variables.product.prodname_registry %}-Konfiguration in _build.gradle_ dem folgenden Beispiel.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Mit dieser Konfiguration kannst du einen Workflow erstellen, der dein Paket in {% data variables.product.prodname_registry %} veröffentlicht, indem du den `gradle publish`-Befehl ausführst.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Führt die Aktion [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) mit dem `publish`-Argument aus, um {% data variables.product.prodname_registry %} zu veröffentlichen. Die Umgebungsvariable `GITHUB_TOKEN` wird mit dem Inhalt des `GITHUB_TOKEN`-Geheimnisses festgelegt. Der Schlüssel `permissions` gibt den Zugriff an, den das `GITHUB_TOKEN`-Geheimnis erteilt.

   Weitere Informationen zur Verwendung von Geheimnissen in deinem Workflow findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

## Pakete im Maven Central Repository und in der {% data variables.product.prodname_registry %} veröffentlichen

Du kannst deine Pakete sowohl im Maven Central Repository als auch in der {% data variables.product.prodname_registry %} veröffentlichen, indem du für jede Registrierung deine Datei _build.gradle_ konfigurierst.

Stelle sicher, dass deine Datei _build.gradle_ ein Repository sowohl für dein {% data variables.product.prodname_dotcom %}-Repository als auch für deinen Maven Central Repository-Anbieter enthält.

Wenn du die Bereitstellung für das Central Repository beispielsweise über das OSSRH-Hostingprojekt durchgeführt hast, möchtest du sie möglicherweise in einem Distributionsverwaltungsrepository festlegen, indem du für `name``OSSRH` angibst. Wenn du {% data variables.product.prodname_registry %} bereitstellst, möchtest du sie möglicherweise in einem Distributionsverwaltungsrepository mit `name` festgelegt auf `GitHubPackages` angeben.

Wenn deine Organisation beispielsweise „octocat“ und dein Repository „hello-world“ heißt, ähnelt die Konfiguration in _build.gradle_ dem folgenden Beispiel.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Mit dieser Konfiguration kannst du einen Workflow erstellen, der dein Paket in dem Maven Central Repository und in der {% data variables.product.prodname_registry %} veröffentlicht, indem du den `gradle publish`-Befehl ausführst.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Führt die Aktion [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) mit dem `publish`-Argument aus, um die Veröffentlichung in dem `OSSRH`-Maven-Repository und in der {% data variables.product.prodname_registry %} auszuführen. Die Umgebungsvariable `MAVEN_USERNAME` wird mit dem Inhalt deines `OSSRH_USERNAME`-Geheimnisses und die Umgebungsvariable `MAVEN_PASSWORD` mit dem Inhalt deines `OSSRH_TOKEN`-Geheimnisses festgelegt. Die Umgebungsvariable `GITHUB_TOKEN` wird mit dem Inhalt des `GITHUB_TOKEN`-Geheimnisses festgelegt. Der Schlüssel `permissions` gibt den Zugriff an, den das `GITHUB_TOKEN`-Geheimnis erteilt.

   Weitere Informationen zur Verwendung von Geheimnissen in deinem Workflow findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).
