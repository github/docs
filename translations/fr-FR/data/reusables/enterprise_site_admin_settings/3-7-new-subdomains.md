---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193373"
---
{% ifversion ghes = 3.5 or ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.5 or ghes = 3.6 %}

**Remarque** : Le sous-domaine `http(s)://render.HOSTNAME` est déprécié dans {% data variables.product.product_name %} 3.7 et ultérieur. Après être passé à la version 3.7 ou ultérieure, assurez-vous que votre certificat TLS couvre les sous-domaines des services de remplacement `http(s)://notebook.HOSTNAME` et `http(s)://viewscreen.HOSTNAME`.

{%- elsif ghes = 3.7 or ghes = 3.8 %}

**Remarque** : Les sous-domaines `http(s)://notebook.HOSTNAME` ou `http(s)://viewscreen.HOSTNAME` sont nouveaux dans {% data variables.product.product_name %} 3.7 et ultérieur, et remplacent `http(s)://render.HOSTNAME`. Après être passé à la version 3.7 ou ultérieure, votre certificat TLS doit couvrir le sous-domaine des services de remplacement `http(s)://notebook.HOSTNAME` et `http(s)://viewscreen.HOSTNAME`.

{%- endif %}

{% endnote %}

{% endif %}
