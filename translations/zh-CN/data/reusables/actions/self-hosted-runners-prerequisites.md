---
ms.openlocfilehash: 902c07f73a0d523e80d620ad6eef94e25f678add
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087259"
---
{%- ifversion ghes %}
- 必须为 {% data variables.product.product_name %} 启用 {% data variables.product.prodname_actions %}。 站点管理员可以为实例启用和配置 {% data variables.product.prodname_actions %}。 有关更多信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)”。
{%- endif %}

- 必须有权访问将在环境中用作自承载运行器的计算机。

- {% data reusables.actions.self-hosted-runner-ports-protocols %} 有关详细信息，请参阅“[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-ae)”。
