---
ms.openlocfilehash: 9c9f3713944a20dcdac639249d10c0ab8a4f7baf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098528"
---
* 查看 {% data variables.product.prodname_actions %} 的硬件要求。 有关详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”。
* 必须为 {% data variables.product.product_location %} 的域配置 TLS。 有关详细信息，请参阅“[配置 TLS](/admin/configuration/configuring-tls)”。

  {% note %}
  
  **注意：** {% data reusables.actions.enterprise-self-signed-cert %}

  {% endnote %}
* {% data reusables.actions.enterprise-http-proxy %}
