---
title: Autenticando com o "GITHUB_TOKEN"
intro: '{% data variables.product.prodname_dotcom %} fornece um token que você pode usar para autenticar em nome de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Qualquer pessoa com acesso de `gravar` em um repositório pode criar, ler e usar secredos.

### Sobre o segredo `GITHUB_TOKEN`

O {% data variables.product.prodname_dotcom %} cria automaticamente um segredo `GITHUB_TOKEN` para uso no fluxo de trabalho. Você pode usar o `GITHUB_TOKEN` para autenticar em uma execução de fluxo de trabalho.

Ao habilitar {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} instala um {% data variables.product.prodname_github_app %} no seu repositório. O segredo `GITHUB_TOKEN` é um token de acesso de instalação {% data variables.product.prodname_github_app %}. Você pode usar o token de acesso de instalação para autenticar em nome do {% data variables.product.prodname_github_app %} instalado no seu repositório. As permissões do token são restritas ao repositório do fluxo de trabalho. Para obter mais informações, consulte "[Permissões para o `GITHUB_TOKEN`](#permissions-for-the-github_token)".

Antes de iniciar cada trabalho, {% data variables.product.prodname_dotcom %} busca um token de acesso de instalação para o trabalho. O token expira quando o trabalho é concluído.

O token também está disponível no contexto `github.token`. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

### Usar o `GITHUB_TOKEN` em um fluxo de trabalho

Para usar o segredo `GITHUB_TOKEN`, você deve referenciá-lo no arquivo do fluxo de trabalho. Usar um token pode compreender disponibilizar o token como uma entrada para uma ação que o exige ou fazer solicitações de API {% data variables.product.prodname_dotcom %} autenticadas.

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### Exemplo de passar um `GITHUB_TOKEN` como uma entrada

Este exemplo de fluxo de trabalho usa a [ação etiquetadora](https://github.com/actions/labeler), que exige o `GITHUB_TOKEN` como o valor para o parâmetro de entrada do `token`:

  {% raw %}
  ```yaml
  name: Pull request labeler
  on:
  - pull_request
  jobs:
    triage:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
  ```
  {% endraw %}

#### Exemplo de acessar o API REST

Você pode usar o `GITHUB_TOKEN` para fazer chamadas de API autenticada. Este exemplo de fluxo de trabalho cria um problema usando a API REST de {% data variables.product.prodname_dotcom %}:

  {% raw %}
  ```yaml
  name: Create issue on commit
  on:
  - push
  jobs:
    create_commit:
      runs-on: ubuntu-latest
      steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n O hash do commit foi: _${{ github.sha }}_."
            }'
  ```
  {% endraw %}

### Permissões para o `GITHUB_TOKEN`

Para obter informações sobre os pontos de extremidade da API que {% data variables.product.prodname_github_apps %} pode acessar com cada permissão, consulte "[Permissões de {% data variables.product.prodname_github_app %}](/v3/apps/permissions/). "

| Permissão               | Tipo de acesso   | Acesso pelos repositórios bifurcados |
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

Se você precisa de um token que exige premissões que não estão disponíveis no `GITHUB_TOKEN`, é possível criar um token de acesso pessoal e configurá-lo como um segredo no repositório:

1. Use ou crie um token com as permissões adequadas para o repositório. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."
1. Adicione o token como um segredo no repositório do fluxo de trabalho e refira-se a ele usando a sintaxe {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
