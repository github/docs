---
title: 开始使用 GitHub Enterprise Cloud
intro: '开始设置和管理 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户。'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 249c89ad65bf9a9fc0140b8fb48e7bd0530ff594
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147389961'
---
本指南将引导您以组织或企业所有者的身份设置、配置和管理您的 {% data variables.product.prodname_ghe_cloud %} 帐户。

{% data reusables.enterprise.ghec-cta-button %}

## 第 1 部分：选择您的帐户类型

{% data variables.product.prodname_dotcom %} 提供两种类型的企业产品：

- {% data variables.product.prodname_ghe_cloud %}
- {% data variables.product.prodname_ghe_server %}

产品之间的主要区别在于 {% data variables.product.prodname_ghe_cloud %} 由 {% data variables.product.prodname_dotcom %} 托管，而 {% data variables.product.prodname_ghe_server %} 是自托管的。

{% data reusables.enterprise.about-github-for-enterprises %}

使用 {% data variables.product.prodname_ghe_cloud %}，您可以选择 使用 {% data variables.product.prodname_emus %}。 {% data reusables.enterprise-accounts.emu-short-summary %}

如果你选择让成员创建和管理自己的个人帐户，可以将两种类型的帐户与 {% data variables.product.prodname_ghe_cloud %} 一起使用：

- 单个组织帐户
- 包含多个组织的企业帐户

### 1. 了解组织帐户和企业帐户之间的差异

组织和企业帐户都可用于 {% data variables.product.prodname_ghe_cloud %}。 组织是一个共享帐户，其中一组人员可以同时跨多个项目进行协作，所有者和管理员可以管理对数据和项目的访问权限。 企业帐户支持多个组织之间的协作，并允许所有者集中管理这些组织的策略、计费和安全性。 有关差异的详细信息，请参阅[组织和企业帐户](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts)。

如果选择企业帐户，请记住，某些策略只能在组织级别设置，而其他策略可以针对企业中的所有组织强制执行。

选择所需的帐户类型后，您可以继续设置帐户。 在本指南的每个部分中，根据您的帐户类型转到单个组织或企业帐户部分。

## 第 2 部分：设置您的帐户
要开始使用 {% data variables.product.prodname_ghe_cloud %}，需要创建组织或企业帐户，并设置和查看计费设置、订阅和使用情况。
### 使用 {% data variables.product.prodname_ghe_cloud %} 设置单个组织帐户

#### 1. 关于组织
组织是共享帐户，供多个项目的人员同时协作之用。 借助 {% data variables.product.prodname_ghe_cloud %}，所有者和管理员可以通过复杂的用户身份验证和管理以及升级的支持和安全选项来管理其组织。 有关详细信息，请参阅[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)。
#### 2. 创建或升级组织帐户

要将组织帐户与 {% data variables.product.prodname_ghe_cloud %} 配合使用，您首先需要创建一个组织。 当系统提示您选择计划时，选择“企业”。 有关详细信息，请参阅[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)。

或者，如果你有想要升级的现有组织帐户，请按照[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription)中的步骤操作。
#### 3. 设置和管理计费

如果选择将组织帐户与 {% data variables.product.prodname_ghe_cloud %} 配合使用，你将首先有权访问 [30 天试用版](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)。 如果您在试用期结束前未购买 {% data variables.product.prodname_enterprise %} 或 {% data variables.product.prodname_team %} ，您的组织将被降级为 {% data variables.product.prodname_free_user %}，并且无法访问仅付费产品中包含的任何高级工具和功能。 有关详细信息，请参阅[完成试用](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)。

通过组织的计费设置页面，可以管理付款方式和计费周期等设置、查看有关订阅的信息以及升级存储空间和 {% data variables.product.prodname_actions %} 分钟数。 有关管理计费设置的详细信息，请参阅[管理 {% data variables.product.prodname_dotcom %} 计费设置](/billing/managing-your-github-billing-settings)。

只有具有所有者或计费管理员角色的组织成员才能访问或更改组织的计费设置 。 帐单管理员是管理组织的计费设置的用户，不在组织的订阅中使用付费许可证。 有关将计费管理员添加到组织的详细信息，请参阅[为组织添加计费管理员](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)。

