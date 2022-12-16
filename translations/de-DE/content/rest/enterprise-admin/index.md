---
title: Verwaltung von GitHub Enterprise
intro: Du kannst mit diesen Endpunkten dein Unternehmen verwalten.
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
  - /code-security-and-analysis
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
ms.openlocfilehash: 19688f806101c8022b64dfc21806b79338917353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065593'
---
{% ifversion fpt or ghec %}

{% note %}

**Hinweis:** Dieser Artikel gilt für {% data variables.product.prodname_ghe_cloud %}. Um die {% data variables.product.prodname_ghe_managed %}- oder {% data variables.product.prodname_ghe_server %}-Version anzuzeigen, verwende das Dropdownmenü **{% data ui.pages.article_version %}**.

{% endnote %}

{% endif %}

### Endpunkt-URLs

REST-API-Endpunkte {% ifversion ghes %} – außer [Verwaltungskonsolen](#management-console)-API-Endpunkte –{% endif %} erhalten die folgende URL als Präfix:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} Wenn Endpunkte `{enterprise}` enthalten, ersetze `{enterprise}` durch das Handle für dein Unternehmenskonto, das in der URL für deine Unternehmenseinstellungen enthalten ist. Wenn sich dein Unternehmenskonto beispielsweise unter `https://github.com/enterprises/octo-enterprise` befindet, ersetze `{enterprise}` durch `octo-enterprise`.
{% endif %}

{% ifversion ghes %} [Verwaltungskonsole](#management-console)-API-Endpunkte erhalten nur einen Hostnamen als Präfix:

```shell
http(s)://<em>hostname</em>/
```
{% endif %} {% ifversion ghae or ghes %}
### Authentifizierung

Die API-Endpunkte deiner {% data variables.product.product_name %}-Installation akzeptieren [die gleichen Authentifizierungsmethoden](/rest/overview/resources-in-the-rest-api#authentication) wie die GitHub.com-API. Du kannst dich mit **[OAuth-Token](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(die mit der [Autorisierungs-API](/rest/reference/oauth-authorizations#create-a-new-authorization) erstellt werden können) {% endif %}oder **[per Standardauthentifizierung](/rest/overview/resources-in-the-rest-api#basic-authentication)** authentifizieren. {% ifversion ghes %} OAuth-Token müssen den `site_admin` [OAuth-Bereich](/developers/apps/scopes-for-oauth-apps#available-scopes) haben, wenn sie mit GitHub Enterprise-spezifischen Endpunkten verwendet werden.{% endif %}

Die Endpunkte der GitHub Enterprise-Verwaltungs-API sind nur für authentifizierte {% data variables.product.product_name %}-Websiteadministratoren zugänglich{% ifversion ghes %}, mit Ausnahme der [Verwaltungskonsolen](#management-console)-API, für die das [Kennwort für die Verwaltungskonsole](/enterprise/admin/articles/accessing-the-management-console/) erforderlich ist.{% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Versionsinformationen

Die aktuelle Version deines Unternehmens wird im Antwortheader jeder API zurückgegeben: `X-GitHub-Enterprise-Version: {{currentVersion}}.0`
Du kannst die aktuelle Version auch lesen, indem du den [Metaendpunkt](/rest/reference/meta/) aufrufst.

{% endif %}
