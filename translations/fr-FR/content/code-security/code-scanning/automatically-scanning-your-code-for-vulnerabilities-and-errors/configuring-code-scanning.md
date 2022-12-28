---
title: Configuration de l’analyse du code
intro: 'Vous pouvez configurer la manière dont {% data variables.product.prodname_dotcom %} analyse le code de votre projet à la recherche de vulnérabilités et d’erreurs.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182313'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Cet article décrit les fonctionnalités disponibles avec la version de l’action CodeQL et le bundle de l’interface CLI de CodeQL associé inclus dans la mise en production initiale de cette version de {% data variables.product.product_name %}. Si votre entreprise utilise une version plus récente de l’action CodeQL, consultez l’[article {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning) pour plus d’informations sur les dernières fonctionnalités. {% ifversion not ghae %} Pour plus d’informations sur l’utilisation de la dernière version, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access) »{% endif %}

{% endnote %} {% endif %}

## À propos de la configuration de l’{% data variables.product.prodname_code_scanning %}

Vous pouvez exécuter l’{% data variables.product.prodname_code_scanning %} sur {% data variables.product.product_name %}, en utilisant {% data variables.product.prodname_actions %} ou à partir de votre système d’intégration continue (CI). Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions) » ou « [À propos de l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} dans votre système CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system) ».

Cet article traite de l’exécution de l’{% data variables.product.prodname_code_scanning %} sur {% data variables.product.product_name %} avec des actions.

Avant de pouvoir configurer l’{% data variables.product.prodname_code_scanning %} pour un dépôt, vous devez configurer l’{% data variables.product.prodname_code_scanning %} en ajoutant un workflow {% data variables.product.prodname_actions %} au dépôt. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ».

{% data reusables.code-scanning.edit-workflow %}

L’analyse {% data variables.product.prodname_codeql %} n’est qu’un seul type d’{% data variables.product.prodname_code_scanning %} que vous pouvez effectuer dans {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% ifversion ghes %} sur {% data variables.product.prodname_dotcom_the_website %}{% endif %} contient d’autres workflows d’{% data variables.product.prodname_code_scanning %} que vous pouvez utiliser. {% ifversion fpt or ghec %}Vous trouverez une sélection de ceux-ci dans la page « Démarrer avec l’{% data variables.product.prodname_code_scanning %} », à laquelle vous pouvez accéder à partir de l’onglet **Sécurité {% octicon "shield" aria-label="The shield symbol" %}** .{% endif %} Les exemples spécifiques fournis dans cet article concernent le fichier du {% data variables.code-scanning.codeql_workflow %}.

## Modification d’un workflow d’{% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} enregistre les fichiers de workflow dans le répertoire _.github/workflows_ de votre dépôt. Vous pouvez trouver un flux de travail que vous avez ajouté en recherchant son nom de fichier. Par exemple, par défaut, le fichier de workflow pour l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} est appelé _codeql-analysis.yml_.

