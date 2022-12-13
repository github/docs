---
title: Configuration de l’interface CLI de CodeQL dans votre système CI
shortTitle: Configure CodeQL CLI
intro: 'Vous pouvez configurer votre système d’intégration continue pour exécuter {% data variables.product.prodname_codeql_cli %}, effectuer l’analyse {% data variables.product.prodname_codeql %} et charger les résultats dans {% data variables.product.product_name %} pour les afficher en tant qu’alertes {% data variables.product.prodname_code_scanning %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
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
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182297'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Cet article décrit les fonctionnalités présentes dans la version de l’{% data variables.product.prodname_codeql_cli %} disponible au moment de la publication de {% data variables.product.product_name %}. Si votre entreprise utilise une version plus récente de l’{% data variables.product.prodname_codeql_cli %}, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system) à la place.

{% endnote %} {% endif %}

## À propos de la génération de résultats d’analyse du code avec l’{% data variables.product.prodname_codeql_cli %}

Une fois que vous avez rendu l’{% data variables.product.prodname_codeql_cli %} disponible pour les serveurs de votre système CI et que vous avez vérifié qu’ils peuvent s’authentifier auprès de {% data variables.product.product_name %}, vous êtes prêt à générer des données.

Vous utilisez trois commandes différentes pour générer des résultats et les charger sur {% data variables.product.product_name %} :

<!--Option to analyze multiple languages with one call-->
1. `database create` pour créer une base de données {% data variables.product.prodname_codeql %} afin de représenter la structure hiérarchique de chaque langage de programmation pris en charge dans le dépôt.
2. ` database analyze` pour exécuter des requêtes afin d’analyser chaque base de données {% data variables.product.prodname_codeql %} et de synthétiser les résultats dans un fichier SARIF.
3. `github upload-results` pour charger les fichiers SARIF résultants sur {% data variables.product.product_name %} où les résultats sont mis en correspondance avec une branche ou une demande de tirage (pull request) et affichés sous la forme d’alertes d’{% data variables.product.prodname_code_scanning %}.

Vous pouvez afficher l’aide de ligne de commande pour toute commande en utilisant l’option <nobr>`--help`</nobr>.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Création de bases de données {% data variables.product.prodname_codeql %} à analyser

1. Extrayez le code à analyser :
    - Pour une branche, extrayez la tête (début) de la branche à analyser.
    - Pour une demande de tirage, extrayez son commit de tête ou un commit de fusion généré par {% data variables.product.prodname_dotcom %}.
2. Configurez l’environnement pour le codebase, en vérifiant que toutes les dépendances sont disponibles. Pour plus d’informations, consultez [Création de bases de données pour les langages non compilés](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) et [Création de bases de données pour les langages compilés](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) dans la documentation de l’{% data variables.product.prodname_codeql_cli %}.
3. Recherchez la commande de génération, le cas échéant, pour le codebase. En général, celle-ci est disponible dans un fichier de configuration dans le système CI.
4. Exécutez `codeql database create` à partir de la racine d’extraction de votre dépôt et générez le codebase.

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **Remarque :** Si vous utilisez une build conteneurisée, vous avez besoin d’exécuter l’{% data variables.product.prodname_codeql_cli %} à l’intérieur du conteneur dans lequel votre tâche de génération se produit.

  {% endnote %}

