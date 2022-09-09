---
ms.openlocfilehash: 3bc47303cbc18b4d40a76fd12e6f692990f66c54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113786"
---
{% ifversion ghes %}De forma predeterminada, las solicitudes de usuario a servidor{% else %}Usuario a servidor{% endif %} se limitan a {% ifversion ghae %}15 000{% elsif fpt or ghec or ghes %}5000{% endif %} por hora y por usuario autenticado. Todas las solicitudes de las aplicaciones de OAuth autorizadas por un usuario o un token de acceso personal propiedad del usuario, y las solicitudes autenticadas con cualquiera de las credenciales de autenticación del usuario, comparten la misma cuota de {% ifversion ghae %}15 000{% elsif fpt or ghec or ghes %}5000{% endif %} solicitudes por hora para ese usuario.
