---
ms.openlocfilehash: 0ddaff32c8e4e8807f39d09629ec316e8211811a
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141525401"
---
### <a name="scim-provisioning-for-organizations"></a>Подготовка SCIM для организаций

Поставщики удостоверений с поддержкой SCIM используют API SCIM для автоматизации подготовки членства в организации {% data variables.product.product_name %}. API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} основан на [стандарте SCIM](http://www.simplecloud.info/) версии 2.0. IdP должен использовать следующую конечную точку SCIM {% data variables.product.product_name %}: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Примечания.** 
  - API SCIM доступен только организациям в [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) с включенным [единым входом SAML](/rest/overview/other-authentication-methods#authenticating-for-saml-sso). {% data reusables.scim.enterprise-account-scim %} Дополнительные сведения о SCIM см. в [этой статье](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim).
  - API SCIM невозможно использовать с {% data variables.product.prodname_emus %}.

{% endnote %}

### <a name="authenticating-calls-to-the-scim-api"></a>Проверка подлинности вызовов API SCIM

Для использования API SCIM необходимо пройти проверку подлинности в качестве владельца организации {% data variables.product.product_name %}. API ожидает, что маркер [носителя OAuth 2.0](/developers/apps/authenticating-with-github-apps) будет включен в заголовок `Authorization`. Вы также можете использовать личный маркер доступа, но сначала его необходимо [авторизовать для использования в организации единого входа SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### <a name="mapping-of-saml-and-scim-data"></a>Сопоставление данных SAML и SCIM

{% data reusables.scim.nameid-and-username-must-match %}

### <a name="supported-scim-user-attributes"></a>Поддерживаемые атрибуты пользователя SCIM

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