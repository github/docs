---
ms.openlocfilehash: 7de065c9dec15e3b92cabf5d3fa711c7d88249ba
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882791"
---
- [Requisitos mínimos](#minimum-requirements)
- [Storage](#storage)
- [CPU y memoria](#cpu-and-memory)

### Requisitos mínimos

Le recomendamos usar otras configuraciones de hardware en función de la cantidad de licencias de usuario que tenga para {% data variables.product.product_location %}. Si aprovisionaste más recursos que los de los requisitos mínimos, tu instancia funcionrá y escalará mejor.

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Storage

Recomendamos un SSD de alto rendimiento con operaciones de altas de entrada/salida por segundo (IOPS) y latencia baja para {% data variables.product.prodname_ghe_server %}. Las cargas de trabajo son intensivas para las I/O. Si utilizas un hipervisor de metal puro, te recomendamos adjuntar directamente el disco o utilizar un disco de una red de área de almacenamiento (SAN).

Tu instancia requiere un disco de datos persistentes independiente del disco raíz. Para más información, vea "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)".

{% ifversion ghes %}

Para configurar las {% data variables.product.prodname_actions %}, debes proporcionar un almacenamiento de blobs externos. Para más información, vea "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)".

{% endif %}

El espacio disponible en el sistema de archivos raíz será de 50% del tamaño total en disco. Puedes redimensionar el disco raíz de tu instancia si creas una instancia nueva o si utilizas una instancia existente. Para más información, vea "[Información general del sistema](/enterprise/admin/guides/installation/system-overview#storage-architecture)" y "[Aumento de la capacidad de almacenamiento](/enterprise/admin/guides/installation/increasing-storage-capacity)".

### CPU y memoria

Los recursos de memoria y CPU que {% data variables.product.prodname_ghe_server %} requiere dependen de los niveles de actividad para los usuarios, automatizaciones e integraciones.

{% ifversion ghes %}

Si planeas habilitar las {% data variables.product.prodname_actions %} para los usuarios de tu instancia de {% data variables.product.prodname_ghe_server %}, podrías necesitar aprovisionar recursos de memoria y CPU adicionales para esta. Para más información, vea "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Advertencia:** Es recomendable que los usuarios configuren eventos de webhook para notificar a los sistemas externos la actividad en {% data variables.product.prodname_ghe_server %}. Las comprobaciones automáticas de cambios, o _sondeo_, tendrán un impacto negativo en el rendimiento y la escalabilidad de la instancia. Para más información, vea "[Acerca de los webhooks](/github/extending-github/about-webhooks)".

{% endwarning %}

Para más información sobre la supervisión de la capacidad y el rendimiento de {% data variables.product.prodname_ghe_server %}, vea "[Supervisión del dispositivo](/admin/enterprise-management/monitoring-your-appliance)".

Puedes incrementar los recursos de memoria o de CPU para tu instancia. Para más información, vea "[Aumento de los recursos de CPU o memoria](/enterprise/admin/installation/increasing-cpu-or-memory-resources)".
