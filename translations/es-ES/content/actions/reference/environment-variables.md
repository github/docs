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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de las variables de entorno

{% data variables.product.prodname_dotcom %} establece las variables de entorno predeterminadas que están disponibles para cada paso en una ejecución de flujo de trabajo. Las variables de entorno distinguen mayúsculas de minúsculas. Los comandos que se ejecutan en acciones o pasos pueden crear, leer y modificar variables de entorno.

Para establecer variables de entorno personalizadas, debes especificar las variables en el archivo de flujo de trabajo. Puedes definir variables de ambiente para un paso, job o para todo el flujo de trabajo si utilizas las palabras clave [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), y [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env). Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)".

```yaml
steps:
  - name: Hello world
    run: echo Hello world $FIRST_NAME $middle_name $Last_Name!
    env:
      FIRST_NAME: Mona
      middle_name: The
      Last_Name: Octocat
```

Tambièn puedes utilizar el archivo de ambiente de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}`GITHUB_ENV`{% else %} el comando de flujo de trabajo `set-env`{% endif %} para configurar una variable de ambiente que pueda utilizar los siguientes pasos en un flujo de trabajo. El {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}archivo de ambiente{% else %} comando `set-env`{% endif %} puede utilizarse directamente a travès de una acciòn o como un comando de shell en un archivo de trabajo utilizando la palabra clave `run`. Para obtener más información, consulta "[Comandos de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)."

### Variables de entorno predeterminadas

Te recomendamos encarecidamente que las acciones usen variables de entorno para acceder al sistema de archivos en lugar de usar rutas de archivo codificadas de forma rígida. {% data variables.product.prodname_dotcom %} establece variables de entorno para que las acciones se utilicen en todos los entornos del ejecutador.

| Variable de entorno  | Descripción                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | Siempre configurar en `true`.                                                                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_WORKFLOW`    | El nombre del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                      |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}
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
