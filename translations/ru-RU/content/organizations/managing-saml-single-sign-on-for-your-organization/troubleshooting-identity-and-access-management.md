---
title: Устранение неполадок с удостоверениями и управление доступом
intro: Просмотрите и разрешите распространенные ошибки по устранению неполадок с управлением единым входом SAML вашей организации, синхронизацией команд или подключением поставщика удостоверений (IdP).
versions:
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Troubleshooting access
ms.openlocfilehash: ad67d0fd825ce86ba5b3c478706df57506c39f5d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145125603"
---
## <a name="some-users-are-not-provisioned-or-deprovisioned-by-scim"></a>Некоторые пользователи не подготовлены или их подготовка отменена системой SCIM

При возникновении проблем с подготовкой пользователей рекомендуется проверить наличие метаданных SCIM. 

{% data reusables.scim.changes-should-come-from-idp %}

Если у участника организации отсутствуют метаданные SCIM, можно вручную повторно подготовить SCIM для пользователя с помощью поставщика удостоверений.

### <a name="auditing-users-for-missing-scim-metadata"></a>Аудит пользователей для отсутствия метаданных SCIM

Если вы подозреваете или заметили, что какие-то пользователи не подготовлены или их подготовка не отменена должным образом, рекомендуется провести аудит всех пользователей в вашей организации.

Чтобы проверить, есть ли у пользователей удостоверение SCIM (метаданные SCIM) во внешнем удостоверении, можно просмотреть метаданные SCIM для одного члена организации за раз {% data variables.product.prodname_dotcom %} или программно проверить всех участников организации с помощью API {% data variables.product.prodname_dotcom %}.

#### <a name="auditing-organization-members-on--data-variablesproductprodname_dotcom-"></a>Аудит участников организации в {% data variables.product.prodname_dotcom %}

Чтобы подтвердить, что метаданные SCIM существуют для одного участника организации, владельцу организации необходимо перейти на этот URL-адрес и заменить `<organization>` и `<username>`: 

> `https://github.com/orgs/<organization>/people/<username>/sso`

Если внешнее удостоверение пользователя содержит метаданные SCIM, владелец организации увидит на этой странице раздел удостоверений SCIM. Если внешнее удостоверение не содержит метаданные SCIM, раздел "Удостоверение SCIM" не будет существовать.

#### <a name="auditing-organization-members-through-the--data-variablesproductprodname_dotcom--api"></a>Аудит участников организации посредством API {% data variables.product.prodname_dotcom %}

Как владелец организации, вы также можете запросить REST API SCIM или GraphQL, чтобы получить список всех подготовленных удостоверений SCIM в организации. 

#### <a name="using-the-rest-api"></a>Использование REST API

REST API SCIM будет возвращать данные только для пользователей с метаданными SCIM, заполненными в разделе их внешних удостоверений. Рекомендуется сравнить список подготовленных удостоверений SCIM со списком всех участников организации.

Дополнительные сведения см. в разделе:
  - [Список подготовленных удостоверений SCIM](/rest/reference/scim#list-scim-provisioned-identities)
  - [Список участников организации](/rest/reference/orgs#list-organization-members)

#### <a name="using-graphql"></a>Использование GraphQL

В этом запросе GraphQL показаны SAML `NameId`, SCIM `UserName` и имя пользователя {% data variables.product.prodname_dotcom %} (`login`) для каждого пользователя в организации. Чтобы использовать этот запрос, замените `ORG` на название своей организации. 

```graphql
{
  organization(login: "ORG") {
    samlIdentityProvider {
      ssoUrl
      externalIdentities(first: 100) {
        edges {
          node {
            samlIdentity {
              nameId
            }
            scimIdentity {
              username
            }
            user {
              login
            }
          }
        }
      }
    }
  }
}
```

```shell
curl -X POST -H "Authorization: Bearer <personal access token>" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

Дополнительные сведения об использовании API GraphQL см. в разделе: 
   - [Инструкции по GraphQL](/graphql/guides)
   - [GraphQL Explorer](/graphql/overview/explorer)

### <a name="re-provisioning-scim-for-users-through-your-identity-provider"></a>Повторная подготовка SCIM для пользователей с помощью поставщика удостоверений

ScIM можно вручную повторно подготовить для пользователей с помощью поставщика удостоверений. Например, чтобы устранить ошибки подготовки для Okta, на портале администрирования Okta можно отменить назначение и переназначить пользователей приложению {% data variables.product.prodname_dotcom %}. При этом должен активироваться Okta, чтобы выполнить вызов API для заполнения метаданных SCIM для этих пользователей в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Отмена назначения пользователей из приложений](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm) или [Назначение пользователей приложениям](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm) в документации Okta.

Чтобы убедиться, что удостоверение SCIM пользователя создано, рекомендуется протестировать этот процесс с одним участником организации, для которого подтверждено отсутствие внешнего удостоверения SCIM. После обновления пользователей в IdP вручную можно проверить, создано ли удостоверение SCIM пользователя с помощью API SCIM или с помощью {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Аудит пользователей для отсутствия метаданных SCIM](#auditing-users-for-missing-scim-metadata) или конечную точку REST API [Получение сведений о подготовке SCIM для пользователя](/rest/reference/scim#get-scim-provisioning-information-for-a-user).

Если повторная подготовка SCIM для пользователей не решает проблему, обратитесь в службу поддержки {% data variables.product.prodname_dotcom %}.
