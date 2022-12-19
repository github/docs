---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108741"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} Un exécuteur auto-hébergé est automatiquement supprimé de {% data variables.product.product_name %} s’il n’a pas été connecté à {% data variables.product.prodname_actions %} pendant plus de 14 jours.  
Un exécuteur auto-hébergé éphémère est automatiquement supprimé de {% data variables.product.product_name %} s’il n’a pas été connecté à {% data variables.product.prodname_actions %} depuis plus de 1 jour.  
{%- elsif ghae or ghes < 3.7 %} Un exécuteur auto-hébergé est automatiquement supprimé de {% data variables.product.product_name %} s’il n’a pas été connecté à {% data variables.product.prodname_actions %} pendant plus de 30 jours.  
{%- endif %}
