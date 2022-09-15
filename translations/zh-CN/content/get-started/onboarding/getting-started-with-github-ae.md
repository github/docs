---
title: 开始使用 GitHub AE
intro: '开始为 {% data variables.product.product_location %} 设置和配置 {% data variables.product.product_name %}。'
versions:
  ghae: '*'
ms.openlocfilehash: e83b868b6cd204b7a96f40b7287c017eec90096f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147389969'
---
本指南将引导您作为企业所有者在 {% data variables.product.product_name %} 上完成 {% data variables.product.product_location %} 的设置、配置和管理。 若要了解 {% data variables.product.product_name %} 相关详细信息，请参阅“[关于 {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)。”

## 第 1 部分：设置 {% data variables.product.product_name %}
要开始使用 {% data variables.product.product_name %}，可以创建企业帐户、初始化 {% data variables.product.product_name %}、配置 IP 允许列表、配置用户身份验证和预配以及管理 {% data variables.product.product_location %} 的计费。

### 1. 创建你的 {% data variables.product.product_name %} 企业帐户
您首先需要购买 {% data variables.product.product_name %}。 有关详细信息，请联系 [{% data variables.product.prodname_dotcom %} 的销售团队](https://enterprise.github.com/contact)。

{% data reusables.github-ae.initialize-enterprise %}

### 2. 初始化 {% data variables.product.product_name %}
当 {% data variables.product.company_short %} 在 {% data variables.product.product_name %} 上为 {% data variables.product.product_location %} 创建所有者帐户后，您将收到一封电子邮件，要求您登录并完成初始化。 在初始化期间，作为企业所有者，您将命名 {% data variables.product.product_location %}、配置 SAML SSO、为 {% data variables.product.product_location %} 中的所有组织创建策略，并为企业成员配置支持联系人。 有关详细信息，请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae)”。

### 3. 限制网络流量
您可以为特定 IP 地址配置允许列表，以限制对企业帐户中组织拥有的资产的访问。 有关详细信息，请参阅“[限制到企业的网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)”。

### 4. 管理 {% data variables.product.product_location %} 的标识和访问
您可以使用 SAML 单点登录 (SSO) 进行用户身份验证和跨域身份管理系统 (SCIM) 从身份提供商 (IdP) 集中管理对 {% data variables.product.product_name %} 上 {% data variables.product.product_location %} 的访问。 在配置预配后，您可以从 IdP 分配用户给应用程序或取消分配，从而在企业中创建或禁用用户帐户。 有关详细信息，请参阅“[关于企业标识和访问管理](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)”。

### 5. 管理 {% data variables.product.product_location %} 的计费
{% data variables.product.product_name %} 上 {% data variables.product.product_location %} 订阅的所有者可以在 Azure 门户中查看 {% data variables.product.product_name %} 的计费详细信息。 有关详细信息，请参阅“[管理企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。

## 第 2 部分：组织和管理企业成员
作为 {% data variables.product.product_name %} 的企业所有者，您可以管理用户、存储库、团队和组织级别的设置。 您可以管理 {% data variables.product.product_location %} 的成员，创建和管理组织，设置存储库管理策略，以及创建和管理团队。

### 1. 管理 {% data variables.product.product_location %} 的成员
{% data reusables.getting-started.managing-enterprise-members %}

### 2. 创建组织
{% data reusables.getting-started.creating-organizations %}

### 3. 向组织添加成员
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. 创建团队
{% data reusables.getting-started.creating-teams %}

### 5. 设置组织和存储库权限级别
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. 实施存储库管理策略
{% data reusables.getting-started.enforcing-repo-management-policies %}

## 第 3 部分：安全构建
要提高 {% data variables.product.product_location %} 的安全性，您可以监控 {% data variables.product.product_location %}，并为组织配置安全性和分析功能。

### 1. 监视 {% data variables.product.product_location %}
您可以使用活动仪表板和审核日志记录监控 {% data variables.product.product_location %}。 有关详细信息，请参阅“[监视企业中的活动](/admin/monitoring-activity-in-your-enterprise)”。

### 2. 为组织配置安全功能
{% data reusables.getting-started.configuring-security-features %}

## 第 4 部分：自定义和自动化 {% data variables.product.product_location %} 上的工作
您可以使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API、{% data variables.product.prodname_actions %}和 {% data variables.product.prodname_pages %}{% data variables.product.product_location %} 自定义和自动化组织中的工作。

### 1. 使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API
{% data reusables.getting-started.api %}

### 2. 生成 {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

有关为 {% data variables.product.product_name %} 启用和配置 {% data variables.product.prodname_actions %} 的详细信息，请参阅“[{% data variables.product.prodname_ghe_managed %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)”。

### 3. 使用 {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## 第 5 部分：使用 {% data variables.product.prodname_dotcom %} 的学习和支持资源
您的企业成员可以通过我们的学习资源了解有关 Git 和 {% data variables.product.prodname_dotcom %} 的更多信息，您也可以通过 {% data variables.product.prodname_dotcom %} Enterprise 支持获得所需的支持。

### 1. 在 {% data variables.product.prodname_docs %} 上阅读 {% data variables.product.product_name %}
您可以阅读反映 {% data variables.product.prodname_ghe_managed %} 可用功能的文档。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)”。

### 2. 通过 {% data variables.product.prodname_learning %} 学习
{% data reusables.getting-started.learning-enterprise %}

### 3. 使用 {% data variables.product.prodname_dotcom %} Enterprise 支持
{% data reusables.getting-started.contact-support-enterprise %}
