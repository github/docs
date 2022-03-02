Use `jobs.<job_id>.defaults.run` para fornecer o `shell` padrão e `workdirectory` para todas as etapas `run` no trabalho. Não são permitidos contexto e expressão nesta seção.

Você pode fornecer as opções-padrão de `shell` e `working-directory` para todas as etapas de [`execução`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) de um trabalho. Você também pode definir as configurações-padrão para `execução` para todo o fluxo de trabalho. Para obter mais informações, consulte [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). Você não pode usar contextos ou expressões nesta palavra-chave.

{% data reusables.actions.defaults-override %}

#### Exemplo: Configuração padrão da etapa `executar` para um trabalho

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
