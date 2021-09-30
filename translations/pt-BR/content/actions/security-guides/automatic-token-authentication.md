---
title: Automatic token authentication
intro: '{% data variables.product.prodname_dotcom %} fornece um token que você pode usar para autenticar em nome de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Automatic token authentication
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Sobre o segredo `GITHUB_TOKEN`

At the start of each workflow run, {% data variables.product.prodname_dotcom %} automatically creates a unique `GITHUB_TOKEN` secret to use in your workflow. Você pode usar o `GITHUB_TOKEN` para autenticar em uma execução de fluxo de trabalho.

Ao habilitar {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} instala um {% data variables.product.prodname_github_app %} no seu repositório. O segredo `GITHUB_TOKEN` é um token de acesso de instalação {% data variables.product.prodname_github_app %}. Você pode usar o token de acesso de instalação para autenticar em nome do {% data variables.product.prodname_github_app %} instalado no seu repositório. As permissões do token são restritas ao repositório do fluxo de trabalho. Para obter mais informações, consulte "[Permissões para o `GITHUB_TOKEN`](#permissions-for-the-github_token)".

Antes de iniciar cada trabalho, {% data variables.product.prodname_dotcom %} busca um token de acesso de instalação para o trabalho. O token expira quando o trabalho é concluído.

O token também está disponível no contexto `github.token`. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts#github-context)".

## Usar o `GITHUB_TOKEN` em um fluxo de trabalho

Você pode usar o `GITHUB_TOKEN` ao usar a sintaxe padrão para fazer referência a segredos: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Exemplos de uso do `GITHUB_TOKEN` incluem passar o token como uma entrada para uma ação ou usá-lo para fazer uma solicitação da API de {% data variables.product.prodname_dotcom %} autenticada.

{% ifversion fpt or ghes > 3.1 or ghae-next %}
{% note %}

**Importante:** Uma ação pode acessar o `GITHUB_TOKEN` por meio do contexto `github.token`, mesmo que o fluxo de trabalho não passe explicitamente o `GITHUB_TOKEN` para a ação. Como uma boa prática de segurança, você deve sempre certificar-se de que as ações só têm o acesso mínimo necessário limitando as permissões concedidas ao `GITHUB_TOKEN`. Para obter mais informações, consulte "[Permissões para o `GITHUB_TOKEN`](#permissions-for-the-github_token)".

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

### Exemplo 1: Passar o `GITHUB_TOKEN` como uma entrada

