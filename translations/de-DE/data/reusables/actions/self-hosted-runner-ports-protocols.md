---
ms.openlocfilehash: 51b563029cedae82f02da31a5d6473274efb8218
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089124"
---
{% ifversion ghes or ghae %} Die Verbindung zwischen selbstgehosteten Runnern und {% data variables.product.product_name %} verläuft über {% ifversion ghes %}HTTP (Port 80) oder {% endif %}HTTPS (Port 443). {% ifversion ghes %} Um die Konnektivität über HTTPS sicherzustellen, konfiguriere TLS für {% data variables.product.product_location %}. Weitere Informationen findest du unter [Konfigurieren von TLS](/admin/configuration/configuring-network-settings/configuring-tls).{% endif %} {% endif %}
