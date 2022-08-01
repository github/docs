Puedes utilizar `defaults.run` para proporcionar opciones predeterminadas de `shell` y `working-directory` para todos los pasos de [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) en un flujo de trabajo. También puedes configurar ajustes predeterminados para `run` que solo estén disponibles para un job. Para obtener más información, consulta [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). No podrás utilizar contextos o expresiones en esta palabra clave.

{% data reusables.actions.defaults-override %}

#### Ejemplo: Configurar el directorio de trabajo y shell predeterminados

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
