---
title: GitHub Enterprise administration
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: Enterprise administration
---

You can use these endpoints to administer your enterprise.

{% ifversion fpt %}

{% note %}

**Note:** This article applies to {% data variables.product.prodname_ghe_cloud %}. To see the {% data variables.product.prodname_ghe_managed %} or {% data variables.product.prodname_ghe_server %} version, use the **{% data ui.pages.article_version %}** drop-down menu.

{% endnote %}

{% endif %}

### Endpoint URLs

REST API endpoints{% ifversion ghes %}—except [Management Console](#management-console) API endpoints—{% endif %} are prefixed with the following URL:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion ghes %}
[Management Console](#management-console) API endpoints are only prefixed with a hostname:

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% ifversion ghae or ghes %}
### Authentication

Your {% data variables.product.product_name %} installation's API endpoints accept [the same authentication methods](/rest/overview/resources-in-the-rest-api#authentication) as the GitHub.com API. You can authenticate yourself with **[OAuth tokens](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(which can be created using the [Authorizations API](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}or **[basic authentication](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% ifversion ghes %}
OAuth tokens must have the `site_admin` [OAuth scope](/developers/apps/scopes-for-oauth-apps#available-scopes) when used with Enterprise-specific endpoints.{% endif %}

Enterprise administration API endpoints are only accessible to authenticated {% data variables.product.product_name %} site administrators{% ifversion ghes %}, except for the [Management Console](#management-console) API, which requires the [Management Console password](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Version information

The current version of your enterprise is returned in the response header of every API:
`X-GitHub-Enterprise-Version: {{currentVersion}}.0`
You can also read the current version by calling the [meta endpoint](/rest/reference/meta/).

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% endif %}

{% ifversion fpt %}

## Audit log

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'audit-log' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt %}
## Billing

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'billing' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes > 2.21 or ghae %}
## GitHub Actions

{% data reusables.actions.ae-beta %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'actions' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Admin stats

The Admin Stats API provides a variety of metrics about your installation. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'admin-stats' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes > 2.22 %}

## Announcements

The Announcements API allows you to manage the global announcement banner in your enterprise. For more information, see "[Customizing user messages for your enterprise](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'announcement' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}

## Global webhooks

