---
title: SAML 配置参考
shortTitle: SAML 参考
intro: '您可以查看{% ifversion ghec %}{% data variables.product.product_name %} 上的组织或企业{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}上的企业{% endif %}的 SAML 元数据，还可以了解有关可用 SAML 属性和响应要求的更多信息。'
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
---

## 关于 SAML 配置

要使用 SAML 单点登录 (SSO) 向 {% data variables.product.product_name %} 验证，您必须配置外部 SAML 身份提供程序 (IdP) 和 {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %} {% data variables.product.product_location %} 上的企业或组织{% elsif ghae %}{% data variables.product.product_name %} 上的企业{% endif %}。 在 SAML 配置中，{% data variables.product.product_name %} 充当 SAML 服务提供程序 (SP)。

为 {% data variables.product.product_name %} 配置 SAML SSO 时，您必须输入 SAML IdP 中的唯一值，并且还必须输入 IdP 上 {% data variables.product.product_name %} 的唯一值。 有关 {% data variables.product.product_name %} 的 SAML SSO 配置的详细信息，请参阅“[为企业配置 SAML 单点登录](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}”或“[为组织启用和测试 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}”。

## SAML 元数据

{% ifversion ghec %}

{% data variables.product.product_name %} 的 SP 元数据可用于具有 SAML SSO 的组织或企业。 {% data variables.product.product_name %} 使用 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 绑定。

### 组织

您可以为企业中的单个组织配置 SAML SSO。 如果您在 {% data variables.product.product_name %} 上使用单个组织并且不使用企业帐户，则还可以为组织配置 SAML SSO。 更多信息请参阅“[管理组织的 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization)”。

{% data variables.product.product_location %} 上组织的 SP 元数据位于 `https://github.com/orgs/ORGANIZATION/saml/metadata`，其中 **ORGANIZATION** 是组织在 {% data variables.product.product_location %} 上的名称。

| 值                    | 其他名称          | 描述                                                       | 示例                                                  |
|:-------------------- |:------------- |:-------------------------------------------------------- |:--------------------------------------------------- |
| SP 实体 ID             | SP URL，受众限制   | {% data variables.product.product_location %} 上组织的顶级 URL | `https://github.com/orgs/ORGANIZATION`              |
| SP 断言使用者服务 (ACS) URL | 答复、收件人或目标 URL | IdP 发送 SAML 响应的 URL                                      | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| SP 单点登录 (SSO) URL    |               | IdP 开始 SSO 的 URL                                         | `https://github.com/orgs/ORGANIZATION/saml/sso`     |

### 企业

{% data variables.product.product_location %} 上企业的 SP 元数据位于 `https://github.com/enterprises/ENTERPRISE/saml/metadata`，其中 **ENTERPRISE** 是企业在 {% data variables.product.product_location %} 上的名称。

| 值                    | 其他名称          | 描述                                                       | 示例                                                       |
|:-------------------- |:------------- |:-------------------------------------------------------- |:-------------------------------------------------------- |
| SP 实体 ID             | SP URL，受众限制   | {% data variables.product.product_location %} 上企业的顶级 URL | `https://github.com/enterprises/ENTERPRISE`              |
| SP 断言使用者服务 (ACS) URL | 答复、收件人或目标 URL | IdP 发送 SAML 响应的 URL                                      | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| SP 单点登录 (SSO) URL    |               | IdP 开始 SSO 的 URL                                         | `https://github.com/enterprises/ENTERPRISE/saml/sso`     |

{% elsif ghes %}

{% data variables.product.product_location %} 的 SP 元数据在 `http(s)://HOSTNAME/saml/metadata` 上可用，其中 **HOSTNAME** 是您的实例的主机名。 {% data variables.product.product_name %} 使用 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 绑定。

