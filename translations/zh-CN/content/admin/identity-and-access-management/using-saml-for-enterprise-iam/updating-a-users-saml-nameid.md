---
title: Updating a user's SAML NameID
shortTitle: Update SAML NameID
intro: 'When an account''s `NameID` changes on your identity provider (IdP) and the person can no longer {% ifversion ghes or ghae %}sign into {% data variables.product.product_location %}{% elsif ghec %}authenticate to access your enterprise''s resources{% endif %}, you must {% ifversion ghec %}either contact {% data variables.product.company_short %} Support or revoke the person''s linked identity{% elsif ghes %}update the `NameID` mapping on {% data variables.product.product_location %}{% elsif ghae %}contact {% data variables.product.company_short %} Support{% endif %}.'
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

## About updates to users' SAML `NameID`

In some situations, you may need to update values associated with a person's account on your SAML IdP. If that identifier is also the `NameID` that you use for authentication on {% data variables.product.product_name %}, you must update the `NameID` mapping on your instance so the person can continue to authenticate successfully. For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

## 更新用户的 SAML `NameID`

Enterprise owners can update a user's SAML `NameID` on a {% data variables.product.product_name %} instance.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 选择 **SAML**。 ![网站管理员设置中的"All users（所有用户）"侧边栏项目](/assets/images/enterprise/site-admin-settings/all-users.png)
3. 在用户列表中，点击您想要更新其 `NameID` 映射的用户名。 ![实例用户帐户列表中的用户名](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. 在“Update SAML NameID（更新 SAML 名称 ID）”右侧，单击 **Edit（编辑）**。 ![SAML 身份验证](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. 在“NameID（名称 ID）”字段中，为用户键入新的 `NameID`。 ![键入了名称 ID 的模态对话框中的"名称 ID"字段](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. 单击 **Update NameID（更新名称 ID）**。 ![模态中更新的名称 ID 下的"Update NameID（更新名称 ID）"按钮](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
