---
title: Automatizando projetos (beta)
intro: 'You can use built-in workflows or the API and {% data variables.product.prodname_actions %} to manage your projects.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
  - Workflows
  - Project management
---

{% data reusables.projects.projects-beta %}

## Introdução

You can add automation to help manage your project. Projects (beta) includes built-in workflows that you can configure through the UI. Additionally, you can write custom workflows with the GraphQL API and {% data variables.product.prodname_actions %}.

## Built-in workflows

{% data reusables.projects.about-workflows %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}

## {% data variables.product.prodname_actions %} workflows

This section demonstrates how to use the GraphQL API and {% data variables.product.prodname_actions %} to add a pull request to an organization project. In the example workflows, when the pull request is marked as "ready for review", a new task is added to the project with a "Status" field set to "Todo", and the current date is added to a custom "Date posted" field.

You can copy one of the workflows below and modify it as described in the table below to meet your needs.

Um projeto pode incluir vários repositórios, mas um fluxo de trabalho é específico para um repositório. Add the workflow to each repository that you want your project to track. Para obter mais informações sobre como criar arquivos de fluxo de trabalho, consulte "[Início rápido para {% data variables.product.prodname_actions %}](/actions/quickstart)".

Este artigo pressupõe que você tem um entendimento básico de {% data variables.product.prodname_actions %}. Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte "[{% data variables.product.prodname_actions %}](/actions).

Para obter mais informações sobre outras alterações que você pode fazer no seu projeto por meio da API, consulte "[Usando a API para gerenciar projetos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)".

{% note %}

**Note:** `GITHUB_TOKEN` is scoped to the repository level and cannot access projects (beta). To access projects (beta) you can either create a {% data variables.product.prodname_github_app %} (recommended for organization projects) or a personal access token (recommended for user projects). Workflow examples for both approaches are shown below.

{% endnote %}

### Example workflow authenticating with a {% data variables.product.prodname_github_app %}

1. Create a {% data variables.product.prodname_github_app %} or choose an existing {% data variables.product.prodname_github_app %} owned by your organization. For more information, see "[Creating a {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app)."
2. Give your {% data variables.product.prodname_github_app %} read and write permissions to organization projects. For more information, see "[Editing a {% data variables.product.prodname_github_app %}'s permissions](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)."

   {% note %}

   **Note:** You can control your app's permission to organization projects and to repository projects. You must give permission to read and write organization projects; permission to read and write repository projects will not be sufficient.

   {% endnote %}

3. Install the {% data variables.product.prodname_github_app %} in your organization. Install it for all repositories that your project needs to access. For more information, see "[Installing {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)."
4. Store your {% data variables.product.prodname_github_app %}'s ID as a secret in your repository or organization. In the following workflow, replace `APP_ID` with the name of the secret. You can find your app ID on the settings page for your app or through the App API. For more information, see "[Apps](/rest/reference/apps#get-an-app)."
5. Generate a private key for your app. Store the contents of the resulting file as a secret in your repository or organization. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following workflow, replace `APP_PEM` with the name of the secret. For more information, see "[Authenticating with {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)."
6. In the following workflow, replace `YOUR_ORGANIZATION` with the name of your organization. Por exemplo, `octo-org`. Replace `YOUR_PROJECT_NUMBER` with your project number. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem um número de projeto de 5.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
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
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
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
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api graphql -f query='
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

### Example workflow authenticating with a personal access token

1. Create a personal access token with `org:write` scope. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
2. Save the personal access token as a secret in your repository or organization.
3. No fluxo de trabalho a seguir, substitua `YOUR_TOKEN` pelo nome do segredo. Replace `YOUR_ORGANIZATION` with the name of your organization. Por exemplo, `octo-org`. Replace `YOUR_PROJECT_NUMBER` with your project number. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem um número de projeto de 5.

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
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
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
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
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
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
        run: |
          gh api graphql -f query='
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

### Workflow explanation

The following table explains sections of the example workflows and shows you how to adapt the workflows for your own use.

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

{% data variables.product.prodname_github_app %} only:

```yaml
- name: Generate token
  id: generate_token
  uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
  with:
    app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
    private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}
```

</td>
<td>
Uses the <a href="https://github.com/tibdex/github-app-token">tibdex/github-app-token action</a> to generate an installation access token for your app from the app ID and private key. The installation access token is accessed later in the workflow as <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>.
<br>
<br>
Replace <code>APP_ID</code> with the name of the secret that contains your app ID.
<br>
<br>
Replace <code>APP_PEM</code> with the name of the secret that contains your app private key.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
Define variáveis de ambiente para esta etapa.
<br>
<br>
If you are using a personal access token, replace <code>YOUR_TOKEN</code> with the name of the secret that contains your personal access token.
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
gh api graphql -f query='
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

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
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
item_id="$( gh api graphql -f query='
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

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
Define variáveis de ambiente para esta etapa. <code>GITHUB_TOKEN</code> está descrito acima.

</td>
</tr>

<tr>
<td>

```yaml
gh api graphql -f query='
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
