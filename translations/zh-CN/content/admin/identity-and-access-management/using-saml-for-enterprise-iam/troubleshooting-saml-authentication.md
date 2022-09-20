---
title: SAML 身份验证
shortTitle: Troubleshoot SAML SSO
intro: '如果使用 SAML 单一登录 (SSO)，并且用户无法进行身份验证以访问 {% data variables.product.product_location %}，则可以解决问题。'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 977431b9c9872f405a2c8491372f11d8e4ada907
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093036'
---
{% ifversion ghes %}
## 关于 SAML 身份验证问题

{% data variables.product.product_name %} 在 /var/log/github/auth.log 的身份验证日志中记录 SAML 身份验证失败的错误消息。 你可以查看此日志文件中的响应，还可以配置更详细的日志记录。

有关 SAML 响应要求的详细信息，请参阅“[SAML 配置参考](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)”。

## 配置 SAML 调试

可以配置 {% data variables.product.product_name %}，以便每次尝试 SAML 身份验证时，向 /var/log/github/auth.log 写入详细的调试日志。 可以使用此额外输出排查身份验证尝试失败的问题。

{% warning %}

警告：

- 仅暂时启用 SAML 调试，并在完成故障排除后立即禁用调试。 如果使调试保持启用状态，日志的大小可能会比平常增加得快得多，这会对 {% data variables.product.product_name %} 的性能产生负面影响。
- 在将 {% data variables.product.product_location %} 的新身份验证设置应用到生产环境之前，请在过渡环境中测试这些设置。 有关详细信息，请参阅“[设置暂存实例](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”。

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
1. 在“SAML 调试”下，选择下拉列表并单击“启用”

   ![用于启用 SAML 调试的下拉列表的屏幕截图](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. 尝试通过 SAML IdP 登录 {% data variables.product.product_location %}。

1. 在 {% data variables.product.product_location %} 上查看 /var/log/github/auth.log 中的调试输出。

1. 完成故障排除后，选择下拉列表并单击“禁用”。

   ![用于禁用 SAML 调试的下拉列表的屏幕截图](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## 在 auth.log 中解码响应

auth.log 中的某些输出可能是 Base64 编码的。 可以访问管理 shell 并使用 {% data variables.product.product_location %} 上的 `base64` 实用工具来解码这些响应。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”。

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```

## Error: "Another user already owns the account"（错误：“其他用户已拥有该帐户”）

当用户首次使用 SAML 身份验证登录 {% data variables.product.product_location %} 时，{% data variables.product.product_name %} 会在实例上创建一个用户帐户并将 SAML `NameID` 映射到该帐户。

当用户再次登录时，{% data variables.product.prodname_ghe_server %} 会比较帐户的 `NameID` 映射与 IdP 的响应。 如果 IdP 响应中的 `NameID` 不再与 {% data variables.product.product_name %} 对用户预期的 `NameID` 匹配，登录将失败。 用户将看到以下消息。

> 另一个用户已经拥有该帐户。 请让您的管理员检查身份验证日志。

该消息通常表示此人的用户名或电子邮件地址已在 IdP 上更改。 请确保 {% data variables.product.prodname_ghe_server %} 上用户帐户的 `NameID` 映射与 IdP 上用户的 `NameID` 匹配。 有关详细信息，请参阅“[更新用户的 SAML `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)”。

## Error: Recipient in SAML response was blank or not valid（错误：SAML 响应中的收件人为空或无效）

如果 `Recipient` 与 {% data variables.product.product_location %} 的 ACS URL 不匹配，则当用户尝试进行身份验证时，身份验证日志中将显示以下两条错误消息之一。

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

请确保将 IdP 上的 `Recipient` 的值设置为 {% data variables.product.product_location %} 的完整 ACS URL。 例如 `https://ghe.corp.example.com/saml/consume`。

## Error: "SAML Response is not signed or has been modified"（错误：“SAML 响应未签名或已修改”）

如果您的 IdP 未对 SAML 响应进行签名，或者签名与内容不匹配，则身份验证日志中将显示以下错误消息。

```
SAML Response is not signed or has been modified.
```

确保为 IdP 上的 {% data variables.product.product_name %} 应用程序配置签名的断言。

## Error: "Audience is invalid" or "No assertion found"（错误：“受众无效”或“未找到断言”）

如果 IdP 的响应中 `Audience` 的值缺失或不正确，则身份验证日志中将显示以下错误消息。

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

请确保将 IdP 上的 `Audience` 的值设置为 {% data variables.product.product_location %} 的 `EntityId`，这是实例的完整 URL。 例如，`https://ghe.corp.example.com`。
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %} {% data reusables.saml.authentication-loop %} {% endif %}
