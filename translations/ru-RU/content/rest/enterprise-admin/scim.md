---
title: SCIM
intro: Вы можете автоматизировать создание пользователей и членство в команде с помощью API SCIM.
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107280'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## Сведения об API SCIM

{% data variables.product.product_name %} предоставляет API SCIM для использования поставщиками удостоверений (IDP) с поддержкой SCIM. Интеграция с поставщиком удостоверений может использовать API для автоматической подготовки, администрирования или отзыва учетных записей пользователей в экземпляре {% data variables.product.product_name %}, который использует единый вход SAML для проверки подлинности. Дополнительные сведения о едином входе SAML см. в разделе [Сведения о SAML для корпоративного IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

API SCIM основан на SCIM 2.0. Дополнительные сведения см. в [спецификации](https://www.simplecloud.info/#Specification).

### URL-адреса конечных точек SCIM

Поставщик удостоверений может использовать следующий корневой URL-адрес для взаимодействия с API SCIM для экземпляра {% data variables.product.product_name %}.

```
{% data variables.product.api_url_code %}/scim/v2/
```

URL-адреса конечных точек для API SCIM чувствительны к регистру. Например, первая буква в конечной точке `Users` должна быть прописной.

```shell
GET /scim/v2/Users/{scim_user_id}
```

### Проверка подлинности вызовов API SCIM

Интеграция SCIM с поставщиком удостоверений выполняет действия от имени владельца предприятия для экземпляра {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Роли в организации](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners).

Для проверки подлинности запросов к API пользователь, который настраивает SCIM для поставщика удостоверений, должен использовать {% data variables.product.pat_v1 %} с `admin:enterprise` областью, которую поставщик удостоверений должен указать в заголовке `Authorization` запроса. Дополнительные сведения о {% data variables.product.pat_v1_plural %} см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% note %}

**Примечание:** Владельцы предприятия должны создавать и использовать {% data variables.product.pat_v1 %} для проверки подлинности запросов к API SCIM. {% ifversion ghes > 3.8 %} {% data variables.product.pat_v2_caps %} и {% endif %}Вызывающие приложения GitHub в настоящее время не поддерживаются.

{% endnote %}

### Сведения о сопоставлении данных SAML и SCIM
  
Экземпляр {% data variables.product.product_name %} связывает каждого пользователя, успешно прошедшего проверку подлинности с помощью единого входа SAML, с удостоверением SCIM. Для успешного связывания удостоверений поставщик удостоверений SAML и интеграция SCIM должны использовать соответствующие значения SAML `NameID` и SCIM `userName` для каждого пользователя.

{% ifversion ghes > 3.7 %} {% примечание %}

**Примечание:** Если {% data variables.product.product_name %} использует Azure AD в качестве поставщика удостоверений SAML, {% data variables.product.product_name %} также проверит утверждение SCIM `externalId` и утверждение SAML `http://schemas.microsoft.com/identity/claims/objectidentifier` на соответствие пользователям вместо использования `NameID` и `userName`. 

{% endnote %} {% endif %}

### Поддерживаемые атрибуты пользователя SCIM

Конечные точки API `User` SCIM поддерживают следующие атрибуты в параметрах запроса.

| Имя | Тип | Описание |
| :- | :- | :- |
| `displayName` | Строка | Понятное имя пользователя. |
| `name.formatted` | Строка | Полное имя пользователя, включая все отчества, заголовки и суффиксы, отформатированные для отображения.
| `name.givenName` | Строка | Имя пользователя. |
| `name.familyName` | Строковый тип | Фамилия пользователя. |
| `userName` | Строковый тип | Имя пользователя, созданное поставщиком удостоверений. Перед использованием проходит [нормализацию](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization) . 
| `emails` | Array | Список сообщений электронной почты пользователя. |
| `roles` | Array | Список ролей пользователя. |
| `externalId` | Строковый тип | Этот идентификатор создается поставщиком поставщика удостоверений. Вы можете найти `externalId` для пользователя либо в поставщике удостоверений, либо с помощью конечной точки [Списка подготовленных SCIM удостоверений](#list-scim-provisioned-identities-for-an-enterprise) и фильтрации по другим известным атрибутам, таким как имя пользователя или адрес электронной почты пользователя в экземпляре {% data variables.product.product_name %}. |
| `id` | Строка | Идентификатор, созданный конечной точкой SCIM экземпляра. |
| `active` | Логическое | Указывает, является ли удостоверение активным (`true`) или должно быть приостановлено (`false`). |

