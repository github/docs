---
title: Contextos
shortTitle: Contextos
intro: Puedes acceder a información de contexto en los flujos de trabajo y acciones.
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Acerca de los contextos

{% data reusables.github-actions.context-injection-warning %}

Los contextos son una manera de acceder a información acerca de las ejecuciones de flujo de trabajo, los entornos del ejecutor, los trabajos y los pasos. Los contextos usan la sintaxis de expresión. Para obtener más información, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions)".

{% raw %}
`${{ <context> }}`
{% endraw %}

| Nombre del contexto | Type     | Descripción                                                                                                                                                                                                                                                        |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `github`            | `objeto` | Información sobre la ejecución del flujo de trabajo. Para obtener más información, consulta [github</code> context](#github-context).                                                                                                                              |
| `env`               | `objeto` | Contiene variables de entorno establecidas en un flujo de trabajo, trabajo o paso. Para obtener más información, consulta el [contexto `env`](#env-context).                                                                                                       |
| `job`               | `objeto` | Información sobre el trabajo actualmente en ejecución. Para obtener más información, consulta contexto de [`job`](#job-context).                                                                                                                                   |
| `pasos`             | `objeto` | Información sobre los pasos que se han ejecutado en este trabajo. Para obtener más información, consulta contexto de [`steps`](#steps-context).                                                                                                                    |
| `runner`            | `objeto` | Incluye información sobre el ejecutor que está realizando el trabajo actual. Para más información, consulta [Contexto del `ejecutador (runner)`](#runner-context).                                                                                                 |
| `secrets`           | `objeto` | Habilita el acceso a los secretos. Para más información sobre secretos, consulta "[Creando y usando secretos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."                                            |
| `strategy`          | `objeto` | Brinda acceso a los parámetros de estrategia configurados y a la información sobre el puesto actual. Los parámetros de estrategia incluyen `fail-fast`, `job-index`, `job-total` y `max-parallel`.                                                                 |
| `matrix`            | `objeto` | Brinda acceso a los parámetros de la matriz que configuraste para el puesto actual. Por ejemplo, si configuraste una matriz de construcción con las versiones `os` y `node`, el objeto de contexto `matrix` incluye las versiones `os` y `node` del puesto actual. |
| `needs`             | `objeto` | Habilita el acceso de las salidas de todos los jobs que se definen como una dependencia para el job actual. Para obtener más información, consulta [`needs` context](#needs-context).                                                                              |

Como parte de una expresión, puedes acceder a la información del contexto usando una de las siguientes dos sintaxis.
- Sintaxis de índice: `github['sha']`
- Sintaxis de desreferencia de propiedad: `github.sha`

Para usar la sintaxis de desreferencia de propiedad, el nombre de la propiedad debe cumplir con lo siguiente:
- comenzar con `a-Z` o `_`.
- estar seguida por `a-Z` `0-9` `-` o `_`.

### Determinar cuándo utilizar contextos

{% data reusables.github-actions.using-context-or-environment-variables %}

### contexto de `github`

El contexto de `github` contiene información sobre la ejecución del flujo de trabajo y el evento que desencadenó la ejecución. Puedes leer la mayoría de los datos de contexto de `github` en las variables del entorno. Para más información sobre las variables de entorno, consulta "[Utilizando variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)."

{% data reusables.github-actions.github-context-warning %}
{% data reusables.github-actions.context-injection-warning %}

| Nombre de la propiedad    | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                  | `objeto`    | El contexto de nivel superior disponible durante cualquier trabajo o paso en un flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `github.action`           | `secuencia` | El nombre de la acción que se está ejecutando actualmente. {% data variables.product.prodname_dotcom %} elimina caracteres especiales o usa el nombre `__run` cuando el paso actual ejecuta un script.  Si utilizas la misma acción más de una vez en el mismo job, el nombre incluirá un sufijo con el número de secuencia con un guion bajo antes de este.  Por ejemplo, el primer script que ejecutes tendrá el nombre `__run`, y el segundo script será nombrado `__run_2`. Del mismo modo, la segunda invocación de `actions/checkout` será `actionscheckout2`. |
| `github.action_path`      | `secuencia` | La ruta en donde se ubica tu acción. Puedes utilizar esta ruta para acceder fácilmente a los archivos ubicados en el mismo repositorio que tu acción. Este atributo solo es compatible en las acciones compuestas.                                                                                                                                                                                                                                                                                                                                                   |
| `github.actor`            | `secuencia` | El inicio de sesión del usuario que inició la ejecución del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `github.base_ref`         | `secuencia` | La rama `head_ref` o fuente de la solicitud de extracción en una ejecución de flujo de trabajo. Esta propiedad solo está disponible cuando el evento que activa una ejecución de flujo de trabajo es ya sea `pull_request` o `pull_request_target`.                                                                                                                                                                                                                                                                                                                  |
| `github.event`            | `objeto`    | La carga de webhook del evento completo. Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/articles/events-that-trigger-workflows/)". "Puedes acceder a propiedades individuales del evento que utiliza este contexto.                                                                                                                                                                                                                                                                                                            |
| `github.event_name`       | `secuencia` | El nombre del evento que activó la ejecución del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `github.event_path`       | `secuencia` | La ruta a la carga del webhook del evento completo en el ejecutor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `github.head_ref`         | `secuencia` | La rama `head_ref` o fuente de la solicitud de extracción en una ejecución de flujo de trabajo. Esta propiedad solo está disponible cuando el evento que activa una ejecución de flujo de trabajo es ya sea `pull_request` o `pull_request_target`.                                                                                                                                                                                                                                                                                                                  |
| `github.job`              | `secuencia` | El [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) del job actual.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `github.ref`              | `secuencia` | La rama o ref de etiqueta que activó la ejecución del flujo de trabajo. Para las ramas, este es el formato  `refs/heads/<branch_name>` y, para las etiquetas, es `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                                                                 |
| `github.repository`       | `secuencia` | El nombre del repositorio y del propietario. Por ejemplo, `Codertocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `github.repository_owner` | `secuencia` | El nombre del propietario del repositorio. Por ejemplo, `Codertocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `github. run_id`          | `secuencia` | {% data reusables.github-actions.run_id_description %}
| `github. run_number`      | `secuencia` | {% data reusables.github-actions.run_number_description %}
| `github.run_attempt`      | `secuencia` | Un número único para cada intento de ejecución de un flujo de trabajo particular en un repositorio. Este número comienza en 1 para el primer intento de ejecución del flujo de trabajo e incrementa con cada re-ejecución.                                                                                                                                                                                                                                                                                                                                           |
| `github.server_url`       | `secuencia` | Devuelve la URL al servidor de GitHub. Por ejemplo: `https://github.com`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `github.sha`              | `secuencia` | El SHA de confirmación que activó la ejecución del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `github.token`            | `secuencia` | Un token para autenticar en nombre de la aplicación de GitHub instalada en tu repositorio. Esto es funcionalmente equivalente al secreto de `GITHUB_TOKEN`. Para más información, consulta "[Autenticando con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."                                                                                                                                                                                                                                         |
| `github.workflow`         | `secuencia` | El nombre del flujo de trabajo. Si el archivo de flujo de trabajo no especifica un `nombre`, el valor de esta propiedad es la ruta completa del archivo del flujo de trabajo en el repositorio.                                                                                                                                                                                                                                                                                                                                                                      |
| `github.workspace`        | `secuencia` | El directorio de trabajo predeterminado para los pasos y la ubicación predeterminada de tu repositorio cuando usas la acción [`checkout`](https://github.com/actions/checkout).                                                                                                                                                                                                                                                                                                                                                                                      |

### contexto de `env`

El contexto de `Env` contiene las variables de entorno que se han establecido en un flujo de trabajo, puesto o paso. Para obtener más información acerca de la configuración de variables de entorno en tu flujo de trabajo, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)".

La sintaxis de contexto `env` te permite usar el valor de una variable de entorno en tu archivo de flujo de trabajo. Puedes utilizar el contexto `env` en el valor de cualquier clave en un **paso**, con excepción de las claves `id` y `uses`. Para obtener más información sobre la sintaxis del paso, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".

Si quieres usar el valor de una variable de entorno dentro de un ejecutor, usa el método normal del sistema operativo del ejecutor para leer las variables de entorno.

| Nombre de la propiedad | Type        | Descripción                                                                                                           |
| ---------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `env`                  | `objeto`    | Este contexto cambia para cada paso de un trabajo. Puedes acceder a este contexto desde cualquier paso en un trabajo. |
| `Env.<env_name>` | `secuencia` | El valor de una variable de entorno específica.                                                                       |

### contexto de `job`

El contexto de `job` contiene información sobre el trabajo de ejecución actual.

| Nombre de la propiedad                    | Type        | Descripción                                                                                                                                                                                                                                                                            |
| ----------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job`                                     | `objeto`    | Este contexto cambia para cada trabajo de una ejecución de flujo de trabajo. Puedes acceder a este contexto desde cualquier paso en un trabajo.                                                                                                                                        |
| `job.container`                           | `objeto`    | Información sobre el contenedor del trabajo. Para obtener más información sobre los contenedores, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)".                      |
| `job.container.id`                        | `secuencia` | La Id de la red del contenedor.                                                                                                                                                                                                                                                        |
| `job.container.network`                   | `secuencia` | La Id. de la red del contenedor. El ejecutor crea la red usada por todos los contenedores en un trabajo.                                                                                                                                                                               |
| `job.services`                            | `objeto`    | Los contenedores de servicio creados para un trabajo. Para obtener más información sobre los contenedores de servicios, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)". |
| `job.services.<service id>.id`      | `secuencia` | La Id del contenedor de servicio.                                                                                                                                                                                                                                                      |
| `job.services.<service id>.network` | `secuencia` | La Id. de la red del contenedor de servicios. El ejecutor crea la red usada por todos los contenedores en un trabajo.                                                                                                                                                                  |
| `job.services.<service id>.ports`   | `objeto`    | Los puertos expuestos del contenedor del servicio.                                                                                                                                                                                                                                     |
| `job.status`                              | `secuencia` | El estado actual del trabajo. Los valores posibles son `success`, `failure` o `cancelled`.                                                                                                                                                                                             |

### contexto de `steps`

El contexto de `steps` contiene información sobre los pasos del trabajo actual que ya se han ejecutado.

| Nombre de la propiedad                              | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pasos`                                             | `objeto`    | Este contexto cambia para cada paso de un trabajo. Puedes acceder a este contexto desde cualquier paso en un trabajo.                                                                                                                                                                                                                                                |
| `steps.<step id>.outputs`                     | `objeto`    | El conjunto de salidas definido para el paso. Para obtener más información, consulta "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)".                                                                                                                                             |
| `steps.<step id>.conclusion`                  | `secuencia` | El resultado de un paso completado después de que se aplica [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Los valores posibles son `success`, `failure`, `cancelled`, o `skipped`. Cuando falla un paso de `continue-on-error`, el `outcome` es `failure`, pero la `conclusion` final es `success`. |
| `steps.<step id>.outcome`                     | `secuencia` | El resultado de un paso completado antes de que se aplique [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Los valores posibles son `success`, `failure`, `cancelled`, o `skipped`. Cuando falla un paso de `continue-on-error`, el `outcome` es `failure`, pero la `conclusion` final es `success`.  |
| `steps.<step id>.outputs.<output name>` | `secuencia` | El valor de un resultado específico.                                                                                                                                                                                                                                                                                                                                 |

### Contexto de `runner`

El contexto de `runner` contiene información sobre el ejecutor que está ejecutando el trabajo actual.

| Nombre de la propiedad | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.name`          | `secuencia` | {% data reusables.actions.runner-name-description %}
| `runner.os`            | `secuencia` | {% data reusables.actions.runner-os-description %}
| `runner.temp`          | `secuencia` | {% data reusables.actions.runner-temp-directory-description %}
| `runner.tool_cache`    | `secuencia` | {% ifversion ghae %}Para obtener instrucciones de cómo asegurarte de que tu {% data variables.actions.hosted_runner %} tiene instalado el software necesario, consulta la sección "[Crear imágenes personalizadas](/actions/using-github-hosted-runners/creating-custom-images)". {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}

### Contexto `needs`

El contexto `needs` contiene salidas de todos los jobs que se definen como dependencia del job actual. Para obtener más información sobre la definición de dependencias de jobs, consulta la sección "[Sintaxis de flujos de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

| Nombre de la propiedad                             | Type        | Descripción                                                                                                                     |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `needs.<job id>`                             | `objeto`    | Un solo job del cual depende el job actual.                                                                                     |
| `needs.<job id>.outputs`                     | `objeto`    | El conjunto de resultados de un job del cual depende el job actual.                                                             |
| `needs.<job id>.outputs.<output name>` | `secuencia` | El valor de un resultado específico para un job del cual depende el job actual.                                                 |
| `needs.<job id>.result`                      | `secuencia` | El resultado de un job del cual depende el job actual. Los valores posibles son `success`, `failure`, `cancelled`, o `skipped`. |

#### Ejemplo de impresión de información de contexto de un archivo de registro

Para revisar la información accesible en cada contexto, puedes utilizar este ejemplo de archivo de flujo de trabajo.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

## Disponibilidad de contexto

Hay diferentes contextos disponibles a lo largo de un ejecutor de flujo de trabajo. Por ejemplo, el contexto `secrets` solo puede utilizarse en algunos lugares dentro de un job.

Adicionalmente, algunas funcionalidades solo pueden utilizarse en algunos lugares. Por ejemplo, la función `hashFiles` no está disponible en todas partes.

La siguiente tabla indica si cada contexto y fución especial puede utilizarse dentro de un flujo de trabajo. A menos de que se liste a continuación, las funciones se pueden utilizar donde sea.

| Ruta                       | Contexto                   | Funciones especiales       |
| -------------------------- | -------------------------- | -------------------------- |
| <code>concurrency</code>  | <code>github</code>  |                            |
| <code>env</code>  | <code>github, secretos</code>  |                            |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, necesidades, estrategia, matriz</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, necesidades, estrategia, matriz</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, necesidades, estrategia, matriz, env, secretos</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, necesidades, estrategia, matriz, job, ejecutar, env, secretos</code> |                            |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, necesidades, estrategia, matriz</code> |                            |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, necesidades, estrategia, matriz, env</code> |                            |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, necesidades, estrategia, matriz, secretos</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, necesidades, estrategia, matriz</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, pasos</code> |                            |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, necesidades</code> | <code>siempre, cancellado, éxito, fallo</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, necesidades, estrategia, matriz</code> |                            |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> |                            |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, necesidades, estrategia, matriz</code> |                            |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, necesidades, estrategia, matriz</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, necesidades, estrategia, matriz, env, secretos</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, necesidades, estrategia, matriz, job, ejecutar, env, secretos</code> |                            |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, pasos</code> | <code>siempre, cancelado, éxito, fallo, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, necesidades, estrategia, matriz, job, ejecutor, env, secretos, pasos</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, necesidades</code> |                            |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, necesidades, estrategia, matriz</code> |                            |
