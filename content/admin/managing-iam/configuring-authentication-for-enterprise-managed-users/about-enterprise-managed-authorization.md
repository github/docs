---
title: About Enterprise-Managed Authorization for apps
allowTitleToDifferFromFilename: true
shortTitle: About EMA
intro: 'Apps can sign in with single sign-on to {% data variables.product.github %} using an identity provider (IdP) credential, without an interactive sign-in.'
versions:
  ghec: '*'
permissions: Enterprise admins can manage Enterprise-Managed Authorization.
contentType: concepts
category:
  - Provision and manage enterprise users
---

> [!NOTE]
> Enterprise-Managed Authorization is in {% data variables.release-phases.public_preview %} and subject to change. Only select apps can use EMA, and only with OIDC-backed {% data variables.product.prodname_emus %}. To use EMA in your enterprise, you must enable it in both {% data variables.product.github %} and Microsoft Entra.

Enterprise-Managed Authorization (EMA) is an emerging [identity standard](https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization) that allows an app to access a resource using their IdP sign-in instead of requiring the user to sign in to the resource directly. EMA is also known as ID JAG, cross-app access (XAA), or Agentic SSO depending on which platform you are using. It's most popular in the MCP ecosystem, but useful for any federated setup.

The benefits of EMA apply to both developers and administrators:

* Developers get easier access to {% data variables.product.github %} from compatible clients. They don't need to configure MCP JSON or complete a separate OAuth flow.
* Administrators get to see and control the access between apps and {% data variables.product.github %}, providing additional security and auditability support.
* Client apps receive short-lived, rotating tokens instead of long-lived OAuth app tokens or {% data variables.product.pat_generic_plural %}.

## Enabling Enterprise-Managed Authorization in your enterprise

Before your users can use EMA, it needs to be enabled in your enterprise. When enabled, it allows your users to access {% data variables.product.github %} from the {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %} after signing in to Microsoft Entra, rather than performing an OAuth sign-in against {% data variables.product.github %}. Your enterprise must use {% data variables.product.prodname_emus %} with OpenID Connect (OIDC) single sign-on.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.identity-provider-tab %}
1. Select **Enterprise-Managed Authorization** under the **Single sign-on** section.
1. Set the default access policy to **Enabled** or **Disabled**.
1. If you want to enable or disable EMA selectively for an enterprise team, user, or role, select **Add override** and pick the target that should receive a different outcome. Then set the policy for the override, either **Enabled** or **Disabled**.

In case of multiple overrides applying to a user (for example because they belong to two different teams, each with an override, and are targeted with one directly), the following logic applies:

1. If a user is targeted directly with an override, that outcome applies.
1. Assuming no override directly targets the user, then any applicable override that disables the feature applies, and the user cannot use EMA.
1. If all applicable overrides enable the feature for the user, they can use EMA.
1. Finally, if no overrides apply, they are subject to the default policy.

## Supported applications

{% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %} support EMA with {% data variables.product.github %}. The latest versions of each app support EMA, but may require configuration to enable the feature in the app. Both apps require configuration in Microsoft Entra to allow the connection to {% data variables.product.github %}.

### Enabling sign-in within Microsoft Entra

To enable SSO between an app and {% data variables.product.github %} within Microsoft Entra, you must ensure that the client application ({% data variables.product.prodname_vscode_shortname %} or {% data variables.copilot.copilot_cli_short %}) is present in your tenant and allowed to access the **{% data variables.product.prodname_emu_idp_oidc_application %}** application.

As a tenant administrator, you must provide admin consent for each application to support the connection.

Using your tenant ID or domain name in place of `<TENANT_IDENTIFIER>`, visit each of these URLs and approve the application's access to {% data variables.product.github %}:

* For {% data variables.product.prodname_vscode_shortname %}: `https://login.microsoftonline.com/<TENANT_IDENTIFIER>/v2.0/adminconsent?client_id=aebc6443-996d-45c2-90f0-388ff96faa56&scope=12f6db80-0741-4a7e-b9c5-b85d737b3a31/user_impersonation`
* For {% data variables.copilot.copilot_cli_short %}: `https://login.microsoftonline.com/<TENANT_IDENTIFIER>/v2.0/adminconsent?client_id=5ecc71bb-0fa6-4d6b-a31b-de12184c4b1a&scope=12f6db80-0741-4a7e-b9c5-b85d737b3a31/user_impersonation`

