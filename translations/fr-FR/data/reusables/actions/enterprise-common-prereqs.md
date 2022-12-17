---
ms.openlocfilehash: 9c9f3713944a20dcdac639249d10c0ab8a4f7baf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103866"
---
* Passez en revue les exigences matérielles relatives à {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations) ».
* TLS doit être configuré pour le domaine de {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Configuration du protocole TLS](/admin/configuration/configuring-tls) ».

  {% note %}
  
  **Remarque :** {% data reusables.actions.enterprise-self-signed-cert %}

  {% endnote %}
* {% data reusables.actions.enterprise-http-proxy %}
