---
title: SAML 配置参考
shortTitle: SAML reference
intro: '可以查看{% ifversion ghec %}组织或企业（在 {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %} 上）{% elsif ghae %}企业（在 {% data variables.product.product_name %} 上）{% endif %}的 SAML 元数据，并详细了解可用的 SAML 属性和响应要求。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: e86167793ea3de31a9ee8a2a6a651183de8fa907
ms.sourcegitcommit: 399f27841ff88f14a3880d351c282db85182ac25
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '147093116'
---
## <a name="about-saml-configuration"></a>关于 SAML 配置

要使用 SAML 单一登录 (SSO) 对 {% data variables.product.product_name %} 进行身份验证，必须同时配置外部 SAML 标识提供者 (IdP) 和{% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %}你的企业或组织（在 {% data variables.product.product_location %} 上）{% elsif ghae %}你的企业（在 {% data variables.product.product_name %}{% endif %} 上）。 在 SAML 配置中，{% data variables.product.product_name %} 充当 SAML 服务提供商 (SP)。

在为 {% data variables.product.product_name %} 配置 SAML SSO 时，必须输入来自 SAML IdP 的唯一值，并且还必须在 IdP 上输入来自 {% data variables.product.product_name %} 的唯一值。 有关 {% data variables.product.product_name %} 的 SAML SSO 配置的详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}”或“[为组织启用和测试 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}”。

## <a name="saml-metadata"></a>SAML 元数据

{% ifversion ghec %}

{% data variables.product.product_name %} 的 SP 元数据可用于具有 SAML SSO 的组织或企业。 {% data variables.product.product_name %} 使用 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 绑定。

### <a name="organizations"></a>组织

可以为企业中的单个组织配置 SAML SSO。 如果在 {% data variables.product.product_name %} 上使用单个组织，不使用企业帐户，也可以为组织配置 SAML SSO。 有关详细信息，请参阅“[管理组织的 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization)”。

{% data variables.product.product_location %} 上组织的 SP 元数据在 `https://github.com/orgs/ORGANIZATION/saml/metadata` 上已提供，其中 ORGANIZATION 是 {% data variables.product.product_location %} 上组织的名称。

| 值 | 其他名称 | 说明 | 示例 |
| :- | :- | :- | :- |
| SP 实体 ID | SP URL、受众限制 | {% data variables.product.product_location %} 上组织的顶级 URL | `https://github.com/orgs/ORGANIZATION` |
| SP 断言使用者服务 (ACS) URL | 回复、收件人或目标 URL | IdP 发送 SAML 响应的 URL | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| SP 单点登录 (SSO) URL | | IdP 开始 SSO 的 URL |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### <a name="enterprises"></a>企业

{% data variables.product.product_location %} 上企业的 SP 元数据在 `https://github.com/enterprises/ENTERPRISE/saml/metadata` 上已提供，其中 ENTERPRISE 是 {% data variables.product.product_location %} 上企业的名称。

| 值 | 其他名称 | 说明 | 示例 |
| :- | :- | :- | :- |
| SP 实体 ID | SP URL、受众限制 | {% data variables.product.product_location %} 上企业的顶级 URL | `https://github.com/enterprises/ENTERPRISE` |
| SP 断言使用者服务 (ACS) URL | 回复、收件人或目标 URL | IdP 发送 SAML 响应的 URL | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| SP 单点登录 (SSO) URL | | IdP 开始 SSO 的 URL |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

{% data variables.product.product_location %} 的 SP 元数据在 `http(s)://HOSTNAME/saml/metadata` 上已提供，其中 HOSTNAME 是实例的主机名。 {% data variables.product.product_name %} 使用 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 绑定。

| 值 | 其他名称 | 说明 | 示例 |
| :- | :- | :- | :- |
| SP 实体 ID | SP URL、受众限制 | {% data variables.product.product_name %} 的顶级 URL | `http(s)://HOSTNAME`
| SP 断言使用者服务 (ACS) URL | 回复、收件人或目标 URL | IdP 发送 SAML 响应的 URL | `http(s)://HOSTNAME/saml/consume` |
| SP 单点登录 (SSO) URL | | IdP 开始 SSO 的 URL |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

{% data variables.product.product_name %} 上企业的 SP 元数据在 `https://HOSTNAME/saml/metadata` 上已提供，其中 HOSTNAME 是 {% data variables.product.product_name %} 上企业的主机名。 {% data variables.product.product_name %} 使用 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 绑定。

| 值 | 其他名称 | 说明 | 示例 |
| :- | :- | :- | :- |
| SP 实体 ID | SP URL、受众限制 | {% data variables.product.product_name %} 的顶级 URL | `https://HOSTNAME` |
| SP 断言使用者服务 (ACS) URL | 回复、收件人或目标 URL | IdP 发送 SAML 响应的 URL | `https://HOSTNAME/saml/consume` |
| SP 单点登录 (SSO) URL | | IdP 开始 SSO 的 URL |  `https://HOSTNAME/sso` |

{% endif %}

## <a name="saml-attributes"></a>SAML 属性

