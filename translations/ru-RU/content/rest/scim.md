---
title: SCIM
intro: С помощью API SCIM вы можете управлять доступом для членов вашей организации GitHub.
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
ms.openlocfilehash: ba1205f098d7a21aa80e0bb1dbd6c3892c80484f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093802'
---
## Сведения об API SCIM

### Подготовка SCIM для организаций

Поставщики удостоверений с поддержкой SCIM используют API SCIM для автоматизации подготовки членства в организации {% data variables.product.product_name %}. API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} основан на [стандарте SCIM](http://www.simplecloud.info/) версии 2.0. IdP должен использовать следующую конечную точку SCIM {% data variables.product.product_name %}: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Примечания.** 
  - API SCIM доступен только отдельным организациям, которые используют [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) с включенным [единым входом SAML](/rest/overview/other-authentication-methods#authenticating-for-saml-sso). Дополнительные сведения об SCIM см. в статье [Сведения об SCIM для организаций](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).
  - API SCIM нельзя использовать с корпоративной учетной записью или с {% данных variables.enterprise.prodname_emu_org %}.

{% endnote %}

### Проверка подлинности вызовов API SCIM

Для использования API SCIM необходимо пройти проверку подлинности в качестве владельца организации {% data variables.product.product_name %}. API ожидает, что маркер [носителя OAuth 2.0](/developers/apps/authenticating-with-github-apps) будет включен в заголовок `Authorization`. Если для проверки подлинности используется {% данных variables.product.pat_v1 %}, она должна иметь `admin:org` область действия, а также [авторизовать ее для использования с организацией единого входа SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Сопоставление данных SAML и SCIM

{% data reusables.scim.nameid-and-username-must-match %}

### Поддерживаемые атрибуты пользователя SCIM

Имя | Тип | Описание
-----|------|--------------
`userName`|`string` | Имя пользователя.
`name.givenName`|`string` | Имя пользователя.
`name.familyName`|`string` | Фамилия пользователя.
`emails` | `array` | Список адресов электронной почты пользователя.
`externalId` | `string` | Этот идентификатор создается поставщиком SAML и используется этим поставщиком в качестве уникального идентификатора для сопоставления с пользователем GitHub. `externalID` для пользователя можно найти в поставщике SAML. Или используйте конечную точку [Список подготовленных удостоверений SCIM](#list-scim-provisioned-identities) и выполните фильтрацию по другим известным атрибутам, таким как имя пользователя или адрес электронной почты пользователя GitHub.
`id` | `string` | Идентификатор, созданный конечной точкой SCIM GitHub.
`active` | `boolean` | Указывает, является ли удостоверение активным (true), или оно должно быть отозвано (false).

{% note %}

**Примечание.** В URL-адресах конечных точек для API SCIM учитывается регистр. Например, первая буква в конечной точке `Users` должна быть прописной:

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
