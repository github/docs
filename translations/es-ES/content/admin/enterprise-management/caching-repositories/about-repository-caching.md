---
title: Acerca del almacenamiento de repositorios en caché
intro: Puedes incrementar el rendimiento de las operaciones de lectura de Git para los equipos distribuidos y las granjas de IC con el almacenamiento de repositorios en caché.
versions:
  ghes: '>=3.3'
type: overview
topics:
  - Enterprise
ms.openlocfilehash: 06a0dd3ba202c73f1ee035d61f7865fadd13b415
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120642'
---
{% data reusables.enterprise.repository-caching-release-phase %}

Si tienes equipos y granjas de IC que se ubiquen en todo el mundo, puedes experimentar un rendimiento reducido en tu instancia principal de {% data variables.product.prodname_ghe_server %}. Si bien las geo-réplicas activas pueden mejorar el rendimiento de las solicitudes de lectura, esto implica un costo de limitar el rendimiento de escritura. Para reducir la carga de tu instancia primaria y mejorar el rendimiento de la arquitectura, puedes configurar un caché de repositorio, un espejo asíncrono de solo lectura de los repositorios ubicados cerca de estos clientes distribuidos geográficamente. 

Un caché de repositorio elimina la necesidad de que {% data variables.product.product_name %} transmita los mismos datos de Git a través de un enlace de red a larga distancia varias veces para servir a clientes múltiples, al servir los datos de tu repositorio cerca de las granjas de IC y equipos distribuidos. Por ejemplo, si tu instancia principal está en América del Norte y también tienes una presencia significativa en Asia, te beneficiarías de configurar el caché de repositorios en Asia para que lo utilicen los ejecutores de IC de ahí.

El caché de repositorios escucha a la instancia principal, ya sea una sola instancia o un conjunto geo-replicado de ellas, para conocer los cambios en los datos de Git. Las granjas de IC y otros consumidores de lectura pesada clonan y recuperan información del caché de repositorio en vez de en la instancia primaria. Los cambios se propagan a lo largo de la red, en intervalos periódicos, una vez por instancia de caché en vez de una vez por cliente. Los datos de Git serán habitualmente visibles en el caché de repositorio dentro de varios minutos después de haber subido los datos a la instancia primaria.  {% ifversion ghes > 3.3 %} Los sistemas de CI pueden usar el [webhook `cache_sync`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync) para reaccionar a los datos que están disponibles en la caché.{% endif %}

Tienes un control minucioso sobre qué repositorios se permite sincronizar al caché del repositorio. Los datos de Git solo se replicarán en las ubicaciones que especifique.

{% data reusables.enterprise.repository-caching-config-summary %} Para más información, vea "[Configuración de una caché de repositorios](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)".