| Option | Obligatoire | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez le nom et l’emplacement d’un répertoire à créer pour la base de données {% data variables.product.prodname_codeql %}. La commande échoue si vous essayez de remplacer un répertoire existant. Si vous spécifiez aussi `--db-cluster`, il s’agit du répertoire parent et un sous-répertoire est créé pour chaque langage analysé.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez l’identificateur du langage pour lequel créer une base de données, l’un des suivants : `{% data reusables.code-scanning.codeql-languages-keywords %}` (utilisez `javascript` pour analyser le code TypeScript {% ifversion codeql-kotlin-beta %} et `java` pour analyser le code Kotlin{% endif %}). Utilisée avec <nobr>`--db-cluster`</nobr>, l’option accepte une liste séparée par des virgules ou peut être spécifiée plusieurs fois.
| <nobr>`--command`</nobr> | | Recommandé. Utilisez cette option pour spécifier la commande de génération ou le script qui appelle le processus de génération pour le codebase. Les commandes sont exécutées à partir du dossier actuel ou de <nobr>`--source-root`</nobr> si ce dernier est défini. Non nécessaire pour une analyse Python et JavaScript/TypeScript. |
| <nobr>`--db-cluster`</nobr> | | facultatif. Utilisez cette option dans les codebases en plusieurs langages pour générer une seule base de données pour chaque langage spécifié par <nobr>`--language`</nobr>.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | Recommandé. Utilisez cette option pour supprimer la commande de génération pour les langages où l’{% data variables.product.prodname_codeql_cli %} n’a pas besoin de superviser la génération (par exemple, Python et JavaScript/TypeScript).
| <nobr>`--source-root`</nobr> | | Optionnel. Utilisez cette option si vous exécutez l’interface CLI en dehors de la racine d’extraction du dépôt. Par défaut, la commande `database create` suppose que le répertoire actuel est le répertoire racine des fichiers sources. Utilisez cette option pour spécifier un autre emplacement. |
| <nobr>`--codescanning-config`</nobr> | | Facultatif (Avancé). À utiliser si vous avez un fichier de configuration qui spécifie comment créer les bases de données {% data variables.product.prodname_codeql %} et quelles requêtes exécuter dans des étapes ultérieures. Pour plus d’informations, consultez « [Utilisation d’un fichier de configuration personnalisé](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file) » et « [database create](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config) ». |

