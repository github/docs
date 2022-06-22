---
title: Acerca de los flujos de trabajo
shortTitle: Acerca de los flujos de trabajo
intro: 'Get a high level overview {% data variables.product.prodname_actions %} workflows, including triggers, syntax, and advanced features.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
---

## Acerca de los flujos de trabajo

{% data reusables.actions.about-workflows-long %}

## Workflow basics

A workflow must contain the following basic components:

1. One or more _events_ that will trigger the workflow.
1. One or more _jobs_, each of which will execute on a _runner_ machine and run a series of one or more _steps_.
1. Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.

For more information on these basic components, see "[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)."

![Resumen del flujo de trabajo](/assets/images/help/images/overview-actions-simple.png)

## Activar un flujo de trabajo

{% data reusables.actions.about-triggers %}

For more information, see "[Triggering a workflow](/actions/using-workflows/triggering-a-workflow)", and for a full list of events, see "[Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows)."

## Sintaxis de flujos de trabajo

Workflow are defined using YAML. For the full reference of the YAML syntax for authoring workflows, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)."


{% data reusables.actions.workflow-basic-example-and-explanation %}

For more on managing workflow runs, such as re-running, cancelling, or deleting a workflow run, see "[Managing workflow runs](/actions/managing-workflow-runs)."

## Utilizar flujos de trabajo iniciales

{% data reusables.actions.workflow-template-overview %}

For more information on using and creating starter workflows, see "[Using starter workflows](/actions/using-workflows/using-starter-workflows)" and "[Creating starter workflows for your organization](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Características avanzadas de los flujos de trabajo

This section briefly describes some of the advanced features of {% data variables.product.prodname_actions %} that help you create more complex workflows.

### Almacenar secretos

Si tus flujos de trabajo utilizan datos sensibles tales como contraseñas o certificados, puedes guardarlos en {% data variables.product.prodname_dotcom %} como _secretos_ y luego usarlos en tus flujos de trabajo como variables de ambiente. This means that you will be able to create and share workflows without having to embed sensitive values directly in the workflow's YAML source.

This example job demonstrates how to reference an existing secret as an environment variable, and send it as a parameter to an example command.

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

Para obtener más información, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

### Crear jobs dependientes

Predeterminadamente, los jobs en tu flujo de trabajo se ejecutan todos en paralelo y al mismo tiempo. If you have a job that must only run after another job has completed, you can use the `needs` keyword to create this dependency. If one of the jobs fails, all dependent jobs are skipped; however, if you need the jobs to continue, you can define this using the `if` conditional statement.

En este ejemplo, los jobs de `setup`, `build`, y `test` se ejecutan en serie, y `build` y `test` son dependientes de que el job que las precede se complete con éxito:

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

Para obtener más información, consulta la sección "[Definir los jobs de prerrequisito](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)".

### Utilizar una matriz

{% data reusables.actions.jobs.about-matrix-strategy %} The matrix is created using the `strategy` keyword, which receives the build options as an array. For example, this matrix will run the job multiple times, using different versions of Node.js:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

Para obtener más información, consulta la sección "[Utilizar una matriz para tus jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)".

{% ifversion actions-caching %}
### Almacenar dependencias en caché

If your jobs regularly reuse dependencies, you can consider caching these files to help improve performance. Una vez que se crea el caché, estará disponible para todos los flujos de trabajo en el mismo repositorio.

Este ejemplo ilustra cómo almacenar el directorio `~/.npm` en el caché:

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

Para obtener más información, consulta la sección "[Almacenar las dependencias en caché para agilizar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".
{% endif %}

### Usar bases de datos y contenedores de servicio

Si tu job requiere de un servicio de caché o de base de datos, puedes utilizar la palabra clave [`services`](/actions/using-jobs/running-jobs-in-a-container) para crear un contenedor efímero para almacenar el servicio; el contenedor resultante estará entonces disponible para todos los pasos de ese job y se eliminará cuando el job se haya completado. Este ejemplo ilustra como un job puede utilizar `services` para crear un contenedor de `postgres` y luego utilizar a `node` para conectarse al servicio.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

For more information, see "[Using containerized services](/actions/using-containerized-services)."

### Utilizar etiquetas para enrutar los flujos de trabajo

Si quieres asegurarte de que un tipo específico de ejecutor procesará tu job, puedes utilizar etiquetas para controlar donde se ejecutan los jobs. Puedes asignar etiquetas a un ejecutor auto-hospedado adicionalmente a su etiqueta predeterminada de `self-hosted`. Entonces, puedes referirte a estas etiquetas en tu flujo de trabajo de YAML, garantizando que el job se enrute de forma predecible.{% ifversion not ghae %}Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen asignadas etiquetas predefinidas.{% endif %}

Este ejemplo muestra como un flujo de trabajo puede utilizar etiquetas para especificar el ejecutor requerido:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Un flujo de trabajo solo se ejecutará en un ejecutor que tenga todas las etiquetas en el arreglo `runs-on`. El job irá preferencialmente a un ejecutor auto-hospedado inactivo con las etiquetas especificadas. {% ifversion fpt or ghec %}If none are available and a {% data variables.product.prodname_dotcom %}-hosted runner with the specified labels exists, the job will go to a {% data variables.product.prodname_dotcom %}-hosted runner.{% endif %}

To learn more about self-hosted runner labels, see "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)."

{% ifversion fpt or ghec %}
To learn more about {% data variables.product.prodname_dotcom %}-hosted runner labels, see "[Supported runners and hardware resources](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilizar flujos de trabajo
{% data reusables.actions.reusable-workflows %}
{% endif %}

### Utilizar ambientes

You can configure environments with protection rules and secrets to control the execution of jobs in a workflow. Cad job en un flujo de trabajo puede referenciar un solo ambiente. Cualquier regla de protección que se configure para el ambiente debe pasar antes de que un job que referencia al ambiente se envíe a un ejecutor. Para obtener más información, consulta la sección "[Utilizar ambientes para despliegue](/actions/deployment/using-environments-for-deployment)".
