---
ms.openlocfilehash: abd0fcfe706bf414e745dff299819acf88470be3
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141525449"
---
{% ifversion fpt or ghec %}

{% note %}

**Примечание.** Эта статья относится к {% data variables.product.prodname_ghe_cloud %}. Чтобы просмотреть версию {% data variables.product.prodname_ghe_managed %} или {% data variables.product.prodname_ghe_server %}, используйте раскрывающееся меню **{% data ui.pages.article_version %}** .

{% endnote %}

{% endif %}

### <a name="endpoint-urls"></a>URL-адреса конечных точек

Конечные точки REST API{% ifversion ghes %}, за исключением конечных точек API [консоли управления](#management-console){% endif %}, имеют префикс в виде следующего URL-адреса:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} Если конечные точки включают `{enterprise}`, замените `{enterprise}` дескриптором вашей корпоративной учетной записи, которая включена в URL-адрес для параметров предприятия. Например, если ваша корпоративная учетная запись находится по адресу `https://github.com/enterprises/octo-enterprise`, замените `{enterprise}` на `octo-enterprise`.
{% endif %}

{% ifversion ghes %} Конечные точки API [консоли управления](#management-console) имеют префикс только в виде имени узла:

```shell
http(s)://<em>hostname</em>/
```
{% endif %} {% ifversion ghae or ghes %}
### <a name="authentication"></a>Аутентификация

Конечные точки API установки {% data variables.product.product_name %} принимают [те же методы проверки подлинности](/rest/overview/resources-in-the-rest-api#authentication), что и API GitHub.com. Вы можете пройти проверку подлинности с **[помощью маркеров OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(которые можно создать с помощью [API авторизации](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}, или пройти **[обычную проверку подлинности](/rest/overview/resources-in-the-rest-api#basic-authentication)** . {% ifversion ghes %} При использовании с конечными точками, характерными для предприятия, маркеры OAuth должны иметь [область OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) `site_admin`.{ % endif %}

Конечные точки API администрирования предприятия доступны только для прошедших проверку подлинности администраторов сайта {% data variables.product.product_name %} {% ifversion ghes %}. Исключением является API [консоли управления](#management-console), для которого требуется [пароль консоли управления](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### <a name="version-information"></a>Сведения о версии

Текущая версия предприятия возвращается в заголовке ответа каждого API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0`
Текущую версию можно также узнать, вызвав [конечную метаточку](/rest/reference/meta/).

{% endif %}