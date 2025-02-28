---
title: Registering a GitHub App from a manifest
intro: 'A {% data variables.product.prodname_github_app %} manifest is a way to share a preconfigured {% data variables.product.prodname_github_app %} registration with other users. The manifest flow allows someone to quickly register a {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
  - /developers/apps/building-github-apps/creating-a-github-app-from-a-manifest
  - /apps/creating-github-apps/creating-github-apps/creating-a-github-app-from-a-manifest
  - /apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-from-a-manifest
  - /apps/sharing-github-apps/creating-a-github-app-from-a-manifest
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App manifest
---
## About {% data variables.product.prodname_github_app %} Manifests

{% ifversion enterprise-apps-public-beta %}
>[!NOTE] {% data variables.product.prodname_github_app %} Manifests are not available for enterprise-owned {% data variables.product.prodname_github_apps %}.
{% endif %}

When someone registers a {% data variables.product.prodname_github_app %} from a manifest, they only need to follow a URL and name the app. The manifest includes the permissions, events, and webhook URL needed to automatically register the app. The manifest flow creates the {% data variables.product.prodname_github_app %} registration and generates the app's webhook secret, private key (PEM file), client secret, and {% data variables.product.prodname_github_app %} ID. The person who creates the {% data variables.product.prodname_github_app %} registration from the manifest will own the {% data variables.product.prodname_github_app %} registration and can choose to edit the registration's settings, delete it, or transfer it to another person on {% data variables.product.prodname_dotcom %}.

