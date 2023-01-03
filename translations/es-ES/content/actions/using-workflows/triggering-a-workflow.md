---
title: Activar un flujo de trabajo
shortTitle: Trigger a workflow
intro: 'Cómo activar flujos de trabajo de {% data variables.product.prodname_actions %} automàticamente'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cd91670d3d06d4d8f954afa114f6c4f189825d86
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191907'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los activadores de los flujos de trabajo

{% data reusables.actions.about-triggers %}

Los desencadenadores de flujos de trabajo se definen con la clave `on`. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)".

Los siguientes pasos se producen para activar una ejecución de flujo de trabajo:

1. Un eventto ocurre en tu repositorio. El evento tiene un SHA de confirmación asociado y una ref de Git.
1. {% data variables.product.product_name %} busca en el directorio `.github/workflows` del repositorio los archivos de flujo de trabajo que están presentes en el SHA de confirmación asociado o en la referencia de Git del evento.
1. Se desencadena una ejecución de flujos de trabajo para cualquier flujo de trabajo que tenga valores `on:` que coincidan con el evento desencadenador. Algunos eventos también requieren que el flujo de trabajo esté presente en la rama predeterminada del repositorio para poder ejecutarse.

  Cada ejecución de flujo de trabajo utiliza la versión de este que esté presente en el SHA de confirmación asociado o Git Ref del evento. Cuando se ejecuta un flujo de trabajo, {% data variables.product.product_name %} establece las variables de entorno `GITHUB_SHA` (SHA de confirmación) y `GITHUB_REF` (referencia de Git) en el entorno del ejecutor. Para más información, vea "[Uso de variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

### Activar un flujo de trabajo desde otro

{% data reusables.actions.actions-do-not-trigger-workflows %} Para obtener más información, vea "[Autenticación con GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Si quiere desencadenar un flujo de trabajo desde una ejecución de flujos de trabajo, puede usar un {% data variables.product.pat_generic %} en lugar de `GITHUB_TOKEN` para desencadenar eventos que requieran un token. Deberá crear un {% data variables.product.pat_generic %} y almacenarlo como secreto. Para minimizar tus costos de uso de {% data variables.product.prodname_actions %}, asegúrate de no crear ejecuciones de flujo de trabajo recurrentes o involuntarias. Para obtener más información sobre la creación de un {% data variables.product.pat_generic %}, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)". Para obtener más información sobre cómo almacenar un {% data variables.product.pat_generic %} como un secreto, consulta "[Creación y almacenamiento de secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

Por ejemplo, el siguiente flujo de trabajo usa un {% data variables.product.pat_generic %} (almacenado como un secreto denominado `MY_TOKEN`) para agregar una etiqueta a una incidencia mediante {% data variables.product.prodname_cli %}. Cualquier flujo de trabajo que se ejecute cuando una etiqueta se agrega se ejecutará una vez mediante este espejo.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

Por su parte, el siguiente flujo de trabajo usa `GITHUB_TOKEN` para agregar una etiqueta a una incidencia. No activará ningún flujo de trabajo que se ejecute cuando se agregue una etiqueta.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## Utilizar eventos para activar flujos de trabajo

Use la clave `on` para especificar qué eventos desencadenan el flujo de trabajo. Para obtener más información sobre los eventos que puede usar, vea "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".

### Utilizar un evento simple

{% data reusables.actions.on-single-example %}

### Utilizar eventos múltiples

{% data reusables.actions.on-multiple-example %}

### Utilizar los tipos de actividad y filtros con eventos múltiples

