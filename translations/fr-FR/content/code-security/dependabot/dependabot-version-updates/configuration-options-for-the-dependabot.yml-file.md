---
title: Options de configuration pour le fichier dependabot.yml
intro: 'Informations détaillées sur toutes les options que vous pouvez utiliser pour personnaliser la manière dont {% data variables.product.prodname_dependabot %} gère vos référentiels.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: 3ec6cddf63b2e2d238baf96ea7d437fcb3c21d3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147691996'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## À propos du fichier *dependabot.yml*

Le fichier de configuration {% data variables.product.prodname_dependabot %}, *dependabot.yml*, utilise la syntaxe YAML. Si vous débutez avec YAML et que vous souhaitez en savoir plus, consultez « [Découvrir YAML en cinq minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes) ».

Vous devez stocker ce fichier dans le répertoire `.github` de votre dépôt. Quand vous ajoutez ou mettez à jour le fichier *dependabot.yml*, une recherche immédiate des mises à jour de version est déclenchée. Pour plus d’informations et un exemple, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates) ».

Toutes les options qui affectent également les mises à jour de sécurité sont utilisées la prochaine fois qu’une alerte de sécurité déclenche une demande de tirage (pull request) pour une mise à jour de sécurité.  Pour plus d’informations, consultez « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates) ».

Le fichier *dependabot.yml* a deux clés de niveau supérieur obligatoires : `version` et `updates`. Vous pouvez éventuellement inclure une clé `registries` de premier niveau{% ifversion ghes = 3.5 %} et/ou une clé `enable-beta-ecosystems`{% endif %}. Le fichier doit commencer par `version: 2`.

## Options de configuration pour le fichier *dependabot.yml*

La clé `updates` de niveau supérieur est obligatoire. Vous l’utilisez pour configurer la façon dont {% data variables.product.prodname_dependabot %} met à jour les versions ou les dépendances de votre projet. Chaque entrée configure les paramètres de mise à jour pour un gestionnaire de package particulier. Vous pouvez utiliser les options suivantes.

{% data reusables.dependabot.configuration-options %}

La plupart de ces options entrent dans l’une des catégories suivantes.

