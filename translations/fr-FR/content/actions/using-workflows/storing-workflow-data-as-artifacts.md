---
title: Stockage des données de workflow en tant qu’artefacts
shortTitle: Storing workflow artifacts
intro: Les artifacts vous permettent de partager des données entre travaux dans un workflow et de stocker des données une fois ce workflow terminé.
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
  - /actions/guides/storing-workflow-data-as-artifacts
  - /actions/advanced-guides/storing-workflow-data-as-artifacts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
ms.openlocfilehash: d23b62f1e77fd08fd798f4fb1af9f44e4d1b1123
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179734'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propose des artefacts de workflow

Les artefacts vous permettent de conserver des données une fois un travail terminé, et de partager ces données avec un autre travail du même workflow. Un artefact est un fichier ou une collection de fichiers générés pendant l’exécution d’un workflow. Par exemple, vous pouvez utiliser des artefacts pour enregistrer votre sortie de build et de test une fois l’exécution d’un workflow terminée. {% data reusables.actions.reusable-workflow-artifacts %}

{% data reusables.actions.artifact-log-retention-statement %} La période de conservation d’une demande de tirage (pull request) redémarre chaque fois qu’un utilisateur pousse (par push) un nouveau commit à la demande de tirage.

Voici certains des artefacts courants que vous pouvez charger :

- Fichiers journaux et vidages principaux
- Résultats de test, échecs et captures d’écran
- Fichiers binaires ou compressés
- Sortie de performances des tests de contrainte et résultats de couverture du code

{% ifversion fpt or ghec %}

Le stockage d’artefacts utilise l’espace de stockage sur {% data variables.product.product_name %}. {% data reusables.actions.actions-billing %} Pour plus d’informations, consultez « [Gestion de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) ».

{% else %}

Les artefacts consomment de l’espace de stockage sur le stockage d’objets blob externe qui est configuré pour {% data variables.product.prodname_actions %} sur {% data variables.product.product_location %}.

{% endif %}

Les artefacts sont chargés pendant l’exécution d’un workflow, et vous pouvez afficher le nom et la taille d’un artefact dans l’interface utilisateur. Lorsqu’un artefact est téléchargé à l’aide de l’interface utilisateur {% data variables.product.product_name %}, tous les fichiers qui ont été chargés individuellement dans le cadre de l’artefact sont compressés ensemble dans un seul fichier. Cela signifie que la facturation est calculée en fonction de la taille de l’artefact chargé, et non de la taille du fichier zip.

{% data variables.product.product_name %} fournit deux actions que vous pouvez utiliser pour charger et télécharger des artefacts de build. Pour plus d’informations, consultez les {% ifversion fpt or ghec %}actions [actions/upload-artifact](https://github.com/actions/upload-artifact) et [download-artifact](https://github.com/actions/download-artifact){% else %} `actions/upload-artifact` les actions `download-artifact` sur {% data variables.product.product_location %}{% endif %}.

Pour partager des données entre des travaux :

* **Chargement de fichiers** : donnez un nom au fichier chargé et chargez les données avant que le travail ne se termine.
* **Téléchargement de fichiers** : vous pouvez télécharger uniquement des artefacts qui ont été chargés pendant l’exécution du même workflow. Lorsque vous téléchargez un fichier, vous pouvez le référencer par son nom.

Les étapes d’un travail partagent le même environnement sur la machine de l’exécuteur, mais s’exécutent dans leurs propres processus individuels. Pour transférer des données d’une étape à l’autre d’un travail, vous pouvez utiliser des entrées et des sorties. Pour plus d’informations sur les entrées et les sorties, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %} »](/articles/metadata-syntax-for-github-actions) ».

{% ifversion actions-caching %}

{% data reusables.actions.comparing-artifacts-caching %}

Pour plus d’informations sur la mise en cache des dépendances, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching) ».

{% endif %}

## Chargement d’artefacts de build et de test

