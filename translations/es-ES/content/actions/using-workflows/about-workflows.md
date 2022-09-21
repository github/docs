---
title: Acerca de los flujos de trabajo
shortTitle: About workflows
intro: 'Obtén información general de alto nivel sobre los flujos de trabajo de {% data variables.product.prodname_actions %}, como desencadenadores, sintaxis y características avanzadas.'
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
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '146180515'
---
## Acerca de los flujos de trabajo

{% data reusables.actions.about-workflows-long %}

## Conceptos básicos del flujo de trabajo

Un flujo de trabajo debe contener los siguientes componentes básicos:

1. Uno o varios _eventos_ que desencadenarán el flujo de trabajo.
1. Uno o varios _trabajos_, cada uno de los cuales se ejecutará en una máquina del _ejecutor_ y ejecutará uno o varios _pasos_.
1. Cada paso puede ejecutar un script que definas, o bien una acción, que es una extensión reutilizable que puede simplificar el flujo de trabajo.

Para obtener más información sobre estos componentes básicos, consulta "[Descripción de Acciones de GitHub](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)".

![Introducción al flujo de trabajo](/assets/images/help/images/overview-actions-simple.png)

## Activar un flujo de trabajo

{% data reusables.actions.about-triggers %}

Para obtener más información, consulta "[Desencadenamiento de un flujo de trabajo](/actions/using-workflows/triggering-a-workflow)". Para ver una lista completa de eventos, consulta "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".

## Sintaxis de flujos de trabajo

Los flujos de trabajo se definen mediante YAML. Para obtener la referencia completa de la sintaxis de YAML para crear flujos de trabajo, consulta "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)".


{% data reusables.actions.workflow-basic-example-and-explanation %}

Para obtener más información sobre cómo administrar ejecuciones de flujo de trabajo (por ejemplo, volver a ejecutar, cancelar o eliminar una ejecución de flujo de trabajo), consulta "[Administración de ejecuciones de flujo de trabajo](/actions/managing-workflow-runs)".

## Utilizar flujos de trabajo iniciales

{% data reusables.actions.workflow-template-overview %}

Para obtener más información sobre el uso y la creación de flujos de trabajo de inicio, consulta "[Uso de flujos de trabajo de inicio](/actions/using-workflows/using-starter-workflows)" y "[Creación de flujos de trabajo de inicio para la organización](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Características avanzadas de los flujos de trabajo

En esta sección se describen brevemente algunas de las características avanzadas de las {% data variables.product.prodname_actions %} que te ayudan a crear flujos de trabajo más complejos.

### Almacenamiento de secretos

Si los flujos de trabajo usan datos confidenciales como contraseñas o certificados, puede guardarlos en {% data variables.product.prodname_dotcom %} como _secretos_ y luego usarlos en los flujos de trabajo como variables de entorno. Esto significa que podrás crear y compartir flujos de trabajo sin tener que insertar valores confidenciales directamente en el origen de YAML del flujo de trabajo.

Este trabajo de ejemplo muestra cómo hacer referencia a un secreto existente como una variable de entorno y enviarla como parámetro a un comando de ejemplo.

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

Para más información, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

### Crear jobs dependientes

Predeterminadamente, los jobs en tu flujo de trabajo se ejecutan todos en paralelo y al mismo tiempo. Si tienes un trabajo que solo se debe ejecutar después de que se complete otro, puedes usar la palabra clave `needs` para crear esta dependencia. Si se produce un error en uno de los trabajos, se omiten todos los trabajos dependientes; pero si necesitas que los trabajos continúen, puedes definir esto mediante la instrucción condicional `if`.

En este ejemplo, los trabajos `setup`, `build` y `test` ejecutan en serie, y `build` y `test` dependen de la finalización correcta del trabajo que los precede:

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

Para más información, vea "[Definición de trabajos de requisitos previos](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)".

### Uso de una matriz

{% data reusables.actions.jobs.about-matrix-strategy %} La matriz se crea mediante la palabra clave `strategy`, que recibe las opciones de compilación como una matriz. Por ejemplo, esta matriz ejecutará el trabajo varias veces mediante el uso de versiones diferentes de Node.js:

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

Para obtener más información, consulta "[Uso de una matriz para los trabajos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

{% ifversion actions-caching %}
### Almacenar dependencias en caché

Si los trabajos reutilizan regularmente las dependencias, puedes considerar la posibilidad de almacenar en caché estos archivos para ayudar a mejorar el rendimiento. Una vez que se crea el caché, estará disponible para todos los flujos de trabajo en el mismo repositorio.

Este ejemplo se ilustra cómo almacenar el directorio ` ~/.npm` en caché:

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

Para más información, vea "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".
{% endif %}

### Usar bases de datos y contenedores de servicio

Si el trabajo necesita una base de datos o un servicio de caché, puede usar la palabra clave [`services`](/actions/using-jobs/running-jobs-in-a-container) a fin de crear un contenedor efímero para hospedar el servicio; el contenedor resultante estará disponible para todos los pasos de ese trabajo y se quitará cuando se haya completado el trabajo. En este ejemplo se muestra cómo un trabajo puede usar `services` para crear un contenedor `postgres` y, después, usar `node` para conectarse al servicio.

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

Para obtener más información, consulta "[Uso de servicios de contenedor](/actions/using-containerized-services)".

### Utilizar etiquetas para enrutar los flujos de trabajo

Si quieres asegurarte de que un tipo específico de ejecutor procesará tu job, puedes utilizar etiquetas para controlar donde se ejecutan los jobs. Puede asignar etiquetas a un ejecutor autohospedado además de su etiqueta `self-hosted` predeterminada. Entonces, puedes referirte a estas etiquetas en tu flujo de trabajo de YAML, garantizando que el job se enrute de forma predecible.{% ifversion not ghae %}Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen asignadas etiquetas predefinidas.{% endif %}

Este ejemplo muestra como un flujo de trabajo puede utilizar etiquetas para especificar el ejecutor requerido:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Un flujo de trabajo solo se ejecutará en un ejecutor que tenga todas las etiquetas en la `runs-on`. El job irá preferencialmente a un ejecutor auto-hospedado inactivo con las etiquetas especificadas. {% ifversion fpt or ghec %}Si no hay ninguno disponible y existe un ejecutor hospedado en {% data variables.product.prodname_dotcom %} con las etiquetas especificadas, el trabajo irá a un ejecutor hospedado en {% data variables.product.prodname_dotcom %}.{% endif %}

Para obtener más información sobre las etiquetas de ejecutor autohospedado, consulta ["Uso de etiquetas con ejecutores autohospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

{% ifversion fpt or ghec %} Para obtener más información sobre las etiquetas de ejecutor hospedado en {% data variables.product.prodname_dotcom %}, consulta "[Ejecutores admitidos y recursos de hardware](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)".
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilización de flujos de trabajo
{% data reusables.actions.reusable-workflows %} {% endif %}

### Utilizar ambientes

Puedes configurar entornos con reglas de protección y secretos para controlar la ejecución de trabajos en un flujo de trabajo. Cad job en un flujo de trabajo puede referenciar un solo ambiente. Cualquier regla de protección que se configure para el ambiente debe pasar antes de que un job que referencia al ambiente se envíe a un ejecutor. Para más información, vea "[Uso de entornos para la implementación](/actions/deployment/using-environments-for-deployment)".
