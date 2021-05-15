---
title: Sintaxis de flujo de trabajo para acciones de GitHub
shortTitle: Sintaxis de flujos de trabajo
intro: Un flujo de trabajo es un proceso automatizado configurable formado por uno o más trabajos. Debes crear un archivo YAML para definir tu configuración de flujo de trabajo.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de la sintaxis de YAML para flujos de trabajo

Los archivos de flujo de trabajo usan la sintaxis YAML y deben tener una extensión de archivo `.yml` o `.yaml`. Si eres nuevo en YAML y deseas conocer más, consulta "[Aprender YAML en cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

Debes almacenar los archivos de flujos de trabajo en el directorio `.github/workflows` en tu repositorio.

### Límites de uso

{% data reusables.github-actions.github-actions-usage-limits %}

### **`name (nombre)`**

El nombre de tu flujo de trabajo. {% data variables.product.prodname_dotcom %} muestra los nombres de tus flujos de trabajo en la página de acciones de tu repositorio. Si omites `nombre`, {% data variables.product.prodname_dotcom %} lo establece en la ruta del archivo de flujo de trabajo en relación con la raíz del repositorio.

### **`on`**

**Obligatorio** El nombre del evento {% data variables.product.prodname_dotcom %} que activa el flujo de trabajo. Puedes proporcionar una única `cadena` de eventos, `matriz` de eventos, `matriz` de `tipos` de eventos o `mapa` de configuración de eventos que programe un flujo de trabajo o restrinja la ejecución de un flujo de trabajo para archivos, etiquetas o cambios de rama específicos. Para obtener una lista de eventos disponibles, consulta "[Eventos que desencadenan flujos de trabajo](/articles/events-that-trigger-workflows)".

{% data reusables.github-actions.actions-on-examples %}

### **`on.<event_name>.types`**

Selecciona los tipos de actividad que desencadenarán una ejecución de flujo de trabajo. La mayoría de los eventos GitHub son desencadenados por más de un tipo de actividad.  Por ejemplo, el evento para el recurso release (lanzamiento) se activa cuando se `publica`, `se cancela la publicación`, `se crea`, `edita`, `elimina` o `lanza previamente` una publicación. La palabra clave `types` (tipos) te permite reducir la actividad que hace que se ejecute el flujo de trabajo. Cuando solo un tipo de actividad activa el evento webhook, la palabra clave `types` (tipos) es innecesaria.

Puedes usar una matriz de `tipos` de eventos. Para obtener más información acerca de cada evento y sus tipos de actividad, consulta "[Eventos que desencadenan flujos de trabajo](/articles/events-that-trigger-workflows#webhook-events)".

```yaml
# Activa el flujo de trabajo en la actividad de la solicitud de extracción
on:
  release:
    # Solo usa la palabra clave de tipos para reducir los tipos de actividad que activarán tus flujos de trabajo.
    types: [published, created, edited]
```

### **`on.<push|pull_request>.<branches|tags>`**

Cuando uses los eventos `push` y `pull_request` debes configurar un flujo de trabajo para ejecutarlo en ramas o etiquetas específicas. Para un evento `pull_request`, solo se evalúan las ramas y las etiquetas en la base. Si defines solo `etiquetas` o solo `ramas`, el flujo de trabajo no se ejecutará para los eventos que afecten a la ref de Git indefinida.

Las palabras clave `branches`, `branches-ignore`, `tags` y `tags-ignore` aceptan patrones globales que usan los caracteres comodines `*` y `**` para encontrar más de un nombre de rama o etiqueta. Para obtener más información, consulta "[Hoja de referencia de patrones de filtro](#filter-pattern-cheat-sheet)".

#### Ejemplo que incluye ramas y etiquetas

Los patrones definidos en `branches` y `tags` se evalúan con el nombre de ref de Git. Por ejemplo, al definir el patrón `mona/octocat` en `branches`, se encontrará la ref de Git `refs/heads/mona/octocat`. El patrón `releases/**` encontrará la ref de Git `refs/heads/releases/10`.

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      # Push events on master branch
      - master
      # Push events to branches matching refs/heads/mona/octocat
      - 'mona/octocat'
      # Push events to branches matching refs/heads/releases/10
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v1             # Push events to v1 tag
      - v1.*           # Push events to v1.0, v1.1, and v1.9 tags
