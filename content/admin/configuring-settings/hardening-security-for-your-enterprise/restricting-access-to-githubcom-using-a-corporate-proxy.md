---
title: Restricting access to GitHub.com using a corporate proxy
intro: 'Configure your proxy to block people from accessing {% data variables.product.prodname_dotcom_the_website %} with personal accounts.'
shortTitle: 'Block personal accounts'
product: 'Enterprises with {% data variables.product.prodname_emus %} on {% data variables.product.prodname_dotcom_the_website %}'
versions:
  ghec: '*'
---

>[!NOTE] The header for restricting access to {% data variables.product.prodname_dotcom_the_website %} is currently in {% data variables.release-phases.public_preview %} and subject to change. Although preview releases are not typically supported by {% data variables.product.company_short %} Support (see [AUTOTITLE](/get-started/using-github/exploring-early-access-releases-with-feature-preview#githubs-release-cycle)), this feature is supported by {% data variables.product.company_short %} Support while in {% data variables.release-phases.public_preview %}.

If you use {% data variables.product.prodname_emus %}, you can block users on your network from authenticating to {% data variables.product.prodname_dotcom_the_website %} with accounts that are not members of your enterprise. This helps reduce the risk of your company's data being exposed to the public.

To enforce this restriction, you will configure your network proxy or firewall to inject a header into your users' web and API requests to {% data variables.product.prodname_dotcom_the_website %}.

This feature requires an external firewall or proxy. {% data variables.contact.github_support %} cannot assist with setup or troubleshooting for external tools such as these. For more about scope of support, see [AUTOTITLE](/support/learning-about-github-support/about-github-support#scope-of-support).

## Requesting access

This feature is not enabled by default. To request access, contact your account manager in {% data variables.product.github %}'s Sales team or [sign up here](https://github.com/features/preview/enterprise-access-restrictions).

## Prerequisites

* You must use an {% data variables.enterprise.prodname_emu_enterprise %} on {% data variables.product.prodname_dotcom_the_website %}.
  * You'll know you're using an {% data variables.enterprise.prodname_emu_enterprise %} if all your users' usernames are appended with your enterprise's shortcode.
  * If you use {% data variables.enterprise.data_residency %}, your enterprise resides on a dedicated subdomain of {% data variables.enterprise.data_residency_site %}, so the header is not required to differentiate traffic to your enterprise's resources.
* To enforce the restriction, all traffic must flow through a proxy or firewall. The proxy or firewall must:
  * Be capable of intercepting and editing traffic, commonly called a "break and inspect" proxy
  * Support arbitrary header injection
* {% data variables.product.company_short %} must have granted you access to this feature.

## Finding the header

To enforce the restriction, you will inject a header into all traffic going to certain supported endpoints. The header is in the following format.

```text
sec-GitHub-allowed-enterprise: ENTERPRISE-ID
```

An enterprise owner can identify the correct enterprise ID to use in the header for your enterprise.

{% data reusables.enterprise-accounts.access-enterprise-emu %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under {% octicon "gear" aria-hidden="true" %} **Settings**, click **Authentication security**.
1. In the "Enterprise access restrictions" section, find the header for your enterprise. This section is only visible for enterprises with the feature enabled.

## Using the header

For best results, configure your proxy to inject the header into all traffic to the following **supported endpoints**.

| Endpoint | Purpose |
| -------- | ------- |
| `github.com/*` | Web traffic to {% data variables.product.prodname_dotcom_the_website %} |
| `api.github.com/*` | REST and GraphQL API requests |
| `*.githubcopilot.com` | Traffic required for certain {% data variables.product.prodname_copilot %} features |

This will prevent people on your network from accessing these endpoints with user accounts that are not owned by your enterprise. Alongside this feature, you can block traffic from outside your network by setting up an IP allow list. See [AUTOTITLE](/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

>[!NOTE] Access to `github.com/login` is required to create support tickets. To ensure users with support entitlements can request help, you may want to exempt these users from the restriction.

### Lifting the restriction for certain users

You may want to lift the restriction for certain users who need to contribute to open source resources using a personal account, or who may need to create support tickets in case of issues. To handle this, you must configure your network to  inject the header only for users that you intend to restrict.

Options include:

* **Network segregation**: Create a "work" network that injects the header, and an "open source" network that does not. Limit access to the "open source" network to users who need it.
* **Device grouping**: If your proxy or firewall is authenticated, you can collect a group of users who don't need the header, and selectively exclude them from injection.

## Unsupported features

Because this restriction only applies to requests that are sent via a proxy that adds an enterprise header, certain {% data variables.product.github %} features do not support the restriction to block users from accessing or using their personal accounts. To block users on your  network from accessing these features, you will need to make the changes described below.

| Feature | Associated endpoint | Notes |
| ------- | ------------------- | ----- |
| {% data variables.product.prodname_pages %} | `github.io` | This is generally user-generated content that cannot accept data. You may not want to restrict access. |
| {% data variables.product.prodname_github_codespaces %} | `github.dev` | To restrict access, block the endpoint entirely. |
| SSH access | Port 22 on {% data variables.product.prodname_dotcom_the_website %} | To restrict access, block the endpoint entirely. |
| {% data variables.product.github %}-hosted runners | Various | To enforce specific routing, use Azure private networking. See [AUTOTITLE](/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise). |

### Endpoints that don't require restriction

The following endpoints do not support or require the restriction because they only provide data, and do not accept it.

* `*.githubusercontent.com`
* `*.githubassets.com`
* Websocket traffic on {% data variables.product.prodname_dotcom_the_website %}

## How does the restriction work?

For traffic that includes the enterprise header, when a user attempts to access {% data variables.product.prodname_dotcom_the_website %} via the web, Git, or API using a user account (or a token associated with a user account) that is not a member of the enterprise:

* The user will see an error message with a `403` status code. See [Errors displayed to blocked users](#errors-displayed-to-blocked-users).
* A `business.proxy_security_header_unsatisfied` event will be logged in the enterprise audit logs. These log events will have no `actor` field due to privacy reasons, but will have an `actor_ip` field if enabled (see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)). To investigate these events further, you can review the proxy logs in your environment.

The following sections provide details for the expected behavior that applies to your users' web activity and API requests.

### Web activity

For activity in the {% data variables.product.prodname_dotcom_the_website %} user interface, the header restricts which accounts a user can sign in to.

While on your network, a user:

* **Can** sign in to a {% data variables.enterprise.prodname_managed_user %} in your enterprise.
* **Cannot** sign in to an account outside your enterprise.
* **Cannot** use the account switcher to switch to an account outside your enterprise.

If a user is already signed in to an account outside your enterprise (for example, they signed in while outside your network), when the user brings their device into your network, they will receive an error and be unable to access {% data variables.product.prodname_dotcom_the_website %} until they sign in with their enterprise-owned account.

### Git activity

If your proxy is configured to inject the header into HTTP(S) requests, users on your network will be blocked from authenticating to {% data variables.product.prodname_dotcom_the_website %} over HTTP(S), unless they are a member of your enterprise. Public read requests are not blocked for unauthenticated anonymous users.

You cannot use the enterprise header to restrict Git activity over SSH. Instead, you can choose to block the port for SSH requests entirely. See [Unsupported features](#unsupported-features).

### API requests

For REST and GraphQL API traffic to api.github.com, including requests via the {% data variables.product.prodname_cli %}, the header restricts the use of access tokens while users are connected to your network.

| Scenario | Outcome | Affected token types |
| -------- | ------- | -------------------- |
| A user uses a {% data variables.product.pat_generic %} associated with an account owned by your enterprise. | The {% data variables.product.pat_generic %} works as expected in API requests. | `ghp_` and `github_pat_` |
| While connected to your network, a user tries to use a {% data variables.product.pat_generic %} associated with a user outside your enterprise. | Requests using the token are blocked. | `ghp_` and `github_pat_` |
| While outside your network, using an account outside your enterprise, a user signs in to an OAuth app that runs on their device. The user then brings their device inside your network. | OAuth tokens from the app stop working. | `gho_` |
| While outside your network, using an account outside your enterprise, a user signs in to a {% data variables.product.prodname_github_app %} that runs on their device. The user then brings their device inside your network. | Tokens from the app stop working. | `ghu_` |
| While connected to your network, an application attempts to refresh a session for a user outside your enterprise using a {% data variables.product.prodname_github_app %} refresh token. | The refresh fails. | `ghr_` |
| While connected to your network, an application attempts to get an installation token (a token without a user identity, just the app's identity) for an organization outside your enterprise. | The token will not work. | `ghs_` |

## Errors displayed to blocked users

Errors will be displayed to users when the restriction is working as intended. Errors occur in the following situations:

* **Web activity**: When a user is blocked from signing in or using an existing stale session.
* **API activity**: When a user tries to use a token that is associated with a user outside the enterprise.
* **Installation token:** When an application attempts to use an installation token to access an organization or user account outside the enterprise. For installations, only write requests are blocked. Read requests are not blocked to resources outside of the enterprise. To learn more about installation tokens, see [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).

| Scenario | Error code | Message |
| -------- | ---------- | ------- |
| Web activity | 403 | Your network administrator has blocked access to {% data variables.product.github %} except for the `ENTERPRISE` Enterprise. Please sign in with your `_SHORTCODE` account to access {% data variables.product.github %}. |
| API activity | 403 | Your network administrator has blocked access to {% data variables.product.github %} except for the `ENTERPRISE` Enterprise. Please use a token for a user from the `_SHORTCODE` enterprise to access {% data variables.product.github %}. |
| Installation token | 403 | Your network administrator has blocked access to {% data variables.product.github %} except for the `ENTERPRISE` Enterprise. Only tokens for the "`SHORTCODE`" enterprise can access {% data variables.product.github %}. |

Errors with a `400` code indicate an error in your configuration. See [Troubleshooting](#troubleshooting).

## Example of testing locally

You can test your network configuration locally using a web debugging tool. This section provides an example using [Fiddler](https://www.telerik.com/fiddler). Note that Fiddler and other external debugging tools are **not** in the scope of {% data variables.contact.github_support %}.

In the following example, you will add some FiddlerScript to run on every request.

1. Install [Fiddler](https://www.telerik.com/fiddler).
1. Configure Fiddler to decrypt HTTPS traffic. See the [Fiddler documentation](https://docs.telerik.com/fiddler/configure-fiddler/tasks/decrypthttps).
1. In Fiddler, navigate to the "FiddlerScript" tab, and add the following code to the `OnBeforeRequest` function. Set the `enterpriseId` variable to your own enterprise ID.

   ```javascript copy
   // Your enterprise id
   var enterpriseId: String = "YOUR-ID";

    //Inject on the web UI
    if (oSession.HostnameIs("github.com")){
        oSession.oRequest.headers.Add("sec-GitHub-allowed-enterprise",enterpriseId)
        oSession["ui-color"] = "green";
    }

    // Inject on API calls
    if (oSession.HostnameIs("api.github.com")){
        oSession.oRequest.headers.Add("sec-GitHub-allowed-enterprise",enterpriseId)
        oSession["ui-color"] = "blue";
        }

    // Inject on Copilot API calls
    if (oSession.HostnameIs("githubcopilot.com")){
        oSession.oRequest.headers.Add("sec-GitHub-allowed-enterprise",enterpriseId)
        oSession["ui-color"] = "yellow";
    }
    ```

1. Click **Save script**.

The header will now be injected for each of the specified domains while packet capture is active. To enable or disable injection, you can toggle packet capture by clicking **File** > **Capture Traffic**.

You can turn this injection on and off to simulate signing in with a disallowed account and then entering the network, or trying to sign in to a disallowed account while on the network.

## Troubleshooting

If your header injection isn't working as expected, you will see errors with a `400` code when you try to use affected endpoints. These are distinct from the `403` errors displayed when the feature is working as expected (see [Errors displayed to blocked users](#errors-displayed-to-blocked-users)).

Generally, `400` errors occur in the following situations.

* The header uses an invalid slug or enterprise ID.
* The header lists more than one enterprise.
* The request contains multiple `sec-GitHub-allowed-enterprise` headers.

| Scenario | Error code | Message |
| -------- | ---------- | ------- |
| Invalid slug or ID | 400 | The enterprise named in the `sec-GitHub-allowed-enterprise` header cannot be found. Ensure that the "enterprise slug" is entered correctly in the firewall or proxy settings. Contact your network administrator if this error persists. |
| More than one enterprise | 400 | Only one enterprise can be used with the `sec-GitHub-allowed-enterprise` header. Ensure that only a single enterprise and header is provided. If this issue persists, contact your network administrator |
| Multiple headers | 400 | More than one `sec-GitHub-allowed-enterprise` was received. This header must be overwritten by the firewall or proxy, to ensure that only a single enterprise is granted access. If this issue persists, contact your network administrator. |

## Further reading

* [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/managing-github-copilot-access-to-your-organizations-network#configuring-copilot-subscription-based-network-routing-for-your-organization)
