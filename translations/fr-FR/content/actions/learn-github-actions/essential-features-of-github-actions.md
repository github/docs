---
title: Essential features of GitHub Actions
shortTitle: Essential features
intro: '{% data variables.product.prodname_actions %} est conçu pour vous aider à créer des automatisations robustes et dynamiques. Ce guide vous montre comment créer des workflows {% data variables.product.prodname_actions %} qui incluent des variables d’environnement, des scripts personnalisés, etc.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 46a6a33928d9ff4587707972fc26de86c59f9ac6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145067024'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

{% data variables.product.prodname_actions %} vous permet de personnaliser vos workflows pour répondre aux besoins uniques de votre application et de votre équipe. Dans ce guide, nous allons aborder certaines des techniques de personnalisation essentielles, telles que l’utilisation de variables, l’exécution de scripts et le partage de données et d’artefacts entre les travaux.

##  Utilisation de variables dans vos workflows

{% data variables.product.prodname_actions %} inclut des variables d’environnement par défaut pour chaque exécution de workflow. Si vous devez utiliser des variables d’environnement personnalisées, vous pouvez les définir dans votre fichier de workflow YAML. Cet exemple montre comment créer des variables personnalisées nommées `POSTGRES_HOST` et `POSTGRES_PORT`. Ces variables sont ensuite disponibles pour le script `node client.js`.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Pour en savoir plus, consultez « [Utilisation de variables d’environnement](/actions/configuring-and-managing-workflows/using-environment-variables) ».

## Ajout de scripts à votre workflow

Vous pouvez utiliser des actions pour exécuter des scripts et des commandes d’interpréteur de commandes, qui sont ensuite exécutées sur l’exécuteur affecté. Cet exemple montre comment une action peut utiliser le mot clé `run` pour exécuter `npm install -g bats` sur l’exécuteur.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

Par exemple, pour exécuter un script en tant qu’action, vous pouvez stocker le script dans votre dépôt et fournir le chemin d’accès et le type d’interpréteur de commandes.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

## Partage de données entre travaux

Si votre travail génère des fichiers que vous souhaitez partager avec un autre travail dans le même workflow, ou si vous souhaitez enregistrer les fichiers pour vous y référer ultérieurement, vous pouvez les stocker dans {% data variables.product.prodname_dotcom %} en tant qu’_artefacts_. Les artefacts sont les fichiers créés lorsque vous générez et testez votre code. Par exemple, les artefacts peuvent inclure des fichiers binaires ou de package, des résultats de test, des captures d’écran ou des fichiers journaux. Les artefacts sont associés à l’exécution du workflow où ils ont été créés et peuvent être utilisés par un autre travail. {% data reusables.actions.reusable-workflow-artifacts %}

Par exemple, vous pouvez créer un fichier, puis le charger en tant qu’artefact.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: output-log-file
          path: output.log
```

Pour télécharger un artefact à partir d’une exécution de workflow distincte, vous pouvez utiliser l’action `actions/download-artifact`. Par exemple, vous pouvez télécharger l’artefact nommé `output-log-file`.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: output-log-file
```

Pour télécharger un artefact à partir de la même exécution de workflow, votre travail de téléchargement doit spécifier `needs: upload-job-name` pour ne pas commencer tant que le travail de chargement n’est pas terminé.

Pour plus d’informations sur les artefacts, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts) ».

## Étapes suivantes

Pour continuer à découvrir {% data variables.product.prodname_actions %}, consultez « [Gestion des workflows complexes](/actions/learn-github-actions/managing-complex-workflows) ».
