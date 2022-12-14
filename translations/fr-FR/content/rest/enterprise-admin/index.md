---
title: Administration de GitHub Enterprise
intro: Vous pouvez utiliser ces points de terminaison pour administrer votre entreprise.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065592'
---
{% ifversion fpt or ghec %}

{% note %}

**Remarque :** Cet article s’applique à {% data variables.product.prodname_ghe_cloud %}. Pour afficher la version de {% data variables.product.prodname_ghe_managed %} ou {% data variables.product.prodname_ghe_server %}, utilisez le menu déroulant **{% data ui.pages.article_version %}** .

{% endnote %}

{% endif %}

### URL de point de terminaison

Les points de terminaison de l’API REST{% ifversion ghes %}, à l’exception des points de terminaison de l’API [Console de gestion](#management-console),{% endif %} sont précédés de l’URL suivante :

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} Lorsque les points de terminaison incluent `{enterprise}`, remplacez `{enterprise}` par le descripteur de votre compte d’entreprise, qui est inclus dans l’URL de vos paramètres d’entreprise. Par exemple, si votre compte d’entreprise se trouve à `https://github.com/enterprises/octo-enterprise`l’emplacement, remplacez `{enterprise}` par `octo-enterprise`.
{% endif %}

{% ifversion ghes %} [Console de gestion](#management-console) Les points de terminaison d’API sont précédés uniquement d’un nom d’hôte :

```shell
http(s)://<em>hostname</em>/
```
{% endif %} {% ifversion ghae or ghes %}
### Authentification

Vos points de terminaison d’API d’installation de {% data variables.product.product_name %} acceptent [les mêmes méthodes d’authentification](/rest/overview/resources-in-the-rest-api#authentication) que l’API GitHub.com. Vous pouvez vous authentifier avec des **[jetons OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(qui peuvent être créés à l’aide de [l’API d’autorisations](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}ou **[l’authentification de base](/rest/overview/resources-in-the-rest-api#basic-authentication)** . {% ifversion ghes %} Les jetons OAuth doivent avoir l’[étendue OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) `site_admin` lorsqu’ils sont utilisés avec des points de terminaison spécifiques à l’entreprise.{% endif %}

Les points de terminaison de l’API d’administration d’entreprise sont uniquement accessibles aux administrateurs de site {% data variables.product.product_name %} authentifiés{% ifversion ghes %}, à l’exception de l’API [Console de gestion](#management-console), qui nécessite le [mot de passe de la console de gestion](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Informations sur la version

La version actuelle de votre entreprise est retournée dans l’en-tête de réponse de chaque API : `X-GitHub-Enterprise-Version: {{currentVersion}}.0`
Vous pouvez également lire la version actuelle en appelant le [point de terminaison meta](/rest/reference/meta/).

{% endif %}
