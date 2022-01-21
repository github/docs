You can use `defaults.run` to provide default `shell` and `working-directory` options for all [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a workflow. También puedes configurar ajustes predeterminados para `run` que solo estén disponibles para un job. Para obtener más información, consulta [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). No podrás utilizar contextos o expresiones en esta palabra clave.

{% data reusables.github-actions.defaults-override %}

#### Example: Set the default shell and working directory

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
