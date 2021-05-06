---
title: Creating a GitHub App from a manifest
intro: 'A GitHub App Manifest is a preconfigured GitHub App you can share with anyone who wants to use your app in their personal repositories. The manifest flow allows someone to quickly create, install, and start extending a GitHub App without needing to register the app or connect the registration to the hosted app code.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github apps
---


### About GitHub App Manifests

When someone creates a GitHub App from a manifest, they only need to follow a URL and name the app. The manifest includes the permissions, events, and webhook URL needed to automatically register the app. The manifest flow creates the GitHub App registration and retrieves the app's webhook secret, private key (PEM file), and GitHub App ID. The person who creates the app from the manifest will own the app and can choose to [edit the app's configuration settings](/apps/managing-github-apps/modifying-a-github-app/), delete it, or transfer it to another person on GitHub.

You can use [Probot](https://probot.github.io/) to get started with GitHub App Manifests or see an example implementation. See "[Using Probot to implement the GitHub App Manifest flow](#using-probot-to-implement-the-github-app-manifest-flow)" to learn more.

Here are some scenarios where you might use GitHub App Manifests to create preconfigured apps:

* Help new team members come up-to-speed quickly when developing GitHub Apps.
* Allow others to extend a GitHub App using the GitHub APIs without requiring them to configure an app.
* Create GitHub App reference designs to share with the GitHub community.
* Ensure you deploy GitHub Apps to development and production environments using the same configuration.
* Track revisions to a GitHub App configuration.

### Implementing the GitHub App Manifest flow

The GitHub App Manifest flow uses a handshaking process similar to the [OAuth flow](/apps/building-oauth-apps/authorizing-oauth-apps/). The flow uses a manifest to [register a GitHub App](/apps/building-github-apps/creating-a-github-app/) and receives a temporary `code` used to retrieve the app's private key, webhook secret, and ID.

{% note %}

**Note:** You must complete all three steps in the GitHub App Manifest flow within one hour.

{% endnote %}

Follow these steps to implement the GitHub App Manifest flow:

1. You redirect people to GitHub to create a new GitHub App.
1. GitHub redirects people back to your site.
1. You exchange the temporary code to retrieve the app configuration.

#### 1. You redirect people to GitHub to create a new GitHub App

To redirect people to create a new GitHub App, [provide a link](#examples) for them to click that sends a `POST` request to `https://github.com/settings/apps/new` for a user account or `https://github.com/organizations/ORGANIZATION/settings/apps/new` for an organization account, replacing `ORGANIZATION` with the name of the organization account where the app will be created.

You must include the [GitHub App Manifest parameters](#github-app-manifest-parameters) as a JSON-encoded string in a parameter called `manifest`. You can also include a `state` [parameter](#parameters) for additional security.

The person creating the app will be redirected to a GitHub page with an input field where they can edit the name of the app you included in the `manifest` parameter. If you do not include a `name` in the `manifest`, they can set their own name for the app in this field.

![Create a GitHub App Manifest](/assets/images/github-apps/create-github-app-manifest.png)

##### GitHub App Manifest parameters

 | 이름                    | 유형                 | 설명                                                                                                                                                                                                                                                       |
 | --------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `name`                | `문자열`              | The name of the GitHub App.                                                                                                                                                                                                                              |
 | `url`                 | `문자열`              | **Required.** The homepage of your GitHub App.                                                                                                                                                                                                           |
 | `hook_attributes`     | `개체`               | The configuration of the GitHub App's webhook.                                                                                                                                                                                                           |
 | `redirect_url`        | `문자열`              | The full URL to redirect to after a user initiates the creation of a GitHub App from a manifest.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}
 | `callback_urls`       | `array of strings` | A full URL to redirect to after someone authorizes an installation. You can provide up to 10 callback URLs.{% else %}
 | `callback_url`        | `문자열`              | A full URL to redirect to after someone authorizes an installation.{% endif %}
 | `설명`                  | `문자열`              | A description of the GitHub App.                                                                                                                                                                                                                         |
 | `public`              | `boolean`          | Set to `true` when your GitHub App is available to the public or `false` when it is only accessible to the owner of the app.                                                                                                                             |
 | `default_events`      | `array`            | The list of [events](/webhooks/event-payloads) the GitHub App subscribes to.                                                                                                                                                                             |
 | `default_permissions` | `개체`               | The set of [permissions](/rest/reference/permissions-required-for-github-apps) needed by the GitHub App. The format of the object uses the permission name for the key (for example, `issues`) and the access type for the value (for example, `write`). |

The `hook_attributes` object has the following key:

| 이름       | 유형        | 설명                                                                                 |
| -------- | --------- | ---------------------------------------------------------------------------------- |
| `url`    | `문자열`     | **Required.** The URL of the server that will receive the webhook `POST` requests. |
| `active` | `boolean` | Deliver event details when this hook is triggered, defaults to true.               |

##### 매개변수

 | 이름      | 유형    | 설명                                          |
 | ------- | ----- | ------------------------------------------- |
 | `state` | `문자열` | {% data reusables.apps.state_description %}

##### 예시

This example uses a form on a web page with a button that triggers the `POST` request for a user account:

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

This example uses a form on a web page with a button that triggers the `POST` request for an organization account. Replace `ORGANIZATION` with the name of the organization account where you want to create the app.

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

#### 2. GitHub redirects people back to your site

When the person clicks **Create GitHub App**, GitHub redirects back to the `redirect_url` with a temporary `code` in a code parameter. 예시:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

If you provided a `state` parameter, you will also see that parameter in the `redirect_url`. 예시:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

#### 3. You exchange the temporary code to retrieve the app configuration

To complete the handshake, send the temporary `code` in a `POST` request to the [Create a GitHub App from a manifest](/rest/reference/apps#create-a-github-app-from-a-manifest) endpoint. The response will include the `id` (GitHub App ID), `pem` (private key), and `webhook_secret`. GitHub creates a webhook secret for the app automatically. You can store these values in environment variables on the app's server. For example, if your app uses [dotenv](https://github.com/bkeepers/dotenv) to store environment variables, you would store the variables in your app's `.env` file.

You must complete this step of the GitHub App Manifest flow within one hour.

{% note %}

**Note:** This endpoint is rate limited. See [Rate limits](/rest/reference/rate-limit) to learn how to get your current rate limit status.

{% endnote %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% data reusables.pre-release-program.fury-pre-release %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

    POST /app-manifests/:code/conversions

For more information about the endpoint's response, see [Create a GitHub App from a manifest](/rest/reference/apps#create-a-github-app-from-a-manifest).

When the final step in the manifest flow is completed, the person creating the app from the flow will be an owner of a registered GitHub App that they can install on any of their personal repositories. They can choose to extend the app using the GitHub APIs, transfer ownership to someone else, or delete it at any time.

### Using Probot to implement the GitHub App Manifest flow

[Probot](https://probot.github.io/) is a framework built with [Node.js](https://nodejs.org/) that performs many of the tasks needed by all GitHub Apps, like validating webhooks and performing authentication. Probot implements the [GitHub App manifest flow](#implementing-the-github-app-manifest-flow), making it easy to create and share GitHub App reference designs with the GitHub community.

To create a Probot App that you can share, follow these steps:

1. [Generate a new GitHub App](https://probot.github.io/docs/development/#generating-a-new-app).
1. Open the project you created, and customize the settings in the `app.yml` file. Probot uses the settings in `app.yml` as the [GitHub App Manifest parameters](#github-app-manifest-parameters).
1. Add your application's custom code.
1. [Run the GitHub App locally](https://probot.github.io/docs/development/#running-the-app-locally) or [host it anywhere you'd like](#hosting-your-app-with-glitch). When you navigate to the hosted app's URL, you'll find a web page with a **Register GitHub App** button that people can click to create a preconfigured app. The web page below is Probot's implementation of [step 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) in the GitHub App Manifest flow:

![Register a Probot GitHub App](/assets/images/github-apps/github_apps_probot-registration.png)

Using [dotenv](https://github.com/bkeepers/dotenv), Probot creates a `.env` file and sets the `APP_ID`, `PRIVATE_KEY`, and `WEBHOOK_SECRET` environment variables with the values [retrieved from the app configuration](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

#### Hosting your app with Glitch

You can see an [example Probot app](https://glitch.com/~auspicious-aardwolf) that uses [Glitch](https://glitch.com/) to host and share the app. The example uses the [Checks API](/rest/reference/checks) and selects the necessary Checks API events and permissions in the `app.yml` file. Glitch is a tool that allows you to "Remix your own" apps. Remixing an app creates a copy of the app that Glitch hosts and deploys. See "[About Glitch](https://glitch.com/about/)" to learn about remixing Glitch apps.
