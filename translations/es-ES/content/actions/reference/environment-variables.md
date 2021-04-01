---
title: Variables del entorno
intro: '{% data variables.product.prodname_dotcom %} establece variables de entorno predeterminadas para cada ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}. También puedes establecer variables de entorno personalizadas en tu archivo de flujo de trabajo.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Acerca de las variables de entorno

{% data variables.product.prodname_dotcom %} establece las variables de entorno predeterminadas que están disponibles para cada paso en una ejecución de flujo de trabajo. Las variables de entorno distinguen mayúsculas de minúsculas. Los comandos que se ejecutan en acciones o pasos pueden crear, leer y modificar variables de entorno.

Para establecer variables de entorno personalizadas, debes especificar las variables en el archivo de flujo de trabajo. Puedes definir variables de ambiente para un paso, job o para todo el flujo de trabajo si utilizas las palabras clave [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), y [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env). Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)".

```yaml
jobs:
  weekday_job:
    runs-on: ubuntu-latest
    env:
      DAY_OF_WEEK: Mon
    steps:
      - name: "Hello world when it's Monday"
        if: env.DAY_OF_WEEK == 'Mon'
        run: echo "Hello $FIRST_NAME $middle_name $Last_Name, today is Monday!"
        env:
          FIRST_NAME: Mona
          middle_name: The
          Last_Name: Octocat
```

Para utilizar el valor de una variable de ambiente en un archivo de flujo de trabajo, deberías utilizar el [contexto `env`](/actions/reference/context-and-expression-syntax-for-github-actions#env-context). Si quieres utilizar el valor de una variable de ambiente dentro de un ejecutor, puedes utilizar el método normal del sistema operativo ejecutor para leer las variables de ambiente.

Si utilizas la clave `run` de los archivos del flujo de trabajo para leer las variables de ambiente desde dentro del sistema operativo ejecutor (como se muestra en el ejemplo anterior), dicha variable se sustituirá en el sistema operativo ejecutor después de que se envíe el job al ejecutor. En el caso de otras partes de un archivo de flujo de trabajo, debes utilizar el contexto `env` para leer las variables de ambiente; esto es porque las claves de flujo de trabajo (tales como `if`) requieren que se sustituya la variable durante el procesamiento de dicho flujo de trabajo antes de que se envíe al ejecutor.

También puedes utilizar el {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} archivo de ambiente `GITHUB_ENV`{% else %} comando de flujo de trabajo `set-env`{% endif %} para configurar una variable de ambiente que puedan utilizar los siguientes pasos en un flujo de trabajo. Una acción puede utilizar directamente el {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}archivo de ambiente{% else %} comando `set-env`{% endif %}, o se puede utilizar como un comando de shell en un archivo de flujo de trabajo si se utiliza la palabra clave `run`. Para obtener más información, consulta "[Comandos de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)."

### Variables de entorno predeterminadas

Te recomendamos encarecidamente que las acciones usen variables de entorno para acceder al sistema de archivos en lugar de usar rutas de archivo codificadas de forma rígida. {% data variables.product.prodname_dotcom %} establece variables de entorno para que las acciones se utilicen en todos los entornos del ejecutador.

| Variable de entorno  | Descripción                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | Siempre configurar en `true`.                                                                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_WORKFLOW`    | El nombre del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                      |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}
| `GITHUB_JOB`         | The [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job.                                                                                                                                                                                                                                                                                                   |
| `GITHUB_ACTION`      | El único identificador (`id`) de la acción.                                                                                                                                                                                                                                                                                                                                                          |
| `GITHUB_ACTIONS`     | Siempre establecido en `true` cuando {% data variables.product.prodname_actions %} está ejecutando el flujo de trabajo. Puedes usar esta variable para diferenciar cuando las pruebas se ejecutan de forma local o mediante {% data variables.product.prodname_actions %}.                                                                                                                         |
| `GITHUB_ACTOR`       | El nombre de la persona o de la aplicación que inició el flujo de trabajo. Por ejemplo, `octocat`.                                                                                                                                                                                                                                                                                                   |
| `GITHUB_REPOSITORY`  | El nombre del repositorio y del propietario. Por ejemplo, `octocat/Hello-World`.                                                                                                                                                                                                                                                                                                                     |
| `GITHUB_EVENT_NAME`  | El nombre del evento webhook que activó el flujo de trabajo.                                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_EVENT_PATH`  | La ruta del archivo con la carga completa del evento webhook. Por ejemplo, `/github/workflow/event.json`.                                                                                                                                                                                                                                                                                            |
| `GITHUB_WORKSPACE`   | La ruta del directorio del espacio de trabajo de {% data variables.product.prodname_dotcom %}. El directorio de espacio de trabajo es una copia de tu repositorio si tu flujo de trabajo utiliza la acciòn [actions/checkout](https://github.com/actions/checkout). Si no usas la acción `actions/checkout`, el directorio estará vacío. Por ejemplo, `/home/runner/work/my-repo-name/my-repo-name`. |
| `GITHUB_SHA`         | El SHA de confirmación que activó el flujo de trabajo. Por ejemplo, `ffac537e6cbbf934b08745a378932722df287a53`.                                                                                                                                                                                                                                                                                      |
| `GITHUB_REF`         | La referencia de etiqueta o rama que activó el flujo de trabajo. Por ejemplo, `refs/heads/feature-branch-1`. Si no hay una rama o una etiqueta disponible para el tipo de evento, la variable no existirá.                                                                                                                                                                                           |
| `GITHUB_HEAD_REF`    | Solo se configura para eventos de solicitudes de cambio. El nombre de la rama principal.                                                                                                                                                                                                                                                                                                             |
| `GITHUB_BASE_REF`    | Solo se configura para eventos de solicitudes de cambio. El nombre de la rama base.                                                                                                                                                                                                                                                                                                                  |
| `GITHUB_SERVER_URL`  | Devuelve la URL del servidor de {% data variables.product.product_name %}. Por ejemplo: `https://github.com`.                                                                                                                                                                                                                                                                                        |
| `GITHUB_API_URL`     | Devuelve la URL de la API. Por ejemplo: `https://api.github.com`.                                                                                                                                                                                                                                                                                                                                    |
| `GITHUB_GRAPHQL_URL` | Devuelve la URL de la API de GraphQL. Por ejemplo: `https://api.github.com/graphql`.                                                                                                                                                                                                                                                                                                                 |

{% tip %}

**Nota:** Si necesitas utilizar la URL de la ejecución de un flujo de trabajo desde dentro de un job, puedes combinar estas variables de ambiente: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

{% endtip %}

#### Determinar cuándo utilizar las variables de ambiente o contextos predeterminados

{% data reusables.github-actions.using-context-or-environment-variables %}

### Convenciones de nomenclatura para las variables de entorno

{% note %}

**Nota:**{% data variables.product.prodname_dotcom %} reserva el prefijo de la variable de ambiente `GITHUB_` para uso interno de {% data variables.product.prodname_dotcom %}. Configurar una variable de entorno o secreto con el prefijo `GITHUB_` dará como resultado un error.

{% endnote %}

Toda variable de entorno nueva que configures y que apunte a una ubicación en el sistema de archivos debe tener un sufijo `_PATH`. Las variables predeterminadas `HOME` y `GITHUB_WORKSPACE` son excepciones a esta convención, porque las palabras "inicio" (home) y "espacio de trabajo" (workspace) ya implican una ubicación.
