---
title: 'Automatización de {% data variables.product.prodname_projects_v2 %} mediante acciones'
shortTitle: Automating with Actions
intro: 'Puedes usar {% data variables.product.prodname_actions %} para automatizar los proyectos.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/automating-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c21e201e538d09826bd0d00f22fe60508c9d6a61
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106849'
---
## Flujos de trabajo de {% data variables.product.prodname_actions %}

Esta sección demuestra cómo utilizar la API de GraphQL y las {% data variables.product.prodname_actions %} para agregar una solicitud de cambios a un proyecto organizacional. En los flujos de trabajo de ejemplo, cuando la solicitud de cambios se marca como "lista para revisión", se agrega una tarea nueva al proyecto con un campo de "Estado" configurado en "Pendiente" y se agrega la fecha actual a un campo personalizado de "Fecha en la que se publicó".

Puedes copiar uno de los siguientes flujos de trabajo y modificarlo de acuerdo con lo descrito en la siguiente tabla para que satisfaga tus necesidades.

Un proyecto puede abarcar repositorios múltiples, pero un flujo de trabajo es específico par aun repositorio. Agregue el flujo de trabajo a cada repositorio del que quiera que realice un seguimiento el proyecto. Para obtener más información sobre cómo crear archivos de flujo de trabajo, vea "[Inicio rápido para {% data variables.product.prodname_actions %}](/actions/quickstart)".

Este artículo asume que tienes un entendimiento básico de las {% data variables.product.prodname_actions %}. Para obtener más información sobre {% data variables.product.prodname_actions %}, vea "[{% data variables.product.prodname_actions %}](/actions)".

Para obtener más información sobre otros cambios que puede realizar en el proyecto mediante la API, consulte "[Uso de la API para administrar proyectos](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)".

