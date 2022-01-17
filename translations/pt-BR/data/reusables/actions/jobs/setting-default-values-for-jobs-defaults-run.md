You can use `defaults.run` to provide default `shell` and `working-directory` options for all [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a workflow. Você também pode definir as configurações-padrão para `execução` apenas disponíveis para um trabalho. Para obter mais informações, consulte [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). Você não pode usar contextos ou expressões nesta palavra-chave.

{% data reusables.github-actions.defaults-override %}

#### Example: Set the default shell and working directory

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
