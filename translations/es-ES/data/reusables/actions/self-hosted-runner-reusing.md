---
ms.openlocfilehash: a92a36101675ea033048f97465a87571b23ee9ef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093087"
---
Como alternativa, si no tiene acceso al repositorio{% ifversion fpt %} u organización{% elsif ghes or ghec or ghae %}, organización o empresa{% endif %} de {% data variables.product.product_name %} para eliminar un ejecutor, pero le gustaría volver a utilizar la máquina de ejecutor, puedes borra el archivo `.runner` dentro del directorio de la aplicación de ejecutor autohospedado. Esto permite que el ejecutor se registre sin tener que volver a descargar la aplicación del ejecutor auto-hospedado.
