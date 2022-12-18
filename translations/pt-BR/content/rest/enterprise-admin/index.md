---
title: Administração do GitHub Enterprise
intro: Você pode usar esses pontos de extremidade para administrar a empresa.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065589'
---
{% ifversion fpt or ghec %}

{% note %}

**Observação:** este artigo se aplica ao {% data variables.product.prodname_ghe_cloud %}. Para ver a versão do {% data variables.product.prodname_ghe_managed %} ou do {% data variables.product.prodname_ghe_server %}, use o menu suspenso **{% data ui.pages.article_version %}** .

{% endnote %}

{% endif %}

### URLs do ponto de extremidade

Os pontos de extremidade da API REST{% ifversion ghes %}, exceto os pontos de extremidade da API do [Console de Gerenciamento](#management-console), {% endif %} têm a seguinte URL como prefixo:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} Quando os pontos de extremidade incluírem `{enterprise}`, substitua `{enterprise}` pelo identificador da sua conta corporativa, que está incluído na URL das configurações corporativas. Por exemplo, se a sua conta corporativa estiver localizada em `https://github.com/enterprises/octo-enterprise`, substitua `{enterprise}` por `octo-enterprise`.
{% endif %}

{% ifversion ghes %} Os pontos de extremidade da API do [Console de Gerenciamento](#management-console) só têm um nome do host como prefixo:

```shell
http(s)://<em>hostname</em>/
```
{% endif %} {% ifversion ghae or ghes %}
### Autenticação

Os pontos de extremidade da API de instalação do {% data variables.product.product_name %} aceitam [os mesmos métodos de autenticação](/rest/overview/resources-in-the-rest-api#authentication) da API do GitHub.com. Você pode se autenticar com os **[tokens OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(que podem ser criados por meio da [API de Autorizações](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}ou com a **[autenticação básica](/rest/overview/resources-in-the-rest-api#basic-authentication)** . {% ifversion ghes %} Os tokens OAuth precisam ter o `site_admin` [escopo OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) quando usados com pontos de extremidade específicos do Enterprise.{% endif %}

Os pontos de extremidade da API de administração do Enterprise só podem ser acessados por administradores do site autenticados do {% data variables.product.product_name %} {% ifversion ghes %}, exceto a API do [Console de Gerenciamento](#management-console), que exige a [senha do Console de Gerenciamento](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Informações da versão

A versão atual da sua empresa é retornada no cabeçalho de resposta de cada API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0`
Leia também a versão atual chamando o [meta ponto de extremidade](/rest/reference/meta/).

{% endif %}
