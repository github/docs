---
title: Устранение неполадок с управлением удостоверениями и доступом для вашей организации
intro: 'Просмотрите и разрешите распространенные ошибки по устранению неполадок с управлением единым входом SAML вашей организации, синхронизацией команд или подключением поставщика удостоверений (IdP).'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Troubleshooting access
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
ms.openlocfilehash: d3110d61fb511f55aa840d0911c036dd342fa833
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106976'
---
{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## Некоторые пользователи не подготовлены или их подготовка отменена системой SCIM

При возникновении проблем с подготовкой пользователей рекомендуется проверить наличие метаданных SCIM. 

{% data reusables.scim.changes-should-come-from-idp %}

Если у участника организации отсутствуют метаданные SCIM, можно вручную повторно подготовить SCIM для пользователя с помощью поставщика удостоверений.

### Аудит пользователей для отсутствия метаданных SCIM

Если вы подозреваете или заметили, что какие-то пользователи не подготовлены или их подготовка не отменена должным образом, рекомендуется провести аудит всех пользователей в вашей организации.

Чтобы проверить, есть ли у пользователей удостоверение SCIM (метаданные SCIM) во внешнем удостоверении, можно просмотреть метаданные SCIM для одного члена организации за раз {% data variables.product.prodname_dotcom %} или программно проверить всех участников организации с помощью API {% data variables.product.prodname_dotcom %}.

#### Аудит участников организации в {% data variables.product.prodname_dotcom %}

Чтобы подтвердить, что метаданные SCIM существуют для одного участника организации, владельцу организации необходимо перейти на этот URL-адрес и заменить `<organization>` и `<username>`: 

> `https://github.com/orgs/<organization>/people/<username>/sso`

Если внешнее удостоверение пользователя содержит метаданные SCIM, владелец организации увидит на этой странице раздел удостоверений SCIM. Если внешнее удостоверение не содержит метаданные SCIM, раздел "Удостоверение SCIM" не будет существовать.

#### Аудит участников организации посредством API {% data variables.product.prodname_dotcom %}

Как владелец организации, вы также можете запросить REST API SCIM или GraphQL, чтобы получить список всех подготовленных удостоверений SCIM в организации. 

#### Использование REST API

REST API SCIM будет возвращать данные только для пользователей с метаданными SCIM, заполненными в разделе их внешних удостоверений. Рекомендуется сравнить список подготовленных удостоверений SCIM со списком всех участников организации.

Дополнительные сведения см. в разделе:
  - [Список подготовленных удостоверений SCIM](/rest/reference/scim#list-scim-provisioned-identities)
  - [Список участников организации](/rest/reference/orgs#list-organization-members)

#### Использование GraphQL

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
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

Дополнительные сведения об использовании API GraphQL см. в разделе: 
   - [Инструкции по GraphQL](/graphql/guides)
   - [GraphQL Explorer](/graphql/overview/explorer)

### Повторная подготовка SCIM для пользователей с помощью поставщика удостоверений

ScIM можно вручную повторно подготовить для пользователей с помощью поставщика удостоверений. Например, чтобы устранить ошибки подготовки для Okta, на портале администрирования Okta можно отменить назначение и переназначить пользователей приложению {% data variables.product.prodname_dotcom %}. При этом должен активироваться Okta, чтобы выполнить вызов API для заполнения метаданных SCIM для этих пользователей в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Отмена назначения пользователей из приложений](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm) или [Назначение пользователей приложениям](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm) в документации Okta.

Чтобы убедиться, что удостоверение SCIM пользователя создано, рекомендуется протестировать этот процесс с одним участником организации, для которого подтверждено отсутствие внешнего удостоверения SCIM. После обновления пользователей в IdP вручную можно проверить, создано ли удостоверение SCIM пользователя с помощью API SCIM или с помощью {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Аудит пользователей для отсутствия метаданных SCIM](#auditing-users-for-missing-scim-metadata) или конечную точку REST API [Получение сведений о подготовке SCIM для пользователя](/rest/reference/scim#get-scim-provisioning-information-for-a-user).

Если повторная подготовка SCIM для пользователей не решает проблему, обратитесь в службу поддержки {% data variables.product.prodname_dotcom %}.

## Дополнительные сведения

- [Устранение неполадок с управлением удостоверениями и доступом для организации](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)