Puedes utilizar tipos de actividad y filtros para controlar aún más cuándo se ejecutará tu flujo de trabajo. Para obtener más información, vea [Uso de tipos de actividad de eventos](#using-event-activity-types) y [Uso de filtros](#using-filters). {% data reusables.actions.actions-multiple-types %}

## Utilizar tipos de actividad de eventos

{% data reusables.actions.actions-activity-types %}

## Utilizar filtros

{% data reusables.actions.actions-filters %}

### Utilizar filtros para apuntar a ramas específicas para los eventos de solicitudes de cambios

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### Utilizar filtros para apuntar a ramas o etiquetas específicas para los eventos de subida

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### Utilizar filtros para apuntar a rutas específicas para los eventos de subida o solicitudes de cambios

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### Utilizar filtros para apuntar a ramas específicas para los eventos de ejecución de flujos de trabajo

{% data reusables.actions.workflows.section-specifying-branches %}

## Definir entradas para los flujos de trabajo que se activan manualmente

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Definir entradas, salidas y secretos para los flujos de trabajo reutilizables

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Puedes definir entradas y secretos que deben recibir los flujos de trabajo reutilizables desde un flujo de trabajo llamante. También puedes especificar las salidas que un flujo de trabajo reutilizable pondrá a disposición de un flujo de trabajo llamante. Para más información, vea "[Reutilización de flujos de trabajo](/actions/using-workflows/reusing-workflows)".

{% endif %}

## Utilizar la información de los eventos

La información sobre el evento que ha desencadenado una ejecución de flujo de trabajo está disponible en el contexto `github.event`. Las propiedades del contexto `github.event` dependen del tipo de evento que ha desencadenado el flujo de trabajo. Por ejemplo, un flujo de trabajo que se activa cuando se etiqueta una propuesta tendrá la información sobre la propuesta y etiqueta.

### Ver todas las propiedades de un evento

Referencia la documentación de evento de webhook para las propiedades comunes y cargas útiles de ejemplo. Para más información, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

También puede imprimir todo el contexto `github.event` para ver qué propiedades están disponibles para el evento que ha desencadenado el flujo de trabajo:

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### Acceder y utilizar las propiedades de evento

Puede usar el contexto `github.event` en el flujo de trabajo. Por ejemplo, el siguiente flujo de trabajo se ejecuta cuando se abre una solicitud de incorporación de cambios que cambia `package*.json`, `.github/CODEOWNERS` o `.github/workflows/**`. Si el creador de la solicitud de incorporación de cambios (`github.event.pull_request.user.login`) no es `octobot` ni `dependabot[bot]`, el flujo de trabajo usa {% data variables.product.prodname_cli %} para etiquetar y comentar la solicitud de incorporación de cambios (`github.event.pull_request.number`).

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

Para obtener más información sobre los contextos, vea "[Contextos](/actions/learn-github-actions/contexts)". Para obtener más información sobre las cargas de eventos, consulte "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

## Controlar aún más la forma en la que se ejecutará tu flujo de trabajo

Si quieres un control más pormenorizado que el que proporcionan los eventos, los tipos de actividad de eventos o los filtros de eventos, puedes utilizar condicionales y entornos para controlar si se ejecutarán trabajos o pasos individuales en el flujo de trabajo.

### Utilziar condicionales

Puedes utilizar condicionales para controlar aún más si se ejecutarán los jobs o pasos de tu flujo de trabajo.

#### Ejemplo utilizando un valor en la carga útil del evento

Por ejemplo, si quiere que el flujo de trabajo se ejecute cuando se agregue una etiqueta específica a una incidencia, puede desencadenar el tipo de actividad de evento `issues labeled` y usar un condicional para comprobar qué etiqueta ha desencadenado el flujo de trabajo. El siguiente flujo de trabajo se ejecutará cuando se agregue cualquier etiqueta a una incidencia en el repositorio del flujo de trabajo, pero el trabajo `run_if_label_matches` solo se ejecutará si la etiqueta se denomina `bug`.

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### Ejemplo utilizando un tipo de evento

Por ejemplo, si quieres ejecutar jobs o pasos diferentes dependiendo de qué evento activó el flujo de trabajo, puedes utilizar una condicional para verificar si un tipo de evento específico existe en el contexto del mismo. El siguiente flujo de trabajo se ejecutará cada que se cierre una propuesta o solicitud de cambios. Si el flujo de trabajo se ha ejecutado porque se ha cerrado una incidencia, el contexto `github.event` contendrá un valor para `issue`, pero no para `pull_request`. Por lo tanto, el paso `if_issue` se ejecutará, pero el paso `if_pr` no. Por el contrario, si el flujo de trabajo se ha ejecutado porque se ha cerrado una solicitud de incorporación de cambios, el paso `if_pr` se ejecutará, pero el paso `if_issue` no.

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

Para obtener más información sobre qué información está disponible en el contexto del evento, vea "[Uso de información de eventos](#using-event-information)". Para obtener más información sobre cómo usar condicionales, vea "[Expresiones](/actions/learn-github-actions/expressions)".

### Utilizar ambientes para activar jobs de flujos de trabajo manualmente

Si quieres activar manualmente un job específico en un flujo de trabajo, puedes utilizar un ambiente que requiera aprobación de un equipo o usuario específico. Primero, configura un ambiente con revisores requeridos. Para más información, vea "[Uso de entornos para la implementación](/actions/deployment/targeting-different-environments/using-environments-for-deployment)". Después, haga referencia al nombre del entorno en un trabajo del flujo de trabajo mediante la clave `environment:`. No se ejecutará ningún job que referencie el ambiente hasta que por lo menos un revisor lo apruebe.

Por ejemplo, el siguiente fluljo de trabajo se ejecutará siempre que haya una subida a la rama principal (main). El trabajo `build` siempre se ejecutará. El trabajo `publish` solo se ejecutará después de que el trabajo `build` se complete correctamente (debido a `needs: [build]`) y después de que se pasen todas las reglas (incluidos los revisores necesarios) para el entorno denominado `production` (debido a `environment: production`).

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}

## Eventos disponibles

Para obtener una lista completa de los eventos disponibles, consulte "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".
