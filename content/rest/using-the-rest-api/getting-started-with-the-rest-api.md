---
title: Getting started with the REST API
shortTitle: Getting started
intro: 'Learn how to use the {% data variables.product.prodname_dotcom %} REST API.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
redirect_from:
  - /rest/guides/getting-started-with-the-rest-api
  - /rest/initialize-the-repo
  - /rest/overview/resources-in-the-rest-api
  - /rest/using-the-rest-api/resources-in-the-rest-api
  - /v3/media
  - /rest/overview/media-types
  - /rest/using-the-rest-api/media-types
---

## Introduction

This article describes how to use the {% data variables.product.prodname_dotcom %} REST API with {% data variables.product.prodname_cli %}, `curl`, or JavaScript. For a quickstart guide, see [AUTOTITLE](/rest/quickstart).

{% curl %}

{% ifversion ghec %}

Examples in this article send requests to `{% data variables.product.rest_url %}`. If you access {% data variables.product.github %} at a different domain, such as `{% data variables.enterprise.data_residency_example_domain %}`, the endpoint for API requests will reflect that domain. For example: `https://api.octocorp.ghe.com/`.

{% endif %}

{% endcurl %}

## About requests to the REST API

This section describes the elements that make up an API request:

* [HTTP method](#http-method)
* [Path](#path)
* [Headers](#headers)
* [Media types](#media-types)
* [Authentication](#authentication)
* [Parameters](#parameters)

Every request to the REST API includes an HTTP method and a path. Depending on the REST API endpoint, you might also need to specify request headers, authentication information, query parameters, or body parameters.

The REST API reference documentation describes the HTTP method, path, and parameters for every endpoint. It also displays example requests and responses for each endpoint. For more information, see the [REST reference documentation](/rest).

### HTTP method

The HTTP method of an endpoint defines the type of action it performs on a given resource. Some common HTTP methods are `GET`, `POST`, `DELETE`, and `PATCH`. The REST API reference documentation provides the HTTP method for every endpoint.

For example, the HTTP method for the ["List repository issues" endpoint](/rest/issues/issues#list-repository-issues) is `GET`."

Where possible, the {% data variables.product.product_name %} REST API strives to use an appropriate HTTP method for each action.

* `GET`: Used for retrieving resources.
* `POST`: Used for creating resources.
* `PATCH`: Used for updating properties of resources.
* `PUT`: Used for replacing resources or collections of resources.
* `DELETE`: Used for deleting resources.

### Path

Each endpoint has a path. The REST API reference documentation gives the path for every endpoint. For example, the path for the ["List repository issues" endpoint](/rest/issues/issues#list-repository-issues) is `/repos/{owner}/{repo}/issues`.

The curly brackets `{}` in a path denote path parameters that you need to specify. Path parameters modify the endpoint path and are required in your request. For example, the path parameters for the ["List repository issues" endpoint](/rest/issues/issues#list-repository-issues) are `{owner}` and `{repo}`. To use this path in your API request, replace `{repo}` with the name of the repository where you would like to request a list of issues, and replace `{owner}` with the name of the account that owns the repository.

### Headers

Headers provide extra information about the request and the desired response. Following are some examples of headers that you can use in your requests to the {% data variables.product.prodname_dotcom %} REST API. For an example of a request that uses headers, see [Making a request](#making-a-request).

#### `Accept`

Most {% data variables.product.prodname_dotcom %} REST API endpoints specify that you should pass an `Accept` header with a value of `application/vnd.github+json`. The value of the `Accept` header is a media type. For more information about media types, see [Media types](#media-types).

#### `X-GitHub-Api-Version`

You should use this header to specify a version of the REST API to use for your request. For more information, see [AUTOTITLE](/rest/overview/api-versions).

{% ifversion fpt or ghec %}

#### `User-Agent`

All API requests must include a valid `User-Agent` header. The `User-Agent` header identifies the user or application that is making the request.

{% cli %}

By default, {% data variables.product.prodname_cli %} sends a valid `User-Agent` header. However, {% data variables.product.prodname_dotcom %} recommends using your {% data variables.product.product_name %} username, or the name of your application, for the `User-Agent` header value. This allows {% data variables.product.prodname_dotcom %} to contact you if there are problems.

{% endcli %}

{% curl %}

By default, `curl` sends a valid `User-Agent` header. However {% data variables.product.prodname_dotcom %} recommends using your {% data variables.product.product_name %} username, or the name of your application, for the `User-Agent` header value. This allows {% data variables.product.prodname_dotcom %} to contact you if there are problems.

{% endcurl %}

{% javascript %}

If you use the Octokit.js SDK, the SDK will send a valid `User-Agent` header for you. However, {% data variables.product.prodname_dotcom %} recommends using your {% data variables.product.product_name %} username, or the name of your application, for the `User-Agent` header value. This allows {% data variables.product.prodname_dotcom %} to contact you if there are problems.

{% endjavascript %}

The following is an example `User-Agent` for an app named `Awesome-Octocat-App`:

```shell
User-Agent: Awesome-Octocat-App
```

Requests with no `User-Agent` header will be rejected. If you provide an invalid `User-Agent` header, you will receive a `403 Forbidden` response.

{% endif %}

<!-- Anchor to maintain links to this heading -->
<a name="media-types"></a>

### Media types

You can specify one or more media types by adding them to the `Accept` header of your request. For more information about the `Accept` header, see [`Accept`](#accept).

Media types specify the format of the data you want to consume from the API. Media types are specific to resources, allowing them to change independently and support formats that other resources don't. The documentation for each {% data variables.product.prodname_dotcom %} REST API endpoint will describe the media types that it supports. For more information, see the [AUTOTITLE](/rest).

The most common media types supported by the {% data variables.product.prodname_dotcom %} REST API are `application/vnd.github+json` and `application/json`.

There are custom media types that you can use with some endpoints. For example, the REST API to manage [commits](/rest/commits/commits#get-a-commit) and [pull requests](/rest/pulls/pulls) support the media types `diff`, `patch`, and `sha`. The media types `full`, `raw`, `text`, or `html` are used by some other endpoints.

All custom media types for {% data variables.product.product_name %} look like this: `application/vnd.github.PARAM+json`, where `PARAM` is the name of the media type. For example, to specify the `raw` media type, you would use `application/vnd.github.raw+json`.

For an example of a request that uses media types, see [Making a request](#making-a-request).

### Authentication

Many endpoints require authentication or return additional information if you are authenticated. Additionally, you can make more requests per hour when you are authenticated.

{% curl %}

To authenticate your request, you will need to provide an authentication token with the required scopes or permissions. There a few different ways to get a token: You can create a {% data variables.product.pat_generic %}, generate a token with a {% data variables.product.prodname_github_app %}, or use the built-in `GITHUB_TOKEN` in a {% data variables.product.prodname_actions %} workflow. For more information, see [AUTOTITLE](/rest/overview/authenticating-to-the-rest-api).

For an example of a request that uses an authentication token, see [Making a request](#making-a-request).

> [!NOTE]
> If you don't want to create a token, you can use {% data variables.product.prodname_cli %}. {% data variables.product.prodname_cli %} will take care of authentication for you, and help keep your account secure. For more information, see the [{% data variables.product.prodname_cli %} version of this page](/rest/guides/getting-started-with-the-rest-api?tool=cli).

> [!WARNING]
> Treat your access token the same way you would treat your passwords or other sensitive credentials. For more information, see [AUTOTITLE](/rest/overview/keeping-your-api-credentials-secure).

{% endcurl %}

{% cli %}

Although some REST API endpoints are accessible without authentication, {% data variables.product.prodname_cli %} requires you to authenticate before you can use the `api` subcommand to make an API request. Use the `auth login` subcommand to authenticate to {% data variables.product.product_name %}. For more information, see [Making a request](#making-a-request).

{% endcli %}

{% javascript %}

To authenticate your request, you will need to provide an authentication token with the required scopes or permissions. There a few different ways to get a token: You can create a {% data variables.product.pat_generic %}, generate a token with a {% data variables.product.prodname_github_app %}, or use the built-in `GITHUB_TOKEN` in a {% data variables.product.prodname_actions %} workflow. For more information, see [AUTOTITLE](/rest/overview/authenticating-to-the-rest-api).

For an example of a request that uses an authentication token, see [Making a request](#making-a-request).

> [!WARNING]
> Treat your access token the same way you would treat your passwords or other sensitive credentials. For more information, see [AUTOTITLE](/rest/overview/keeping-your-api-credentials-secure).

{% endjavascript %}

### Parameters

Many API methods require or allow you to send additional information in parameters in your request. There are a few different types of parameters: Path parameters, body parameters, and query parameters.

#### Path parameters

Path parameters modify the endpoint path. These parameters are required in your request. For more information, see [Path](#path).

#### Body parameters

Body parameters allow you to pass additional data to the API. These parameters can be optional or required, depending on the endpoint. For example, a body parameter may allow you to specify an issue title when creating a new issue, or specify certain settings when enabling or disabling a feature. The documentation for each {% data variables.product.prodname_dotcom %} REST API endpoint will describe the body parameters that it supports. For more information, see the [AUTOTITLE](/rest).

For example, the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) requires that you specify a title for the new issue in your request. It also allows you to optionally specify other information, such as text to put in the issue body, users to assign to the new issue, or labels to apply to the new issue. For an example of a request that uses body parameters, see [Making a request](#making-a-request).

You must authenticate your request to pass body parameters. For more information, see [Authenticating](#authenticating).

#### Query parameters

Query parameters allow you to control what data is returned for a request. These parameters are usually optional. The documentation for each {% data variables.product.prodname_dotcom %} REST API endpoint will describe any query parameters that it supports. For more information, see the [AUTOTITLE](/rest).

For example, the ["List public events" endpoint](/rest/activity/events#list-public-events) returns thirty issues by default. You can use the `per_page` query parameter to return two issues instead of 30. You can use the `page` query parameter to fetch only the first page of results. For an example of a request that uses query parameters, see [Making a request](#making-a-request).

## Making a request

{% cli %}

This section demonstrates how to make an authenticated request to the {% data variables.product.prodname_dotcom %} REST API using {% data variables.product.prodname_cli %}.

### 1. Setup

Install {% data variables.product.prodname_cli %} on macOS, Windows, or Linux. For more information, see [Installation](https://github.com/cli/cli#installation) in the {% data variables.product.prodname_cli %} repository.

### 2. Authenticate

1. To authenticate to {% data variables.product.github %}, run the following command from your terminal.

   ```shell
   gh auth login
   ```

   You can use the `--scopes` option to specify what scopes you want. If you want to authenticate with a token that you created, you can use the `--with-token` option. For more information, see the [{% data variables.product.prodname_cli %} `auth login` documentation](https://cli.github.com/manual/gh_auth_login).

1. Select where you want to authenticate to:

   * If you access {% data variables.product.github %} at {% data variables.product.prodname_dotcom_the_website %}, select **{% data variables.product.prodname_dotcom_the_website %}**.
   * If you access {% data variables.product.github %} at a different domain, select **Other**, then enter your hostname (for example: `octocorp.ghe.com`).

1. Follow the rest of the on-screen prompts.

   {% data variables.product.prodname_cli %} automatically stores your Git credentials for you when you choose HTTPS as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your {% data variables.product.prodname_dotcom %} credentials. This can be useful as it allows you to use Git commands like `git push` and `git pull` without needing to set up a separate credential manager or use SSH.

### 3. Choose an endpoint for your request

1. Choose an endpoint to make a request to. You can explore {% data variables.product.product_name %}'s [REST API documentation](/rest) to discover endpoints that you can use to interact with {% data variables.product.product_name %}.
1. Identify the HTTP method and path of the endpoint. You will send these with your request. For more information, see [HTTP method](#http-method) and [Path](#path).

   For example, the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) uses the HTTP method `POST` and the path `/repos/{owner}/{repo}/issues`.

1. Identify any required path parameters. Required path parameters appear in curly brackets `{}` in the path of the endpoint. Replace each parameter placeholder with the desired value. For more information, see [Path](#path).

   For example, the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) uses the path `/repos/{owner}/{repo}/issues`, and the path parameters are `{owner}` and `{repo}`. To use this path in your API request, replace `{repo}` with the name of the repository where you would like to create a new issue, and replace `{owner}` with the name of the account that owns the repository.

### 4. Make a request with {% data variables.product.prodname_cli %}

Use the {% data variables.product.prodname_cli %} `api` subcommand to make your API request. For more information, see the [{% data variables.product.prodname_cli %} `api` documentation](https://cli.github.com/manual/gh_api).

In your request, specify the following options and values:

{%- ifversion not fpt %}
* **--hostname:** If you are authenticated to multiple accounts across {% data variables.product.github %} platforms, specify where you are making the request. For example: `--hostname {% data variables.enterprise.data_residency_example_domain %}`.
{%- endif %}
* **--method** followed by the HTTP method and the path of the endpoint. For more information, see [HTTP method](#http-method) and [Path](#path).
* **--header:**
  * **`Accept`:** Pass the media type in an `Accept` header. To pass multiple media types in an `Accept` header, separate the media types with a comma: `Accept: application/vnd.github+json,application/vnd.github.diff`. For more information, see [`Accept`](#accept) and [Media types](#media-types).
  * **`X-GitHub-Api-Version`:** Pass the API version in a `X-GitHub-Api-Version` header. For more information, see [`X-GitHub-Api-Version`](#x-github-api-version).
* **`-f`** or **`-F`** followed by any body parameters or query parameters in `key=value` format. Use the `-F` option to pass a parameter that is a number, Boolean, or null. Use the `-f` option to pass string parameters.

  Some endpoints use query parameters that are arrays. To send an array in the query string, use the query parameter once per array item, and append `[]` after the query parameter name. For example, to provide an array of two repository IDs, use `-f repository_ids[]=REPOSITORY_A_ID -f repository_ids[]=REPOSITORY_B_ID`.

  If you do not need to specify any body parameters or query parameters in your request, omit this option. For more information, see [Body parameters](#body-parameters) and [Query parameters](#query-parameters). For examples, see [Example request using body parameters](#example-request-using-body-parameters) and [Example request using query parameters](#example-request-using-query-parameters).
{%- ifversion not fpt %}
* **--hostname:** If you are authenticated to multiple accounts across {% data variables.product.github %} platforms, specify where you are making the request. For example: `--hostname {% data variables.enterprise.data_residency_example_domain %}`.
{%- endif %}

#### Example request

The following example request uses the ["Get Octocat" endpoint](/rest/meta/meta#get-octocat) to return the octocat as ASCII art.

```shell copy
gh api --method GET /octocat \
--header 'Accept: application/vnd.github+json' \
--header "X-GitHub-Api-Version: 2022-11-28"
```

#### Example request using query parameters

The ["List public events" endpoint](/rest/activity/events#list-public-events) returns thirty issues by default. The following example uses the `per_page` query parameter to return two issues instead of 30, and the `page` query parameter to fetch only the first page of results.

```shell copy
gh api --method GET /events -F per_page=2 -F page=1
--header 'Accept: application/vnd.github+json' \
```

#### Example request using body parameters

The following example uses the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) to create a new issue in {% ifversion ghes %}a specified{% else %}the octocat/Spoon-Knife{% endif %} repository.{% ifversion ghes %} Replace `REPO-NAME` with the name of the repository where you want to create a new issue, and replace `REPO-OWNER` with the name of the account that owns the repository.{% endif %} In the response, find the `html_url` of your issue, and navigate to your issue in the browser.

```shell copy
gh api --method POST /repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}/issues \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28" \
-f title='Created with the REST API' \
-f body='This is a test issue created by the REST API' \
```

{% endcli %}

{% curl %}

This section demonstrates how to make an authenticated request to the {% data variables.product.prodname_dotcom %} REST API using `curl`.

### 1. Setup

You must have `curl` installed on your machine. To check if `curl` is already installed, run `curl --version` on the command line.

* If the output provides information about the version of `curl`, that means `curl` is installed.
* If you get a message similar to `command not found: curl`, that means `curl` is not installed. Download and install `curl`. For more information, see [the curl download page](https://curl.se/download.html).

### 2. Choose an endpoint for your request

1. Choose an endpoint to make a request to. You can explore {% data variables.product.product_name %}'s [REST API documentation](/rest) to discover endpoints that you can use to interact with {% data variables.product.product_name %}.
1. Identify the HTTP method and path of the endpoint. You will send these with your request. For more information, see [HTTP method](#http-method) and [Path](#path).

   For example, the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) uses the HTTP method `POST` and the path `/repos/{owner}/{repo}/issues`.

1. Identify any required path parameters. Required path parameters appear in curly brackets `{}` in the path of the endpoint. Replace each parameter placeholder with the desired value. For more information, see [Path](#path).

   For example, the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) uses the path `/repos/{owner}/{repo}/issues`, and the path parameters are `{owner}` and `{repo}`. To use this path in your API request, replace `{repo}` with the name of the repository where you would like to create a new issue, and replace `{owner}` with the name of the account that owns the repository.

### 3. Create authentication credentials

Create an access token to authenticate your request. You can save your token and use it for multiple requests. Give the token any scopes or permissions that are required to access the endpoint. You will send this token in an `Authorization` header with your request. For more information, see [Authentication](#authentication).

### 4. Make a `curl` request

Use the `curl` command to make your request. For more information, see [the curl documentation](https://curl.se/docs/manpage.html).

Specify the following options and values in your request:

* **`--request` or `-X`** followed by the HTTP method as the value. For more information, see [HTTP method](#http-method).
* **`--url`** followed by the full path as the value. The full path is a URL that includes the base URL for the GitHub REST API (`{% data variables.product.rest_url %}`{% ifversion ghec %} or `https://{% data variables.enterprise.data_residency_api %}`, depending on where you access {% data variables.product.github %}{% endif %}) and the path of the endpoint, like this: `{% data variables.product.rest_url %}/PATH`.{% ifversion ghes %} Replace `HOSTNAME` with the name of {% data variables.location.product_location %}.{% endif %} Replace `PATH` with the path of the endpoint. For more information, see [Path](#path).

  To use query parameters, add a `?` to the end of the path, then append your query parameter name and value in the form `parameter_name=value`. Separate multiple query parameters with `&`. If you need to send an array in the query string, use the query parameter once per array item, and append `[]` after the query parameter name. For example, to provide an array of two repository IDs, use `?repository_ids[]=REPOSITORY_A_ID&repository_ids[]=REPOSITORY_B_ID`. For more information, see [Query parameters](#query-parameters). For an example, see [Example request using query parameters](#example-request-using-query-parameters-1).
* **`--header` or `-H`:**
  * **`Accept`:** Pass the media type in an `Accept` header. To pass multiple media types in an `Accept` header, separate the media types with a comma, for example: `Accept: application/vnd.github+json,application/vnd.github.diff`. For more information, see [`Accept`](#accept) and [Media types](#media-types).
  * **`X-GitHub-Api-Version`:** Pass the API version in a `X-GitHub-Api-Version` header. For more information, see [`X-GitHub-Api-Version`](#x-github-api-version).
  * **`Authorization`:** Pass your authentication token in an `Authorization` header. Note that in most cases you can use `Authorization: Bearer` or `Authorization: token` to pass a token. However, if you are passing a JSON web token (JWT), you must use `Authorization: Bearer`. For more information, see [Authentication](#authentication). For an example of a request that uses an `Authorization` header, see [Example request using body parameters](#example-request-using-body-parameters-1).
* **`--data` or `-d`** followed by any body parameters within a JSON object. If you do not need to specify any body parameters in your request, omit this option. For more information, see [Body parameters](#body-parameters). For an example, see [Example request using body parameters](#example-request-using-body-parameters-1).

#### Example request

The following example request uses the ["Get Octocat" endpoint](/rest/meta/meta#get-octocat) to return the octocat as ASCII art.

```shell copy
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28"
```

#### Example request using query parameters

The ["List public events" endpoint](/rest/activity/events#list-public-events) returns thirty issues by default. The following example uses the `per_page` query parameter to return two issues instead of 30, and the `page` query parameter to fetch only the first page of results.

```shell copy
curl --request GET \
--url "{% data variables.product.rest_url %}/events?per_page=2&page=1" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/events
```

#### Example request using body parameters

The following example uses the [Create an issue](/rest/issues/issues#create-an-issue) endpoint to create a new issue in {% ifversion ghes %}a specified{% else %}the octocat/Spoon-Knife{% endif %} repository.{% ifversion ghes %} Replace `HOSTNAME` with the name of {% data variables.location.product_location %}. Replace `REPO-NAME` with the name of the repository where you want to create a new issue, and replace `REPO-OWNER` with the name of the account that owns the repository.{% endif %} Replace `YOUR-TOKEN` with the authentication token you created in a previous step.

> [!NOTE]
> If you are using a {% data variables.product.pat_v2 %}, you must replace `{% ifversion ghes %}REPO-OWNER` and `REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}` with a repository that you own or that is owned by an organization that you are a member of. Your token must have access to that repository and have read and write permissions for repository issues. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

```shell copy
curl \
--request POST \
--url "{% data variables.product.rest_url %}/repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}/issues" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28" \
--header "Authorization: Bearer YOUR-TOKEN" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

{% javascript %}

This section demonstrates how to make a request to the {% data variables.product.prodname_dotcom %} REST API using JavaScript and [Octokit.js](https://github.com/octokit/octokit.js). For a more detailed guide, see [AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript).

### 1. Setup

You must install `octokit` to use the Octokit.js library shown in the following examples.

* Install `octokit`. For example, `npm install octokit`. For other ways to install or load `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).

### 2. Choose an endpoint for your request

1. Choose an endpoint to make a request to. You can explore {% data variables.product.product_name %}'s [REST API documentation](/rest) to discover endpoints that you can use to interact with {% data variables.product.product_name %}.
1. Identify the HTTP method and path of the endpoint. You will send these with your request. For more information, see [HTTP method](#http-method) and [Path](#path).

   For example, the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) uses the HTTP method `POST` and the path `/repos/{owner}/{repo}/issues`.

1. Identify any required path parameters. Required path parameters appear in curly brackets `{}` in the path of the endpoint. Replace each parameter placeholder with the desired value. For more information, see [Path](#path).

   For example, the ["Create an issue" endpoint](/rest/issues/issues#create-an-issue) uses the path `/repos/{owner}/{repo}/issues`, and the path parameters are `{owner}` and `{repo}`. To use this path in your API request, replace `{repo}` with the name of the repository where you would like to create a new issue, and replace `{owner}` with the name of the account that owns the repository.

### 3. Create an access token

Create an access token to authenticate your request. You can save your token and use it for multiple requests. Give the token any scopes or permissions that are required to access the endpoint. You will send this token in an `Authorization` header with your request. For more information, see [Authentication](#authentication).

### 4. Make a request with Octokit.js

1. Import `octokit` in your script. For example, `import { Octokit } from "octokit";`. For other ways to import `octokit`, see [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Create an instance of `Octokit` with your token.{% ifversion ghes %} Set the base URL to `{% data variables.product.rest_url %}`. Replace `HOSTNAME` with the name of {% data variables.location.product_location %}.{% endif %} Replace `YOUR-TOKEN` with your token.

   ```javascript copy
   const octokit = new Octokit({ {% ifversion ghes %}
     baseUrl: "{% data variables.product.rest_url %}",{% endif %}
     auth: 'YOUR-TOKEN'
   });
   ```

1. Use `octokit.request` to execute your request.

   * Send the HTTP method and path as the first argument to the `request` method. For more information, see [HTTP method](#http-method) and [Path](#path).
   * Specify all path, query, and body parameters in an object as the second argument to the `request` method. For more information, see [Parameters](#parameters).

   In the following example request, the HTTP method is `POST`, the path is `/repos/{owner}/{repo}/issues`, the path parameters are `owner: "{% ifversion ghes %}REPO-OWNER{% else %}octocat{% endif %}"` and `repo: "{% ifversion ghes %}REPO-NAME{% else %}Spoon-Knife{% endif %}"`, and the body parameters are `title: "Created with the REST API"` and `body: "This is a test issue created by the REST API"`.{% ifversion ghes %} Replace `REPO-OWNER` with the name of the account that owns the repository, and `REPO-NAME` with the name of the repository.{% endif %}

   > [!NOTE]
   > If you are using a {% data variables.product.pat_v2 %}, you must replace `{% ifversion ghes %}REPO-OWNER` and `REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}` with a repository that you own or that is owned by an organization that you are a member of. Your token must have access to that repository and have read and write permissions for repository issues. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

   ```javascript copy
   await octokit.request("POST /repos/{owner}/{repo}/issues", {
     owner: "{% ifversion ghes %}REPO-OWNER{% else %}octocat{% endif %}",
     repo: "{% ifversion ghes %}REPO-NAME{% else %}Spoon-Knife{% endif %}",
     title: "Created with the REST API",
     body: "This is a test issue created by the REST API",
   });
   ```

   The `request` method automatically passes the `Accept: application/vnd.github+json` header. To pass additional headers or a different `Accept` header, add a `headers` property to the object that is passed as a second argument. The value of the `headers` property is an object with the header names as keys and header values as values.

   For example, the following code will send a `content-type` header with a value of `text/plain` and a `X-GitHub-Api-Version` header with a value of `{{ allVersions[currentVersion].latestApiVersion }}`.

   ```javascript copy
   await octokit.request("GET /octocat", {
     headers: {
       "content-type": "text/plain",
       "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",
     },
   });
   ```

{% endjavascript %}

## Using the response

After you make a request, the API will return the response status code, response headers, and potentially a response body.

### About the response code and headers

Every request will return an HTTP status code that indicates the success of the response. For more information about response codes, see [the MDN HTTP response status code documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Additionally, the response will include headers that give more details about the response. Headers that start with `X-` or `x-` are custom to {% data variables.product.company_short %}. For example, the `x-ratelimit-remaining` and `x-ratelimit-reset` headers tell you how many requests you can make in a time period.

{% cli %}

To view the status code and headers, use the `--include` or `--i` option when you send your request.

For example, this request gets a list of issues in {% ifversion ghes %}a specified{% else %}the octocat/Spoon-Knife{% endif %} repository:

```shell
gh api \
--header 'Accept: application/vnd.github+json' \
--method GET /repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}/issues \
-F per_page=2 --include
```

And it returns a response code and headers that look something like this:

```shell
HTTP/2.0 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, Location, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
Cache-Control: private, max-age=60, s-maxage=60
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Thu, 04 Aug 2022 19:56:41 GMT
Etag: W/"a63dfbcfdb73621e9d2e89551edcf9856731ced534bd7f1e114a5da1f5f73418"
Link: <https://api.github.com/repositories/1300192/issues?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=1&page=14817>; rel="last"
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Server: GitHub.com
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Vary: Accept, Authorization, Cookie, Accept-Encoding, Accept, X-Requested-With
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

In the following example, replace `REPO-OWNER` with the name of the account that owns the repository, and `REPO-NAME` with the name of the repository.

```javascript copy
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "REPO-OWNER",
    repo: "REPO-NAME",
    per_page: 2,
  });

  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

To view the status code and headers, use the `--include` or `--i` option when you send your request.

For example, this request gets a list of issues in {% ifversion ghes %}a specified{% else %}the octocat/Spoon-Knife{% endif %} repository:

```shell
curl --request GET \
--url "https://api.github.com/repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

And it returns a response code and headers that look something like this:

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
access-control-expose-headers: ETag, Link, Location, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
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

Many endpoints will return a response body. Unless otherwise specified, the response body is in JSON format. Blank fields are included as `null` instead of being omitted. All timestamps return in UTC time, ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

Unlike the GraphQL API where you specify what information you want, the REST API typically returns more information than you need. If desired, you can parse the response to pull out specific pieces of information.

{% cli %}

For example, you can use `>` to redirect the response to a file. In the following example, replace `REPO-OWNER` with the name of the account that owns the repository, and `REPO-NAME` with the name of the repository.

```shell copy
gh api \
--header 'Accept: application/vnd.github+json' \
--method GET /repos/REPO-OWNER/REPO-NAME/issues \
-F per_page=2 > data.json
```

Then you can use jq to get the title and author ID of each issue:

```shell copy
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

The previous two commands return something like:

```json
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

For more information about jq, see [the jq documentation](https://stedolan.github.io/jq/).

{% endcli %}

{% javascript %}

For example, you can get the title and author ID of each issue. In the following example, replace `REPO-OWNER` with the name of the account that owns the repository, and `REPO-NAME` with the name of the repository.

```javascript copy
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "REPO-OWNER",
    repo: "REPO-NAME",
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

For example, you can use `>` to redirect the response to a file. In the following example, replace `REPO-OWNER` with the name of the account that owns the repository, and `REPO-NAME` with the name of the repository.{% ifversion ghes %} Replace `HOSTNAME` with the name of {% data variables.location.product_location %}.{% endif %}

```shell copy
curl --request GET \
--url "{% data variables.product.rest_url %}/repos/REPO-OWNER/REPO-NAME/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

Then you can use jq to get the title and author ID of each issue:

```shell copy
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

The previous two commands return something like:

```json
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

For more information about jq, see [the jq documentation](https://stedolan.github.io/jq/).

{% endcurl %}

#### Detailed versus summary representations

A response can include all attributes for a resource or only a subset of attributes, depending on whether you fetch an individual resource or a list of resources.

* When you fetch an _individual resource_, like a specific repository, the response will typically include all attributes for that resource. This is the "detailed" representation of the resource.
* When you fetch a _list of resources_, like a list of multiple repositories, the response will only include a subset of the attributes for each resource. This is the "summary" representation of the resource.

Note that authorization sometimes influences the amount of detail included in a representation.

The reason for this is because some attributes are computationally expensive for the API to provide, so {% data variables.product.prodname_dotcom %} excludes those attributes from the summary representation. To obtain those attributes, you can fetch the detailed representation.

The documentation provides an example response for each API method. The example response illustrates all attributes that are returned by that method.

#### Hypermedia

All resources may have one or more `*_url` properties linking to other resources. These are meant to provide explicit URLs so that proper API clients don't need to construct URLs on their own. It is highly recommended that API clients use these. Doing so will make future upgrades of the API easier for developers. All URLs are expected to be proper [RFC 6570](https://datatracker.ietf.org/doc/html/rfc6570) URI templates.

You can then expand these templates using something like the [uri_template](https://github.com/hannesg/uri_template) gem:

```ruby
>> tmpl = URITemplate.new('/notifications{?since,all,participating}')
>> tmpl.expand
=> "/notifications"

>> tmpl.expand all: 1
=> "/notifications?all=1"

>> tmpl.expand all: 1, participating: 1
=> "/notifications?all=1&participating=1"
```

## Next steps

This article demonstrated how to list and create issues in a repository. For more practice, try to comment on an issue, edit the title of an issue, or close an issue. For more information, see the ["Create an issue comment" endpoint](/rest/issues/comments#create-an-issue-comment) and the ["Update an issue" endpoint](/rest/issues/issues#update-an-issue).

For more information about other endpoints that you can use, see the [REST reference documentation](/rest).