Este exemplo de fluxo de trabalho usa a [ação etiquetadora](https://github.com/actions/labeler), que exige o `GITHUB_TOKEN` como o valor para o parâmetro de entrada do `token`:

```yaml
name: Pull request labeler

on: [ pull_request_target ]

{% ifversion fpt or ghes > 3.1 or ghae-next %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

### Exemplo 2: chamando a API REST

Você pode usar o `GITHUB_TOKEN` para fazer chamadas de API autenticada. Este exemplo de fluxo de trabalho cria um problema usando a API REST de {% data variables.product.prodname_dotcom %}:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      issues: write {% endif %}
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Permissões para o `GITHUB_TOKEN`

Para obter informações sobre quais os pontos de extremidade da API de {% data variables.product.prodname_github_apps %} podem acessar com cada permissão, consulte "[Permissões de {% data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps)."

{% ifversion fpt or ghes > 3.1 or ghae-next %}
A tabela a seguir mostra as permissões concedidas ao `GITHUB_TOKEN` por padrão. People with admin permissions to an {% ifversion not ghes %}enterprise, organization, or repository,{% else %}organization or repository{% endif %} can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your {% ifversion not ghes %}enterprise, organization, or repository,{% else %}organization or repository,{% endif %} see {% ifversion not ghes %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)," {% endif %}"[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)," or "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

| Escopo                  | Acesso padrão<br>(permissivo) | Acesso padrão<br>(restrito) | Acesso máximo<br>por repositórios bifurcados |
| ----------------------- | ----------------------------------- | --------------------------------- | -------------------------------------------------- |
| ações                   | leitura/gravação                    | nenhum                            | leitura                                            |
| Verificações            | leitura/gravação                    | nenhum                            | leitura                                            |
| Conteúdo                | leitura/gravação                    | leitura                           | leitura                                            |
| Implantações            | leitura/gravação                    | nenhum                            | leitura                                            |
| Problemas               | leitura/gravação                    | nenhum                            | leitura                                            |
| metadados               | leitura                             | leitura                           | leitura                                            |
| pacotes                 | leitura/gravação                    | nenhum                            | leitura                                            |
| Pull requests           | leitura/gravação                    | nenhum                            | leitura                                            |
| Projetos de repositório | leitura/gravação                    | nenhum                            | leitura                                            |
| eventos de segurança    | leitura/gravação                    | nenhum                            | leitura                                            |
| Status                  | leitura/gravação                    | nenhum                            | leitura                                            |
{% else %}
| Escopo                  | Tipo de acesso   | Acesso pelos repositórios bifurcados |
| ----------------------- | ---------------- | ------------------------------------ |
| ações                   | leitura/gravação | leitura                              |
| Verificações            | leitura/gravação | leitura                              |
| Conteúdo                | leitura/gravação | leitura                              |
| Implantações            | leitura/gravação | leitura                              |
| Problemas               | leitura/gravação | leitura                              |
| metadados               | leitura          | leitura                              |
| pacotes                 | leitura/gravação | leitura                              |
| Pull requests           | leitura/gravação | leitura                              |
| Projetos de repositório | leitura/gravação | leitura                              |
| Status                  | leitura/gravação | leitura                              |
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
### Modificar as permissões para o `GITHUB_TOKEN`

Você pode modificar as permissões para o `GITHUB_TOKEN` nos arquivos de fluxo de trabalho individuais. Se as permissões padrão para o `GITHUB_TOKEN` forem restritivas, você poderá ter que elevar as permissões para permitir que algumas ações e comandos sejam executados com sucesso. Se as permissões padrão forem permissivas, você poderá editar o arquivo do fluxo de trabalho para remover algumas permissões do `GITHUB_TOKEN`. Como uma boa prática de segurança, você deve conceder ao `GITHUB_TOKEN` o acesso menos necessário.

Você pode ver as permissões que o `GITHUB_TOKEN` tem para uma tarefa específica na seção "Configurar trabalho" no registro de execução do fluxo de trabalho. Para obter mais informações, consulte "[Usar registros de execução do fluxo de trabalho](/actions/managing-workflow-runs/using-workflow-run-logs)".

Você pode usar a chave de `permissões` no seu arquivo de fluxo de trabalho para modificar as permissões para o `GITHUB_TOKEN` para um fluxo de trabalho inteiro ou para trabalhos individuais. Isso permite que você configure as permissões mínimas necessárias para um fluxo de trabalho ou trabalho. Quando a chave `permissions` for usada, todas as permissões não especificadas são configuradas como sem acesso, com exceção do escopo de `metadados`, que sempre recebe acesso de leitura.

{% data reusables.github-actions.forked-write-permission %}

Os dois exemplos de fluxo de trabalho anteriores neste artigo mostram a chave de `permissões` usada no nível de fluxo de trabalho e no nível de trabalho. Em [Exemplo 1](#example-1-passing-the-github_token-as-an-input) as duas permissões são especificadas para todo o fluxo de trabalho. No [Exemplo 2](#example-2-calling-the-rest-api) de acesso de gravação é concedido para um único escopo para um único trabalho.

Para obter detalhes completos sobre a chave de `permissões`, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions).

#### Como as permissões são calculadas para um trabalho de fluxo de trabalho

As permissões para o `GITHUB_TOKEN` são inicialmente definidas como a configuração padrão para a empresa, organização ou repositório. Se o padrão for definido como permissões restritas em qualquer um desses níveis, isso irá aplicar-se aos repositórios relevantes. Por exemplo, Se você escolher o padrão restrito no nível da organização, todos os repositórios nessa organização usarão as permissões restritas como padrão. As permissões serão, então, ajustadas com base em qualquer configuração dentro do arquivo de fluxo de trabalho, primeiro no nível de fluxo de trabalho e, em seguida, no nível de trabalho. Por fim, se o fluxo de trabalho foi acionado por um pull request de um repositório bifurcado, e a configuração **Enviar tokens de gravação para fluxos de trabalho de pull requests** não estiver selecionada, as permissões serão ajustadas para alterar qualquer permissão de gravação para somente leitura.

### Conceder permissões adicionais
{% endif %}

Se você precisa de um token que exige premissões que não estão disponíveis no `GITHUB_TOKEN`, é possível criar um token de acesso pessoal e configurá-lo como um segredo no repositório:

1. Use ou crie um token com as permissões adequadas para o repositório. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."
1. Adicione o token como um segredo no repositório do fluxo de trabalho e refira-se a ele usando a sintaxe {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
