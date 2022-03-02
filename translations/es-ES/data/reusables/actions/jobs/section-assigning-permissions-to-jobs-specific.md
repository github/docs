Para un job específico, puedes utilizar `jobs.<job_id>.permissions` para modificar los permisos predeterminados que se le otorgan al `GITHUB_TOKEN`, agregando o eliminando el acceso conforme se requiera para que solo permitas el acceso mínimo requerido. Para obtener más información, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Si especificas el permiso dentro de una definición de job, puedes configurar un conjunto diferente de permisos para el `GITHUB_TOKEN` de cada job, en caso de que se requiera. Como alternativa, puedes especificar los permisos para todos los jobs en el flujo de trabajo. Para obtener más información sobre los permisos que se definen a nivel del flujo de trabajo, consulta los [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.actions.github-token-available-permissions %}
{% data reusables.actions.forked-write-permission %}

#### Example: Setting permissions for a specific job

Este ejemplo muestra los permisos que se están configurando para el `GITHUB_TOKEN`, los cuales solo aplicarán al job que se llama `stale`. Se otorga permiso de escritura a los alcances `issues` y `pull-requests`. El resto de los alcances no tendrán acceso.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v3
```
