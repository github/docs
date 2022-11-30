---
title: Requisitos de actualización
intro: 'Antes de actualizar el {% data variables.product.prodname_ghe_server %}, revisa estas recomendaciones y requisitos para planificar tu estrategia de actualización.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: 23ac63dd30c11f4c29cd17313a583579d2e2cea1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106881'
---
{% note %}

**Notas:**
- Los paquetes de actualización están disponibles en [enterprise.github.com](https://enterprise.github.com/releases) para las versiones compatibles. Verifica la disponibilidad de los paquetes de actualización, deberás completar la actualización. Si un paquete no está disponible, contacta a {% data variables.contact.contact_ent_support %} para obtener ayuda.
- Si usa agrupación en clústeres de {% data variables.product.prodname_ghe_server %}, vea "[Actualización de un clúster](/enterprise/admin/guides/clustering/upgrading-a-cluster/)" en la Guía de agrupación en clústeres de {% data variables.product.prodname_ghe_server %} a fin de obtener instrucciones específicas exclusivas para la agrupación en clústeres.
- Estas notas de lanzamiento para el {% data variables.product.prodname_ghe_server %} brindan una lista detallada de las nuevas características de cada versión del {% data variables.product.prodname_ghe_server %}. Para más información, vea la [página de versiones](https://enterprise.github.com/releases).

{% endnote %}

## Recomendaciones

- Incluye tantas nuevas actualizaciones como sea posible en tu proceso de actualización. Por ejemplo, en lugar de actualizar desde {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} a {{ enterpriseServerReleases.supported[1] }} a {{ enterpriseServerReleases.latest }}, podrías actualizar desde {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} a {{ enterpriseServerReleases.latest }}. Use el [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para buscar la ruta de actualización de la versión actual.
- Si estás varias versiones por detrás, actualiza {% data variables.location.product_location %} tanto como sea posible con cada paso del proceso de actualización. Utilizar la versión más reciente posible en cada actualización te permite aprovechar las mejoras de desempeño y las correcciones de errores. Por ejemplo, podrías actualizar desde {% data variables.product.prodname_enterprise %} 2.7 a 2.8 a 2.10, pero actualizar desde {% data variables.product.prodname_enterprise %} 2.7 a 2.9 a 2.10 utiliza una versión posterior en el segundo paso.
- Utiliza el lanzamiento de patch más reciente cuando actualices. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- Utiliza una instancia de preparación para probar los pasos de actualización. Para más información, vea "[Configuración de una instancia de almacenamiento provisional](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)".
- Cuando ejecutas varias mejoras, espera por lo menos 24 horas entre las mejoras a las características para permitir que se completen totalmente las migraciones de datos y actualizaciones de las tareas que se ejecutan en segundo plano.
- Toma una captura de pantalla antes de que mejores tu máquina virtual. Para más información, vea "[Realización de una instantánea](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot)". 
- Asegúrate de que tienes un respaldo reciente y exitoso de tu instancia. Para más información, vea [Archivo README.md de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Requisitos

- Debe actualizar desde una versión de actualización de características que esté **como máximo** dos versiones por detrás. Por ejemplo, para actualizar a {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }}, debes estar en {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} o {{ enterpriseServerReleases.supported[2] }}.
- Cuando hagas una mejora mediante un paquete de mejora, programa una ventana de mantenimiento para los usuarios finales de {% data variables.product.prodname_ghe_server %}.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- Es posible que un hotpatch requiera tiempo de inactividad si los servicios afectados (como kernel, MySQL, o Elasticsearch) requieren un reinicio de VM o un reinicio del servicio. Se te notificará cuando se necesite reiniciar. Puedes completar el reinicio más tarde.
- Es necesario que haya un almacenamiento raíz adicional disponible cuando se actualiza a través de un hotpatch, ya que instala múltiples versiones de determinados servicios hasta que se completa la actualización. El control de prevuelo te notificará si no tienes suficiente almacenamiento de disco raíz.
- Cuando se actualiza a través de un hotpatch, tu instancia no puede estar muy cargada, ya que puede impactar el proceso del hotpatch.
- Actualizar a {% data variables.product.prodname_ghe_server %} 2.17 migra tus registros de auditoría desde Elasticsearch a MySQL. Esta migración también incrementa la cantidad de tiempo y el espacio en disco que lleva restaurar una instantánea. Antes de migrar, controla el número de bytes en tus índices de registro de auditoría de ElasticSearch con este comando:
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
Utiliza el número para estimar la cantidad de espacio de disco que los registros de auditoría de MySQL necesitarán. El script también controla tu espacio libre en disco mientras la importación está en progreso. Controlar este número es especialmente útil si tu espacio libre en disco está cerca de la cantidad de espacio en disco necesaria para la migración.

## Pasos siguientes

Después de revisar estas recomendaciones y requisitos, puedes actualizar el {% data variables.product.prodname_ghe_server %}. Para más información, vea "[Actualización de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".
