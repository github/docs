---
title: Configurar un flujo de trabajo
intro: Puedes crear flujos de trabajo personalizados para automatizar los procesos del ciclo de vida de desarrollo de software de tu proyecto.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-github-action/
  - /articles/creating-a-workflow-with-github-actions/
  - /articles/configuring-a-workflow
  - /github/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /actions/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /actions/creating-workflows/workflow-configuration-options
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

Las personas con permisos de escritura o de administración a un repositorio pueden crear, editar o ver flujos de trabajo.

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los flujos de trabajo

Los flujos de trabajo son procesos automatizados personalizados que puedes configurar en tu repositorio para crear, probar, empaquetar, lanzar o implementar cualquier proyecto en {% data variables.product.prodname_dotcom %}. Con los flujos de trabajo, puedes automatizar el ciclo de vida de tu desarrollo de software con una amplia gama de herramientas y servicios. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_actions %}](/articles/about-github-actions)".

Puedes crear más de un flujo de trabajo en un repositorio. Debes almacenar los flujos de trabajo en el directorio `.github/workflows` en la raíz de su repositorio.

Los flujos de trabajo deben tener al menos un trabajo, y los trabajos deben contener un conjunto de pasos que ejecuten tareas individuales. Los pasos pueden ejecutar comandos o utilizar una acción. Puedes crear tus propias acciones o usar acciones compartidas por la comunidad {% data variables.product.prodname_dotcom %} y personalizarlas según sea necesario.

Puedes configurar un flujo de trabajo para que comience cuando se produce un evento {% data variables.product.prodname_dotcom %}, en un horario o desde un evento externo.

Debes configurar los flujos de trabajo mediante la sintaxis YAML y guardarlos como archivos de flujo de trabajo en tus repositorios. Una vez que hayas creado con éxito un archivo de flujo de trabajo YAML y activado el flujo de trabajo, verás los registros de construcción, los resultados de las pruebas, los artefactos y los estados de cada paso de tu flujo de trabajo. Para obtener más información, consulta "[Administrar una ejecución de flujo de trabajo](/articles/managing-a-workflow-run)".

 ![Imagen de ejecución de flujo de trabajo anotado](/assets/images/help/repository/annotated-workflow.png)

También puedes recibir notificaciones de actualizaciones de estado del flujo de trabajo. Para obtener más información acerca de las opciones de notificación, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".

Los límites de uso se aplican a los flujos de trabajo individuales. Para obtener más información, consulta "[Límites de uso para flujos de trabajo](/articles/workflow-syntax-for-github-actions#usage-limits)".

### Crear un archivo de flujo de trabajo

En un nivel alto, estos son los pasos para agregar un archivo de flujo de trabajo. Puedes encontrar ejemplos de configuración específicos en las secciones a continuación.

1. En la raíz de tu repositorio, crea un directorio denominado `.github/workflows` para almacenar tus archivos de flujo de trabajo.

1. En `.github/workflows`, agrega un archivo `.yml` o `.yaml` a tu flujo de trabajo. Por ejemplo, `.github/workflows/continuous-integration-workflow.yml`.

1. Utiliza la documentación de referencia "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)" para elegir eventos a fin de activar una acción, agregar acciones y personalizar tu flujo de trabajo.

1. Confirma tus cambios en el archivo de flujo de trabajo en la rama donde deseas que se ejecute tu flujo de trabajo.

#### Ejemplo de archivo de flujo de trabajo

{% raw %}
```yaml
nombre: Greet Everyone
# Este flujo de trabajo se desencadena en los envíos al repositorio.
on: [push]

jobs:
  build:
    # Job name is Greeting
    name: Greeting
    # This job runs on Linux
    runs-on: ubuntu-latest
    steps:
      # This step uses GitHub's hello-world-javascript-action: https://github.com/actions/hello-world-javascript-action
      - name: Hello world
        uses: actions/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
        id: hello
      # This step prints an output (time) from the previous step's action.
      - name: Echo the greeting's time
        run: echo 'The time was ${{ steps.hello.outputs.time }}.'
```
{% endraw %}

{% data reusables.github-actions.invalid-workflow-files %}

### Activar un flujo de trabajo con eventos

Puedes configurar un flujo de trabajo para comenzar una vez:
- Se produce un evento en {% data variables.product.prodname_dotcom %}, como cuando alguien envía una confirmación a un repositorio o cuando se crea una propuesta o una solicitud de extracción
- Comienza un evento programado.
- Se produce un evento externo.

Para activar un flujo de trabajo después de que ocurra un evento en {% data variables.product.prodname_dotcom %}, agrega `on:` y un valor de evento después del nombre del flujo de trabajo. Por ejemplo, este flujo de trabajo se activa cuando los cambios se envían a cualquier rama en el repositorio.

