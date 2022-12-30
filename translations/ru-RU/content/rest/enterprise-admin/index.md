---
title: Администрирование GitHub Enterprise
intro: Эти конечные точки можно использовать для администрирования предприятия.
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
ms.openlocfilehash: 0711dad622e4c7932db192bb17e1bb845e9c0610
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094540'
---
{% ifversion fpt or ghec %}

{% note %}

**Примечание.** Эта статья относится к {% data variables.product.prodname_ghe_cloud %}. Чтобы просмотреть версию {% data variables.product.prodname_ghe_managed %} или {% data variables.product.prodname_ghe_server %}, используйте раскрывающееся меню **{% data ui.pages.article_version %}** .

{% endnote %}

{% endif %}

{% данных reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### URL-адреса конечных точек

Конечные точки REST API{% ifversion ghes %}, за исключением конечных точек API [консоли управления](#management-console){% endif %}, имеют префикс в виде следующего URL-адреса:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} Если конечные точки включают `{enterprise}`, замените `{enterprise}` дескриптором вашей корпоративной учетной записи, которая включена в URL-адрес для параметров предприятия. Например, если ваша корпоративная учетная запись находится по адресу `https://github.com/enterprises/octo-enterprise`, замените `{enterprise}` на `octo-enterprise`.
{% endif %}

{% ifversion ghes %} Конечные точки API [консоли управления](#management-console) имеют префикс только в виде имени узла:

```shell
http(s)://HOSTNAME/
```
{% endif %} {% ifversion ghae or ghes %}
### Аутентификация

Конечные точки API установки {% data variables.product.product_name %} принимают [те же методы проверки подлинности](/rest/overview/resources-in-the-rest-api#authentication), что и API GitHub.com. Вы можете пройти проверку подлинности с **[помощью маркеров OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(которые можно создать с помощью [API авторизации](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}, или пройти **[обычную проверку подлинности](/rest/overview/resources-in-the-rest-api#basic-authentication)** . {% ifversion ghes %} При использовании с конечными точками, характерными для предприятия, маркеры OAuth должны иметь [область OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) `site_admin`.{% endif %}

Конечные точки API администрирования предприятия доступны только для прошедших проверку подлинности администраторов сайта {% data variables.product.product_name %} {% ifversion ghes %}. Исключением является API [консоли управления](#management-console), для которого требуется [пароль консоли управления](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Сведения о версии

Текущая версия предприятия возвращается в заголовке ответа каждого API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0`
Текущую версию можно также узнать, вызвав [конечную метаточку](/rest/reference/meta/).

{% endif %}
