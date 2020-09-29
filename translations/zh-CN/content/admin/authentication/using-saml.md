---
title: 使用 SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication/
  - /enterprise/admin/articles/about-saml-authentication/
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
intro: 'SAML 是一种基于 XML 的身份验证和授权标准。 {% data variables.product.prodname_ghe_server %} 可以作为您的内部 SAML 身份提供程序 (IdP) 的服务提供程序 (SP)。'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### 支持的 SAML 服务

{% data reusables.saml.saml-supported-idps %}

{% data reusables.saml.saml-single-logout-not-supported %}

### 使用 SAML 时的用户名考量因素

每个 {% data variables.product.prodname_ghe_server %} 用户名都由 SAML 响应中的以下断言之一决定，这些断言按优先级从高到低排列的顺序为：

- 自定义用户名属性（如果定义且存在）
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` 断言（如果存在）
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` 断言（如果存在）
- `NameID` 元素

即使其他属性存在，也需要 `NameID` 元素。

将在 `NameID` 与 {% data variables.product.prodname_ghe_server %} 用户名之间创建映射，`NameID` 应持久、唯一，并且在用户生命周期内不会发生变化。

{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the user will see an error message when they try to sign in to your {% data variables.product.prodname_ghe_server %} instance. {% if currentVersion ver_gt "enterprise-server@2.21" %}To restore the user's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."{% else %} For more information, see "[Error: 'Another user already owns the account'](#error-another-user-already-owns-the-account)."{% endif %}

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### SAML 元数据

您的 {% data variables.product.prodname_ghe_server %} 实例的服务提供程序元数据位于 `http(s)://[hostname]/saml/metadata` 下。

要手动配置您的身份提供程序，断言使用者服务 (ACS) URL 为 `http(s)://[hostname]/saml/consume`。 它使用 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 绑定。

### SAML 属性

以下属性可用。 您可以在 [Management Console](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/) 中更改属性名称，但 `administrator` 属性除外。

| 默认属性名称        | 类型 | 描述                                                                                                                   |
| ------------- | -- | -------------------------------------------------------------------------------------------------------------------- |
| `NameID`      | 必选 | 持久用户标识符。 可以使用任意持久名称标识符格式。 除非提供备用断言之一，否则将为 {% data variables.product.prodname_ghe_server %} 用户名使用 `NameID` 元素。 |
| `管理员`         | 可选 | 如果值为“true”，用户将被自动升级为管理员。 任何其他值或不存在的值会将用户降级为普通用户帐户。                                                                   |
| `用户名`         | 可选 | {% data variables.product.prodname_ghe_server %} 用户名。                                                         |
| `full_name`   | 可选 | 用户的个人资料页面上显示的姓名。 用户可以在配置后更改他们的姓名。                                                                                    |
| `emails`      | 可选 | 用户的电子邮件地址。 可以指定多个。                                                                                                   |
| `public_keys` | 可选 | 用户的 SSH 公钥。 可以指定多个。                                                                                                  |
| `gpg_keys`    | 可选 | 用户的 GPG 密钥。 可以指定多个。                                                                                                  |

### 配置 SAML 设置

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. 选择 **SAML**。 ![SAML 身份验证](/assets/images/enterprise/management-console/auth-select-saml.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![选中 SAML 内置身份验证复选框](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
5. 或者，要启用非请求响应 SSO，请选择 **IdP initiated SSO**。 默认情况下，{% data variables.product.prodname_ghe_server %} 将向 IdP 发回 `AuthnRequest`，回复非请求身份提供程序 (IdP) 发起的请求。 ![SAML idP SSO](/assets/images/enterprise/management-console/saml-idp-sso.png)

  {% tip %}

  **注**：我们建议保留此值处于**未选择**状态。 您**只**应在罕见的情况下启用此功能，即您的 SAML 实现不支持服务提供程序发起的 SSO，并且 {% data variables.contact.enterprise_support %} 建议执行此操作。

  {% endtip %}

5. 如果您**不**希望 SAML 提供程序为 {% data variables.product.product_location_enterprise %} 上的用户确定管理员权限，请选择 **Disable administrator demotion/promotion（禁用管理员降级/升级）**。 ![SAML 禁用管理员配置](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
6. 在 **Single sign-on URL** 字段中，为单点登录请求输入您的 IdP 上的 HTTP 或 HTTPS 端点。 此值由您的 IdP 配置提供。 如果主机只能在您的内部网络中使用，您需要先[将 {% data variables.product.product_location_enterprise %} 配置为使用内部域名服务器](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/)。 ![SAML 身份验证](/assets/images/enterprise/management-console/saml-single-sign-url.png)
7. （可选）在 **Issuer（签发者）** 字段中，输入您的 SAML 签发者的姓名。 这将验证发送到 {% data variables.product.product_location_enterprise %} 的消息的真实性。 ![SAML 颁发者](/assets/images/enterprise/management-console/saml-issuer.png)
8. 在 **Signature Method（签名方法）** 和 **Digest Method（摘要方法）** 下拉菜单中，选择您的 SAML 颁发者用于验证 {% data variables.product.product_location_enterprise %} 请求完整性的哈希算法。 使用 **Name Identifier Format** 下拉菜单指定格式。 ![SAML 方法](/assets/images/enterprise/management-console/saml-method.png)
9. 在 **Verification certificate（验证证书）**下，单击 **Choose File（选择文件）**并选择用于验证 IdP 的 SAML 响应的证书。 ![SAML 身份验证](/assets/images/enterprise/management-console/saml-verification-cert.png)
10. 如果需要，请修改 SAML 属性名称以匹配您的 IdP，或者接受默认名称。![SAML 属性名称](/assets/images/enterprise/management-console/saml-attributes.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### 撤销 {% data variables.product.product_location_enterprise %} 的权限

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 选择 **SAML**。 !["All users" sidebar item in site administrator settings](/assets/images/enterprise/site-admin-settings/all-users.png)
3. In the list of users, click the username you'd like to update the `NameID` mapping for. ![Username in list of instance user accounts](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. To the right of "Update SAML NameID", click **Edit** . ![SAML 身份验证](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. In the "NameID" field, type the new `NameID` for the user. !["NameID" field in modal dialog with NameID typed](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Click **Update NameID**. !["Update NameID" button under updated NameID value within modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

{% endif %}

### 撤销 {% data variables.product.product_location_enterprise %} 的权限

如果您将某个用户从您的身份提供程序中移除，还必须手动挂起他们。 否则，他们仍可以继续使用访问令牌或 SSH 密钥进行身份验证。 更多信息请参阅“[挂起和取消挂起用户](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)”。

### 响应消息的要求

响应消息必须满足以下要求：

- `<Destination>` 元素必须在根响应文档上提供，而且只有在根响应文档签署后才匹配 ACS URL。 If the assertion is signed, it will be ignored.
- `<Audience>` 元素必须始终作为 `<AudienceRestriction>` 元素的一部分提供。 `<Audience>` 元素必须始终作为 `<AudienceRestriction>` 元素的一部分提供。 这是 {% data variables.product.prodname_ghe_server %} 实例的 URL，如 `https://ghe.corp.example.com`。
- 响应中的每一个断言都**必须**由数字签名加以保护。 签署各个 `<Assertion>` 元素或签署 `<Response>` 元素可以实现此操作。
- `<NameID>` 元素必须作为 `<Subject>` 元素的一部分提供。 可以使用任意持久名称标识符格式。
- `Recipient` 属性必须存在并设为 ACS URL。 例如：

```xml
<samlp:Response ...>
  <saml:Assertion ...>
    <saml:Subject>
      <saml:NameID ...>...</saml:NameID>
      <saml:SubjectConfirmation ...>
        <saml:SubjectConfirmationData Recipient="https://ghe.corp.example.com/saml/consume" .../>
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

### SAML 身份验证

{% data variables.product.prodname_ghe_server %} logs error messages for failed SAML authentication in the authentication log at  _/var/log/github/auth.log_. For more information about SAML response requirements, see "[Response message requirements](#response-message-requirements)."

#### Error: "Another user already owns the account"

您的 {% data variables.product.prodname_ghe_server %} 实例的服务提供程序元数据位于 `http(s)://[hostname]/saml/metadata` 下。

When the user signs in again, {% data variables.product.prodname_ghe_server %} compares the account's `NameID` mapping to the IdP's response. If the `NameID` in the IdP's response no longer matches the `NameID` that {% data variables.product.prodname_ghe_server %} expects for the user, the sign-in will fail. The user will see the following message.

> Another user already owns the account. Please have your administrator check the authentication log.

The message typically indicates that the person's username or email address has changed on the IdP. {% if currentVersion ver_gt "enterprise-server@2.21" %}Ensure that the `NameID` mapping for the user account on {% data variables.product.prodname_ghe_server %} matches the user's `NameID` on your IdP. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."{% else %}For help updating the `NameID` mapping, contact {% data variables.contact.contact_ent_support %}.{% endif %}

#### 如果 SAML 响应未签名，或者签名与内容不匹配，身份验证日志中将显示以下错误消息：

如果 `Recipient` 与 ACS URL 不匹配，身份验证日志中将显示以下错误消息：

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

`Recipient` 属性必须存在并设为 ACS URL。 例如，`https://ghe.corp.example.com/saml/consume`。

#### Error: "SAML Response is not signed or has been modified"

If your IdP does not sign the SAML response, or the signature does not match the contents, the following error message will appear in the authentication log.

```
SAML Response is not signed or has been modified.
```

Ensure that you configure signed assertions for the {% data variables.product.prodname_ghe_server %} application on your IdP.

#### Error: "Audience is invalid" or "No assertion found"

If the IdP's response has a missing or incorrect value for `Audience`, the following error message will appear in the authentication log.

```shell
Audience is invalid. Audience is invalid. Audience attribute does not match your_instance_url
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for your {% data variables.product.prodname_ghe_server %} instance, which is the full URL to your {% data variables.product.prodname_ghe_server %} instance. 例如，`https://ghe.corp.example.com`。