También puedes usar el flujo de trabajo **actions/add-to-project**, que mantiene {% data variables.product.company_short %} y agregará la incidencia o solicitud de incorporación de cambios actual al proyecto especificado. Para más información, consulta el repositorio [actions/add-to-project](https://github.com/actions/add-to-project) y el archivo LÉAME.

{% note %}

**Nota:** `GITHUB_TOKEN` tiene como ámbito el nivel de repositorio y no puede acceder a {% data variables.projects.projects_v2 %}. Para acceder a {% data variables.projects.projects_v2 %}, puedes crear una {% data variables.product.prodname_github_app %} (recomendado para proyectos de la organización) o un {% data variables.product.pat_generic %} (recomendado para proyectos de usuario). A continuación se muestran los ejemplos de flujo de trabajo para ambos acercamientos.

{% endnote %}

### Flujo de trabajo ejemplo autenticándose con una {% data variables.product.prodname_github_app %}

1. Crea una {% data variables.product.prodname_github_app %} o elige una {% data variables.product.prodname_github_app %} existente que le pertenezca a tu organización. Para obtener más información, vea "[Creación de una {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app)".
2. Dale a tu {% data variables.product.prodname_github_app %} permisos de lectura y escritura para los proyectos organizacionales. Para obtener más información, vea "[Edición de permisos de una {% data variables.product.prodname_github_app %}](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)".

   {% note %}

   **Nota:** Puede controlar el permiso de la aplicación para los proyectos de la organización y para los proyectos del repositorio. Debes otorgar permisos de lectura y escritura de proyectos organizacionales; los permisos de lectura y escritura en los proyectos de repositorio no serán suficientes.

   {% endnote %}

3. Instala la {% data variables.product.prodname_github_app %} en tu organización. Instálala para todos los repositorios a los cuales necesita acceso tu proyecto. Para más información, vea "[Instalación de {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)".
4. Almacena la ID de tu {% data variables.product.prodname_github_app %} como un secreto en tu repositorio u organización. En el flujo de trabajo siguiente, reemplace `APP_ID` por el nombre del secreto. Puedes encontrar tu ID de app en la página de ajustes de tu app o mediante la API de la misma. Para obtener más información, consulte "[Aplicaciones](/rest/reference/apps#get-an-app)".
5. Generar una llave privada para tu app. Almacena el contenido del archivo resultante como secreto en tu repositorio u organización. (Almacene todo el contenido del archivo, incluido el contenido de `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`). En el flujo de trabajo siguiente, reemplace `APP_PEM` por el nombre del secreto. Para más información, vea "[Autenticación con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
6. En el flujo de trabajo siguiente, reemplace `YOUR_ORGANIZATION` por el nombre de la organización. Por ejemplo: `octo-org`. Reemplace `YOUR_PROJECT_NUMBER` por el número del proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

### Flujo de trabajo de ejemplo de autenticación con una {% data variables.product.pat_generic %}

1. Crea una {% data variables.product.pat_v1 %} con los ámbitos `project` y `repo`. Para obtener más información, consulta "[Creación de una {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
2. Guarda el {% data variables.product.pat_generic %} como un secreto en el repositorio u organización.
3. En el flujo de trabajo siguiente, reemplace `YOUR_TOKEN` por el nombre del secreto. Reemplace `YOUR_ORGANIZATION` por el nombre de la organización. Por ejemplo, `octo-org`. Reemplace `YOUR_PROJECT_NUMBER` por el número del proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

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

{% data variables.product.prodname_github_app %} solo:

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
Usa la <a href="https://github.com/tibdex/github-app-token">acción tibdex/github-app-token</a> para generar un token de acceso de instalación para la aplicación a partir del id. de la aplicación y la clave privada. Más adelante en el flujo de trabajo se accede al token de acceso de instalación como <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>.
<br>
<br>
Reemplace <code>APP_ID</code> por el nombre del secreto que contiene el id. de la aplicación.
<br>
<br>
Reemplace <code>APP_PEM</code> por el nombre del secreto que contiene la clave privada de la aplicación.
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

{% data variables.product.pat_generic_caps %}:

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
Si usas un {% data variables.product.pat_generic %}, reemplaza <code>YOUR_TOKEN</code> por el nombre del secreto que contiene tu {% data variables.product.pat_generic %}.
<br>
<br>
Reemplaza <code>YOUR_ORGANIZATION</code> por el nombre de la organización. Por ejemplo, <code>octo-org</code>.
<br>
<br>
Reemplace <code>YOUR_PROJECT_NUMBER</code> por el número del proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, <code>https://github.com/orgs/octo-org/projects/5</code> tiene "5" como número de proyecto.
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
<p>Usa <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> para consultar a la API el id.del proyecto y devolver el nombre y el id. de los primeros 20 campos del proyecto. <code>fields</code> devuelve una unión y la consulta usa fragmentos insertados (<code>... on</code>) para devolver información acerca de los campos <code>ProjectV2Field</code> y <code>ProjectV2SingleSelectField</code>.</p>

<p>La respuesta se almacena en un archivo denominado <code>project_data.json</code>.</p>
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
<li>Para obtener el identificador de un campo denominado <code>Team</code>, agregue <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>Para obtener el id. de una opción denominada <code>Octoteam</code> para el campo de selección única <code>Team</code>, agrega <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code>.</li>
</ul>
<strong>Nota:</strong> En este flujo de trabajo se da por hecho que tiene un proyecto con un único campo de selección denominado "Status" (Estado) que incluye una opción denominada "Todo" (Pendiente) y un campo de fecha denominado "Date posted" (Fecha de publicación). Debes modificar esta sección para empatar con los campos que están presentes en tu tabla.
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

{% data variables.product.pat_generic_caps %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
Configura las variables para este paso. <code>GITHUB_TOKEN</code> se ha descrito anteriormente. <code>PR_ID</code> es el identificador de la solicitud de incorporación de cambios que ha desencadenado este flujo de trabajo.

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
Usa <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> y la API para agregar la solicitud de incorporación de cambios que ha desencadenado este flujo de trabajo al proyecto. La marca <code>jq</code> analiza la respuesta para obtener el identificador del elemento creado.
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
Guarda la fecha actual como una variable de entorno con el formato <code>yyyy-mm-dd</code>.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

{% data variables.product.pat_generic_caps %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
Configura las variables para este paso. <code>GITHUB_TOKEN</code> se ha descrito anteriormente.

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
Establece el valor del campo <code>Status</code> en <code>Todo</code>. Establece el valor del campo <code>Date posted</code>.
</td>
</tr>

</table>