1. Dans votre dépôt, accédez au fichier de workflow que vous souhaitez modifier.
1. Dans le coin supérieur droit de l’affichage des fichiers, pour ouvrir l’éditeur de workflow, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
![Bouton Modifier le fichier de workflow](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Après avoir modifié le fichier, cliquez sur **Démarrer la validation** et complétez le formulaire « Valider les modifications ». Vous pouvez valider directement dans la branche active ou créer une branche et démarrer une demande de tirage (pull request).
![Commiter la mise à jour dans le workflow codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Pour plus d’informations sur la modification des fichiers de workflow, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

## Configuration de la fréquence

Vous pouvez configurer le {% data variables.code-scanning.codeql_workflow %} pour analyser le code selon une planification ou quand des événements spécifiques se produisent dans un dépôt.

L’analyse du code quand un utilisateur pousse (push) une modification et chaque fois qu’une demande de tirage est créée empêche les développeurs d’introduire de nouvelles vulnérabilités et erreurs dans le code. L’analyse du code selon une planification vous informe des dernières vulnérabilités et erreurs que {% data variables.product.company_short %}, les chercheurs en sécurité et la communauté découvrent, même quand des développeurs ne gèrent pas activement le dépôt.

### Analyse sur poussée

Par défaut, le {% data variables.code-scanning.codeql_workflow %} utilise l’événement `on.push` pour déclencher une analyse du code à chaque poussée vers la branche par défaut du dépôt et toutes les branches protégées. Pour que l’{% data variables.product.prodname_code_scanning %} soit déclenchée sur une branche spécifiée, le workflow doit exister dans cette branche. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on) ».

Si vous effectuez une analyse sur poussée, les résultats s’affichent sous l’onglet **Sécurité** de votre dépôt. Pour plus d’informations, consultez « [Gestion des alertes d’analyse du code pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository) ».

Par ailleurs, quand une analyse `on:push` retourne des résultats pouvant être mappés à une demande de tirage ouverte, ces alertes s’affichent automatiquement sur la demande de tirage au même endroit que les autres alertes de demande de tirage. Les alertes sont identifiées en comparant l’analyse existante de la tête de la branche à l’analyse de la branche cible. Pour plus d’informations les alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage, consultez « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».

### Analyse des demandes de tirage

Le {% data variables.code-scanning.codeql_workflow %} par défaut utilise l’événement `pull_request` pour déclencher une analyse de code sur les demandes de tirage ciblées sur la branche par défaut. {% ifversion ghes %} L’événement `pull_request` n’est pas déclenché si la demande de tirage a été ouverte à partir d’une duplication (fork) privée{% else %}Si une demande de tirage provient d’une duplication privée, l’événement `pull_request` n’est déclenché que si vous avez sélectionné l’option « Exécuter des workflows à partir de demandes de tirage de duplication » dans les paramètres du dépôt. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks) ».{% endif %}

