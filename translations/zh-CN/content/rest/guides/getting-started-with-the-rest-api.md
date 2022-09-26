---
title: Getting started with the REST API
intro: 'Learn how to use the {% data variables.product.prodname_dotcom %} REST API.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Using the API
miniTocMaxHeadingLevel: 3
---

## About the {% data variables.product.prodname_dotcom %} REST API

This article describes how to use the {% data variables.product.prodname_dotcom %} REST API using {% data variables.product.prodname_cli %}, JavaScript, or cURL. For a quickstart guide, see "[Quickstart for GitHub REST API](/rest/quickstart)."

When you make a request to the REST API, you will specify an HTTP method and a path. Additionally, you might also specify request headers and path, query, or body parameters. The API will return the response status code, response headers, and potentially a response body.

The REST API reference documentation describes the HTTP method, path, and parameters for every operation. It also displays example requests and responses for each operation. For more information, see the [REST reference documentation](/rest).

For more information about {% data variables.product.company_short %}'s APIs, see "[About {% data variables.product.company_short %}'s APIs](/developers/overview/about-githubs-apis)."

## Making a request

To make a request, first find the HTTP method and the path for the operation that you want to use. For example, the "Get Octocat" operation uses the `GET` method and the `/octocat` path. For the full reference documentation for this operation, see "[Get Octocat](/rest/meta#get-octocat)."

{% cli %}

{% note %}

**Note**: You must install {% data variables.product.prodname_cli %} in order to use the commands in the {% data variables.product.prodname_cli %} examples. For installation instructions, see the [{% data variables.product.prodname_cli %} repository](https://github.com/cli/cli#installation).

{% endnote %}

If you are not already authenticated to {% data variables.product.prodname_cli %}, you must use the `gh auth login` subcommand to authenticate before making any requests. For more information, see "[Authenticating](#authenticating)."

To make a request using {% data variables.product.prodname_cli %}, use the `api` subcommand along with the path. Use the `--method` or `-X` flag to specify the method.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Note**: You must install and import `octokit` in order to use the Octokit.js library used in the JavaScript examples. For more information, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

To make a request using JavaScript, you can use Octokit.js. For more information, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).

