---
title: Quickstart for GitHub REST API
intro: 'Learn how to get started with the {% data variables.product.prodname_dotcom %} REST API.'
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
---

This article describes how to quickly get started with the {% data variables.product.prodname_dotcom %} REST API using {% data variables.product.prodname_cli %}, JavaScript, or `curl`. For a more detailed guide, see "[AUTOTITLE](/rest/guides/getting-started-with-the-rest-api)."

{% cli %}

## Getting started using {% data variables.product.prodname_cli %}

### Using {% data variables.product.prodname_cli %} in the command line

{% data variables.product.prodname_cli %} is the easiest way to use the {% data variables.product.prodname_dotcom %} REST API from the command line.

{% ifversion ghes or ghae %}
{% note %}

**Note:** The following example is intended for {% data variables.product.prodname_dotcom_the_website %}. If you'd prefer to try the example using {% data variables.product.product_name %}, you must replace `octocat/Spoon-Knife` with a repository on {% ifversion ghes %}your instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Alternatively, rerun the `gh auth login` command to authenticate to {% data variables.product.prodname_dotcom_the_website %} instead of {% ifversion ghes %}your instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %}.

{% endnote %}
{% endif %}

1. Install {% data variables.product.prodname_cli %} if you haven't installed it yet. For installation instructions, see the [{% data variables.product.prodname_cli %} repository](https://github.com/cli/cli#installation).
1. Use the `auth login` subcommand to authenticate to {% data variables.product.prodname_cli %}. For more information, see the [{% data variables.product.prodname_cli %} `auth login` documentation](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Use the `api` subcommand to make your API request. For more information, see the [{% data variables.product.prodname_cli %} `api` documentation](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Using {% data variables.product.prodname_cli %} in {% data variables.product.prodname_actions %}

You can also use {% data variables.product.prodname_cli %} in your {% data variables.product.prodname_actions %} workflows. For more information, see "[AUTOTITLE](/actions/using-workflows/using-github-cli-in-workflows)."

Instead of using the `gh auth login` command, pass an access token as an environment variable called `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recommends that you use the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)." For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

{% ifversion ghes or ghae %}
{% note %}

**Note:** The following example workflows are intended for {% data variables.product.prodname_dotcom_the_website %}. If you'd prefer to try the examples using {% data variables.product.product_name %}, you must replace `octocat/Spoon-Knife` with a repository on {% data variables.product.product_name %}.

{% endnote %}
{% endif %}

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

If you are authenticating with a {% data variables.product.prodname_github_app %}, you can create an installation access token within your workflow:

1. Store your {% data variables.product.prodname_github_app %}'s ID as a secret. In the following example, replace `APP_ID` with the name of the secret. You can find your app ID on the settings page for your app or through the API. For more information, see "[AUTOTITLE](/rest/apps/apps#get-an-app)" in the REST API documentation. For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following example, replace `APP_PEM` with the name of the secret. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)."
1. Add a step to generate a token, and use that token instead of `GITHUB_TOKEN`. Note that this token will expire after 60 minutes. For example:

   ```yaml
   {% ifversion ghes < 3.12 %}
   {% data reusables.actions.actions-not-certified-by-github-comment %}
   
   {% data reusables.actions.actions-use-sha-pinning-comment %}
   {% endif %}
   on:
     workflow_dispatch:
   jobs:
     track_pr:
       runs-on: ubuntu-latest
       steps:
         - name: Generate token
           id: generate_token
           uses: {% ifversion ghes < 3.12 %}tibdex/github-app-token@b62528385c34dbc9f38e5f4225ac829252d1ea92{% else %}actions/create-github-app-token@v1{% endif %}
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

## Getting started using JavaScript

You can use Octokit.js to interact with the {% data variables.product.prodname_dotcom %} REST API in your JavaScript scripts. For more information, see "[Scripting with the REST API and JavaScript](/rest/guides/scripting-with-the-rest-api-and-javascript)."

### Using Octokit.js

{% data reusables.rest-api.quickstart-location-javascript-admonition %}

1. Create an access token. For example, create a {% data variables.product.pat_generic %} or a {% data variables.product.prodname_github_app %} user access token. For more information, see "[Creating a {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" or "[Identifying and authorizing users for GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)."

   {% warning %}

   **Warning**: Treat your access token like a password.

   To keep your token secure, you can store your token as a secret and run your script through {% data variables.product.prodname_actions %}. For more information, see the "[Using Octokit.js in {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions)" section.

   {%- ifversion fpt or ghec %}

   You can also store your token as a {% data variables.product.prodname_codespaces %} secret and run your script in {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

   If these options are not possible, consider using another CLI service to store your token securely.

   {% endwarning %}

1. Install `octokit`. For example, `npm install octokit`. For other ways to install or load `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Import `octokit` in your script. For example, `import { Octokit } from "octokit";`. For other ways to import `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Create an instance of `Octokit` with your token. Replace `YOUR-TOKEN` with your token.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Use `octokit.request` to execute your request. Send the HTTP method and path as the first argument. Specify any path, query, and body parameters in an object as the second argument. For example, in the following request the HTTP method is `GET`, the path is `/repos/{owner}/{repo}/issues`, and the parameters are `owner: "octocat"` and `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Using Octokit.js in {% data variables.product.prodname_actions %}

You can also execute your JavaScript scripts in your {% data variables.product.prodname_actions %} workflows. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recommends that you use the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)." For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

{% data reusables.rest-api.quickstart-location-javascript-admonition %}

The following example workflow:

1. Checks out the repository content
1. Sets up Node.js
1. Installs `octokit`
1. Stores the value of `GITHUB_TOKEN` as an environment variable called `TOKEN` and runs `.github/actions-scripts/use-the-api.mjs`, which can access that environment variable as `process.env.TOKEN`

Example workflow:

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

Example JavaScript script, with the file path `.github/actions-scripts/use-the-api.mjs`:

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

If you are authenticating with a {% data variables.product.prodname_github_app %}, you can create an installation access token within your workflow:

1. Store your {% data variables.product.prodname_github_app %}'s ID as a secret. In the following example, replace `APP_ID` with the name of the secret. You can find your app ID on the settings page for your app or through the App API. For more information, see "[AUTOTITLE](/rest/apps/apps#get-an-app)." For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following example, replace `APP_PEM` with the name of the secret. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)."
1. Add a step to generate a token, and use that token instead of `GITHUB_TOKEN`. Note that this token will expire after 60 minutes. For example:

   ```yaml
   {% ifversion ghes < 3.12 %}
   {% data reusables.actions.actions-not-certified-by-github-comment %}
   
   {% data reusables.actions.actions-use-sha-pinning-comment %}
   {% endif %}
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
           uses: {% ifversion ghes < 3.12 %}tibdex/github-app-token@b62528385c34dbc9f38e5f4225ac829252d1ea92{% else %}actions/create-github-app-token@v1{% endif %}
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

## Getting started using `curl`

### Using `curl` in the command line

{% ifversion ghes or ghae %}
{% note %}

**Notes:**

- The following example is intended for {% data variables.product.prodname_dotcom_the_website %}. If you'd prefer to try the example using {% data variables.product.product_name %}, you must replace `https://api.github.com` with `{% data variables.product.api_url_code %}`, and replace `HOSTNAME` with the hostname for {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. You must also replace `octocat/Spoon-Knife` with a repository on {% data variables.product.product_name %}.
- If you want to make API requests from the command line, {% data variables.product.prodname_dotcom %} recommends that you use {% data variables.product.prodname_cli %}, which simplifies authentication and requests. For more information about getting started with the REST API using {% data variables.product.prodname_cli %}, see the {% data variables.product.prodname_cli %} version of this article.

{% endnote %}
{% endif %}

1. Install `curl` if it isn't already installed on your machine. To check if `curl` is installed, execute `curl --version` in the command line. If the output is information about the version of `curl`, it is installed. If you get a message similar to `command not found: curl`, you need to download and install `curl`. For more information, see [the curl project download page](https://curl.se/download.html).
1. Create an access token. For example, create a {% data variables.product.pat_generic %} or a {% data variables.product.prodname_github_app %} user access token. For more information, see "[Creating a {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" or "[Identifying and authorizing users for GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)."

   {% warning %}

   **Warning**: Treat your access token like a password.

   {%- ifversion fpt or ghec %}

   To keep your token secure, you can store your token as a {% data variables.product.prodname_codespaces %} secret and use the command line through {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

   You can also use {% data variables.product.prodname_cli %} instead of `curl`. {% data variables.product.prodname_cli %} will take care of authentication for you. For more information, see the {% data variables.product.prodname_cli %} version of this page.

   If these options are not possible, consider using another CLI service to store your token securely.

   {% endwarning %}

1. Use the `curl` command to make your request. Pass your token in an `Authorization` header. Replace `YOUR-TOKEN` with your token.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   **Note:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### Using `curl` commands in {% data variables.product.prodname_actions %}

You can also use `curl` commands in your {% data variables.product.prodname_actions %} workflows.

{% data variables.product.prodname_dotcom %} recommends that you use the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)." For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

{% ifversion ghes or ghae %}
{% note %}

**Note:** The following example workflows are intended for {% data variables.product.prodname_dotcom_the_website %}. If you'd prefer to try the examples using {% data variables.product.product_name %}, note the following differences.

- You must replace `https://api.github.com` with `{% data variables.product.api_url_code %}`, and replace `HOSTNAME` with the hostname for {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}.
- You must replace `octocat/Spoon-Knife` with a repository on {% data variables.product.product_name %}.

{% endnote %}
{% endif %}

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

If you are authenticating with a {% data variables.product.prodname_github_app %}, you can create an installation access token within your workflow:

1. Store your {% data variables.product.prodname_github_app %}'s ID as a secret. In the following example, replace `APP_ID` with the name of the secret. You can find your app ID on the settings page for your app or through the App API. For more information, see "[AUTOTITLE](/rest/apps/apps#get-an-app)." For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following example, replace `APP_PEM` with the name of the secret. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)."
1. Add a step to generate a token, and use that token instead of `GITHUB_TOKEN`. Note that this token will expire after 60 minutes. For example:

   ```yaml
   {% ifversion ghes < 3.12 %}
   {% data reusables.actions.actions-not-certified-by-github-comment %}

   {% data reusables.actions.actions-use-sha-pinning-comment %}
   {% endif %}
   on:
     workflow_dispatch:
   jobs:
     use_api:
       runs-on: ubuntu-latest
       steps:
         - name: Generate token
           id: generate_token
           uses: {% ifversion ghes < 3.12 %}tibdex/github-app-token@b62528385c34dbc9f38e5f4225ac829252d1ea92{% else %}actions/create-github-app-token@v1{% endif %}
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

## Next steps

For a more detailed guide, see "[Getting started with the REST API](/rest/guides/getting-started-with-the-rest-api)."