- Options de configuration essentielles que vous devez inclure dans toutes les configurations : [`package-ecosystem`](#package-ecosystem), [`directory`](#directory), [`schedule.interval`](#scheduleinterval).
- Options permettant de personnaliser la planification des mises à jour : [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday).
- Options permettant de contrôler quelles dépendances sont mises à jour : [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor).
- Options permettant d’ajouter des métadonnées aux demandes de tirage : [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone).
- Options permettant de changer le comportement des demandes de tirage : [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

En outre, l’option [`open-pull-requests-limit`](#open-pull-requests-limit) change le nombre maximal de demandes de tirage pour les mises à jour de version que {% data variables.product.prodname_dependabot %} peut ouvrir.

{% note %}

**Remarque :** Certaines de ces options de configuration peuvent également affecter les demandes de tirage déclenchées pour les mises à jour de sécurité des manifestes de package vulnérables.

Les mises à jour de sécurité ne sont déclenchées pour les manifestes de package vulnérables que sur la branche par défaut. Quand des options de configuration sont définies pour la même branche (ce qui est le cas sauf si vous utilisez `target-branch`) et spécifient un `package-ecosystem` et un `directory` pour le manifeste vulnérable, les demandes de tirage pour les mises à jour de sécurité utilisent des options appropriées.

En général, les mises à jour de sécurité utilisent toutes les options de configuration qui affectent les demandes de tirage, par exemple, l’ajout de métadonnées ou la modification de leur comportement. Pour plus d’informations sur les mises à jour de sécurité, consultez « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates) ».

{% endnote %}

### `package-ecosystem`

**Requis**. Vous ajoutez un élément `package-ecosystem` pour chaque gestionnaire de package pour lequel vous souhaitez que {% data variables.product.prodname_dependabot %} surveille l’existence de nouvelles versions. Le dépôt doit également contenir un fichier de verrouillage ou manifeste de dépendance pour chacun de ces gestionnaires de packages. Si vous souhaitez activer le placement dans le répertoire vendor pour un gestionnaire de package qui le prend en charge, les dépendances placées dans le répertoire vendor doivent se trouver dans le répertoire requis. Pour plus d’informations, consultez [`vendor`](#vendor) plus bas.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

### `directory`

**Requis**. Vous devez définir l’emplacement des manifestes de package pour chaque gestionnaire de package (par exemple, *package.json* ou *Gemfile*). Vous définissez le répertoire par rapport à la racine du dépôt pour tous les écosystèmes, sauf GitHub Actions. Pour GitHub Actions, définissez le répertoire sur `/` pour rechercher les fichiers de workflow dans `.github/workflows`.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

### `schedule.interval`

**Requis**. Vous devez définir la fréquence à laquelle rechercher de nouvelles versions pour chaque gestionnaire de package. Par défaut, {% data variables.product.prodname_dependabot %} attribue de façon aléatoire une heure pour appliquer toutes les mises à jour dans le fichier de configuration. Pour définir une heure spécifique, vous pouvez utiliser [`schedule.time`](#scheduletime) et [`schedule.timezone`](#scheduletimezone).

- `daily` : l’exécution a lieu tous les jours de la semaine, du lundi au vendredi.
- `weekly` : l’exécution a lieu une fois par semaine. Par défaut, il s’agit du lundi. Pour modifier cela, utilisez [`schedule.day`](#scheduleday).
- `monthly` : l’exécution a lieu un fois par mois. Elle se produit le premier jour du mois.

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

{% note %}

**Remarque** : `schedule` définit quand {% data variables.product.prodname_dependabot %} tente une nouvelle mise à jour. Toutefois, ce n’est pas la seule fois que vous pouvez recevoir des demandes de tirage. Les mises à jour peuvent être déclenchées en fonction des modifications apportées à votre fichier `dependabot.yml`, des modifications apportées à vos fichiers manifestes après l’échec d’une mise à jour ou des {% data variables.product.prodname_dependabot_security_updates %}. Pour plus d’informations, consultez « [Fréquence des demandes de tirage {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests) » et « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) ».

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Utilisez l’option `allow` pour personnaliser les dépendances à mettre à jour. Cela s’applique aux mises à jour de version et de sécurité. Vous pouvez utiliser les options suivantes :

- `dependency-name` : permet d’autoriser les mises à jour des dépendances dont le nom correspond à une chaîne donnée. Vous pouvez utiliser `*` pour indiquer zéro ou plusieurs caractères. Pour les dépendances Java, le format de l’attribut `dependency-name` est : `groupId:artifactId`, par exemple : `org.kohsuke:github-api`.
- `dependency-type` : permet d’autoriser les mises à jour pour les dépendances de types spécifiques.

  | Types de dépendances | Pris en charge par les gestionnaires de packages | Autoriser les mises à jour |
  |------------------|-------------------------------|--------|
  | `direct` | Tous | Toutes les dépendances définies explicitement. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | Dépendances de dépendances directes (également appelées sous-dépendances ou dépendances temporaires).|
  | `all` | Tous | Toutes les dépendances définies explicitement. Pour `bundler`, `pip`, `composer`, `cargo`, également les dépendances de dépendances directes.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Uniquement les dépendances du groupe de dépendances de production. |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Uniquement les dépendances du groupe de dépendances de développement. |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

### `assignees`

Utilisez `assignees` pour spécifier des destinataires individuels pour toutes les demandes de tirage déclenchées pour un gestionnaire de package.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

Par défaut, {% data variables.product.prodname_dependabot %} tente de détecter vos préférences de message de commit et d’utiliser des modèles similaires. Utilisez l’option `commit-message` pour spécifier explicitement vos préférences.

Options prises en charge

{% note %}

**Remarque :** Les options `prefix` et `prefix-development` ont une limite de 15 caractères.

{% endnote %}

- `prefix` spécifie un préfixe pour tous les messages de commit.
- `prefix-development` spécifie un préfixe distinct pour tous les messages de commit qui mettent à jour les dépendances du groupe de dépendances de développement. Quand vous spécifiez une valeur pour cette option, le `prefix` est utilisé uniquement pour les mises à jour des dépendances du groupe de dépendances production. Cela est pris en charge par : `bundler`, `composer`, `mix`, `maven`, `npm` et `pip`.
- `include: "scope"` spécifie que tout préfixe est suivi d’une liste des dépendances mises à jour dans le commit.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```
Si vous utilisez la même configuration que dans l’exemple ci-dessus, le déplacement de la bibliothèque `requests` dans le groupe de dépendances de développement `pip` génère un message de validation :

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Vous pouvez ignorer les dépendances en les ajoutant à `ignore` ou en utilisant la commande `@dependabot ignore` sur une demande de tirage ouverte par {% data variables.product.prodname_dependabot %}.

#### Création de conditions `ignore` à partir de `@dependabot ignore`

Les dépendances ignorées avec la commande `@dependabot ignore` sont stockées de manière centralisée pour chaque gestionnaire de package. Si vous commencez à ignorer les dépendances dans le fichier `dependabot.yml`, ces préférences existantes sont prises en compte en même temps que les dépendances `ignore` dans la configuration.

Vous pouvez vérifier si un dépôt a des préférences `ignore` stockées en y recherchant `"@dependabot ignore" in:comments`. Si vous souhaitez ne plus ignorer une dépendance ignorée de cette façon, rouvrez la demande de tirage.

Pour plus d’informations sur les commandes `@dependabot ignore`, consultez « [Gestion des demandes de tirage pour les mises à jour des dépendances](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands) ».

#### Spécification des dépendances et des versions à ignorer

Vous pouvez utiliser l’option `ignore` pour personnaliser les dépendances à mettre à jour. L’option `ignore` prend en charge les options suivantes :

- `dependency-name` : permet d’ignorer les mises à jour des dépendances dont le nom correspond à une chaîne donnée. Vous pouvez utiliser `*` pour indiquer zéro ou plusieurs caractères. Pour les dépendances Java, le format de l’attribut `dependency-name` est : `groupId:artifactId` (par exemple : `org.kohsuke:github-api`). {% ifversion dependabot-grouped-dependencies %} Pour empêcher {% data variables.product.prodname_dependabot %} de mettre à jour automatiquement les définitions du type TypeScript à partir de DefinitelyTyped, utilisez `@types/*`.{% endif %}
- `versions` : permet d’ignorer des versions ou des plages de versions spécifiques. Si vous souhaitez définir une plage, utilisez le modèle standard du gestionnaire de package (par exemple, `^1.0.0` pour npm ou `~> 2.0` pour Bundler).
- `update-types` : permet d’ignorer les types de mises à jour, telles que les mises à jour `major`, `minor` ou `patch` SemVer sur les mises à jour de version (par exemple : `version-update:semver-patch` ignore les mises à jour correctives). Vous pouvez combiner cela avec `dependency-name: "*"` pour ignorer des `update-types` particuliers pour toutes les dépendances. `version-update:semver-major`, `version-update:semver-minor` et `version-update:semver-patch` sont les seules options prises en charge. Les mises à jour de sécurité ne sont pas affectées par ce paramètre.

Si les options `versions` et `update-types` sont utilisées ensemble, {% data variables.product.prodname_dependabot %} ignore toute mise à jour dans l’un ou l’autre ensemble.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**Remarque** : {% data variables.product.prodname_dependabot %} ne peut exécuter des mises à jour de version sur les fichiers manifeste ou de verrouillage que s’il peut accéder à toutes les dépendances dans le fichier, même si vous ajoutez des dépendances inaccessibles à l’option `ignore` de votre fichier de configuration. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies) » et « [Résolution des erreurs {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files) ».


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

**Remarque** : Pour l’écosystème `pub`, {% data variables.product.prodname_dependabot %} n’effectue pas de mise à jour quand la version vers laquelle il tente d’opérer la mise à jour est ignorée, même si une version antérieure est disponible.

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

Les gestionnaires de package avec les valeurs `package-ecosystem` `bundler`, `mix` et `pip` peuvent exécuter du code externe dans le manifeste dans le cadre du processus de mise à jour de version. Cela peut permettre à un package compromis de voler des informations d’identification ou d’accéder aux registres configurés. Quand vous ajoutez un paramètre [`registries`](#registries) dans une configuration `updates`, {% data variables.product.prodname_dependabot %} empêche automatiquement l’exécution de code externe, ce qui peut entraîner l’échec de la mise à jour de version. Vous pouvez choisir de remplacer ce comportement et d’autoriser l’exécution de code externe pour les gestionnaires de packages `bundler`, `mix` et `pip` en définissant `insecure-external-code-execution` sur `allow`.

Vous pouvez refuser explicitement l’exécution de code externe, qu’il existe ou non un paramètre `registries` pour cette configuration de mise à jour, en définissant `insecure-external-code-execution` sur `deny`.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

### `labels`

{% data reusables.dependabot.default-labels %}

Utilisez `labels` afin de remplacer les étiquettes par défaut et de spécifier d’autres étiquettes pour toutes les demandes de tirage déclenchées pour un gestionnaire de package. Si l’une de ces étiquettes n’est pas définie dans le dépôt, elle est ignorée.
Pour désactiver toutes les étiquettes, y compris les étiquettes par défaut, utilisez `labels: [ ]`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

### `milestone`

Utilisez `milestone` pour associer toutes les demandes de tirage déclenchées pour un gestionnaire de package à un jalon. Vous devez spécifier l’identificateur numérique du jalon et non son étiquette. Si vous affichez un jalon, la dernière partie de l’URL de la page, après `milestone`, est l’identificateur. Par exemple : `https://github.com/<org>/<repo>/milestone/3`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

### `open-pull-requests-limit`

Par défaut, {% data variables.product.prodname_dependabot %} ouvre un maximum de cinq demandes de tirage pour les mises à jour de version. Une fois qu’il y a cinq demandes de tirage (pull requests) ouvertes provenant de {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_dependabot %} n’ouvre aucune nouvelle demande tant que certaines de ces demandes ouvertes ne sont pas fusionnées ou fermées. Utilisez `open-pull-requests-limit` pour changer cette limite. Cela permet également de désactiver temporairement les mises à jour de version pour un gestionnaire de package.

Cette option n’a aucun impact sur les mises à jour de sécurité, qui ont une limite interne distincte de dix demandes de tirage ouvertes.

```yaml
# Specify the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %} génère une branche pour chaque demande de tirage. Chaque nom de branche inclut `dependabot` ainsi que le gestionnaire de package et la dépendance qui sont mis à jour. Par défaut, ces parties sont séparées par un symbole `/`, par exemple : `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Utilisez `pull-request-branch-name.separator` pour spécifier un séparateur différent. Ce peut être `"-"`, `_` ou `/`. Le symbole de trait d’union doit être placé entre guillemets, afin qu’il ne soit pas interprété comme démarrant une liste YAML vide.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

### `rebase-strategy`

Par défaut, {% data variables.product.prodname_dependabot %} rebase automatiquement les demandes de tirage ouvertes quand il détecte des modifications apportées à la demande de tirage. Utilisez `rebase-strategy` pour désactiver ce comportement.

Stratégies de rebasage disponibles

- `disabled` pour désactiver le rebasage automatique.
- `auto` pour utiliser le comportement par défaut et rebaser les demandes de tirage ouvertes quand des modifications sont détectées.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `registries`

Pour permettre à {% data variables.product.prodname_dependabot %}d’accéder à un registre de packages privé lors de l’exécution d’une mise à jour de version, vous devez inclure un paramètre `registries` dans la configuration `updates` appropriée. Vous pouvez autoriser l’utilisation de tous les registres définis en définissant `registries` sur `"*"`. Vous pouvez également lister les registres que la mise à jour peut utiliser. Pour ce faire, utilisez le nom du registre tel que défini dans la section `registries` de niveau supérieur du fichier _dependabot.yml_. Pour plus d’informations, consultez « [Options de configuration pour les registres privés](#configuration-options-for-private-registries) » plus bas.

Pour permettre à {% data variables.product.prodname_dependabot %} d’utiliser les gestionnaires de packages `bundler`, `mix` et `pip` afin de mettre à jour les dépendances dans les registres privés, vous pouvez choisir d’autoriser l’exécution de code externe. Pour plus d’informations, consultez [`insecure-external-code-execution`](#insecure-external-code-execution) plus haut.

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
      - maven-github
    schedule:
      interval: "monthly"
{% endraw %}
```

### `reviewers`

Utilisez `reviewers` pour spécifier des réviseurs individuels ou des équipes de réviseurs pour toutes les demandes de tirage déclenchées pour un gestionnaire de package. Vous devez utiliser le nom complet de l’équipe, y compris l’organisation, comme si vous mentionniez (@mentioning) l’équipe.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

Quand vous définissez une planification de mise à jour `weekly`, par défaut, {% data variables.product.prodname_dependabot %} recherche les nouvelles versions le lundi à une heure définie aléatoire pour le dépôt. Utilisez `schedule.day` afin de spécifier un autre jour pour rechercher les mises à jour.

Valeurs prises en charge

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

### `schedule.time`

Par défaut, {% data variables.product.prodname_dependabot %} recherche les nouvelles versions à une heure définie aléatoire pour le dépôt. Utilisez `schedule.time` afin de spécifier une autre heure de la journée pour rechercher les mises à jour (format : `hh:mm`).

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

### `schedule.timezone`

Par défaut, {% data variables.product.prodname_dependabot %} recherche les nouvelles versions à une heure définie aléatoire pour le dépôt. Utilisez `schedule.timezone` pour spécifier un autre fuseau horaire. L’identificateur de fuseau horaire doit provenir de la base de données de fuseaux horaires gérée par [iana](https://www.iana.org/time-zones). Pour plus d’informations, consultez [Liste des fuseaux horaires de la base de données tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

### `target-branch`

Par défaut, {% data variables.product.prodname_dependabot %} recherche les fichiers manifestes sur la branche par défaut et déclenche des demandes de tirage pour les mises à jour de version sur cette branche. Utilisez `target-branch` pour spécifier une branche différente pour les fichiers manifestes et pour les demandes de tirage. Quand vous utilisez cette option, les paramètres de ce gestionnaire de package n’affectent plus les demandes de tirage déclenchées pour les mises à jour de sécurité.

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

### `vendor`

Utilisez l’option `vendor` pour indiquer à {% data variables.product.prodname_dependabot %} de placer les dépendances dans le répertoire vendor lors de leur mise à jour. N’utilisez pas cette option si vous utilisez `gomod`, car {% data variables.product.prodname_dependabot %} détecte automatiquement le placement dans le répertoire vendor pour cet outil.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

{% data variables.product.prodname_dependabot %} met uniquement à jour les dépendances placées dans le répertoire vendor situées dans des répertoires spécifiques au sein d’un dépôt.

| Gestionnaire de package | Chemin de fichier requis pour les dépendances placées dans le répertoire vendor | Plus d’informations |
  |------------------|-------------------------------|--------|
  | `bundler` | Les dépendances doivent se trouver dans le répertoire _vendor/cache_.</br>Les autres chemins de fichier ne sont pas pris en charge. | [Documentation `bundle cache`](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | Aucune exigence de chemin (les dépendances se trouvent généralement dans le répertoire _vendor_) | [Documentation `go mod vendor`](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

Quand {% data variables.product.prodname_dependabot %} modifie un fichier manifeste pour mettre à jour une version, il utilise les stratégies globales suivantes :

- Pour les applications, les exigences de version sont accrues, par exemple : npm, pip et Composer.
- Pour les bibliothèques, la plage de versions est étendue, par exemple : Bundler et Cargo.

Utilisez l’option `versioning-strategy` afin de changer ce comportement pour les gestionnaires de packages pris en charge.

{% data reusables.dependabot.option-affects-security-updates %}

Stratégies de mise à jour disponibles

| Option | Pris en charge par | Action |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Créer uniquement des demandes de tirage pour mettre à jour les fichiers de verrouillage. Ignorer toutes les nouvelles versions qui nécessitent des modifications du manifeste de package. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Suivre la stratégie par défaut décrite ci-dessus.|
| `widen`| `composer`, `npm` | Assouplir l’exigence de version pour inclure à la fois la nouvelle et l’ancienne version, si possible. |
| `increase`| `bundler`, `composer`, `npm` | Accroître toujours l’exigence de version pour qu’elle corresponde à la nouvelle version. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | Accroître l’exigence de version uniquement quand la nouvelle version l’exige. |

```yaml
# Customize the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```

## Options de configuration pour les registres privés

La clé `registries` de niveau supérieur est facultative. Elle vous permet de spécifier les détails d’authentification que {% data variables.product.prodname_dependabot %} peut utiliser pour accéder aux registres de packages privés.

{% note %}

**Remarque :** Les registres privés derrière les pare-feu sur les réseaux privés ne sont pas pris en charge.

{% endnote %}

La valeur de la clé `registries` est un tableau associatif, dont chaque élément se compose d’une clé qui identifie un registre particulier et d’une valeur qui est un tableau associatif spécifiant les paramètres requis pour accéder à ce registre. Dans le fichier *dependabot.yml* suivant, un registre identifié comme `dockerhub` est configuré dans la section `registries`, puis référencé dans la section `updates`.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
      - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

Vous utilisez les options suivantes pour spécifier les paramètres d’accès. Les paramètres de registre doivent contenir un `type` et une `url` et généralement soit une combinaison d’un `username` et d’un `password`, soit un `token`.

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
|:---|:---|
| `type`                     | Identifie le type de registre. Consultez la liste complète des types ci-après. |
| `url`                      | URL à utiliser pour accéder aux dépendances dans ce registre. Le protocole est facultatif. S’il n’est pas renseigné, la valeur `https://` est supposée. {% data variables.product.prodname_dependabot %} ajoute ou ignore les barres obliques de fin selon les besoins. |
| `username`                 | Nom d’utilisateur utilisé par {% data variables.product.prodname_dependabot %} pour accéder au registre. |
| `password`                 | Référence à un secret {% data variables.product.prodname_dependabot %} contenant le mot de passe de l’utilisateur spécifié. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot) ». |
| `key`                    | Référence à un secret {% data variables.product.prodname_dependabot %} contenant une clé d’accès pour le registre. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot) ». |
| `token`                    | Référence à un secret {% data variables.product.prodname_dependabot %} contenant un jeton d’accès pour le registre. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot) ». |
| `replaces-base`            | Pour les registres avec `type: python-index`, si la valeur booléenne est `true`, pip résout les dépendances en utilisant l’URL spécifiée plutôt que de l’URL de base de l’index de package Python (par défaut `https://pypi.org/simple`). |


Chaque `type` de configuration vous oblige à fournir des paramètres particuliers. Certains types permettent plusieurs façons de se connecter. Les sections suivantes fournissent des détails sur les paramètres que vous devez utiliser pour chaque `type`.

### `composer-repository`

Le type `composer-repository` prend en charge le nom d’utilisateur et le mot de passe.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

### `docker-registry`

{% note %}

**Remarque :** Nous ne prenons pas en charge Azure Container Registry (ACR).

{% endnote %}

Le type `docker-registry` prend en charge le nom d’utilisateur et le mot de passe.

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

Le type `docker-registry` peut également être utilisé pour effectuer un tirage à partir d’Amazon ECR en utilisant des informations d’identification AWS statiques.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
```
{% endraw %}

### `git`

Le type `git` prend en charge le nom d’utilisateur et le mot de passe.

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `hex-organization`

Le type `hex-organization` prend en charge l’organisation et la clé.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

Le type `maven-repository` prend en charge le nom d’utilisateur et le mot de passe.

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

### `npm-registry`

Le type `npm-registry` prend en charge le nom d’utilisateur et le mot de passe ou le jeton.

Quand vous utilisez le nom d’utilisateur et le mot de passe, votre jeton d’authentification de `.npmrc` peut contenir un `_password` codé `base64` ; toutefois, le mot de passe référencé dans votre fichier config {% data variables.product.prodname_dependabot %} doit être le mot de passe d’origine (non codé).

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `nuget-feed`

Le type `nuget-feed` prend en charge le nom d’utilisateur et le mot de passe ou le jeton.

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

### `python-index`

Le type `python-index` prend en charge le nom d’utilisateur et le mot de passe ou le jeton.

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

### `rubygems-server`

Le type `rubygems-server` prend en charge le nom d’utilisateur et le mot de passe ou le jeton.

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `terraform-registry`

Le type `terraform-registry` prend en charge un jeton.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## Activation de la prise en charge des écosystèmes au niveau bêta

### `enable-beta-ecosystems`

Par défaut, {% data variables.product.prodname_dependabot %} met à jour les manifestes de dépendance et les fichiers de verrouillage uniquement pour les écosystèmes entièrement pris en charge. Utilisez l’indicateur `enable-beta-ecosystems` pour choisir les mises à jour des écosystèmes qui ne sont pas encore en disponibilité générale.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}