First, create an instance of `Octokit`.{% ifversion ghes or ghae %} Set the base URL to `{% data variables.product.api_url_code %}`. Replace `[hostname]` with the name of {% data variables.product.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

Then, use the `request` method to make requests. Pass the HTTP method and path as the first argument.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Prepend the base URL for the {% data variables.product.prodname_dotcom %} REST API, `{% data variables.product.api_url_code %}`, to the path to get the full URL: `{% data variables.product.api_url_code %}/octocat`.{% ifversion ghes or ghae %} Replace `[hostname]` with the name of {% data variables.product.product_location %}.{% endif %}

Use the `curl` command in your command line. Use the `--request` or `-X` flag followed by the HTTP method. Use the `--url` flag followed by the full URL.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Note**: If you get a message similar to "command not found: curl", you may need to download and install cURL. For more information, see [the cURL project download page](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Continue reading to learn how to authenticate, send parameters, and use the response.

## Authenticating

Many operations require authentication or return additional information if you are authenticated. Additionally, you can make more requests per hour when you are authenticated.{% cli %} Although some REST API operations are accessible without authentication, you must authenticate to {% data variables.product.prodname_cli %} in order to use the `api` subcommand.{% endcli %}

### About tokens

You can authenticate your request by adding a token.

If you want to use the {% data variables.product.company_short %} REST API for personal use, you can create a personal access token (PAT). The REST API operations used in this article require `repo` scope for personal access tokens. Other operations may require different scopes. For more information about creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

If you want to use the API on behalf of an organization or another user, {% data variables.product.company_short %} recommends that you use a {% data variables.product.prodname_github_app %}. If an operation is available to {% data variables.product.prodname_github_apps %}, the REST reference documentation for that operation will say "Works with GitHub Apps." The REST API operations used in this article require `issues` read and write permissions for {% data variables.product.prodname_github_apps %}. Other operations may require different permissions. For more information, see "[Creating a GitHub App](/developers/apps/building-github-apps/creating-a-github-app)", "[Authenticating with GitHub Apps](/developers/apps/building-github-apps/authenticating-with-github-apps), and "[Identifying and authorizing users for GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)."

If you want to use the API in a {% data variables.product.prodname_actions %} workflow, {% data variables.product.company_short %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. You can grant permissions to the `GITHUB_TOKEN` with the `permissions` key. For more information, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)."

### Authentication example

{% cli %}

With {% data variables.product.prodname_cli %}, you don't need to create an access token in advance. Use the `auth login` subcommand to authenticate to {% data variables.product.prodname_cli %}:

```shell
gh auth login
```

You can use the `--scopes` flag to specify what scopes you want. If you want to authenticate with a token that you created, you can use the `--with-token` flag. For more information, see the [{% data variables.product.prodname_cli %} `auth login` documentation](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Warning**: Treat your access token like a password.

To keep your token secure, you can store your token as a secret and run your script through {% data variables.product.prodname_actions %}. For more information, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

{% ifversion ghec or fpt %}You can also store your token as a {% data variables.product.prodname_codespaces %} secret and run your script in {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

{% endwarning %}

To authenticate with the Octokit.js library, you can pass your token when you create an instance of `Octokit`. Replace `YOUR-TOKEN` with your token.{% ifversion ghes or ghae %} Replace `[hostname]` with the name of {% data variables.product.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Warning**: Treat your access token like a password.

To help keep your account secure, you can use {% data variables.product.prodname_cli %} instead of cURL. {% data variables.product.prodname_cli %} will take care of authentication for you. For more information, see the {% data variables.product.prodname_cli %} version of this page.

{% ifversion ghec or fpt %}You can also store your token as a {% data variables.product.prodname_codespaces %} secret and use the command line through {% data variables.product.prodname_codespaces %}. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."{% endif %}

If these options are not possible, consider using another service such as [the 1Password CLI](https://developer.1password.com/docs/cli/secret-references/) to store your token securely.

{% endwarning %}

With cURL, you will send an `Authorization` header with your token. Replace `YOUR-TOKEN` with your token:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% note %}

**Note:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### Authentication example for {% data variables.product.prodname_actions %}

{% cli %}

You can also use the `run` keyword to execute {% data variables.product.prodname_cli %} commands in your {% data variables.product.prodname_actions %} workflows. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

Instead of using the `gh auth login` command, pass your token as an environment variable called `GH_TOKEN`. {% data variables.product.prodname_dotcom %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." For more information about secrets, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

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

You can also use the `run` keyword to execute your JavaScript scripts in your {% data variables.product.prodname_actions %} workflows. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." For more information about secrets, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

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
    permissions: {}
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.15.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          node .github/actions-scripts/use-the-api.mjs
```

Example JavaScript script, with the file path `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

Instead of storing your script in a separate file and executing the script from your workflow, you can use the `actions/github-script` action to run a script. For more information, see the [actions/github-script README](https://github.com/actions/github-script).

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

You can also use the `run` keyword to execute cURL commands in your {% data variables.product.prodname_actions %} workflows. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% data variables.product.prodname_dotcom %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. If this is not possible, store your token as a secret and replace `GITHUB_TOKEN` in the example below with the name of your secret. For more information about `GITHUB_TOKEN`, see "[Automatic token authentication](/actions/security-guides/automatic-token-authentication)." For more information about secrets, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

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

## Using headers

Most operations specify that you should pass an `Accept` header with a value of `application/vnd.github.v3+json`. Other operations may specify that you should send a different `Accept` header or additional headers.

{% cli %}

To send a header with {% data variables.product.prodname_cli %}, use the `--header` or `-H` flag followed by the header in `key: value` format.

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /octocat
```

{% endcli %}

{% javascript %}

The Octokit.js library automatically passes the `Accept: application/vnd.github.v3+json` header. To pass additional headers or a different `Accept` header, add a `headers` property to the object that is passed as a second argument to the `request` method. The value of the `headers` property is an object with the header names as keys and header values as values. For example, to send a `content-type` header with a value of `text/plain`:

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",
  },
});
```

{% endjavascript %}

{% curl %}

To send a header with cURL, use the `--header` or `-H` flag followed by the header in `key: value` format.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

## Using path parameters

Path parameters modify the operation path. For example, the "List repository issues" path is `/repos/{owner}/{repo}/issues`. The curly brackets `{}` denote path parameters that you need to  specify. In this case, you must specify the repository owner and name. For the reference documentation for this operation, see "[List repository issues](/rest/issues/issues#list-repository-issues)."

{% cli %}

{% ifversion ghes or ghae %}
{% note %}

**Note:** In order for this command to work for {% data variables.product.product_location %}, replace `octocat/Spoon-Knife` with a repository owned by {% data variables.product.product_location %}. Otherwise, rerun the `gh auth login` command to authenticate to {% data variables.product.prodname_dotcom_the_website %} instead of {% data variables.product.product_location %}.

{% endnote %}
{% endif %}

To get issues from the `octocat/Spoon-Knife` repository, replace `{owner}` with `octocat` and `{repo}` with `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %}
{% note %}

**Note:** In order for this example to work for {% data variables.product.product_location %}, replace `octocat/Spoon-Knife` with a repository owned by {% data variables.product.product_location %}. Otherwise, create a new `Octokit` instance and do not specify `baseURL`.

{% endnote %}
{% endif %}

When you make a request with Octokit.js, all parameters, including path parameters, are passed in an object as the second argument to the `request` method. To get issues from the `octocat/Spoon-Knife` repository, specify `owner` as `octocat` and `repo` as `Spoon-Knife`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

To get issues from the `octocat/Spoon-Knife` repository, replace `{owner}` with `octocat` and `{repo}` with `Spoon-Knife`. To build the full path, prepend the base URL for the {% data variables.product.prodname_dotcom %} REST API, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %}
{% note %}

**Note:** If you want to use {% data variables.product.product_location %} instead of {% data variables.product.prodname_dotcom_the_website %}, use `{% data variables.product.api_url_code %}` instead of `https://api.github.com` and replace `[hostname]` with the name of {% data variables.product.product_location %}. Replace `octocat/Spoon-Knife` with a repository owned by {% data variables.product.product_location %}.

{% endnote %}
{% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

The operation returns a list of issues and data about each issue. For more information about using the response, see the "[Using the response](#using-the-response)" section.

## Using query parameters

Query parameters allow you to control what data is returned for a request. For example, a query parameter may let you specify how many items are returned when the response is paginated.

By default, the "List repository issues" operation returns thirty issues, sorted in descending order by the date they were created. You can use the `per_page` parameter to return two issues instead of 30. You can use the `sort` parameter to sort the issues by the date they were last updated instead of by the date they were created. You can use the `direction` parameter to sort the results in ascending order instead of descending order.

{% cli %}

For {% data variables.product.prodname_cli %}, use the `-F` flag to pass a parameter that is a number, Boolean, or null. Use `-f` to pass string parameters.

{% note %}

**Note**: {% data variables.product.prodname_cli %} does not currently accept parameters that are arrays. For more information, see [this issue](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

When you make a request with Octokit.js, all parameters, including query parameters, are passed in an object as the second argument to the `request` method.

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

For cURL, add a `?` to the end of the path, then append your query parameter name and value in the form `parameter_name=value`. Separate multiple query parameters with `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

The operation returns a list of issues and data about each issue. For more information about using the response, see the "[Using the response](#using-the-response)" section.

## Using body parameters

Body parameters allow you to pass additional data to the API. For example, the "Create an issue" operation requires you to specify a title for the new issue. It also lets you specify other information, such as text to put in the issue body. For the full reference documentation for this operation, see "[Create an issue](/rest/issues/issues#create-an-issue)."

The "Create an issue" operation uses the same path as the "List repository issues" operation in the examples above, but it uses a `POST` method instead of a `GET` method.

{% cli %}

For {% data variables.product.prodname_cli %}, use the `-F` flag to pass a parameter that is a number, Boolean, or null. Use `-f` to pass string parameters.

{% note %}

**Note**: {% data variables.product.prodname_cli %} does not currently accept parameters that are arrays. For more information, see [this issue](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

When you make a request with Octokit.js, all parameters, including body parameters, are passed in an object as the second argument to the `request` method.

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

For cURL, use the `--data` flag to pass the body parameters in a JSON object.

```shell
curl --request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

The operation creates an issue and returns data about the new issue. In the response, find the `html_url` of your issue and navigate to your issue in the browser. For more information about using the response, see the "[Using the response](#using-the-response)" section.

## Using the response

### About the response code and headers

Every request will return an HTTP status code that indicates the success of the response. For more information about response codes, see [the MDN HTTP response status code documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Additionally, the response will include headers that give more details about the response. Headers that start with `X-` or `x-` are custom to {% data variables.product.company_short %}. For example, the `x-ratelimit-remaining` and `x-ratelimit-reset` headers tell you how many requests you can make in a time period.

{% cli %}

To view the status code and headers, use the `--include` or `--i` flag when you send your request.

For example, this request:

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

returns the response code and headers like:

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

In this example, the response code is `200`, which indicates a successful request. 

{% endcli %}

{% javascript %}

When you make a request with Octokit.js, the `request` method returns a promise. If the request was successful, the promise resolves to an object that includes the HTTP status code of the response (`status`) and the response headers (`headers`). If an error occurs, the promise resolves to an object that includes the HTTP status code of the response (`status`) and the response headers (`response.headers`).

You can use a `try/catch` block to catch an error if it occurs. For example, if the request in the following script is successful, the script will log the status code and the value of the `x-ratelimit-remaining` header. If the request was not successful, the script will log the status code, the value of the `x-ratelimit-remaining` header, and the error message.

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

To view the status code and headers, use the `--include` or `--i` flag when you send your request.

For example, this request:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" \
--include
```

returns the response code and headers like:

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

In this example, the response code is `200`, which indicates a successful request. 

{% endcurl %}

### About the response body

Many operations will return a response body. Unless otherwise specified, the response body is in JSON format. For example, this request returns a list of issues with data about each issue:

{% cli %}

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2
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
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"
```

{% endcurl %}

Unlike the GraphQL API where you specify what information you want, the REST API typically returns more information than you need. If desired, you can parse the response to pull out specific pieces of information.

{% cli %}

For example, you can use `>` to redirect the response to a file:

```shell
gh api --header 'Accept: application/vnd.github.v3+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

Then you can use jq to get the title and author ID of each issue:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

The previous two commands return something like:

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

For more information about jq, see [the jq documentation](https://stedolan.github.io/jq/) and [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

For example, you can get the title and author ID of each issue:

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

For example, you can use `>` to redirect the response to a file:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github.v3+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>" > data.json
```

Then you can use jq to get the title and author ID of each issue:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

The previous two commands return something like:

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

For more information about jq, see [the jq documentation](https://stedolan.github.io/jq/) and [jq play](https://jqplay.org/).

{% endcurl %}

## Next steps

This article demonstrated how to list and create issues in a repository. For more practice, try to comment on an issue, edit the title of an issue, or close an issue. For more information about these operations, see "[Create an issue comment](/rest/issues#create-an-issue-comment)" and "[Update an issue](/rest/issues/issues#update-an-issue)."

For more information about the operations that you can use, see the [REST reference documentation](/rest).
