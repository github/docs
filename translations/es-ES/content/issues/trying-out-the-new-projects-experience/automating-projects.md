---
title: Automatizar proyectos (beta)
intro: 'Puedes utilizar la API y las {% data variables.product.prodname_actions %} para administrar tus proyectos.'
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

## Introducción

Este artículo demuestra cómo utilizar la API de GraphQL y las {% data variables.product.prodname_actions %} para agregar una solicitud de cambios a un proyecto. Cuando la solicitud de cambios se marca como "lista para revisión", se agrega una tarea nueva al proyecto con un campo de "Estado" configurado en "Pendiente" y se agrega la fecha actual a un campo personalizado de "Fecha en la que se publicó".

Este artículo asume que tienes un entendimiento básico de las {% data variables.product.prodname_actions %}. Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[{% data variables.product.prodname_actions %}](/actions)".

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

{% note %}

**Nota:** El `GITHUB_TOKEN` no tiene los alcances necesarios para acceder a los proyectos (beta). Debes crear un token con el alcance `org:write` y guardarlo como secreto en tu repositorio u organización. En el siguiente flujo de trabajo, reemplaza a `YOUR_TOKEN` con el nombre del secreto. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% endnote %}

## Ejemplo de flujo de trabajo

Puedes copiar este flujo de trabajo y modificarlo conformes se describe en la tabla siguiente para satisfacer tus necesidades. Un proyecto puede abarcar repositorios múltiples, pero un flujo de trabajo es específico par aun repositorio. Agrega este flujo de trabajo a cada repositorio que quieras que rastree tu proyecto. Para obtener más información sobre cómo crear archivos de flujo de trabajo, consulta la sección "[Inicio rápido para las {% data variables.product.prodname_actions %}](/actions/quickstart)".

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

La tabla siguiente explica las secciones del flujo de trabajo y te muestra cómo adaptarlas para que las utilices.

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

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
Configura las variables para este paso.
<br>
<br>
Crea un token con el alcance <code>org:write</code> y guárdalo como un secreto en tu repositorio u organización. Reemplaza <code>YOUR_TOKEN</code> con el nombre del secreto.
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

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
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

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
```

</td>
<td>
Configura las variables para este paso. <code>GITHUB_TOKEN</code> se describe anteriormente.

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
Configura el valor del campo <code>Status</code> como <code>Todo</code>. Configura el valor del campo <code>Date posted</code>.
</td>
</tr>

</table>

## Pasos siguientes

Para obtener más información sobre otros cambios que puedes hacer a tu proyecto a través de la API, consulta la sección "[Utilizar la API para administrar proyectos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)". Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[{% data variables.product.prodname_actions %}](/actions)".
