---
title: 为企业生成运行状况检查
intro: '可通过生成运行状况检查来深入了解 {% data variables.product.product_location %} 的一般运行状况与 Git 和 API 请求。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
ms.openlocfilehash: f02fc61f050fc01a69f9fafe2dcdc95d91322dfa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146460015'
---
{% note %}

**注意：** 为 {% data variables.product.prodname_ghe_server %} 生成运行状况检查目前处于测试阶段，可能会发生更改。

{% endnote %}

## 关于生成的运行状况检查

可以为包含大量数据（例如诊断和日志文件）的 {% data variables.product.product_location %} 创建支持捆绑包。 为了帮助分析和解释这些数据，可以生成运行状况检查。 有关支持捆绑包的详细信息，请参阅“[向 {% data variables.contact.github_support %} 提供数据](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”。

运行状况检查提供有关 {% data variables.product.product_location %} 的以下信息。
- 针对 {% data variables.product.product_location %} 一般运行状况的见解，例如升级状态、存储和许可证席位消耗
- 重点关注子域隔离和用户身份验证的安全部分
- Git 请求分析，包括有关最繁忙的存储库和 Git 用户的详细信息 
- API 请求分析，包括最繁忙的时间、最频繁请求的终结点和最活跃的调用方

如果要为 {% data variables.product.prodname_ghe_cloud %} 生成运行状况检查，请联系 {% data variables.contact.github_support %}。 有关详细信息，请参阅“[创建支持工单](/support/contacting-github-support/creating-a-support-ticket)”。

## 生成运行状况检查

在生成运行状况检查之前，你必须创建一个支持捆绑包。 有关详细信息，请参阅“[向 {% data variables.contact.github_support %} 提供数据](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”。

1. 导航到 [{% data variables.contact.support_portal %}](https://support.github.com/)。
2. 在页面的右上角，单击“高级”。

   ![GitHub 支持门户标题中“高级”链接的屏幕截图。](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. 在“运行状况检查”的右侧，单击“请求运行状况检查” 。

   ![“请求运行状况检查”按钮的屏幕截图。](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. 在“选择企业帐户”下，选择下拉菜单并单击企业帐户。

   ![“企业帐户”下拉菜单的屏幕截图。](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. 在“上传支持捆绑包”下，单击“选择文件”并选择要上传的文件。 然后，单击“请求运行状况检查”。

   ![“选择文件”和“请求运行状况检查”按钮的屏幕截图。](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

请求运行状况检查后，系统会计划一个作业来生成运行状况检查。 数小时到一天后，生成的运行状况检查将显示在 {% data variables.contact.support_portal %} 的“运行状况检查”部分中。

![{% data variables.contact.support_portal %} 的“运行状况检查”部分的屏幕截图。](/assets/images/enterprise/support/support-portal-health-checks-section.png)
