Use `jobs.<job_id>.defaults.run` to provide default `shell` and `working-directory` to all `run` steps in the job. No se permiten las expresiones ni contexto en esta sección.

Puedes proporcionar opciones predeterminadas de `shell` y `working-directory` para todos los pasos de [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) en un job. También puedes configurar ajustes predeterminados para `run` para todo el flujo de trabajo. Para obtener más información, consulta [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). No podrás utilizar contextos o expresiones en esta palabra clave.

{% data reusables.actions.defaults-override %}

#### Example: Setting default `run` step options for a job

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