Pour plus d’informations sur l’événement `pull_request`, consultez « [Événements qui déclenchent des workflows](/actions/learn-github-actions/events-that-trigger-workflows#pull_request) ».

Si vous analysez des demandes de tirage, les résultats s’affichent sous forme d’alertes dans une vérification des demandes de tirage. Pour plus d’informations, consultez « [Triage des alertes d’analyse du code dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».

L’utilisation du déclencheur `pull_request`, configuré pour analyser le commit de fusion de la demande de tirage au lieu du commit de tête, produit des résultats plus efficaces et plus exacts que l’analyse de la tête de la branche pour chaque poussée. Toutefois, si vous utilisez un système d’intégration continue et de livraison continue (CI/CD) qui ne peut pas être configuré pour se déclencher sur des demandes de tirage, vous pouvez toujours utiliser le déclencheur `on:push` et l’{% data variables.product.prodname_code_scanning %} mappera les résultats aux demandes de tirage ouvertes sur la branche et ajoutera les alertes en tant qu’annotations à la demande de tirage. Pour plus d’informations, consultez « [Analyse sur poussée](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push) ».

### Définition des gravités entraînant l’échec de la vérification des demandes de tirage (pull request)

Par défaut, seules les alertes ayant le niveau de gravité `Error` ou de sécurité `Critical` ou `High` entraînent un échec de la vérification de la requête de tirage, et une vérification aboutit toujours avec des alertes de gravité inférieure. Vous pouvez modifier les niveaux de gravité des alertes et de gravité de la sécurité qui entraînent l’échec de la vérification des demandes de tirage dans les paramètres de votre référentiel. Pour plus d’informations sur les niveaux de gravité, consultez « [À propos des alertes d’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Sous « Analyse du code », à droite de « Vérifier l’échec », utilisez le menu déroulant pour sélectionner le niveau de gravité qui doit provoquer l’échec de la vérification d’une demande de tirage.
![Vérifier le paramètre d’échec](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### Prévention des analyses inutiles des demandes de tirage

Vous souhaiterez peut-être éviter qu’une analyse du code ne soit déclenchée sur des demandes de tirage spécifiques ciblées sur la branche par défaut, quels que soient les fichiers qui ont été modifiés. Vous pouvez configurer cela en spécifiant `on:pull_request:paths-ignore` ou `on:pull_request:paths` dans le workflow d’{% data variables.product.prodname_code_scanning %}. Par exemple, si les seules modifications apportées à une demande de tirage concernent des fichiers portant l’extension `.md` ou `.txt`, vous pouvez utiliser le tableau `paths-ignore` suivant.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**Remarques**

* `on:pull_request:paths-ignore` et `on:pull_request:paths` définissent les conditions qui déterminent si les actions du workflow s’exécutent sur une demande de tirage. Ils ne déterminent pas les fichiers qui sont analysés quand les actions _sont_ exécutées. Quand une demande de tirage contient des fichiers qui ne sont pas mis en correspondance par `on:pull_request:paths-ignore` ou `on:pull_request:paths`, le workflow exécute les actions et analyse tous les fichiers modifiés dans la demande de tirage, y compris ceux mis en correspondance par `on:pull_request:paths-ignore` ou `on:pull_request:paths`, sauf si les fichiers ont été exclus. Pour plus d’informations sur l’exclusion de fichiers de l’analyse, consultez « [Spécification des répertoires à analyser](#specifying-directories-to-scan) ».
* Pour les fichiers de workflow d’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %}, n’utilisez pas les mots clés `paths-ignore` ou `paths` avec l’événement `on:push`, car cela risque de provoquer des analyses manquantes. Pour obtenir des résultats précis, l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} doit pouvoir comparer les nouvelles modifications à l’analyse du commit précédent.

{% endnote %}

Pour plus d’informations sur l’utilisation de `on:pull_request:paths-ignore` et `on:pull_request:paths` pour déterminer quand un workflow s’exécute pour une demande de tirage, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) ».

### Analyse selon une planification

Si vous utilisez le {% data variables.code-scanning.codeql_workflow %} par défaut, celui-ci analyse le code dans votre dépôt une fois par semaine, en plus des analyses déclenchées par les événements. Pour ajuster cette planification, modifiez la valeur `cron` dans le flux de travail. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule) ».

{% note %}

**Remarque** : {% data variables.product.prodname_dotcom %} exécute uniquement des travaux planifiés qui se trouvent dans des workflows sur la branche par défaut. La modification de la planification dans un workflow sur une autre branche n’a aucun effet tant que vous n’avez pas fusionné la branche dans la branche par défaut.

{% endnote %}

### Exemple

L’exemple suivant montre un {% data variables.code-scanning.codeql_workflow %} pour un dépôt donné qui a une branche par défaut appelée `main` et une branche protégée appelée `protected`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

Ce flux de travail analyse les éléments suivants :
* Chaque envoi (push) vers la branche par défaut et la branche protégée
* Chaque demande de tirage (pull request) sur la branche par défaut
* La branche par défaut tous les lundis à 14:20 UTC

## Spécification d’un système d’exploitation

Si la compilation de votre code nécessite un système d’exploitation spécifique, vous pouvez configurer ce dernier dans votre {% data variables.code-scanning.codeql_workflow %}. Modifiez la valeur de `jobs.analyze.runs-on` pour spécifier le système d’exploitation de la machine qui exécute vos actions d’{% data variables.product.prodname_code_scanning %}. {% ifversion ghes %}Vous spécifiez le système d’exploitation en utilisant une étiquette appropriée comme second élément d’un tableau à deux éléments, après `self-hosted`.{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

Si vous choisissez d’utiliser un exécuteur auto-hébergé pour l’analyse du code, vous pouvez spécifier un système d’exploitation en utilisant une étiquette appropriée comme second élément d’un tableau à deux éléments, après `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

L’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} prend en charge les dernières versions d’Ubuntu, de Windows et de macOS. Les valeurs classiques de ce paramètre sont donc : `ubuntu-latest`, `windows-latest` et `macos-latest`. Pour plus d’informations, consultez « [Choix de l’exécuteur pour un travail](/actions/using-jobs/choosing-the-runner-for-a-job) » et « [Utilisation d’étiquettes avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners) ».

{% ifversion ghes %}Vous devez vous assurer que Git se trouve dans la variable PATH de vos exécuteurs auto-hébergés.{% else %}Si vous utilisez un exécuteur auto-hébergé, vous devez vous assurer que Git se trouve dans la variable PATH.{% endif %} Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) » et « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

Pour obtenir les spécifications recommandées (RAM, cœurs de processeur et disque) pour l’exécution de l’analyse {% data variables.product.prodname_codeql %}{% ifversion not ghes %} sur des machines auto-hébergées{% endif %}, consultez « [Ressources matérielles recommandées pour l’exécution de {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql) ».

## Spécification de l’emplacement des bases de données {% data variables.product.prodname_codeql %}

En général, vous n’avez pas besoin de vous soucier de l’endroit où le {% data variables.code-scanning.codeql_workflow %} place les bases de données {% data variables.product.prodname_codeql %}, car les bases de données créées sont automatiquement trouvées au cours des étapes ultérieures. Toutefois, si vous écrivez une étape de workflow personnalisée qui nécessite que la base de données {% data variables.product.prodname_codeql %} se trouve dans un emplacement de disque spécifique, par exemple pour charger la base de données en tant qu’artefact de workflow, vous pouvez spécifier cet emplacement avec le paramètre `db-location` sous l’action `init`.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

Le {% data variables.code-scanning.codeql_workflow %} s’attend à ce que le chemin fourni dans `db-location` soit accessible en écriture et qu’il n’existe pas ou qu’il s’agisse d’un répertoire vide. Lors de l’utilisation de ce paramètre dans un travail en cours d’exécution sur un exécuteur auto-hébergé ou avec un conteneur Docker, il incombe à l’utilisateur de s’assurer que le répertoire choisi est effacé entre les exécutions ou que les bases de données sont supprimées une fois qu’elles ne sont plus nécessaires. {% ifversion fpt or ghec or ghes %} Cela n’est pas nécessaire pour les travaux s’exécutant sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, qui obtiennent une nouvelle instance et un système de fichiers propre chaque fois qu’ils s’exécutent. Pour plus d’informations, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners) ».{% endif %}

Si ce paramètre n’est pas utilisé, le {% data variables.code-scanning.codeql_workflow %} crée les bases de données dans un emplacement temporaire de son choix.

## Changement des langages qui sont analysés

L’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} détecte automatiquement le code écrit dans les langages pris en charge.

{% data reusables.code-scanning.codeql-languages-bullets %}

Le fichier du {% data variables.code-scanning.codeql_workflow %} par défaut contient une matrice appelée `language` qui répertorie les langages de votre dépôt qui sont analysés. {% data variables.product.prodname_codeql %} remplit automatiquement cette matrice quand vous ajoutez l’{% data variables.product.prodname_code_scanning %} à un dépôt. L’utilisation de la matrice `language` optimise {% data variables.product.prodname_codeql %} pour exécuter chaque analyse en parallèle. Nous recommandons que tous les flux de travail adoptent cette configuration en raison des avantages en matière de performances de la parallélisation des builds. Pour plus d’informations sur les matrices, consultez « [Utilisation d’une matrice pour vos travaux](/actions/using-jobs/using-a-matrix-for-your-jobs) ».

{% data reusables.code-scanning.specify-language-to-analyze %}

Si votre workflow utilise la matrice `language`, {% data variables.product.prodname_codeql %} est codé en dur pour analyser uniquement les langages de la matrice. Pour modifier les langages que vous souhaitez analyser, modifiez la valeur de la variable de la matrice. Vous pouvez supprimer un langage pour empêcher son analyse ou vous pouvez ajouter un langage qui n’était pas présent dans le dépôt lors de la configuration de l’{% data variables.product.prodname_code_scanning %}. Par exemple, si le dépôt ne contenait initialement que du code JavaScript quand l’{% data variables.product.prodname_code_scanning %} a été configurée et que vous avez ajouté ultérieurement du code Python, vous devrez ajouter `python` à la matrice.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

Si votre workflow ne contient pas de matrice appelée `language`, {% data variables.product.prodname_codeql %} est configuré pour exécuter l’analyse de manière séquentielle. Si vous ne spécifiez pas de langages dans le workflow, {% data variables.product.prodname_codeql %} détecte automatiquement et tente d’analyser les langages pris en charge dans le dépôt. Si vous souhaitez choisir les langages à analyser, sans utiliser de matrice, vous pouvez utiliser le paramètre `languages` sous l’action `init`.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## Analyse des dépendances Python

Pour les exécuteurs hébergés par GitHub qui utilisent Linux uniquement, le {% data variables.code-scanning.codeql_workflow %} essaie d’installer automatiquement les dépendances Python afin d’obtenir plus de résultats pour l’analyse CodeQL. Vous pouvez contrôler ce comportement en spécifiant le paramètre `setup-python-dependencies` de l’action appelée par l’étape « Initialiser CodeQL ». Par défaut, ce paramètre a la valeur `true` :

-  Si le dépôt contient du code écrit en Python, l’étape « Initialiser CodeQL » installe les dépendances nécessaires sur l’exécuteur hébergé par GitHub. Si l’installation automatique réussit, l’action définit également la variable d’environnement `CODEQL_PYTHON` sur le fichier exécutable Python qui inclut les dépendances.

- Si le dépôt n’a pas de dépendances Python ou que les dépendances sont spécifiées de manière inattendue, vous recevez un avertissement et l’action se poursuit avec les travaux restants. L’action peut s’exécuter correctement même en cas de problèmes d’interprétation des dépendances, mais les résultats peuvent être incomplets.

Vous pouvez également installer manuellement les dépendances Python sur n’importe quel système d’exploitation. Vous devez ajouter `setup-python-dependencies` et le définir sur `false` ainsi que définir `CODEQL_PYTHON` sur l’exécutable Python qui inclut les dépendances, comme indiqué dans cet extrait de workflow :

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## Configuration d’une catégorie pour l’analyse

Utilisez `category` pour distinguer plusieurs analyses pour le même outil et le même commit, mais effectuées dans différents langages ou différentes parties du code. La catégorie que vous spécifiez dans votre workflow est incluse dans le fichier de résultats SARIF.

Ce paramètre est particulièrement utile si vous utilisez des monodépôts et que vous avez plusieurs fichiers SARIF pour différents composants du monodépôt.

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

Si vous ne spécifiez pas de paramètre `category` dans votre workflow, {% data variables.product.product_name %} génère un nom de catégorie pour vous, en fonction du nom du fichier de workflow déclenchant l’action, du nom de l’action et de toutes les variables de matrice. Par exemple :
- Le workflow `.github/workflows/codeql-analysis.yml` et l’action `analyze` produisent la catégorie `.github/workflows/codeql.yml:analyze`.
- Le workflow `.github/workflows/codeql-analysis.yml`, l’action `analyze` et les variables de matrice `{language: javascript, os: linux}` produisent la catégorie `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

La valeur `category` apparaît en tant que propriété `<run>.automationDetails.id` dans SARIF v2.1.0. Pour plus d’informations, consultez « [Prise en charge de SARIF pour l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object) ».

La catégorie que vous spécifiez ne remplace pas les détails de l’objet `runAutomationDetails` dans le fichier SARIF, le cas échéant.

## Exécution de requêtes supplémentaires

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### Utilisation de packs de requêtes {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Pour ajouter un ou plusieurs packs de requêtes {% data variables.product.prodname_codeql %} (bêta), ajoutez une entrée `with: packs:` dans la section `uses: {% data reusables.actions.action-codeql-action-init %}` du workflow. Dans `packs`, vous spécifiez un ou plusieurs packages à utiliser et, éventuellement, la version à télécharger. Si vous ne spécifiez pas de version, la version la plus récente est téléchargée. Si vous voulez utiliser des packages qui ne sont pas disponibles publiquement, vous avez besoin de définir la variable d’environnement `GITHUB_TOKEN` sur une secret qui a accès aux packages. Pour plus d’informations, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow) » et « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».

{% note %}

**Remarque :** Pour les workflows qui génèrent des bases de données {% data variables.product.prodname_codeql %} pour plusieurs langages, vous devez à la place spécifier les packs de requêtes {% data variables.product.prodname_codeql %} dans un fichier de configuration. Pour plus d’informations, consultez « [Spécification de packs de requêtes {% data variables.product.prodname_codeql %}](#specifying-codeql-query-packs) » ci-dessous.

{% endnote %}

Dans l’exemple ci-dessous, `scope` correspond au compte d’organisation ou personnel qui a publié le package. Quand le workflow s’exécute, les quatre packs de requêtes {% data variables.product.prodname_codeql %} sont téléchargés à partir de {% data variables.product.product_name %} et la suite de requêtes ou les requêtes par défaut pour chaque pack s’exécutent :
- La dernière version de `pack1` est téléchargée et toutes les requêtes par défaut sont exécutées.
- La version 1.2.3 de `pack2` est téléchargée et toutes les requêtes par défaut sont exécutées.
- La dernière version de `pack3` qui est compatible avec la version 3.2.1 est téléchargée et toutes les requêtes sont exécutées.
- La version 4.5.6 de `pack4` est téléchargée et seules les requêtes trouvées dans `path/to/queries` sont exécutées.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### Téléchargement des packs {% data variables.product.prodname_codeql %} à partir de {% data variables.product.prodname_ghe_server %}

Si votre workflow utilise des packs publiés sur une installation de {% data variables.product.prodname_ghe_server %}, vous devez indiquer à votre workflow où les trouver. Pour ce faire, utilisez l’entrée `registries` de l’action {% data reusables.actions.action-codeql-action-init %}. Cette entrée accepte une liste de propriétés `url`, `packages`et `token`, comme indiqué ci-dessous.

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

Comme les modèles de package dans la liste des registres sont examinés dans l’ordre, vous devez généralement placer les modèles de package les plus spécifiques en premier. Les valeurs de `token` doivent être un {% data variables.product.pat_v1 %} généré par l’instance GitHub à partir de laquelle vous faites le téléchargement avec l’autorisation `read:packages`.

Notez le `|` après le nom de la propriété `registries`. C’est un détail important, car les entrées {% data variables.product.prodname_actions %} peuvent uniquement accepter des chaînes. L’utilisation de `|` convertit le texte suivant en chaîne, analysée ensuite par l’action {% data reusables.actions.action-codeql-action-init %}.

### Utilisation des requêtes dans des packs QL
{% endif %} Pour ajouter une ou plusieurs requêtes, ajoutez une entrée `with: queries:` dans la section `uses: {% data reusables.actions.action-codeql-action-init %}` du workflow. Si les requêtes se trouvent dans un dépôt privé, utilisez le paramètre `external-repository-token` pour spécifier un jeton doté de l’accès nécessaire pour extraire le dépôt privé.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Vous pouvez également spécifier des suites de requêtes dans la valeur de `queries`. Les suites de requêtes sont des collections de requêtes, généralement regroupées par objectif ou langage.

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### Utilisation de fichiers de configuration personnalisés
{% endif %}

Si vous utilisez aussi un fichier de configuration pour des paramètres personnalisés, tous les {% ifversion codeql-packs %}packs ou {% endif %}requêtes supplémentaires spécifiés dans votre workflow sont utilisés à la place de ceux spécifiés dans le fichier de configuration. Si vous souhaitez exécuter l’ensemble combiné de {% ifversion codeql-packs %}packs ou{% endif %}requêtes supplémentaires, préfixez la valeur de {% ifversion codeql-packs %}`packs` ou {% endif %}`queries` dans le workflow avec le symbole `+`. Pour plus d’informations, consultez « [Utilisation d’un fichier de configuration personnalisé](#using-a-custom-configuration-file) ».

Dans l’exemple suivant, le symbole `+` garantit que les {% ifversion codeql-packs %}packs et {% endif %}requêtes supplémentaires spécifiés sont utilisés ensemble avec tous ceux spécifiés dans le fichier de configuration référencé.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## Utilisation d’un fichier de configuration personnalisé

Un fichier de configuration personnalisé est une autre façon de spécifier des {% ifversion codeql-packs %}packs et des {% endif %}requêtes supplémentaires à exécuter. Vous pouvez également utiliser le fichier pour désactiver les requêtes par défaut{% ifversion code-scanning-exclude-queries-from-analysis %}, exclure ou inclure des requêtes spécifiques,{% endif %} et spécifier les répertoires à analyser pendant l’analyse.

Dans le fichier de workflow, utilisez le paramètre `config-file` de l’action `init` pour spécifier le chemin d’accès au fichier de configuration que vous souhaitez utiliser. Cet exemple charge le fichier de configuration _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

Si le fichier de configuration se trouve dans un référentiel privé externe, utilisez le paramètre `external-repository-token` de l’action `init` pour spécifier un jeton qui a accès au référentiel privé.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Les paramètres dans le fichier de configuration sont écrits au format YAML.

{% ifversion codeql-packs %}
### Spécification de packs de requêtes {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Vous spécifiez des packs de requêtes {% data variables.product.prodname_codeql %} dans un tableau. Notez que le format est différent du format utilisé par le fichier de workflow.

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

Le format complet pour spécifier un pack de requêtes est `scope/name[@version][:path]`. `version` et `path` sont facultatifs. `version` est la plage de versions de semver. Si le paramètre est absent, la dernière version est utilisée. Pour plus d’informations sur les plages semver, consultez la [Documentation de semver sur npm](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).

Si vous avez un workflow qui génère plusieurs bases de données {% data variables.product.prodname_codeql %}, vous pouvez spécifier les packs de requêtes {% data variables.product.prodname_codeql %} à exécuter dans un fichier de configuration personnalisé à l’aide d’une carte imbriquée de packs.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### Spécification de requêtes supplémentaires

Vous spécifiez des requêtes supplémentaires dans un tableau `queries`. Chaque élément du tableau contient un paramètre `uses` avec une valeur qui identifie un fichier de requête unique, un répertoire contenant des fichiers de requête ou un fichier de définition de suite de requêtes.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Si vous le souhaitez, vous pouvez attribuer un nom à chaque élément de tableau, comme indiqué dans les exemples de fichiers de configuration ci-dessous. Pour plus d’informations sur les requêtes supplémentaires, consultez « [Exécution de requêtes supplémentaires](#running-additional-queries) » ci-dessus.

### Désactivation des requêtes par défaut

Si vous souhaitez uniquement exécuter des requêtes personnalisées, vous pouvez désactiver les requêtes de sécurité par défaut à l’aide de `disable-default-queries: true`.

{% ifversion code-scanning-exclude-queries-from-analysis %}
### Exclusion de requêtes spécifiques de l’analyse

Vous pouvez ajouter les filtres `exclude` et `include` à votre fichier de configuration personnalisé afin de spécifier les requêtes que vous souhaitez exclure ou inclure dans l’analyse.

Cela est utile si vous souhaitez exclure, par exemple :
- Des requêtes spécifiques des suites par défaut (`security`, `security-extended` et `security-and-quality`).
- Des requêtes spécifiques dont les résultats ne vous intéressent pas.
- Toutes les requêtes qui génèrent des avertissements et des recommandations.

Vous pouvez utiliser des filtres `exclude` similaires à ceux du fichier de configuration ci-dessous pour exclure les requêtes que vous souhaitez supprimer de l’analyse par défaut. Dans l’exemple de fichier de configuration ci-dessous, les deux requêtes `js/redundant-assignment` et `js/useless-assignment-to-local` sont exclues de l’analyse.

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
Pour rechercher l’ID d’une requête, vous pouvez cliquer sur l’alerte dans la liste des alertes affichée sous l’onglet Sécurité. La page des détails de l’alerte s’ouvre alors. Le champ `Rule ID` contient l’ID de requête. Pour plus d’informations sur la page des détails de l’alerte, consultez « [À propos des alertes d’{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details) ».

{% tip %}

**Conseils :**
- L’ordre des filtres est important. La première instruction de filtre qui apparaît après les instructions relatives aux requêtes et les packs de requêtes détermine si les requêtes sont incluses ou exclues par défaut.
- Les instructions suivantes sont exécutées dans l’ordre et les instructions qui apparaissent plus tard dans le fichier sont prioritaires sur les instructions précédentes.

{% endtip %}

Vous trouverez un autre exemple illustrant l’utilisation de ces filtres dans la section « [Exemples de fichiers de configuration](#example-configuration-files) ».

Pour plus d’informations sur l’utilisation des filtres `exclude` et `include` dans votre fichier de configuration personnalisé, consultez « [Création de suites de requêtes {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite) ». Pour plus d’informations sur les métadonnées de requête sur lesquelles vous pouvez définir un filtre, consultez « [Métadonnées des requêtes CodeQL](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/) ».

{% endif %}

### Spécification des répertoires à analyser

Pour les langages interprétés que {% data variables.product.prodname_codeql %} prend en charge (Python{% ifversion fpt or ghes > 3.3 or ghae > 3.3 %}, Ruby{% endif %} et JavaScript/TypeScript), vous pouvez limiter l’{% data variables.product.prodname_code_scanning %} aux fichiers de répertoires spécifiques en ajoutant un tableau `paths` au fichier de configuration. Vous pouvez exclure les fichiers de répertoires spécifiques de l’analyse en ajoutant un tableau `paths-ignore`.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Remarque** :

* Les mots clés `paths` et `paths-ignore`, utilisés dans le contexte du fichier de configuration de l’{% data variables.product.prodname_code_scanning %}, ne doivent pas être confondus avec les mêmes mots clés quand ils sont utilisés pour `on.<push|pull_request>.paths` dans un workflow. Lorsqu’ils sont utilisés pour modifier `on.<push|pull_request>` dans un workflow, ils déterminent si les actions sont exécutées lorsqu’un utilisateur modifie le code dans les répertoires spécifiés. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) ».
* Les caractères de motif de filtre `?`, `+`, `[`, `]` et `!` ne sont pas pris en charge et seront pris en compte littéralement.
*               Les caractères `**` ne peuvent être qu’au début ou à la fin d’une ligne, ou placés entre barres obliques, et vous ne pouvez pas mélanger `**` et autres caractères. Par exemple, `foo/**`, `**/foo` et `foo/**/bar` sont des syntaxes autorisées, mais `**foo` ne l'est pas. Toutefois, vous pouvez utiliser des étoiles uniques avec d’autres caractères, comme indiqué dans l’exemple. Vous devez utiliser des guillemets pour tout ce qui contient un caractère `*`.

{% endnote %}

Pour les langages compilés, si vous souhaitez limiter l’{% data variables.product.prodname_code_scanning %} à des répertoires spécifiques dans votre projet, vous devez spécifier les étapes de génération appropriées dans le workflow. Les commandes que vous devez utiliser pour exclure un répertoire de la génération dépendent de votre système de génération. Pour plus d’informations, consultez « [Configuration du workflow {% data variables.product.prodname_codeql %} pour les langages compilés](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language) ».

Vous pouvez analyser rapidement de petites parties d’un référentiel lorsque vous modifiez du code dans des répertoires spécifiques. Vous devez à la fois exclure des répertoires dans vos étapes de génération et utiliser les mots clés `paths-ignore` et `paths` pour [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) dans votre workflow.

### Exemples de fichiers de configuration

{% data reusables.code-scanning.example-configuration-files %}

## Configuration de l’{% data variables.product.prodname_code_scanning %} pour les langages compilés

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Pour plus d’informations sur la configuration de l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} pour les langages compilés, consultez « [Configuration du workflow {% data variables.product.prodname_codeql %} pour les langages compilés](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages) ».

## Chargement de données d’{% data variables.product.prodname_code_scanning %} sur {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} peut afficher les données d’analyse du code générées en externe par un outil tiers. Vous pouvez charger les données d’analyse du code avec l’action `upload-sarif`. Pour plus d’informations, consultez « [Chargement d’un fichier SARIF sur GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github) ».
