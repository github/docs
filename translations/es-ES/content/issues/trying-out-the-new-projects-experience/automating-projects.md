---
title: Automatizar proyectos (beta)
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

## Introducción

You can add automation to help manage your project. Projects (beta) includes built-in workflows that you can configure through the UI. Additionally, you can write custom workflows with the GraphQL API and {% data variables.product.prodname_actions %}.

## Built-in workflows

{% data reusables.projects.about-workflows %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}

## {% data variables.product.prodname_actions %} workflows

This section demonstrates how to use the GraphQL API and {% data variables.product.prodname_actions %} to add a pull request to an organization project. In the example workflows, when the pull request is marked as "ready for review", a new task is added to the project with a "Status" field set to "Todo", and the current date is added to a custom "Date posted" field.

You can copy one of the workflows below and modify it as described in the table below to meet your needs.

Un proyecto puede abarcar repositorios múltiples, pero un flujo de trabajo es específico par aun repositorio. Add the workflow to each repository that you want your project to track. Para obtener más información sobre cómo crear archivos de flujo de trabajo, consulta la sección "[Inicio rápido para las {% data variables.product.prodname_actions %}](/actions/quickstart)".

Este artículo asume que tienes un entendimiento básico de las {% data variables.product.prodname_actions %}. Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[{% data variables.product.prodname_actions %}](/actions)".

Para obtener más información sobre otros cambios que puedes hacer a tu proyecto a través de la API, consulta la sección "[Utilizar la API para administrar proyectos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)".

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
6. In the following workflow, replace `YOUR_ORGANIZATION` with the name of your organization. Por ejemplo, `octo-org`. Replace `YOUR_PROJECT_NUMBER` with your project number. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

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

1. Create a personal access token with `org:write` scope. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
2. Save the personal access token as a secret in your repository or organization.
3. En el siguiente flujo de trabajo, reemplaza a `YOUR_TOKEN` con el nombre del secreto. Replace `YOUR_ORGANIZATION` with the name of your organization. Por ejemplo, `octo-org`. Replace `YOUR_PROJECT_NUMBER` with your project number. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

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
Este flujo de trabajo se ejecuta cada que una solicitud de cambios en el repositorio se marca como "ready for review".
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
Configura las variables para este paso.
<br>
<br>
If you are using a personal access token, replace <code>YOUR_TOKEN</code> with the name of the secret that contains your personal access token.
<br>
<br>
Reemplaza <code>YOUR_ORGANIZATION</code> con el nombre de tu organización. Por ejemplo, <code>octo-org</code>.
<br>
<br>
reemplaza <code>YOUR_PROJECT_NUMBER</code> con el número de tu proeycto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección <code>https://github.com/orgs/octo-org/projects/5</code> tiene "5" como número de proyecto.
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
Utiliza el <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> para consultar la API para la ID del proyecto y para la ID, nombre y configuración de los primeros 20 campos en este. La respuesta se almacena en un archivo que se llama <code>project_data.json</code>.
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
Analiza la respuesta desde la consulta de la API y almacena las ID relevantes como variables de ambiente. Modifica esto para obtener la ID para los campos u opciones diferentes. Por ejemplo:
<ul>
<li>Para obtener la ID de un campo llamado <code>Team</code>, agrega <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>Para obtener la ID de una opción llamada <code>Octoteam</code> para el campo <code>Team</code>, agrega <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") |.settings | fromjson.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
</ul>
<strong>Nota: </strong> Este flujo de trabajo asume que tienes un proyecto con un campo de selección simple llamado "Status" que incluye una opción llamada "Todo" y un campo de fecha llamado "Date Posted". Debes modificar esta sección para empatar con los campos que están presentes en tu tabla.
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
Configura las variables para este paso. <code>GITHUB_TOKEN</code> se describe anteriormente. <code>PR_ID</code> es la ID de la solicitud de cambios que activó este flujo de trabajo.

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
Utiliza el <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> y la API para agrega la solicitud de cambios que activó este flujo de trabajo hacia el proyecto. La bandera <code>jq</code> analiza la respuesta para obtener la ID del elemento creado.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
Almacena la ID del elemento creado como variable de ambiente.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
Guarda la fecha actual como variable de ambiente en el formato <code>yyyy-mm-dd</code>.
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
Configura las variables para este paso. <code>GITHUB_TOKEN</code> se describe anteriormente.

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
Configura el valor del campo <code>Status</code> como <code>Todo</code>. Configura el valor del campo <code>Date posted</code>.
</td>
</tr>

</table>
