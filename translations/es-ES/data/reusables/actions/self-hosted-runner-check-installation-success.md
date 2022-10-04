---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069456"
---

### Revisar que tu ejecutor auto-hospedado se haya agregado exitosamente

Después de completar estos pasos para agregar un ejecutor autohospedado, este ejecutor y su estado ahora se muestran en {% ifversion fpt or ghec %}"Runners" (Ejecutores){% elsif ghae or ghes %}"Self-hosted runners" (Ejecutores autohospedados){% endif %}.

La aplicación del ejecutor autoalojado debe estar activa para que el ejecutor acepte trabajos. Cuando la aplicación del ejecutor esté conectada a {% data variables.product.product_name %} y esté lista para recibir trabajos, verá el siguiente mensaje en el terminal de la máquina.

{% data reusables.actions.self-hosted-runner-connected-output %}
