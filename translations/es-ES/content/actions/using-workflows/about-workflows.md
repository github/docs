---
title: Acerca de los flujos de trabajo
shortTitle: Acerca de los flujos de trabajo
intro: 'Obtén flujos de trabajo de {% data variables.product.prodname_actions %} de resumen de alto nivel, incluyendo activadores, sintaxis y características avanzadas.'
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

## Puntos básicos de los flujos de trabajo

Un flujo de trabajo debe contener los siguientes componentes básicos:

1. Uno o más _eventos_ que activarán el flujo de trabajo.
1. Uno o más _jobs_, cada uno de los cuales se ejecutará en una máquina _ejecutora_ y ejecutará una serie de uno o más _pasos_.
1. Cada paso puede ya sea ejecutar un script que defines o ejecutar una acción, la cual es una extensión reutilizable que puede simplificar tu flujo de trabajo.

Para obtener más información sobre estos componentes básicos, consulta la sección "[Entender las GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)".

![Resumen del flujo de trabajo](/assets/images/help/images/overview-actions-simple.png)

## Activar un flujo de trabajo

{% data reusables.actions.about-triggers %}

Para obtener más información, consulta la sección "[Activar un flujo de trabajo](/actions/using-workflows/triggering-a-workflow)" y para encontrar una lista completa de eventos, consulta la sección "[Eventos que activan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".

## Sintaxis de flujos de trabajo

Los flujos de trabajo se definen utilizando YAML. Para encontrar una referencia completa de la sintaxis de YAML para flujos de trabajo de creación, consulta la sección "[Sintaxis de fluljo de trabajo para GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)".


{% data reusables.actions.workflow-basic-example-and-explanation %}

Para ver más información sobre cómo manejar las ejecuciones de flujo de trabajo tales como re-ejecutar, cancelar o borrar una ejecución de flujo de trabajo, consulta la sección "[Administrar las ejecuciones de flujo de trabajo](/actions/managing-workflow-runs)".

## Utilizar flujos de trabajo iniciales

{% data reusables.actions.workflow-template-overview %}

Para obtener más información sobre cómo utilizar y crear flujos de trabajo iniciales, consulta las secciones "[Utilizar flujos de trabajo iniciales](/actions/using-workflows/using-starter-workflows)" y "[Crear flujos de trabajo iniciales para tu organización](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Características avanzadas de los flujos de trabajo

Esta sección describe brevemente algunas de las características avanzadas de {% data variables.product.prodname_actions %} que te ayudan a crear flujos de trabajo más complejos.

### Almacenar secretos

Si tus flujos de trabajo utilizan datos sensibles tales como contraseñas o certificados, puedes guardarlos en {% data variables.product.prodname_dotcom %} como _secretos_ y luego usarlos en tus flujos de trabajo como variables de ambiente. Esto significa que podrás crear y compartir flujos de trabajo sin tener que embeber valores sensibles directamente en la fuente de YAML del flujo de trabajo.

Este job de ejemplo demuestra como referenciar un secreto existente como una variable de ambiente y enviarlo como un parámetro a un comando de ejemplo.

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

Predeterminadamente, los jobs en tu flujo de trabajo se ejecutan todos en paralelo y al mismo tiempo. Si tienes un job que solo se debe ejecutar después de que se complete otro, puedes utilizar la palabra clave `needs` para crear esta dependencia. Si uno de los jobs falla, todos los jobs dependientes se omiten; sin embargo, si necesites que estos continúen, puedes definir esto utilizando la declaración condicional `if`.

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

{% data reusables.actions.jobs.about-matrix-strategy %} La matriz se crea utilizando la palabra clave `strategy`, la cual recibe las opciones de compilación como un arreglo. Por ejemplo, esta matriz ejecutará el job varias veces, utilizando versiones diferentes de Node.js:

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

Si tus jobs utilizan dependencias con frecuencia, puedes considerar almacenar estos archivos en caché para ayudar a mejorar el desempeño. Una vez que se crea el caché, estará disponible para todos los flujos de trabajo en el mismo repositorio.

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

Para obtener más información, consulta la sección "[Utilizar servicios en contenedores](/actions/using-containerized-services)".

### Utilizar etiquetas para enrutar los flujos de trabajo

Si quieres asegurarte de que un tipo específico de ejecutor procesará tu job, puedes utilizar etiquetas para controlar donde se ejecutan los jobs. Puedes asignar etiquetas a un ejecutor auto-hospedado adicionalmente a su etiqueta predeterminada de `self-hosted`. Entonces, puedes referirte a estas etiquetas en tu flujo de trabajo de YAML, garantizando que el job se enrute de forma predecible.{% ifversion not ghae %}Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen asignadas etiquetas predefinidas.{% endif %}

Este ejemplo muestra como un flujo de trabajo puede utilizar etiquetas para especificar el ejecutor requerido:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Un flujo de trabajo solo se ejecutará en un ejecutor que tenga todas las etiquetas en el arreglo `runs-on`. El job irá preferencialmente a un ejecutor auto-hospedado inactivo con las etiquetas especificadas. {% ifversion fpt or ghec %}Si ninguno está disponible y existe un ejecutor hospedado en {% data variables.product.prodname_dotcom %} con las etiquetes especificadas, el job irá al ejecutor hospedado en {% data variables.product.prodname_dotcom %}.{% endif %}

Para aprender más sobre las etiquetas de ejecución auto-hospedadas, consulta la sección "[Utilizar etiquetas con los ejecutores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

{% ifversion fpt or ghec %}
Para aprender más sobre las etiquetas de ejecutores hospedados en {% data variables.product.prodname_dotcom %}, consulta la sección "[Recursos de hardware y ejecutores compatibles](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)".
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilizar flujos de trabajo
{% data reusables.actions.reusable-workflows %}
{% endif %}

### Utilizar ambientes

Puedes configurar ambientes con reglas de protección y secretos para controlar la ejecución de jobs en un flujo de trabajo. Cad job en un flujo de trabajo puede referenciar un solo ambiente. Cualquier regla de protección que se configure para el ambiente debe pasar antes de que un job que referencia al ambiente se envíe a un ejecutor. Para obtener más información, consulta la sección "[Utilizar ambientes para despliegue](/actions/deployment/using-environments-for-deployment)".
