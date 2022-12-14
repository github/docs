---
title: Mise en cache des dépendances pour accélérer les workflows
shortTitle: Cache dependencies
intro: 'Si vous souhaitez accélérer et améliorer l’efficacité de vos workflows, vous pouvez créer et utiliser des caches pour les dépendances et autres fichiers fréquemment réutilisés.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 380fe568e950a4dc388e8f811ecebd12f242c5df
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164379'
---
## À propos de la mise en cache des dépendances de workflow

Les exécutions de workflow utilisent souvent les mêmes sorties ou dépendances téléchargées d’une exécution à l’autre. Par exemple, les outils de gestion des packages et des dépendances comme Maven, Gradle, npm et Yarn conservent un cache local des dépendances téléchargées.

{% ifversion fpt or ghec %} Les travaux sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} démarrent dans une image d’exécuteur propre et doivent télécharger des dépendances à chaque fois, ce qui entraîne une utilisation accrue du réseau, un runtime plus long et un coût plus important. {% endif %}Pour raccourcir le temps nécessaire pour recréer des fichiers tels que des dépendances, {% data variables.product.prodname_dotcom %} peut mettre en cache des fichiers que vous utilisez fréquemment dans des workflows.

Pour mettre en cache les dépendances d’un travail, vous devez utiliser l’[action `cache`](https://github.com/actions/cache) de {% data variables.product.prodname_dotcom %}. L’action crée et restaure un cache identifié par une clé unique. Ou bien, si vous mettez en cache les gestionnaires de package répertoriés ci-dessous, l’utilisation de leurs actions setup-* respectives nécessite une configuration minimale, et crée et restaure les caches de dépendances pour vous.

| Gestionnaires de package | action setup-* pour la mise en cache |
|---|---|
| npm, Yarn, pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle, Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Avertissement** : {% ifversion fpt or ghec %}Tenez compte de ce qui suit lors de l’utilisation d’une mise en cache avec {% data variables.product.prodname_actions %} :

* {% endif %}Nous vous recommandons de ne pas stocker d’informations sensibles dans le cache. Par exemple, les informations sensibles peuvent inclure des jetons d’accès ou des informations d’identification de connexion stockées dans un fichier se trouvant dans le chemin du cache. En outre, les programmes d’interface de ligne de commande (CLI) comme `docker login` peuvent enregistrer des informations d’identification d’accès dans un fichier de configuration. Toute personne disposant d’un accès en lecture peut créer une demande de tirage sur un dépôt et accéder au contenu d’un cache. Les duplications (forks) d’un dépôt peuvent également créer des demandes de tirage sur la branche de base et accéder aux caches sur cette branche.
{%- ifversion fpt or ghec %}
* Lorsque vous utilisez des exécuteurs auto-hébergés, les caches des exécutions du workflow sont stockés sur le stockage cloud appartenant à {% data variables.product.company_short %}. Une solution de stockage appartenant au client n’est disponible qu’avec {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

Pour plus d’informations sur les artefacts d’exécution de workflow, consultez « [Persistance des données de workflow à l’aide d’artefacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

## Restrictions relatives à l’accès à un cache

Les restrictions d’accès fournissent l’isolement et la sécurité du cache en créant une limite logique entre les différentes branches ou étiquettes. Les exécutions de workflow peuvent restaurer les caches créés dans la branche actuelle ou dans la branche par défaut (généralement `main`). Si une exécution de workflow est déclenchée pour une demande de tirage (pull request), elle peut également restaurer les caches créés dans la branche de base, y compris les branches de base des référentiels dupliqués. Par exemple, si la branche `feature-b` a la branche `feature-a` de base, une exécution de workflow déclenchée sur une demande de tirage a accès aux caches créés dans la branche par défaut `main`, la branche `feature-a` de base et la branche `feature-b` actuelle.

Les exécutions de workflow ne peuvent pas restaurer les caches créés pour les branches enfants ou les branches sœurs. Par exemple, un cache créé pour la branche enfant `feature-b` ne serait pas accessible à une exécution de workflow déclenchée sur la branche `main` parente. De même, un cache créé pour la branche `feature-a` avec la branche `main` de base n’est pas accessible à sa branche `feature-c` sœur avec la branche `main` de base. Les exécutions de workflow ne peuvent pas non plus restaurer les caches créés pour différents noms d’étiquettes. Par exemple, un cache créé pour l’étiquette `release-a` (à partir de la base `main`) ne sera pas accessible à une exécution de workflow déclenchée pour l’étiquette `release-b` (avec la base `main`).

Lorsqu’un cache est créé par une exécution de workflow déclenchée sur une demande de tirage, le cache est créé pour la référence de fusion (`refs/pull/.../merge`). Pour cette raison, le cache aura une étendue limitée et ne peut être restauré que par les ré-exécutions de la demande de tirage. Il ne peut pas être restauré par la branche de base ou d’autres demandes de tirage ciblant cette branche de base.

Plusieurs exécutions de workflow dans un référentiel peuvent partager des caches. Un cache créé pour une branche au sein d’une exécution de workflow est accessible et peut être restauré à partir d’une autre exécution de workflow pour le même référentiel et la même branche.

## Utilisation de l’action `cache`

L’[action `cache`](https://github.com/actions/cache) tente de restaurer un cache en fonction de la `key` que vous fournissez. Lorsque l’action trouve un cache qui correspond _exactement_ à la clé, l’action restaure les fichiers mis en cache dans le chemin (`path`) que vous configurez.
Vous pouvez éventuellement fournir une liste d’éléments `restore-keys` à utiliser si la clé (`key`) ne correspond pas à un cache existant. Une liste d’éléments `restore-keys` est utile lorsque vous restaurez un cache à partir d’une autre branche car `restore-keys` peut faire correspondre _partiellement_ des clés de cache. Pour plus d’informations sur la correspondance d’éléments `restore-keys`, consultez « [Correspondance d’une clé de cache](#matching-a-cache-key) ».

S’il existe une correspondance exacte avec la clé `key` fournie, cela est considéré comme un accès au cache. Si aucun cache ne correspond exactement à la clé `key` fournie, cela est considéré comme un échec de cache. En cas d’échec d’accès au cache, l’action crée automatiquement un cache si le travail se termine correctement. Le nouveau cache utilise la `key` que vous avez fournie, et contient les fichiers que vous spécifiez dans `path`. Pour plus d’informations sur la façon dont cela est géré, consultez « [Correspondances dans le cache et échecs](#cache-hits-and-misses) ».

Vous ne pouvez pas modifier le contenu d’un cache existant. Au lieu de cela, vous pouvez créer un cache avec une nouvelle clé.


### Paramètres d’entrée pour l’action `cache`

- `key` : **Obligatoire** Clé créée lors de l’enregistrement d’un cache et clé utilisée pour rechercher un cache. Il peut s’agir de d’une combinaison quelconque de variables, de valeurs de contexte, de chaînes statiques et de fonctions. Les clés ont une longueur maximale de 512 caractères, et les clés dépassant la longueur maximale entraînent l’échec de l’action.
- `path` : **Obligatoire** Chemin(s) d’accès sur l’exécuteur à mettre en cache ou à restaurer.
  - Vous pouvez spécifier un chemin d’accès unique ou en ajouter plusieurs sur des lignes distinctes. Par exemple :

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Vous pouvez spécifier des répertoires ou des fichiers individuels, et les modèles Glob sont pris en charge.
  - Vous pouvez spécifier des chemins d’accès absolus ou relatifs au répertoire de l’espace de travail.
- `restore-keys` : **Facultatif** Chaîne contenant d’autres clés de restauration, chacune placée sur une nouvelle ligne. Si aucune correspondance dans le cache n’a lieu pour `key`, ces clés de restauration sont utilisées séquentiellement dans l’ordre fourni pour trouver et restaurer un cache. Par exemple :

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### Paramètres de sortie pour l’action `cache`

- `cache-hit` : Valeur booléenne indiquant une correspondance exacte trouvée pour la clé.

### Correspondances dans le cache et échecs
Quand `key` correspond exactement à un cache existant, il s’agit d’une _correspondance dans le cache_, et l’action restaure les fichiers mis en cache dans le répertoire `path`.

Quand `key` ne correspond pas à un cache existant, il s’agit d’une _absence dans le cache_, et un nouveau cache est automatiquement créé si le travail se termine correctement.

Quand une absence dans le cache se produit, l’action recherche également des correspondances dans vos `restore-keys` spécifiées :

1. Si vous fournissez des `restore-keys`, l’action `cache` recherche de manière séquentielle les caches qui correspondent à la liste de `restore-keys`.
   - Lorsqu’il existe une correspondance exacte, l’action restaure les fichiers du cache dans le répertoire `path`.
   - S’il n’existe aucune correspondance exacte, l’action recherche des correspondances partielles des clés de restauration. Lorsque l’action trouve une correspondance partielle, le cache le plus récent est restauré dans le répertoire `path`.
1. L’action `cache` se termine et l’étape suivante du travail s’exécute.
1. Si le travail se termine correctement, l’action crée automatiquement un nouveau cache avec le contenu du répertoire `path`.

Pour une explication plus détaillée du processus correspondance du cache, consultez « [Correspondance d’une clé de cache](#matching-a-cache-key) ».

### Exemple d’utilisation de l’action `cache`

Cet exemple crée un cache en cas de changement des packages du fichier `package-lock.json` ou du système d’exploitation de l’exécuteur. La clé de cache utilise des contextes et des expressions pour générer une clé qui inclut le système d’exploitation de l’exécuteur et un hachage SHA-256 du fichier `package-lock.json`.

```yaml{:copy}
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

### Utilisation de contextes pour créer des clés de cache

Une clé de cache peut inclure les contextes, fonctions, littéraux et opérateurs pris en charge par {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts) » et « [Expressions](/actions/learn-github-actions/expressions) ».

L’utilisation d’expressions pour créer une clé (`key`) vous permet de créer automatiquement un cache lorsque des dépendances changent.

Par exemple, vous pouvez créer une `key` à l’aide d’une expression qui calcule le hachage d’un fichier npm `package-lock.json`. Ainsi, lorsque les dépendances qui composent le fichier `package-lock.json` changent, la clé du cache change et un nouveau cache est automatiquement créé.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} évalue l’expression `hash "package-lock.json"` pour dériver la clé (`key`) finale.

```yaml
npm-d5ea0750
```

### Utilisation de la sortie de l’action `cache`

Vous pouvez utiliser la sortie de l’action `cache` pour effectuer quelque chose en fonction de l’occurrence d’une correspondance dans le cache ou d’une absence dans le cache. Quand une correspondance exacte est trouvée pour un cache pour l’élément `key` spécifié, la sortie `cache-hit` est définie sur `true`.

Dans l’exemple de workflow ci-dessus, une étape répertorie l’état des modules Node si une absence dans le cache s’est produite :

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Correspondance d’une clé de cache

L’action `cache` recherche d’abord des correspondances dans le cache pour `key` et dans le cache _version_ dans la branche contenant l’exécution du workflow. S’il n’y a pas d’accès, il recherche `restore-keys` et la _version_. S’il n’y a toujours aucun accès dans la branche actuelle, l’action `cache` retente les mêmes étapes sur la branche par défaut. Notez que les restrictions d’étendue s’appliquent pendant la recherche. Pour plus d’informations, consultez « [Restrictions relatives à l’accès à un cache](#restrictions-for-accessing-a-cache) ».

La version du cache est un moyen de marquer un cache avec les métadonnées de `path` et de l’outil de compression utilisé lors de la création du cache. Cela garantit que l’exécution du workflow correspond de manière unique à un cache qu’il peut réellement décompresser et utiliser. Pour plus d’informations, consultez [Version du cache](https://github.com/actions/cache#cache-version) dans la documentation Cache Actions.

`restore-keys` vous permet de spécifier une liste de clés de restauration alternatives à utiliser en cas d’absence dans le cache sur `key`. Vous pouvez créer plusieurs clés de restauration classées de la plus spécifique à la moins spécifique. L’action `cache` recherche les `restore-keys` dans un ordre séquentiel. Lorsqu’une clé n’a pas de correspondance directe, l’action recherche les clés ayant comme préfixe la clé de restauration. S’il existe plusieurs correspondances partielles pour une clé de restauration, l’action retourne le dernier cache créé.

### Exemple utilisant plusieurs clés de restauration

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

L’exécuteur évalue les expressions, qui sont résolues en ces `restore-keys` :

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

La clé de restauration `npm-feature-` correspond à n’importe quelle clé qui commence par la chaîne `npm-feature-`. Par exemple, les deux clés `npm-feature-fd3052de` et `npm-feature-a9b253ff` correspondent à la clé de restauration. Le cache ayant la date de création la plus récente est utilisé. Dans cet exemple, les clés sont recherchées dans l’ordre suivant :

1. **`npm-feature-d5ea0750`** correspond à un hachage spécifique.
1. **`npm-feature-`** correspond aux clés de cache ayant comme préfixe `npm-feature-`.
1. **`npm-`** correspond à n’importe quelle clé de cache ayant comme préfixe `npm-`.

#### Exemple de priorité de recherche

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

Par exemple, si une demande de tirage contient une branche `feature` et cible la branche par défaut (`main`), l’action recherche `key` et `restore-keys` dans l’ordre suivant :

1. Clé `npm-feature-d5ea0750` dans la branche `feature`
1. Clé `npm-feature-` dans la branche `feature`
1. Clé `npm-` dans la branche `feature`
1. Clé `npm-feature-d5ea0750` dans la branche `main`
1. Clé `npm-feature-` dans la branche `main`
1. Clé `npm-` dans la branche `main`

## Limites d’utilisation et stratégie d’éviction

{% data variables.product.prodname_dotcom %} supprime toutes les entrées de cache qui n’ont pas été consultées depuis plus de 7 jours. Il n’existe aucune limite au nombre de caches que vous pouvez stocker, mais la taille totale de tous les caches d’un dépôt est limitée{% ifversion actions-cache-policy-apis %}. Par défaut, la limite est de 10 Go par dépôt, mais cette limite peut différer selon les stratégies définies par les propriétaires ou administrateurs de dépôt de votre entreprise.{% else %} à 10 Go.{% endif %} 

{% data reusables.actions.cache-eviction-process %} {% ifversion actions-cache-ui %}Le processus d’éviction du cache peut provoquer un vidage du cache, où les caches sont créés et supprimés à une fréquence élevée. Pour limiter ce problème, vous pouvez passer en revue les caches d’un référentiel et prendre des mesures correctives, notamment la suppression de la mise en cache de workflows spécifiques. Pour plus d’informations, consultez « [Gestion des caches](#managing-caches) ». {% endif %}{% ifversion actions-cache-admin-ui %} Vous pouvez également augmenter la taille limite du cache pour un référentiel. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository) ».

{% elsif actions-cache-policy-apis %}

Pour plus d’informations sur la modification des stratégies pour la limite de taille de cache du référentie, consultez « [Application des stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise) » et « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un référentiel](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository) ».

{% endif %}

{% ifversion actions-cache-management %}

## Gestion des caches

{% ifversion actions-cache-ui %}

Pour gérer les caches créés à partir de vos workflows, vous pouvez :

- Afficher la liste de toutes les entrées de cache pour un référentiel.
- Filtrer et trier la liste des caches à l’aide de métadonnées spécifiques telles que la taille du cache, l’heure de création ou l’heure du dernier accès.
- Supprimer les entrées de cache d’un référentiel.
- Surveiller l’utilisation du cache d’agrégation pour les référentiels et les organisations.

Il existe plusieurs façons de gérer les caches de vos référentiels :

- Utilisation de l’interface web {% data variables.product.prodname_dotcom %}, comme indiqué ci-dessous.
- Utilisation de l’API REST. Pour plus d’informations, consultez la documentation de l’API REST « [{% data variables.product.prodname_actions %} Cache](/rest/actions/cache) ».
- Installation d’une extension {% data variables.product.prodname_cli %} pour gérer vos caches à partir de la ligne de commande. Pour plus d’informations, consultez l’extension [gh-actions-cache](https://github.com/actions/gh-actions-cache).

{% else %}

Vous pouvez utiliser l’API REST {% data variables.product.product_name %} pour gérer vos caches. {% ifversion actions-cache-list-delete-apis %}Vous pouvez utiliser l’API pour lister et supprimer des entrées de cache ainsi que pour voir l’utilisation du cache.{% elsif actions-cache-management %}Pour le moment, vous pouvez utiliser l’API afin de voir l’utilisation du cache mais d’autres fonctionnalités sont attendues dans les prochaines mises à jour.{% endif %} Pour plus d’informations, consultez « [{% data variables.product.prodname_actions %} Cache](/rest/actions/cache) » et la documentation de l’API REST.

Vous pouvez également installer une extension {% data variables.product.prodname_cli %} pour gérer vos caches à partir de la ligne de commande. Pour plus d’informations sur l’extension, consultez [la documentation sur les extensions](https://github.com/actions/gh-actions-cache#readme). Pour plus d’informations sur les extensions {% data variables.product.prodname_cli %}, consultez « [Utilisation des extensions GitHub CLI](/github-cli/github-cli/using-github-cli-extensions) ».

{% endif %}

{% ifversion actions-cache-ui %}

### Affichage des entrées de cache

Vous pouvez utiliser l’interface web pour afficher une liste des entrées de cache d’un référentiel. Dans la liste des caches, vous pouvez voir la quantité d’espace disque utilisée par chaque cache, la date de création du cache et la date de la dernière utilisation du cache.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. Passez en revue la liste des entrées de cache pour le référentiel.

   * Pour rechercher les entrées de cache utilisées pour une branche spécifique, cliquez sur le menu déroulant **Branche** et sélectionnez une branche. La liste des caches affiche tous les caches utilisés pour la branche sélectionnée.
   * Pour rechercher des entrées de cache avec une clé de cache spécifique, utilisez la syntaxe `key: key-name` dans le champ **Filtrer les caches**. La liste des caches affiche les caches de toutes les branches où la clé a été utilisée.

   ![Capture d’écran de la liste des entrées de cache](/assets/images/help/repository/actions-cache-entry-list.png)

### Suppression d’entrées de cache

Les utilisateurs ayant un accès `write` à un référentiel utiliser l’interface web {% data variables.product.prodname_dotcom %} pour supprimer les entrées de cache.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. À droite de l’entrée du cache que vous souhaitez supprimer, cliquez sur {% octicon "trash" aria-label="The trash icon" %}. 

   ![Capture d’écran de la liste des entrées de cache](/assets/images/help/repository/actions-cache-delete.png)

{% endif %}

{% endif %}
