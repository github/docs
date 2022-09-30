---
ms.openlocfilehash: e63c220aff35a6efc7b2b2e2738b2b7645386d43
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145065856"
---
{% ifversion fpt %}
1. 导航到已注册自托管运行器的组织的主页。
2. 单击“{% octicon "gear" aria-label="The Settings gear" %} 设置”。
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. 导航到自托管运行器注册的位置：
   * 在组织中：导航到主页并单击“{% octicon "gear" aria-label="The Settings gear" %} 设置” 。
   * 如果使用的是企业级运行器：

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. 导航到 {% data variables.product.prodname_actions %} 设置：
   * 在组织中： 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * 如果使用的是企业级运行器： 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
