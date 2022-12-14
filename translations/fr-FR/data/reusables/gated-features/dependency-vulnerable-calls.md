---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145102010"
---
{%- ifversion fpt %} La détection des appels vulnérables est activée sur les référentiels publics. Cette analyse est également disponible dans les référentiels privés appartenant aux organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} et qui disposent d’une licence {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} La détection des appels vulnérables est incluse dans {% data variables.product.product_name %} pour les référentiels publics. Pour détecter les appels vulnérables dans des référentiels privés appartenant à des organisations, votre organisation doit disposer d’une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes > 3.5 %} La détection des appels vulnérables est disponible pour les référentiels appartenant à l’organisation dans {% data variables.product.product_name %}. Cette fonctionnalité nécessite une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae-issue-6076 %} La détection des appels vulnérables est disponible pour les référentiels appartenant à l’organisation dans {% data variables.product.product_name %}. Il s’agit d’une fonctionnalité de {% data variables.product.prodname_GH_advanced_security %} (gratuite pendant la version bêta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
