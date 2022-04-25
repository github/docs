---
title: GitHub Enterprise administration
intro: You can use these endpoints to administer your enterprise.
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
  - /rest/reference/enterprise-admin
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: Enterprise administration
children:
  - /admin-stats
  - /announcement
  - /audit-log
  - /billing
  - /global-webhooks
  - /ldap
  - /license
  - /management-console
  - /org-pre-receive-hooks
  - /orgs
  - /pre-receive-environments
  - /pre-receive-hooks
  - /repo-pre-receive-hooks
  - /users
  - /scim
---

{% ifversion fpt or ghec %}

{% note %}

**Note:** This article applies to {% data variables.product.prodname_ghe_cloud %}. To see the {% data variables.product.prodname_ghe_managed %} or {% data variables.product.prodname_ghe_server %} version, use the **{% data ui.pages.article_version %}** drop-down menu.

{% endnote %}

{% endif %}

### Endpoint URLs

REST API endpoints{% ifversion ghes %}—except [Management Console](#management-console) API endpoints—{% endif %} are prefixed with the following URL:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %}
When endpoints include `{enterprise}`, replace `{enterprise}` with the handle for your enterprise account, which is included in the URL for your enterprise settings. For example, if your enterprise account is located at `https://github.com/enterprises/octo-enterprise`, replace `{enterprise}` with `octo-enterprise`.
{% endif %}

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

{% endif %}