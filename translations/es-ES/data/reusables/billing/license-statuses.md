---
ms.openlocfilehash: 67d1494a61de0411dec87f78177cd695055e82db
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/31/2022
ms.locfileid: "148120652"
---
{% ifversion ghec %} Si la licencia incluye datos {% data variables.visual_studio.prodname_vss_ghe %}, puedes identificar si una cuenta de usuario de {% data variables.product.prodname_dotcom_the_website %} ha coincidido correctamente con un suscriptor de {% data variables.product.prodname_vs %} mediante la descarga del archivo CSV que contiene detalles de licencia adicionales. El estado de la licencia será uno de los siguientes.
- "Coincidente": la cuenta de usuario de {% data variables.product.prodname_dotcom_the_website %} está vinculada con un suscriptor de {% data variables.product.prodname_vs %}.
- "Invitación pendiente": se ha enviado una invitación a un suscriptor de {% data variables.product.prodname_vs %}, pero el suscriptor no ha aceptado la invitación. 
- En blanco: no hay ninguna asociación de {% data variables.product.prodname_vs %} que considerar para la cuenta de usuario en {% data variables.product.prodname_dotcom_the_website %}.
{% endif %}
