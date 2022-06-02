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
shortTitle: Desplegar con GitHub Actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

{% data variables.product.prodname_actions %} ofrece características que te permiten controlar los despliegues. Puedes:

- Activar flujos de trabajo con eventos diversos.
- Configura ambientes para establecer reglas antes de que un job pueda proceder y para limitar el acceso a los secretos.
- Utiliza la concurrencia para controlar la cantidad de despliegues que se ejecutan al mismo tiempo.

Para obtener más información sobre los despliegues continuos, consulta la sección "[Acerca de los despliegues continuos](/actions/deployment/about-continuous-deployment)".

## Prerrequisitos

Debes estar familiarizado con la sintaxis de las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

## Activar tu despliegue

Puedes utilizar varios eventos para activar tu flujo de trabajo de despliegue. Algunos de los más comunes son: `pull_request`, `push` y `workflow_dispatch`.

Por ejemplo, un flujo de trabajo con los siguientes activadores se ejecuta en cualquier momento:

- Hay una subida a la rama `main`.
- Se abrió, sincronizó o reabrió una solicitud de cambios que apunta a la rama `main`.
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

Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

## Utilizar ambientes

{% data reusables.actions.about-environments %}

## Utilizar la concurrencia

La concurrencia se asegura de que solo un job o flujo de trabajo que utilice el mismo grupo de concurrencia se ejecute al mismo tiempo. Puedes utilizar la concurrencia para que un ambiente tenga un máximo de un despliegue en progreso y un despliegue pendiente a la vez.

{% note %}

**Nota:** la `concurrency` y el `environment` no están conectados. El valor de concurrencia puede ser cualquier secuencia; no necesita ser un nombre de ambiente. Adicionalmente, si otro flujo de trabajo utiliza el mismo ambiente pero no especifica una concurrencia, este no estará sujeto a ninguna regla de concurrencia.

{% endnote %}

Por ejemplo, cuando se ejecuta el siguiente flujo de trabajo, este se pausará con el estado `pending` si cualquier job o flujo de trabajo que utiliza el grupo de concurrencia `production` está en progreso. También cancelará cualquier job o flujo de trabajo que utilice el grupo de concurrencia `production` y que tenga el estado de `pending`. Esto significa que habrá un máximo de un job o flujo de trabajo ejecutándose y uno pendiente que utilice el grupo de concurrencia `production`.

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

También puedes especificar la concurrencia a nivel del job. Esto permitirá a otros jobs del flujo de trabajo proceder aún si el job concurrente está como `pending`.

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

También puedes utilizar `cancel-in-progress` para cancelar cualquier job o flujo de trabajo que se esté ejecutando concurrentemente en el mismo grupo de concurrencia.

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

Para obtener orientación sobre cómo escribir pasos específicos para los despliegues, consulta la sección "[Encontrar ejemplos de despliegues](#finding-deployment-examples)".

## Visualizar el historial de despliegues

Cuando se despliega un flujo de trabajo de {% data variables.product.prodname_actions %} en un ambiente, dicho ambiente se desplegará en la página principal del repositorio. Para obtener más información sobre cómo visualizar los despliegues hacia los ambientes, consulta la sección "[Ver el historial de despliegue](/developers/overview/viewing-deployment-history)".

## Monitorear las ejecuciones de flujo de trabajo

Cada ejecución de flujo de trabajo genera una gráfica en tiempo real que ilustra el progreso de la misma. Puedes utilizar esta gráfica para monitorear y depurar los despliegues. Para obtener más información, consulta la sección "[Utilizar la gráfica de visualización](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)".

También puedes ver las bitácoras de cada ejecución de flujo de trabajo y el historial de estos. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Rastrear los despliegues a través de las apps

{% ifversion fpt or ghec %}
Si tu cuenta personal u organización de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} está integrada con Microsoft Teams o Slack, puedes rastrear los despliegues que utilizan ambientes a través de estos programas. Por ejemplo, puedes recibir notificaciones a través de la app cuando la aprobación de un despliegue está pendiente, cuando está aprobado o cuando cambia su estado. Para obtener más información sobre cómo integrar Microsoft Teams o Slack, consulta la sección "[Extensiones e integraciones de GitHub](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)".
{% endif %}

También puedes crear una app que utilice despliegues y webhooks de estados de despliegues para rastrearlos. {% data reusables.actions.environment-deployment-event %} Para obtener más información, consulta las secciones "[Apps](/developers/apps)" y "[Eventos y cargas útiles de los webhooks](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)".

{% ifversion fpt or ghes or ghec %}

## Elegir un ejecutor

Puedes ejecutar tu flujo de trabajo de despliegue en los ejecutores hospedados en {% data variables.product.company_short %} o en los auto-hospedados. El tráfico de los ejecutores hospedados en {% data variables.product.company_short %} puede venir desde un [rango amplio de direcciones de red](/rest/reference/meta#get-github-meta-information). Si estás desplegando hacia un ambiente interno y tu empresa restringe el tráfico externo en las redes privadas, los flujos de trabajo de {% data variables.product.prodname_actions %} que se ejecutan en los ejecutores hospedados en {% data variables.product.company_short %} podrían no tener la capacidad de comunicarse con tus recursos o servicios internos. Para superar esto, puedes hospedar tus propios ejecutores. Para obtener más información, consulta las secciones "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Acercad e los ejecutores hospedados en GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners)".

{% endif %}

## Mostrar una insignia de estado

Puedes utilizar una insignia de estado para mostrar el estado de tu flujo de trabajo de despliegue. {% data reusables.repositories.actions-workflow-status-badge-intro %}

Para obtener más información, consulta la sección "[Agregar una insignia de estado de flujo de trabajo](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

## Encontrar ejemplos de despliegues

Este artículo demostró características de las {% data variables.product.prodname_actions %} que puedes agregar a tus flujos de trabajo de despliegue.

{% data reusables.actions.cd-templates-actions %}
