---
title: Usar variáveis de ambiente
intro: '{% data variables.product.prodname_dotcom %} define as variáveis do ambiente para cada execução do fluxo de trabalho {% data variables.product.prodname_actions %}. Você também pode definir variáveis de ambiente personalizadas no seu arquivo do fluxo de trabalho.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as variáveis de ambiente

{% data variables.product.prodname_dotcom %} define as variáveis-padrão do ambiente disponíveis para cada etapa da execução de um fluxo de trabalho. As variáveis de ambiente diferenciam entre maiúsculas e minúsculas. Os comandos executados em ações ou etapas podem criar, ler e modificar as variáveis do ambiente.

Para definir as variáveis do ambiente personalizadas, você deverá especificar as variáveis no arquivo do fluxo de trabalho. Você pode definir as variáveis de ambiente para uma etapa, trabalho ou para todo o fluxo de trabalho usando as palavras-chave [`jobs.<job_id>.steps.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), e [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env). Para obter mais informações, consulte "[sintaxe do Fluxo de Trabalho para {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)."

```yaml
passos:
  - nome: Olá mundo
    run: echo Hello world $FIRST_NAME $middle_name $Last_Name!
    env:
      FIRST_NAME: Mona
      middle_name: The
      Last_Name: Octocat
```

Você também pode usar o comando do fluxo de trabalho `set-env` para definir uma variável de ambiente que as etapas a seguir podem usar em um fluxo de trabalho. O comando `set-env` pode ser usado diretamente por outra ação ou como um comando do shell em um arquivo do fluxo de trabalho usando a palavra-chave `executar` executar. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)".

### Variáveis padrão de ambiente

É altamente recomendável que as ações usem as variáveis do ambiente para acessar o sistema do arquivo em vez de usar os caminhos do arquivo com codificação rígida. {% data variables.product.prodname_dotcom %} define as variáveis de ambiente para ações a serem usadas em todos os ambientes executores.

| Variável de ambiente | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | Definido sempre como `verdadeiro`.                                                                                                                                                                                                                                                                                                                                                                                          |
| `HOME`               | Caminho para o diretório inicial do {% data variables.product.prodname_dotcom %} usado para armazenar dados do usuário. Por exemplo, `/github/home`.                                                                                                                                                                                                                                                                   |
| `GITHUB_WORKFLOW`    | Nome do fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}                                                                                                                                                                                                                                                                                                                                                               |
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}                                                                                                                                                                                                                                                                                                                                                           |
| `GITHUB_ACTION`      | Identificador único (`id`) da ação.                                                                                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_ACTIONS`     | Definido sempre como `verdadeiro` quando {% data variables.product.prodname_actions %} estiver executando o fluxo de trabalho. Você pode usar esta variável para diferenciar quando os testes estão sendo executados localmente ou por {% data variables.product.prodname_actions %}.                                                                                                                           |
| `GITHUB_ACTOR`       | Nome da pessoa ou aplicativo que iniciou o fluxo de trabalho. Por exemplo, `octocat`.                                                                                                                                                                                                                                                                                                                                       |
| `GITHUB_REPOSITORY`  | Nome do repositório e o proprietário. Por exemplo, `octocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                   |
| `GITHUB_EVENT_NAME`  | Nome do evento de webhook que acionou o workflow.                                                                                                                                                                                                                                                                                                                                                                           |
| `GITHUB_EVENT_PATH`  | Caminho do arquivo com a carga completa do evento webhook. Por exemplo, `/github/workflow/event.json`.                                                                                                                                                                                                                                                                                                                      |
| `GITHUB_WORKSPACE`   | Caminho do diretório do espaço de trabalho do {% data variables.product.prodname_dotcom %}. O diretório espaço de trabalho contém um subdiretório com uma cópia do repositório, caso o seu fluxo de trabalho utilize a ação [actions/checkout](https://github.com/actions/checkout). Se você não usar a ação `actions/checkout`, o diretório estará vazio. Por exemplo, `/home/runner/work/my-repo-name/my-repo-name`. |
| `GITHUB_SHA`         | Commit SHA que acionou o fluxo de trabalho. Por exemplo, `ffac537e6cbbf934b08745a378932722df287a53`.                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_REF`         | Branch ou ref tag que acionou o fluxo de trabalho. Por exemplo, `refs/heads/feature-branch-1`. Se não houver branch ou tag disponível para o tipo de evento, a variável não existirá.                                                                                                                                                                                                                                       |
| `GITHUB_HEAD_REF`    | Configurado somente para repositórios bifurcados. O branch do repositório head.                                                                                                                                                                                                                                                                                                                                             |
| `GITHUB_BASE_REF`    | Configurado somente para repositórios bifurcados. O branch do repositório base.                                                                                                                                                                                                                                                                                                                                             |
| `GITHUB_SERVER_URL`  | Retorna a URL do servidor {% data variables.product.product_name %}. Por exemplo: `https://github.com`.                                                                                                                                                                                                                                                                                                                |
| `GITHUB_API_URL`     | Retorna a URL da API. Por exemplo: `https://api.github.com`.                                                                                                                                                                                                                                                                                                                                                                |
| `GITHUB_GRAPHQL_URL` | Retorna a URL API do GraphQL. Por exemplo: `https://api.github.com/graphql`.                                                                                                                                                                                                                                                                                                                                                |

### Convenções de nomenclatura para variáveis de ambiente

{% note %}

**Observação**{% data variables.product.prodname_dotcom %} reserva o prefixo da variável de ambiente `GITHUB_` para uso interno por {% data variables.product.prodname_dotcom %}. Definir uma variável de ambiente ou segredo com o prefixo `GITHUB_` resultará em erro.

{% endnote %}

Qualquer variável de ambiente nova que você definir e apontar para um local no sistema de arquivos deve ter um sufixo `_PATH`. As variáveis padrão `HOME` e `GITHUB_WORKSPACE` são exceções a essa convenção porque as palavras "inicial" e "espaço de trabalho" já indicam o local.
