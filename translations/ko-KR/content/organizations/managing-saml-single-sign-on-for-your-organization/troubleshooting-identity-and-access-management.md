---
title: ID 및 액세스 관리 문제 해결
intro: 조직의 SAML SSO, 팀 동기화 또는 IdP(ID 공급자) 연결을 관리하기 위한 일반적인 문제 해결 오류를 검토하고 해결합니다.
versions:
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Troubleshooting access
ms.openlocfilehash: ad67d0fd825ce86ba5b3c478706df57506c39f5d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145125604"
---
## <a name="some-users-are-not-provisioned-or-deprovisioned-by-scim"></a>일부 사용자가 SCIM에서 프로비전되거나 프로비전 해제되지 않습니다.

사용자에 대한 프로비전 문제가 발생하는 경우 사용자에게 SCIM 메타데이터가 누락되었는지 확인하는 것이 좋습니다. 

{% data reusables.scim.changes-should-come-from-idp %}

조직 구성원에 SCIM 메타데이터가 누락되어 있다면 IdP를 통해 수동으로 사용자에 대한 SCIM을 다시 프로비전할 수 있습니다.

### <a name="auditing-users-for-missing-scim-metadata"></a>누락된 SCIM 메타데이터에 대한 사용자 감사

사용자가 예상대로 프로비전되거나 프로비전 해제되지 않은 것 같거나 이러함이 확인되었다면, 조직의 모든 사용자를 감사하는 것이 좋습니다.

사용자의 외부 ID에 SCIM ID(SCIM 메타데이터)가 있는지 확인하려면 {% data variables.product.prodname_dotcom %}에서 한 번에 한 조직 구성원의 SCIM 메타데이터를 검토하거나 {% data variables.product.prodname_dotcom %} API를 사용하여 모든 조직 구성원을 프로그래밍 방식으로 확인하면 됩니다.

#### <a name="auditing-organization-members-on--data-variablesproductprodname_dotcom-"></a>{% data variables.product.prodname_dotcom %}에서 조직 구성원 감사

단일 조직 구성원의 SCIM 메타데이터가 있는지 확인하기 위해 조직 소유자는 이 URL을 방문하여 `<organization>`을 `<username>`으로 바꿔야 합니다. 

> `https://github.com/orgs/<organization>/people/<username>/sso`

사용자의 외부 ID에 SCIM 메타데이터가 포함된 경우 조직 소유자는 관련 페이지에 SCIM ID 섹션을 표시해야 합니다. 외부 ID에 SCIM 메타데이터가 포함되어 있지 않다면 SCIM ID 섹션은 존재하지 않습니다.

#### <a name="auditing-organization-members-through-the--data-variablesproductprodname_dotcom--api"></a>{% data variables.product.prodname_dotcom %} API를 통한 조직 구성원 감사

조직 소유자는 SCIM REST API 또는 GraphQL을 쿼리하여 조직의 모든 SCIM 프로비전된 ID를 나열할 수도 있습니다. 

#### <a name="using-the-rest-api"></a>REST API 사용

SCIM REST API는 외부 ID에 SCIM 메타데이터가 채워진 사용자에 대해서만 데이터를 반환합니다. SCIM 프로비전된 ID 목록을 모든 조직 구성원 목록과 비교하면 도움이 됩니다.

자세한 내용은 다음을 참조하세요.
  - "[SCIM 프로비전된 ID 나열](/rest/reference/scim#list-scim-provisioned-identities)"
  - "[조직 구성원 나열](/rest/reference/orgs#list-organization-members)"

#### <a name="using-graphql"></a>GraphQL 사용

이 GraphQL 쿼리는 조직의 각 사용자에 대한 SAML `NameId`, SCIM `UserName` 및 {% data variables.product.prodname_dotcom %} 사용자 이름(`login`)을 보여 줍니다. 이 쿼리를 사용하려면 `ORG`를 조직 이름으로 바꿉니다. 

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

GraphQL API 사용에 대한 자세한 내용은 다음을 참조하세요. 
   - "[GraphQL 가이드](/graphql/guides)"
   - "[GraphQL 탐색기](/graphql/overview/explorer)"

### <a name="re-provisioning-scim-for-users-through-your-identity-provider"></a>ID 공급자를 통해 사용자를 위한 SCIM 다시 프로비전

IdP를 통해 수동으로 사용자를 위한 SCIM을 다시 프로비전할 수 있습니다. 예를 들어 OKTA에 대한 프로비전 오류를 해결하려면 OKTA 관리 포털에서 사용자의 할당을 취소하고 {% data variables.product.prodname_dotcom %} 앱에 다시 할당하면 됩니다. 이렇게 하면 OKTA가 트리거되어 {% data variables.product.prodname_dotcom %}에서 이러한 사용자의 SCIM 메타데이터를 채우는 API 호출이 수행됩니다. 자세한 내용은 OKTA 설명서에서 ["애플리케이션에서 사용자 할당 취소](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm)" 또는 "[애플리케이션에 사용자 할당](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm)"을 참조하세요.

사용자의 SCIM ID가 생성되었는지 확인하려면 SCIM 외부 ID가 없음이 확인된 단일 조직 구성원을 이용해 이 프로세스를 테스트하는 것이 좋습니다. IdP에서 사용자를 수동으로 업데이트한 후에는 사용자의 SCIM ID가 SCIM API를 이용해 생성되었는지 {% data variables.product.prodname_dotcom %}에서 생성되었는지를 확인할 수 있습니다. 자세한 내용은 "[누락된 SCIM 메타데이터에 대한 사용자 감사](#auditing-users-for-missing-scim-metadata)" 또는 REST API 엔드포인트 "[사용자에 대한 SCIM 프로비전 정보 가져오기](/rest/reference/scim#get-scim-provisioning-information-for-a-user)"를 참조하세요.

사용자를 위해 SCIM을 다시 프로비전하는 작업이 도움이 되지 않는 경우 {% data variables.product.prodname_dotcom %} 지원에 문의하세요.
