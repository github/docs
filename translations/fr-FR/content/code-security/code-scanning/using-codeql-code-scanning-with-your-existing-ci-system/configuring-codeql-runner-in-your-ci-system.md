---
title: Configuration de l’exécuteur CodeQL dans votre système CI
shortTitle: Configure CodeQL runner
intro: 'Vous pouvez configurer la façon dont l’{% data variables.code-scanning.codeql_runner %} analyse le code dans votre projet et charge les résultats sur {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Integration
  - CI
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 64245dd9f320947510db3e108b30c886c95b89d1
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161069'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos de la configuration de l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} dans votre système CI

Pour intégrer l’{% data variables.product.prodname_code_scanning %} à votre système CI, vous pouvez utiliser l’{% data variables.code-scanning.codeql_runner %}. Pour plus d’informations, consultez « [Exécution de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system) ».

En général, vous appelez l’{% data variables.code-scanning.codeql_runner %} comme suit.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` dépend de l’emplacement où vous avez téléchargé l’{% data variables.code-scanning.codeql_runner %} sur votre système CI. `codeql-runner-OS` dépend du système d’exploitation que vous utilisez.
Il existe trois versions de l’{% data variables.code-scanning.codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos` et `codeql-runner-win`, pour les systèmes Linux, macOS et Windows respectivement. 

Pour personnaliser la façon dont l’{% data variables.code-scanning.codeql_runner %} analyse votre code, vous pouvez utiliser des indicateurs, tels que `--languages` et `--queries`, ou spécifier des paramètres personnalisés dans un fichier de configuration distinct.

## Analyse des demandes de tirage (pull requests)

L’analyse du code chaque fois qu’une demande de tirage est créée empêche les développeurs d’introduire de nouvelles vulnérabilités et erreurs dans le code.

Pour analyser une demande de tirage, exécutez la commande `analyze` et utilisez l’indicateur `--ref` pour spécifier la demande de tirage. La référence est `refs/pull/<PR-number>/head` ou `refs/pull/<PR-number>/merge`, selon que vous avez extrait le commit HEAD de la branche de demande de tirage ou un commit de fusion avec la branche de base.

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**Remarque** : Si vous analysez du code avec un outil tiers et souhaitez que les résultats apparaissent sous forme de vérifications de demande de tirage, vous devez exécuter la commande `upload` et utiliser l’indicateur `--ref` pour spécifier la demande de tirage au lieu de la branche. La référence est `refs/pull/<PR-number>/head` ou `refs/pull/<PR-number>/merge`.

{% endnote %}

## Remplacement de la détection automatique du langage

L’{% data variables.code-scanning.codeql_runner %} détecte et analyse automatiquement le code écrit dans les langages pris en charge.

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Pour remplacer la détection automatique du langage, exécutez la commande `init` avec l’indicateur `--languages`, suivie d’une liste séparée par des virgules de mots clés de langage. Les mots clés pour les langages pris en charge sont {% data reusables.code-scanning.codeql-languages-keywords %}.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

## Exécution de requêtes supplémentaires

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites-explanation %}

Pour ajouter une ou plusieurs requêtes, transmettez une liste de chemins séparés par des virgules à l’indicateur `--queries` de la commande `init`. Vous pouvez également spécifier des requêtes supplémentaires dans un fichier de configuration.

Si vous utilisez également un fichier de configuration pour les paramètres personnalisés et que vous spécifiez aussi des requêtes supplémentaires avec l’indicateur `--queries`, l’{% data variables.code-scanning.codeql_runner %} utilise les requêtes supplémentaires spécifiées avec l’indicateur <nobr>`--queries`</nobr> au lieu de celles figurant dans le fichier de configuration.
Si vous souhaitez exécuter l’ensemble combiné de requêtes supplémentaires spécifiées avec l’indicateur et présentes dans le fichier de configuration, préfixez la valeur passée à <nobr>`--queries`</nobr> avec le symbole `+`.
Pour plus d’informations, consultez « [Utilisation d’un fichier de configuration personnalisé](#using-a-custom-configuration-file) ».

Dans l’exemple suivant, le symbole `+` garantit que l’{% data variables.code-scanning.codeql_runner %} utilise les requêtes supplémentaires avec toutes les requêtes spécifiées dans le fichier de configuration référencé.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

## Utilisation d’un fichier de configuration personnalisé

Au lieu de transmettre des informations supplémentaires aux commandes de l’{% data variables.code-scanning.codeql_runner %}, vous pouvez spécifier des paramètres personnalisés dans un fichier de configuration distinct.

Le fichier de configuration est un fichier YAML. Il utilise une syntaxe similaire à la syntaxe de workflow pour {% data variables.product.prodname_actions %}, comme illustré dans les exemples ci-dessous. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions) ». 

Utilisez l’indicateur `--config-file` de la commande `init` pour spécifier le fichier de configuration. La valeur de <nobr>`--config-file`</nobr> est le chemin du fichier de configuration que vous souhaitez utiliser. Cet exemple charge le fichier de configuration _.github/codeql/codeql-config.yml_.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