The `12f6db80-0741-4a7e-b9c5-b85d737b3a31` GUID included in the scope query parameter is the application ID for the {% data variables.product.prodname_emu_idp_oidc_application %} application. `user_impersonation` is the standard scope that indicates you are signing in as the user. Once within {% data variables.product.github %}, the application's permissions are still enforced and actions are still attributed to the application.

When you go through the admin consent flow you'll be asked for two approvals each time: once for the client application accessing {% data variables.product.github %} (called `SPN-GITHUB_MANAGED_USER_OIDC` in the consent dialog), and once for {% data variables.product.github %} having access to your user's data. The user data access was already granted when you first approved the application. This is just Entra running the approval process for all involved applications.

You can validate whether the apps were created and approved in your tenant by navigating to the **Enterprise apps** tab of your Entra tenant in the {% data variables.actions.azure_portal %}. There, search for each of the applications by name or application ID, using the **Application ID starts with** filter. Be sure to remove the **Application type** filter or set it to **Microsoft applications** so that the apps appear. The application IDs for each app are:

* {% data variables.product.prodname_vscode_shortname %}: `aebc6443-996d-45c2-90f0-388ff96faa56`
* {% data variables.copilot.copilot_cli_short %}: `5ecc71bb-0fa6-4d6b-a31b-de12184c4b1a`

When you have found the apps, open the **Permissions** page in the **Security** section. If the application is present and has been granted access to {% data variables.product.github %}, you should see an entry in the table for **{% data variables.product.prodname_emu_idp_oidc_application %}** and `user_impersonation`, granted through admin consent. If you'd like to remove this access, you can click the three dots to the right of the entry and select **Revoke permission**.

### {% data variables.copilot.copilot_cli_short %}

To use Enterprise-Managed Authorization with the {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli#authenticating-with-microsoft-entra). EMA is enabled in version 1.0.113 and later when you run `/login`.

### {% data variables.product.prodname_vscode_shortname %}

Starting with version 1.141.0 of {% data variables.product.prodname_vscode_shortname %}, users may see the option to sign in with their Microsoft Entra account. If you do, and your Entra account is linked to an OIDC {% data variables.enterprise.prodname_managed_user %}, you'll get immediate access to {% data variables.product.github %} and your {% data variables.product.prodname_copilot %} entitlements. When you select the Microsoft option, {% data variables.product.prodname_vscode_shortname %} will attempt to sign in using your on-device broker in order to SSO into an Entra account. If it is unable to, you can sign in to Entra via your web browser.

#### Enabling Microsoft authentication in {% data variables.product.prodname_vscode_shortname %}

{% data variables.product.prodname_vscode_shortname %} may not show the **Continue with Microsoft** option when you are asked to sign in. This may be because the feature is disabled on your {% data variables.product.prodname_vscode_shortname %} instance, or because {% data variables.product.prodname_vscode_shortname %} was unable to detect an existing Microsoft Entra account on the device. To force the feature to be enabled, change the setting.

The feature is controlled by the `chat.microsoftAuthentication.enabled` setting, which has one of three values:

| Value | Behavior |
| --- | --- |
| `"auto"` | Checks whether a Microsoft Entra account is detectable before showing the option. |
| `"always"` | Always shows the Microsoft sign-in option. |
| `"never"` | Hides the Microsoft sign-in option. |

For example, to always show the option, add this to your `settings.json`:

```json
{
  "chat.microsoftAuthentication.enabled": "always"
}
```

For help finding and opening `settings.json` in {% data variables.product.prodname_vscode_shortname %}, see ["User and workspace settings" in the {% data variables.product.prodname_vscode_shortname %} documentation](https://code.visualstudio.com/docs/configure/settings#_settings-json-file).

The default in version 1.141.0 depends on your telemetry setting:

* If telemetry, and therefore A/B experimentation, is enabled, the default is `"auto"`.
* If telemetry is disabled, the default is `"never"`. Set the value to `"auto"` or `"always"` to opt in manually.

In future releases, this setting will default to `"auto"`.

### EMA support for other apps and IdPs

{% data variables.product.github %} plans to expand EMA support for the full range of client applications and IdPs that implement the protocol, including Okta, Ping, {% data variables.copilot.claude %}, and Cursor. If your {% data variables.enterprise.prodname_emu_enterprise %} uses one of these IdPs, then compatible applications will be able to access {% data variables.product.github %} on your users' behalf.

To learn more about Enterprise-Managed Authorization, see the [MCP standard documentation](https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization) and the [ID JAG specification](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-identity-assertion-authz-grant). You can follow the [roadmap item](https://github.com/github/roadmap/issues/1338) and [changelog](https://github.blog/changelog/) for updates on this work.