```yaml
name: descriptive-workflow-name
on: push
```

Para programar un flujo de trabajo, puedes usar la sintaxis cron POSIX en tu archivo de flujo de trabajo. El intervalo más corto en el que puedes ejecutar flujos de trabajo programados es una vez cada 5 minutos. Por ejemplo, este flujo de trabajo se activa cada hora.

```yaml
on:
  schedule:
    - cron: '0 * * * *'
```

#### Ejecutar un flujo de trabajo manualmente

Para ejecutar un flujo de trabajo manualmente, primero debes configurarlo para que utilice el evento `workflow_dispatch`. Puedes configurar las propiedades de entrada definidas conforme a tu personalización, los valores de entrada predeterminados, y las entradas requeridas, directamente en tu flujo de trabajo. Cuando se ejecuta el flujod e trabajo, puedes acceder a los valores de entrada en el contexto de `github.event.inputs`. Para obtener más información, consulta la sección "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows/#workflow_dispatch)" y "[Sintaxis de contexto y expresión para {% data variables.product.prodname_dotcom %} Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

Este ejemplo define las entradas `name` y `home` y las imprime utilizando los contextos `github.event.inputs.name` y `github.event.inputs.home`. Si no se proporciona un `name`, se imprimirá el valor predeterminado 'Mona the Octocat'.

{% raw %}
```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo "Hello ${{ github.event.inputs.name }}!"
        echo "- in ${{ github.event.inputs.home }}!"
        echo "- in ${{ github.event.inputs.home }}!"
```
{% endraw %}

Puedes activar el evento de `workflow_dispatch` desde la pestaña de Acciones en {% data variables.product.prodname_dotcom %} o utilizar la API de REST. Puedes activar el evento de `workflow_dispatch` desde la pestaña de Acciones en {% data variables.product.prodname_dotcom %} o utilizar la API de REST. Para obtener más información acerca de cómo utilizar la API de REST, consulta la sección [Crear un evento de envío de flujo de trabajo](/rest/reference/actions/#create-a-workflow-dispatch-event)". Si omites las entradas, se utilizarán los valores predeterminados que se hayan definido en el flujo de trabajo.

Para activar el evento `workflow_dispatch` en {% data variables.product.prodname_dotcom %}, tu flujo de trabajo deberá estar en la rama predeterminada. Sigue estos pasos para activar una ejecución de flujo de trabajo manualmente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic ene l flujo de trabajo que quieras ejecutar. ![flujo de trabajo de la selección en las acciones](/assets/images/actions-select-workflow.png)
1. Sobre la lista de ejecuciones de flujo de trabajo, selecciona **Ejecutar flujo de trabajo**. ![envío del flujo de trabajo de las acciónes](/assets/images/actions-workflow-dispatch.png)
1. Selecciona la rama en donde el flujo de trabajo se ejecutará y teclea los parámetros de entrada que éste utiliza. Da clic en **Ejecutar flujo de trabajo**. ![flujo de trabajo de la ejecución manual de las acciones](/assets/images/actions-manually-run-workflow.png)

#### Activar flujos de trabajo desde eventos externos

Para activar un flujo de trabajo después de que se produce un evento externo, puedes invocar un evento de webhook `repository_dispatch` llamando al punto final API REST "Create a repository dispatch event" (Crear un evento de despacho de repositorio). Para obtener más información, consulta la sección "[Crear un evento de envío de repositorio](/v3/repos/#create-a-repository-dispatch-event)".

Para obtener más información y ejemplos, consulta "[Eventos que desencadenan flujos de trabajo](/articles/events-that-trigger-workflows#webhook-events)".

### Filtrar por ramas, etiquetas y rutas específicas

Puedes configurar tu flujo de trabajo para que se ejecute solo en ciertas ramas.

Por ejemplo, este flujo de trabajo se ejecuta cuando una subida que incluye archivos en el directorio `test` se realiza en la rama `master` o sube a la etiqueta `v1`.

```yaml
on:
  push:
    branches:
      - master
    tags:
      - v1
    # file paths to consider in the event. Opcional; por defecto a todos.
    paths:
      - 'test/*'
```

Para obtener más información acerca de la sintaxis de filtro de ramas, de etiquetas y de rutas, consulta "[`on.<push|pull_request>.<branches|tags>`](/articles/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)" y "[`on.<push|pull_request>.paths`](/articles/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

### Elegir un ejecutor

Puedes ejecutar flujos de trabajo en ejecutores alojados en {% data variables.product.prodname_dotcom %} o ejecutores autoalojados. Los trabajos se pueden ejecutar directamente en la máquina o en un contenedor Docker.

Puedes especificar el ejecutor para cada trabajo en un flujo de trabajo usando `runs-on`. Para obtener más información acerca de `runs-on`, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

{% data reusables.actions.enterprise-github-hosted-runners %}

#### Usar un ejecutor alojado en {% data variables.product.prodname_dotcom %}

Puedes seleccionar entre diferentes tipos y versiones de máquinas host virtuales, incluidos Linux, Windows y macOS. Cada trabajo en un flujo de trabajo se ejecuta en una nueva instancia del entorno virtual y los pasos dentro de un trabajo pueden compartir información usando el sistema de archivos. Para obtener más información, consulta "[Entornos virtuales para ejecutores alojados en {% data variables.product.prodname_actions %}](/articles/virtual-environments-for-github-actions)."

Por ejemplo, puedes usar `ubuntu-latest` para especificar la última versión de un ejecutor Ubuntu alojado en {% data variables.product.prodname_dotcom %}.

```yaml
runs-on: ubuntu-latest
```

#### Usar un ejecutor autoalojado

Puedes utilizar etiquetas para rutear los jobs a tipos diferentes de ejecutores auto-hospedados. Todos los ejecutores autoalojados obtienen la etiqueta `autoalojado` y cada ejecutor autoalojado tiene etiquetas para su sistema operativo y la arquitectura del sistema. Para obtener más información, consulta "[Usar ejecutores autoalojados en un flujo de trabajo](/actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

Por ejemplo, si agregaste un ejecutor autoalojado con un sistema operativo Linux y una arquitectura ARM32, puedes seleccionar ese ejecutor mediante las etiquetas `self-hosted`, `Linux` y `ARM32`.

```yaml
runs-on: [autoalojado, linux, ARM32]
```

### Configurar una matriz de construcción

Para probar en múltiples sistemas operativos, plataformas y versiones de idiomas al mismo tiempo, puedes configurar una matriz de construcción.

Una matriz de construcción te permite probar tu código con diferentes configuraciones de software y de sistema operativo. Por ejemplo, un flujo de trabajo puede ejecutar un trabajo para más de una versión compatible de idioma, sistema operativo o herramienta. Para cada configuración, se ejecuta una copia del trabajo y se informa un estado.

Puedes especificar una matriz de construcción en tu archivo de flujo de trabajo con una matriz que enumere las opciones de configuración en `estrategia:`. Por ejemplo, esta matriz de construcción ejecutará un trabajo con diferentes versiones de Node.js y Ubuntu, un sistema operativo Linux.

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-16.04, ubuntu-18.04]
    node: [6, 8, 10]
