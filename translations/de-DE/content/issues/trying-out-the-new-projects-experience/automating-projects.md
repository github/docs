---
title: Automatisieren von Projekten (Beta)
intro: Du kannst integrierte Workflows oder die API und {% data variables.product.prodname_actions %} zum Verwalten deiner Projekte verwenden.
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
ms.openlocfilehash: ed82cc99b3faf5e58e0ddb09fac0bbab1b6123f2
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/26/2022
ms.locfileid: "147410531"
---
{% data reusables.projects.projects-beta %}

{% data reusables.projects.graphql-deprecation %}

## <a name="introduction"></a>Einführung

Du kannst Automatisierungen zum Verwalten deines Projekts hinzufügen. Projekte (Beta) enthalten integrierte Workflows, die du über die Benutzeroberfläche konfigurieren kannst. Darüber hinaus kannst du mit der GraphQL-API und {% data variables.product.prodname_actions %} benutzerdefinierte Workflows schreiben.

## <a name="built-in-workflows"></a>Integrierte Workflows

{% data reusables.projects.about-workflows %}

Du kannst die integrierten Workflows für dein Projekt aktivieren oder deaktivieren.

{% data reusables.projects.enable-basic-workflow %}

## <a name="-data-variablesproductprodname_actions--workflows"></a>{% data variables.product.prodname_actions %}-Workflows

In diesem Abschnitt wird veranschaulicht, wie du die GraphQL-API und {% data variables.product.prodname_actions %} verwenden kannst, um einen Pull Request zu einem Organisationsprojekt hinzuzufügen. Wenn der Pull Request in den Beispielworkflows als „Bereit zur Überprüfung“ gekennzeichnet ist, wird dem Projekt ein neuer Auftrag hinzugefügt. Bei diesem Auftrag wird das Feld „Status“ auf „Aufgaben“ festgelegt, und das aktuelle Datum wird einem benutzerdefinierten „Bereitstellungsdatum“-Feld hinzugefügt.

Du kannst einen der nachstehenden Workflows kopieren und wie in der folgenden Tabelle beschrieben so ändern, dass er deinen Anforderungen entspricht.

Ein Projekt kann mehrere Repositorys umfassen, ein Workflow ist jedoch für ein Repository spezifisch. Füge den Workflow zu allen Repositorys hinzu, die das Projekt nachverfolgen soll. Weitere Informationen zum Erstellen von Workflowdateien findest du unter [Schnellstart für {% data variables.product.prodname_actions %}](/actions/quickstart).

In diesem Artikel wird ein grundlegendes Verständnis von {% data variables.product.prodname_actions %} vorausgesetzt. Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [{% data variables.product.prodname_actions %}](/actions).

Weitere Informationen zu sonstigen Änderungen, die du an deinem Projekt über die API vornehmen kannst, findest du unter [Verwenden der API zum Verwalten von Projekten](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects).

{% note %}

**Hinweis:** `GITHUB_TOKEN` ist auf die Repositoryebene festgelegt und kann nicht auf Projekte (Beta) zugreifen. Wenn du auf Projekte (Beta) zugreifen möchtest, kannst du entweder eine {% data variables.product.prodname_github_app %} (für Organisationsprojekte empfohlen) oder ein persönliches Zugriffstoken (für Benutzerprojekte empfohlen) erstellen. Unten werden Workflowbeispiele für beide Ansätze gezeigt.

{% endnote %}

### <a name="example-workflow-authenticating-with-a--data-variablesproductprodname_github_app-"></a>Beispielworkflow für die Authentifizierung mit einer {% data variables.product.prodname_github_app %}

