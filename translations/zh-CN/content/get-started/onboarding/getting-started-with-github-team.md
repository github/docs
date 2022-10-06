---
title: 开始使用 GitHub Team
intro: '通过 {% data variables.product.prodname_team %} 组人员可以在组织帐户中同时跨多个项目进行协作。'
versions:
  fpt: '*'
ms.openlocfilehash: 46b5376b72ce30f7c526f693f2adb9253853cf1d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '146139158'
---
本指南将引导您以组织所有者的身份设置、配置和管理您的 {% data variables.product.prodname_team %} 帐户。

## 第 1 部分：在 {% data variables.product.product_location %}上配置您的帐户
若要开始使用 {% data variables.product.prodname_team %}，首先需要创建个人帐户或登录到 {% data variables.product.prodname_dotcom %} 上的现有帐户，创建组织并设置账单。

### 1. 关于组织
组织是共享帐户，其中业务和开源项目可同时跨多个项目进行协作。 所有者和管理员可使用复杂的安全性和管理功能来管理成员对组织数据和项目的访问。 有关组织功能的详细信息，请参阅“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations)”。

### 2. 创建组织并注册 {% data variables.product.prodname_team %}
在创建组织之前，你需要在 {% data variables.product.product_location %} 上创建个人帐户或登录到现有帐户。 有关详细信息，请参阅“[注册新 {% data variables.product.prodname_dotcom %} 帐户](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)”。

设置个人帐户后，你可以创建组织并选择计划。 您可以在此处为组织选择 {% data variables.product.prodname_team %} 订阅。 有关详细信息，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

### 3. 管理组织的账单
您必须单独管理每个个人帐户和组织的结算设置、付款方式以及付费功能和产品。 您可以使用设置中的上下文切换器在不同帐户的设置之间切换。 有关详细信息，请参阅“[在不同帐户的设置之间切换](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)”。

通过组织的计费设置页面，您可以管理付款方式、结算周期和帐单邮箱等设置，或查看订阅、帐单日期和付款历史记录等信息。 您还可以查看和升级您的存储和 GitHub Actions 分钟数。 有关管理计费设置的详细信息，请参阅“[管理 {% data variables.product.prodname_dotcom %} 计费设置](/billing/managing-your-github-billing-settings)”。

只有具有所有者或账单管理员角色的组织成员才能访问或更改组织的计费设置 。 帐单管理员是管理组织的计费设置且不在组织的订阅中使用付费许可证的人员。 有关将账单管理员添加到组织的详细信息，请参阅“[为组织添加帐单管理员](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)”。


## 第 2 部分：添加成员和设置团队
创建组织后，您可以邀请成员并设置权限和角色。 您还可以创建不同级别的团队，并为组织的存储库、项目板和应用程序设置自定义权限级别。

### 1. 管理组织成员
{% data reusables.getting-started.managing-org-members %}

### 2. 组织权限和角色
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. 关于和创建团队
{% data reusables.getting-started.about-and-creating-teams %}
### 4. 管理团队设置
{% data reusables.getting-started.managing-team-settings %}

### 5. 为人员和团队提供对存储库、项目板和应用的访问权限
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## 第 3 部分：管理组织的安全性
通过建议或要求对组织成员进行双重身份验证、配置安全功能以及查看组织的审核日志和集成，可以帮助提高组织的安全性。

### 1. 需要双重身份验证
{% data reusables.getting-started.requiring-2fa %}

### 2. 为组织配置安全功能
{% data reusables.getting-started.configuring-security-features %}

### 3. 查看组织的审核日志和集成
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## 第 4 部分：设置组织级别策略
### 1. 管理组织策略
{% data reusables.getting-started.managing-org-policies %}
### 2. 管理存储库更改
{% data reusables.getting-started.managing-repo-changes %}
### 3. 使用组织级别的社区运行状况文件和审查工具
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## 第 5 部分：自定义和自动化 {% data variables.product.product_name %} 上的工作

{% data reusables.getting-started.customizing-and-automating %}
### 1. 使用 {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. 使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API
{% data reusables.getting-started.api %}

### 3. 生成 {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### 4. 发布和管理 {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## 第 6 部分：参与 {% data variables.product.prodname_dotcom %} 的社区
{% data reusables.getting-started.participating-in-community %}
### 1. 参与开源项目
{% data reusables.getting-started.open-source-projects %}

### 2. 与 {% data variables.product.prodname_gcf %} 交互
{% data reusables.support.ask-and-answer-forum %}

### 3. 了解 {% data variables.product.prodname_docs %} 上的 {% data variables.product.prodname_team %}
您可以阅读反映 {% data variables.product.prodname_team %} 可用功能的文档。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)”。

### 4. 通过 {% data variables.product.prodname_learning %} 学习
{% data reusables.getting-started.learning %}

### 5. 支持开源社区
{% data reusables.getting-started.sponsors %}

### 6. 联系 {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}
## 延伸阅读

- [开始使用 GitHub 帐户](/get-started/onboarding/getting-started-with-your-github-account)
