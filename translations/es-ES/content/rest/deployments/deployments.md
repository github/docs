---
title: Implementaciones
intro: La API de implementaciones te permite crear y eliminar implementaciones y entornos de implementación.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 59567f92afddb8941005146a3fa92fd20549fa61
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687056'
---
## Acerca de la API de implementaciones

Los despliegues son slicitudes para desplegar una ref específica (rma, SHA, etiqueta). GitHub envía un [evento `deployment`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) que los servicios externos pueden escuchar y sobre el que pueden actuar cuando se crean implementaciones. Los despliegues habilitan a los desarrolladores y a las organizaciones para crear herramientas sin conexión directa en torno a los despliegues, sin tener que preocuparse acerca de los detalles de implementación de entregar tipos de aplicaciones diferentes (por ejemplo, web o nativas).

Los estados de implementación permiten a los servicios externos marcar las implementaciones con un estado `error`, `failure`, `pending`, `in_progress`, `queued` o `success` que los sistemas que escuchan [eventos `deployment_status`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) pueden consumir.

Los estados de implementación también pueden incluir un valor `description` y `log_url`opcional, que son muy recomendables porque hacen que los estados de implementación sean más útiles. `log_url` es la dirección URL completa de la salida de implementación y `description` es un resumen general de lo que ha ocurrido con la implementación.

GitHub envía eventos `deployment` y `deployment_status` cuando se crean implementaciones y estados de implementación. Estos eventos permiten que las integraciones de terceros reciban solicitudes de implementación, y respondan a ellas, y actualizan el estado de una implementación conforme esta progrese.

Debajo encontrarás un diagrama de secuencia simple que explica cómo funcionarían estas interacciones.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Ten en cuenta que GitHub jamás accede a tus servidores realmente. La interacción con los eventos de despliegue dependerá de tu integración de terceros. Varios sistemas pueden escuchar a los eventos de despliegue, y depende de cada uno de ellos decidir si son responsables de cargar el código a tus servidores, si crean código nativo, etc.

Tenga en cuenta que el [ámbito de OAuth](/developers/apps/scopes-for-oauth-apps) `repo_deployment` concede acceso destinado a las implementaciones y los estados de implementación **sin** conceder acceso al código del repositorio, mientras que los ámbitos {% ifversion not ghae %}`public_repo` y{% endif %}`repo` también conceden permiso para el código.

### Despliegues inactivos

Al establecer el estado de una implementación en `success`, todas las implementaciones anteriores que no sean transitorias ni de producción y que se encuentren en el mismo repositorio con el mismo nombre de entorno se convertirán en `inactive`. Para evitarlo, puede `auto_inactive` establecer en `false` al crear el estado de implementación.

Puede comunicar que ya no existe un entorno transitorio si establece `state` en `inactive`.  Al establecer `state` en `inactive` se muestra la implementación como `destroyed` en {% data variables.product.prodname_dotcom %} y se quita el acceso a ella.
