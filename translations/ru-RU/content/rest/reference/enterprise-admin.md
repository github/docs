---
title: GitHub Enterprise administration
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can use these endpoints to administer your enterprise.

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Note:** This article applies to {% data variables.product.prodname_ghe_cloud %}. To see the {% data variables.product.prodname_ghe_server %} version, use the **{% data ui.pages.article_version %}** drop-down menu.

{% endnote %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

### Endpoint URLs

REST API endpoints—except [Management Console](#management-console) API endpoints—are prefixed with the following URL:

```shell
http(s)://<em>hostname</em>/api/v3/
```

[Management Console](#management-console) API endpoints are only prefixed with a hostname:

```shell
http(s)://<em>hostname</em>/
```

### Authentication

Your {% data variables.product.product_name %} installation's API endpoints accept [the same authentication methods](/rest/overview/resources-in-the-rest-api#authentication) as the GitHub.com API. You can authenticate yourself with **[OAuth tokens](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** (which can be created using the [Authorizations API](/rest/reference/oauth-authorizations#create-a-new-authorization)) or **[basic authentication](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% if currentVersion != "free-pro-team@latest" %} OAuth tokens must have the `site_admin` [OAuth scope](/developers/apps/scopes-for-oauth-apps#available-scopes) when used with Enterprise-specific endpoints.{% endif %}

Enterprise administration API endpoints are only accessible to authenticated {% data variables.product.product_name %} site administrators, except for the [Management Console](#management-console) API, which requires the [Management Console password](/enterprise/admin/articles/accessing-the-management-console/).

### Version information

The current version of a {% data variables.product.product_name %} instance is returned in the response header of every API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` You can also read the current version by calling the [meta endpoint](/rest/reference/meta/).

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

## Billing

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'billing' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
## GitHub Actions

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'actions' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
## SCIM

### SCIM Provisioning for Enterprises

SCIM-enabled Identity Providers (IdPs) can use the SCIM API to automate the provisioning of enterprise membership. The {% data variables.product.product_name %} API is based on version 2.0 of the [SCIM standard](http://www.simplecloud.info/).

The IdP must use `{% data variables.product.api_url_code %}/scim/v2/enterprises/{enterprise}/` as the SCIM endpoint.

{% note %}

**Note:** The enterprise SCIM API is only available to enterprises on [{% data variables.product.prodname_ghe_cloud %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-accounts) with [SAML SSO](/v3/auth/#authenticating-for-saml-sso) enabled. For more information about SCIM, see "[About SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

{% endnote %}

### Authenticating calls to the SCIM API

You must authenticate as an owner of a {% data variables.product.product_name %} enterprise to use its SCIM API. The API expects an [OAuth 2.0 Bearer](/developers/apps/authenticating-with-github-apps) token to be included in the `Authorization` header. You may also use a personal access token, but you must first [authorize it for use with your SAML SSO enterprise](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapping of SAML and SCIM data

The SAML IdP and the SCIM client must use matching `NameID` and `userName` values for each user. This allows a user authenticating through SAML to be linked to their provisioned SCIM identity.

SCIM groups are matched with {% data variables.product.product_name %} organizations that have the exact same name, and are owned by the enterprise account.

The SAML IdP and SCIM client must be configured to exactly match the `displayName` of the SCIM group with the name of the corresponding {% data variables.product.product_name %} organization. This allows {% data variables.product.product_name %} to link the SCIM group with the {% data variables.product.product_name %} organization membership.

### Supported SCIM User attributes

| Name             | Тип       | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `userName`       | `строка`  | The username for the user.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `name.givenName` | `строка`  | The first name of the user.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `name.lastName`  | `строка`  | The last name of the user.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `emails`         | `array`   | List of user emails.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `externalId`     | `строка`  | This identifier is generated by the SAML provider, and is used as a unique ID by the SAML provider to match against a GitHub user. You can find the `externalID` for a user either at the SAML provider, or using the [List SCIM provisioned identities for an enterprise](#list-scim-provisioned-identities-for-an-enterprise) endpoint and filtering on other known attributes, such as a user's GitHub username or email address. |
| `id`             | `строка`  | Identifier generated by the GitHub SCIM endpoint.                                                                                                                                                                                                                                                                                                                                                                                    |
| `active`         | `boolean` | Used to indicate whether the identity is active (true) or should be deprovisioned (false).                                                                                                                                                                                                                                                                                                                                           |
| `groups`         | `array`   | Optional list of SCIM group IDs the user is a member of.                                                                                                                                                                                                                                                                                                                                                                             |

{% note %}

**Note:** Endpoint URLs for the SCIM API are case sensitive. For example, the first letter in the `Users` endpoint must be capitalized:

```shell
GET /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
```

{% endnote %}

### Supported SCIM Group attributes

| Name          | Тип      | Description                                                                                                                                                                                                                                                      |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName` | `строка` | The name of the SCIM group, which must exactly match the name of the corresponding {% data variables.product.product_name %} organization. For example, if the URL of the organization is `https://github.com/octo-org`, the group name must be `octo-org`. |
| `members`     | `array`  | List of SCIM user IDs that are members of the group.                                                                                                                                                                                                             |


{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'scim' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

## Admin stats

The Admin Stats API provides a variety of metrics about your installation. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'admin-stats' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Global webhooks

Global webhooks are installed on a {% data variables.product.prodname_enterprise %} instance. You can use global webhooks to automatically monitor, respond to, or enforce rules for users, organizations, teams, and repositories on your instance. Global webhooks can subscribe to the [organization](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [user](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repository](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [team](/developers/webhooks-and-events/webhook-events-and-payloads#team), [member](/developers/webhooks-and-events/webhook-events-and-payloads#member), [membership](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [fork](/developers/webhooks-and-events/webhook-events-and-payloads#fork), and [ping](/developers/webhooks-and-events/about-webhooks#ping-event) event types.

*This API is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it. To learn how to configure global webhooks, see [About global webhooks](/enterprise/admin/user-management/about-global-webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'global-webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## LDAP

You can use the LDAP API to update account relationships between a {% data variables.product.prodname_ghe_server %} user or team and its linked LDAP entry or queue a new synchronization.

With the LDAP mapping endpoints, you're able to update the Distinguished Name (DN) that a user or team maps to. Note that the LDAP endpoints are generally only effective if your {% data variables.product.prodname_ghe_server %} appliance has [LDAP Sync enabled](/enterprise/admin/authentication/using-ldap). The [Update LDAP mapping for a user](#update-ldap-mapping-for-a-user) endpoint can be used when LDAP is enabled, even if LDAP Sync is disabled.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'ldap' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Лицензия

The License API provides information on your Enterprise license. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'license' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Management console

The Management Console API helps you manage your {% data variables.product.prodname_ghe_server %} installation.

{% tip %}

You must explicitly set the port number when making API calls to the Management Console. If TLS is enabled on your Enterprise instance, the port number is `8443`; otherwise, the port number is `8080`.

If you don't want to provide a port number, you'll need to configure your tool to automatically follow redirects.

You may also need to add the [`-k` flag](http://curl.haxx.se/docs/manpage.html#-k) when using `curl`, since {% data variables.product.prodname_ghe_server %} uses a self-signed certificate before you [add your own TLS certificate](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Authentication

You need to pass your [Management Console password](/enterprise/admin/articles/accessing-the-management-console/) as an authentication token to every Management Console API endpoint except [`/setup/api/start`](#create-a-github-enterprise-server-license).

Use the `api_key` parameter to send this token with each request. Например:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

You can also use standard HTTP authentication to send this token. Например:

```shell
$ curl -L 'https://api_key:<em>your-amazing-password</em>@<em>hostname</em>:<em>admin_port</em>/setup/api'
```

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'management-console' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Organizations

The Organization Administration API allows you to create organizations on a {% data variables.product.prodname_ghe_server %} appliance. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Organization pre-receive hooks

The Organization Pre-receive Hooks API allows you to view and modify enforcement of the pre-receive hooks that are available to an organization.

### Object attributes

| Name                             | Тип       | Description                                               |
| -------------------------------- | --------- | --------------------------------------------------------- |
| `name`                           | `строка`  | The name of the hook.                                     |
| `enforcement`                    | `строка`  | The state of enforcement for the hook on this repository. |
| `allow_downstream_configuration` | `boolean` | Whether repositories can override enforcement.            |
| `configuration_url`              | `строка`  | URL for the endpoint where enforcement is set.            |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.

`configuration_url` may be a link to this endpoint or this hook's global configuration. Only site admins are able to access the global configuration.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'org-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Pre-receive environments

The Pre-receive Environments API allows you to create, list, update and delete environments for pre-receive hooks. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

### Object attributes

#### Pre-receive Environment

| Name                  | Тип       | Description                                                                                                      |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                | `строка`  | The name of the environment as displayed in the UI.                                                              |
| `image_url`           | `строка`  | URL to the tarball that will be downloaded and extracted.                                                        |
| `default_environment` | `boolean` | Whether this is the default environment that ships with {% data variables.product.prodname_ghe_server %}. |
| `download`            | `объект`  | This environment's download status.                                                                              |
| `hooks_count`         | `integer` | The number of pre-receive hooks that use this environment.                                                       |

#### Pre-receive Environment Download

| Name            | Тип      | Description                                             |
| --------------- | -------- | ------------------------------------------------------- |
| `state`         | `строка` | The state of the most recent download.                  |
| `downloaded_at` | `строка` | The time when the most recent download started.         |
| `message`       | `строка` | On failure, this will have any error messages produced. |

Possible values for `state` are `not_started`, `in_progress`, `success`, `failed`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-environments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Pre-receive hooks

The Pre-receive Hooks API allows you to create, list, update and delete pre-receive hooks. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

### Object attributes

#### Pre-receive Hook

| Name                             | Тип       | Description                                                     |
| -------------------------------- | --------- | --------------------------------------------------------------- |
| `name`                           | `строка`  | The name of the hook.                                           |
| `script`                         | `строка`  | The script that the hook runs.                                  |
| `script_repository`              | `объект`  | The GitHub repository where the script is kept.                 |
| `environment`                    | `объект`  | The pre-receive environment where the script is executed.       |
| `enforcement`                    | `строка`  | The state of enforcement for this hook.                         |
| `allow_downstream_configuration` | `boolean` | Whether enforcement can be overridden at the org or repo level. |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repository pre-receive hooks

The Repository Pre-receive Hooks API allows you to view and modify enforcement of the pre-receive hooks that are available to a repository.

### Object attributes

| Name                | Тип      | Description                                               |
| ------------------- | -------- | --------------------------------------------------------- |
| `name`              | `строка` | The name of the hook.                                     |
| `enforcement`       | `строка` | The state of enforcement for the hook on this repository. |
| `configuration_url` | `строка` | URL for the endpoint where enforcement is set.            |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.

`configuration_url` may be a link to this repository, it's organization owner or global configuration. Authorization to access the endpoint at `configuration_url` is determined at the owner or site admin level.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Search indexing

The Search Indexing API allows you to queue up a variety of search indexing tasks. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'search-indexing' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Users

The User Administration API allows you to promote, demote, suspend, and unsuspend users on a {% data variables.product.prodname_ghe_server %} appliance. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `403` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