### Exemples de fichiers de configuration

{% data reusables.code-scanning.example-configuration-files %}

## Configuration de l’{% data variables.product.prodname_code_scanning %} pour les langages compilés

Pour les langages compilés C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} et Java, {% data variables.product.prodname_codeql %} génère le code avant de l’analyser. {% data reusables.code-scanning.analyze-go %}

Pour de nombreux systèmes de génération courants, l’{% data variables.code-scanning.codeql_runner %} peut générer le code automatiquement. Pour tenter de générer le code automatiquement, exécutez `autobuild` entre les étapes `init` et `analyze`. Notez que si votre dépôt nécessite une version spécifique d’un outil de génération, vous devrez peut-être d’abord installer ce dernier manuellement. 

Le processus `autobuild` n’essaie de générer qu’_un_ langage compilé pour un dépôt. Le langage sélectionné automatiquement pour l’analyse est le langage auquel est associé le plus grand nombre de fichiers. Si vous souhaitez choisir explicitement un langage, utilisez l’indicateur `--language` de la commande `autobuild`.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

Si la commande `autobuild` ne peut pas générer votre code, vous pouvez exécuter vous-même les étapes de génération, entre les étapes `init` et `analyze`. Pour plus d’informations, consultez « [Exécution de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system#compiled-language-example) ».

## Chargement de données d’{% data variables.product.prodname_code_scanning %} sur {% data variables.product.prodname_dotcom %}

Par défaut, l’{% data variables.code-scanning.codeql_runner %} charge les résultats à partir de l’{% data variables.product.prodname_code_scanning %} quand vous exécutez la commande `analyze`. Vous pouvez également charger des fichiers SARIF séparément avec la commande `upload`.

Une fois que vous avez chargé les données, {% data variables.product.prodname_dotcom %} affiche les alertes dans votre dépôt. 
- Si vous avez effectué le chargement sur une demande de tirage, par exemple `--ref refs/pull/42/merge` ou `--ref refs/pull/42/head`, les résultats apparaissent sous forme d’alertes dans une vérification de demande de tirage. Pour plus d’informations, consultez « [Triage des alertes d’analyse du code dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».
- Si vous avez effectué le chargement sur une branche, par exemple `--ref refs/heads/my-branch`, les résultats s’affichent sous l’onglet **Sécurité** de votre dépôt. Pour plus d’informations, consultez « [Gestion des alertes d’analyse du code pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository) ».

## Informations de référence sur les commandes de l’{% data variables.code-scanning.codeql_runner %}

L’{% data variables.code-scanning.codeql_runner %} prend en charge les commandes et indicateurs suivants.

### `init`

Initialise l’{% data variables.code-scanning.codeql_runner %} et crée une base de données {% data variables.product.prodname_codeql %} pour chaque langage à analyser.

| Indicateur | Obligatoire | Valeur d'entrée |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Nom du dépôt à initialiser. |
| `--github-url` | ✓ | URL de l’instance {% data variables.product.prodname_dotcom %} où votre dépôt est hébergé. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Lire le jeton {% data variables.product.prodname_github_apps %} ou le {% data variables.product.pat_generic %} à partir d’une entrée standard. |
| `--languages` | | Liste séparée par des virgules des langages à analyser. Par défaut, l’{% data variables.code-scanning.codeql_runner %} détecte et analyse tous les langages pris en charge dans le dépôt. |
| `--queries` | | Liste séparée par des virgules des requêtes supplémentaires à exécuter, en plus de la suite par défaut de requêtes de sécurité. Cela remplace le paramètre `queries` dans le fichier de configuration personnalisé. |
| `--config-file` | | Chemin du fichier de configuration personnalisé. |
| `--codeql-path` | | Chemin d’une copie de l’exécutable CLI {% data variables.product.prodname_codeql %} à utiliser. Par défaut, l’{% data variables.code-scanning.codeql_runner %} télécharge une copie. |
| `--temp-dir` | | Répertoire dans lequel les fichiers temporaires sont stockés. Par défaut, il s’agit de `./codeql-runner`. |
| `--tools-dir` | | Répertoire dans lequel les outils {% data variables.product.prodname_codeql %} et autres fichiers sont stockés entre les exécutions. La valeur par défaut est un sous-répertoire du répertoire de base. |
| <nobr>`--checkout-path`</nobr> | | Chemin de l’extraction de votre dépôt. La valeur par défaut est le répertoire de travail actif. | 
| `--debug` | | Aucun. Affiche une sortie plus détaillée. |
| <nobr>`--trace-process-name`</nobr> | | Avancé, Windows uniquement. Nom du processus dans lequel un traceur Windows de ce processus est injecté. |
| <nobr>`--trace-process-level`</nobr> | | Avancé, Windows uniquement. Nombre de niveaux au-dessus du processus parent où un traceur Windows de ce processus est injecté. |
| `-h`, `--help` | | Aucun. Affiche l’aide de la commande. |

### `autobuild`

Tente de générer le code pour les langages compilés C/C++, C# et Java. Pour ces langages, {% data variables.product.prodname_codeql %} génère le code avant de l’analyser. Exécutez `autobuild` entre les étapes `init` et `analyze`.

| Indicateur | Obligatoire | Valeur d'entrée |
| ---- |:--------:| ----------- |
| `--language` | | Langage à générer. Par défaut, l’{% data variables.code-scanning.codeql_runner %} génère le langage compilé auquel est associé le plus grand nombre de fichiers. |
| <nobr>`--temp-dir`</nobr> | | Répertoire dans lequel les fichiers temporaires sont stockés. Par défaut, il s’agit de `./codeql-runner`. |
| `--debug` | | Aucun. Affiche une sortie plus détaillée. |
| <nobr> `-h`, `--help`</nobr> | | Aucun. Affiche l’aide de la commande. |

### `analyze`

Analyse le code dans les bases de données {% data variables.product.prodname_codeql %} et charge les résultats sur {% data variables.product.product_name %}.

| Indicateur | Obligatoire | Valeur d'entrée |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Nom du dépôt à initialiser. |
| `--commit` | ✓ | SHA du commit à analyser. Dans Git et Azure DevOps, cela correspond à la valeur de `git rev-parse HEAD`. Dans Jenkins, cela correspond à `$GIT_COMMIT`. |
| `--ref` | ✓ | Nom de la référence à analyser, par exemple `refs/heads/main` ou `refs/pull/42/merge`. Dans Git ou Jenkins, cela correspond à la valeur de `git symbolic-ref HEAD`. Dans Azure DevOps, cela correspond à `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL de l’instance {% data variables.product.prodname_dotcom %} où votre dépôt est hébergé. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Lire le jeton {% data variables.product.prodname_github_apps %} ou le {% data variables.product.pat_generic %} à partir d’une entrée standard. |
| <nobr>`--checkout-path`</nobr> | | Chemin de l’extraction de votre dépôt. La valeur par défaut est le répertoire de travail actif.  |
| `--no-upload` | | Aucun. Empêche l’{% data variables.code-scanning.codeql_runner %} de charger les résultats sur {% data variables.product.product_name %}. |
| `--output-dir` | | Répertoire où les fichiers SARIF de sortie sont stockés. L’emplacement par défaut est le répertoire des fichiers temporaires. |
| `--ram` | | Quantité de mémoire à utiliser lors de l’exécution de requêtes. L’option par défaut consiste à utiliser toute la mémoire disponible. |
| <nobr>`--no-add-snippets`</nobr> | | Aucun. Exclut les extraits de code de la sortie SARIF. |
| <nobr>`--category`<nobr> | | Catégorie à inclure dans le fichier de résultats SARIF pour cette analyse. Une catégorie peut être utilisée pour distinguer plusieurs analyses pour le même outil et le même commit, mais effectuées dans différents langages ou différentes parties du code. Cette valeur apparaît dans la propriété `<run>.automationDetails.id` dans SARIF v2.1.0. |
| `--threads` | | Nombre de threads à utiliser lors de l’exécution de requêtes. L’option par défaut consiste à utiliser tous les cœurs disponibles. |
| `--temp-dir` | | Répertoire dans lequel les fichiers temporaires sont stockés. Par défaut, il s’agit de `./codeql-runner`. |
| `--debug` | | Aucun. Affiche une sortie plus détaillée. |
| `-h`, `--help` | | Aucun. Affiche l’aide de la commande. |

### `upload`

Charge les fichiers SARIF sur {% data variables.product.product_name %}.

{% note %}

**Remarque** : Si vous analysez du code avec l’exécuteur CodeQL, la commande `analyze` charge les résultats SARIF par défaut. Vous pouvez utiliser la commande `upload` pour charger les résultats SARIF générés par d’autres outils.

{% endnote %}

| Indicateur | Obligatoire | Valeur d'entrée |
| ---- |:--------:| ----------- |
| `--sarif-file` | ✓ | Fichier SARIF à charger ou répertoire contenant plusieurs fichiers SARIF. |
| `--repository` | ✓ | Nom du dépôt qui a été analysé. |
| `--commit` | ✓ | SHA du commit qui a été analysé. Dans Git et Azure DevOps, cela correspond à la valeur de `git rev-parse HEAD`. Dans Jenkins, cela correspond à `$GIT_COMMIT`. |
| `--ref` | ✓ | Nom de la référence qui a été analysée, par exemple `refs/heads/main` ou `refs/pull/42/merge`. Dans Git ou Jenkins, cela correspond à la valeur de `git symbolic-ref HEAD`. Dans Azure DevOps, cela correspond à `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL de l’instance {% data variables.product.prodname_dotcom %} où votre dépôt est hébergé. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Lire le jeton {% data variables.product.prodname_github_apps %} ou le {% data variables.product.pat_generic %} à partir d’une entrée standard. |
| <nobr>`--checkout-path`</nobr> | | Chemin de l’extraction de votre dépôt. La valeur par défaut est le répertoire de travail actif.  |
| `--debug` | | Aucun. Affiche une sortie plus détaillée. |
| `-h`, `--help` | | Aucun. Affiche l’aide de la commande. |
