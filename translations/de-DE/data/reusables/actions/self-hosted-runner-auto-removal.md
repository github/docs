---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109743"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} Ein selbstgehosteter Runner wird automatisch aus {% data variables.product.product_name %} entfernt, wenn er sich länger als 14 Tage nicht mehr mit {% data variables.product.prodname_actions %} verbunden hat.  
Ein kurzlebiger selbstgehosteter Runner wird automatisch aus {% data variables.product.product_name %} entfernt, wenn er sich länger als 1 Tag nicht mehr mit {% data variables.product.prodname_actions %} verbunden hat.  
{%- elsif ghae or ghes < 3.7 %} Ein selbstgehosteter Runnerwird automatisch aus {% data variables.product.product_name %} entfernt, wenn er sich länger als 30 Tage nicht mehr mit {% data variables.product.prodname_actions %} verbunden hat.  
{%- endif %}
