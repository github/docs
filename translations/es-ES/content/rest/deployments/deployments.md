---
title: Implementaciones
intro: The Deployments API allows you to create and delete deployments and deployment environments.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Los despliegues son slicitudes para desplegar una ref específica (rma, SHA, etiqueta). GitHub despliega un [evento de `deployment`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) al que puedan escuchar los servicios externos y al con el cual puedan actuar cuando se creen los despliegues nuevos. Los despliegues habilitan a los desarrolladores y a las organizaciones para crear herramientas sin conexión directa en torno a los despliegues, sin tener que preocuparse acerca de los detalles de implementación de entregar tipos de aplicaciones diferentes (por ejemplo, web o nativas).

Los estados de despliegue permiten que los servicios externos marquen estos despliegues con un estado de `error`, `failure`, `pending`, `in_progress`, `queued`, o `success` que pueden consumir los sistemas que escuchan a los [eventos de `deployment_status`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status).

Los estados de despliegue también incluyen una `description` y una `log_url` opcionales, las cuales se recomiendan ampliamente, ya que hacen que los estados de despliegue sean más útiles. La `log_url` es la URL completa para la salida del despliegue, y la `description` es el resumen de alto nivel de lo que pasó con este despliegue.

GitHub envía eventos de `deployment` y `deployment_status` cuando se crean despliegues y estados de despliegue nuevos. Estos eventos permiten que las integraciones de terceros reciban respuesta de las solicitudes de despliegue y actualizan el estado de un despliegue conforme éste progrese.

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

Toma en cuenta que el [Alcance de OAuth](/developers/apps/scopes-for-oauth-apps) de `repo_deployment` otorga acceso dirigido para los despliegues y estados de despliegue **sin** otorgar acceso al código del repositorio, mientras que {% ifversion not ghae %} los alcances de `public_repo` y{% endif %}`repo` también otorgan permisos para el código.

### Despliegues inactivos

Cuando configuras el estado de un despliegue como `success`, entonces todos los despliegues anteriores que no sean transitorios ni de producción y que se encuentren en el mismo repositorio con el mismo ambiente se convertirán en `inactive`. Para evitar esto, puedes configurar a `auto_inactive` como `false` cuando creas el estado del servidor.

Puedes comunicar que un ambiente transitorio ya no existe si configuras el `state` como `inactive`.  El configurar al `state` como `inactive`muestra el despliegue como `destroyed` en {% data variables.product.prodname_dotcom %} y elimina el acceso al mismo.
