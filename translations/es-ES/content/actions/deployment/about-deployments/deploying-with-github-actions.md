---
title: Desplegar con GitHub Actions
intro: Aprende a controlar los despliegues con características como ambientes y concurrencia.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
topics:
  - CD
shortTitle: Deploy with GitHub Actions
ms.openlocfilehash: 533d85d83bea53d34af3d8b9a47d0d4426ea4bc6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145179188'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

{% data variables.product.prodname_actions %} ofrece características que te permiten controlar los despliegues. Puede:

- Activar flujos de trabajo con eventos diversos.
- Configura ambientes para establecer reglas antes de que un job pueda proceder y para limitar el acceso a los secretos.
- Utiliza la concurrencia para controlar la cantidad de despliegues que se ejecutan al mismo tiempo.

Para más información sobre la implementación continua, vea "[Acerca de la implementación continua](/actions/deployment/about-continuous-deployment)".

## Prerrequisitos

Debes estar familiarizado con la sintaxis de las {% data variables.product.prodname_actions %}. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

## Activar tu despliegue

Puedes utilizar varios eventos para activar tu flujo de trabajo de despliegue. Algunos de los más comunes son: `pull_request`, `push` y `workflow_dispatch`.

Por ejemplo, un flujo de trabajo con los siguientes activadores se ejecuta en cualquier momento:

- Hay una inserción en la rama `main`.
- Una solicitud de incorporación de cambios dirigida a la rama `main` se ha abierto, sincronizado o vuelto a abrir.
- Alguien lo activó manualmente.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

Para más información, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

## Utilizar ambientes

{% data reusables.actions.about-environments %}

## Utilizar la concurrencia

La concurrencia se asegura de que solo un job o flujo de trabajo que utilice el mismo grupo de concurrencia se ejecute al mismo tiempo. Puedes utilizar la concurrencia para que un ambiente tenga un máximo de un despliegue en progreso y un despliegue pendiente a la vez.

{% note %}

**Nota:** `concurrency` y `environment` no están conectados. El valor de concurrencia puede ser cualquier secuencia; no necesita ser un nombre de ambiente. Adicionalmente, si otro flujo de trabajo utiliza el mismo ambiente pero no especifica una concurrencia, este no estará sujeto a ninguna regla de concurrencia.

{% endnote %}

Por ejemplo, cuando se ejecuta el siguiente flujo de trabajo, se pausará con el estado `pending` si cualquier trabajo o flujo de trabajo que utiliza el grupo de simultaneidad `production` está en curso. También cancelará cualquier trabajo o flujo de trabajo que use el grupo de simultaneidad `production` y tenga el estado `pending`. Esto significa que habrá un máximo de un trabajo o flujo de trabajo en ejecución, y un trabajo o flujo de trabajo pendiente que utilice el grupo de simultaneidad `production`.

```yaml
name: Deployment

concurrency: production

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

También puedes especificar la concurrencia a nivel del job. Esto permitirá que los demás trabajos del flujo de trabajo continúen aunque el trabajo simultáneo sea `pending`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

También puede usar `cancel-in-progress` para cancelar cualquier trabajo o flujo de trabajo actualmente en ejecución en el mismo grupo de simultaneidad.

```yaml
name: Deployment

concurrency: 
  group: production
  cancel-in-progress: true

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Para obtener instrucciones sobre cómo escribir pasos específicos de la implementación, vea "[Búsqueda de ejemplos de implementación](#finding-deployment-examples)".

## Visualización del historial de implementación

Cuando se despliega un flujo de trabajo de {% data variables.product.prodname_actions %} en un ambiente, dicho ambiente se desplegará en la página principal del repositorio. Para más información sobre cómo ver las implementaciones en los entornos, vea "[Visualización del historial de implementación](/developers/overview/viewing-deployment-history)".

## Monitorear las ejecuciones de flujo de trabajo

Cada ejecución de flujo de trabajo genera una gráfica en tiempo real que ilustra el progreso de la misma. Puedes utilizar esta gráfica para monitorear y depurar los despliegues. Para más información, vea "[Uso del gráfico de visualización](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)".

También puedes ver las bitácoras de cada ejecución de flujo de trabajo y el historial de estos. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Rastrear los despliegues a través de las apps

{% ifversion fpt or ghec %} Si la cuenta personal o de la organización de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} está integrada con Microsoft Teams o Slack, puede realizar el seguimiento de las implementaciones que usan entornos por medio de Microsoft Teams o Slack. Por ejemplo, puedes recibir notificaciones a través de la app cuando la aprobación de un despliegue está pendiente, cuando está aprobado o cuando cambia su estado. Para más información sobre la integración de Microsoft Teams o Slack, vea ["Extensiones e integraciones de GitHub](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)".
{% endif %}

También puedes crear una app que utilice despliegues y webhooks de estados de despliegues para rastrearlos. {% data reusables.actions.environment-deployment-event %} Para más información, vea "[Aplicaciones](/developers/apps)" y "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)".

{% ifversion fpt or ghes or ghec %}

## Elegir un ejecutor

Puede ejecutar el flujo de trabajo de implementación en los ejecutores hospedados en {% data variables.product.product_name %} o en los autohospedados. El tráfico de los ejecutores hospedados en {% data variables.product.company_short %} puede provenir de una [amplia gama de direcciones de red](/rest/reference/meta#get-github-meta-information). Si vas a realizar la implementación en un entorno interno y la empresa restringe el tráfico externo a redes privadas, es posible que los flujos de trabajo de {% data variables.product.prodname_actions %} que se ejecutan en ejecutores autohospedados de {% data variables.product.company_short %} no puedan comunicarse con los servicios o recursos internos. Para superar esto, puedes hospedar tus propios ejecutores. Para más información, vea "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Acerca de los ejecutores hospedados en GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners)".

{% endif %}

## Mostrar una insignia de estado

Puedes utilizar una insignia de estado para mostrar el estado de tu flujo de trabajo de despliegue. {% data reusables.repositories.actions-workflow-status-badge-intro %}

Para más información, vea "[Adición de un distintivo de estado de flujo de trabajo](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

## Encontrar ejemplos de despliegues

Este artículo demostró características de las {% data variables.product.prodname_actions %} que puedes agregar a tus flujos de trabajo de despliegue.

{% data reusables.actions.cd-templates-actions %}