Pour plus d’informations, consultez [Création de bases de données {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) dans la documentation relative à l’{% data variables.product.prodname_codeql_cli %}.

### Exemple avec un langage unique

Cet exemple crée une base de données {% data variables.product.prodname_codeql %} pour le dépôt extrait à l’emplacement `/checkouts/example-repo`. Il utilise l’extracteur JavaScript pour créer une représentation hiérarchique du code JavaScript et TypeScript dans le dépôt. La base de données obtenue est stockée dans `/codeql-dbs/example-repo`.

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### Exemple avec plusieurs langages

Cet exemple crée deux bases de données {% data variables.product.prodname_codeql %} pour le dépôt extrait à l’emplacement `/checkouts/example-repo-multi`. Il utilise :

- `--db-cluster` pour demander l’analyse de plusieurs langages.
- `--language` pour spécifier les langages pour lesquels créer des bases de données.
- `--command` pour indiquer à l’outil la commande de génération pour le codebase, ici `make`.
- `--no-run-unnecessary-builds` pour indiquer à l’outil d’ignorer la commande de génération pour les langages où elle n’est pas nécessaire (comme Python).

Les bases de données obtenues sont stockées dans les sous-répertoires `python` et `cpp` de `/codeql-dbs/example-repo-multi`.

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## Analyse d’une base de données {% data variables.product.prodname_codeql %}

1. Créez une base de données {% data variables.product.prodname_codeql %} (voir ci-dessus).
2. Exécutez `codeql database analyze` sur la base de données et spécifiez les packs{% ifversion codeql-packs %} et/ou les requêtes{% endif %} à utiliser.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**Remarque :** Si vous analysez plusieurs bases de données {% data variables.product.prodname_codeql %}L pour un seul commit, vous devez spécifier une catégorie SARIF pour chaque ensemble de résultats généré par cette commande. Quand vous chargez les résultats sur {% data variables.product.product_name %}, l’{% data variables.product.prodname_code_scanning %} utilise cette catégorie pour stocker les résultats de chaque langage séparément. Si vous oubliez de spécifier une catégorie, chaque chargement remplace les résultats précédents.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| Option | Obligatoire | Usage |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez le chemin du répertoire qui contient la base de données {% data variables.product.prodname_codeql %} à analyser. |
| `<packs,queries>` | | Spécifiez les requêtes ou packs {% data variables.product.prodname_codeql %} à exécuter. Pour exécuter les requêtes standard utilisées pour l’{% data variables.product.prodname_code_scanning %}, omettez ce paramètre. Pour voir les autres suites de requêtes incluses dans le bundle de l’{% data variables.product.prodname_codeql_cli %}, regardez dans `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`. Pour plus d’informations sur la création de votre propre suite de requêtes, consultez [Création de suites de requêtes CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) dans la documentation de l’{% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez le format du fichier de résultats généré par la commande. Pour le chargement sur {% data variables.product.company_short %}, ce doit être : {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. Pour plus d’informations, consultez « [Prise en charge de SARIF pour l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning) ».
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez l’emplacement d’enregistrement du fichier de résultats SARIF.
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | Facultatif pour une analyse de base de données unique. Obligatoire pour définir le langage quand vous analysez plusieurs bases de données pour un seul commit dans un dépôt. Spécifiez une catégorie à inclure dans le fichier de résultats SARIF pour cette analyse. Une catégorie est utilisée pour distinguer plusieurs analyses pour le même outil et le même commit, mais effectuées dans différents langages ou différentes parties du code.|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | Optionnel. Utilisez cette option pour inclure toute aide disponible sur les requêtes rendue en Markdown pour les requêtes personnalisées utilisées dans votre analyse. Toute aide sur les requêtes incluses dans la sortie SARIF pour des requêtes personnalisées va s’afficher dans l’interface utilisateur de l’analyse du code si la requête appropriée génère une alerte. Pour plus d’informations, consultez [Analyse de bases de données avec {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files) dans la documentation relative à {% data variables.product.prodname_codeql_cli %}.{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | facultatif. Utilisez si vous souhaitez inclure des packs de requêtes CodeQL dans votre analyse. Pour plus d’informations, consultez « [Téléchargement et utilisation de packs {% data variables.product.prodname_codeql %}](#downloading-and-using-codeql-query-packs) ».
| <nobr>`--download`</nobr> | | facultatif. Utilisez si certains de vos packs de requêtes CodeQL ne sont pas encore sur le disque et doivent être téléchargés avant d’exécuter des requêtes.{% endif %}
| <nobr>`--threads`</nobr> | | Optionnel. Utilisez cette option si vous voulez utiliser plusieurs threads pour exécuter des requêtes. La valeur par défaut est `1`. Vous pouvez spécifier d’autres threads pour accélérer l’exécution des requêtes. Pour définir le nombre de threads sur le nombre de processeurs logiques, spécifiez `0`.
| <nobr>`--verbose`</nobr> | | facultatif. Utilisez cette option pour obtenir des informations détaillées sur le processus d’analyse et les données diagnostiques issues du processus de création de la base de données.

Pour plus d’informations, consultez [Analyse de bases de données avec l’{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) dans la documentation relative à l’{% data variables.product.prodname_codeql_cli %}.

### Exemple de base

Cet exemple analyse une base de données {% data variables.product.prodname_codeql %} stockée dans `/codeql-dbs/example-repo` et enregistre les résultats sous la forme d’un fichier SARIF : `/temp/example-repo-js.sarif`. Il utilise `--sarif-category` pour inclure des informations supplémentaires dans le fichier SARIF qui identifient les résultats comme du code JavaScript. Cette option est primordiale quand vous avez plusieurs bases de données {% data variables.product.prodname_codeql %} à analyser pour une seule évaluation dans un référentiel.

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## Chargement de résultats dans {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Pour pouvoir charger des résultats dans {% data variables.product.product_name %}, vous devez déterminer la meilleure façon de passer l’{% data variables.product.prodname_github_app %} ou le {% data variables.product.pat_generic %} que vous avez créé précédemment à {% data variables.product.prodname_codeql_cli %} (consultez [Installation de {% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). Nous vous recommandons de consulter les instructions de votre système CI sur l’utilisation sécurisée d’un magasin de secrets. L’{% data variables.product.prodname_codeql_cli %} prend en charge :

- Le passage du jeton à l’interface CLI par le biais d’une entrée standard à l’aide de l’option `--github-auth-stdin` (recommandé).
- L’enregistrement du secret dans la variable d’environnement `GITHUB_TOKEN` et l’exécution de l’interface CLI sans inclure l’option `--github-auth-stdin`.

Quand vous avez choisi la méthode la plus sûre et la plus fiable pour votre serveur CI, exécutez `codeql github upload-results` sur chaque fichier de résultats SARIF et incluez `--github-auth-stdin`, sauf si le jeton est disponible dans la variable d’environnement `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| Option | Obligatoire | Usage |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez le *PROPRIÉTAIRE/NOM* du dépôt sur lequel charger les données. Le propriétaire doit être une organisation au sein d’une entreprise qui dispose d’une licence pour {% data variables.product.prodname_GH_advanced_security %} et {% data variables.product.prodname_GH_advanced_security %} doit être activé pour le dépôt{% ifversion fpt or ghec %}, sauf si ce dernier est public{% endif %}. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ».
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez le nom de la référence (`ref`) que vous avez extraite et analysée afin que les résultats puissent être mis en correspondance avec le code correct. Pour une branche, utilisez : `refs/heads/BRANCH-NAME`. Pour le commit de tête d’une demande de tirage, utilisez : `refs/pull/NUMBER/head`. Pour le commit de fusion généré par {% data variables.product.prodname_dotcom %} d’une demande de tirage, utilisez : `refs/pull/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez l’algorithme SHA complet du commit que vous avez analysé.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez le fichier SARIF à charger.{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez l’URL pour {% data variables.product.product_name %}.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | facultatif. Utilisez cette option afin de passer à l’interface CLI l’{% data variables.product.prodname_github_app %} ou le {% data variables.product.pat_generic %} créé pour l’authentification sur l’API REST {% data variables.product.company_short %} en utilisant une entrée standard. Cette option n’est pas nécessaire si la commande a accès à une variable d’environnement `GITHUB_TOKEN` définie avec ce jeton.

Pour plus d’informations, consultez [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) dans la documentation relative à l’{% data variables.product.prodname_codeql_cli %}.

### Exemple de base

Cet exemple charge les résultats depuis le fichier SARIF `temp/example-repo-js.sarif` sur le dépôt `my-org/example-repo`. Il indique à l’API d’{% data variables.product.prodname_code_scanning %} que les résultats sont destinés au commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` sur la branche `main`.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

Cette commande ne génère aucune sortie, sauf si le chargement a échoué. L’invite de commandes réapparaît une fois que le chargement est terminé et que le traitement des données a commencé. Sur les codebases plus petits, vous devez être en mesure d’explorer les alertes d’{% data variables.product.prodname_code_scanning %} dans {% data variables.product.product_name %} peu de temps après. Vous pouvez voir les alertes directement dans la demande de tirage ou sous l’onglet **Sécurité** des branches, en fonction du code que vous avez extrait. Pour plus d’informations, consultez « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) » et « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) ».

{% ifversion codeql-packs %}
## Téléchargement et utilisation de packs de requêtes {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Le bundle de l’{% data variables.product.prodname_codeql_cli %} inclut des requêtes gérées par les experts {% data variables.product.company_short %}, les chercheurs en sécurité et les contributeurs de la communauté. Si vous souhaitez exécuter des requêtes développées par d’autres organisations, les packs de requêtes {% data variables.product.prodname_codeql %} fournissent un moyen efficace et fiable de télécharger et d’exécuter des requêtes. Pour plus d’informations, consultez « [À propos de l’analyse du code avec CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries) ».

Avant de pouvoir utiliser un pack {% data variables.product.prodname_codeql %} pour analyser une base de données, vous devez télécharger tous les packages dont vous avez besoin à partir du {% data variables.product.prodname_container_registry %} {% data variables.product.company_short %}. Cela peut être fait en utilisant l’indicateur `--download` dans la commande `codeql database analyze`. Si un package n’est pas disponible publiquement, vous devez utiliser une {% data variables.product.prodname_github_app %} ou un {% data variables.product.pat_generic %} pour vous authentifier. Pour plus d’informations et un exemple, consultez « [Chargement de résultats dans {% data variables.product.product_name %}](#uploading-results-to-github) » plus haut.

| Option | Obligatoire | Usage |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Spécifiez l’étendue et le nom d’un ou plusieurs packs de requêtes CodeQL à télécharger en utilisant une liste séparée par des virgules. Si vous le souhaitez, incluez la version à télécharger et décompresser. Par défaut, la dernière version de ce pack est téléchargée. Si vous le souhaitez, incluez un chemin d’accès à une requête, un répertoire ou une suite de requêtes à exécuter. Si aucun chemin d’accès n’est inclus, exécutez les requêtes par défaut de ce pack. |
| <nobr>`--github-auth-stdin`</nobr> | | facultatif. Passer l’{% data variables.product.prodname_github_app %} ou le {% data variables.product.pat_generic %} créé pour l’authentification sur l’API REST {% data variables.product.company_short %} à l’interface CLI en utilisant une entrée standard. Cette option n’est pas nécessaire si la commande a accès à une variable d’environnement `GITHUB_TOKEN` définie avec ce jeton.

### Exemple de base

Cet exemple exécute la commande `codeql database analyze` avec l’option `--download` pour :

1. Télécharger la dernière version du pack `octo-org/security-queries`.
2. Télécharger une version du pack `octo-org/optional-security-queries` *compatible* avec la version 1.0.1 (dans ce cas, la version 1.0.2). Pour plus d’informations sur la compatibilité avec semver, consultez la [documentation sur la plage de versions sémantiques de npm](https://github.com/npm/node-semver#ranges).
3. Exécuter toutes les requêtes par défaut dans `octo-org/security-queries`.
4. Exécuter uniquement la requête `queries/csrf.ql` à partir de `octo-org/optional-security-queries`

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### Téléchargement direct de packs {% data variables.product.prodname_codeql %}

Si vous souhaitez télécharger un pack {% data variables.product.prodname_codeql %} sans l’exécuter immédiatement, vous pouvez utiliser la commande `codeql pack download`. Cela est utile si vous souhaitez éviter d’accéder à Internet lors de l’exécution de requêtes {% data variables.product.prodname_codeql %}. Lorsque vous exécutez l’analyse {% data variables.product.prodname_codeql %}, vous pouvez spécifier des packs, des versions et des chemins d’accès de la même façon que dans l’exemple précédent :

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### Téléchargement des packs {% data variables.product.prodname_codeql %} à partir de plusieurs registres de conteneurs {% data variables.product.company_short %}

Si vos packs {% data variables.product.prodname_codeql %} se trouvent sur plusieurs registres de conteneurs, vous devez indiquer à {% data variables.product.prodname_codeql_cli %} où trouver chaque pack. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server) ».
{% endif %}

## Exemple de configuration CI pour l’analyse {% data variables.product.prodname_codeql %}

Il s’agit d’un exemple de la série de commandes que vous pouvez utiliser pour analyser un codebase avec deux langages pris en charge, puis pour charger les résultats dans {% data variables.product.product_name %}.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## Résolution des problèmes liés à l’{% data variables.product.prodname_codeql_cli %} dans votre système CI

### Affichage des informations de journal et de diagnostic

Quand vous analysez une base de données {% data variables.product.prodname_codeql %} avec une suite de requêtes d’{% data variables.product.prodname_code_scanning %}, en plus de générer des informations détaillées sur les alertes, l’interface CLI signale les données de diagnostic à partir de l’étape de génération de base de données et des métriques récapitulatives. Dans le cas des dépôts avec peu d’alertes, ces informations peuvent s’avérer utiles pour déterminer s’il y a vraiment peu de problèmes dans le code ou s’il y a eu des erreurs lors de la génération de la base de données {% data variables.product.prodname_codeql %}. Pour obtenir une sortie plus détaillée de `codeql database analyze`, utilisez l’option `--verbose`.

Pour plus d’informations sur le type d’informations de diagnostic disponibles, consultez « [Affichage des journaux d’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information) ».

### L’{% data variables.product.prodname_code_scanning_capc %} affiche uniquement les résultats d’analyse de l’un des langages analysés

Par défaut, l’{% data variables.product.prodname_code_scanning %} attend un fichier de résultats SARIF par analyse pour un dépôt. Ainsi, quand vous chargez un deuxième fichier de résultats SARIF pour un commit, il est traité comme un remplacement du jeu de données d’origine.

Si vous souhaitez charger plusieurs jeux de résultats sur l’API d’{% data variables.product.prodname_code_scanning %} pour un commit dans un dépôt, vous devez identifier chaque jeu de résultats en tant que jeu unique. Pour les dépôts où vous créez plusieurs bases de données {% data variables.product.prodname_codeql %} pour analyser chaque commit, utilisez l’option `--sarif-category` afin de spécifier un langage ou une autre catégorie unique pour chaque fichier SARIF que vous générez pour ce dépôt.

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Problèmes liés à l’extraction Python

Nous déprécions la prise en charge de Python 2 pour {% data variables.product.prodname_codeql_cli %}, plus spécifiquement pour la phase de génération de base de données CodeQL (extraction de code).

Si vous utilisez {% data variables.product.prodname_codeql_cli %} pour exécuter l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} sur du code écrit en Python, vous devez vérifier que Python 3 est installé sur votre système CI.

{% endif %}

## Pour aller plus loin

- [Création de bases de données CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analyse des bases de données avec l’interface CLI de CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [Publication et utilisation de packs CodeQL](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