```

#### Ejemplo de ignorar ramas y etiquetas

Cada vez que un patrón coincida con el patrón `branches-ignore` o `tags-ignore`, no se ejecutará el flujo de trabajo. Los patrones definidos en `branches-ignore` y `tags-ignore` se evalúan con el nombre de ref de Git. Por ejemplo, al definir el patrón `mona/octocat` en `branches`, se encontrará la ref de Git `refs/heads/mona/octocat`. El patrón `releases/**-alpha` en `branches` encontrará la ref de Git `refs/releases/beta/3-alpha`.

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:
      # Push events to branches matching refs/heads/mona/octocat
      - 'mona/octocat'
      # Push events to branches matching refs/heads/releases/beta/3-alpha
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:
      - v1.*           # Push events to tags v1.0, v1.1, and v1.9
```

#### Excluir ramas y etiquetas

Puedes usar dos tipos de filtros para evitar que un flujo de trabajo se ejecute en las subidas y las solicitudes de extracción a las etiquetas y las ramas.
- `branches` o `branches-ignore`: no puedes usar ambos filtros `branches` y `branches-ignore` para el mismo evento de un flujo de trabajo. Usa el filtro `branches` cuando debas filtrar ramas de coincidencias positivas y para excluir ramas. Usa el filtro `branches-ignore` cuando solo debas excluir nombres de ramas.
- `tags` o `tags-ignore`: no puedes usar ambos filtros `tags` y `tags-ignore` para el mismo evento de un flujo de trabajo. Usa el filtro `tags` cuando debas filtrar etiquetas de coincidencias positivas y para excluir etiquetas. Usa el filtro `tags-ignore` cuando solo debas excluir nombres de etiquetas.

#### Ejemplo de uso de patrones positivos y negativos

Puedes excluir `etiquetas` y `ramas` usando el caracter `!`. El orden en que defines los patrones importa.
  - Un patrón negativo de coincidencia (con prefijo `!`) luego de una coincidencia positiva excluirá la ref de Git.
  - Un patrón positivo de coincidencia luego de una coincidencia negativa volverá a incluir la ref de Git.

El siguiente flujo de trabajo se ejecutará en las subidas a `releases/10` o `releases/beta/mona`, pero no en `releases/10-alpha` o `releases/beta/3-alpha` porque el patrón negativo `!releases/**-alpha` le sigue al patrón positivo.

```yaml
on:
  push:
    branches:    
    - 'releases/**'
    - '!releases/**-alpha'
```

### **`on.<push|pull_request>.paths`**

Cuando uses los eventos `push` y `pull_request`, puedes configurar que se ejecute un flujo de trabajo cuando al menos un archivo no coincida con `paths-ignore` o al menos uno de los archivos modificados coincida con las `rutas` configuradas. Los filtros de ruta no se evalúan para las subidas a etiquetas.

Las palabras clave `paths-ignore` y `paths` aceptan los patrones globales que usan los caracteres comodines `*` y `**` para encontrar más de un nombre de ruta. Para obtener más información, consulta "[Hoja de referencia de patrones de filtro](#filter-pattern-cheat-sheet)".

#### Ejemplo de ignorar rutas

Cada vez que un nombre de ruta coincida con `paths-ignore`, no se ejecutará el flujo de trabajo. {% data variables.product.prodname_dotcom %} evalúa los patrones definidos en `paths-ignore` para compararlos con el nombre de ruta. Un flujo de trabajo con el siguiente filtro de ruta solo se ejecutará en los eventos de `subida` que incluyan al menos un archivo externo al directorio `docs` en la raíz del repositorio.

```yaml
on:
  push:
    paths-ignore:
    - 'docs/**'
```

#### Ejemplo de incluir rutas

Si al menos una ruta coincide con un patrón del filtro de `rutas`, se ejecuta el flujo de trabajo. Para desencadenar una compilación cada vez que subes un archivo JavaScript, puedes usar un patrón comodín.

```yaml
on:
  push:
    paths:
    - '**.js'
```

#### Excluir rutas

Puedes excluir rutas usando dos tipos de filtros. No puedes usar ambos filtros para el mismo evento de un flujo de trabajo.
- `paths-ignore`: usa el filtro `paths-ignore` cuando solo debas excluir nombres de ruta.
- `paths`: usa el filtro `paths` cuando debas filtrar rutas de coincidencias positivas y excluir rutas.

#### Ejemplo de uso de patrones positivos y negativos

Puedes excluir `rutas` usando el caracter `!`. El orden en que defines los patrones importa:
  - Una coincidencia de patrón negativo (con prefijo `!`) luego de una coincidencia positiva excluirá la ruta.
  - Un patrón de coincidencia positiva luego de una coincidencia negativa excluirá nuevamente la ruta.

Este ejemplo se ejecuta cada vez que el evento de `subida` incluye un archivo en el directorio `sub-project` o sus subdirectorios, a menos que el archivo esté en el directorio `sub-project/docs`. Por ejemplo, una subida que haya cambiado `sub-project/index.js` o `sub-project/src/index.js` desencadenará una ejecución de flujo de trabajo, pero una subida que cambie solo `sub-project/docs/readme.md` no lo hará.

```yaml
on:
  push:
    paths:
    - 'sub-project/**'
    - '!sub-project/docs/**'
```

#### Comparaciones de diferencias de Git

{% note %}

**Nota:** Si subes más de 1.000 confirmaciones, o si {% data variables.product.prodname_dotcom %} no genera la diferencia debido a una interrupción (diferencias que son diferencias demasiado grandes), siempre se ejecutará el flujo de trabajo.

{% endnote %}

El filtro determina si un flujo de trabajo se debe ejecutar al evaluar los archivos modificados y al ejecutarlos comparándolos con la lista de `paths-ignore` o `paths`. Si no hay archivos modificados, no se ejecutará el flujo de trabajo.

{% data variables.product.prodname_dotcom %} genera la lista de archivos modificados usando diferencias de dos puntos para las subidas y de tres puntos para las solicitudes de extracción:
- **Solicitudes de extracción:** las diferencias de tres puntos son una comparación entre la versión más reciente de la rama de tema y la confirmación, cuando la rama de tema se sincronizó por última vez con la rama base.
- **Subidas a ramas existentes:** una diferencia de dos puntos compara las SHA de encabezado y de base directamente entre sí.
- **Subidas a ramas nuevas:** una diferencia de dos puntos comparada con el padre del antepasado de la confirmación más profunda subida.

Para obtener más información, consulta "[Acerca de comparar ramas en las solicitudes de extracción](/articles/about-comparing-branches-in-pull-requests)".

### **`on.schedule`**

{% data reusables.repositories.actions-scheduled-workflow-example %}

Para obtener más información acerca de la sintaxis cron, consulta "[Eventos que activan flujos de trabajo](/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events)."

### **`env`**

Un `mapa` de las variables de entorno que están disponibles para todas las tareas y los pasos del flujo de trabajo. También puedes configurar variables de entorno que estén solo disponibles para una tarea o paso. Para obtener más información, consulta [`jobs.<job_id>.env`](#jobsjob_idenv) y [`jobs.<job_id>.steps.env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

#### Ejemplo

```yaml
env:
  SERVER: production
```

### **`defaults`**

Un `map` de configuración predeterminada que se aplicará a todos los jobs en el flujo de trabajo. También puedes configurar los ajustes predeterminados que solo estén disponibles para un job. Para obtener más información, consulta la sección [`jobs.<job_id>.defaults`](#jobsjob_iddefaults).

{% data reusables.github-actions.defaults-override %}

### **`defaults.run`**

Puedes proporcionar opciones predeterminadas de `shell` y `working-directory` para todos los pasos de [`run`](#jobsjob_idstepsrun) en un flujo de trabajo. También puedes configurar ajustes predeterminados para `run` que solo estén disponibles para un job. Para obtener más información, consulta [`jobs.<job_id>.defaults.run`](#jobsjob_iddefaultsrun). No podrás utilizar contextos o expresiones en esta palabra clave.

{% data reusables.github-actions.defaults-override %}

#### Ejemplo

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```

### **`Trabajos`**

Una ejecución de flujo de trabajo está compuesta por uno o más trabajos. De forma predeterminada, los trabajos se ejecutan en paralelo. Para ejecutar trabajos de manera secuencial, puedes definir dependencias en otros trabajos utilizando la palabra clave `jobs.<job_id>.needs`.

Cada trabajo se ejecuta en un entorno especificado por `runs-on`.

Puedes ejecutar una cantidad ilimitada de trabajos siempre que estés dentro de los límites de uso del flujo de trabajo. Para obtener más información, consulta "[Límites de uso](#usage-limits)".

Si necesitas encontrar el identificador único de un trabajo que se ejecuta en una ejecución de flujo de trabajo, puedes usar el API {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Jobs de los Flujos de Trabajo](/v3/actions/workflow-jobs)".

### **`jobs.<job_id>`**

Cada trabajo debe tener una identificación para asociarse con el trabajo. La clave `job_id` es una cadena y su valor es un mapa de los datos de configuración del trabajo. Debes reemplazar `<job_id>` con una cadena que sea exclusiva del objeto `jobs`. El `<job_id>` debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

#### Ejemplo

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

### **`jobs.<job_id>.name`**

El nombre del trabajo que se muestra en {% data variables.product.prodname_dotcom %}.

### **`jobs.<job_id>.needs`**

Identifica los trabajos que se deben completar con éxito antes de que se ejecute este trabajo. Puede ser una cadena o matriz de cadenas. Si un trabajo falla, todos los trabajos que lo necesiten estarán omitidos a menos que los trabajos usen una declaración condicional que haga que el trabajo continúe.

#### Ejemplo

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

En este ejemplo, `job1` debe completarse con éxito antes de que `job2` comience, y `job3` espera a que`job1` y `job2` se completen.

En este ejemplo, los trabajos se ejecutan de manera secuencial:

1. `job1`
2. `job2`
3. `job3`

### **`jobs.<job_id>.runs-on`**

**Obligatorio** El tipo de máquina en la que se ejecuta el trabajo. La máquina puede ser un ejecutor alojado {% data variables.product.prodname_dotcom %} o un ejecutor autoalojado.

{% data reusables.actions.enterprise-github-hosted-runners %}

#### Ejecutores alojados {% data variables.product.prodname_dotcom %}

Si usas un ejecutor alojado {% data variables.product.prodname_dotcom %}, cada trabajo se ejecuta en una nueva instancia de un entorno virtual especificado por `runs-on`.

Los tipos de ejecutores alojados {% data variables.product.prodname_dotcom %} disponibles son:

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}

##### **Ejemplo**

```yaml
runs-on: ubuntu-latest
```

Para obtener más información, consulta "[Entornos virtuales para ejecutores alojados de {% data variables.product.prodname_dotcom %}](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".

#### Ejecutores autoalojados

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

##### **Ejemplo**

```yaml
runs-on: [self-hosted, linux]
```

Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" y "[Usar ejecutores autoalojados en un flujo de trabajo](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)".

### **`jobs.<jobs_id>.outputs`**

Un `map` de salidas para un job. Las salidas de un job se encuentran disponibles para todos los jobs descendentes que dependan de este job. Para obtener más información sobre la definición de dependencias, consulta [`jobs.<job_id>.needs`](#jobsjob_idneeds).

Las salidas de un job son secuencias, y las salidas de un job que contienen expresiones se evalúan en el ejecutor al final de cada job. Las salidas que contienen secretos se redactan en el ejecutor y no se envían a {% data variables.product.prodname_actions %}.

Para utilizar salidas de jobs en un job dependiente, puedes utilizar el contexto `needs`. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#needs-context)."

#### **Ejemplo**

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
    - id: step1
      run: echo "::set-output name=test::hello"
    - id: step2
      run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
    - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}

### **`jobs.<job_id>.env`**

Un `mapa` de las variables de entorno que están disponibles para todos los pasos de la tarea. También puedes establecer las variables de entorno para todo el flujo de trabajo o para un paso en particular. Para obtener más información, consulta [`env`](#env) y [`jobs.<job_id>.steps.env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

#### **Ejemplo**

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

### **`jobs.<job_id>.defaults`**

Un `map` de configuración predeterminada que se aplicará a todos los pasos del job. También puedes configurar ajustes predeterminados para todo el flujo de trabajo. Para obtener más información, consulta [`defaults`](#defaults).

{% data reusables.github-actions.defaults-override %}

### **`jobs.<job_id>.defaults.run`**

Proporciona `shell` y `working-directory` predeterminados a todos los pasos de `run` en el job. No se permiten las expresiones ni contexto en esta sección.

Puedes proporcionar opciones predeterminadas de `shell` y `working-directory` para todos los pasos de [`run`](#jobsjob_idstepsrun) en un job. También puedes configurar ajustes predeterminados para `run` para todo el flujo de trabajo. Para obtener más información, consulta [`jobs.defaults.run`](#defaultsrun). No podrás utilizar contextos o expresiones en esta palabra clave.

{% data reusables.github-actions.defaults-override %}

#### Ejemplo

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```

### **`jobs.<job_id>.if`**

Puedes usar el condicional `if` para impedir que se ejecute una tarea si no se cumple una condición. Puedes usar cualquier contexto y expresión admitidos para crear un condicional.

{% data reusables.github-actions.expression-syntax-if %} Para obtener más información, consulta la sección "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

### **`jobs.<job_id>.steps`**

Un trabajo contiene una secuencia de tareas llamadas `pasos`. Los pasos pueden ejecutar comandos, tareas de configuración o una acción en tu repositorio, un repositorio público o una acción publicada en un registro de Docker. Not all steps run actions, but all actions run as a step. Cada paso se ejecuta en su propio proceso en el entorno del ejecutor y tiene acceso al espacio de trabajo y al sistema de archivos. Debido a que los pasos se ejecutan en su propio proceso, los cambios en las variables de entorno no se conservan entre los pasos. {% data variables.product.prodname_dotcom %} proporciona pasos integrados para configurar y completar un trabajo.

Puedes ejecutar un número de pasos ilimitado siempre que estés dentro de los límites de uso del flujo de trabajo. Para obtener más información, consulta "[Límites de uso](#usage-limits)".

#### Ejemplo

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
    - name: Print a greeting
      env:
        MY_VAR: Hi there! My name is
        FIRST_NAME: Mona
        MIDDLE_NAME: The
        LAST_NAME: Octocat
      run: |
        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

#### **`jobs.<job_id>.steps.id`**

Un identificador único para el paso. Puede usar el `id` para hacer referencia al paso en contextos. Para obtener más información, consulta "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

#### **`jobs.<job_id>.steps.if`**

Puedes usar el condiciona `if` para impedir que se ejecute un paso si no se cumple una condición. Puedes usar cualquier contexto y expresión admitidos para crear un condicional.

{% data reusables.github-actions.expression-syntax-if %} Para obtener más información, consulta la sección "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

##### Ejemplos usando contextos

 Este paso solo se ejecuta cuando el tipo de evento es una `pull_request` y la acción del evento está `sin asignar`.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

##### Ejemplo usando funciones de verificación de estado

El `paso mi copia de seguridad` solo se ejecuta cuando se produce un error en el paso anterior de un trabajo. Para obtener más información, consulta "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)".

```yaml
steps:
  - name: My first step
    uses: monacorp/action-name@master
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@master
```

#### **`jobs.<job_id>.steps.name`**

Un nombre para que tu paso se muestre en {% data variables.product.prodname_dotcom %}.

#### **`jobs.<job_id>.steps.uses`**

Selecciona una acción para ejecutar como parte de un paso en tu trabajo. Una acción es una unidad de código reutilizable. Puedes usar una acción definida en el mismo repositorio que el flujo de trabajo, un repositorio público o en una [imagen del contenedor Docker publicada](https://hub.docker.com/).

Te recomendamos encarecidamente que incluyas la versión de la acción que estás utilizando y especifiques un número de etiqueta de Git ref, SHA o Docker. Si no especificas una versión, podrías interrumpir tus flujos de trabajo o provocar un comportamiento inesperado cuando el propietario de la acción publique una actualización.
- El uso del SHA de confirmación de una versión de acción lanzada es lo más seguro para la estabilidad y la seguridad.
- Usar la versión de acción principal específica te permite recibir correcciones críticas y parches de seguridad y al mismo tiempo mantener la compatibilidad. También asegura que tu flujo de trabajo aún debería funcionar.
- Usar la rama `principal` de una acción puede ser conveniente, pero si alguien lanza una nueva versión principal con un cambio importante, tu flujo de trabajo podría romperse.

Algunas acciones requieren entradas que se deben establecer usando la palabra clave [`with`](#jobsjob_idstepswith) (con). Revisa el archivo README de la acción para determinar las entradas requeridas.

Las acciones son archivos JavaScript o contenedores Docker. Si la acción que estás usando es un contenedor Docker, debes ejecutar el trabajo en un entorno Linux. Para obtener más detalles, consulta [`runs-on`](#jobsjob_idruns-on).

##### Ejemplo usando acciones versionadas

```yaml
steps:    
  # Reference a specific commit
  - uses: actions/setup-node@74bc508
  # Reference the major version of a release
  - uses: actions/setup-node@v1
  # Reference a minor version of a release
  - uses: actions/setup-node@v1.2
  # Reference a branch
  - uses: actions/setup-node@master
```

##### Ejemplo usando una acción pública

`{owner}/{repo}@{ref}`

Puedes usar ramas, ref o SHA específicos en un repositorio público {% data variables.product.prodname_dotcom %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the master branch of a public repository
        uses: actions/heroku@master
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

##### Ejemplo usando una acción pública en un subdirectorio

`{owner}/{repo}/{path}@{ref}`

Un subdirectorio en un repositorio público de {% data variables.product.prodname_dotcom %} en una rama específica, ref o SHA.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@master
```

##### Ejemplo usando la acción en el mismo repositorio que el flujo de trabajo

`./path/to/dir`

La ruta al directorio que contiene la acción en el repositorio de tu flujo de trabajo. Debes revisar tu repositorio antes de usar la acción.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

##### Ejemplo usando una acción Docker Hub

`docker://{image}:{tag}`

Una imagen de Docker publicada en [Docker Hub](https://hub.docker.com/).

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

##### Ejemplo usando una acción de registro público de Docker

`docker://{host}/{image}:{tag}`

Una imagen de Docker en un registro público.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### **`jobs.<job_id>.steps.run`**

Ejecuta programas de la línea de comandos usando el shell del sistema operativo. Si no proporcionas un `nombre`, el paso de establecimiento de nombre se completará por defecto con el texto especificado en el comando `run`.

Por defecto, los comandos se ejecutan utilizando shells sin inicio de sesión. Puedes elegir un shell diferente y personalizar el shell utilizado para ejecutar los comandos. Para obtener más información, consulta "[Usar un shell específico](#using-a-specific-shell)".

Cada palabra clave `run` representa un nuevo proceso y shell en el entorno del ejecutor. Cuando proporcionas comandos de varias líneas, cada línea se ejecuta en el mismo shell. Por ejemplo:

* Comando de una sola línea:

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* Comando de varias líneas:

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

Usando la palabra clave `working-directory`, puedes especificar el directorio de trabajo de dónde ejecutar el comando.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

##### Uso de un shell específico

Puedes anular los parámetros predeterminados del shell en el sistema operativo del ejecutor utilizando la palabra clave `shell`. Puedes usar palabras clave incorporadas de `shell` keywords, o puedes definir un conjunto personalizado de opciones de shell.

| Plataforma compatible | parámetro `shell` | Descripción                                                                                                                                                                          | Comando ejecutado interamente                   |
| --------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| Todas                 | `bash`            | El shell predeterminado en plataformas que no son de Windows con una reserva para `sh`. Al especificar un bash shell en Windows, se usa el bash shell incluido con Git para Windows. | `bash --noprofile --norc -eo pipefail {0}`      |
| Todas                 | `pwsh`            | Powershell Core. {% data variables.product.prodname_dotcom %} agrega la extensión `.ps1` al nombre de tu script.                                                                | `pwsh -command "& '{0}'"`                   |
| Todas                 | `python`          | Ejecuta el comando python.                                                                                                                                                           | `python {0}`                                    |
| Linux / macOS         | `sh`              | El comportamiento de reserva para plataformas que no son Windows si no se proporciona un shell y `bash` no se encuentra en la ruta.                                                  | `sh -e {0}`                                     |
| Windows               | `cmd`             | {% data variables.product.prodname_dotcom %} agrega la extensión `.cmd` a tu nombre de script y la sustituye por `{0}`.                                                         | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows               | `powershell`      | Este es el shell predeterminado que se usa en Windows. El Desktop PowerShell. {% data variables.product.prodname_dotcom %} agrega la extensión `.ps1` al nombre de tu script.   | `powershell -command "& '{0}'"`.            |

##### Ejemplo de ejecución de un script mediante bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

##### Ejemplo de ejecución de un script mediante `cmd` de Windows

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

##### Ejemplo de ejecución de un script mediante PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

##### Ejemplo de ejecución de un script de python

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

##### Shell personalizado

Puede establecer el valor `shell` en una cadena de plantilla utilizando el comando `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interpreta la primera palabra delimitada por espacios en blanco de la cadena como el comando, e inserta el nombre del archivo para el script temporal en `{0}`.

##### Códigos de salida y preferencia de acción de error

Para palabras clave shell incorporadas, brindamos los siguientes valores predeterminados accionados por los ejecutadores alojados por {% data variables.product.prodname_dotcom %}. Deberías usar estos lineamientos al ejecutar scripts shell.

- `bash`/`sh`:
  - Comportamiento a prueba de fallos utilizando `set -e o pipefail`: valor predeterminado para `bash` y `shell` incorporado. También es el valor predeterminado cuando no proporcionas una opción en plataformas que no son de Windows.
  - Puedes excluir la función de falla rápida y tomar el control total al proporcionar una cadena de plantilla a las opciones del shell. Por ejemplo, `bash {0}`.
  - Los shells tipo sh salen con el código de salida del último comando ejecutado en un script, que también es el comportamiento predeterminado para las acciones. El ejecutor informará el estado del paso como fallido o exitoso según este código de salida.

- `powershell`/`pwsh`
  - Comportamiento de falla rápida cuando sea posible. Para el shell incorporado `pwsh` y `powershell`, vamos a anteponer `$ErrorActionPreference = 'stop'` a los contenidos del script.
  - Añadimos `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` a los scripts de powershell para que los estados de acción reflejen el último código de salida del script.
  - Los usuarios siempre pueden optar por no usar el shell incorporado y proporcionar una opción de shell personalizada como: `pwsh -File {0}`, o `powershell -Command "& '{0}'"`, según la necesidad.

- `cmd`
  - No parece haber una manera de optar por completo por un comportamiento de falla rápida que no sea escribir tu script para verificar cada código de error y responder en consecuencia. Debido a que en realidad no podemos proporcionar ese comportamiento por defecto, debes escribir este comportamiento en tu script.
  - `cmd.exe` saldrá con el nivel de error del último programa que ejecutó y devolverá el código de error al ejecutor. Este comportamiento es internamente coherente con el comportamiento predeterminado anterior `sh` y `pwsh` y es el valor predeterminado `cmd.exe`, por lo que este comportamiento permanece intacto.

#### **`jobs.<job_id>.steps.with`**

Un `mapa` de los parámetros de entrada definidos por la acción. Cada parámetro de entrada es un par clave/valor. Los parámetros de entrada se establecen como variables del entorno. La variable tiene el prefijo `INPUT_` y se convierte en mayúsculas.

##### Ejemplo

Define los tres parámetros de entrada (`first_name`, `middle_name`, and `last_name`) definidos por la acción `hello_world`. Es posible acceder a estas variables de entrada con la acción `hello-world` como `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME` y las variables de entorno `INPUT_LAST_NAME`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@master
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat      
```

#### **`jobs.<job_id>.steps.with.args`**

Una `cadena` que define las entradas para un contenedor Docker. {% data variables.product.prodname_dotcom %} comunica los `args`en el `ENTRYPOINT` del contenedor cuando se inicia el contenedor. Una `matriz de cadenas` no es compatible para este parámetro.

##### Ejemplo

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: monacorp/action-name@master
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

Los `args` se usan en el lugar de la instrucción `CMD` en un `Dockerfile`. Si usas `CMD` en tu `Dockerfile`, usa los lineamientos ordenados por preferencia:

1. Los documentos requerían argumentos en el README de las acciones y las omiten desde la instrucción `CMD`.
1. Usa los valores predeterminados que permiten usar la acción sin especificar ningún `args`.
1. Si la acción expone un indicador `--help` o algo similar, usa ese como el valor predeterminado para que la acción se documente automáticamente.


#### **`jobs.<job_id>.steps.with.entrypoint`**

Anula el Docker `ENTRYPOINT` en el `Dockerfile` o lo establece si es que no tiene uno especificado. A diferencia de la instrucción Docker `ENTRYPOINT` que tiene un shell y formulario de ejecución, la palabra clave `entrypoint` acepta solo una cadena que define el ejecutable que se ejecutará.

##### Ejemplo

```yaml
steps:
  - name: Run a custom command
    uses: monacorp/action-name@master
    with:
      entrypoint: /a/different/executable
```

La palabra clave `punto de entrada` se usa con acciones del contenedor Docker, pero también puedes usarla con acciones JavaScript que no definen las entradas.

#### **`jobs.<job_id>.steps.env`**

Establece variables de entorno para los pasos a utilizar en el entorno del ejecutor. También puedes establecer las variables de entorno para todo el flujo de trabajo o para una tarea. Para obtener más información, consulta [`env`](#env) y [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Es posible que las acciones públicas especifiquen las variables de entorno esperadas en el archivo README. Si estás estableciendo un secreto en una variable de entorno, debes establecer secretos usando el contexto `secretos`. Para obtener más información, consulta "[Usar variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" y "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

##### Ejemplo

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

#### **`jobs.<job_id>.steps.continue-on-error`**

Impide que un trabajo falle cuando falla un paso. Se lo debe establecer en `true` para permitir que un trabajo pase cuando falla este paso.

#### **`jobs.<job_id>.steps.timeout-minutes`**

El número máximo de minutos para ejecutar el paso antes de terminar el proceso.

### **`jobs.<job_id>.timeout-minutes`**

La cantidad máxima de minutos para permitir que un trabajo se ejecute antes que {% data variables.product.prodname_dotcom %} lo cancele automáticamente. Predeterminado: 360

### **`jobs.<job_id>.strategy`**

Una estrategia crea una matriz de construcción para tus trabajos. Puedes definir diferentes variaciones de un entorno para ejecutar cada trabajo.

#### **`jobs.<job_id>.strategy.matrix`**

Puedes definir una matriz de diferentes configuraciones de trabajo. Una matriz te permite crear múltiples trabajos realizando la sustitución de variables en una definición de trabajo único. Por ejemplo, puedes usar una matriz para crear trabajos para más de una versión compatible de un lenguaje de programación, sistema operativo o herramienta. Una matriz reutiliza la configuración del trabajo y crea un trabajo para cada matriz que configuras.

{% data reusables.github-actions.matrix-limits %}

Cada opción que definas en la `matriz` tiene una clave y un valor. Las claves que defines se convierten en propiedades en el contexto `matriz` y puedes hacer referencia a la propiedad en otras áreas de tu archivo de flujo de trabajo. Por ejemplo, si defines la clave `os` que contiene una matriz de sistemas operativos, puedes usar la propiedad `matrix.os` como el valor de la palabra clave `runs-on` para crear un trabajo para cada sistema operativo. Para obtener más información, consulta "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

El orden en que defines una `matriz` importa. La primera opción que definas será el primer trabajo que se ejecuta en tu flujo de trabajo.

##### Ejemplo de ejecución con más de una versión de Node.js

Puedes especificar una matriz proporcionando una variedad de opciones de configuración. Por ejemplo, si el ejecutor admite las versiones 6, 8 y 10 de Node.js, puedes especificar una matriz de esas versiones en la `matriz`.

Este ejemplo crea una matriz de tres trabajos estableciendo la clave `node` para una matriz de tres versiones de Node.js. Para usar la matriz, el ejemplo establece la propiedad de contexto `matrix.node` como el valor del parámetro `node-version` de la entrada de la acción `setup-node`. Como resultado, se ejecutarán tres trabajos, cada uno usando una versión diferente de Node.js.

{% raw %}
```yaml
strategy:
  matrix:
    node: [6, 8, 10]
steps:
  # Configura la versión del nodo usada en los ejecutores alojados de GitHub
  - uses: actions/setup-node@v1
    with:
      # La versión de Node.js a configurar
      node-version: ${{ matrix.node }}
```
{% endraw %}

La acción `setup-node` es la forma recomendada de configurar una versión de Node.js cuando se usan ejecutores alojados {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la acción [`setup-node`](https://github.com/actions/setup-node).

##### Ejemplo de ejecución con más de un sistema operativo

Puedes crear una matriz para ejecutar flujos de trabajo en más de un sistema operativo del ejecutor. También puedes especificar más de una configuración de matriz. Este ejemplo crea una matriz de 6 trabajos:

- 2 sistemas operativos especificados en la matriz `os`
- 3 versiones de Node.js especificadas en la matriz `node`

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-16.04, ubuntu-18.04]
    node: [6, 8, 10]
steps:
  - uses: actions/setup-node@v1
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

Para encontrar opciones de configuración compatibles para ejecutores alojados {% data variables.product.prodname_dotcom %}, consulta "[Entornos virtuales para ejecutores alojados {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".

##### Ejemplo que incluye valores adicionales en combinaciones

Puedes agregar más opciones de configuración a un trabajo de una matriz de construcción ya existente. Por ejemplo, si quieres usar una versión específica de `npm` cuando se ejecuta el trabajo que usa `windows-latest` y la versión 4 de `node`, puedes usar `incluir` para especificar esa opción adicional.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [4, 6, 8, 10]
    include:
      # includes a new variable of npm with a value of 2
      # for the matrix leg matching the os and version
      - os: windows-latest
        node: 4
        npm: 2
```
{% endraw %}

##### Ejemplo que incluye combinaciones nuevas

Puedes utilizar `include` para agregar jobs nuevos a una matriz de compilaciones. Cualquier configuración de "include" sin coincidencia exacta e agregará a la matriz. Por ejemplo, si quieres utilizar `node` versión 12 para compilar en varios sistemas operativos, pero quieres un job experimental extra que utilice node versión 13 en Ubintu, puedes utilizar `include` para especificar este job adicional.


{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [12]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 13
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

##### Ejemplos que excluyen configuraciones de una matriz

Puedes eliminar una configuración específica definida en la matriz de construcción mediante la opción `exclude`. Si usas `exclude`, se elimina un puesto definido por la matriz de construcción. El número de puestos es el producto cruzado de la cantidad de sistemas operativos (`os`) incluidos en las matrices que brindas, menos todas las sustracciones (`exclude`).

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [4, 6, 8, 10]
    exclude:
      # excluye el nodo 4 en macOS
      - os: macos-latest
        node: 4
```
{% endraw %}

{% note %}

**Nota:** Todas las combinaciones de `include` se procesan después de `exclude`. Esto te permite utilizar `include` para volver a agregar combinaciones que se excluyeron previamente.

{% endnote %}

### **`jobs.<job_id>.strategy.fail-fast`**

Cuando se establece en `true`, {% data variables.product.prodname_dotcom %} cancela todos los trabajos en curso si falla cualquier trabajo de `matriz`. Predeterminado: `true`

### **`jobs.<job_id>.strategy.max-parallel`**

La cantidad máxima de trabajos que se pueden ejecutar de manera simultánea cuando se utiliza una estrategia de trabajo `matrix`. De manera predeterminada, {% data variables.product.prodname_dotcom %} maximizará el número de trabajos ejecutados en paralelo dependiendo de los ejecutadores disponibles en las máquinas virtuales alojadas en {% data variables.product.prodname_dotcom %}.

```yaml
strategy:
  max-parallel: 2
```

### **`jobs.<job_id>.continue-on-error`**

Previene que una ejecución de flujo de trabajo falle cuando un job falle. Configúralo como `true` para permitir que la ejecución del flujo de trabajo pase cuando este job falle.

#### Ejemplo que previene que un job específico de una matiz fallida haga que falle una ejecución de flujo de trabajo

Puedes permitir que ciertos jobs en una matriz de jobs fallen sin que la ejecución de flujo de trabajo falle. Por ejemplo, si querías permitir que fallara únicamente un job experimental con el `node` configurado en `13` sin que fallara la ejecución del flujo de trabajo.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [11, 12]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 13
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

### **`jobs.<job_id>.container`**

Un contenedor para ejecutar todos los pasos de un trabajo que aún no especifica un contenedor. Si tienes pasos que usan tanto acciones de script como de contenedor, las acciones de contenedor se ejecutarán como contenedores hermanos en la misma red con los mismos montajes de volumen.

Si no configuras un `container`, todos los pasos se ejecutan directamente en el host especificado por `runs-on` a menos que un paso se refiera a una acción configurada para ejecutarse en un contenedor.

#### Ejemplo

```yaml
jobs:
  my_job:
    container:
      image: node:10.16-jessie
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
```

Cuando solo especificas una imagen de contenedor, puedes omitir la palabra clave `image`.

```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```

#### **`jobs.<job_id>.container.image`**

La imagen de Docker para usar como el contenedor para ejecutar la acción. El valor puede ser el nombre de la imagen de Docker Hub o un nombre de registro de docker público.

#### **`jobs.<job_id>.container.env`**

Establece una `mapa` de variables de entorno en el contenedor.

#### **`jobs.<job_id>.container.ports`**

Establece una `matriz` de puertos para exponer en el contenedor.

#### **`jobs.<job_id>.container.volumes`**

Establece una `matriz` de volúmenes para que el contenedor los use. Puedes usar volúmenes para compartir datos entre servicios u otros pasos en un trabajo. Puedes especificar volúmenes Docker con nombre, volúmenes Docker anónimos o montajes de enlace en el host.

Para especificar un volumen, especifica la ruta de origen y destino:

`<source>:<destinationPath>`.

`<source>` es un nombre de volumen o una ruta absoluta en la máquina host, y `<destinationPath>` es una ruta absoluta en el contenedor.

##### Ejemplo

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

#### **`jobs.<job_id>.container.options`**

Opciones adicionales de recursos del contenedor Docker. Para obtener una lista de opciones, consulta las opciones "[`docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)".

### **`jobs.<job_id>.services`**

{% data reusables.github-actions.docker-container-os-support %}

Se usa para hospedar contenedores de servicio para un trabajo en un flujo de trabajo. Los contenedores de servicio son útiles para crear bases de datos o servicios de caché como Redis. El ejecutor crea automáticamente una red Docker y administra el ciclo de vida de los contenedores de servicio.

Si configuras tu trabajo para que se ejecute en un contenedor, o si tu paso usa acciones del contenedor, no necesitas asignar puertos para acceder al servicio o a la acción. Docker expone automáticamente todos los puertos entre contenedores en la misma red de puente definida por el usuario de Docker. Puedes hacer referencia directamente al contenedor de servicio por su nombre de host. El nombre del host se correlaciona automáticamente con el nombre de la etiqueta que configuraste para el servicio en el flujo de trabajo.

Si configuras el trabajo para que se ejecute directamente en la máquina del ejecutor y tu paso no usa una acción de contenedor, debes asignar cualquier puerto del contenedor de servicio Docker que sea necesario para el host Docker (la máquina del ejecutor). Puedes acceder al contenedor de servicio utilizando host local y el puerto asignado.

Para obtener más información acerca de las diferencias entre los contenedores de servicios de red, consulta "[Acerca de los contenedores de servicio](/actions/automating-your-workflow-with-github-actions/about-service-containers)".

#### Ejemplo de uso de host local

Este ejemplo crea dos servicios: nginx y Redis. Cuando especificas el puerto del host de Docker pero no el puerto del contenedor, el puerto del contenedor se asigna aleatoriamente a un puerto gratuito. {% data variables.product.prodname_dotcom %} establece el puerto del contenedor asignado en el contexto {% raw %}`$ {{job.services.<service_name>.ports}}`{% endraw %}. En este ejemplo, puedes acceder a los puertos del contenedor de servicio utilizando los contextos {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} y {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %}.

```yaml
services:
  nginx:
    image: nginx
    # Asignar puerto 8080 en el host de Docker al puerto 80 en el contenedor nginx
    ports:
      - 8080:80
  redis:
    image: redis
    # Asignar puerto TCP 6379 en el host de Docker a un puerto gratuito aleatorio en el contenedor Redis
    ports:
      - 6379/tcp
```

#### **`jobs.<job_id>.services.image`**

La imagen de Docker para usar como el contenedor de servicios para ejecutar la acción. El valor puede ser el nombre de la imagen base de Docker o un Docker Hub o registro público.

#### **`jobs.<job_id>.services.env`**

Establece un `mapa` de variables de entorno en el contenedor de servicio.

#### **`jobs.<job_id>.services.ports`**

Establece una `matriz` de puertos para exponer en el contenedor de servicios.

#### **`jobs.<job_id>.services.volumes`**

Establece una `matriz` de volúmenes para que el contenedor de servicios los use. Puedes usar volúmenes para compartir datos entre servicios u otros pasos en un trabajo. Puedes especificar volúmenes Docker con nombre, volúmenes Docker anónimos o montajes de enlace en el host.

Para especificar un volumen, especifica la ruta de origen y destino:

`<source>:<destinationPath>`.

`<source>` es un nombre de volumen o una ruta absoluta en la máquina host, y `<destinationPath>` es una ruta absoluta en el contenedor.

##### Ejemplo

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

#### **`jobs.<job_id>.services.options`**

Opciones adicionales de recursos del contenedor Docker. Para obtener una lista de opciones, consulta las opciones "[`docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)".

### Hoja de referencia de patrones de filtro

Puedes usar caracteres especiales en los filtros de ruta, de rama y de etiqueta.

- `*`: Coincide con cero o más caracteres, pero no coincide con el caracter `/`. Por ejemplo, `Octo*` coincide con `Octocat`.
- `**`: Coincide con cero o más de cualquier caracter.
- `?`: Coincide con cero o un solo carácter. Por ejemplo, `Octoc?t` coincide con `Octocat`.
- `+`: Empata con uno o más de los caracteres precedentes.
- `[]` Coincide con un caracter que aparece en los corchetes o que se incluye en los rangos. Los rangos solo pueden incluir `a-z`, `A-Z` y `0-9`. Por ejemplo, el rango`[0-9a-f]` coincide con cualquier dígito o letra minúscula. Por ejemplo, `[CB]at` coincide con `Cat` o `Bat` y `[1-2]00` coincide con `100` y `200`.
- `!`: Al comienzo de un patrón hace que niegue los patrones positivos previos. No tiene ningún significado especial si no es el primer caracter.

Los caracteres `*`, `[` y `!` son caracteres especiales en YAML. Si comienzas un patrón con `*`, `[` o `!`, tienes que encerrar el patrón entre comillas.

```yaml
# Valid
- '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
- **/README.md
```

Para obtener más información acerca de la sintaxis de filtro de ramas, de etiquetas y de rutas, consulta "[`on.<push|pull_request>.<branches|tags>`](#onpushpull_requestbranchestags)" y "[`on.<push|pull_request>.paths`](#onpushpull_requestpaths)".

#### Patrones para encontrar ramas y etiquetas

| Patrón                                          | Descripción                                                                                                                                                                               | Ejemplo de coincidencias                                                                           |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `feature/*`                                     | El comodín `*` encuentra cualquier caracter, pero no encuentra la barra (`/`).                                                                                                            | -`feature/my-branch`<br/>-`feature/your-branch`                                              |
| `feature/**`                                    | El comodín `**` encuentra cualquier caracter, incluida la barra (`/`) en los nombres de ramas y etiquetas.                                                                                | -`feature/beta-a/my-branch`<br/>-`feature/your-branch`<br/>-`feature/mona/the/octocat` |
| -`master`<br/>-`releases/mona-the-octcat` | Encuentra el nombre exacto de una rama o el nombre de etiqueta.                                                                                                                           | -`master`<br/>-`releases/mona-the-octocat`                                                   |
| `'*'`                                           | Encuentra todos los nombres de rama o de etiqueta que no contienen barra (`/`). El caracter `*` es un caracter especial en YAML. Cuando comiences un patrón con `*`, debes usar comillas. | -`master`<br/>-`releases`                                                                    |
| `'**'`                                          | Encuentra todos los nombres de rama y de etiqueta. Este es el comportamiento predeterminado cuando no usas un filtro de `ramas` o `etiquetas`.                                            | -`all/the/branches`<br/>-`every/tag`                                                         |
| `'*feature'`                                    | El caracter `*` es un caracter especial en YAML. Cuando comiences un patrón con `*`, debes usar comillas.                                                                                 | -`mona-feature`<br/>-`feature`<br/>-`ver-10-feature`                                   |
| `v2*`                                           | Encuentra los nombres de rama y de etiqueta que comienzan con `v2`.                                                                                                                       | -`v2`<br/>-`v2.0`<br/>-`v2.9`                                                          |
| `v[12].[0-9]+.[0-9]+`                           | Encuentra todas las etiquetas de versión semántica con las versiones principales 1 o 2                                                                                                    | -`v1.10.1`<br/>-`v2.0.0`                                                                     |

#### Patrones para encontrar rutas de archivos

Los patrones de ruta deben coincidir con toda la ruta y comenzar desde la raíz del repositorio.

| Patrón                                               | Descripción de coincidencias                                                                                                                                                                                       | Ejemplo de coincidencias                                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `'*'`                                                | El comodín `*` encuentra cualquier caracter, pero no encuentra la barra (`/`). El caracter `*` es un caracter especial en YAML. Cuando comiences un patrón con `*`, debes usar comillas.                           | -`README.md`<br/>-`server.rb`                                                          |
| `'*.jsx?'`                                           | El caracter `?` encuentra cero o uno de los caracteres de procedimiento.                                                                                                                                           | -`page.js`<br/>-`page.jsx`                                                             |
| `'**'`                                               | El comodín `*` encuentra cualquier caracter, incluida la barra (`/`). Este es el comportamiento predeterminado cuando no usas un filtro de `rutas`.                                                                | -`all/the/files.md`                                                                          |
| `'*.js'`                                             | El comodín `*` encuentra cualquier caracter, pero no encuentra la barra (`/`). Encuentra todos los archivos `.js` en la raíz del repositorio.                                                                      | -`app.js`<br/>-`index.js`                                                              |
| `'**.js'`                                            | Encuentra todos los archivos `.js` en el repositorio.                                                                                                                                                              | -`index.js`<br/>-`js/index.js`<br/>-`src/js/app.js`                              |
| `docs/*`                                             | Todos los archivos dentro de la raíz del directorio `docs` en la raíz del repositorio.                                                                                                                             | -`docs/README.md`<br/>-`docs/file.txt`                                                 |
| `docs/**`                                            | Todos los archivos en el directorio `docs` en la raíz del repositorio.                                                                                                                                             | -`docs/README.md`<br/>-`docs/mona/octocat.txt`                                         |
| `docs/**/*.md`                                       | Un archivo con un sufijo `.md` en cualquier parte del directorio `docs`.                                                                                                                                           | -`docs/README.md`<br/>-`docs/mona/hello-world.md`<br/>-`docs/a/markdown/file.md` |
| `'**/docs/**'`                                       | Cualquier archivo en un directorio `docs` en cualquier parte del repositorio.                                                                                                                                      | -`/docs/hello.md`<br/>-`dir/docs/my-file.txt`<br/>-`space/docs/plan/space.doc`   |
| `'**/README.md'`                                     | Un archivo README.md en cualquier parte del repositorio.                                                                                                                                                           | -`README.md`<br/>-`js/README.md`                                                       |
| `'**/*src/**'`                                       | Cualquier archivo en una carpeta con un sufijo `src` en cualquier parte del repositorio.                                                                                                                           | -`a/src/app.js`<br/>-`my-src/code/js/app.js`                                           |
| `'**/*-post.md'`                                     | Un archivo con el sufijo `-post.md` en cualquier parte del repositorio.                                                                                                                                            | -`my-post.md`<br/>-`path/their-post.md`                                                |
| `'**/migrate-*.sql'`                                 | Un archivo con el prefijo `migrate-` y el sufijo `.sql` en cualquier parte del repositorio.                                                                                                                        | -`migrate-10909.sql`<br/>-`db/migrate-v1.0.sql`<br/>-`db/sept/migrate-v1.sql`    |
| -`*.md`<br/>-`!README.md`                      | Usar un signo de exclamación (`!`) frente a un patrón lo niega. Cuando un archivo coincida con un patrón y también coincida con un patrón negativo definido más adelante en el archivo, no se incluirá el archivo. | -`hello.md`<br/>_Does not match_<br/>-`README.md`<br/>-`docs/hello.md`   |
| -`*.md`<br/>-`!README.md`<br/>-`README*` | Los patrones se marcan de forma secuencial. Un patrón que niega un patrón previo volverá a incluir las rutas del archivo.                                                                                          | -`hello.md`<br/>-`README.md`<br/>-`README.doc`                                   |