| 值                    | 其他名称          | 描述                                                | 示例                                |
|:-------------------- |:------------- |:------------------------------------------------- |:--------------------------------- |
| SP 实体 ID             | SP URL，受众限制   | {% data variables.product.product_name %} 的顶级 URL | `http(s)://HOSTNAME`              |
| SP 断言使用者服务 (ACS) URL | 答复、收件人或目标 URL | IdP 发送 SAML 响应的 URL                               | `http(s)://HOSTNAME/saml/consume` |
| SP 单点登录 (SSO) URL    |               | IdP 开始 SSO 的 URL                                  | `http(s)://HOSTNAME/sso`          |

{% elsif ghae %}

{% data variables.product.product_name %} 上企业的 SP 元数据在 `https://HOSTNAME/saml/metadata` 上可用，其中 **HOSTNAME** 是企业在 {% data variables.product.product_name %} 上的主机名。 {% data variables.product.product_name %} 使用 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 绑定。

| 值                    | 其他名称          | 描述                                                | 示例                              |
|:-------------------- |:------------- |:------------------------------------------------- |:------------------------------- |
| SP 实体 ID             | SP URL，受众限制   | {% data variables.product.product_name %} 的顶级 URL | `https://HOSTNAME`              |
| SP 断言使用者服务 (ACS) URL | 答复、收件人或目标 URL | IdP 发送 SAML 响应的 URL                               | `https://HOSTNAME/saml/consume` |
| SP 单点登录 (SSO) URL    |               | IdP 开始 SSO 的 URL                                  | `https://HOSTNAME/sso`          |

{% endif %}

## SAML 属性

