---
title: 企业的身份和访问管理疑难解答
shortTitle: IAM 疑难解答
intro: 查看企业标识和访问管理的常见问题和解决方案。
versions:
  ghec: '*'
  ghes: '*'
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

## 用户名冲突

{% ifversion ghec %}如果您的企业使用 {% data variables.product.prodname_emus %}，{% endif %}{% data variables.product.product_name %} 将标准化您的身份提供程序 (IdP) 提供的标识符，以便在 {% data variables.product.prodname_dotcom %} 上创建每个人的用户名。 如果将多个帐户标准化为同一 {% data variables.product.prodname_dotcom %} 用户名，则会发生用户名冲突，并且仅创建第一个用户帐户。 更多信息请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

{% ifversion ghec %}
## 切换身份验证配置时出错

如果您在不同身份验证配置之间切换时遇到问题，例如将 SAML SSO 配置从组织切换到企业帐户或从 SAML 迁移到 OIDC 以进行 {% data variables.product.prodname_emus %}，请确保您遵循了我们针对更改的最佳实践。

- “[将 SAML 配置从组织切换到企业帐户](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”
- “[从 SAML 迁移到 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)”

## 在 SSO 不可用时访问您的企业

当身份提供程序 IdP 的配置错误或问题阻止您使用 SSO 时，您可以使用恢复代码访问您的企业。 更多信息请参阅“[在身份提供程序不可用时访问企业帐户](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”。
{% endif %}

## SAML 身份验证错误

如果用户在尝试使用 SAML 进行身份验证时遇到错误，请参阅[SAML 身份验证疑难解答](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)”。

{% ifversion ghec %}
## 延伸阅读

- "[组织的身份和访问权限管理疑难解答](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)"
{% endif %}
