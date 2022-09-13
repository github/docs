---
title: 部署 GitHub AE
intro: '可以将 {% data variables.product.product_name %} 部署到可用的 Azure 区域。'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614365'
---
## 关于部署 {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)”。

购买或开始试用 {% data variables.product.product_name %} 后，可以将 {% data variables.product.product_name %} 部署到可用的 Azure 区域。 本指南将包含 {% data variables.product.product_name %} 部署的 Azure 资源称为 {% data variables.product.product_name %} 帐户。 你将使用位于 [https://portal.azure.com](https://portal.azure.com) 的 Azure 门户部署 {% data variables.product.product_name %} 帐户。

## 先决条件

必须具备在 Azure 中为资源提供程序执行 `/register/action` 操作的权限。 权限包含在 `Contributor` 和 `Owner` 角色中。 有关详细信息，请参阅 Microsoft 文档中的 [Azure 资源提供程序和类型](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider)。

## 使用 {% data variables.actions.azure_portal %} 部署 {% data variables.product.product_name %}

可以通过 {% data variables.actions.azure_portal %} 在 Azure 资源组中部署 {% data variables.product.product_name %} 帐户。

1. 单击以下两个链接之一，开始部署 {% data variables.product.product_name %}。 应单击的链接取决于计划在其中部署 {% data variables.product.product_name %} 的 Azure 云。 有关 Azure 政府的详细信息，请参阅 Microsoft 文档中的[什么是 Azure 政府？](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome)。
   
   - [将 {% data variables.product.product_name %} 部署到 Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [将 {% data variables.product.product_name %} 部署到 Azure 政府](https://aka.ms/create-github-ae-instance-gov)
1. 若要开始添加新的 {% data variables.product.product_name %} 帐户，请单击“创建 GitHub AE 帐户”。
1. 填写“项目详细信息”和“实例详细信息”字段。
    ![{% data variables.actions.azure_portal %} 搜索结果](/assets/images/azure/github-ae-azure-portal-form.png)
    - **帐户名称：** 企业的主机名
    - **管理员用户名：** 将在 {% data variables.product.product_name %} 中创建的初始企业所有者的用户名
    - **管理员电子邮件：** 将接收登录信息的电子邮件地址
1. 若要查看建议更改的摘要，请单击“查看 + 创建”。
1. 验证过程完成后，单击“创建”。

上面输入的电子邮件地址将收到有关如何访问企业的说明。 获得访问权限后，可以按照初始设置步骤开始操作。 有关详细信息，请参阅“[初始化 {% data variables.product.product_name %}](/admin/configuration/initializing-github-ae)”。

{% note %}

**注意：** {% data variables.product.product_name %} 部署的软件更新由 {% data variables.product.prodname_dotcom %} 执行。 有关详细信息，请参阅[“关于升级到新版本”](/admin/overview/about-upgrades-to-new-releases)。

{% endnote %}

## 导航到企业

可以使用 {% data variables.actions.azure_portal %} 导航到 {% data variables.product.product_name %} 部署。 生成的列表包括 Azure 区域中所有的 {% data variables.product.product_name %} 部署。

1. 在 {% data variables.actions.azure_portal %} 的左侧面板中，单击“所有资源”。
1. 在可用筛选器中，单击“所有类型”，然后取消选择“全选”，然后选择 GitHub AE：![{% data variables.actions.azure_portal %} 搜索结果](/assets/images/azure/github-ae-azure-portal-type-filter.png)  

## 后续步骤

- 预配部署后，下一步是初始化 {% data variables.product.product_name %}。 有关详细信息，请参阅“[初始化 {% data variables.product.product_name %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)”。
- 如果要试用 {% data variables.product.product_name %}，则可以在试用期内随时通过联系联系人 {% data variables.contact.contact_enterprise_sales %} 升级到完整许可证。 如果尚未在试用的最后一天升级，则会自动删除部署。 如果需要更多时间来评估 {% data variables.product.product_name %}，请联系 {% data variables.contact.contact_enterprise_sales %} 申请延期。

## 延伸阅读 

- [在 {% data variables.product.product_name %} 上启用 {% data variables.product.prodname_advanced_security %} 功能](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)
- [{% data variables.product.product_name %} 发行说明](/github-ae@latest/admin/overview/github-ae-release-notes) 
