---
title: Registering a GitHub App using URL parameters
intro: 'You can use URL query parameters to help other people quickly set up a new {% data variables.product.prodname_github_app %} with a specific configuration you have preselected.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
  - /developers/apps/building-github-apps/creating-a-github-app-using-url-parameters
  - /apps/creating-github-apps/creating-github-apps/creating-a-github-app-using-url-parameters
  - /apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-using-url-parameters
  - /apps/sharing-github-apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App query parameters
---
## About URL parameters for registering {% data variables.product.prodname_github_apps %}

You can use URL parameters to preselect the configuration settings of a new {% data variables.product.prodname_github_app %} registration and share a custom link with other people. The link will take people to a {% data variables.product.prodname_github_app %} registration page, where the app settings will be pre-filled according to the URL parameters you included in the URL.

This approach is useful for integrators who want customers to set up an app on their personal account or organization with certain specifications, or for customers using {% data variables.product.prodname_ghe_server %} who aren't able to install apps from the {% data variables.product.prodname_marketplace %}.

Alternatively, you can create a {% data variables.product.prodname_github_app %} manifest. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-from-a-manifest)."

## Creating a custom configuration URL with query parameters

To create a custom configuration URL for a {% data variables.product.prodname_github_app %} on a personal or organization account, add query parameters after the following base URLs.

* To register an app on a personal account, add URL parameters to: `{% data variables.product.oauth_host_code %}/settings/apps/new`
* To register an app on an organization account, add URL parameters to: `{% data variables.product.oauth_host_code %}/organizations/ORGANIZATION/settings/apps/new`. Replace `ORGANIZATION` with the name of the organization where you'd like the customer to register the app.

On the app registration page, the person registering the app can edit the preselected values before submitting the app. If you do not include parameters for required values (like `name`) in the URL query string, the person registering the app will need to input a value before they can register the app.

For example, the following URL registers a new public app named `octocat-github-app` on a personal account. Using query parameters, the URL preconfigures a description and a callback URL. It also selects read and write permissions for `checks`, activates webhooks using the `webhook_active` parameter, subscribes to the `check_run` and `check_suite` webhook events, and selects the option to request user authorization (OAuth) during installation:

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&webhook_active=true&events[]=check_run&events[]=check_suite
```

## {% data variables.product.prodname_github_app %} configuration parameters

You can use the following query parameters to select a specific configuration for the {% data variables.product.prodname_github_app %} registration. For example, to name the app "octocat-github-app", your query string would include `name=octocat-github-app`.

Parameter name | Type | Description
-----|------|-------------
`name` | `string` | The name of the {% data variables.product.prodname_github_app %}. Give your app a clear and succinct name. Your app cannot have the same name as an existing GitHub user, unless it is your own user or organization name. A slugged version of your app's name will be shown in the user interface when your integration takes an action.
`description` | `string` | A description of the {% data variables.product.prodname_github_app %}.
`url` | `string` | The full URL of your {% data variables.product.prodname_github_app %}'s website homepage.
`callback_urls` | `array of strings` | A full URL to redirect to after someone authorizes an installation. You can provide up to 10 callback URLs. These URLs are used if your app needs to generate a user access token. For example, `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-user-authorization-callback-url)."
`request_oauth_on_install` | `boolean` | If your app authorizes users using the OAuth flow, you can set this option to `true` to allow people to authorize the app when they install it, saving a step. If you select this option, the `setup_url` becomes unavailable and users will be redirected to your `callback_url` after installing the app.
`setup_url` | `string` | The full URL to redirect to after someone installs the {% data variables.product.prodname_github_app %} if the app requires additional setup after installation. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-setup-url)."
`setup_on_update` | `boolean` | Set to `true` to redirect people to the setup URL when installations have been updated, for example, after repositories are added or removed.
`public` | `boolean` | Set to `true` when your {% data variables.product.prodname_github_app %} is available to the public or `false` when it is only accessible to the owner of the app.
`webhook_active` | `boolean` | Set to `true` to enable webhook. Webhook is disabled by default.
`webhook_url` | `string` | The full URL that you would like to send webhook event payloads to.
`events` | `array of strings` | Webhook events. Some webhook events require `read` or `write` permissions for a resource before you can select the event when registering a new {% data variables.product.prodname_github_app %}. For more information, see the "[{% data variables.product.prodname_github_app %} webhook events](#github-app-webhook-events)" section. You can select multiple events in a query string. For example, `events[]=public&events[]=label`.
`single_file_name` | `string` | This is a narrowly-scoped permission that allows the app to access a single file in any repository. When you set the `single_file` permission to `read` or `write`, this field provides the path to the single file your {% data variables.product.prodname_github_app %} will manage. If you need to manage multiple files, see `single_file_paths` below.
`single_file_paths` | `array of strings` | This allows the app to access up ten specified files in a repository. When you set the `single_file` permission to `read` or `write`, this array can store the paths for up to ten files that your {% data variables.product.prodname_github_app %} will manage. These files all receive the same permission set by `single_file`, and do not have separate individual permissions. When two or more files are configured, the API returns `multiple_single_files=true`, otherwise it returns `multiple_single_files=false`.

## {% data variables.product.prodname_github_app %} permissions

You can use query parameters to select the permissions for the {% data variables.product.prodname_github_app %} registration. For the URL query parameter, use the permission name as the query parameter name, and set the query value to one of the possible values for that permission set.

For example, to select "Read & write" permissions in the user interface for `contents`, your query string would include `contents=write`. To select "Read-only" permissions in the user interface for `blocking`, your query string would include `blocking=read`. To select "No access" in the user interface for `checks`, your query string would not include the `checks` permission.

For more information about permissions and {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

## {% data variables.product.prodname_github_app %} webhook events

You can use query parameters to enable the {% data variables.product.prodname_github_app %} webhook, designate a webhook URL, and subscribe the app to receive webhook payloads for specific events.

To enable the {% data variables.product.prodname_github_app %} webhook, use `webhook_active=true` in your query string. To designate a full URL that you would like to send webhook event payloads to, use `webhook_url` in your query string. To subscribe the app to specific webhook payload events, use `events[]` as the query parameter name, and set the query value to the name of the webhook event. For more information about the possible webhook events and the {% data variables.product.prodname_github_app %} permissions required to subscribe to each event, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

For example, to subscribe a {% data variables.product.prodname_github_app %} to receive webhook payloads for activity relating to commit comments, the query string would include `&webhook_active=true&webhook_url=https://example.com&events[]=commit_comment`. Note that the `commit_comment` webhook event requires the {% data variables.product.prodname_github_app %} to have at least read-level access for the "Contents" repository permission. So your query string should also include a parameter to set the `contents` permission to `read` or `write`. For more information, see "[{% data variables.product.prodname_dotcom %} app permissions](#github-app-permissions)."

You cannot use query parameters to set the value of a webhook secret. If an app requires a secret to secure its webhook, the value of the secret must be set in the {% data variables.product.company_short %} UI by the person registering the app.

For more information about webhooks and {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps)."
