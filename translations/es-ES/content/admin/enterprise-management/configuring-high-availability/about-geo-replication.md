---
title: Acerca de la Replicación geográfica
intro: 'La Replicación geográfica en {% data variables.product.prodname_ghe_server %} utiliza múltiples réplicas activas para responder las solicitudes de los centros de datos distribuidos geográficamente.'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
  - /admin/enterprise-management/about-geo-replication
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
ms.openlocfilehash: d24b222ee411d6e8d06366dd78da6b0001280c4d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109882'
---
Contar con múltiples réplicas puede permitir una menor distancia a la réplica más cercana. Por ejemplo, una organización con oficinas en San Francisco, Nueva York y Londres podrían ejecutar el aparato principal en un centro de datos cercano a Nueva York y dos réplicas en centros de datos cercanos a San Francisco y Londres. Al usar DNS con información de geolocalización, se puede dirigir a los usuarios al servidor disponible más cercano para que accedan a los datos más rápido. Designar como principal el aparato cercano a Nueva York ayuda a reducir la latencia entre los hosts, a diferencia de si se designa como principal el aparato cercano a San Francisco, que tiene mayor latencia con Londres.

Los proxies de la réplica activa solicitan que no se pueda procesar esta misma para la instancia principal. Las réplicas funcionan como un punto de presencia al terminar todas las conexiones SSL. El tráfico entre los servidores se envía a través de una conexión VPN encriptada, similar a una configuración de dos nodos de alta disponibilidad sin replicación geográfica.

Las solicitudes de Git y las solicitudes de archivos específicos a los servidores, tales como LFS y cargas de archivos, pueden servirse directamente de la réplica sin cargar ningún dato desde el primario. Las solicitudes web siempre se enrutan hacia el principal, pero si la réplica está más cerca del usuario, las solicitudes son más rápidas porque la terminación SSL está más cerca.

El DNS geográfico, como el [servicio Route 53 de Amazon](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo), es necesario para que la replicación geográfica funcione sin problemas. El nombre del host para la instancia se debe resolver con la réplica más cercana a la ubicación del usuario.

## Limitaciones

Escribir solicitudes para la réplica exige que se envíen los datos al principal y a todas las réplicas. Esto significa que el rendimiento de todos los escritos se limita de acuerdo con la replica más lenta, aunque las geo-replicas nuevas pueden poblar la mayoría de sus datos desde geo-replicas existentes co-ubicadas, en vez de desde el primario. Para reducir la latencia y el ancho de banda que ocasiona la distribución de equipos y granjas grandes de CI sin afectar a la arquitectura de rendimiento de escritura, una mejor opción consiste en configurar el almacenamiento en caché del repositorio. Para más información, vea "[Acerca del almacenamiento en caché del repositorio](/admin/enterprise-management/caching-repositories/about-repository-caching)".

La replicación geográfica no le agregará capacidad a una instancia de {% data variables.product.prodname_ghe_server %} ni resolverá problemas de rendimiento relacionados con recursos de CPU o de memoria insuficientes. Si el aparato principal está fuera de línea, las réplicas activas no podrán atender ninguna solicitud de lectura o escritura. 

{% data reusables.enterprise_installation.replica-limit %}

## Monitorear la configuración de una replicación geográfica

{% data reusables.enterprise_installation.monitoring-replicas %}

## Información adicional
- "[Creación de réplicas de replicación geográfica](/enterprise/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)"
