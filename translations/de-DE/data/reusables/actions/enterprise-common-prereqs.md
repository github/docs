---
ms.openlocfilehash: 9c9f3713944a20dcdac639249d10c0ab8a4f7baf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103867"
---
* Überprüfe die Hardwareanforderungen für {% data variables.product.prodname_actions %}. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations).
* TLS muss für die {% data variables.product.product_location %}-Domäne konfiguriert werden. Weitere Informationen findest du unter [Konfigurieren von TLS](/admin/configuration/configuring-tls).

  {% note %}
  
  **Hinweis**: {% data reusables.actions.enterprise-self-signed-cert %}

  {% endnote %}
* {% data reusables.actions.enterprise-http-proxy %}
