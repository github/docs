---
title: GitHub 帐户类型
intro: '{% data variables.product.product_name %} 上的帐户允许您组织和控制对代码的访问。'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: 9316fcb8b069b0b596c89d10ac1f89d86f1a62b7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128892'
---
## 关于 {% data variables.product.product_name %} 上的帐户

使用 {% data variables.product.product_name %}，您可以存储和协作处理代码。 帐户允许您组织和控制对该代码的访问。 {% data variables.product.product_name %} 上有三种类型的帐户。
- 个人帐户
- 组织帐户
- 企业帐户

每个使用 {% data variables.product.product_name %} 的人都登录个人帐户。 组织帐户增强了多个个人帐户之间的协作，{% ifversion fpt or ghec %}企业帐户{% else %}{% data variables.product.product_location %} 的企业帐户{% endif %} 允许集中管理多个组织。

## 个人帐户

每个使用 {% data variables.product.product_location %} 的人都登录个人帐户。 您的个人帐户是您在 {% data variables.product.product_location %} 上的身份，并具有用户名和个人资料。 例如，查看 [@octocat 的个人资料](https://github.com/octocat)。

您的个人帐户可以拥有存储库、包和项目等资源。 每当您对 {% data variables.product.product_location %} 执行任何操作（例如创建议题或查看拉取请求）时，该操作都将归因于您的个人帐户。

{% ifversion fpt or ghec %}每个个人帐户使用 {% data variables.product.prodname_free_user %} 或 {% data variables.product.prodname_pro %}。 所有个人帐户都可以拥有无限数量的公共和私有存储库，这些存储库上的协作者数量不受限制。 如果您使用 {% data variables.product.prodname_free_user %}，则您的个人帐户拥有的私有仓库的功能集有限。 您可以升级到 {% data variables.product.prodname_pro %} 以获取私有仓库的完整功能集。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/articles/githubs-products)”。 {% else %}您可以创建由您的个人帐户拥有的无限数量的存储库，并在这些存储库上拥有无限数量的协作者。{% endif %}

{% tip %}

**提示**：个人帐户预期供人类使用，但你可以创建帐户以自动执行 {% data variables.product.product_name %} 上的活动。 此类型的帐户称为计算机用户。 例如，可以创建计算机用户帐户以自动执行持续集成 (CI) 工作流程。

{% endtip %}

{% ifversion fpt or ghec %} 大多数人会使用一个个人帐户来完成他们在 {% data variables.product.prodname_dotcom_the_website %} 上的所有工作，包括开源项目和带薪工作。 如果您当前使用多个为自己创建的个人帐户，我们建议您合并这些帐户。 有关详细信息，请参阅“[合并多个个人帐户](/articles/merging-multiple-user-accounts)”。
{% endif %}

## 组织帐户

组织是共享帐户，无限数量的人员可以同时跨多个项目进行协作。 

与个人帐户一样，组织可以拥有存储库、文件包和项目等资源。 但是，您无法登录到组织。 相反，每个人都登录到自己的个人帐户，并且该人员对组织资源执行的任何操作都将归因于其个人帐户。 每个个人帐户都可以是多个组织的成员。

可以为组织中的个人帐户分配组织中的不同角色，这些角色授予对组织及其数据的不同级别的访问权限。 所有成员都可以在存储库和项目中相互协作，但只有组织所有者和安全管理员才能管理组织的设置，并使用复杂的安全和管理功能控制对组织数据的访问。 有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”和“[保护组织安全](/organizations/keeping-your-organization-secure)”。

![显示用户必须登录到其个人帐户才能访问组织资源的图表](/assets/images/help/overview/sign-in-pattern.png)

{% ifversion fpt or ghec %} 即使你是使用 SAML 单一登录的组织的成员，你仍将在 {% data variables.product.prodname_dotcom_the_website %} 登录你自己的个人帐户，并且该个人帐户将链接到你在组织的标识提供者 (IdP) 中的标识。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于使用 SAML 单一登录进行身份验证](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}”{% else %}。"{% endif %}

但是，如果您是使用 {% data variables.product.prodname_emus %} 的企业的成员，而不是使用您创建的个人帐户，则企业的 IdP 将为您预置一个新帐户。 要访问该企业拥有的任何组织，您必须使用其 IdP 而不是 {% data variables.product.prodname_dotcom_the_website %} 用户名和密码进行身份验证。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}”。{% else %}."{% endif %} {% endif %}

您还可以创建称为团队的组织成员的嵌套子组，以反映组的结构并简化访问管理。 有关详细信息，请参阅“[关于团队](/organizations/organizing-members-into-teams/about-teams)”。

{% data reusables.organizations.organization-plans %}

有关组织的所有功能的详细信息，请参阅“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”。

## 企业帐户

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_ghe_server %} 包括企业帐户，这些帐户允许管理员集中管理多个组织的策略和计费，并在组织之间启用内部资源。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于企业帐户](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)”。
{% elsif ghec %} 企业帐户允许对多个组织进行集中策略管理和计费。 您可以使用企业帐户集中管理策略和帐单。 与组织不同，企业帐户不能直接拥有存储库、文件包或项目等资源。 这些资源由企业帐户中的组织拥有。 有关详细信息，请参阅“[关于企业帐户](/admin/overview/about-enterprise-accounts)”。
{% elsif ghes or ghae %} 你的企业帐户是 {% endif %} {% data variables.product.product_location %} 上{% ifversion ghae %}拥有的{% elsif ghes %}所有组织的集合。 您可以使用企业帐户集中管理策略和帐单。 与组织不同，企业帐户不能直接拥有存储库、文件包或项目等资源。 这些资源由企业帐户中的组织拥有。 有关详细信息，请参阅“[关于企业帐户](/admin/overview/about-enterprise-accounts)”。
{% endif %}

## 延伸阅读

{% ifversion fpt or ghec %}
- “[注册新 {% data variables.product.prodname_dotcom %} 帐户](/articles/signing-up-for-a-new-github-account)”{% endif %}
- “[创建新的组织帐户](/articles/creating-a-new-organization-account)”
- {% data variables.product.company_short %} 资源中的[组织人员成功协作](https://vimeo.com/333786093)视频
