---
title: SAML 身份验证
shortTitle: SAML SSO 故障排除
intro: '如果使用 SAML 单点登录 (SSO)，并且用户无法通过身份验证来访问 {% data variables.product.product_location %}，则可以对问题进行故障排除。'
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
---

{% ifversion ghes %}
## 关于 SAML 身份验证的问题

{% data variables.product.product_name %} 在 _/var/log/github/auth.log_ 的身份验证日志中为失败的 SAML 身份验证记录错误消息。 您可以在此日志文件中查看响应，还可以配置更详细的日志记录。

关于 SAML 响应要求的更多信息，请参阅“[SAML 配置参考](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)”。

## 配置 SAML 调试

您可以配置 {% data variables.product.product_name %} 在每次 SAML 身份验证尝试时将详细调试日志写入 _/var/log/github/auth.log_。 您可以使用此额外输出对失败的身份验证尝试进行故障排除。

{% warning %}

**警告**：

- 仅暂时启用 SAML 调试，并在完成故障排除后立即禁用调试。 如果保持启用调试，日志大小的增长速度可能会比平时快得多，这可能会对 {% data variables.product.product_name %} 的性能产生负面影响。
- 在生产环境中应用这些设置之前，请在暂存环境中测试 {% data variables.product.product_location %} 的新身份验证设置。 更多信息请参阅“[设置暂存实例](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”。

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. 在“SAML debugging（SAML 调试）”下，选择下拉列表，然后单击 **Enabled（启用）**。

   ![用于启用 SAML 调试的下拉列表屏幕截图](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. 尝试通过 SAML IdP 登录 {% data variables.product.product_location %}。

1. 在 {% data variables.product.product_location %} 上的 _/var/log/github/auth.log_ 中查看调试输出。

1. 完成故障排除后，选择下拉列表，然后单击 **Disabled（禁用）**。

   ![用于禁用 SAML 调试的下拉列表屏幕截图](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## 解码 _auth.log_ 中的响应

_auth.log_ 中的某些输出可能是 Base64 编码的。 您可以访问管理 shell 并在 {% data variables.product.product_location %} 上使用 `base64` 实用程序对这些响应进行解码。 更多信息请参阅“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)。”

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```

## Error: "Another user already owns the account"（错误：“其他用户已拥有该帐户”）

当用户首次使用 SAML 身份验证登录到 {% data variables.product.product_location %} 时， {% data variables.product.product_name %} 会在实例上创建一个用户帐户，并将 SAML `NameID` 映射到该帐户。

当用户再次登录时，{% data variables.product.prodname_ghe_server %} 会比较帐户的 `NameID` 映射与 IdP 的响应。 如果 IdP 响应中的 `NameID` 不再与 {% data variables.product.product_name %} 对用户预期的 `NameID` 匹配， 登录将失败。 用户将看到以下消息。

> 另一个用户已经拥有该帐户。 请让您的管理员检查身份验证日志。

该消息通常表示此人的用户名或电子邮件地址已在 IdP 上更改。 确保 {% data variables.product.prodname_ghe_server %} 上用户帐户的 `NameID` 映射与 IdP 上的用户 `NameID` 相匹配。 更多信息请参阅“[更新用户的 SAML `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)”。

## Error: Recipient in SAML response was blank or not valid（错误：SAML 响应中的收件人为空或无效）

如果 `Recipient` 与 {% data variables.product.product_location %} 的 ACS URL 不匹配，则当用户尝试验证时，身份验证日志中将显示以下两条错误消息之一：

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

确保将 IdP 上 `Recipient（收件人）`的值设置为 {% data variables.product.product_location %} 的完整 ACS URL。 例如，`https://ghe.corp.example.com/saml/consume`。

## Error: "SAML Response is not signed or has been modified"（错误：“SAML 响应未签名或已修改”）

如果您的 IdP 未对 SAML 响应进行签名，或者签名与内容不匹配，则身份验证日志中将显示以下错误消息。

```
SAML Response is not signed or has been modified.
```

确保为 IdP 上的 {% data variables.product.product_name %} 应用程序配置签名的断言。

## Error: "Audience is invalid" or "No assertion found"（错误：“受众无效”或“未找到断言”）

如果 IdP 的响应缺少 `Audience` 的值或者该值不正确，则身份验证日志中将显示以下错误消息。

```
Audience is invalid. Audience is invalid. Audience attribute does not match your_instance_url
```

确保将 IdP 上 `Audience` 的值设置为 {% data variables.product.product_location %} 的 `EntityId`，这是实例的完整 URL。 例如，`https://ghe.corp.example.com`。
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %}
{% data reusables.saml.authentication-loop %}
{% endif %}
