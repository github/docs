---
title: 确保帐户安全的最佳做法
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: 关于如何保护可以访问你的软件供应链的帐户的指导。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
ms.openlocfilehash: 4225b80d139462fd64e440947c1eba9adb817294
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883407'
---
## 关于本指南

本指南介绍为提高帐户安全性而做出的影响最大的更改。 每个部分都概述了可以对流程进行的更改，以提高安全性。 影响最大的更改列在前面。

## 风险是什么？

帐户安全性是供应链安全的基础。 如果攻击者可以在 {% data variables.product.product_name %} 上接管你的帐户，则可以对代码或生成过程进行恶意更改。 因此，你的第一个目标应该是让某人难以接管你的帐户以及{% ifversion fpt %}你的组织{% elsif ghec or ghae %}你的组织或企业{% elsif ghes %}{% data variables.product.product_location %}{% endif %}的其他{% ifversion ghes %}用户{% else %}成员{% endif %}的帐户。

{% ifversion ghec or ghes %}
## 集中进行身份验证
{% endif %}

{% ifversion ghec %} 如果你是企业或组织所有者，则可以使用 SAML 配置集中式身份验证。 虽然可以手动添加或删除成员，但在 {% data variables.product.product_name %} 与 SAML 标识提供者 (IdP) 之间设置单一登录 (SSO) 和 SCIM 更简单且更安全。 这也简化了企业所有成员的身份验证过程。

可以为企业或组织帐户配置 SAML 身份验证。 使用 SAML，可以通过 IdP 授予对 {% data variables.product.product_location %} 上企业或组织成员的个人帐户的访问权限，也可以通过使用 {% data variables.product.prodname_emus %} 创建和控制属于企业的帐户。 有关详细信息，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。

配置 SAML 身份验证后，当成员请求访问你的资源时，他们将被定向到你的 SSO 流，以确保你的 IdP 仍能识别他们。 如果无法识别他们，则拒绝其请求。

