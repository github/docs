---
ms.openlocfilehash: 9c9f3713944a20dcdac639249d10c0ab8a4f7baf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114545"
---
* Revisa los requisitos de hardware de las {% data variables.product.prodname_actions %}. Para obtener más información, consulte "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".
* Se debe configurar el TLS para el dominio de {% data variables.product.product_location %}. Para obtener más información, consulte "[Configuración de TLS](/admin/configuration/configuring-tls)".

  {% note %}
  
  **Nota:** {% data reusables.actions.enterprise-self-signed-cert %}

  {% endnote %}
* {% data reusables.actions.enterprise-http-proxy %}
