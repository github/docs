---
title: Démarrage rapide de l’API REST GitHub
intro: 'Découvrez comment bien démarrer avec l’API REST {% data variables.product.prodname_dotcom %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
topics:
  - API
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 001c4e3291e697be034579525d9f0bc6da8c0c88
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192880'
---
Cet article explique comment rapidement bien démarrer avec l’API REST {% data variables.product.prodname_dotcom %} à l’aide de {% data variables.product.prodname_cli %}, JavaScript ou cURL. Pour obtenir un guide plus détaillé, consultez [Bien démarrer avec l’API REST](/rest/guides/getting-started-with-the-rest-api) ».

{% cli %}

## Bien démarrer avec {% data variables.product.prodname_cli %}

### Utilisation de {% data variables.product.prodname_cli %} dans la ligne de commande

{% data variables.product.prodname_cli %} constitue la manière la plus facile d’utiliser l’API REST {% data variables.product.prodname_dotcom %} à partir de la ligne de commande.

1. Installez {% data variables.product.prodname_cli %} si vous ne l’avez pas encore fait. Pour obtenir des instructions d’installation, consultez le dépôt [{% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).
1. Utilisez la sous-commande `auth login` pour vous authentifier auprès de {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez la [documentation sur la sous-commande {% data variables.product.prodname_cli %} `auth login`](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Utilisez la sous-commande `api` pour effectuer votre requête d’API. Pour plus d’informations, consultez la [documentation sur la sous-commande {% data variables.product.prodname_cli %} `api`](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Utilisation de {% data variables.product.prodname_cli %} dans {% data variables.product.prodname_actions %}

Vous pouvez aussi utiliser {% data variables.product.prodname_cli %} dans vos workflows {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Utilisation de l’interface CLI de GitHub dans des workflows](/actions/using-workflows/using-github-cli-in-workflows) ».

Au lieu d’utiliser la commande `gh auth login`, passez un jeton d’accès en tant que variable d’environnement appelée `GH_TOKEN`. {% data variables.product.prodname_dotcom %} vous recommande d’utiliser le jeton `GITHUB_TOKEN` intégré au lieu de créer un jeton. Si ce n’est pas possible, stockez votre jeton sous forme de secret et remplacez `GITHUB_TOKEN` dans l’exemple ci-dessous par le nom de votre secret. Pour plus d’informations sur `GITHUB_TOKEN`, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ». Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

Si vous vous authentifiez avec une {% data variables.product.prodname_github_app %}, vous pouvez créer un jeton d’accès d’installation au sein de votre workflow :

1. Stockez l’ID de votre {% data variables.product.prodname_github_app %} sous forme de secret. Dans l’exemple suivant, remplacez `APP_ID` par le nom du secret. Vous pouvez trouver votre ID d’application dans la page Paramètres de votre application ou via l’API. Pour plus d’informations, consultez « [Applications](/rest/apps/apps#get-an-app) » dans la documentation de l’API REST. Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».
1. Générez une clé privée pour votre application. Stockez le contenu du fichier obtenu dans un secret. (Stockez l’intégralité du contenu du fichier, y compris `-----BEGIN RSA PRIVATE KEY-----` et `-----END RSA PRIVATE KEY-----`.) Dans l’exemple suivant, remplacez `APP_PEM` par le nom du secret. Pour plus d’informations, consultez « [Authentification avec des {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key) ».
1. Ajoutez une étape pour générer un jeton, puis utilisez ce jeton au lieu de `GITHUB_TOKEN`. Notez que ce jeton expire au bout de 60 minutes. Par exemple :

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

## Bien démarrer avec JavaScript

Vous pouvez utiliser Octokit.js pour interagir avec l’API REST {% data variables.product.prodname_dotcom %} dans vos scripts JavaScript. Pour plus d’informations, consultez [le fichier Lisez-moi d’Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Utilisation d’Octokit.js

1. Créez un jeton d’accès. Par exemple, créez un {% data variables.product.pat_generic %} ou un jeton d’accès utilisateur-à-serveur {% data variables.product.prodname_github_app %}. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) » ou « [Identification et autorisation des utilisateurs pour les applications GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps) ».

   {% warning %}

   **Avertissement** : Considérez votre jeton d’accès comme un mot de passe.

   Pour sécuriser votre jeton, vous pouvez stocker votre jeton sous forme de secret et exécuter votre script par le biais de {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez la section « [Utilisation d’Octokit.js dans {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions) ».

   {%- ifversion fpt or ghec %}

   Vous pouvez aussi stocker votre jeton sous forme de secret {% data variables.product.prodname_codespaces %} et exécuter votre script dans {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».{% endif %}

   Si ces options ne sont pas possibles, envisagez d’utiliser un autre service comme l’[interface CLI 1Password](https://developer.1password.com/docs/cli/secret-references/) pour stocker votre jeton de manière sécurisée.

   {% endwarning %}

1. Installez `octokit`. Par exemple : `npm install octokit`. Pour découvrir d’autres manières d’installer ou charger `octokit`, consultez [le fichier Lisez-moi d’Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Importez `octokit` dans votre script. Par exemple : `import { Octokit } from "octokit";`. Pour découvrir d’autres manières d’importer `octokit`, consultez [le fichier Lisez-moi d’Octokit.js](https://github.com/octokit/octokit.js/#readme).
1. Créez une instance de `Octokit` avec votre jeton. Remplacez `YOUR-TOKEN` par votre jeton.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Utilisez `octokit.request` pour exécuter votre requête. Envoyez la méthode HTTP et le chemin en tant que premier argument. Spécifiez tous les paramètres de chemin, de requête et de corps dans un objet en tant que deuxième argument. Par exemple, dans la requête suivante, la méthode HTTP est `GET`, le chemin est `/repos/{owner}/{repo}/issues` et les paramètres sont `owner: "octocat"` et `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Utilisation d’Octokit.js dans {% data variables.product.prodname_actions %}

Vous pouvez aussi exécuter vos scripts JavaScript dans vos workflows {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

{% data variables.product.prodname_dotcom %} vous recommande d’utiliser le jeton `GITHUB_TOKEN` intégré au lieu de créer un jeton. Si ce n’est pas possible, stockez votre jeton sous forme de secret et remplacez `GITHUB_TOKEN` dans l’exemple ci-dessous par le nom de votre secret. Pour plus d’informations sur `GITHUB_TOKEN`, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ». Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

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
    permissions:
      issues: read
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
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Exemple de script JavaScript, avec le chemin de fichier `.github/actions-scripts/use-the-api.mjs` :

```javascript
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.TOKEN
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "octocat",
      repo: "Spoon-Knife",
    });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

Si vous vous authentifiez avec une {% data variables.product.prodname_github_app %}, vous pouvez créer un jeton d’accès d’installation au sein de votre workflow :

1. Stockez l’ID de votre {% data variables.product.prodname_github_app %} sous forme de secret. Dans l’exemple suivant, remplacez `APP_ID` par le nom du secret. Vous pouvez trouver votre ID d’application dans la page Paramètres de votre application ou via l’API d’application. Pour plus d’informations, consultez « [Applications](/rest/apps/apps#get-an-app). » Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».
1. Générez une clé privée pour votre application. Stockez le contenu du fichier obtenu dans un secret. (Stockez l’intégralité du contenu du fichier, y compris `-----BEGIN RSA PRIVATE KEY-----` et `-----END RSA PRIVATE KEY-----`.) Dans l’exemple suivant, remplacez `APP_PEM` par le nom du secret. Pour plus d’informations, consultez « [Authentification avec des {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key) ».
1. Ajoutez une étape pour générer un jeton, puis utilisez ce jeton au lieu de `GITHUB_TOKEN`. Notez que ce jeton expire au bout de 60 minutes. Par exemple :

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
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

      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

{% endjavascript %}

{% curl %}

## Bien démarrer avec cURL

### Utilisation de cURL dans la ligne de commande

{% note %}

**Note :** Si vous voulez effectuer des requêtes d’API à partir de la ligne de commande, {% data variables.product.prodname_dotcom %} vous recommande d’utiliser {% data variables.product.prodname_cli %}, ce qui simplifie l’authentification et les requêtes. Pour plus d’informations sur la prise en main de l’API REST à l’aide de {% data variables.product.prodname_cli %}, consultez la version {% data variables.product.prodname_cli %} de cet article.

{% endnote %}

1. Installez cURL s’il n’est pas déjà installé sur votre ordinateur. Pour vérifier si cURL est installé, exécutez `curl --version` dans la ligne de commande. Si la sortie correspond à des informations sur la version de cURL, cela signifie que cURL est installé. Si vous recevez un message comme `command not found: curl`, vous avez besoin de télécharger et d’installer cURL. Pour plus d’informations, consultez [la page de téléchargement du projet cURL](https://curl.se/download.html).
1. Créez un jeton d’accès. Par exemple, créez un {% data variables.product.pat_generic %} ou un jeton d’accès utilisateur-à-serveur {% data variables.product.prodname_github_app %}. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) » ou « [Identification et autorisation des utilisateurs pour les applications GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps) ».

   {% warning %}

   **Avertissement** : Considérez votre jeton d’accès comme un mot de passe.

   {%- ifversion fpt or ghec %}

   Pour sécuriser votre jeton, vous pouvez aussi le stocker sous forme de secret {% data variables.product.prodname_codespaces %} et utiliser la ligne de commande dans {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».{% endif %}

   Vous pouvez aussi utiliser {% data variables.product.prodname_cli %} au lieu de cURL. {% data variables.product.prodname_cli %} s’occupe de l’authentification pour vous. Pour plus d’informations, consultez la version {% data variables.product.prodname_cli %} de cette page.

   Si ces options ne sont pas possibles, envisagez d’utiliser un autre service comme l’[interface CLI 1Password](https://developer.1password.com/docs/cli/secret-references/) pour stocker votre jeton de manière sécurisée.

   {% endwarning %}

1. Utilisez la commande `cURL` pour effectuer votre requête. Passez votre jeton dans un en-tête `Authorization`. Remplacez `YOUR-TOKEN` par votre jeton.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   **Remarque :** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### Utilisation de cURL dans {% data variables.product.prodname_actions %}

Vous pouvez aussi utiliser cURL dans vos workflows {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_dotcom %} vous recommande d’utiliser le jeton `GITHUB_TOKEN` intégré au lieu de créer un jeton. Si ce n’est pas possible, stockez votre jeton sous forme de secret et remplacez `GITHUB_TOKEN` dans l’exemple ci-dessous par le nom de votre secret. Pour plus d’informations sur `GITHUB_TOKEN`, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ». Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

Si vous vous authentifiez avec une {% data variables.product.prodname_github_app %}, vous pouvez créer un jeton d’accès d’installation au sein de votre workflow :

1. Stockez l’ID de votre {% data variables.product.prodname_github_app %} sous forme de secret. Dans l’exemple suivant, remplacez `APP_ID` par le nom du secret. Vous pouvez trouver votre ID d’application dans la page Paramètres de votre application ou via l’API d’application. Pour plus d’informations, consultez « [Applications](/rest/apps/apps#get-an-app). » Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».
1. Générez une clé privée pour votre application. Stockez le contenu du fichier obtenu dans un secret. (Stockez l’intégralité du contenu du fichier, y compris `-----BEGIN RSA PRIVATE KEY-----` et `-----END RSA PRIVATE KEY-----`.) Dans l’exemple suivant, remplacez `APP_PEM` par le nom du secret. Pour plus d’informations, consultez « [Authentification avec des {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key) ».
1. Ajoutez une étape pour générer un jeton, puis utilisez ce jeton au lieu de `GITHUB_TOKEN`. Notez que ce jeton expire au bout de 60 minutes. Par exemple :

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Étapes suivantes

Pour obtenir un guide plus détaillé, consultez [Bien démarrer avec l’API REST](/rest/guides/getting-started-with-the-rest-api) ».