以下 SAML 属性可用于 {% data variables.product.product_name %}。{% ifversion ghes %} 您可以在管理控制台中更改属性名称，但 `administrator` 属性除外。 更多信息请参阅“[访问管理控制台](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”。{% endif %}

| 名称                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 必填？ | 描述                                                                                                                                                                                                                                            |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NameID`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 是   | 持久用户标识符。 可以使用任意持久名称标识符格式。                                                                                                                                                                                                                     |
| {% ifversion ghec %}如果将企业与 {% data variables.product.prodname_emus %} 一起使用， {% endif %}{% data variables.product.product_name %} 将规范化 `NameID` 元素以用作用户名，除非提供了替代断言之一。 For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."<br><br>{% note %}**Note:** It's important to use a human-readable, persistent identifier. Using a transient identifier format like `urn:oasis:names:tc:SAML:2.0:nameid-format:transient` will result in re-linking of accounts on every sign-in, which can be detrimental to authorization management.{% endnote %} |     |                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |     |                                                                                                                                                                                                                                               |
| `SessionNotOnOrAfter`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 否   | {% data variables.product.product_name %} 使关联的会话失效的日期。 失效后，此人必须再次进行身份验证才能访问 {% ifversion ghec or ghae %}企业的资源{% elsif ghes %}{% data variables.product.product_location %}{% endif %}。 更多信息请参阅“[会话持续时间和超时](#session-duration-and-timeout)”。 |
{%- ifversion ghes or ghae %}
| `administrator` | 无|当值为 `true` 时，{% data variables.product.product_name %} 会自动将用户提升为 {% ifversion ghes %}站点管理员{% elsif ghae %}企业所有者{% endif %}。 将此属性设置为除 `true` 以外的任何值都将导致降级，只要该值不为空。 省略此属性或将值留空不会更改用户的角色。 | | `username` | 无 | {% data variables.product.product_location %} 的用户名。 |
{%- endif %}
| `full_name` |无| {% ifversion ghec %}如果为企业配置 SAML SSO 并使用 {% data variables.product.prodname_emus %}，则{% else %}{% endif %} 用户的全名显示在用户的个人资料页上。 | | `emails` | 无| 用户的电子邮件地址。{% ifversion ghes or ghae %} 您可以指定多个地址。{% endif %}{% ifversion ghec or ghes %} 如果在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间同步许可证使用情况，{% data variables.product.prodname_github_connect %} 将使用 `emails` 跨产品识别唯一用户。 更多信息请参阅“[在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间同步许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。{% endif %} | | `public_keys` |无| {% ifversion ghec %}如果为企业配置 SAML SSO 并使用 {% data variables.product.prodname_emus %}，则为{% else %}{% endif %} 用户的公有 SSH 密钥。 您可以指定多个键。 | | `gpg_keys` |无| {% ifversion ghec %}如果为企业配置 SAML SSO 并使用 {% data variables.product.prodname_emus %}，则{% else %}{% endif %}为用户的 GPG 密钥。 您可以指定多个键。 |

要为属性指定多个值，请使用多个 `<saml2:AttributeValue>` 元素。

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML 响应要求

{% data variables.product.product_name %} 要求来自 IdP 的响应消息满足以下要求。

- 您的 IdP 必须在根响应文档上提供 `<Destination>` 元素，并且只有在对根响应文档进行签名时才与 ACS URL 匹配。 如果您的 IdP 对断言进行签名，{% data variables.product.product_name %} 将忽略该断言。
- 您的 IdP 必须始终提供 `<Audience>` 元素作为 `<AudienceRestriction>` 元素的一部分。 该值必须与 {% data variables.product.product_name %} 的 `EntityId` 匹配。{% ifversion ghes or ghae %} 此值是您访问 {% data variables.product.product_location %} 的 URL，例如 {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`、`https://SUBDOMAIN.github.us` 或 `https://SUBDOMAIN.ghe.com`{% endif %}。{% endif %}

  {%- ifversion ghec %}
  - 如果为组织配置 SAML，则此值为 `https://github.com/orgs/ORGANIZATION`。
  - 如果为企业配置 SAML，则此 URL 为 `https://github.com/enterprises/ENTERPRISE`。
  {%- endif %}
- 您的 IdP 必须使用数字签名保护响应中的每个断言。 可以通过对每个单独的 `<Assertion>` 元素进行签名或对 `<Response>` 元素进行签名来实现此目的。
- 您的 IdP 必须提供 `<NameID>` 元素作为 `<Subject>` 元素的一部分。 您可以使用任何永久名称标识符格式。
- 您的 IdP 必须包含 `Recipient` 属性，该属性必须设置为 ACS URL。 下面的示例演示了该属性。

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

## 会话持续时间和超时

为防止别人使用您的 IdP 进行身份验证并无限期地保持授权状态，{% data variables.product.product_name %} 会定期使有权访问{% ifversion ghec or ghae %}企业资源{% elsif ghes %}{% data variables.product.product_location %}{% endif %}的每个用户帐户的会话失效。 失效后，此人必须再次向您的 IdP 进行身份验证。 默认情况下，如果您的 IdP 未断言 `SessionNotOnOrAfter` 属性的值，则 {% data variables.product.product_name %} 在使用 IdP 成功进行身份验证后 {% ifversion ghec %}24 小时{% elsif ghes or ghae %}一周{% endif %}内使会话失效。

要自定义会话持续时间，您可以在 IdP 上定义 `SessionNotOnOrAfter` 属性的值。 如果定义的值小于 24 小时，则每次 {% data variables.product.product_name %} 启动重定向时，{% data variables.product.product_name %} 都会提示用户进行身份验证。

{% ifversion ghec %}
为防止出现身份验证错误，我们建议会话持续时间最短为 4 小时。 更多信息请参阅“[SAML 身份验证疑难解答](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)”。
{% endif %}

{% note %}

**注意**：

- 对于 Azure AD，SAML 令牌的可配置生存期策略不控制 {% data variables.product.product_name %} 的会话超时。
- Okta 当前不会在向 {% data variables.product.product_name %} 进行 SAML 身份验证期间发送 `SessionNotOnOrAfter` 属性。 更多信息请联系 Okta。

{% endnote %}
