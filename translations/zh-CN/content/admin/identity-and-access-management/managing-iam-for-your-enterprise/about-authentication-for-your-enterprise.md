---
title: 关于企业身份验证
shortTitle: About authentication
intro: '{% ifversion ghae %}必须配置 SAML 单一登录 (SSO)，这样用户才能{% else %}选择身份验证{% endif %}方式，以便访问 {% ifversion ghec %}{% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %} 上有关 {% data variables.product.product_name %}{% endif %} 的企业资源。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164370'
---
## 关于企业身份验证

{% ifversion ghec %}

{% data variables.product.product_name %} 上的企业所有者可以控制对企业资源的身份验证和访问权限的要求。 

{% data reusables.enterprise.ghec-authentication-options %}

详细了解这些选项后，要确定哪种方法最适合企业，请参阅“[确定企业的最佳身份验证方法](#identifying-the-best-authentication-method-for-your-enterprise)”。

## {% data variables.product.product_name %} 的身份验证方法

以下选项可用于在 {% data variables.product.product_name %} 上进行帐户管理和身份验证。

- [ {% data variables.location.product_location %} 进行身份验证](#authentication-through-githubcom)
- [通过 {% data variables.location.product_location %} 进行身份验证，并具有其他 SAML 访问限制](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [使用 {% data variables.product.prodname_emus %} 和联合方法进行身份验证](#authentication-with-enterprise-managed-users-and-federation)

### 通过 {% data variables.location.product_location %} 进行身份验证

默认情况下，每个成员必须在 {% data variables.location.product_location %} 上创建个人帐户。 你授予对企业的访问权限，成员在 {% data variables.location.product_location %} 上登录帐户后方可访问企业资源。 成员管理帐户，并且可以为 {% data variables.location.product_location %} 上的其他企业、组织和存储库做出贡献。

### 通过 {% data variables.location.product_location %} 进行身份验证，并具有其他 SAML 访问限制

如果配置其他 SAML 访问限制，每个成员就必须在 {% data variables.location.product_location %} 上创建和管理个人帐户。 你授予对企业的访问权限，成员在 {% data variables.location.product_location %} 上登录帐户并成功通过 SAML 标识提供者 (IdP) 进行身份验证后，方可访问企业资源。 成员可以使用其个人帐户为 {% data variables.location.product_location %} 上的其他企业、组织和存储库做出贡献。 有关要求对所有企业资源访问进行 SAML 身份验证的详细信息，请参阅“[关于适用于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)”。

如果对 {% data variables.product.product_name %} 使用独立组织，或者不想对企业中的每个组织使用 SAML 身份验证，则可以为单个组织配置 SAML。 有关详细信息，请参阅[关于使用 SAML 单一登录进行标识和访问管理](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)。

### 使用 {% data variables.product.prodname_emus %} 和联合方法进行身份验证

如果需要对 {% data variables.location.product_location %} 上的企业成员的帐户进行更多控制，可以使用 {% data variables.product.prodname_emus %}。 使用 {% data variables.product.prodname_emus %} 时，可以使用 IdP 在 {% data variables.location.product_location %} 上为企业成员预配和管理帐户。 每个成员会登录到你创建的帐户，由企业管理该帐户。 对 {% data variables.product.prodname_dotcom_the_website %} 的其余部分的贡献受到限制。 有关详细信息，请参阅[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)。

## 确定企业的最佳身份验证方法

SAML SSO 和 {% data variables.product.prodname_emus %} 都可增强企业资源的安全性。 {% data variables.product.prodname_emus %} 还可用于控制企业成员的用户帐户并限制帐户可以执行的操作。 但如果这些限制阻碍了开发人员的工作流，这些限制可能得不到企业的承认。

要确定企业是更多地受益于 SAML SSO 还是 {% data variables.product.prodname_emus %}，请问问自己以下这些问题。

- [是否希望控制用户的用户帐户？](#do-you-want-to-control-the-user-accounts-for-your-users)
- [企业使用的标识提供者是什么？](#which-identity-provider-does-your-enterprise-use)
- [开发人员是在公共存储库、Gist 还是在 {% data variables.product.prodname_pages %} 站点上工作？](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [开发人员是否依赖于企业外部的协作？](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [企业是否依赖于外部协作者？](#does-your-enterprise-rely-on-outside-collaborators)
- [企业能否容忍迁移成本？](#can-your-enterprise-tolerate-migration-costs)

### 是否希望控制用户的用户帐户？

如果你不希望企业成员在 {% data variables.product.prodname_dotcom_the_website %} 上使用其自己的个人帐户来访问企业资源，则 {% data variables.product.prodname_emus %} 可能适合你的企业。 

借助 SAML SSO，开发人员可以创建和管理其自己的个人帐户，并且每个帐户都链接到 IdP 中的 SAML 标识。 {% data variables.product.prodname_emus %} 的功能更像其他熟悉的 SSO 解决方案，因为你可以为用户预配帐户。 还可通过控制与帐户关联的用户名和电子邮件地址，确保用户帐户符合公司标识。 

如果你当前要求用户在 {% data variables.product.prodname_dotcom_the_website %} 上创建新帐户以仅在你的企业中使用，则 {% data variables.product.prodname_emus %} 可能更适合你。 但是，如果将 IdP 用作用户和访问管理的真相源，则 SAML SSO 可能是更好的选择，因为它可以显著降低复杂性。 例如，也许你的企业没有在 IdP 中加入新用户的既定流程。

### 企业使用的标识提供者是什么？

{% data variables.product.prodname_emus %} 支持有限数量的 IdP，而 SAML SSO 充分支持大量 IdP，并对所有实施 SAML 2.0 标准的 IdP 提供有限支持。 有关每个选项支持的 IDP 列表，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)”和“[关于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)”。

仅当将不受支持的 IdP 联合到受支持的 IdP 以用作集成点时，才能将 {% data variables.product.prodname_emus %} 与不受支持的 IdP 一起使用。 如果想要避免这种额外的复杂性，SAML SSO 可能是更好的解决方案。

### 开发人员是在公共存储库、Gist 还是在 {% data variables.product.prodname_pages %} 站点上工作？

为防止企业成员在 {% data variables.product.prodname_dotcom_the_website %} 上意外将企业拥有的内容泄露给公众，{% data variables.product.prodname_emus %} 对用户可执行的操作施加了严格的限制。 例如，{% data variables.enterprise.prodname_managed_users %} 无法创建公共存储库、任何可见性的 Gist 或在企业外部可见的 {% data variables.product.prodname_pages %} 站点。 有关限制的完整列表，请参阅“[{% data variables.enterprise.prodname_managed_users %} 的功能和限制](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)”。

某些企业可能无法接受这些限制。 要确定 {% data variables.product.prodname_emus %} 是否适合你，请与你的开发人员一起查看限制，并确认任何限制是否会阻碍你现有的工作流。 如果会，SAML SSO 可能是企业更好的选择。

### 开发人员是否依赖于企业外部的协作？

{% data variables.enterprise.prodname_managed_users_caps %} 仅适用于企业内的存储库。 如果开发人员必须参与企业内外的存储库（包括专用存储库），则 {% data variables.product.prodname_emus %} 可能不适合你的企业。 SAML SSO 可能是更好的解决方案。

某些公司在 {% data variables.location.product_location %} 上使用 SAML SSO 维护现有企业中的存储库，还会创建 {% data variables.enterprise.prodname_emu_enterprise %}。 从单个工作站参与两个企业拥有的存储库的开发人员必须在单个浏览器中，在 {% data variables.location.product_location %} 上的帐户之间切换，或者为每个帐户使用不同的浏览器。 开发人员可能还需要自定义工作站的 Git 配置，以适应这两个帐户。 此工作流的复杂性可能会增加错误地将内部代码泄露给公众的风险。

如果你决定创建 {% data variables.enterprise.prodname_emu_enterprise %}，但要求开发人员从单个工作站参与企业外部的资源，可以在开发人员的本地 Git 配置中为帐户之间的切换提供支持。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom)”。

### 企业是否依赖于外部协作者？

借助 SAML SSO，可使用外部协作者角色向非 IdP 目录成员的人员授予对特定存储库的访问权限。 这对于企业外部的合作者（如承包商）尤其有用。 有关详细信息，请参阅“[将外部协作者添加到组织中的存储库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”。

使用 {% data variables.product.prodname_emus %} 时，不存在外部协作者角色。 企业资源只能被 {% data variables.enterprise.prodname_managed_users %} 访问，后者始终由 IdP 预配。 要让外部合作者访问你的企业，必须在 IdP 中使用来宾帐户。 如果你对 {% data variables.product.prodname_emus %} 感兴趣，请与开发人员确认这是否会妨碍其任何现有工作流。 如果会，SAML SSO 可能是更好的解决方案。

### 企业能否容忍迁移成本？

如果企业不熟悉 {% data variables.product.prodname_dotcom_the_website %}，SAML SSO 和 {% data variables.product.prodname_emus %} 同样易于采用。

如果已与管理其自己的用户帐户的开发人员一起使用 {% data variables.product.prodname_dotcom_the_website %}，则采用 {% data variables.product.prodname_emus %} 时需要迁移到新的企业帐户。 有关详细信息，请参阅“[关于具有 {% data variables.enterprise.prodname_managed_users %} 的企业](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)”。

虽然 {% data variables.product.prodname_emus %} 是免费的，但迁移过程可能需要团队付出时间或成本。 确认你的企业和开发人员可以接受此迁移过程。 如果无法接受，SAML SSO 可能是更好的选择。

{% elsif ghes %}

站点管理员可以决定用户如何进行身份验证以访问 {% data variables.product.product_name %} 实例。 可以使用 {% data variables.product.product_name %} 的内置身份验证，或者，如果要集中管理你的团队使用的 Web 应用程序的标识和访问权限，则可以配置外部身份验证方法。

## {% data variables.product.product_name %} 的身份验证方法

{% data variables.product.product_name %} 可使用以下身份验证方法。

- [内置身份验证](#built-in-authentication)
- [外部身份验证](#external-authentication)

### 内置身份验证

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} 若要访问实例，人员需使用帐户的凭据进行身份验证。 有关详细信息，请参阅“[配置内置身份验证](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)”。

### 外部身份验证

如果使用外部目录或标识提供者 (IdP) 集中访问多个 Web 应用程序，可以为 {% data variables.location.product_location %} 配置外部身份验证。 有关详细信息，请参阅以下文章。

- [将 CAS 用于企业 IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)
- [将 LDAP 用于企业 IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)
- [将 SAML 用于企业 IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)

如果选择使用外部身份验证，还可以为没有外部身份验证提供程序帐户的人员配置回退身份验证。 例如，你可能想要向承包商或计算机用户授予访问权限。 有关详细信息，请参阅“[允许对提供者外部的用户使用内置身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)”。

{% ifversion scim-for-ghes %}

如果使用 SAML SSO 进行身份验证，还可以使用 SCIM 预配用户并将 IdP 组映射到团队。 有关详细信息，请参阅“[使用 SCIM 为企业配置用户预配](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)”。

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %} 使用 SAML SSO 进行身份验证。 企业所有者必须在初始化期间使用 SAML 标识提供者 (IdP) 配置 SAML SSO。 有关详细信息，请参阅“[关于适用于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)”。

{% endif %}

## 延伸阅读

- “[{% data variables.product.company_short %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts)”
- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”{%- ifversion ghec %}
- “[可以为组织中的人员创建帐户吗？](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)”
{% endif %}
