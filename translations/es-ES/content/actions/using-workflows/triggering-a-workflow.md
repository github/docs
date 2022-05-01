---
title: Activar un flujo de trabajo
shortTitle: Activar un flujo de trabajo
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los activadores de los flujos de trabajo

{% data reusables.actions.about-triggers %}

Los activadores de los flujos de trabajo se definen con la clave `on`. Para obtener más información, consulta la sección "[Sintaxis del flujo de trabajo para las {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)".

Los siguientes pasos se producen para activar una ejecución de flujo de trabajo:

1. Un eventto ocurre en tu repositorio. El evento tiene un SHA de confirmación asociado y una ref de Git.
1. {% data variables.product.product_name %} busca el directorio `.github/workflows` en tu repositorio para el caso de los archivos de flujo de trabajo que están presentes en el SHA de confirmación asociado o Git Ref del evento.
1. Un flujo de trabajo se activará para cualquier flujo de trabajo que tenga valores de `on:` que empaten con el evento que s eactivó. Algunos eventos también requieren que el flujo de trabajo esté presente en la rama predeterminada del repositorio para poder ejecutarse.

  Cada ejecución de flujo de trabajo utiliza la versión de este que esté presente en el SHA de confirmación asociado o Git Ref del evento. Cuando se ejecuta un flujo de trabajo, {% data variables.product.product_name %} establece las variables de entorno `GITHUB_SHA` (confirmar SHA) y `GITHUB_REF` (referencia de Git) en el entorno del ejecutor. Para obtener más información, consulta "[Usar variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

### Activar un flujo de trabajo desde otro

{% data reusables.actions.actions-do-not-trigger-workflows %} Para obtener más información, consulta la sección "[Autenticarse con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Si no quieres activar un flujo de trabajo dentro una ejecución de flujo de trabajo, puedes utilizar un token de acceso personal en vez de un `GITHUB_TOKEN` para activar los eventos que requieren tu token. Necesitaras crear un token de acceso personal y almacenarlo como un secreto. Para minimizar tus costos de uso de {% data variables.product.prodname_actions %}, asegúrate de no crear ejecuciones de flujo de trabajo recurrentes o involuntarias. For more information about creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)." Para obtener más información sobre cómo almacenr un token de acceso personal como secreto, consulta la sección "[Crear y almacenar secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

Por ejemplo, el siguiente flujo de trabajo utiliza un token de acceso personal (almacenado como secreto y llamado `MY_TOKEN`) para agregar una etiqueta a una propuesta de cambios a través del cli.{% data variables.product.prodname_cli %}. Cualquier flujo de trabajo que se ejecute cuando una etiqueta se agrega se ejecutará una vez mediante este espejo.

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

Por el contrario, el siguiente flujo de trabajo utiliza un `GITHUB_TOKEN` para agregar una etiqueta a una propuesta. No activará ningún flujo de trabajo que se ejecute cuando se agregue una etiqueta.

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

Utiliza la clave `on` para especificar qué eventos activan tu flujo de trabajo. Para obtener más información sobre los eventos que puedes utilizar, consulta la sección "[Eventos que activan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".

### Utilizar un evento simple

{% data reusables.actions.on-single-example %}

### Utilizar eventos múltiples

{% data reusables.actions.on-multiple-example %}

### Utilizar los tipos de actividad y filtros con eventos múltiples

Puedes utilizar tipos de actividad y filtros para controlar aún más cuándo se ejecutará tu flujo de trabajo. Para obtener más información, consulta las secciones [Utilizar tipos de actividad de eventos](#using-event-activity-types) y [Utilizar filtros](#using-filters). {% data reusables.actions.actions-multiple-types %}

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

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Definir entradas, salidas y secretos para los flujos de trabajo reutilizables

{% data reusables.actions.reusable-workflows-ghes-beta %}

Puedes definir entradas y secretos que deben recibir los flujos de trabajo reutilizables desde un flujo de trabajo llamante. También puedes especificar las salidas que un flujo de trabajo reutilizable pondrá a disposición de un flujo de trabajo llamante. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/using-workflows/reusing-workflows)".

{% endif %}

## Utilizar la información de los eventos

La información acerca del evento que activó una ejecución de flujo de trabajo se encuentra disponible en el contexto `github.event`. Las propiedades en el contexto `github.event` dependen del tipo de evento que activó el flujo de trabajo. Por ejemplo, un flujo de trabajo que se activa cuando se etiqueta una propuesta tendrá la información sobre la propuesta y etiqueta.

### Ver todas las propiedades de un evento

