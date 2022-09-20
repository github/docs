---
title: 配置自定义页脚
intro: '通过向 {% data variables.product.product_name %} 添加自定义页脚，用户可以方便地访问企业特定的链接。'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: issue-5487
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
ms.openlocfilehash: d051e2399841e90291de62e496c534520465235a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100068'
---
企业所有者可以将 {% data variables.product.product_name %} 配置为显示最多包含五个附加链接的自定义页脚。

![自定义页脚](/assets/images/enterprise/custom-footer/octodemo-footer.png)

{% ifversion ghes or ghae %}对所有用户在所有 {% data variables.product.product_name %} 页面上{% elsif ghec %}对所有企业成员和协作者在属于企业的存储库和组织的所有存储库和组织页面上{% endif %}，自定义页脚显示在 {% data variables.product.prodname_dotcom %} 页脚上方。

## 为企业配置自定义页脚

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}

1. 在“设置”下，单击“配置文件”。
{%- ifversion ghec %} ![企业配置文件设置](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png) {%- else %} ![企业配置文件设置](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png) {%- endif %}

1. 在“配置文件”部分的顶部，单击“自定义页脚”。
![自定义页脚部分](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. 在显示的字段中最多添加五个链接。
![添加页脚链接](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. 单击“更新自定义页脚”以保存内容并显示自定义页脚。
![更新自定义页脚](/assets/images/enterprise/custom-footer/update-custom-footer.png)
