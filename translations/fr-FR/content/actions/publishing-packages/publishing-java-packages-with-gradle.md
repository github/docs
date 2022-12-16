---
title: Publication de packages Java avec Gradle
intro: Vous pouvez utiliser Gradle pour publier des packages Java sur un registre dans le cadre de votre workflow d’intégration continue (CI).
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410282'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

{% data reusables.actions.publishing-java-packages-intro %}

## Prérequis

Il est recommandé d’avoir une compréhension de base des fichiers de workflow et options de configuration. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Pour plus d’informations sur la création d’un workflow CI pour votre projet Java avec Gradle, consultez « [Génération et test de code Java avec Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle) ».

Vous pouvez également trouver utile d’avoir une compréhension de base des éléments suivants :

- « [Utilisation du registre npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) »
- « [Variables d’environnement](/actions/reference/environment-variables) »
- « [Secrets chiffrés](/actions/reference/encrypted-secrets) »
- « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow) »

## À propos de la configuration d’un package

Les champs `groupId` et `artifactId` de la section `MavenPublication` du fichier _build.gradle_ créent un identificateur unique pour votre package que les registres utilisent pour lier votre package à un registre.  Ceci est similaire aux champs `groupId` et `artifactId` du fichier Maven _pom.xml_.  Pour plus d’informations, consultez le « [plug-in de publication Maven](https://docs.gradle.org/current/userguide/publishing_maven.html) » dans la documentation Gradle.

Le fichier _build.gradle_ contient également la configuration des dépôts de gestion de distribution sur lesquels Gradle va publier des packages. Chaque dépôt doit avoir un nom, une URL de déploiement et des informations d’identification pour l’authentification.

## Publication de packages sur le dépôt central Maven

Chaque fois que vous créez une version, vous pouvez déclencher un workflow pour publier votre package. Le workflow de l’exemple ci-dessous s’exécute lorsque l’événement `release` se déclenche avec le type `created`. Le workflow publie le package sur le dépôt central Maven si les tests CI réussissent. Pour plus d’informations sur l’événement `release`, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#release) ».

Vous pouvez définir un nouveau dépôt Maven dans le bloc de publication de votre fichier _build.gradle_ qui pointe vers votre dépôt de packages.  Par exemple, si vous déployiez sur le dépôt central Maven via le projet d’hébergement OSSRH, votre _build.gradle_ peut spécifier un dépôt avec le nom `"OSSRH"`.

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

Avec cette configuration, vous pouvez créer un workflow qui publie votre package sur le dépôt central Maven en exécutant la commande `gradle publish`. À l’étape de déploiement, vous devez définir des variables d’environnement pour le nom d’utilisateur et le mot de passe ou le jeton que vous utilisez pour vous authentifier auprès du dépôt Maven. Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

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
1. Exécute l’action [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) avec l’argument `publish` pour publier sur le dépôt Maven `OSSRH`. La variable d’environnement `MAVEN_USERNAME` est définie avec le contenu de votre secret `OSSRH_USERNAME`, et la variable d’environnement `MAVEN_PASSWORD` est définie avec le contenu de votre secret `OSSRH_TOKEN`.

   Pour plus d’informations sur l’utilisation de secrets dans votre workflow, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

## Publication de packages sur {% data variables.product.prodname_registry %}

Chaque fois que vous créez une version, vous pouvez déclencher un workflow pour publier votre package. Le workflow de l’exemple ci-dessous s’exécute lorsque l’événement `release` se déclenche avec le type `created`. Le workflow publie le package sur {% data variables.product.prodname_registry %} si les tests CI réussissent. Pour plus d’informations sur l’événement `release`, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#release) ».

Vous pouvez définir un nouveau dépôt Maven dans le bloc de publication de votre fichier _build.gradle_ qui pointe vers {% data variables.product.prodname_registry %}.  Dans cette configuration de dépôt, vous pouvez également tirer parti des variables d’environnement définies dans votre exécution de workflow CI.  Vous pouvez utiliser la variable d’environnement `GITHUB_ACTOR` comme nom d’utilisateur, et vous pouvez définir la variable d’environnement `GITHUB_TOKEN` avec votre secret `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Par exemple, si votre organisation est nommée « octocat » et que votre dépôt est nommé « hello-world », la configuration {% data variables.product.prodname_registry %} dans _build.gradle_ ressemblerait à l’exemple ci-dessous.

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

Avec cette configuration, vous pouvez créer un workflow qui publie votre package sur {% data variables.product.prodname_registry %} en exécutant la commande `gradle publish`.

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
1. Exécute l’action [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) avec l’argument `publish` pour publier sur {% data variables.product.prodname_registry %}. La variable d’environnement `GITHUB_TOKEN` est définie avec le contenu du secret `GITHUB_TOKEN`. La clé `permissions` spécifie l’accès autorisé par le secret `GITHUB_TOKEN`.

   Pour plus d’informations sur l’utilisation de secrets dans votre workflow, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

## Publication de packages sur le dépôt central Maven et {% data variables.product.prodname_registry %}

Vous pouvez publier vos packages sur le dépôt central Maven et {% data variables.product.prodname_registry %} en configurant chacun dans votre fichier _build.gradle_.

Vérifiez que votre fichier _build.gradle_ inclut un dépôt pour le dépôt {% data variables.product.prodname_dotcom %} et le fournisseur du dépôt central Maven.

Par exemple, si vous effectuez un déploiement sur le dépôt central via le projet d’hébergement OSSRH, vous pouvez le spécifier dans un dépôt de gestion de distribution avec le `name` défini sur `OSSRH`. Si vous effectuez un déploiement sur {% data variables.product.prodname_registry %}, vous pouvez le spécifier dans un dépôt de gestion de distribution avec le `name` défini sur `GitHubPackages`.

Si votre organisation est nommée « octocat » et que votre dépôt est nommé « hello-world », la configuration dans _build.gradle_ ressemblerait à l’exemple ci-dessous.

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

Avec cette configuration, vous pouvez créer un workflow qui publie votre package sur le dépôt central Maven et {% data variables.product.prodname_registry %} en exécutant la commande `gradle publish`.

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
1. Exécute l’action [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) avec l’argument `publish` pour publier sur le dépôt Maven `OSSRH` et {% data variables.product.prodname_registry %}. La variable d’environnement `MAVEN_USERNAME` est définie avec le contenu de votre secret `OSSRH_USERNAME`, et la variable d’environnement `MAVEN_PASSWORD` est définie avec le contenu de votre secret `OSSRH_TOKEN`. La variable d’environnement `GITHUB_TOKEN` est définie avec le contenu du secret `GITHUB_TOKEN`. La clé `permissions` spécifie l’accès autorisé par le secret `GITHUB_TOKEN`.

   Pour plus d’informations sur l’utilisation de secrets dans votre workflow, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».