Referencia la documentación de evento de webhook para las propiedades comunes y cargas útiles de ejemplo. Para obtener más información, consulta la sección "[Eventos y cargas útiles de los webhooks](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

También puedes imprimir todo el contexto `github.event` para ver qué propiedades están disponibles para el evento que activó tu flujo de trabajo:

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

Puedes utilizar el contexto `github.event` en tu flujo de trabajo. Por ejemplo, el siguiente flujo de trabajo se ejecuta cuando se abre una solicitud de cambios que cambia a `package*.json`, `.github/CODEOWNERS` o `.github/workflows/**`. Si el autor de la solicitud de cambios (`github.event.pull_request.user.login`) no es `octobot` o `dependabot[bot]`, entonces el flujo de trabajo utilizará el {% data variables.product.prodname_cli %} para etiquetar y comentar en la solicitud de cambios (`github.event.pull_request.number`).

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
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. No permitimos contribuciones a estos archivos. Por favor, revisa nuestros [lineamientos de contribución](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) para ver qué tipo de contribuciones se aceptan.'
```

Para obtener más información sobre los contextos, consulta la sección "[Contextos](/actions/learn-github-actions/contexts)". Para obtener más información sobre las cargas útiles de los eventos, consulta la sección "[Eventos y cargas útiles de los webhooks](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

## Controlar aún más la forma en la que se ejecutará tu flujo de trabajo

Si quieres un control más granular que el que proporcionan los eventos, tipos de actividad de eventos o filtros de evento, puedes utilizar condicionales{% ifversion fpt or ghae or ghes > 3.1 or ghec %} y ambientes{% endif %} para controlar si se ejecutarán los jobs o pasos individuales en tu flujo de trabajo.

### Utilziar condicionales

Puedes utilizar condicionales para controlar aún más si se ejecutarán los jobs o pasos de tu flujo de trabajo.

#### Ejemplo utilizando un valor en la carga útil del evento

Por ejemplo, si quieres que el flujo de trabajo se ejecute cuando se agrega una etiqueta específica a una propuesta, puedes activar el tipo de actividad de evento `issues labeled` y utilizar una condicional para verificar qué etiqueta activó el flujo de trabajo. El siguiente flujo de trabajo se ejecutará cuando se agregue cualquier etiqueta a una propuesta en su repositorio, pero el job `run_if_label_matches` solo se ejecutará si la etiqueta se nombra `bug`.

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

Por ejemplo, si quieres ejecutar jobs o pasos diferentes dependiendo de qué evento activó el flujo de trabajo, puedes utilizar una condicional para verificar si un tipo de evento específico existe en el contexto del mismo. El siguiente flujo de trabajo se ejecutará cada que se cierre una propuesta o solicitud de cambios. Si el flujo de trabajo se ejecutó debido a que se cerró una propuesta, el contexto `github.event` contendrá un valor para la `issue` pero no para la `pull_request`. Por lo tanto, el paso de `if_issue` se ejecutará, pero el de `if_pr` no lo hará. Por el contrario, si el flujo de trabajo se ejecutó porque se cerró una solicitud de cambios, el paso de `if_pr` se ejecutará pero el de `if_issue` no lo hará.

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

Para obtener más información sobre qué tipo de información está disponible ene l contexto del evento, consulta la sección "[Utilizar la información de los eventos](#using-event-information)". Para obtener más información sobre cómo utilizar las condicionales, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions)".

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}

### Utilizar ambientes para activar jobs de flujos de trabajo manualmente

Si quieres activar manualmente un job específico en un flujo de trabajo, puedes utilizar un ambiente que requiera aprobación de un equipo o usuario específico. Primero, configura un ambiente con revisores requeridos. Para obtener más información, consulta la sección "[Utilizar ambientes para despliegue](/actions/deployment/targeting-different-environments/using-environments-for-deployment)". Luego, referencia el nombre del ambiente en un job de tu flujo de trabajo utilizando la clave `environment:`. No se ejecutará ningún job que referencie el ambiente hasta que por lo menos un revisor lo apruebe.

Por ejemplo, el siguiente fluljo de trabajo se ejecutará siempre que haya una subida a la rama principal (main). El job `build` siempre se ejecutará. El job `publish` solo se ejecutará después de que el job `build` se complete con éxito (debido a `needs: [build]`) y después de que pasen todas las reglas (incluyendo a los revisores requeridos) para el ambiente llamado `production` (debido a `environment: production`).

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
{% endif %}

## Eventos disponibles

Para encontrar una lista completa de todos los eventos disponibles, consulta la sección "[Eventos que activan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".
