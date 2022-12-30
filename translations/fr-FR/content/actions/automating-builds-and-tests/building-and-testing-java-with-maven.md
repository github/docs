---
title: Génération et test de code Java avec Maven
intro: Vous pouvez créer un workflow d’intégration continue (CI) dans GitHub Actions pour générer et tester votre projet Java avec Maven.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179806'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment créer un workflow qui effectue une intégration continue (CI) pour votre projet Java à l’aide de l’outil de gestion de projet logiciel Maven. Le workflow que vous créez vous permet de voir à quel moment les commits de demande de tirage (pull request) entraînent des échecs de build ou de test dans votre branche par défaut. Cette approche peut vous aider à garantir l’intégrité de votre code. Vous pouvez étendre votre workflow CI pour {% ifversion actions-caching %}mettre en cache des fichiers et{% endif %} charger des artefacts à partir d’une exécution de workflow.

Les exécuteurs hébergés dans {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} ont un cache d’outils où des logiciels sont préinstallés, notamment les Java Development Kits (JDKs) et Maven. Pour obtenir la liste des logiciels et des versions préinstallées de JDK et de Maven, consultez « [Spécifications pour les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

## Prérequis

Vous devez être familiarisé avec YAML et la syntaxe {% data variables.product.prodname_actions %}. Pour plus d'informations, consultez les pages suivantes :
- « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) »
- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) »

Il est recommandé d’avoir une compréhension de base de Java et du framework Maven. Pour plus d’informations, consultez [Maven Getting Started Guide](http://maven.apache.org/guides/getting-started/index.html) dans la documentation Maven.

{% data reusables.actions.enterprise-setup-prereq %}

## Utilisation du workflow de démarrage Maven

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Maven qui fonctionnera pour la plupart des projets Java basés sur Maven. Pour plus d’informations, consultez [Workflow de démarrage Maven](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

Pour commencer rapidement, vous pouvez choisir le workflow de démarrage Maven préconfiguré lorsque vous créez un workflow. Pour plus d’informations, consultez [le guide de démarrage rapide {% data variables.product.prodname_actions %}](/actions/quickstart).

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
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

Ce workflow effectue les étapes suivantes :

1. L’étape `checkout` télécharge une copie de votre dépôt sur l’exécuteur.
2. L’étape `setup-java` configure le JDK Java 11 par Adoptium.
3. L’étape « Build with Maven » exécute la cible `package` Maven en mode non interactif pour permettre la génération de votre code, la réussite de vos tests et la création d’un package.

Les workflows de démarrage par défaut sont d’excellents points de départ lorsque vous créez votre workflow de build et de test. En outre, vous pouvez personnaliser le workflow de démarrage en fonction des besoins de votre projet.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Génération et test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code.

Le workflow de démarrage exécute la cible `package` par défaut. Dans la configuration Maven par défaut, cette commande télécharge les dépendances, génère les classes, exécute les tests et empaquettent les classes dans un format distribuable, par exemple, dans un fichier JAR.

Si vous utilisez différentes commandes pour générer votre projet ou si vous souhaitez utiliser une autre cible, vous pouvez les spécifier. Par exemple, vous pouvez exécuter la cible `verify` qui est configurée dans un fichier _pom-ci.xml_.

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

## Mise en cache des dépendances

Vous pouvez mettre en cache vos dépendances pour accélérer vos exécutions de workflow. Une fois l’exécution réussie, votre dépôt Maven local est stocké dans un cache. Dans les prochaines exécutions de workflows, le cache sera restauré afin que les dépendances n’aient pas besoin d’être téléchargées à partir des dépôts Maven distants. Vous pouvez mettre en cache les dépendances à l’aide de l’[action `setup-java`](https://github.com/marketplace/actions/setup-java-jdk) ou utiliser l’[action `cache`](https://github.com/actions/cache) pour une configuration personnalisée et plus avancée.

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

Ce workflow enregistre le contenu de votre dépôt Maven local, qui est situé dans le répertoire `.m2` du répertoire de base de l’exécuteur. La clé de cache sera le contenu haché de _pom.xml_. Par conséquent, toute modification apportée à _pom.xml_ rendra le cache non valide.

{% endif %}

## Empaquetage des données de workflow en tant qu’artefacts

Une fois que votre build a été générée et que vos tests ont réussi, vous pouvez charger les packages Java résultants en tant qu’artefacts de build. Cela stockera les packages générés dans le cadre de l’exécution du workflow et vous permettra de les télécharger. Les artefacts peuvent vous aider à tester et à déboguer des demandes de tirage dans votre environnement local avant qu’elles ne soient fusionnées. Pour plus d’informations, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

Maven crée généralement des fichiers de sortie comme les fichiers JAR, EAR ou WAR dans le répertoire `target`. Pour charger ces fichiers en tant qu’artefacts, vous pouvez les copier dans un nouveau répertoire qui contient les artefacts à charger. Par exemple, vous pouvez créer un répertoire appelé `staging`. Vous pouvez ensuite charger le contenu de ce répertoire à l’aide de l’action `upload-artifact`.

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