```
{% endraw %}

Para obtener más información, consulta [Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

### Usar la acción de control

Existen varias acciones estándar que puedes utilizar en tu flujo de trabajo. La acción de control es una acción estándar que debes incluir en tu flujo de trabajo antes que otras acciones cuando:
- Tu flujo de trabajo requiere una copia del código de tu repositorio, como cuando estás construyendo y probando tu repositorio o usando una integración continua.
- Hay al menos una acción en tu flujo de trabajo que se define en el mismo repositorio. Para obtener más información, consulta "[Hacer referencia a acciones en tu flujo de trabajo](#referencing-actions-in-your-workflow)".

Para usar la acción de control estándar sin más especificaciones, incluye este paso:
```yaml
- uses: actions/checkout@v2
```
Si usas `v2` en este ejemplo te aseguras de estar usando una versión estable de la acción de control. Para obtener más información, consulta [la acción de control](https://github.com/jekyll/jemoji).

### Elegir el tipo de acciones para tu flujo de trabajo

Existen diferentes tipos de acciones que puedes usar en tu flujo de trabajo para satisfacer las necesidades de tu proyecto:
- Acciones del contenedor Docker
- Acciones de JavaScript
- Acciones compuestas de los pasos de ejecución

Para obtener más información, consulta "[Acerca de acciones](/articles/about-teams/#team-pages)."

Cuando elijas el tipo de acciones para utilizar en tu flujo de trabajo, te recomendamos que explores las acciones existentes en los repositorios públicos o en Docker Hub y puedas personalizar estas acciones para tu proyecto.

Puedes explorar y usar acciones creadas por {% data variables.product.prodname_dotcom %} en la organización [github.com/actions](https://github.com/actions). Para visitar Docker Hub, consulta "[Docker Hub](https://www.docker.com/products/docker-hub)" en el sitio de Docker.

### Hacer referencia a acciones en tu flujo de trabajo

Para hacer referencia a acciones en tu archivo de flujo de trabajo con la sintaxis correcta, debes tener en cuentas dónde se define la acción.

Los flujos de trabajo pueden usar acciones definidas en:
- Un repositorio público
- El mismo repositorio donde tu archivo de flujo de trabajo hace referencia a las acciones
- Una imagen del contenedor Docker publicada en Docker Hub

Para usar una acción definida en un repositorio privado, tanto el archivo de flujo de trabajo como la acción deben estar en el mismo repositorio. Tu flujo de trabajo no puede utilizar acciones definidas en otros repositorios privados, incluso si el otro repositorio privado está en la misma organización.

Para mantener estable tu flujo de trabajo, incluso cuando se actualiza una acción, puedes hacer referencia a la versión de la acción que estás utilizando y especificar un número de etiqueta de Git ref o Docker en tu archivo de flujo de trabajo. Para ver ejemplos, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.dependabot.version-updates-for-actions %}
{% endif %}

Para obtener opciones de configuración más detalladas, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

#### Hacer referencia a una acción desde un repositorio público

Si una acción se define en un repositorio público, debes hacer referencia a la acción utilizando la sintaxis `{owner}/{repo}@{ref}` o `{owner}/{repo}/{path}@{ref}`.

```yaml
jobs:
  my_first_job:
    name: My Job Name
      steps:
        - uses: actions/setup-node@v1
          with:
            node-version: 10.x
