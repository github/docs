---
title: Migración de tu empresa al registro del contenedor desde el registro de Docker
intro: 'Puedes migrar imágenes de Docker almacenadas anteriormente en el registro de Docker en {% data variables.location.product_location %} al {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106385'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Acerca del {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Para obtener más información, consulta "[Trabajar con el {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

Para obtener más información sobre cómo habilitar y configurar {% data variables.product.prodname_registry %} para {% data variables.location.product_location %}, consulta "[Introducción a {% data variables.product.prodname_registry %} para tu empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".

## Acerca de la migración desde el registro de Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Si el registro de Docker en {% data variables.location.product_location %} contiene imágenes, debes migrar manualmente las imágenes al {% data variables.product.prodname_container_registry %}.

{% ifversion ghes %}

{% note %}

**Nota**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} Para obtener más información sobre el impacto de la migración al {% data variables.product.prodname_container_registry %}, consulta "[Migración al {% data variables.product.prodname_container_registry %} desde el registro de Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry)".

## Migración de organizaciones al {% data variables.product.prodname_container_registry %}

Puedes iniciar una migración de todas las imágenes de Docker de las organizaciones al {% data variables.product.prodname_container_registry %}. La duración de la operación de migración depende del número total de imágenes que se van a migrar y de la carga total de {% ifversion ghes %}tu instancia{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Después de una migración correcta, el {% data variables.product.product_name %} mostrará un resumen y todas las cargas futuras de imágenes de Docker usarán el {% data variables.product.prodname_container_registry %}.

Si {% ifversion ghes %}el administrador de un sitio{% elsif ghae %}el propietario de una empresa{% endif %} ha configurado notificaciones por correo electrónico para {% data variables.location.product_location %}, recibirás un correo electrónico una vez completada la migración. Para más información, vea "[Configuración del correo electrónico para notificaciones](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)".

{% note %}

**{% ifversion ghes %}Notas{% elsif ghae %}Nota{% endif %}** :

{%- ifversion ghes %}
- Durante la migración, aumentará el uso de CPU y memoria de la instancia. Para garantizar el rendimiento de la instancia para tus usuarios, {% data variables.product.company_short %} recomienda iniciar una migración durante un período de actividad reducida.
{%- endif %} {% ifversion ghes %}- {% endif %}Durante la migración, no debes modificar la configuración de la empresa{% ifversion ghes %} o ejecutar `ghe-config-apply` desde una sesión SSH administrativa{% endif %}. {% ifversion ghes %}Estas acciones desencadenarán una ejecución de configuración, que puede reiniciar los servicios y {% elsif ghae %}La modificación de esta configuración {% endif %} puede interrumpir la migración.
{%- ifversion ghes %}
- Después de la migración, la presión de almacenamiento en la instancia aumentará debido a la duplicación de archivos de imagen en el registro de Docker y el {% data variables.product.prodname_container_registry %}. En una versión futura de {% data variables.product.product_name %} se eliminarán los archivos duplicados cuando se completen todas las migraciones.

Para obtener más información sobre cómo supervisar el rendimiento y el almacenamiento de {% data variables.location.product_location %}, consulta "[Acceso al panel de supervisión](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)".
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral de la izquierda, haga clic en **Packages**.
1. A la derecha del número de paquetes que se van a migrar, haz clic en **Start migration** (Iniciar migración). Durante la migración, {% data variables.product.product_name %} mostrará el progreso en esta página.

Una vez completada la migración, la página mostrará los resultados. Si se produce un error en una migración, la página mostrará las organizaciones que poseen el paquete que provocó el error.

## Volver a ejecutar una migración de organización con errores

Antes de la migración, si un usuario ha creado un paquete en el {% data variables.product.prodname_container_registry %} que tiene un nombre idéntico a un paquete existente en el registro de Docker, se producirá un error en la migración.

1. Elimina el contenedor afectado en el {% data variables.product.prodname_container_registry %}. Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github)".
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. A la derecha del número de paquetes que se van a migrar, haz clic en **Re-run migration** (Volver a ejecutar migración). Durante la migración, {% data variables.product.product_name %} mostrará el progreso en esta página.
1. Si de nuevo se produce un error en la migración, comienza en el paso 1 y vuelve a ejecutar la migración.
