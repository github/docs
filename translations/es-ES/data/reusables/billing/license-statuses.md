---
ms.openlocfilehash: 7604b9a565888d01aee7eac1643ddf4652a54ed9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113610"
---
{% ifversion ghec %} Si la licencia incluye datos {% data variables.product.prodname_vss_ghe %}, puede identificar si una cuenta de usuario de {% data variables.product.prodname_dotcom_the_website %} ha coincidido correctamente con un suscriptor de {% data variables.product.prodname_vs %} mediante la descarga del archivo CSV que contiene detalles de licencia adicionales. El estado de la licencia será uno de los siguientes.
- "Coincidente": la cuenta de usuario de {% data variables.product.prodname_dotcom_the_website %} está vinculada con un suscriptor de {% data variables.product.prodname_vs %}.
- "Invitación pendiente": se ha enviado una invitación a un suscriptor de {% data variables.product.prodname_vs %}, pero el suscriptor no ha aceptado la invitación. 
- En blanco: no hay ninguna asociación de {% data variables.product.prodname_vs %} que considerar para la cuenta de usuario en {% data variables.product.prodname_dotcom_the_website %}.
{% endif %}
