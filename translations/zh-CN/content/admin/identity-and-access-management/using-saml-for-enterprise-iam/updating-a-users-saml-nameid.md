---
title: 更新用户的 SAML NameID
shortTitle: 更新 SAML NameID
intro: '当帐户的“NameID”在身份提供程序 (IdP) 上发生更改并且该人员无法再 {% ifversion ghes or ghae %}登录 {% data variables.product.product_location %}{% elsif ghec %}进行身份验证以访问您的企业资源{% endif %}时，您必须 {% ifversion ghec %}联系 {% data variables.product.company_short %} 支持或撤消该人员的链接身份{% elsif ghes %}更新 {% data variables.product.product_location %} 上的“NameID”{% elsif ghae %}联系 {% data variables.product.company_short %} 支持{% endif %}。'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## 关于对用户的 SAML `NameID` 的更新

在某些情况下，您可能需要更新与 SAML IdP 上的人员帐户关联的值。 如果该标识符也是您在 {% data variables.product.product_name %} 上用于身份验证的 `NameID`，则必须更新实例上的 `NameID` 映射，以便该人员可以继续成功进行身份验证。 更多信息请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

## 更新用户的 SAML `NameID`

企业所有者可以在 {% data variables.product.product_name %} 实例上更新用户的 SAML `NameID`。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 选择 **SAML**。 ![网站管理员设置中的"All users（所有用户）"侧边栏项目](/assets/images/enterprise/site-admin-settings/all-users.png)
3. 在用户列表中，点击您想要更新其 `NameID` 映射的用户名。 ![实例用户帐户列表中的用户名](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. 在“Update SAML NameID（更新 SAML 名称 ID）”右侧，单击 **Edit（编辑）**。 ![SAML 身份验证](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. 在“NameID（名称 ID）”字段中，为用户键入新的 `NameID`。 ![键入了名称 ID 的模态对话框中的"名称 ID"字段](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. 单击 **Update NameID（更新名称 ID）**。 ![模态中更新的名称 ID 下的"Update NameID（更新名称 ID）"按钮](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
