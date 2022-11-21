---
title: Chargement d’un fichier SARIF sur GitHub
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161158'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos des chargements de fichiers SARIF pour l’{% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} crée des alertes d’{% data variables.product.prodname_code_scanning %} dans un dépôt en utilisant des informations provenant de fichiers SARIF (Static Analysis Results Interchange Format). Les fichiers SARIF peuvent être chargés sur un dépôt avec l’API ou {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) ».

Vous pouvez générer des fichiers SARIF avec de nombreux outils de test de sécurité d’analyse statique, y compris {% data variables.product.prodname_codeql %}. Les résultats doivent utiliser SARIF version 2.1.0. Pour plus d’informations, consultez « [Prise en charge de SARIF pour l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning) ».

Vous pouvez charger les résultats avec {% data variables.product.prodname_actions %}, l’API d’{% data variables.product.prodname_code_scanning %},{% ifversion codeql-runner-supported %} l’{% data variables.code-scanning.codeql_runner %}{% endif %} ou l’{% data variables.product.prodname_codeql_cli %}. La meilleure méthode de chargement dépend de la façon dont vous générez le fichier SARIF. Par exemple, si vous utilisez :

- {% data variables.product.prodname_actions %} pour exécuter l’action {% data variables.product.prodname_codeql %}, aucune action supplémentaire n’est requise. L’action {% data variables.product.prodname_codeql %} charge automatiquement le fichier SARIF quand il termine l’analyse.
- {% data variables.product.prodname_actions %} pour exécuter un outil d’analyse compatible SARIF, vous pouvez mettre à jour le workflow pour inclure une étape finale qui charge les résultats (voir ci-dessous).
 - L’{% data variables.product.prodname_codeql_cli %} pour exécuter l’{% data variables.product.prodname_code_scanning %} dans votre système CI, vous pouvez utiliser l’interface CLI pour charger les résultats sur {% data variables.product.prodname_dotcom %} (pour plus d’informations, consultez « [Installation de l’{% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system) »).{% ifversion codeql-runner-supported %}
- L’{% data variables.code-scanning.codeql_runner %} pour exécuter l’{% data variables.product.prodname_code_scanning %} dans votre système d’intégration continue, par défaut, l’exécuteur charge automatiquement les résultats sur {% data variables.product.prodname_dotcom %} à la fin. Si vous bloquez le chargement automatique, quand vous êtes prêt à charger les résultats, vous pouvez utiliser la commande `upload` (pour plus d’informations, voir « [Exécution de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system) »).{% endif %}
- Un outil qui génère les résultats en tant qu’artefact en dehors de votre dépôt, vous pouvez utiliser l’API d’{% data variables.product.prodname_code_scanning %} pour charger le fichier (pour plus d’informations, consultez « [Charger une analyse en tant que données SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data) »).

{% data reusables.code-scanning.not-available %}

## Chargement d’une {% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_actions %}

Pour utiliser {% data variables.product.prodname_actions %} afin de charger un fichier SARIF tiers sur un dépôt, vous avez besoin d’un workflow. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Votre workflow doit utiliser l’action `upload-sarif`, qui fait partie du dépôt `github/codeql-action`. Il a des paramètres d’entrée que vous pouvez utiliser pour configurer le chargement. Les principaux paramètres d’entrée sont les suivants :

- `sarif-file`, qui configure le fichier ou le répertoire des fichiers SARIF à charger. Le chemin du répertoire ou du chemin est relatif à la racine du référentiel.
- `category` (facultatif), qui affecte une catégorie pour les résultats dans le fichier SARIF. Cela vous permet d’analyser le même commit de plusieurs façons et de passer en revue les résultats avec les affichages d’{% data variables.product.prodname_code_scanning %} dans {% data variables.product.prodname_dotcom %}. Par exemple, vous pouvez effectuer une analyse avec plusieurs outils et, dans un monodépôt, vous pouvez analyser différentes tranches du dépôt en fonction du sous-ensemble de fichiers modifiés.

Pour plus d’informations, consultez l’[action `upload-sarif`](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif).

L’action `upload-sarif` peut être configurée pour s’exécuter quand les événements `push` et `scheduled` se produisent. Pour plus d’informations sur les événements {% data variables.product.prodname_actions %}, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows) ».

Si votre fichier SARIF n’inclut pas `partialFingerprints`, l’action `upload-sarif` calcule le champ `partialFingerprints` pour vous et tente d’empêcher les alertes en double. {% data variables.product.prodname_dotcom %} ne peut créer `partialFingerprints` que quand le dépôt contient à la fois le fichier SARIF et le code source utilisé dans l’analyse statique. Pour plus d’informations sur la prévention des alertes en double, consultez « [À propos de la prise en charge de SARIF pour l’analyse du code](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs) ».

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Exemple de workflow pour les fichiers SARIF générés en dehors d’un dépôt

Vous pouvez créer un workflow qui charge les fichiers SARIF après leur commit dans votre dépôt. Cela est utile lorsque le fichier SARIF est généré en tant qu’artefact en dehors de votre référentiel.

Cet exemple de workflow s’exécute chaque fois que des commits sont poussés (push) vers le dépôt. L’action utilise la propriété `partialFingerprints` pour déterminer si des modifications ont eu lieu. En plus de s’exécuter lorsque des validations sont envoyées, le flux de travail est planifié pour s’exécuter une fois par semaine. Pour plus d’informations, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows) ».

Ce flux de travail charge le fichier `results.sarif` situé à la racine du référentiel. Pour plus d’informations sur la création d’un fichier de workflow, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Vous pouvez également modifier ce workflow pour charger un répertoire de fichiers SARIF. Par exemple, vous pouvez placer tous les fichiers SARIF dans un répertoire à la racine de votre référentiel appelé `sarif-output` et définir le paramètre d’entrée de l’action `sarif_file` sur `sarif-output`. Notez que si vous chargez un répertoire, chaque fichier SARIF doit inclure un `runAutomationDetails.id` unique pour définir la catégorie des résultats. Pour plus d’informations, consultez « [Objet `runAutomationDetails`](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object) ».

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### Exemple de workflow qui exécute l’outil d’analyse ESLint

Si vous générez votre fichier SARIF tiers dans le cadre d’un flux de travail d’intégration continue (CI), vous pouvez ajouter l’action `upload-sarif` en tant qu’étape après avoir exécuté vos tests CI. Si vous n’avez pas encore de workflow CI, vous pouvez en créer un avec un modèle {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez [le guide de démarrage rapide {% data variables.product.prodname_actions %}](/actions/quickstart).

Cet exemple de workflow s’exécute chaque fois que des commits sont poussés (push) vers le dépôt. L’action utilise la propriété `partialFingerprints` pour déterminer si des modifications ont eu lieu. En plus de s’exécuter lorsque des validations sont envoyées, le flux de travail est planifié pour s’exécuter une fois par semaine. Pour plus d’informations, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows) ».

Le workflow montre un exemple d’exécution de l’outil d’analyse statique ESLint en tant qu’étape de workflow. L’étape `Run ESLint` exécute l’outil ESLint et génère le fichier `results.sarif`. Le workflow charge ensuite le fichier `results.sarif` sur {% data variables.product.prodname_dotcom %} en utilisant l’action `upload-sarif`. Pour plus d’informations sur la création d’un fichier de workflow, consultez « [Présentation de GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions) ».

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Pour aller plus loin

- « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions) »
- « [Affichage de l’historique de votre workflow](/actions/managing-workflow-runs/viewing-workflow-run-history) »
- « [À propos de l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} dans votre système CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system) »
- « [Charger une analyse en tant que données SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data) »