以下 SAML 属性可用于 {% data variables.product.product_name %}。{% ifversion ghes %}你可以在管理控制台中更改属性名称，但 `administrator` 属性除外。 有关详细信息，请参阅“[访问管理控制台](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”。{% endif %}

| 名称 | 必需？ | 说明 |
| :- | :- | :- |
| `NameID` | 是 | 持久用户标识符。 可以使用任意持久名称标识符格式。 {% ifversion ghec %}如果将企业用于 {% data variables.product.prodname_emus %}，{% endif %}{% data variables.product.product_name %} 将规范化要用作用户名的 `NameID` 元素，除非提供了其中一个替代断言。 有关详细信息，请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。 |
| `SessionNotOnOrAfter` | 否 | {% data variables.product.product_name %} 使关联会话失效的日期。 使之失效之后，该用户必须再次进行身份验证才能访问{% ifversion ghec or ghae %}你的企业资源{% elsif ghes %}{% data variables.product.product_location %}{% endif %}。 有关详细信息，请参阅“[会话持续时间和超时](#session-duration-and-timeout)”。 |
{%- ifversion ghes or ghae %} | `administrator` | 否 | 当值为 `true` 时，{% data variables.product.product_name %} 会自动将用户提升为{% ifversion ghes %}站点管理员{% elsif ghae %}企业所有者{% endif %}。 将此属性设置为除 `true` 以外的任何值都将导致降级，只要该值不为空。 省略此属性或将值保留为空白不会更改用户的角色。 | | `username` | 否 | {% data variables.product.product_location %} 的用户名。 | {%- endif %} | `full_name` | 否 | {% ifversion ghec %}如果为企业配置 SAML SSO 并使用 {% data variables.product.prodname_emus %}，则为{% else %}{% endif %}显示在用户配置文件页上的用户全名。 | | `emails` | 否 | 用户的电子邮件地址。{% ifversion ghes or ghae %} 可以指定多个地址。{% endif %}{% ifversion ghec or ghes %} 如果在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间同步许可证使用情况，则 {% data variables.product.prodname_github_connect %} 使用 `emails` 在产品之间标识唯一用户。 有关详细信息，请参阅“[同步 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间的许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。{% endif %} | | `public_keys` | 否 | {% ifversion ghec %}如果为企业配置 SAML SSO，并且使用 {% data variables.product.prodname_emus %}，则为{% else %}{% endif %}用户的公共 SSH 密钥。 你可以指定多个密钥。 | | `gpg_keys` | 否 |{% ifversion ghec %}如果为企业配置 SAML SSO 并使用 {% data variables.product.prodname_emus %}，则为{% else %}{% endif %}用户的 GPG 密钥。 你可以指定多个密钥。 |

若要为属性指定多个值，请使用多个 `<saml2:AttributeValue>` 元素。

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## <a name="saml-response-requirements"></a>SAML 响应要求

{% data variables.product.product_name %} 要求来自 IdP 的响应消息满足以下要求。

- 你的 IdP 必须在根响应文档上提供 `<Destination>` 元素，并且仅在根响应文档已签名时才与 ACS URL 匹配。 如果 IdP 对断言进行了签名，{% data variables.product.product_name %} 将忽略该断言。
- IdP 必须始终提供 `<Audience>` 元素作为元素的 `<AudienceRestriction>` 一部分。 该值必须与 {% data variables.product.product_name %} 的 `EntityId` 一致。{% ifversion ghes or ghae %} 此值是用于访问 {% data variables.product.product_location %} 的 URL，例如 {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`、`https://SUBDOMAIN.github.us` 或 `https://SUBDOMAIN.ghe.com`{% endif %}。{% endif %}
  
  {%- ifversion ghec %}
  - 如果为组织配置 SAML，则此值为 `https://github.com/orgs/ORGANIZATION`。
  - 如果为企业配置 SAML，则此 URL 为 `https://github.com/enterprises/ENTERPRISE`。
  {%- endif %}
- IdP 必须使用数字签名来保护响应中的每个断言。 你可以通过对每个单独的 `<Assertion>` 元素进行签名或通过对 `<Response>` 元素进行签名来完成。
- IdP 必须提供 `<NameID>` 元素作为 `<Subject>` 元素的一部分。 可以使用任意持久名称标识符格式。
- IdP 必须包含 `Recipient` 属性，该属性必须设置为 ACS URL。 下面的示例演示了该属性。

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% elsif ghae %}SUBDOMAIN.ghe.com{% endif %}/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```

## <a name="session-duration-and-timeout"></a>会话持续时间和超时

为防止有人使用你的 IdP 进行身份验证并无限期获得授权，{% data variables.product.product_name %} 会定期使有权访问{% ifversion ghec or ghae %}你的企业资源{% elsif ghes %}{% data variables.product.product_location %}的每个用户帐户会话失效{% endif %}。 使之失效后，该用户必须再次向 IdP 进行身份验证。 默认情况下，如果 IdP 未断言 `SessionNotOnOrAfter` 属性的值，{% data variables.product.product_name %} 会使会话在成功通过 IdP 进行身份验证后失效{% ifversion ghec %} 24 小时{% elsif ghes or ghae %}一周{% endif %}。

若要自定义会话持续时间，可以在 IdP 上定义 `SessionNotOnOrAfter` 属性的值。 如果定义的值小于 24 小时，{% data variables.product.product_name %} 可能会提示用户在每次 {% data variables.product.product_name %} 启动重定向时进行身份验证。

{% ifversion ghec %} 为防止身份验证错误，建议会话的最短持续时间为 4 小时。 有关详细信息，请参阅“[对 SAML 身份验证进行故障排除](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)”。
{% endif %}

{% note %}

**注释**：

- 对于 Azure AD，SAML 令牌的可配置生存期策略不会控制 {% data variables.product.product_name %} 的会话超时。
- 目前，Okta 在 SAML 身份验证期间不会使用 {% data variables.product.product_name %} 发送 `SessionNotOnOrAfter` 属性。 有关详细信息，请联系 Okta。

{% endnote %}