```

Para ver un ejemplo de flujo de trabajo completo, consulta el repositorio de plantillas del [nodo de configuración](https://github.com/actions/setup-node).

#### Hacer referencia a una acción en el mismo repositorio en el que un archivo de flujo de trabajo usa la acción

Si se define una acción en el mismo repositorio en el que tu archivo de flujo de trabajo usa la acción, puedes hacer referencia a la acción con ‌`{owner}/{repo}@{ref}` o la sintaxis `./path/to/dir` en tu archivo de flujo de trabajo.

Ejemplo de estructura de archivo de repositorio:

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Ejemplo de archivo de flujo de trabajo:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # Este paso revisa una copia de tu repositorio.
      - uses: actions/checkout@v2
    # Este paso hace referencia al directorio que contiene la acción.
      - uses: ./.github/actions/hello-world-action
```

#### Hacer referencia a un contenedor en Docker Hub

Si se define una acción en una imagen de contenedor Docker publicada en Docker Hub, debes hacer referencia a la acción con la sintaxis `docker://{image}:{tag}` en tu archivo de flujo de trabajo. Para proteger tu código y tus datos, te recomendamos que verifiques la integridad de la imagen del contenedor Docker de Docker Hub antes de usarla en tu flujo de trabajo.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

Para ver algunos ejemplos de acciones de Docker, consulta el [Flujo de trabajo Docker-image.yml](https://github.com/actions/starter-workflows/blob/master/ci/docker-image.yml) y "[Crear una acción de contenedor Docker](/articles/creating-a-docker-container-action)".

Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".

### Agregar una credencial de estado de flujo de trabajo a tu repositorio

{% data reusables.repositories.actions-workflow-status-badge-into %}

Si tu flujo de trabajo usa la palabra clave `Nombre`, debes hacer referencia al flujo de trabajo por nombre. Si el nombre de tu flujo de trabajo contiene un espacio en blanco, deberás reemplazar el espacio con la cadena que codifica la URL `%20`. Para obtener más información sobre la palabra clave `name` (nombre), consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)".

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

Como alternativa, si tu flujo de trabajo no tiene un `name`, debes hacer referencia al archivo de flujo de trabajo usando la ruta del archivo en relación con el directorio raíz del repositorio.

{% note %}

**Nota:** Hacer referencia al archivo de flujo de trabajo mediante la ruta del archivo no funciona si el flujo de trabajo tiene un `name`.

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_FILE_PATH>/badge.svg
```

#### Ejemplo de cómo usar un nombre de flujo de trabajo

Este ejemplo de Markdown agrega una credencial de estado para un flujo de trabajo con el nombre "Greet Everyone". El `PROPIETARIO` del repositorio es la organización `actions` y el nombre del `REPOSITORIO` es `hello-world`.

```
![example workflow name](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

#### Ejemplo de cómo usar una ruta de archivo de flujo de trabajo

Este ejemplo de Markdown agrega una credencial de estado para un flujo de trabajo con la ruta de archivo `.github/workflows/main.yml`. El `PROPIETARIO` del repositorio es la organización `actions` y el nombre del `REPOSITORIO` es `hello-world`.

```
![example workflow file path](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

#### Ejemplo con el parámetro `branch`

Este ejemplo de Markdown añade un distintivo de estado para una rama con el nombre `feature-1`.

```
![example branch parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

#### Ejemplo con el parámetro `event`

Este ejemplo de Markdown agrega un distintivo que muestra el estado de las ejecuciones de flujo de trabajo activadas por el evento `pull_request`.

```
![example event parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Administrar la facturación para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
