---
ms.openlocfilehash: 9c9f3713944a20dcdac639249d10c0ab8a4f7baf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094434"
---
* Revisar os requisitos de hardware para {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".
* O TLS deve ser configurado para o domínio de {% data variables.product.product_location %}. Para obter mais informações, confira "[Como configurar o TLS](/admin/configuration/configuring-tls)".

  {% note %}
  
  **Observação:** {% data reusables.actions.enterprise-self-signed-cert %}

  {% endnote %}
* {% data reusables.actions.enterprise-http-proxy %}
