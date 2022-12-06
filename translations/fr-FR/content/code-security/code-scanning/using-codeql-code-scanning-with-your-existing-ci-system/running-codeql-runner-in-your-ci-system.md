---
title: Exécution de l’exécuteur CodeQL dans votre système CI
shortTitle: Run CodeQL runner
intro: 'Vous pouvez utiliser le {% data variables.code-scanning.codeql_runner %} pour effectuer l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} dans un système d’intégration continue tiers.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 7e60376ed165a3af2da7f000c37d326cb33ade99
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161093'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos de l’{% data variables.code-scanning.codeql_runner %}

L’{% data variables.code-scanning.codeql_runner %} est un outil qui vous permet d’exécuter l’{% data variables.product.prodname_code_scanning %} sur le code que vous traitez dans un système d’intégration continue (CI) tiers. {% data reusables.code-scanning.about-code-scanning %} Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql) ».

Dans de nombreux cas, il est plus facile de configurer l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} en utilisant l’{% data variables.product.prodname_codeql_cli %} directement dans votre système CI. 

Vous pouvez également utiliser {% data variables.product.prodname_actions %} pour exécuter l’{% data variables.product.prodname_code_scanning %} dans {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ».

L’{% data variables.code-scanning.codeql_runner %} est un outil en ligne de commande qui exécute l’analyse {% data variables.product.prodname_codeql %} lors de l’extraction d’un dépôt {% data variables.product.prodname_dotcom %}. Vous ajoutez l’exécuteur à votre système tiers, puis appelez l’exécuteur pour analyser le code et charger les résultats sur {% data variables.product.product_name %}. Ces résultats sont affichés sous la forme d’alertes d’{% data variables.product.prodname_code_scanning %} dans le dépôt.

{% note %}

**Remarque :** {% ifversion fpt or ghec %}
* L’{% data variables.code-scanning.codeql_runner %} utilise l’interface CLI de {% data variables.product.prodname_codeql %} pour analyser le code et a donc les mêmes conditions de licence. Vous pouvez l’utiliser gratuitement sur les dépôts publics gérés sur {% data variables.product.prodname_dotcom_the_website %} et vous pouvez l’utiliser sur les dépôts privés appartenant à des clients disposant d’une licence {% data variables.product.prodname_advanced_security %}. Pour plus d’informations, consultez « [Conditions générales de {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license) » et « [Interface CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/) ».
{% else %}
* L’{% data variables.code-scanning.codeql_runner %} est disponible pour les clients disposant d’une licence {% data variables.product.prodname_advanced_security %}.
{% endif %} {% ifversion ghae %}
* L’{% data variables.code-scanning.codeql_runner %} ne doit pas être confondu avec l’interface CLI de {% data variables.product.prodname_codeql %}. L’interface CLI de {% data variables.product.prodname_codeql %} est une interface de ligne de commande qui vous permet de créer des bases de données {% data variables.product.prodname_codeql %} pour la recherche en matière de sécurité et d’exécuter des requêtes {% data variables.product.prodname_codeql %}.
Pour plus d’informations, consultez « [{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/) ».
{% endif %} {% endnote %}

## Téléchargement de l’{% data variables.code-scanning.codeql_runner %}

Vous pouvez télécharger l’{% data variables.code-scanning.codeql_runner %} à partir de https://{% ifversion fpt or ghec %}github.com{% else %}NOM HÔTE{% endif %}/github/codeql-action/releases. Sur certains systèmes d’exploitation, vous devrez peut-être changer les autorisations pour le fichier téléchargé avant de pouvoir l’exécuter.

Sur Linux :

```shell
chmod +x codeql-runner-linux
```

Sur macOS :

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

Sur Windows, le fichier `codeql-runner-win.exe` ne nécessite généralement aucune modification des autorisations.

## Ajout de l’{% data variables.code-scanning.codeql_runner %} à votre système CI

Une fois que vous avez téléchargé l’{% data variables.code-scanning.codeql_runner %} et vérifié qu’il peut être exécuté, vous devez rendre l’exécuteur disponible pour chaque serveur CI que vous envisagez d’utiliser pour l’{% data variables.product.prodname_code_scanning %}. Par exemple, vous pouvez configurer chaque serveur pour copier l’exécuteur à partir d’un emplacement central interne. Vous pouvez également utiliser l’API REST pour obtenir l’exécuteur directement à partir de {% data variables.product.prodname_dotcom %}, par exemple : 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

En outre, chaque serveur CI a également besoin des éléments suivants :

- Une {% data variables.product.prodname_github_app %} ou un {% data variables.product.pat_generic %} pour l’{% data variables.code-scanning.codeql_runner %} à utiliser. Vous devez utiliser un jeton d’accès avec l’étendue `repo` ou une {% data variables.product.prodname_github_app %} avec l’autorisation d’écriture `security_events` et les autorisations de lecture `metadata` et `contents`. Pour plus d’informations, consultez « [Génération d’{% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps) » et « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) ».
- Un accès au bundle {% data variables.product.prodname_codeql %} associé à cette version de l’{% data variables.code-scanning.codeql_runner %}. Ce package contient des requêtes et des bibliothèques nécessaires pour l’analyse {% data variables.product.prodname_codeql %} ainsi que l’interface CLI de {% data variables.product.prodname_codeql %}, qui est utilisée en interne par l’exécuteur. Pour plus d’informations, consultez « [Interface CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/) ».

Les options pour fournir l’accès au bundle {% data variables.product.prodname_codeql %} sont les suivantes :

1. Autorisez les serveurs CI à accéder à https://{% ifversion fpt or ghec %}github.com{% else %}NOM HÔTE{% endif %}/github/codeql-action afin que l’{% data variables.code-scanning.codeql_runner %} puisse télécharger automatiquement le bundle.
1. Téléchargez/extrayez manuellement le bundle, stockez-le avec d’autres ressources centrales et utilisez l’indicateur <nobr>`--codeql-path`</nobr> pour spécifier l’emplacement du bundle dans les appels pour initialiser l’{% data variables.code-scanning.codeql_runner %}.

## Appel de l’{% data variables.code-scanning.codeql_runner %}

Vous devez appeler l’{% data variables.code-scanning.codeql_runner %}. à partir de l’emplacement d’extraction du dépôt que vous souhaitez analyser. Les deux commandes principales sont les suivantes :

1. `init`, nécessaire pour initialiser l’exécuteur et créer une base de données {% data variables.product.prodname_codeql %} pour chaque langage à analyser. Ces bases de données sont remplies et analysées par les commandes suivantes.
1. `analyze`, nécessaire pour remplir les bases de données {% data variables.product.prodname_codeql %}, les analyser et charger les résultats sur {% data variables.product.product_name %}.

Pour les deux commandes, vous devez spécifier l’URL de {% data variables.product.product_name %}, le *PROPRIÉTAIRE/NOM* du dépôt et les {% data variables.product.prodname_github_apps %} ou le {% data variables.product.pat_generic %} à utiliser pour l’authentification. Vous devez également spécifier l’emplacement du bundle CodeQL, sauf si le serveur CI dispose de l’accès nécessaire pour le télécharger directement à partir du dépôt `github/codeql-action`.

Vous pouvez configurer l’emplacement où l’{% data variables.code-scanning.codeql_runner %} stocke le bundle CodeQL pour les futures analyses sur un serveur en utilisant l’indicateur <nobr>`--tools-dir`</nobr> et l’emplacement où il stocke les fichiers temporaires pendant l’analyse en utilisant <nobr>`--temp-dir`</nobr>.

Pour afficher les informations de référence sur la ligne de commande de l’exécuteur, utilisez l’indicateur `-h`. Par exemple, pour lister toutes les commandes exécutées : `codeql-runner-OS -h`, ou pour lister tous les indicateurs disponibles pour la commande `init` exécutée : `codeql-runner-OS init -h` (où `OS` varie selon l’exécutable que vous utilisez). Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} dans votre système CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference) ».

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Exemple de base

Cet exemple exécute l’analyse {% data variables.product.prodname_codeql %} sur un serveur CI Linux pour le dépôt `octo-org/example-repo` hébergé sur `{% data variables.command_line.git_url_example %}`. Le processus est très simple, car le dépôt contient uniquement des langages qui peuvent être analysés directement par {% data variables.product.prodname_codeql %}, sans être générés (autrement dit, Go, JavaScript, Python et TypeScript).

Dans cet exemple, le serveur dispose de l’accès nécessaire pour télécharger le bundle {% data variables.product.prodname_codeql %} directement à partir du dépôt `github/codeql-action`. Il n’est donc pas indispensable d’utiliser l’indicateur `--codeql-path`.

1. Extrayez le dépôt à analyser.
1. Accédez au répertoire dans lequel le dépôt est extrait.
1. Lancez l’{% data variables.code-scanning.codeql_runner %} et créez des bases de données {% data variables.product.prodname_codeql %} pour les langages détectés.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### Exemple de langage compilé

Cet exemple est similaire à l’exemple précédent, mais cette fois, le dépôt a du code en C/C++, C# ou Java. Pour créer une base de données {% data variables.product.prodname_codeql %} pour ces langages, l’interface CLI doit superviser la génération. À la fin du processus d’initialisation, l’exécuteur signale la commande dont vous avez besoin pour configurer l’environnement avant de générer le code. Vous devez exécuter cette commande, avant d’appeler le processus de génération CI normal, puis d’exécuter la commande `analyze`.

1. Extrayez le dépôt à analyser.
1. Accédez au répertoire dans lequel le dépôt est extrait.
1. Lancez l’{% data variables.code-scanning.codeql_runner %} et créez des bases de données {% data variables.product.prodname_codeql %} pour les langages détectés.
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
1. Sourcez le script généré par l’action `init` pour configurer l’environnement afin de superviser la génération. Notez le point et l’espace de début dans l’extrait de code suivant.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Génération du code Sur macOS, vous devez préfixer la commande de génération avec la variable d’environnement `$CODEQL_RUNNER`. Pour plus d’informations, consultez « [Résolution des problèmes de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build) ».

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Remarque :** Si vous utilisez une build conteneurisée, vous avez besoin d’exécuter l’{% data variables.code-scanning.codeql_runner %} dans le conteneur dans lequel votre tâche de génération se produit.

{% endnote %}

## Pour aller plus loin

- « [Configuration de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system) »
- « [Résolution des problèmes de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system) »

{% else %}

## À propos de l’{% data variables.code-scanning.codeql_runner %}

L’{% data variables.code-scanning.codeql_runner %} a été déprécié. La version 2.7.6 de l’[{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) a une parité des fonctionnalités complète.

Pour plus d’informations sur la migration vers l’{% data variables.product.prodname_codeql_cli %}, consultez « [Migration de l’exécuteur CodeQL vers l’interface CLI CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli) ».

## Pour aller plus loin

- [Dépréciation de l’exécuteur CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/) dans le blog GitHub

{% endif %}
