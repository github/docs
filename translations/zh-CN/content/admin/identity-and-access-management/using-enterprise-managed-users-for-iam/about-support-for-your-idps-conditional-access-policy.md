---
title: 关于对 IdP 的条件访问策略的支持
shortTitle: 条件访问策略
intro: '当您的企业使用 OIDC SSO 时，{% data variables.product.prodname_dotcom %} 将使用 IdP 的条件访问策略 (CAP) 验证对您的企业及其资源的访问。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.enterprise-accounts.oidc-beta-notice %}

## 关于对条件访问策略的支持

{% data reusables.enterprise-accounts.emu-cap-validates %}

对于启用 OIDC SSO 的任何 {% data variables.product.prodname_emu_enterprise %}，CAP 支持都会自动启用，并且无法禁用。 {% data variables.product.prodname_dotcom %} 强制执行 IdP 的 IP 条件，但不强制执行设备合规性条件。

有关将 OIDC 与 {% data variables.product.prodname_emus %} 配合使用的更多信息，请参阅“[为企业托管用户配置 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”和“[从 SAML 迁移到 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)”。

{% note %}

**Note:** If you use Conditional Access (CA) network location policies in your Azure AD tenant, do not use the IP allow list feature on {% data variables.product.prodname_dotcom_the_website %}, with your enterprise account or with any of the organizations owned by the enterprise. Using both is unsupported and can result in the wrong policy applying. For more information about IP allow lists, see "[Enforcing security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" and "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)."

{% endnote %}

## 集成和自动化的注意事项

{% data variables.product.prodname_dotcom %} 将原始 IP 地址发送到您的 IdP，以便对您的 CAP 进行验证。 要确保操作和应用程序未被 IdP 的 CAP 阻止，您需要对配置进行更改。

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

使用个人访问令牌的操作可能会被 IdP 的 CAP 阻止。 我们建议由服务帐户创建个人访问令牌，然后从 IdP CAP 中的 IP 控制中免除该帐户。

如果无法使用服务帐户，则取消阻止使用个人访问令牌的操作的另一个选项是允许 {% data variables.product.prodname_actions %} 使用的 IP 范围。 更多信息请参阅“[关于 GitHub 的 IP 地址](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)”。

### {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %}

当 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 代表成员发出请求时，{% data variables.product.prodname_dotcom %} 会将应用程序服务器的 IP 地址发送到您的 IdP 进行验证。 如果应用程序服务器的 IP 地址未通过 IdP 的 CAP 验证，则请求将失败。

您可以联系要使用的应用程序的所有者，询问他们的 IP 范围，并配置 IdP 的 CAP 以允许从这些 IP 范围进行访问。 如果您无法联系所有者，可以查看 IdP 登录日志以查看请求中看到的 IP 地址，然后允许列出这些地址。

您还可以为已安装的 {% data variables.product.prodname_github_apps %} 启用 IP 允许列表配置。 启用后，无论原始 IP 地址如何，所有 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 都将继续工作。 更多信息请参阅“[在企业中实施安全设置策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)”。