某些 IdP 支持名为 SCIM 的协议，在对 IdP 进行更改时，该协议可以在 {% data variables.product.product_name %} 上自动预配或取消预配访问权限。 借助 SCIM，随着团队的增长，你可以简化管理，并且可以快速撤销对帐户的访问权限。 SCIM 适用于 {% data variables.product.product_name %} 上的单个组织，或者适用于使用 {% data variables.product.prodname_emus %} 的企业。 有关详细信息，请参阅“[关于组织的 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”。
{% endif %}

{% ifversion ghes %} 如果你是 {% data variables.product.product_location %} 的站点管理员，则可以通过选择与现有标识提供者 (IdP) 连接的身份验证方法来简化用户的登录体验，例如 CAS、SAML 或 LDAP。 这意味着，他们不再需要记住 {% data variables.product.prodname_dotcom %} 的额外密码。

某些身份验证方法还支持将其他信息传达给 {% data variables.product.product_name %}，例如，用户所属的组或同步用户的加密密钥。 这是在组织增长时简化管理的好方法。

有关可用于 {% data variables.product.product_name %} 的身份验证方法的详细信息，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。
{% endif %}

## 配置双因素身份验证

提高{% ifversion fpt %}你的个人帐户{% elsif ghes %}你的个人帐户或 {% data variables.product.product_location %}{% elsif ghec %}你的帐户{% elsif ghae %}你的企业在 {% data variables.product.product_name %}{% endif %} 上的安全性的最佳方式是，在你的 SAML 标识提供者 (IdP){% endif %} 上配置双因素身份验证 (2FA){% ifversion ghae %}。 密码本身可以通过猜测、在另一个遭到入侵的网站上重复使用或社交工程（如网络钓鱼）而泄露。 即使攻击者拥有密码，2FA 也会使帐户更加难以遭到入侵。

{% ifversion not ghae %}

{% ifversion ghec %} 如果你是企业所有者，则可以为企业拥有的所有组织配置策略以要求使用 2FA。
{% endif %}

{% ifversion ghes %} 如果你是 {% data variables.product.product_location %} 的站点管理员，则可能可以为实例的所有用户配置 2FA。 {% data variables.product.product_name %} 上 2FA 的可用性取决于所使用的身份验证方法。 有关详细信息，请参阅“[集中进行用户身份验证](#centralize-user-authentication)”。
{% endif %}

如果你是组织所有者，则{% ifversion fpt %}可以{% else %}可能能够{% endif %}要求组织的所有成员启用 2FA。

{% ifversion ghec or ghes %}

### 配置企业帐户

企业所有者可能能够要求{% ifversion ghes %}实例{% elsif ghec %}企业{% endif %}{% ifversion ghes %}上的所有用户{% elsif ghec %}的所有成员{% endif %}使用 2FA。 {% data variables.product.product_name %} 上 2FA 策略的可用性取决于{% ifversion ghes %}用户{% else %}成员{% endif %}如何进行身份验证以访问{% ifversion ghes %}实例{% elsif ghec %}企业的资源{% endif %}。

{% ifversion ghes %}
- 如果使用 CAS 或 SAML SSO 通过外部 IdP 登录到 {% data variables.product.product_location %}，则{% elsif ghec %}如果企业使用 {% data variables.product.prodname_emus %} 或为你的企业强制执行 SAML 身份验证，则 {%- endif %} 无法在 {% data variables.product.product_name %} 上配置 2FA。 对 IdP 具有管理访问权限的人员必须为 IdP 配置 2FA。

{% ifversion ghes %}

- 如果通过外部 LDAP 目录登录到 {% data variables.product.product_location %}，则可以在 {% data variables.product.product_name %} 上为企业要求 2FA。 如果允许目录外部的用户进行内置身份验证，则单个用户可以启用 2FA，但企业不需要 2FA。

{% endif %}

有关详细信息，请参阅{% ifversion ghec %}“[关于企业标识和访问管理](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)”和{% endif %}“[为企业中的安全设置实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)”。

{% endif %}

### 配置个人帐户

{% ifversion ghec or ghes %} {% note %}

注意：根据{% ifversion ghec %}企业所有者{% elsif ghes %}站点管理员{% endif %} 为 {% data variables.product.product_location %} {% ifversion ghec %}上的企业{% endif %}配置的身份验证方法，可能无法为个人帐户启用 2FA。

{% endnote %} {% endif %}

{% data variables.product.product_name %} 支持 2FA 的多个选项，尽管其中任何一个都比没有好，但最安全的选项是 WebAuthn。 WebAuthn 需要硬件安全密钥或通过 Windows Hello 或 Mac TouchID 等内容支持它的设备。 尽管很困难，但有可能对其他形式的 2FA 进行网络钓鱼（例如，有人要求你向他们读取你的 6 位一次性密码）。 但是 WebAuthn 不可网络钓鱼，因为域范围内置于协议中，从而阻止来自模拟登录页的网站的凭据在 {% data variables.product.product_name %} 上使用。

设置 2FA 时，应始终下载恢复代码并设置多个因素。 这可确保对帐户的访问不依赖于单个设备。 有关详细信息，请参阅 GitHub 商店中的“[配置双因素身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)”、“[配置双因素身份验证恢复方法](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)”和[GitHub 品牌硬件安全密钥](https://thegithubshop.com/products/github-branded-yubikey)。

### 配置组织帐户

{% ifversion ghec or ghes %} {% note %}

注意：根据{% ifversion ghec %}企业所有者{% elsif ghes %}站点管理员{% endif %} 为 {% data variables.product.product_location %} {% ifversion ghec %}上的企业{% endif %}配置的身份验证方法，可能无法为组织要求 2FA。

{% endnote %} {% endif %}

如果你是组织所有者，则可以看到哪些用户未启用 2FA，帮助他们进行设置，然后为组织要求 2FA。 若要引导你完成此过程，请参阅：

1. [查看组织中的用户是否已启用 2FA](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)
2. “[准备在组织中要求双因素身份验证](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)”
3. “[你的组织中需要双因素身份验证](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)”

{% endif %}

## 使用 SSH 密钥连接到 {% data variables.product.product_name %}

除了通过 IdP{% endif %} 登录到网站{% ifversion ghae %}之外，还有其他方法可以与 {% data variables.product.product_name %} 进行交互。 许多人使用 SSH 私钥授权推送到 {% data variables.product.prodname_dotcom %} 的代码。 有关详细信息，请参阅“[关于 SSH](/authentication/connecting-to-github-with-ssh/about-ssh)”。

就像{% ifversion ghae %}你的 IdP 帐户密码{% else %}帐户密码{% endif %}一样，如果攻击者能够获取 SSH 私钥，他们可能会模拟你并将恶意代码推送到你拥有写入访问权限的任何存储库。 如果将 SSH 私钥存储在磁盘驱动器上，最好使用通行短语保护它。 有关详细信息，请参阅“[使用 SSH 密钥密码](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)”。

另一种方法是在硬件安全密钥上生成 SSH 密钥。 可以使用用于 2FA 的同一密钥。 硬件安全密钥很难远程入侵，因为专用 SSH 密钥保留在硬件上，并且无法直接从软件访问。 有关详细信息，请参阅“[为硬件安全密钥生成新的 SSH 密钥](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)”。

{% ifversion ghec or ghes or ghae %} 硬件支持的 SSH 密钥非常安全，但硬件要求可能不适用于某些组织。 另一种方法是使用仅在短时间内有效的 SSH 密钥，因此即使私钥遭到入侵，也不可能被利用很长时间。 这是运行自己的 SSH 证书颁发机构背后的概念。 虽然此方法可让你对用户身份验证的方式进行大量控制，但它还负责自行维护 SSH 证书颁发机构。 有关详细信息，请参阅“[关于 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。
{% endif %}

## 后续步骤

- “[保护端到端供应链](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”

- [保护供应链中的代码的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)

- [保护生成系统的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)