Global webhooks are installed on your enterprise. You can use global webhooks to automatically monitor, respond to, or enforce rules for users, organizations, teams, and repositories on your enterprise. Global webhooks can subscribe to the [organization](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [user](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repository](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [team](/developers/webhooks-and-events/webhook-events-and-payloads#team), [member](/developers/webhooks-and-events/webhook-events-and-payloads#member), [membership](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [fork](/developers/webhooks-and-events/webhook-events-and-payloads#fork), and [ping](/developers/webhooks-and-events/about-webhooks#ping-event) event types.

*This API is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it. To learn how to configure global webhooks, see [About global webhooks](/enterprise/admin/user-management/about-global-webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'global-webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## LDAP

You can use the LDAP API to update account relationships between a {% data variables.product.product_name %} user or team and its linked LDAP entry or queue a new synchronization.

With the LDAP mapping endpoints, you're able to update the Distinguished Name (DN) that a user or team maps to. Note that the LDAP endpoints are generally only effective if your {% data variables.product.product_name %} appliance has [LDAP Sync enabled](/enterprise/admin/authentication/using-ldap). The [Update LDAP mapping for a user](#update-ldap-mapping-for-a-user) endpoint can be used when LDAP is enabled, even if LDAP Sync is disabled.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'ldap' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}


{% ifversion ghae or ghes %}
## License

The License API provides information on your Enterprise license. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'license' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Management console

The Management Console API helps you manage your {% data variables.product.product_name %} installation.

{% tip %}

You must explicitly set the port number when making API calls to the Management Console. If TLS is enabled on your enterprise, the port number is `8443`; otherwise, the port number is `8080`.

If you don't want to provide a port number, you'll need to configure your tool to automatically follow redirects.

You may also need to add the [`-k` flag](http://curl.haxx.se/docs/manpage.html#-k) when using `curl`, since {% data variables.product.product_name %} uses a self-signed certificate before you [add your own TLS certificate](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Authentication

You need to pass your [Management Console password](/enterprise/admin/articles/accessing-the-management-console/) as an authentication token to every Management Console API endpoint except [`/setup/api/start`](#create-a-github-enterprise-server-license).

Use the `api_key` parameter to send this token with each request. For example:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

You can also use standard HTTP authentication to send this token. For example:

```shell
$ curl -L 'https://api_key:<em>your-amazing-password</em>@<em>hostname</em>:<em>admin_port</em>/setup/api'
```

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'management-console' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes > 3.2 %}

## Git LFS

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'lfs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Organizations

The Organization Administration API allows you to create organizations on your enterprise. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}


{% ifversion ghes %}
## Organization pre-receive hooks

The Organization Pre-receive Hooks API allows you to view and modify
enforcement of the pre-receive hooks that are available to an organization.

### Object attributes

| Name                             | Type      | Description                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | The name of the hook.                                     |
| `enforcement`                    | `string`  | The state of enforcement for the hook on this repository. |
| `allow_downstream_configuration` | `boolean` | Whether repositories can override enforcement.            |
| `configuration_url`              | `string`  | URL for the endpoint where enforcement is set.            |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject
any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.

`configuration_url` may be a link to this endpoint or this hook's global
configuration. Only site admins are able to access the global configuration.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'org-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Pre-receive environments

The Pre-receive Environments API allows you to create, list, update and delete environments for pre-receive hooks. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

### Object attributes

#### Pre-receive Environment

| Name                  | Type      | Description                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | The name of the environment as displayed in the UI.                        |
| `image_url`           | `string`  | URL to the tarball that will be downloaded and extracted.                  |
| `default_environment` | `boolean` | Whether this is the default environment that ships with {% data variables.product.product_name %}. |
| `download`            | `object`  | This environment's download status.                                        |
| `hooks_count`         | `integer` | The number of pre-receive hooks that use this environment.                 |

#### Pre-receive Environment Download

| Name            | Type     | Description                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | The state of the most recent download.                  |
| `downloaded_at` | `string` | The time when the most recent download started.         |
| `message`       | `string` | On failure, this will have any error messages produced. |

Possible values for `state` are `not_started`, `in_progress`, `success`, `failed`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-environments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}
## Pre-receive hooks

The Pre-receive Hooks API allows you to create, list, update and delete pre-receive hooks. *It is only available to
[authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

### Object attributes

#### Pre-receive Hook

| Name                             | Type      | Description                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | The name of the hook.                                           |
| `script`                         | `string`  | The script that the hook runs.                                  |
| `script_repository`              | `object`  | The GitHub repository where the script is kept.                 |
| `environment`                    | `object`  | The pre-receive environment where the script is executed.       |
| `enforcement`                    | `string`  | The state of enforcement for this hook.                         |
| `allow_downstream_configuration` | `boolean` | Whether enforcement can be overridden at the org or repo level. |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject
any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Repository pre-receive hooks

The Repository Pre-receive Hooks API allows you to view and modify
enforcement of the pre-receive hooks that are available to a repository.

### Object attributes

| Name                | Type     | Description                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | The name of the hook.                                     |
| `enforcement`       | `string` | The state of enforcement for the hook on this repository. |
| `configuration_url` | `string` | URL for the endpoint where enforcement is set.            |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.

`configuration_url` may be a link to this repository, it's organization owner or global configuration. Authorization to access the endpoint at `configuration_url` is determined at the owner or site admin level.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Users

The User Administration API allows you to suspend{% ifversion ghes %}, unsuspend, promote, and demote{% endif %}{% ifversion ghae %} and unsuspend{% endif %} users on your enterprise. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `403` response if they try to access it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
