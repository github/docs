---
title: Automatizando projetos (beta)
intro: 'Você pode usar a API e o {% data variables.product.prodname_actions %} para gerenciar os seus projetos.'
product: '{% data reusables.gated-features.actions %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
type: how_to
topics:
  - Projects
  - Workflows
  - Project management
---

## Introdução

Este artigo demonstra como usar a API do GraphQL e {% data variables.product.prodname_actions %} para adicionar uma pull request a um projeto. Quando o pull request estiver marcado como "pronto para revisão", será adicionada uma nova tarefa ao projeto com um campo "Status" definido como "Todo", e a data atual será adicionada a um campo personalizado "Data de postagem".

Este artigo pressupõe que você tem um entendimento básico de {% data variables.product.prodname_actions %}. Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte "[{% data variables.product.prodname_actions %}](/actions).

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

{% note %}

**Observação:** `GITHUB_TOKEN` não tem os escopos necessários para acessar projetos (beta). Você deve criar um token com o escopo `org:write` e salvá-lo como um segredo no seu repositório ou organização. No fluxo de trabalho a seguir, substitua `YOUR_TOKEN` pelo nome do segredo. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endnote %}

## Exemplo de fluxo de trabalho

Você pode copiar este fluxo de trabalho e modificá-lo conforme descrito na tabela abaixo para atender às suas necessidades. Um projeto pode incluir vários repositórios, mas um fluxo de trabalho é específico para um repositório. Adicione este fluxo de trabalho a cada repositório que você deseja que seu projeto monitore. Para obter mais informações sobre como criar arquivos de fluxo de trabalho, consulte "[Início rápido para {% data variables.product.prodname_actions %}](/actions/quickstart)".

```yaml{:copy}
name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectNext(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      id
                      name
                      settings
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectNext.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") |.settings | fromjson.options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectNextItem(input: {projectId: $project, contentId: $pr}) {
                projectNextItem {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectNextItem.projectNextItem.id')"

          echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
        run: |
          gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: String!
            ) {
              set_status: updateProjectNextItemField(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: $status_value
              }) {
                projectNextItem {
                  id
                  }
              }
              set_date_posted: updateProjectNextItemField(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: $date_value
              }) {
                projectNextItem {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

A tabela a seguir explica as seções do fluxo de trabalho e mostra como adaptá-la para seu próprio uso.

<table class="table-fixed">

<tr>
<td>

```yaml
on:
  pull_request:
    types:
      - ready_for_review
```

</td>
<td>
Este fluxo de trabalho é executado sempre que um pull request no repositório for marcado como "pronto para revisão".
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
Define variáveis de ambiente para esta etapa.
<br>
<br>
Crie um token com o escopo <code>org:write</code> e salve-o como um segredo no seu repositório ou organização. Substitua <code>YOUR_TOKEN</code> pelo nome do segredo.
<br>
<br>
Substitua <code>YOUR_ORGANIZATION</code> pelo nome da sua organização. Por exemplo, <code>octo-org</code>.
<br>
<br>
Substitua <code>YOUR_PROJECT_NUMBER</code> pelo número do seu projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, <code>https://github.com/orgs/octo-org/projects/5</code> tem um número de projeto de 5.
</td>
</tr>

<tr>
<td>

```yaml
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org){
      projectNext(number: $number) {
        id
        fields(first:20) {
          nodes {
            id
            name
            settings
          }
        }
      }
    }
  }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json
```

</td>
<td>
Usa <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> para consultar a API para o ID do projeto e para o ID, nome e configurações para os primeiros 20 campos do projeto. A resposta é armazenada em um arquivo denominado <code>project_data.json</code>.
</td>
</tr>

<tr>
<td>

```yaml
echo 'PROJECT_ID='$(jq '.data.organization.projectNext.id' project_data.json) >> $GITHUB_ENV
echo 'DATE_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
echo 'TODO_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") |.settings | fromjson.options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV
```

</td>
<td>
Analisa a resposta da consulta da API e armazena os IDs relevantes como variáveis de ambiente. Modifique este ID para obter o ID para diferentes campos ou opções. Por exemplo:
<ul>
<li>Para obter o ID de um campo denominado <code>Team</code>, adicione <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>Para obter o ID de uma opção denominada <code>Octoteam</code> para o campo <code>Team</code>, adicione <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") |.settings | fromjson.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
</ul>
<strong>Observação: </strong>Este fluxo de trabalho pressupõe que você tem um projeto com um único campo selecionado denominado "Status" que inclui uma opção denominada "Todo" e um campo de data denominado "Date posted". Você deve modificar esta seção para corresponder aos campos presentes na sua tabela.
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
Define variáveis de ambiente para esta etapa. <code>GITHUB_TOKEN</code> está descrito acima. <code>PR_ID</code> é o ID do pull request que acionou este fluxo de trabalho.

</td>
</tr>

<tr>
<td>

```yaml
item_id="$( gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation($project:ID!, $pr:ID!) {
    addProjectNextItem(input: {projectId: $project, contentId: $pr}) {
      projectNextItem {
        id
      }
    }
  }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectNextItem.projectNextItem.id')"
```

</td>
<td>
Usa <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> e a API para adicionar o pull request que acionou este fluxo de trabalho ao projeto. O <code>jq</code> analisa a resposta para obter o ID do item criado.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
Armazena o ID do item criado como uma variável de ambiente.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
Salva a data atual como uma variável de ambiente no formato <code>yyyy-mm-dd</code>.
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
```

</td>
<td>
Define variáveis de ambiente para esta etapa. <code>GITHUB_TOKEN</code> está descrito acima.

</td>
</tr>

<tr>
<td>

```yaml
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation (
    $project: ID!
    $item: ID!
    $status_field: ID!
    $status_value: String!
    $date_field: ID!
    $date_value: String!
  ) {
    set_status: updateProjectNextItemField(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: $status_value
    }) {
      projectNextItem {
        id
        }
    }
    set_date_posted: updateProjectNextItemField(input: {
      projectId: $project
      itemId: $item
      fieldId: $date_field
      value: $date_value
    }) {
      projectNextItem {
        id
      }
    }
  }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent
```

</td>
<td>
Define o valor do campo <code>Status</code> como <code>Todo</code>. Define o valor do campo <code>Date posted</code>.
</td>
</tr>

</table>

## Próximas etapas

Para obter mais informações sobre outras alterações que você pode fazer no seu projeto por meio da API, consulte "[Usando a API para gerenciar projetos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)". Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte "[{% data variables.product.prodname_actions %}](/actions).
