---
title: Prise en main de l’API REST
intro: 'Découvrez comment utiliser l’API REST {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Using the API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66620b01bb488f8c74111b56255ff06702e402e8
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184260'
---
## À propos de l’API REST {% data variables.product.prodname_dotcom %}

Cet article explique comment utiliser l’API REST {% data variables.product.prodname_dotcom %} à l’aide de {% data variables.product.prodname_cli %}, JavaScript ou cURL. Pour obtenir un guide de démarrage rapide, consultez « [Démarrage rapide pour l’API REST GitHub](/rest/quickstart) ».

Quand vous effectuez une requête avec l’API REST, vous spécifiez une méthode HTTP et un chemin. De plus, vous pouvez éventuellement spécifier des en-têtes de demande et des paramètres de chemin, de requête ou de corps. L’API retourne le code d’état de la réponse, les en-têtes de réponse et éventuellement un corps de réponse.

La documentation de référence de l’API REST décrit la méthode HTTP, le chemin et les paramètres de chaque opération. Elle présente aussi des exemples de requêtes et de réponses pour chaque opération. Pour plus d’informations, consultez la [documentation de référence sur REST](/rest).

Pour plus d’informations sur les API de {% data variables.product.company_short %}, consultez « [À propos des API de {% data variables.product.company_short %}](/developers/overview/about-githubs-apis) ».

## Création d’une requête

