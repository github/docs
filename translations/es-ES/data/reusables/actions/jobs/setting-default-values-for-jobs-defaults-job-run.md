Utiliza `jobs.<job_id>.defaults.run` para propocionar un `shell` y `working-directory` predeterminados para todos los pasos de `run` en el job. No se permiten las expresiones ni contexto en esta sección.

Puedes proporcionar opciones predeterminadas de `shell` y `working-directory` para todos los pasos de [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) en un job. También puedes configurar ajustes predeterminados para `run` para todo el flujo de trabajo. Para obtener más información, consulta [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). No podrás utilizar contextos o expresiones en esta palabra clave.

{% data reusables.actions.defaults-override %}

#### Ejemplo: Configurar opciones de paso de `run` predeterminadas para un job

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