Vous pouvez créer un workflow d’intégration continue (CI) pour générer et tester votre code. Pour plus d’informations sur l’utilisation de {% data variables.product.prodname_actions %} pour effectuer l’intégration continue, consultez « [À propos de l’intégration continue](/articles/about-continuous-integration) ».

La sortie de la génération et du test de votre code produit souvent des fichiers que vous pouvez utiliser pour déboguer les échecs de test et le code de production que vous pouvez déployer. Vous pouvez configurer un workflow pour générer et tester le code poussé (par push) à votre dépôt et signaler un état de réussite ou d’échec. Vous pouvez charger la sortie de build et de test à utiliser pour les déploiements, le débogage des tests ayant échoué ou des plantages, ainsi que l’affichage de la couverture de la suite de tests.

Vous pouvez utiliser l’action `upload-artifact` pour charger des artefacts. Lors du chargement d’un artefact, vous pouvez spécifier un fichier ou répertoire unique, ou bien plusieurs fichiers ou répertoires. Vous pouvez également exclure certains fichiers ou répertoires, et utiliser des modèles à caractères génériques. Nous vous recommandons d’attribuer un nom à un artefact, mais si aucun nom n’est fourni, `artifact` est utilisé comme nom par défaut. Pour plus d’informations sur la syntaxe, consultez {% ifversion fpt or ghec %}l’action [actions/upload-artifact](https://github.com/actions/upload-artifact){% else %} l’action `actions/upload-artifact` sur {% data variables.product.product_location %}{% endif %}.

### Exemple

Par exemple, votre dépôt ou une application web peuvent contenir des fichiers SASS et TypeScript que vous devez convertir en CSS et JavaScript. En supposant que votre configuration de build génère les fichiers compilés dans le répertoire `dist`, vous devez déployer les fichiers dans le répertoire `dist` sur votre serveur d’applications web si tous les tests ont réussi.

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|   
```

Cet exemple montre comment créer un workflow pour un projet Node.js qui génère le code dans le répertoire `src` et exécute les tests dans le répertoire `tests`. Vous pouvez supposer que l’exécution de `npm test` produit un rapport de couverture de code nommé `code-coverage.html` stocké dans le répertoire `output/test/`.

Le workflow charge les artefacts de production dans le répertoire `dist`, mais exclut tous les fichiers markdown. Il charge également le rapport `code-coverage.html` sous la forme d’un autre artefact.

```yaml{:copy}
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

## Configuration d’une période de conservation des artefacts personnalisée

Vous pouvez définir une période de conservation personnalisée pour les artefacts individuels créés par un workflow. Lorsque vous utilisez un workflow pour créer un artefact, vous pouvez utiliser `retention-days` avec l’action `upload-artifact`. Cet exemple montre comment définir une période de conservation personnalisée de 5 jours pour l’artefact nommé `my-artifact` :

```yaml{:copy}
  - name: 'Upload Artifact'
    uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

La valeur `retention-days` ne peut pas dépasser la limite de conservation définie par le dépôt, l’organisation ou l’entreprise.

## Téléchargement ou suppression d’artefacts

Pendant l’exécution d’un workflow, vous pouvez utiliser l’action [`download-artifact`](https://github.com/actions/download-artifact) pour télécharger des artefacts précédemment chargés dans l’exécution du même workflow.

Une fois une exécution de workflow terminée, vous pouvez télécharger ou supprimer des artefacts sur {% data variables.product.prodname_dotcom %} ou à l’aide de l’API REST. Pour plus d’informations, consultez « [Téléchargement d’artefacts de workflow](/actions/managing-workflow-runs/downloading-workflow-artifacts) », « [Suppression d’artefacts de workflow](/actions/managing-workflow-runs/removing-workflow-artifacts) » et « [API REST Artifacts](/rest/reference/actions#artifacts) ».

### Téléchargement d’artefacts pendant l’exécution d’un workflow

L’action [`actions/download-artifact`](https://github.com/actions/download-artifact) peut être utilisée pour télécharger des artefacts précédemment chargés pendant l’exécution d’un workflow.

{% note %}

**Remarque :**  : Vous pouvez télécharger uniquement des artefacts d’un workflow qui ont été chargés pendant l’exécution du même workflow.

{% endnote %}

Spécifiez le nom d’un artefact pour télécharger un artefact individuel. Si vous avez chargé un artefact sans spécifier de nom, le nom par défaut est `artifact`.

```yaml
- name: Download a single artifact
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: my-artifact
```

Vous pouvez également télécharger tous les artefacts d’une exécution de workflow en ne spécifiant pas de nom. Cela peut être utile si vous utilisez beaucoup d’artefacts.

```yaml
- name: Download all workflow run artifacts
  uses: {% data reusables.actions.action-download-artifact %}
```

Si vous téléchargez tous les artefacts de l’exécution de workflow, un répertoire est créé pour chaque artefact à l’aide de son nom.

Pour plus d’informations sur la syntaxe, consultez {% ifversion fpt or ghec %}l’action [actions/download-artifact](https://github.com/actions/download-artifact){% else %} l’action `actions/download-artifact` sur {% data variables.product.product_location %}{% endif %}.

## Passing data between jobs in a workflow

Vous pouvez utiliser les actions `upload-artifact` et `download-artifact` pour partager des données entre des travaux d’un workflow. Cet exemple de workflow montre comment transférer des données entre des travaux d’un même workflow. Pour plus d’informations, consultez les {% ifversion fpt or ghec %}actions [actions/upload-artifact](https://github.com/actions/upload-artifact) et [download-artifact](https://github.com/actions/download-artifact){% else %} `actions/upload-artifact` les actions `download-artifact` sur {% data variables.product.product_location %}{% endif %}.

Les travaux qui dépendent des artefacts d’un travail précédent doivent attendre que le travail dépendant se termine correctement. Ce workflow utilise le mot clé `needs` pour garantir que `job_1`, `job_2` et `job_3` s’exécutent de manière séquentielle. Par exemple, `job_2` exige `job_1` en utilisant la syntaxe `needs: job_1`.

Job 1 effectue les étapes suivantes :
- Effectue un calcul mathématique et enregistre le résultat dans un fichier texte appelé `math-homework.txt`.
- Utilise l’action `upload-artifact` pour charger le fichier `math-homework.txt` avec le nom d’artefact `homework`.

Job 2 utilise le résultat du travail précédent :
- Télécharge l’artefact `homework` chargé dans le travail précédent. Par défaut, l’action `download-artifact` télécharge les artefacts dans le répertoire de l’espace de travail dans lequel l’étape s’exécute. Vous pouvez utiliser le paramètre d’entrée `path` pour spécifier un autre répertoire de téléchargement.
- Lit la valeur dans le fichier `math-homework.txt`, effectue un calcul mathématique, puis enregistre à nouveau le résultat dans `math-homework.txt`, en remplaçant son contenu.
- Charge le fichier `math-homework.txt`. Ce chargement remplace l’artefact précédemment chargé, car ils portent le même nom.

Job 3 affiche le résultat chargé dans le travail précédent :
- Télécharge l’artefact `homework`.
- Imprime le résultat de l’équation mathématique dans le journal.

L’opération mathématique complète effectuée dans cet exemple de workflow est `(3 + 7) x 9 = 90`.

```yaml{:copy}
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

L’exécution du workflow archive tous les artefacts qu’elle a générés. Pour plus d’informations sur le téléchargement d’artefacts archivés, consultez « [Téléchargement d’artefacts de workflow](/actions/managing-workflow-runs/downloading-workflow-artifacts) ».
![Workflow qui transmet des données entre les travaux pour effectuer des opérations mathématiques](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion fpt or ghec %}

## Pour aller plus loin

- « [Gestion de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) ».

{% endif %}
