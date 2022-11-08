---
title: 排除组织的标识和访问管理故障
intro: 查看并解决用于管理组织的 SAML SSO、团队同步或身份提供商 (IdP) 连接的常见故障排除错误。
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106971'
---
{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## 某些用户未由 SCIM 预配或取消预配

遇到用户预配问题时，建议检查用户是否缺少 SCIM 元数据。 

{% data reusables.scim.changes-should-come-from-idp %}

如果组织成员缺少 SCIM 元数据，则可以通过 IdP 手动为用户重新配置 SCIM。

### 审核用户是否缺少 SCIM 元数据

如果您怀疑或注意到任何用户未按预期进行预配或取消预配，我们建议您审核组织中的所有用户。

要检查用户的外部身份中是否具有 SCIM 身份（SCIM 元数据），您可以在 {% data variables.product.prodname_dotcom %} 上一次查看一个组织成员的 SCIM 元数据，也可以使用 {% data variables.product.prodname_dotcom %} API 以编程方式检查所有组织成员。

#### 审核 {% data variables.product.prodname_dotcom %} 上的组织成员

作为组织所有者，若要确认单个组织成员是否存在 SCIM 元数据，请访问此 URL，替换 `<organization>` 和 `<username>`： 

> `https://github.com/orgs/<organization>/people/<username>/sso`

如果用户的外部标识包括 SCIM 元数据，则组织所有者应在该页面上看到 SCIM 标识部分。 如果其外部标识不包含任何 SCIM 元数据，则 SCIM 标识部分将不存在。

#### 通过 {% data variables.product.prodname_dotcom %} API 审核组织成员

作为组织所有者，您还可以查询 SCIM REST API 或 GraphQL 以列出组织中的所有 SCIM 预配置标识。 

#### 使用 REST API

SCIM REST API 仅返回在其外部标识下填充了 SCIM 元数据的用户的数据。 我们建议您将 SCIM 预配置身份列表与组织所有成员的列表进行比较。

有关详细信息，请参阅：
  - [列出 SCIM 预配标识](/rest/reference/scim#list-scim-provisioned-identities)
  - [列出组织成员](/rest/reference/orgs#list-organization-members)

#### 使用 GraphQL

此 GraphQL 查询显示组织中每个用户的 SAML `NameId`、SCIM `UserName` 和 {% data variables.product.prodname_dotcom %} 用户名 (`login`)。 若要使用此查询，请将 `ORG` 替换为你的组织名称。 

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

有关使用 GraphQL API 的更多信息，请参阅： 
   - [GraphQL 指南](/graphql/guides)
   - [GraphQL 浏览器](/graphql/overview/explorer)

### 通过身份提供商为用户重新预配 SCIM

您可以通过 IdP 手动为用户重新预配 SCIM。 例如，要解决 Okta 的预配错误，可以在 Okta 管理门户中取消分配用户并将其重新分配给 {% data variables.product.prodname_dotcom %} 应用。 这应该会触发 Okta 进行 API 调用，以便在 {% data variables.product.prodname_dotcom %} 上为这些用户填充 SCIM 元数据。 有关详细信息，请参阅 Okta 文档中的“[从应用程序取消分配用户](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm)”或“[将用户分配给应用程序](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm)”。

要确认是否已创建用户的 SCIM 标识，我们建议您使用已确认没有 SCIM 外部标识的单个组织成员来测试此过程。 手动更新 IdP 中的用户后，您可以检查用户的 SCIM 身份是使用 SCIM API 创建的，还是在 {% data variables.product.prodname_dotcom %} 上创建的。 有关详细信息，请参阅“[审核用户是否缺少 SCIM 元数据](#auditing-users-for-missing-scim-metadata)”或 REST API 终结点“[获取用户的 SCIM 配置信息](/rest/reference/scim#get-scim-provisioning-information-for-a-user)”。

如果为用户重新预配 SCIM 不起作用，请联系 {% data variables.product.prodname_dotcom %} 支持。

## 延伸阅读

- [排除企业的标识和访问管理故障](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)
