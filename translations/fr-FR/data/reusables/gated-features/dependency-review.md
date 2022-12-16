---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062972"
---
{%- ifversion fpt %} La révision des dépendances est activée sur les référentiels publics. La révision des dépendances est également disponible dans les référentiels privés appartenant aux organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} et qui disposent d’une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} La révision des dépendances est incluse dans {% data variables.product.product_name %} pour les référentiels publics. Pour utiliser la révision des dépendances dans les référentiels privés appartenant à des organisations, vous devez disposer d’une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %} La révision des dépendances est disponible pour les dépôts appartenant à des organisations dans {% data variables.product.product_name %}. Cette fonctionnalité nécessite une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} La révision des dépendances est disponible pour les référentiels appartenant à des organisations dans {% data variables.product.product_name %}. Il s’agit d’une fonctionnalité de {% data variables.product.prodname_GH_advanced_security %} (gratuite avec la version bêta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
