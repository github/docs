---
title: Génération et test de code Java avec Gradle
intro: Vous pouvez créer un workflow d’intégration continue (CI) dans GitHub Actions pour générer et tester votre projet Java avec Gradle.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410442'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment créer un workflow qui effectue une intégration continue (CI) pour votre projet Java à l’aide du système de génération Gradle. Le workflow que vous créez vous permet de voir à quel moment les commits de demande de tirage (pull request) entraînent des échecs de build ou de test dans votre branche par défaut. Cette approche peut vous aider à garantir l’intégrité de votre code. Vous pouvez étendre votre workflow CI pour {% ifversion actions-caching %}mettre en cache des fichiers et{% endif %} charger des artefacts à partir d’une exécution de workflow.

Les exécuteurs hébergés dans {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} ont un cache d’outils où des logiciels sont préinstallés, notamment les Java Development Kits (JDKs) et Gradle. Pour obtenir la liste des logiciels et des versions préinstallées de JDK et de Gradle, consultez « [Spécifications pour les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

## Prérequis

Vous devez être familiarisé avec YAML et la syntaxe {% data variables.product.prodname_actions %}. Pour plus d'informations, consultez les pages suivantes :
- « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) »
- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) »

Il est recommandé d’avoir une compréhension de base de Java et du framework Gradle. Pour plus d’informations, consultez [Getting Started](https://docs.gradle.org/current/userguide/getting_started.html) dans la documentation Gradle.

{% data reusables.actions.enterprise-setup-prereq %}

## Utilisation du workflow de démarrage Gradle

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Gradle qui fonctionnera pour la plupart des projets Java basés sur Gradle. Pour plus d’informations, consultez [Workflow de démarrage Gradle](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

Pour commencer rapidement, vous pouvez choisir le workflow de démarrage Gradle préconfiguré lorsque vous créez un workflow. Pour plus d’informations, consultez [le guide de démarrage rapide {% data variables.product.prodname_actions %}](/actions/quickstart).

Vous pouvez également ajouter ce workflow manuellement en créant un fichier dans le répertoire `.github/workflows` de votre dépôt.

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

Ce workflow effectue les étapes suivantes :

1. L’étape `checkout` télécharge une copie de votre dépôt sur l’exécuteur.
2. L’étape `setup-java` configure le JDK Java 11 par Adoptium.
3. L’étape « Validate Gradle wrapper » valide les sommes de contrôle des fichiers JAR Gradle Wrapper qui sont présents dans l’arborescence source.
4. L’étape « Build with Gradle » crée une build à l’aide de l’action `gradle/gradle-build-action` fournie par Gradle dans {% data variables.product.prodname_dotcom %}. L’action s’occupe d’appeler Gradle, de collecter les résultats et de mettre en cache l’état entre les travaux. Pour plus d’informations, consultez [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

Les workflows de démarrage par défaut sont d’excellents points de départ lorsque vous créez votre workflow de build et de test. En outre, vous pouvez personnaliser le workflow de démarrage en fonction des besoins de votre projet.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Génération et test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code.

Le workflow de démarrage exécute la tâche `build` par défaut. Dans la configuration Gradle par défaut, cette commande télécharge les dépendances, génère les classes, exécute les tests et empaquettent les classes dans un format distribuable, par exemple, dans un fichier JAR.

Si vous utilisez différentes commandes pour générer votre projet ou si vous souhaitez utiliser une autre tâche, vous pouvez les spécifier. Par exemple, vous pouvez exécuter la tâche `package` qui est configurée dans votre fichier _ci.gradle_.

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

## Mise en cache des dépendances

Vos dépendances de build peuvent être mises en cache pour accélérer vos exécutions de workflow. Après une exécution réussie, `gradle/gradle-build-action` met en cache d’importantes parties du répertoire de base de l’utilisateur Gradle. Dans les prochains travaux, le cache sera restauré pour que les scripts de build n’aient pas à être recompilés et que les dépendances ne doivent pas être téléchargées à partir de dépôts de package distants.

La mise en cache est activée par défaut lors de l’utilisation de l’action `gradle/gradle-build-action`. Pour plus d’informations, consultez [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## Empaquetage des données de workflow en tant qu’artefacts

Une fois que votre build a été générée et que vos tests ont réussi, vous pouvez charger les packages Java résultants en tant qu’artefacts de build. Cela stockera les packages générés dans le cadre de l’exécution du workflow et vous permettra de les télécharger. Les artefacts peuvent vous aider à tester et à déboguer des demandes de tirage dans votre environnement local avant qu’elles ne soient fusionnées. Pour plus d’informations, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

Gradle crée généralement des fichiers de sortie comme les fichiers JAR, EAR ou WAR dans le répertoire `build/libs`. Vous pouvez charger le contenu de ce répertoire à l’aide de l’action `upload-artifact`.

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
