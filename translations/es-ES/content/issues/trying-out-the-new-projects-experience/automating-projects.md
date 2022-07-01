---
title: Automatizar proyectos (beta)
intro: 'Puedes utiilzar flujos de trabajo integrados o la API y las {% data variables.product.prodname_actions %} para administrar tus proyectos.'
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

{% data reusables.projects.graphql-deprecation %}

## Introducción

Puedes agregar automatización para ayudarte a administrar tu proyecto. Los proyectos (beta) incluyen flujos de trabajo integrados que puedes configurar a través de la IU. Adicionalmente, puedes escribir flujos personalizados con la API de GraphQL y las {% data variables.product.prodname_actions %}.

## Flujos de trabajo integrados

{% data reusables.projects.about-workflows %}

Puedes habilitar o inhabilitar los flujos de trabajo integrados de tu proyecto.

{% data reusables.projects.enable-basic-workflow %}

## Flujos de trabajo de {% data variables.product.prodname_actions %}

Esta sección demuestra cómo utilizar la API de GraphQL y las {% data variables.product.prodname_actions %} para agregar una solicitud de cambios a un proyecto organizacional. En los flujos de trabajo de ejemplo, cuando la solicitud de cambios se marca como "lista para revisión", se agrega una tarea nueva al proyecto con un campo de "Estado" configurado en "Pendiente" y se agrega la fecha actual a un campo personalizado de "Fecha en la que se publicó".

Puedes copiar uno de los siguientes flujos de trabajo y modificarlo de acuerdo con lo descrito en la siguiente tabla para que satisfaga tus necesidades.

Un proyecto puede abarcar repositorios múltiples, pero un flujo de trabajo es específico par aun repositorio. Agrega el flujo de trabajo a cada repositorio que quieras que rastree tu proyecto. Para obtener más información sobre cómo crear archivos de flujo de trabajo, consulta la sección "[Inicio rápido para las {% data variables.product.prodname_actions %}](/actions/quickstart)".

Este artículo asume que tienes un entendimiento básico de las {% data variables.product.prodname_actions %}. Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[{% data variables.product.prodname_actions %}](/actions)".

Para obtener más información sobre otros cambios que puedes hacer a tu proyecto a través de la API, consulta la sección "[Utilizar la API para administrar proyectos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)".

{% note %}

**Nota:** `GITHUB_TOKEN` tiene el alcance del nivel de repositorio y no puede acceder a los proyectos (beta). Para acceder a los proyectos (beta), puedes ya sea crear una {% data variables.product.prodname_github_app %} (recomendado para los proyectos organizacionales) o un token de acceso personal (recomendado para los proyectos de usuario). A continuación se muestran los ejemplos de flujo de trabajo para ambos acercamientos.

{% endnote %}

### Flujo de trabajo ejemplo autenticándose con una {% data variables.product.prodname_github_app %}

1. Crea una {% data variables.product.prodname_github_app %} o elige una {% data variables.product.prodname_github_app %} existente que le pertenezca a tu organización. Para obtener más información, consulta la sección "[Crear una {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app)".
2. Dale a tu {% data variables.product.prodname_github_app %} permisos de lectura y escritura para los proyectos organizacionales. Para obtener más información, consulta la sección "[Editar los permisos de una {% data variables.product.prodname_github_app %}](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)".

   {% note %}

   **Nota:** Puedes controlar los permisos de tu app con respecto a los proyectos organizacionales y de repositorio. Debes otorgar permisos de lectura y escritura de proyectos organizacionales; los permisos de lectura y escritura en los proyectos de repositorio no serán suficientes.

   {% endnote %}

3. Instala la {% data variables.product.prodname_github_app %} en tu organización. Instálala para todos los repositorios a los cuales necesita acceso tu proyecto. Para obtener más información, consulta la sección "[Instalar {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)".
4. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto en tu repositorio u organización. En el siguiente flujo de trabajo, reemplaza `APP_ID` con el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API de la misma. Para obtener más información, consulta la sección "[Apps](/rest/reference/apps#get-an-app)".
5. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como secreto en tu repositorio u organización. (Almacena todo el contenido del archivo, incluyendo `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`.) En el siguiente flujo de trabajo, reemplaza a `APP_PEM` con el nombre del secreto. Para obtener más información, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
6. En el siguiente flujo de trabajo, reemplaza a `YOUR_ORGANIZATION` con el nombre de tu organización. Por ejemplo, `octo-org`. Reemplaza a `YOUR_PROJECT_NUMBER` con el número de tu proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

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
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

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
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### Flujo de trabajo de ejemplo para autenticarse con un token de acceso personal

1. Crea un token de acceso personal con los alcances `project` y `repo`. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
2. Guardar el token de acceso personal como secreto en tu organización o repositorio.
3. En el siguiente flujo de trabajo, reemplaza a `YOUR_TOKEN` con el nombre del secreto. Reemplaza a `YOUR_ORGANIZATION` con el nombre de tu organización. Por ejemplo, `octo-org`. Reemplaza a `YOUR_PROJECT_NUMBER` con el número de tu proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

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
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

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
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### Explicación del flujo de trabajo

La siguiente tabla explica las secciones de los flujos de trabajo de ejemplo y te muestra cómo adaptar los flujos de trabajo para tu propio uso.

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
Utiliza la <a href="https://github.com/tibdex/github-app-token">acción tibdex/github-app-token</a> para generar un token de acceso a la instalación para tu app desde la ID y llave privada de la misma. Se puede acceder al token de acceso a la instalación más adelante en el flujo de trabajo como <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>.
<br>
<br>
Reemplaza <code>APP_ID</code> con el nombre del secreto que contiene la ID de tu app.
<br>
<br>
Reemplaza a <code>APP_PEM</code> con el nombre del secreto que contiene la llave privada de tu app.
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
Si estás utilizando un token de acceso personal, reemplaza a <code>YOUR_TOKEN</code> con el nombre del secreto que contiene tu token de acceso personal.
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
      projectV2(number: $number) {
        id
        fields(first:20) {
          nodes {
            ... on ProjectV2Field {
              id
              name
            }
            ... on ProjectV2SingleSelectField {
              id
              name
              options {
                id
                name
              }
            }
          }
        }
      }
    }
  }'  -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json
```

</td>
<td>
<p>Utiliza al <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> para consultar la API para la ID del proyecto y devuelve el nombre y la ID de los primeros 20 campos en este. <code>fields</code> devuelve una unión y la consulta utiliza los fragmentos en línea (<code>... on</code>) para devolver información sobre cualquier campo de <code>ProjectV2Field</code> y <code>ProjectV2SingleSelectField</code>.</p>

<p>La respuesta se almacena en un archivo que se llama <code>project_data.json</code>.</p>
</td>
</tr>

<tr>
<td>

```yaml
echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV
```

</td>
<td>
Analiza la respuesta desde la consulta de la API y almacena las ID relevantes como variables de ambiente. Modifica esto para obtener la ID para los campos u opciones diferentes. Por ejemplo:
<ul>
<li>Para obtener la ID de un campo llamado <code>Team</code>, agrega <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>Para obtener la ID de una opción llamada <code>Octoteam</code> para el campo de selección sencilla <code>Team</code>, agrega <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
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
    addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
      item {
        id
      }
    }
  }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"
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
    $date_value: Date!
  ) {
    set_status: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: { 
        singleSelectOptionId: $status_value
        }
    }) {
      projectV2Item {
        id
        }
    }
    set_date_posted: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $date_field
      value: { 
        date: $date_value
      }
    }) {
      projectV2Item {
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