You can use [Probot](https://probot.github.io/) to get started with {% data variables.product.prodname_github_app %} Manifests or see an example implementation. See [Using Probot to implement the {% data variables.product.prodname_github_app %} Manifest flow](#using-probot-to-implement-the-github-app-manifest-flow) to learn more.

Here are some scenarios where you might use {% data variables.product.prodname_github_app %} Manifests to register pre-configured apps:

* Help new team members come up-to-speed quickly when developing {% data variables.product.prodname_github_apps %}.
* Allow others to extend a {% data variables.product.prodname_github_app %} using the {% data variables.product.prodname_dotcom %} APIs without requiring them to configure an app.
* Create {% data variables.product.prodname_github_app %} reference designs to share with the {% data variables.product.prodname_dotcom %} community.
* Ensure you deploy {% data variables.product.prodname_github_apps %} to development and production environments using the same configuration.
* Track revisions to a {% data variables.product.prodname_github_app %} configuration.

## Implementing the {% data variables.product.prodname_github_app %} Manifest flow

The {% data variables.product.prodname_github_app %} Manifest flow uses a handshaking process similar to the [OAuth flow](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps). The flow uses a manifest to [register a {% data variables.product.prodname_github_app %}](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app) and receives a temporary `code` used to retrieve the app's private key, webhook secret, and ID.

>[!NOTE] You must complete all three steps in the {% data variables.product.prodname_github_app %} Manifest flow within one hour.

Follow these steps to implement the {% data variables.product.prodname_github_app %} Manifest flow:

1. You redirect people to {% data variables.product.prodname_dotcom %} to register a new {% data variables.product.prodname_github_app %}.
1. {% data variables.product.prodname_dotcom %} redirects people back to your site.
1. You exchange the temporary code to retrieve the app configuration.

### 1. You redirect people to {% data variables.product.prodname_dotcom %} to register a new {% data variables.product.prodname_github_app %}

To redirect people to register a new {% data variables.product.prodname_github_app %}, [provide a link](#examples) for them to click that sends a `POST` request to `https://github.com/settings/apps/new` for a personal account or `https://github.com/organizations/ORGANIZATION/settings/apps/new` for an organization account, replacing `ORGANIZATION` with the name of the organization account where the app will be registered.

You must include the [{% data variables.product.prodname_github_app %} Manifest parameters](#github-app-manifest-parameters) as a JSON-encoded string in a parameter called `manifest`. You can also include a `state` [parameter](#parameters) for additional security.

The person registering the app will be redirected to a {% data variables.product.prodname_dotcom %} page with an input field where they can edit the name of the app you included in the `manifest` parameter. If you do not include a `name` in the `manifest`, they can set their own name for the app in this field.

#### {% data variables.product.prodname_github_app %} Manifest parameters

 Name | Type | Description
-----|------|-------------
`name` | `string` | The name of the {% data variables.product.prodname_github_app %}.
`url` | `string` | **Required.** The homepage of your {% data variables.product.prodname_github_app %}.
`hook_attributes` | `object` | The configuration of the {% data variables.product.prodname_github_app %}'s webhook.
`redirect_url` | `string` | The full URL to redirect to after a user initiates the registration of a {% data variables.product.prodname_github_app %} from a manifest.
`callback_urls` | `array of strings` | A full URL to redirect to after someone authorizes an installation. You can provide up to 10 callback URLs.
`setup_url` | `string` | A full URL to redirect users to after they install your {% data variables.product.prodname_github_app %} if additional setup is required.
`description` | `string` | A description of the {% data variables.product.prodname_github_app %}.
`public` | `boolean` | Set to `true` when your {% data variables.product.prodname_github_app %} is available to the public or `false` when it is only accessible to the owner of the app.
`default_events` | `array` | The list of [events](/webhooks-and-events/webhooks/webhook-events-and-payloads) the {% data variables.product.prodname_github_app %} subscribes to.
`default_permissions` | `object` | The set of permissions needed by the {% data variables.product.prodname_github_app %}. The format of the object uses the permission name for the key (for example, `issues`) and the access type for the value (for example, `write`). For more information, see [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).
`request_oauth_on_install` | `boolean` | Set to `true` to request the user to authorize the {% data variables.product.prodname_github_app %}, after the {% data variables.product.prodname_github_app %} is installed.
`setup_on_update` | `boolean` | Set to `true` to redirect users to the `setup_url` after they update your {% data variables.product.prodname_github_app %} installation.

The `hook_attributes` object has the following keys.

Name | Type | Description
-----|------|-------------
`url` | `string` | **Required.** The URL of the server that will receive the webhook `POST` requests.
`active` | `boolean` | Deliver event details when this hook is triggered, defaults to true.

#### Parameters

 Name | Type | Description
-----|------|-------------
`state`| `string` | {% data reusables.apps.state_description %}

#### Examples

This example uses a form on a web page with a button that triggers the `POST` request for a personal account:

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Register a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
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
   "callback_urls": [
     "https://example.com/callback"
   ],
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

This example uses a form on a web page with a button that triggers the `POST` request for an organization account. Replace `ORGANIZATION` with the name of the organization account where you want to register the app.

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 register a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
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
   "callback_urls": [
     "https://example.com/callback"
   ],
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

### 2. {% data variables.product.prodname_dotcom %} redirects people back to your site

When the person clicks **Create {% data variables.product.prodname_github_app %}**, {% data variables.product.prodname_dotcom %} redirects back to the `redirect_url` with a temporary `code` in a code parameter. For example:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

If you provided a `state` parameter, you will also see that parameter in the `redirect_url`. For example:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

### 3. You exchange the temporary code to retrieve the app configuration

To complete the handshake, send the temporary `code` in a `POST` request to the [Create a {% data variables.product.prodname_github_app %} from a manifest](/rest/apps/apps#create-a-github-app-from-a-manifest) endpoint. The response will include the `id` ({% data variables.product.prodname_github_app %} ID), `pem` (private key), and `webhook_secret`. {% data variables.product.prodname_dotcom %} creates a webhook secret for the app automatically. You can store these values in environment variables on the app's server. For example, if your app uses [dotenv](https://github.com/bkeepers/dotenv) to store environment variables, you would store the variables in your app's `.env` file.

You must complete this step of the {% data variables.product.prodname_github_app %} Manifest flow within one hour.

> [!NOTE]
> This endpoint is rate limited. See [Rate limits](/rest/rate-limit/rate-limit) to learn how to get your current rate limit status.

    POST /app-manifests/{code}/conversions

For more information about the endpoint's response, see [Create a {% data variables.product.prodname_github_app %} from a manifest](/rest/apps/apps#create-a-github-app-from-a-manifest).

When the final step in the manifest flow is completed, the person registering the app from the flow will be an owner of a registered {% data variables.product.prodname_github_app %} that they can install on any of their personal repositories. They can choose to extend the app using the {% data variables.product.prodname_dotcom %} APIs, transfer ownership to someone else, or delete it at any time.

## Using Probot to implement the {% data variables.product.prodname_github_app %} Manifest flow

[Probot](https://probot.github.io/) is a framework built with [Node.js](https://nodejs.org/) that performs many of the tasks needed by all {% data variables.product.prodname_github_apps %}, like validating webhooks and performing authentication. Probot implements the [{% data variables.product.prodname_github_app %} manifest flow](#implementing-the-github-app-manifest-flow), making it easy to create and share {% data variables.product.prodname_github_app %} reference designs with the {% data variables.product.prodname_dotcom %} community.

To create a Probot App that you can share, follow these steps:

1. [Generate a new {% data variables.product.prodname_github_app %}](https://probot.github.io/docs/development/#generating-a-new-app).
1. Open the project you created, and customize the settings in the `app.yml` file. Probot uses the settings in `app.yml` as the [{% data variables.product.prodname_github_app %} Manifest parameters](#github-app-manifest-parameters).
1. Add your application's custom code.
1. [Run the {% data variables.product.prodname_github_app %} locally](https://probot.github.io/docs/development/#running-the-app-locally) or [host it anywhere you'd like](#hosting-your-app-with-glitch). When you navigate to the hosted app's URL, you'll find a web page with a **Register {% data variables.product.prodname_github_app %}** button that people can click to register a preconfigured app.

Using [dotenv](https://github.com/bkeepers/dotenv), Probot creates a `.env` file and sets the `APP_ID`, `PRIVATE_KEY`, and `WEBHOOK_SECRET` environment variables with the values [retrieved from the app configuration](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

### Hosting your app with Glitch

You can see an [example Probot app](https://glitch.com/~auspicious-aardwolf) that uses [Glitch](https://glitch.com/) to host and share the app. The example uses the [Checks API](/rest/checks) and selects the necessary Checks API events and permissions in the `app.yml` file. Glitch is a tool that allows you to "Remix your own" apps. Remixing an app creates a copy of the app that Glitch hosts and deploys. See [About Glitch](https://glitch.com/about/) to learn about remixing Glitch apps.
