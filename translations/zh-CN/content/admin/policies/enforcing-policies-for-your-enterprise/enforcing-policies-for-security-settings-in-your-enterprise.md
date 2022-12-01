---
title: 为企业中的安全设置实施策略
intro: 您可以实施策略来管理企业组织中的安全设置，或允许在每个组织中设置策略。
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183962'
---
## 关于企业中安全设置的策略

您可以在 {% data variables.product.product_name %} 上实施策略以控制企业拥有的组织的安全设置。 默认情况下，组织所有者可以管理安全设置。 

{% ifversion ghec or ghes %}

## 要求企业中的组织进行双重身份验证

企业所有者可以要求企业拥有的所有组织中的组织成员、帐单管理员和外部协作者使用双重身份验证来保护其用户帐户。

您必须为自己的帐户启用双重身份验证，然后才能对企业拥有的所有组织都要求 2FA。 有关详细信息，请参阅“[使用双因素身份验证 (2FA) 保护帐户](/articles/securing-your-account-with-two-factor-authentication-2fa/)”。

{% warning %}

警告：

- 当您需要为企业进行双重身份验证时，不使用 2FA 的企业拥有的所有组织中的成员、外部协作者和帐单管理员（包括自动程序帐户）将从组织中删除，并失去对其仓库的访问权限。 他们还会失去对组织私有仓库的复刻的访问权限。 如果他们在从你的组织中删除后的三个月内为其帐户启用双因素身份验证，则可以恢复其访问特权和设置。 有关详细信息，请参阅“[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”。
- 为其帐户禁用 2FA 的企业拥有的任何组织中的任何组织所有者、成员、帐单管理员或外部协作者在你启用所需的双重身份验证后将自动从组织中删除。
- 如果你是某个要求双因素身份验证的企业的唯一所有者，则在不为企业禁用双因素身份验证要求的情况下，你将无法为用户帐户禁用 2FA。

{% endwarning %}

在您要求使用双重身份验证之前，我们建议通知组织成员、外部协作者和帐单管理员，并要求他们为帐户设置双重身份验证。 组织所有者可以查看成员和外部协作者是否已在每个组织的 People（人员）页面上使用 2FA。 有关详细信息，请参阅“[查看组织中的用户是否启用了 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. 在“Two-factor authentication（双重身份验证）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“双因素身份验证”下，选择“要求对企业中的所有组织进行双因素身份验证”，然后单击“保存” 。
  ![要求进行双因素身份验证的复选框](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. 如果出现提示，请阅读有关将从企业所拥有的组织中删除的成员和外部协作者的信息。 若要确认更改，请键入企业的名称，然后单击“删除成员并要求进行双因素身份验证”。
  ![确认强制执行双因素身份验证的框](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. （可选）如果从您的企业拥有的组织中删除了任何成员或外部协作者，我们建议向他们发送邀请，以恢复其以前对组织的权限和访问权限。 每个人都必须启用双重身份验证，然后才能接受您的邀请。

{% endif %}

## 管理企业的 SSH 认证机构

您可以使用 SSH 认证机构 (CA) 来允许企业拥有的任何组织的成员使用您提供的 SSH 证书访问该组织的存储库。 {% data reusables.organizations.can-require-ssh-cert %} 有关详细信息，请参阅“[关于 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。

{% data reusables.organizations.add-extension-to-cert %}

### 添加 SSH 认证中心

如果您的企业需要 SSH 证书，企业成员应使用特殊的 URL 通过 SSH 进行 Git 操作。 有关详细信息，请参阅“[关于 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### 删除 SSH 认证中心

对 CA 的删除无法撤销。 如果以后要使用同一 CA，您需要重新上传该 CA。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## 管理未经身份验证的用户的 SSO

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

如果你的企业使用 {% data variables.product.prodname_emus %}，你可以选择未经身份验证的用户在尝试访问企业资源时看到的内容。 有关 {% data variables.product.prodname_emus %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)”。

默认情况下，为了隐藏专用资源的存在，当未经身份验证的用户尝试访问你的企业时，{% data variables.product.company_short %} 将显示 404 错误。

为防止你的开发人员混淆，你可以更改此行为，以便用户通过标识提供者 (IdP) 自动重定向到单一登录 (SSO)。 启用自动重定向后，访问企业任何资源的 URL 的任何人都可以看到该资源是否存在。 但是，只有在他们使用你的 IdP 进行身份验证后具有适当的访问权限时，他们才能看到资源。

{% note %}

注意：如果用户在尝试访问企业的任何资源时登录到其个人帐户，他们将被自动注销并重定向到 SSO 以登录到其 {% data variables.enterprise.prodname_managed_user %}。 有关详细信息，请参阅“[管理多个帐户](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)”。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“单一登录设置”下，选择或取消选择“自动重定向用户以登录”。

   ![用于自动重定向用户以进行登录的复选框](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) {% endif %}

## 延伸阅读

- “[关于企业的标识和访问管理](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)”{%- ifversion ghec %}
- “[访问企业的合规性报告](/admin/overview/accessing-compliance-reports-for-your-enterprise)”{%- endif %} {%- ifversion ghec or ghae %}
- [使用 IP 允许列表限制网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list){%- endif %}
