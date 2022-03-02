Você pode usar `defaults.run` para fornecer o `shell` padrão e as opções de `working-directory` para todas as etapas de [`execução`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) em um fluxo de trabalho. Você também pode definir as configurações-padrão para `execução` apenas disponíveis para um trabalho. Para obter mais informações, consulte [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). Você não pode usar contextos ou expressões nesta palavra-chave.

{% data reusables.actions.defaults-override %}

#### Exemplo: Defina o shell padrão e o diretório de trabalho

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