1. Erstelle eine {% data variables.product.prodname_github_app %}, oder wähle eine vorhandene {% data variables.product.prodname_github_app %} im Besitz deiner Organisation aus. Weitere Informationen findest du unter [Erstellen einer {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app).
2. Weise deiner {% data variables.product.prodname_github_app %} Lese- und Schreibberechtigungen für Organisationsprojekte zu. Weitere Informationen findest du unter [Bearbeiten der Berechtigungen einer {% data variables.product.prodname_github_app %}](/developers/apps/managing-github-apps/editing-a-github-apps-permissions).

   {% note %}

   **Hinweis:** Du kannst die Berechtigung deiner App für Organisationsprojekte und Repositoryprojekte steuern. Du musst die Berechtigung zum Lesen und Schreiben von Organisationsprojekten erteilen. Die Lese- und Schreibberechtigung für Repositoryprojekte ist nicht ausreichend.

   {% endnote %}

3. Installiere die {% data variables.product.prodname_github_app %} in deiner Organisation. Installiere sie für alle Repositorys, auf die dein Projekt zugreifen muss. Weitere Informationen findest du unter [Installieren von {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository).
4. Speichere die ID der {% data variables.product.prodname_github_app %} als Geheimnis in deinem Repository oder deiner Organisation. Ersetze `APP_ID` im folgenden Workflow durch den Namen des Geheimnisses. Du kannst die App-ID auf der Einstellungsseite deiner App oder durch die App-API finden. Weitere Informationen findest du unter [Apps](/rest/reference/apps#get-an-app).
5. Generiere einen privaten Schlüssel für deine App. Speichere den Inhalt der resultierenden Datei als Geheimnis in deinem Repository oder deiner Organisation. (Speichere den gesamten Inhalt der Datei, einschließlich `-----BEGIN RSA PRIVATE KEY-----` und `-----END RSA PRIVATE KEY-----`.) Ersetze `APP_PEM` im folgenden Workflow durch den Namen des Geheimnisses. Weitere Informationen findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
6. Ersetze `YOUR_ORGANIZATION` im folgenden Workflow durch den Namen deiner Organisation. Beispiel: `octo-org`. Ersetze `YOUR_PROJECT_NUMBER` durch deine Projektnummer. Sieh dir die URL des Projekts an, um die Projektnummer zu ermitteln. `https://github.com/orgs/octo-org/projects/5` hat beispielsweise die Projektnummer 5.

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

### <a name="example-workflow-authenticating-with-a-personal-access-token"></a>Beispielworkflow für die Authentifizierung mit einem persönlichen Zugriffstoken

1. Erstelle ein persönliches Zugriffstoken mit den Geltungsbereichen `project` und `repo`. Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).
2. Speichere das persönliche Zugriffstoken als Geheimnis im Repository oder in der Organisation.
3. Ersetze `YOUR_TOKEN` im folgenden Workflow durch den Namen des Geheimnisses. Ersetze `YOUR_ORGANIZATION` durch den Namen deiner Organisation. Beispiel: `octo-org`. Ersetze `YOUR_PROJECT_NUMBER` durch deine Projektnummer. Sieh dir die URL des Projekts an, um die Projektnummer zu ermitteln. `https://github.com/orgs/octo-org/projects/5` hat beispielsweise die Projektnummer 5.

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

### <a name="workflow-explanation"></a>Erklärung des Workflows

In der folgenden Tabelle werden Abschnitte der Beispielworkflows erklärt, und es wird veranschaulicht, wie du die Workflows zur eigenen Verwendung anpassen kannst.

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
Dieser Workflow wird ausgeführt, wenn ein Pull Request im Repository als „Bereit zur Überprüfung“ gekennzeichnet ist.
</td>
</tr>

<tr>
<td>

Nur für {% data variables.product.prodname_github_app %}:

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
Der Workflow verwendet <a href="https://github.com/tibdex/github-app-token">tibdex/github-app-token action</a>, um aus der App-ID und dem privaten Schlüssel ein Installationszugriffstoken für deine App zu generieren. Auf das Installationszugriffstoken wird später im Workflow als <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code> zugegriffen.
<br>
<br>
Ersetze <code>APP_ID</code> durch den Namen des Geheimnisses, das deine App-ID enthält.
<br>
<br>
Ersetze <code>APP_PEM</code> durch den Namen des Geheimnisses, das deinen privaten App-Schlüssel enthält.
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

Persönliches Zugriffstoken:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
Der Workflow legt Umgebungsvariablen für diesen Schritt fest.
<br>
<br>
Wenn du ein persönliches Zugriffstoken verwendest, ersetze <code>YOUR_TOKEN</code> durch den Namen des Geheimnisses, das dein persönliches Zugriffstoken enthält.
<br>
<br>
Ersetze <code>YOUR_ORGANIZATION</code> durch den Namen deiner Organisation. Beispiel: <code>octo-org</code>.
<br>
<br>
Ersetze <code>YOUR_PROJECT_NUMBER</code> durch deine Projektnummer. Sieh dir die URL des Projekts an, um die Projektnummer zu ermitteln. <code>https://github.com/orgs/octo-org/projects/5</code> hat beispielsweise die Projektnummer 5.
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
<p>Dieser Workflow verwendet die <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a>, um die API für die ID des Projekts abzurufen und den Namen und die ID der ersten 20 Felder im Projekt zurückzugeben. <code>fields</code> gibt eine Vereinigung zurück, und die Abfrage verwendet Inlinefragmente (<code>... on</code>), um Informationen zu den beliebigen Feldern <code>ProjectV2Field</code> und <code>ProjectV2SingleSelectField</code> zurückzugeben.</p>

<p>Die Antwort wird in einer Datei mit dem Namen <code>project_data.json</code> gespeichert.</p>
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
Der Workflow analysiert die Antwort der API-Abfrage und speichert die relevanten IDs als Umgebungsvariablen. Ändere dies, um die ID verschiedener Felder oder Optionen abzurufen. Beispiel:
<ul>
<li>Füge <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code> hinzu, um die ID eines Felds namens <code>Team</code> abzurufen.</li>
<li>Füge <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code> hinzu, um die ID einer Option namens <code>Octoteam</code> für das einzelne ausgewählte Feld <code>Team</code> abzurufen.</li>
</ul>
<strong>Hinweis:</strong> Bei diesem Workflow wird davon ausgegangen, dass du über ein Projekt mit einem einzelnen Auswahlfeld namens „Status“ verfügst, das die Option „Aufgaben“ und das Datumsfeld „Bereitstellungsdatum“ enthält. Du musst diesen Abschnitt ändern, um ihn den in der Tabelle vorhandenen Feldern anzupassen.
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

Persönliches Zugriffstoken:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
Der Workflow legt Umgebungsvariablen für diesen Schritt fest. <code>GITHUB_TOKEN</code> wird oben beschrieben. <code>PR_ID</code> ist die ID des Pull Requests, der diesen Workflow ausgelöst hat.

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
Der Workflow verwendet <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> und die API, um den Pull Request hinzuzufügen, der den Workflow dieses Projekts ausgelöst hat. Das <code>jq</code>-Flag analysiert die Antwort, um die ID des erstellten Elements abzurufen.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
Der Workflow speichert die ID des erstellten Elements als Umgebungsvariable.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
Der Workflow speichert das aktuelle Datum als Umgebungsvariable im <code>yyyy-mm-dd</code>-Format.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

Persönliches Zugriffstoken:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
Der Workflow legt Umgebungsvariablen für diesen Schritt fest. <code>GITHUB_TOKEN</code> wird oben beschrieben.

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
Der Workflow legt den Wert des Felds <code>Status</code> auf <code>Todo</code> fest. Der Workflow legt den Wert des Felds <code>Date posted</code> fest.
</td>
</tr>

</table>
