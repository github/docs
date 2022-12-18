---
title: Génération et test de code Java avec Ant
intro: Vous pouvez créer un workflow d’intégration continue (CI) dans GitHub Actions pour générer et tester votre projet Java avec Ant.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086127'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment créer un workflow qui effectue une intégration continue (CI) pour votre projet Java à l’aide du système de génération Ant. Le workflow que vous créez vous permet de voir à quel moment les commits de demande de tirage (pull request) entraînent des échecs de build ou de test dans votre branche par défaut. Cette approche peut vous aider à garantir l’intégrité de votre code. Vous pouvez étendre votre workflow d’intégration continue pour charger des artefacts à partir d’une exécution de workflow.

Les exécuteurs hébergés dans {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} ont un cache d’outils où des logiciels sont préinstallés, notamment les Java Development Kits (JDKs) et Ant. Pour obtenir la liste des logiciels et des versions préinstallées de JDK et de Ant, consultez « [Spécifications pour les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

## Prérequis

Vous devez être familiarisé avec YAML et la syntaxe {% data variables.product.prodname_actions %}. Pour plus d'informations, consultez les pages suivantes :
- « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) »
- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) »

Il est recommandé d’avoir une compréhension de base de Java et du framework Ant. Pour plus d’informations, consultez le [manuel Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

## Utilisation du workflow de démarrage Ant

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Ant qui fonctionnera pour la plupart des projets Java basés sur Ant. Pour plus d’informations, consultez [Workflow de démarrage Ant](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

Pour commencer rapidement, vous pouvez choisir le workflow de démarrage Ant préconfiguré lorsque vous créez un workflow. Pour plus d’informations, consultez [le guide de démarrage rapide {% data variables.product.prodname_actions %}](/actions/quickstart).

Vous pouvez également ajouter ce workflow manuellement en créant un fichier dans le répertoire `.github/workflows` de votre dépôt.

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

Ce workflow effectue les étapes suivantes :

1. L’étape `checkout` télécharge une copie de votre dépôt sur l’exécuteur.
2. L’étape `setup-java` configure le JDK Java 11 par Adoptium.
3. L’étape « Build with Ant » exécute la cible par défaut dans votre `build.xml` en mode non interactif.

Les workflows de démarrage par défaut sont d’excellents points de départ lorsque vous créez votre workflow de build et de test. En outre, vous pouvez personnaliser le workflow de démarrage en fonction des besoins de votre projet.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Génération et test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code.

Le workflow de démarrage exécute la cible par défaut spécifiée dans votre fichier _build.xml_.  Votre cible par défaut est généralement définie pour générer des classes, exécuter des tests et empaqueter les classes dans leur format distribuable, par exemple sous forme de fichier JAR.

Si vous utilisez différentes commandes pour générer votre projet ou si vous souhaitez exécuter une autre cible, vous pouvez les spécifier. Par exemple, vous pouvez exécuter la cible `jar` qui est configurée dans un fichier `_build-ci.xml_`.

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

## Empaquetage des données de workflow en tant qu’artefacts

Une fois que votre build a été générée et que vos tests ont réussi, vous pouvez charger les packages Java résultants en tant qu’artefacts de build. Cela stockera les packages générés dans le cadre de l’exécution du workflow et vous permettra de les télécharger. Les artefacts peuvent vous aider à tester et à déboguer des demandes de tirage dans votre environnement local avant qu’elles ne soient fusionnées. Pour plus d’informations, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

Ant crée généralement des fichiers de sortie comme les fichiers JAR, EAR ou WAR dans le répertoire `build/jar`. Vous pouvez charger le contenu de ce répertoire à l’aide de l’action `upload-artifact`.

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
