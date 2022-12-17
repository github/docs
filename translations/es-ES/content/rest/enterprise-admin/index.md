---
title: Administración de GitHub Enterprise
intro: Puedes usar estos puntos de conexión para administrar la empresa.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065598'
---
{% ifversion fpt or ghec %}

{% note %}

**Nota**: Este artículo se aplica a {% data variables.product.prodname_ghe_cloud %}. Para ver la versión de {% data variables.product.prodname_ghe_managed %} o de {% data variables.product.prodname_ghe_server %}, utiliza el menú desplegable de **{% data ui.pages.article_version %}** .

{% endnote %}

{% endif %}

### URL de las Terminales

Los puntos de conexión de la API REST{% ifversion ghes %} (excepto los puntos de conexión de la API de la [Consola de administración](#management-console)){% endif %} van precedidos de la siguiente URL:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} Cuando los puntos de conexión incluyen `{enterprise}`, reemplaza `{enterprise}` por el control de tu cuenta empresarial, que se incluye en la URL de la configuración de tu empresa. Por ejemplo, si la cuenta de empresa se encuentra en `https://github.com/enterprises/octo-enterprise`, reemplace `{enterprise}` por `octo-enterprise`.
{% endif %}

{% ifversion ghes %} Los puntos de conexión de la API de la [Consola de administración](#management-console) solo vienen precedidos por un nombre de host:

```shell
http(s)://<em>hostname</em>/
```
{% endif %} {% ifversion ghae or ghes %}
### Authentication

Los puntos de conexión de la API de instalación de {% data variables.product.product_name %} aceptan [los mismos métodos de autenticación](/rest/overview/resources-in-the-rest-api#authentication) que la API de GitHub.com. Puede autenticarse con **[tokens de OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(que se pueden crear mediante la [API de autorizaciones](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}o **[autenticación básica](/rest/overview/resources-in-the-rest-api#basic-authentication)** . {% ifversion ghes %} Los tokens de OAuth deben tener el elemento `site_admin` [ámbito de OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) cuando se usan con puntos de conexión específicos de Enterprise.{% endif %}

Los puntos de conexión de la API para la administración empresarial solo son accesibles para los administradores del sitio {% data variables.product.product_name %} {% ifversion ghes %}, excepto para la API de la [Consola de administración](#management-console), que requiere la [contraseña de la Consola de administración](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Información de la versión

La versión actual de la empresa se devuelve en el encabezado de respuesta de cada API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0`
También puedes leer la versión actual llamando al [punto de conexión de meta](/rest/reference/meta/).

{% endif %}
