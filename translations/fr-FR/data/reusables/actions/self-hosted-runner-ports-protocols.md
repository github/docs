---
ms.openlocfilehash: 51b563029cedae82f02da31a5d6473274efb8218
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145086225"
---
{% ifversion ghes or ghae %} La connexion entre exécuteurs auto-hébergés et {% data variables.product.product_name %} passe via {% ifversion ghes %}HTTP (port 80) ou {% endif %}HTTPS (port 443). {% ifversion ghes %} Pour garantir la connectivité via HTTPS, configurez le protocole TLS pour {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Configuration du protocole TLS](/admin/configuration/configuring-network-settings/configuring-tls) ».{% endif %} {% endif %}
