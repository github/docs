---
title: Ejecutar un flujo de trabajo manualmente
intro: 'Cuando se configura un flujo de trabajo para que se ejecute en el evento `workflow_dispatch`, puedes ejecutarlo utilizando la pestaña de Acciones en {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %}, o en la API de REST.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Configurar un flujo de trabajo para que se ejecute manualmente

Para ejecutar un flujo de trabajo manualmente, éste debe estar configurado para ejecutarse en el evento `workflow_dispatch`. Para obtener más información sobre cómo configurar el evento `workflow_dispatch`, consulta la sección "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Ejecutar un flujo de trabajo en {% data variables.product.prodname_dotcom %}

Para activar el evento `workflow_dispatch` en {% data variables.product.prodname_dotcom %}, tu flujo de trabajo deberá estar en la rama predeterminada. Sigue estos pasos para activar una ejecución de flujo de trabajo manualmente.

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic ene l flujo de trabajo que quieras ejecutar. ![flujo de trabajo de la selección en las acciones](/assets/images/actions-select-workflow.png)
1. Sobre la lista de ejecuciones de flujo de trabajo, selecciona **Ejecutar flujo de trabajo**. ![envío del flujo de trabajo de las acciónes](/assets/images/actions-workflow-dispatch.png)
1. Selecciona la rama en donde el flujo de trabajo se ejecutará y teclea los parámetros de entrada que éste utiliza. Da clic en **Ejecutar flujo de trabajo**. ![flujo de trabajo de la ejecución manual de las acciones](/assets/images/actions-manually-run-workflow.png)

### Ejecutar un flujo de trabajo utilizando {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

Para ejecutar un flujo de trabajo, utiliza el subcomando `workflow run`. Reemplaza el parámetro `workflow` ya sea con el nombre, ID, o nombre de archivo del flujo de trabajo que quieres ejecutar. Por ejemplo `"Link Checker"`, `1234567`, o `"link-check-test.yml"`. Si no especificas un flujo de trabajo, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas un flujo de trabajo.

```shell
gh workflow run <em>workflow</em>
```

Si tu flujo de trabajo acepta entradas, {% data variables.product.prodname_cli %} te pedirá que las ingreses. Como alternativa, puedes utilizar `-f` o `-F` para agregar una entrada en formato `key=value`. Utiliza `-F` para leer desde un archivo.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

También puedes pasar las entradas como JSON utilizando una entrada estándar.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

Para ejecutar un flujo de trabajo en una rama del repositorio diferente a la predeterminada, utiliza el marcador `--ref`.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

Para ver el progreso de la ejecución del flujo de trabajo, utiliza el subcomando `run watch` y selecciona la ejecución de la lista interactiva.

```shell
gh run watch
```

### Ejecutar un flujo de trabajo utilizando la API de REST

Para obtener más información acerca de cómo utilizar la API de REST, consulta la sección [Crear un evento de envío de flujo de trabajo](/rest/reference/actions/#create-a-workflow-dispatch-event)". Si omites las entradas, se utilizarán los valores predeterminados que se hayan definido en el flujo de trabajo.

Puedes activar el evento de `workflow_dispatch` desde la pestaña de Acciones en {{ site.data.variables.product.prodname_dotcom }} o utilizar la API de REST.