Pour effectuer une requête, recherchez d’abord la méthode HTTP et le chemin de l’opération que vous voulez utiliser. Par exemple, l’opération « Get Octocat » utilise la méthode `GET` et le chemin `/octocat`. Pour obtenir la documentation de référence complète de cette opération, consultez « [Get Octocat](/rest/meta#get-octocat) ».

{% cli %}

{% note %}

**Remarque** : Vous devez installer {% data variables.product.prodname_cli %} pour utiliser les commandes mentionnées dans les exemples {% data variables.product.prodname_cli %}. Pour obtenir des instructions d’installation, consultez le dépôt [{% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).

{% endnote %}

Si vous n’êtes pas déjà authentifié auprès de {% data variables.product.prodname_cli %}, vous devez utiliser la sous-commande `gh auth login` pour vous authentifier avant d’effectuer toute requête. Pour plus d’informations, consultez « [Authentification](#authenticating) ».

Pour effectuer une requête à l’aide de {% data variables.product.prodname_cli %}, utilisez la sous-commande `api` avec le chemin. Utilisez l’indicateur `--method` ou `-X` pour spécifier la méthode.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Remarque** : Vous devez installer et importer `octokit` pour utiliser la bibliothèque Octokit.js utilisée dans les exemples JavaScript. Pour plus d’informations, consultez [le fichier Lisez-moi d’Octokit.js](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

Pour effectuer une requête à l’aide de JavaScript, vous pouvez utiliser Octokit.js. Pour plus d’informations, consultez [le fichier Lisez-moi d’Octokit.js](https://github.com/octokit/octokit.js/#readme).

Tout d’abord, créez une instance de `Octokit`.{% ifversion ghes or ghae %} Définissez l’URL de base sur `{% data variables.product.api_url_code %}`. Remplacez `[hostname]` par le nom de {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

Ensuite, utilisez la méthode `request` pour effectuer des requêtes. Passez la méthode HTTP et le chemin en tant que premier argument.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Ajoutez l’URL de base de l’API REST {% data variables.product.prodname_dotcom %}, `{% data variables.product.api_url_code %}`, au début du chemin pour obtenir l’URL complète : `{% data variables.product.api_url_code %}/octocat`.{% ifversion ghes or ghae %} Remplacez `[hostname]` par le nom de {% data variables.location.product_location %}.{% endif %}

Utilisez la commande `curl` dans votre ligne de commande. Utilisez l’indicateur `--request` ou `-X` suivi de la méthode HTTP. Utilisez l’indicateur `--url` suivi de l’URL complète.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Remarque** : Si vous obtenez un message similaire à « Commande introuvable : curl », vous devrez peut-être télécharger et installer cURL. Pour plus d’informations, consultez [la page de téléchargement du projet cURL](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Poursuivez votre lecture pour savoir comment vous authentifier, envoyer des paramètres et utiliser la réponse.

## Authentification

De nombreuses opérations nécessitent une authentification ou retournent des informations supplémentaires si vous êtes authentifié. De plus, vous pouvez effectuer davantage de requêtes par heure quand vous êtes authentifié.{% cli %} Bien que certaines opérations d’API REST soient accessibles sans authentification, vous devez vous authentifier auprès de {% data variables.product.prodname_cli %} pour utiliser la sous-commande `api`.{% endcli %}

### À propos des jetons

Vous pouvez authentifier votre requête en ajoutant un jeton.

Si vous voulez utiliser l’API REST {% data variables.product.company_short %} à des fins personnelles, vous pouvez créer un {% data variables.product.pat_generic %}. Les opérations de l’API REST utilisées dans cet article nécessitent l’étendue `repo` pour les {% data variables.product.pat_v1_plural %}{% ifversion pat-v2 %} ou, sauf indication contraire, un accès en lecture seule aux dépôts publics pour les {% data variables.product.pat_v2 %}{% endif %}. Les autres opérations peuvent nécessiter d’autres étendues{% ifversion pat-v2%} ou autorisations{% endif %}. Pour plus d’informations sur la création d’un {% data variables.product.pat_generic %}, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

Si vous voulez utiliser l’API au nom d’une organisation ou d’un autre utilisateur, {% data variables.product.company_short %} vous recommande d’utiliser une {% data variables.product.prodname_github_app %}. Si une opération est disponible pour {% data variables.product.prodname_github_apps %}, la documentation de référence sur REST pour cette opération indique « Fonctionne avec GitHub Apps ». Les opérations d’API REST utilisées dans cet article nécessitent des autorisations d’accès en lecture et écriture `issues` pour {% data variables.product.prodname_github_apps %}. D’autres opérations peuvent nécessiter des autorisations différentes. Pour plus d’informations, consultez « [Création d’une application GitHub](/developers/apps/building-github-apps/creating-a-github-app) », « [Authentification avec les applications GitHub](/developers/apps/building-github-apps/authenticating-with-github-apps) et « [Identification et autorisation des utilisateurs pour les applications GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps) ».

Si vous voulez utiliser l’API dans un workflow {% data variables.product.prodname_actions %}, {% data variables.product.company_short %} vous recommande d’être authentifié avec le jeton `GITHUB_TOKEN` intégré au lieu de créer un jeton. Vous pouvez accorder des autorisations au `GITHUB_TOKEN` avec la clé `permissions`. Pour plus d’informations, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) ».

### Exemple d’authentification

{% cli %}

Avec {% data variables.product.prodname_cli %}, vous n’avez pas besoin de créer un jeton d’accès à l’avance. Utilisez la sous-commande `auth login` pour vous authentifier auprès de {% data variables.product.prodname_cli %} :

```shell
gh auth login
```

Vous pouvez utiliser l’indicateur `--scopes` pour spécifier les étendues voulues. Si vous voulez vous authentifier avec un jeton que vous avez créé, vous pouvez utiliser l’indicateur `--with-token`. Pour plus d’informations, consultez la [documentation sur la sous-commande {% data variables.product.prodname_cli %} `auth login`](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Avertissement** : Considérez votre jeton d’accès comme un mot de passe.

Pour sécuriser votre jeton, vous pouvez stocker votre jeton sous forme de secret et exécuter votre script par le biais de {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

{% ifversion ghec or fpt %}Vous pouvez aussi stocker votre jeton sous forme de secret {% data variables.product.prodname_codespaces %} et exécuter votre script dans {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».{% endif %}

Si ces options ne sont pas possibles, envisagez d’utiliser un autre service comme l’[interface CLI 1Password](https://developer.1password.com/docs/cli/secret-references/) pour stocker votre jeton de manière sécurisée.

{% endwarning %}

Pour vous authentifier auprès de la bibliothèque Octokit.js, vous pouvez passer votre jeton quand vous créez une instance de `Octokit`. Remplacez `YOUR-TOKEN` par votre jeton.{% ifversion ghes or ghae %} Remplacez `[hostname]` par le nom de {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Avertissement** : Considérez votre jeton d’accès comme un mot de passe.

Pour sécuriser votre compte, vous pouvez utiliser {% data variables.product.prodname_cli %} au lieu de cURL. {% data variables.product.prodname_cli %} s’occupe de l’authentification pour vous. Pour plus d’informations, consultez la version {% data variables.product.prodname_cli %} de cette page.

{% ifversion ghec or fpt %}Vous pouvez aussi stocker votre jeton sous forme de secret {% data variables.product.prodname_codespaces %} et utiliser la ligne de commande dans {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».{% endif %}

Si ces options ne sont pas possibles, envisagez d’utiliser un autre service comme l’[interface CLI 1Password](https://developer.1password.com/docs/cli/secret-references/) pour stocker votre jeton de manière sécurisée.

{% endwarning %}

Avec cURL, vous allez envoyer un en-tête `Authorization` avec votre jeton. Remplacez `YOUR-TOKEN` par votre jeton :

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

**Remarque :** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### Exemple d’authentification pour {% data variables.product.prodname_actions %}

{% cli %}

Vous pouvez aussi utiliser le mot clé `run` pour exécuter des commandes {% data variables.product.prodname_cli %} dans vos workflows {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

Au lieu d’utiliser la commande `gh auth login`, passez votre jeton en tant que variable d’environnement appelée `GH_TOKEN`. {% data variables.product.prodname_dotcom %} vous recommande de vous authentifier avec le jeton `GITHUB_TOKEN` intégré au lieu de créer un jeton. Si ce n’est pas possible, stockez votre jeton sous forme de secret et remplacez `GITHUB_TOKEN` dans l’exemple ci-dessous par le nom de votre secret. Pour plus d’informations sur `GITHUB_TOKEN`, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ». Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api /octocat
```

{% endcli %}

{% javascript %}

Vous pouvez aussi utiliser le mot clé `run` pour exécuter vos scripts JavaScript dans vos workflows {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

{% data variables.product.prodname_dotcom %} vous recommande de vous authentifier avec le jeton `GITHUB_TOKEN` intégré au lieu de créer un jeton. Si ce n’est pas possible, stockez votre jeton sous forme de secret et remplacez `GITHUB_TOKEN` dans l’exemple ci-dessous par le nom de votre secret. Pour plus d’informations sur `GITHUB_TOKEN`, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ». Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

L’exemple de workflow suivant effectue ceci :

1. Il extrait le contenu du dépôt.
1. Il configure Node.js.
1. Il installe `octokit`.
1. Il stocke la valeur de `GITHUB_TOKEN` sous forme de variable d’environnement appelée `TOKEN` et exécute `.github/actions-scripts/use-the-api.mjs`, qui peut accéder à cette variable d’environnement en tant que `process.env.TOKEN`.

Exemple de workflow :

```yaml
on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          node .github/actions-scripts/use-the-api.mjs
```

Exemple de script JavaScript, avec le chemin de fichier `.github/actions-scripts/use-the-api.mjs` :

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

Au lieu de stocker votre script dans un fichier distinct et de l’exécuter à partir de votre workflow, vous pouvez utiliser l’action `actions/github-script` pour exécuter un script. Pour plus d’informations, consultez le [fichier Lisez-moi actions/github-script](https://github.com/actions/github-script).

```yaml
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            await github.request('GET /octocat', {})
```

{% endjavascript %}

{% curl %}

Vous pouvez aussi utiliser le mot clé `run` pour exécuter des commandes cURL dans vos workflows {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

{% data variables.product.prodname_dotcom %} vous recommande de vous authentifier avec le jeton `GITHUB_TOKEN` intégré au lieu de créer un jeton. Si ce n’est pas possible, stockez votre jeton sous forme de secret et remplacez `GITHUB_TOKEN` dans l’exemple ci-dessous par le nom de votre secret. Pour plus d’informations sur `GITHUB_TOKEN`, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ». Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/octocat" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Utilisation d’en-têtes

La plupart des opérations spécifient que vous devez passer un en-tête `Accept` avec une valeur de `application/vnd.github+json`. D’autres opérations peuvent spécifier que vous devez envoyer un en-tête `Accept` différent ou des en-têtes supplémentaires.

{% cli %}

Pour envoyer un en-tête avec {% data variables.product.prodname_cli %}, utilisez l’indicateur `--header` ou `-H` suivi de l’en-tête au format `key: value`.

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

La bibliothèque Octokit.js passe automatiquement l’en-tête `Accept: application/vnd.github+json`. Pour passer des en-têtes supplémentaires ou un en-tête `Accept` différent, ajoutez une propriété `headers` à l’objet passé en tant que deuxième argument à la méthode `request`. La valeur de la propriété `headers` est un objet avec les noms d’en-tête en tant que clés et les valeurs d’en-tête en tant que valeurs. Par exemple, pour envoyer un en-tête `content-type` avec la valeur de `text/plain` :

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",{% ifversion api-date-versioning %}
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",{% endif %}
  },
});
```

{% endjavascript %}

{% curl %}

Pour envoyer un en-tête avec cURL, utilisez l’indicateur `--header` ou `-H` suivi de l’en-tête au format `key: value`.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## Utilisation de paramètres de chemin

Les paramètres de chemin modifient le chemin de l’opération. Par exemple, le chemin « Lister les problèmes d’un dépôt » est `/repos/{owner}/{repo}/issues`. Les accolades `{}` reflètent des paramètres de chemin que vous avez besoin de spécifier. Dans cet exemple, vous devez spécifier le propriétaire et le nom du dépôt. Pour accéder à la documentation de référence de cette opération, consultez « [Lister les problèmes d’un dépôt](/rest/issues/issues#list-repository-issues) ».

{% cli %}

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Pour que cette commande fonctionne pour {% data variables.location.product_location %}, remplacez `octocat/Spoon-Knife` par un dépôt appartenant à {% data variables.location.product_location %}. Sinon, réexécutez la commande `gh auth login` pour vous authentifier auprès de {% data variables.product.prodname_dotcom_the_website %} au lieu de {% data variables.location.product_location %}.

{% endnote %} {% endif %}

Pour obtenir les problèmes provenant du dépôt `octocat/Spoon-Knife`, remplacez `{owner}` par `octocat` et `{repo}` par `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Pour que cet exemple fonctionne pour {% data variables.location.product_location %}, remplacez `octocat/Spoon-Knife` par un dépôt appartenant à {% data variables.location.product_location %}. Sinon, créez une instance de `Octokit` et ne spécifiez pas `baseURL`.

{% endnote %} {% endif %}

Quand vous effectuez une requête avec Octokit.js, tous les paramètres, y compris les paramètres de chemin, sont passés dans un objet en tant que deuxième argument à la méthode `request`. Pour obtenir les problèmes provenant du dépôt `octocat/Spoon-Knife`, spécifiez `owner` en tant que `octocat` et `repo` en tant que `Spoon-Knife`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

Pour obtenir les problèmes provenant du dépôt `octocat/Spoon-Knife`, remplacez `{owner}` par `octocat` et `{repo}` par `Spoon-Knife`. Pour générer le chemin complet, ajoutez l’URL de base de l’API REST {% data variables.product.prodname_dotcom %}, `https://api.github.com`, au début : `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Si vous voulez utiliser {% data variables.location.product_location %} au lieu de {% data variables.product.prodname_dotcom_the_website %}, utilisez `{% data variables.product.api_url_code %}` au lieu de `https://api.github.com` et remplacez `[hostname]` par le nom de {% data variables.location.product_location %}. Remplacez `octocat/Spoon-Knife` par un dépôt appartenant à {% data variables.location.product_location %}.

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

L’opération retourne la liste des problèmes et des données sur chaque problème. Pour plus d’informations sur l’utilisation de la réponse, consultez la section « [Utilisation de la réponse](#using-the-response) ».

## Utilisation de paramètres de requête

Les paramètres de requête vous permettent de contrôler les données retournées pour une requête. Par exemple, un paramètre de requête peut vous permettre de spécifier le nombre d’éléments retournés quand la réponse est paginée.

Par défaut, l’opération « Lister les problèmes d’un dépôt » retourne trente problèmes, triés dans l’ordre décroissant par leur date de création. Vous pouvez utiliser le paramètre `per_page` pour renvoyer deux problèmes au lieu de 30. Vous pouvez utiliser le paramètre `sort` pour trier les problèmes par leur date de dernière mise à jour plutôt que leur date de création. Vous pouvez utiliser le paramètre `direction` pour trier les résultats dans l’ordre croissant plutôt que dans l’ordre décroissant.

{% cli %}

Pour {% data variables.product.prodname_cli %}, utilisez l’indicateur `-F` pour passer un paramètre qui correspond à un nombre, une valeur booléenne ou Null. Utilisez `-f` pour passer des paramètres de chaîne.

{% note %}

**Remarque** : Actuellement, {% data variables.product.prodname_cli %} n’accepte pas les paramètres qui correspondent à des tableaux. Pour plus d’informations, consultez [ce problème](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Quand vous effectuez une requête avec Octokit.js, tous les paramètres, y compris les paramètres de requête, sont passés dans un objet en tant que deuxième argument à la méthode `request`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
  sort: "updated",
  direction: "asc",
});
```

{% endjavascript %}

{% curl %}

Pour cURL, ajoutez un `?` à la fin du chemin, puis ajoutez le nom et la valeur de votre paramètre de requête sous la forme `parameter_name=value`. Séparez les paramètres de requête, quand il y en a plusieurs, par un `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

L’opération retourne la liste des problèmes et des données sur chaque problème. Pour plus d’informations sur l’utilisation de la réponse, consultez la section « [Utilisation de la réponse](#using-the-response) ».

## Utilisation de paramètres de corps

Les paramètres de corps vous permettent de passer des données supplémentaires à l’API. Par exemple, l’opération « Créer un problème » vous oblige à spécifier un titre pour le nouveau problème. Elle vous permet aussi de spécifier d’autres informations, comme le texte à placer dans le corps du problème. Pour obtenir la documentation de référence complète de cette opération, consultez « [Créer un problème](/rest/issues/issues#create-an-issue) ».

L’opération « Créer un problème » utilise le même chemin que l’opération « Lister les problèmes d’un dépôt » mentionnée dans les exemples ci-dessus, mais elle utilise une méthode `POST` au lieu d’une méthode `GET`.

{% cli %}

Pour {% data variables.product.prodname_cli %}, utilisez l’indicateur `-F` pour passer un paramètre qui correspond à un nombre, une valeur booléenne ou Null. Utilisez `-f` pour passer des paramètres de chaîne.

{% note %}

**Remarque** : Actuellement, {% data variables.product.prodname_cli %} n’accepte pas les paramètres qui correspondent à des tableaux. Pour plus d’informations, consultez [ce problème](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

Si vous utilisez un {% data variables.product.pat_v2 %}, vous devez remplacer `octocat/Spoon-Knife` par un dépôt qui vous appartient ou qui appartient à une organisation dont vous êtes membre. Votre jeton doit avoir accès à ce dépôt et avoir des autorisations en lecture et écriture pour les problèmes de dépôt. Pour plus d’informations sur la création d’un dépôt, consultez « [Créer un dépôt](/get-started/quickstart/create-a-repo) ». Pour plus d’informations sur l’octroi d’accès et d’autorisations à un {% data variables.product.pat_v2 %}, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

{% endnote %}

{% endif %}

Quand vous effectuez une requête avec Octokit.js, tous les paramètres, y compris les paramètres de corps, sont passés dans un objet en tant que deuxième argument à la méthode `request`.

```javascript
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  title: "Created with the REST API",
  body: "This is a test issue created by the REST API",
});
```

{% endjavascript %}

{% curl %}

{% ifversion pat-v2 %}

{% note %}

Si vous utilisez un {% data variables.product.pat_v2 %}, vous devez remplacer `octocat/Spoon-Knife` par un dépôt qui vous appartient ou qui appartient à une organisation dont vous êtes membre. Votre jeton doit avoir accès à ce dépôt et avoir des autorisations en lecture et écriture pour les problèmes de dépôt. Pour plus d’informations sur la création d’un dépôt, consultez « [Créer un dépôt](/get-started/quickstart/create-a-repo) ». Pour plus d’informations sur l’octroi d’accès et d’autorisations à un {% data variables.product.pat_v2 %}, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

{% endnote %}

{% endif %}

Pour cURL, utilisez l’indicateur `--data` pour passer les paramètres de corps dans un objet JSON.

```shell
curl --request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

L’opération crée un problème et retourne des données sur le nouveau problème. Dans la réponse, recherchez l’adresse `html_url` de votre problème et accédez à votre problème dans le navigateur. Pour plus d’informations sur l’utilisation de la réponse, consultez la section « [Utilisation de la réponse](#using-the-response) ».

## Utilisation de la réponse

### À propos du code et des en-têtes de réponse

Chaque requête retourne un code d’état HTTP qui indique la réussite de la réponse. Pour plus d’informations sur les codes de réponse, consultez [la documentation relative aux codes d’état de la réponse HTTP MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

De plus, la réponse inclut des en-têtes qui fournissent d’autres détails. Les en-têtes qui commencent par `X-` ou `x-` sont propres à {% data variables.product.company_short %}. Par exemple, les en-têtes `x-ratelimit-remaining` et `x-ratelimit-reset` vous indiquent le nombre de requêtes que vous pouvez effectuer pendant une période donnée.

{% cli %}

Pour voir le code d’état et les en-têtes, utilisez l’indicateur `--include` ou `--i` quand vous envoyez votre requête.

Par exemple, cette requête :

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

retourne le code de réponse et des en-têtes comme :

```shell
HTTP/2.0 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
Cache-Control: private, max-age=60, s-maxage=60
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Thu, 04 Aug 2022 19:56:41 GMT
Etag: W/"a63dfbcfdb73621e9d2e89551edcf9856731ced534bd7f1e114a5da1f5f73418"
Link: <https://api.github.com/repositories/1300192/issues?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=1&page=14817>; rel="last"
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Server: GitHub.com
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Vary: Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With
X-Accepted-Oauth-Scopes: repo
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Github-Api-Version-Selected: 2022-08-09
X-Github-Media-Type: github.v3; format=json
X-Github-Request-Id: 1C73:26D4:E2E500:1EF78F4:62EC2479
X-Oauth-Client-Id: 178c6fc778ccc68e1d6a
X-Oauth-Scopes: gist, read:org, repo, workflow
X-Ratelimit-Limit: 15000
X-Ratelimit-Remaining: 14996
X-Ratelimit-Reset: 1659645499
X-Ratelimit-Resource: core
X-Ratelimit-Used: 4
X-Xss-Protection: 0
```

Dans cet exemple, le code de réponse est `200`, ce qui indique que la requête est réussie.

{% endcli %}

{% javascript %}

Quand vous effectuez une requête avec Octokit.js, la méthode `request` retourne une promesse. Si la requête réussit, la promesse est résolue en objet qui inclut le code d’état HTTP de la réponse (`status`) et les en-têtes de réponse (`headers`). Si une erreur se produit, la promesse est résolue en objet qui inclut le code d’état HTTP de la réponse (`status`) et les en-têtes de réponse (`response.headers`).

Vous pouvez utiliser un bloc `try/catch` pour intercepter une erreur éventuelle. Par exemple, si la requête indiquée dans le script suivant réussit, le script journalise le code d’état et la valeur de l’en-tête `x-ratelimit-remaining`. Si la requête échoue, le script journalise le code d’état, la valeur de l’en-tête `x-ratelimit-remaining` et le message d’erreur.

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Pour voir le code d’état et les en-têtes, utilisez l’indicateur `--include` ou `--i` quand vous envoyez votre requête.

Par exemple, cette requête :

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

retourne le code de réponse et des en-têtes comme :

```shell
HTTP/2 200
server: GitHub.com
date: Thu, 04 Aug 2022 20:07:51 GMT
content-type: application/json; charset=utf-8
cache-control: public, max-age=60, s-maxage=60
vary: Accept, Accept-Encoding, Accept, X-Requested-With
etag: W/"7fceb7e8c958d3ec4d02524b042578dcc7b282192e6c939070f4a70390962e18"
x-github-media-type: github.v3; format=json
link: <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=7409>; rel="last"
access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
access-control-allow-origin: *
strict-transport-security: max-age=31536000; includeSubdomains; preload
x-frame-options: deny
x-content-type-options: nosniff
x-xss-protection: 0
referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
content-security-policy: default-src 'none'
x-ratelimit-limit: 15000
x-ratelimit-remaining: 14996
x-ratelimit-reset: 1659645535
x-ratelimit-resource: core
x-ratelimit-used: 4
accept-ranges: bytes
content-length: 4936
x-github-request-id: 14E0:4BC6:F1B8BA:208E317:62EC2715
```

Dans cet exemple, le code de réponse est `200`, ce qui indique que la requête est réussie.

{% endcurl %}

### À propos du corps de réponse

De nombreuses opérations retournent un corps de réponse. Sauf indication contraire, le corps de réponse est au format JSON. Par exemple, cette requête retourne la liste des problèmes et des données sur chacun d’eux :

{% cli %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2
```

{% endcli %}

{% javascript %}

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
});
```

{% endjavascript %}

{% curl %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

Contrairement à l’API GraphQL où vous spécifiez les informations que vous voulez, l’API REST renvoie généralement plus d’informations que nécessaire. Si vous le voulez, vous pouvez analyser la réponse pour extraire des éléments spécifiques d’informations.

{% cli %}

Par exemple, vous pouvez utiliser `>` pour rediriger la réponse vers un fichier :

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

Vous pouvez ensuite utiliser jq pour obtenir le titre et l’ID d’auteur de chaque problème :

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Les deux commandes précédentes retournent quelque chose comme ceci :

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Pour plus d’informations sur jq, consultez [la documentation de jq](https://stedolan.github.io/jq/) et [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

Par exemple, vous pouvez obtenir le titre et l’ID d’auteur de chaque problème :

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Par exemple, vous pouvez utiliser `>` pour rediriger la réponse vers un fichier :

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

Vous pouvez ensuite utiliser jq pour obtenir le titre et l’ID d’auteur de chaque problème :

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Les deux commandes précédentes retournent quelque chose comme ceci :

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Pour plus d’informations sur jq, consultez [la documentation de jq](https://stedolan.github.io/jq/) et [jq play](https://jqplay.org/).

{% endcurl %}

## Étapes suivantes

Cet article a montré comment lister et créer des problèmes dans un dépôt. En guise de pratique, essayez de commenter un problème, d’en modifier le titre ou de le fermer. Pour plus d’informations sur ces opérations, consultez « [Créer un commentaire de problème](/rest/issues#create-an-issue-comment) » et « [Mettre à jour un problème](/rest/issues/issues#update-an-issue) ».

Pour plus d’informations sur les opérations que vous pouvez utiliser, consultez la [documentation de référence sur REST](/rest).
