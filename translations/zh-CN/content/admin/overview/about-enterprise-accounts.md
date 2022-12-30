---
title: 关于企业帐户
intro: '通过 {% data variables.product.product_name %}，可以使用企业帐户以{% ifversion ghec %}在组织间进行合作，同时为管理员提供{% elsif ghes or ghae %}提供{% endif %}单一查看和管理点。'
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127625'
---
## 关于 {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %} 上的企业帐户

{% ifversion ghec %}

您在 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户允许您管理多个组织。 你的企业帐户必须有操作点，如 {% data variables.product.prodname_dotcom %} 上的组织或用户帐户。

{% elsif ghes or ghae %}

使用 {% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上的企业帐户，可管理{% ifversion ghes %}{% data variables.product.prodname_ghe_server %} 实例{% elsif ghae %}企业{% endif %}{% ifversion ghes %}中{% elsif ghae %}拥有{% endif %}的组织。

{% endif %}

组织是共享帐户，供多个项目的企业成员同时协作之用。 组织所有者可通过复杂的安全和管理功能管理对组织的数据和项目的访问。 有关详细信息，请参阅[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)。

{% ifversion ghec %}在企业设置中，企业所有者可以邀请现有组织加入企业帐户、在企业帐户之间转移组织或创建新组织。 有关详细信息，请参阅[将组织添加到企业](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)。
{% endif %}

企业帐户允许你为企业拥有的所有组织管理和实施策略。 {% data reusables.enterprise.about-policies %} 有关详细信息，请参阅“[关于企业策略](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”。

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} 有关详细信息，请参阅“[创建企业帐户](/admin/overview/creating-an-enterprise-account)”。

{% endif %}

## 关于企业帐户的管理

{% ifversion ghes or ghae %}

从 {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %} {% data variables.product.prodname_ghe_server %} 实例{% endif %}上的企业帐户中，管理员可以查看{% ifversion remove-enterprise-members %}和管理{% endif %}企业成员资格{% ifversion enterprise-owner-join-org %}，管理自己在企业拥有的组织中的成员身份，{% endif %}以及管理 {% data variables.product.prodname_ghe_managed %}{% endif %} 上企业 {% elsif ghae %}{% ifversion ghes %}{% data variables.product.prodname_ghe_server %} 实例的以下内容。

{% ifversion ghes %}
- 许可证使用情况{% endif %}
- 安全性（{% ifversion ghae %}单点登录、IP 允许列表、 {% endif %}SSH 认证机构、双重身份验证）
- 企业帐户拥有的组织的企业策略

{% endif %}

{% ifversion ghes %}

### 关于您在 {% data variables.product.prodname_ghe_cloud %}上的企业帐户管理

{% endif %}

{% ifversion ghec or ghes %}在尝试或购买 {% data variables.product.prodname_enterprise %} 时，您{% ifversion ghes %}也{% endif %}可以在 {% data variables.product.prodname_dotcom_the_website %} 上为 {% data variables.product.prodname_ghe_cloud %} 创建企业帐户。 {% data variables.product.prodname_dotcom_the_website %} 上企业帐户的管理员可以查看{% ifversion remove-enterprise-members %}和管理{% endif %}企业成员资格{% ifversion enterprise-owner-join-org %}，管理自己在企业拥有的组织中的成员身份，{% endif %}以及管理 {% data variables.product.prodname_dotcom_the_website %}{% endif %} 上企业帐户{% ifversion ghes %}的以下内容。

- 计费和使用（{% data variables.product.prodname_dotcom_the_website %} 上的服务、{% data variables.product.prodname_GH_advanced_security %}、用户许可证）
- 安全性（单点登录、IP 允许列表、 SSH 认证机构、双重身份验证）
- 企业帐户拥有的组织的企业策略

如果您同时使用 {% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_ghe_server %}，也可以从您在 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户管理 {% data variables.product.prodname_ghe_server %} 的以下各项。

- {% data variables.product.prodname_ghe_server %} 实例的计费和使用
- 与 {% data variables.contact.enterprise_support %} 共享请求和支持包

也可以将 {% data variables.location.product_location_enterprise %} 上的企业帐户连接到 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户，以在 {% data variables.product.prodname_dotcom_the_website %} 中查看 {% data variables.product.prodname_enterprise %} 订阅的许可证使用详情。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的{% ifversion ghec %}“[在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间同步许可证使用情况](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。{% elsif ghes %}“[在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间同步许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。{% endif %}

有关 {% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_ghe_server %} 之间的差异的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/get-started/learning-about-github/githubs-products)”。 {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## 关于企业帐户的计费

企业帐户的帐单包括企业每个成员的每月费用。 帐单包括 {% ifversion ghec %}在企业帐户以外的组织中的任何付费许可、对 {% data variables.product.prodname_marketplace %} 中应用的订阅、{% endif %}{% ifversion ghec or ghae %}企业的额外付费服务{% ifversion ghec %}，如 {% data variables.large_files.product_name_long %} 的数据包，{% endif %} 和{% endif %} {% data variables.product.prodname_GH_advanced_security %} 的使用。

{% ifversion ghec %}

有关 {% data variables.product.prodname_ghe_cloud %} 订阅的计费的详细信息，请参阅“[查看企业帐户的订阅和使用情况](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”和“[关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

有关 {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %} 计费的更多信息，请参阅“[关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} 提供两个部署选项。 除了 {% data variables.product.prodname_ghe_cloud %} 之外，您还可以使用 {% data variables.product.prodname_ghe_server %} 在数据中心或受支持的云提供商中托管企业的开发工作。 {% endif %} {% data variables.product.prodname_dotcom_the_website %} 上的企业所有者可以使用企业帐户来管理 {% data variables.product.prodname_ghe_server %} 实例的付款和许可。 有关详细信息，请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products#github-enterprise)”和“[管理 {% data variables.product.prodname_enterprise %} 的许可证](/billing/managing-your-license-for-github-enterprise)”。

{% endif %}

## 延伸阅读

- GraphQL API 文档中的“[企业帐户](/graphql/guides/managing-enterprise-accounts)”