### 使用 {% data variables.product.prodname_ghe_cloud %} 设置企业帐户

#### 1. 关于企业帐户

企业帐户允许您集中管理多个 {% data variables.product.prodname_dotcom %} 组织的策略和设置，包括成员访问、计费、使用情况和安全性。 有关详细信息，请参阅[关于企业帐户](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)。

#### 2. 创建企业帐户

 通过发票付款的 {% data variables.product.prodname_ghe_cloud %} 客户可以直接通过 {% data variables.product.prodname_dotcom %} 创建企业帐户。 有关详细信息，请参阅“[创建企业帐户](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)”。 
 
 目前未通过发票付款的 {% data variables.product.prodname_ghe_cloud %} 客户可以联系 [{% data variables.product.prodname_dotcom %} 的销售团队](https://enterprise.github.com/contact)为你创建企业帐户。

#### 3. 将组织添加到企业帐户

您可以在企业帐户中创建要管理的新组织。 有关详细信息，请参阅[将组织添加到企业](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)。

如果要将现有组织转移到企业帐户，请与 {% data variables.product.prodname_dotcom %} 销售客户代表联系。
#### 4. 查看企业帐户的订阅和使用情况
您可以随时查看企业帐户的当前订阅、许可证使用情况、发票、付款历史记录和其他帐单信息。 企业所有者和帐单管理员都可以访问和管理企业帐户的帐单设置。 有关详细信息，请参阅[查看企业帐户的订阅和使用情况](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)。

## 第 3 部分：使用 {% data variables.product.prodname_ghe_cloud %} 管理组织或企业成员和团队

### 管理组织中的成员和团队
您可以设置权限和成员角色，创建和管理团队，并授予人员访问组织中存储库的权限。 
#### 1. 管理组织成员
{% data reusables.getting-started.managing-org-members %}
#### 2. 组织权限和角色
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. 关于和创建团队
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. 管理团队设置
{% data reusables.getting-started.managing-team-settings %}
#### 5. 为人员和团队提供对存储库、项目板和应用的访问权限
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### 管理企业帐户的成员
管理企业成员与管理组织中的成员或团队是分开的。 请务必注意，企业所有者或管理员无法访问组织级设置或管理其企业中组织的成员，除非他们成为组织所有者。 有关详细信息，请参阅上面的[管理组织中的成员和团队](#managing-members-and-teams-in-your-organization)部分。

如果您的企业使用 {% data variables.product.prodname_emus %}，则您的成员将通过您的身份提供商进行完全管理。 添加成员、更改其成员身份以及分配角色都是使用您的 IdP 进行管理的。 有关详细信息，请参阅[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)。

如果您的企业不使用 {% data variables.product.prodname_emus %}，请按照以下步骤操作。

#### 1. 在企业中分配角色
默认情况下，企业中的每个人都是企业的成员。 还有一些管理角色，包括企业所有者和帐单管理员，它们对企业设置和数据具有不同级别的访问权限。 有关详细信息，请参阅[企业中的角色](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)。
#### 2. 邀请人员管理企业
您可以邀请人员以企业所有者或帐单管理员的身份管理您的企业，也可以删除不再需要访问权限的人员。 有关详细信息，请参阅[邀请人员管理企业](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)。

您还可以授予企业成员在支持门户中管理支持工单的能力。 有关详细信息，请参阅[管理企业的支持权利](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)。
#### 3. 查看企业中的人员
要审核对企业拥有的资源或用户许可证使用情况的访问，可以查看企业中的每个企业管理员、企业成员和外部协作者。 您可以查看成员所属的组织以及外部协作者有权访问的特定存储库。 有关详细信息，请参阅[查看企业中的人员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)。

## 第 4 部分：使用 {% data variables.product.prodname_ghe_cloud %} 管理安全性

* [管理单个组织的安全性](#managing-security-for-a-single-organization)
* [管理 {% data variables.product.prodname_emu_enterprise %} 的安全性](#managing-security-for-an-enterprise-with-managed-users)
* [在没有 {% data variables.product.prodname_managed_users %} 的情况下管理企业帐户的安全性](#managing-security-for-an-enterprise-account-without-managed-users)

### 管理单个组织的安全性
通过要求双重身份验证、配置安全功能、查看组织的审核日志和集成以及启用 SAML 单点登录和团队同步，可以帮助确保组织的安全。
#### 1. 需要双因素身份验证
{% data reusables.getting-started.requiring-2fa %}
#### 2. 为组织配置安全功能
{% data reusables.getting-started.configuring-security-features %}

#### 3. 查看组织的审核日志和集成
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. 为组织启用和强制实施 SAML 单一登录
如果您使用身份提供商 (IdP) 管理应用程序和组织成员的身份，则可以配置 SAML 单点登录 (SSO) 来控制和保护对组织资源（如存储库、议题和拉取请求）的访问。 当您的组织成员访问使用 SAML SSO 的组织资源时，{% data variables.product.prodname_dotcom %} 会将其重定向到您的 IdP 进行身份验证。 有关详细信息，请参阅[关于使用 SAML 单一登录进行标识和访问管理](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)。

组织所有者可以选择禁用、启用但不强制实施，或者启用并强制实施 SAML SSO。 有关详细信息，请参阅[为组织启用和测试 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)和[为组织强制实施 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)。
#### 5. 管理组织的团队同步
组织所有者可以在您的身份提供商 (IdP) 和 {% data variables.product.prodname_dotcom %} 之间启用团队同步，以允许组织所有者和团队维护员将组织中的团队与 IdP 组连接起来。 有关详细信息，请参阅[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)。

### 管理 {% data variables.product.prodname_emu_enterprise %} 的安全性

有了 {% data variables.product.prodname_emus %}，可通过身份提供商集中管理访问和身份。 应在您的 IdP 上启用并强制实施双重身份验证和其他登录要求。 

#### 1. 在 {% data variables.product.prodname_emu_enterprise %} 中启用和 SAML 单一登录和预配

在 {% data variables.product.prodname_emu_enterprise %} 中，所有成员都由身份提供商配置和管理。 您必须先启用 SAML SSO 和 SCIM 预配，然后才能开始使用企业。 有关为 {% data variables.product.prodname_emu_enterprise %} 配置 SAML SSO 和预配的详细信息，请参阅[为企业托管用户配置 SAML 单一登录](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)。

#### 2. 使用标识提供者管理 {% data variables.product.prodname_emu_enterprise %} 中的团队

您可以将组织中的团队连接到身份提供商中的安全组，管理团队的成员身份以及通过 IdP 访问存储库。 有关详细信息，请参阅[使用标识提供者组管理团队成员身份](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)。

#### 3. 管理 {% data variables.product.prodname_emu_enterprise %} 中允许用于组织的 IP 地址

您可以为特定 IP 地址配置允许列表，以限制对 {% data variables.product.prodname_emu_enterprise %} 中组织拥有的资产的访问。 有关详细信息，请参阅[为企业中的安全设置强制实施策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)

#### 4. 在 {% data variables.product.prodname_emu_enterprise %} 中强制实施高级安全功能的策略
{% data reusables.getting-started.enterprise-advanced-security %}

### 在没有 {% data variables.product.prodname_managed_users %} 的情况下管理企业帐户的安全性
要管理企业的安全性，可以要求双重身份验证、管理允许的 IP 地址、在企业级别启用 SAML 单点登录和团队同步，以及注册并强制实施 GitHub 高级安全功能。 

#### 1. 要求对企业帐户中的组织进行双因素身份验证并管理允许的 IP 地址
企业所有者可以要求企业帐户拥有的所有组织中的组织成员、帐单管理员和外部协作者使用双重身份验证来保护其个人帐户。 在此之前，我们建议通知所有能够访问企业中组织的人。 您还可以为特定 IP 地址配置允许列表，以限制对企业帐户中组织拥有的资产的访问。 

有关强制实施双因素身份验证和允许的 IP 地址列表的详细信息，请参阅[在企业中强制实施安全设置策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)。
#### 2. 为企业帐户中的组织启用和强制实施 SAML 单一登录
您可以使用 IdP 和 SAM 单点登录 (SSO) 集中管理对企业资源、组织成员身份和团队成员身份的访问权限。 企业所有者可以在企业帐户拥有的所有组织中启用 SAML SSO。 有关详细信息，请参阅[关于企业标识和访问管理](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)。

#### 3. 管理团队同步
您可以启用和管理身份提供商 (IdP) 与 {% data variables.product.prodname_dotcom %} 之间的团队同步，以允许您的企业帐户拥有的组织管理 IdP 组的团队成员身份。 有关详细信息，请参阅[管理企业帐户中组织的团队同步](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)

#### 4. 在企业帐户中强制实施高级安全功能的策略
{% data reusables.getting-started.enterprise-advanced-security %}

## 第 5 部分：管理组织和企业级策略和设置

### 管理单个组织的设置
要管理和审核组织，可以设置组织策略、管理存储库更改的权限以及使用组织级别的社区健康文件。
#### 1. 管理组织策略
{% data reusables.getting-started.managing-org-policies %}
#### 2. 管理存储库更改
{% data reusables.getting-started.managing-repo-changes %}
#### 3. 使用组织级别的社区运行状况文件和审查工具
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### 管理企业帐户的设置
要管理和主持企业，可以为企业中的组织设置策略、查看审核日志、配置 web 挂钩以及限制电子邮件通知。
#### 1. 管理企业帐户中组织的策略

您可以选择为企业拥有的所有组织强制实施多个策略，也可以选择允许在每个组织中设置这些策略。 您可以强制实施的策略类型包括存储库管理、项目板和团队策略。 有关详细信息，请参阅[为企业设置策略](/enterprise-cloud@latest/admin/policies)。
#### 2. 查看审核日志、配置 Webhook 以及限制企业的电子邮件通知
您可以在企业审核日志中查看企业帐户拥有的所有组织的操作。 您还可以将 web 挂钩配置为从企业帐户拥有的组织接收事件。 有关详细信息，请参阅[查看企业的审核日志](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)和[监视企业](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise)。

您还可以限制企业帐户的电子邮件通知，以便企业成员只能使用已验证或已批准的域中的电子邮件地址来接收通知。 有关详细信息，请参阅[限制企业的电子邮件通知](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)。

## 第 6 部分：自定义和自动化组织或企业在 {% data variables.product.prodname_dotcom %} 上的工作
组织或企业的成员可以使用 {% data variables.product.prodname_marketplace %}、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 中的工具以及现有的 {% data variables.product.product_name %} 功能来自定义和自动化工作。

### 1. 使用 {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. 使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API
{% data reusables.getting-started.api %}
### 3. 生成 {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}
### 4. 发布和管理 {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}
### 5. 使用 {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} 是一项静态站点托管服务，它直接从存储库获取 HTML、CSS 和 JavaScript 文件并发布网站。 您可以在组织级别管理 {% data variables.product.prodname_pages %} 站点的发布。 有关详细信息，请参阅[为组织管理 {% data variables.product.prodname_pages %} 站点的发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)和[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)。
## 第 7 部分：参与 {% data variables.product.prodname_dotcom %} 的社区

组织或企业的成员可以使用 GitHub 的学习和支持资源来获得所需的帮助。 您还可以支持开源社区。 

### 1. 阅读 {% data variables.product.prodname_docs %} 上的 {% data variables.product.prodname_ghe_cloud %}
您可以阅读反映 {% data variables.product.prodname_ghe_cloud %} 可用功能的文档。 有关详细信息，请参阅[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)。

### 2. 通过 {% data variables.product.prodname_learning %} 学习
组织或企业的成员可以通过在自己的 GitHub 存储库中使用 [{% data variables.product.prodname_learning %}](https://skills.github.com/) 完成有趣、逼真的项目来学习新技能。 每门课程都是由 GitHub 社区创建并由友好的机器人教授的实践课程。

有关详细信息，请参阅 [Git 和 {% data variables.product.prodname_dotcom %} 学习资源](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)。
### 3. 支持开放源代码社区
{% data reusables.getting-started.sponsors %}

### 4. 联系 {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} 允许您以八小时的目标响应时间提交优先支持请求。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 支持](/github/working-with-github-support/github-enterprise-cloud-support)。
