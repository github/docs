---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879707"
---
Una ejecución de flujo de trabajo se compone de uno o varios `jobs`, que se ejecutan en paralelo de forma predeterminada. Para ejecutar trabajos de manera secuencial, puede definir dependencias en otros trabajos mediante la palabra clave `jobs.<job_id>.needs`.

Cada trabajo se ejecuta en un entorno de ejecutor especificado por `runs-on`.

Puedes ejecutar una cantidad ilimitada de trabajos siempre que estés dentro de los límites de uso del flujo de trabajo. Para más información, vea {% ifversion fpt or ghec or ghes %}"[Límites de uso y facturación](/actions/reference/usage-limits-billing-and-administration)" para ejecutores hospedados en {% data variables.product.prodname_dotcom %} y {% endif %}"[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para los límites de uso del ejecutor autohospedado.{% elsif ghae %}".{% endif %}

Si necesitas encontrar el identificador único de un job que se ejecuta en una ejecución de flujo de trabajo, puedes utilizar la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Para más información, vea "[Trabajos de flujo de trabajo](/rest/reference/actions#workflow-jobs)".
