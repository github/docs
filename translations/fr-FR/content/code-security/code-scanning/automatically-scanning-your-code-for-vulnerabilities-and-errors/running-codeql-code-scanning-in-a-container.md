---
title: Exécution de l’analyse du code CodeQL dans un conteneur
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
intro: 'Vous pouvez exécuter {% data variables.product.prodname_code_scanning %} dans un conteneur en veillant à ce que tous les processus s’exécutent dans le même conteneur.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - Containers
  - Java
ms.openlocfilehash: 60dac8a7f71af067c5cfaba5f48d123a3068f704
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162806'
---
{% data reusables.code-scanning.beta %}

## À propos de l’{% data variables.product.prodname_code_scanning %} avec une build conteneurisée

Si vous configurez l’{% data variables.product.prodname_code_scanning %} pour un langage compilé et que vous générez le code dans un environnement conteneurisé, l’analyse peut échouer avec le message d’erreur « Aucun code source n’a été vu pendant la génération ». Cela indique que {% data variables.product.prodname_codeql %} n’a pas pu superviser votre code lors de sa compilation.

Vous devez exécuter {% data variables.product.prodname_codeql %} dans le conteneur dans lequel vous générez votre code. Cela s’applique que vous utilisiez {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}, {% data variables.code-scanning.codeql_runner %},{% endif %} ou {% data variables.product.prodname_actions %}. Pour {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}ou {% data variables.code-scanning.codeql_runner %}{% endif %}, consultez « [Installation de {% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system) »{% ifversion codeql-runner-supported %} ou « [Exécution de {% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system) »{% endif %} pour plus d’informations. Si vous utilisez {% data variables.product.prodname_actions %}, configurez votre workflow pour exécuter toutes les actions dans le même conteneur. Pour plus d’informations, consultez « [Exemple de workflow](#example-workflow) ».

{% note %}

**Remarque :** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## Les dépendances

Vous pouvez avoir des difficultés à exécuter une {% data variables.product.prodname_code_scanning %} si le conteneur que vous utilisez n’a pas certaines dépendances (par exemple, Git doit être installé et ajouté à la variable PATH). Si vous rencontrez des problèmes de dépendance, consultez la liste des logiciels généralement inclus dans les images d’exécuteur de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez les fichiers `readme` spécifiques à la version dans ces emplacements :

* Linux : https://github.com/actions/runner-images/tree/main/images/linux
* MacOS : https://github.com/actions/runner-images/tree/main/images/macos
* Windows : https://github.com/actions/runner-images/tree/main/images/win

## Exemple de flux de travail

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Cet article décrit les fonctionnalités disponibles avec la version de l’action CodeQL et le bundle de l’interface CLI de CodeQL associé inclus dans la mise en production initiale de cette version de {% data variables.product.product_name %}. Si votre entreprise utilise une version plus récente de l’action CodeQL, consultez [l’article {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container) pour plus d’informations sur les dernières fonctionnalités.{% ifversion not ghae %} Pour plus d’informations sur l’utilisation de la dernière version, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access) ». {% endif %}

{% endnote %} {% endif %}

Cet exemple de workflow utilise {% data variables.product.prodname_actions %} pour exécuter l’analyse {% data variables.product.prodname_codeql %} dans un environnement conteneurisé. La valeur de `container.image` identifie le conteneur à utiliser. Dans cet exemple, l’image est nommée `codeql-container` et porte l’étiquette `f0f91db`. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer) ».

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: {% data reusables.actions.action-codeql-action-analyze %}
```
