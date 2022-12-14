---
title: Verwenden der API zum Verwalten von Projekten (Betaversion)
intro: Du kannst die GraphQL-API verwenden, um Informationen zu Projekten zu finden und Projekte zu aktualisieren
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
- Projects
ms.openlocfilehash: 0c15bc1b813fc6dbcfa2ea0dc3f60afe6f035793
ms.sourcegitcommit: d243bbae4ce3c849695b5bc9221e705ee5a4a64f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/12/2022
ms.locfileid: "147081088"
---
{% data reusables.projects.graphql-deprecation %}

In diesem Artikel wird veranschaulicht, wie du die GraphQL-API verwendest, um ein Projekt zu verwalten. Weitere Informationen zum Verwenden der API in einem {% data variables.product.prodname_actions %}-Workflow findest du unter [Automatisieren von Projekten (Betaversion)](/issues/trying-out-the-new-projects-experience/automating-projects). Eine vollständige Liste der verfügbaren Datentypen findest du unter [Referenz](/graphql/reference).

{% data reusables.projects.projects-beta %}

## <a name="authentication"></a>Authentifizierung

{% curl %}

Ersetze `TOKEN` in allen folgenden cURL-Beispielen durch ein Token, das den Bereich `read:project` (für Abfragen) oder `project` (für Abfragen und Mutationen) aufweist. Das Token kann ein persönliches Zugriffstoken für einen Benutzer oder ein Installationszugriffstoken für eine {% data variables.product.prodname_github_app %} sein. Weitere Informationen zum Erstellen eines persönlichen Zugriffstokens findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). Weitere Informationen zum Erstellen eines Installationszugriffstokens für eine {% data variables.product.prodname_github_app %} findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app).

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Bevor du {% data variables.product.prodname_cli %}-Befehle ausführen kannst, musst du dich authentifizieren, indem du `gh auth login --scopes "project"` ausführst. Wenn du für Projekte nur Lese- aber keinen Schreibzugriff benötigst, kannst du den `read:project`-Bereich anstelle von `project` bereitstellen. Weitere Informationen zur Befehlszeilenauthentifizierung findest du unter [gh auth login](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% cli %}

## <a name="using-variables"></a>Verwenden von Variablen

In allen folgenden Beispielen kannst du Variablen verwenden, um deine Skripts zu vereinfachen. Verwende `-F` zum Übergeben einer Variable, die eine Zahl, ein boolescher Wert oder NULL ist. Verwende für alle andere Variablen `-f`. Beispiel:

```shell
my_org="octo-org"
my_num=5
gh api graphql -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectV2(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

Weitere Informationen findest du unter [Erstellen von Anrufen mit GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables).

{% endcli %}

## <a name="finding-information-about-projects"></a>Suchen nach Informationen zu Projekten

Verwende Abfragen, um Daten zu Projekten abzurufen. Weitere Informationen findest du unter [Informationen zu Abfragen](/graphql/guides/forming-calls-with-graphql#about-queries).

### <a name="finding-the-node-id-of-an-organization-project"></a>Suchen der Knoten-ID eines Organisationsprojekts

Um dein Projekt über die API zu aktualisieren, musst du die Knoten-ID des Projekts kennen.

Zum Suchen der Knoten-ID eines Organisationsprojekts benötigst du den Namen und die Projektnummer der Organisation. Ersetze `ORGANIZATION` durch den Namen deiner Organisation. Beispiel: `octo-org`. Ersetze `NUMBER` durch die Projektnummer. Sieh dir die URL des Projekts an, um die Projektnummer zu finden. `https://github.com/orgs/octo-org/projects/5` hat beispielsweise die Projektnummer 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectV2(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>"){
      projectV2(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

Du kannst auch nach den Knoten-IDs aller Projekte in deiner Organisation suchen. Im folgenden Beispiel werden die Knoten-IDs und Titel der ersten 20 Projekte in einer Organisation zurückgegeben. Ersetze `ORGANIZATION` durch den Namen deiner Organisation. Beispiel: `octo-org`.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>") {
      projectsV2(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### <a name="finding-the-node-id-of-a-user-project"></a>Suchen der Knoten-ID eines Benutzerprojekts 

Um dein Projekt über die API zu aktualisieren, musst du die Knoten-ID des Projekts kennen.

Zum Suchen der Knoten-ID eines Benutzerprojekts benötigst du die Projektnummer. Ersetze `USER` durch deinen Benutzernamen. Beispiel: `octocat`. Ersetze `NUMBER` durch deine Projektnummer. Sieh dir die URL des Projekts an, um die Projektnummer zu finden. `https://github.com/users/octocat/projects/5` hat beispielsweise die Projektnummer 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{user(login: \"<em>USER</em>\") {projectV2(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>"){
      projectV2(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

Du kannst auch nach den Knoten-IDs für alle deine Projekte suchen. Im folgenden Beispiel werden die Knoten-IDs und Titel deiner ersten 20 Projekte zurückgegeben. Ersetze `USER` durch deinen Benutzernamen. Beispiel: `octocat`.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"{user(login: \"<em>USER</em>\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>") {
      projectsV2(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### <a name="finding-the-node-id-of-a-field"></a>Suchen der Knoten-ID eines Felds

Um den Wert eines Felds zu aktualisieren, musst du die Knoten-ID des Felds kennen. Darüber hinaus musst du auch die ID der Optionen für einzelne Auswahlfelder und bei Iterationsfeldern auch die IDs der Iterationen kennen.

Im folgenden Beispiel werden die IDs, der Name, die Einstellungen und die Konfiguration für die ersten 20 Felder in einem Projekt zurückgegeben. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2Field { id name } ... on ProjectV2IterationField { id name configuration { iterations { startDate id }}} ... on ProjectV2SingleSelectField { id name options { id name }}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "<em>PROJECT_ID</em>") {
    ... on ProjectV2 {
      fields(first: 20) {
        nodes {
          ... on ProjectV2Field {
            id
            name
          }
          ... on ProjectV2IterationField {
            id
            name
            configuration {
              iterations {
                startDate
                id
              }
            }
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
}'
```
{% endcli %}

Die Antwort entspricht etwa dem folgenden Beispiel:

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZY",
            "name": "Title"
          },
          {
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZc",
            "name": "Assignees"
          },
          {
            "id": "PVTSSF_lADOANN5s84ACbL0zgBZrZg",
            "name": "Status",
            "options": [
              {
                "id": "f75ad846",
                "name": "Todo"
              },
              {
                "id": "47fc9ee4",
                "name": "In Progress"
              },
              {
                "id": "98236657",
                "name": "Done"
              }
            ]
          },
          {
            "id": "PVTIF_lADOANN5s84ACbL0zgBah28",
            "name": "Iteration",
            "configuration": {
              "iterations": [
                {
                  "startDate": "2022-05-29",
                  "id": "cfc16e4d"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```

Jedes Feld besitzt eine ID und einen Namen. Einzelne Auswahlfelder werden als `ProjectV2SingleSelectField`-Objekt zurückgegeben und verfügen über ein `options`-Feld, in dem die ID jeder Option für die einzelne Auswahl angegeben ist. Iterationsfelder werden als `ProjectV2IterationField`-Objekt zurückgegeben und verfügen über ein `configuration`-Feld, das wiederum ein `iterations`-Feld enthält, das die ID und Informationen zu jeder Iteration enthält. 

Wenn du nur den Namen und die ID eines Felds benötigst und keine Informationen zu Iterationen oder den Optionen eines einzelnen Auswahlfelds, kannst du das `ProjectV2FieldCommon`-Objekt. 

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2FieldCommon { id name }}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "<em>PROJECT_ID</em>") {
    ... on ProjectV2 {
      fields(first: 20) {
        nodes {
          ... on ProjectV2FieldCommon {
            id
            name
          }
        }
      }
    }
  }
}
```
{% endcli %}

Die Antwort bei Verwendung des `ProjectV2FieldCommon`-Objekts sieht in etwa wie das folgende Beispiel aus:

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "__typename": "ProjectV2Field",
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZY",
            "name": "Title"
          },
          {
            "__typename": "ProjectV2Field",
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZc",
            "name": "Assignees"
          },
          {
            "__typename": "ProjectV2SingleSelectField",
            "id": "PVTSSF_lADOANN5s84ACbL0zgBZrZg",
            "name": "Status"
          },
          {
            "__typename": "ProjectV2IterationField",
            "id": "PVTIF_lADOANN5s84ACbL0zgBah28",
            "name": "Iteration"
          }
        ]
      }
    }
  }
}
```

### <a name="finding-information-about-items-in-a-project"></a>Suchen von Informationen zu Elementen in einem Projekt 

Du kannst die API abfragen, um Informationen zu Elementen in deinem Projekt zu finden.

Im folgenden Beispiel werden die ersten 20 Issues, Pull Requests und Entwurfsissues in einem Projekt zurückgegeben. Bei Issues und Pull Requests werden auch Titel und die ersten 10 zugewiesenen Personen zurückgegeben. Bei Entwurfsissues wird der Titel und der Textkörper zurückgegeben. Im Beispiel wird auch der Feldname und der Wert für alle Text-, Datums- oder Einzelauswahlfelder in den ersten acht Feldern des Projekts zurückgegeben. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { items(first: 20) { nodes{ id fieldValues(first: 8) { nodes{ ... on ProjectV2ItemFieldTextValue { text field { ... on ProjectV2FieldCommon {  name }}} ... on ProjectV2ItemFieldDateValue { date field { ... on ProjectV2FieldCommon { name } } } ... on ProjectV2ItemFieldSingleSelectValue { name field { ... on ProjectV2FieldCommon { name }}}}} content{ ... on DraftIssue { title body } ...on Issue { title assignees(first: 10) { nodes{ login }}} ...on PullRequest { title assignees(first: 10) { nodes{ login }}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
        ... on ProjectV2 {
          items(first: 20) {
            nodes{
              id
              fieldValues(first: 8) {
                nodes{                
                  ... on ProjectV2ItemFieldTextValue {
                    text
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldDateValue {
                    date
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                }              
              }
              content{              
                ... on DraftIssue {
                  title
                  body
                }
                ...on Issue {
                  title
                  assignees(first: 10) {
                    nodes{
                      login
                    }
                  }
                }
                ...on PullRequest {
                  title
                  assignees(first: 10) {
                    nodes{
                      login
                    }
                  }
                }
              }
            }
          }
        }
      }
    }'
```
{% endcli %}

Ein Projekt kann Elemente enthalten, für die Benutzer*innen nicht über die Berechtigung zum Anzeigen verfügen. In diesem Fall wird der Elementtyp als `REDACTED`zurückgegeben.

## <a name="updating-projects"></a>Aktualisieren von Projekten 

Du verwendest Mutationen, um Projekte zu aktualisieren. Weitere Informationen findest du unter [Informationen zu Mutationen](/graphql/guides/forming-calls-with-graphql#about-mutations).

{% note %}

**Hinweis:** Du kannst ein Element nicht im selben Aufruf hinzufügen und aktualisieren. Du musst `addProjectV2ItemById` verwenden, um das Element hinzuzufügen, und das Element anschließend mit `updateProjectV2ItemFieldValue` aktualisieren.

{% endnote %}

### <a name="adding-an-item-to-a-project"></a>Hinzufügen eines Elements zu einem Projekt

Im folgenden Beispiel wird deinem Projekt ein Issue oder Pull Request hinzugefügt. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `CONTENT_ID` durch die Knoten-ID des Issues oder Pull Requests, das bzw. den du hinzufügen möchtest.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectV2ItemById(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2ItemById(input: {projectId: "<em>PROJECT_ID</em>" contentId: "<em>CONTENT_ID</em>"}) {
      item {
        id
      }
    }
  }'
```
{% endcli %}

Die Antwort enthält die Knoten-ID des neu erstellten Elements.

```json
{
  "data": {
    "addProjectV2ItemById": {
      "item": {
        "id": "PVTI_lADOANN5s84ACbL0zgBVd94"
      }
    }
  }
}
```

Wenn du versuchst, ein bereits vorhandenes Element hinzuzufügen, wird stattdessen die ID des vorhandenen Elements zurückgegeben.

### <a name="adding-a-draft-issue-to-a-project"></a>Hinzufügen eines Entwurfsissues zu einem Projekt

Im folgenden Beispiel wird deinem Projekt ein Entwurfsissue hinzugefügt. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `TITLE` und `BODY` durch den Inhalt, den du für das neue Entwurfsissue benötigst.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {
      item {
        id
      }
    }
  }'
```
{% endcli %}

Die Antwort enthält die Knoten-ID des neu erstellten Entwurfsissues.

```json
{
  "data": {
    "addProjectV2ItemById": {
      "item": {
        "id": "PVTI_lADOANN5s84ACbL0zgBbxFc"
      }
    }
  }
}
```

### <a name="updating-a-projects-settings"></a>Aktualisieren der Einstellungen eines Projekts 

Im folgenden Beispiel werden die Einstellungen deines Projekts aktualisiert. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Lege `public` auf `true` fest, um dein Projekt auf {% data variables.product.product_name %} öffentlich zu machen. Ändere `readme`, um Änderungen an der README-Datei deines Projekts vorzunehmen.

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: token <em>TOKEN</em>' \
--data '{"query":"mutation { updateProjectV2(input: { projectId: \"<em>PROJECT_ID</em>\", title: \"Project title\", public: false, readme: \"# Project README\n\nA long description\", shortDescription: \"A short description\"}) { projectV2 { id, title, readme, shortDescription }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2(
      input: {
        projectId: "<em>PROJECT_ID</em>", 
        title: "Project title",
        public: false,
        readme: "# Project README\n\nA long description",
        shortDescription: "A short description"
      }
    ) {
      projectV2 {
        id
        title
        readme
        shortDescription
      }
    }
  }'
```
{% endcli %}

### <a name="updating-a-custom-text-number-or-date-field"></a>Aktualisieren eines benutzerdefinierten Text-, Zahlen- oder Datumsfelds 

Im folgenden Beispiel wird der Wert eines Textfelds für ein Element aktualisiert. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du aktualisieren möchtest. Ersetze `FIELD_ID` durch die ID des Felds, das du aktualisieren möchtest.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { text: "Updated text" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          text: "Updated text"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

{% note %}

**Hinweis:** Du kannst `updateProjectV2ItemFieldValue` nicht verwenden, um `Assignees`, `Labels`, `Milestone` oder `Repository` zu ändern, da diese Felder Eigenschaften von Pull Requests und Issues sind, nicht von Projektelementen. Stattdessen kannst du die folgenden Mutationen verwenden:

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### <a name="updating-a-single-select-field"></a>Aktualisieren eines einzelnen Auswahlfelds

Im folgenden Beispiel wird der Wert eines einzelnen Auswahlfelds für ein Element aktualisiert.

- Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.
- Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du aktualisieren möchtest.
- Ersetze `FIELD_ID` durch die ID des einzelnen Auswahlfelds, das du aktualisieren möchtest.
- Ersetze `OPTION_ID` durch die ID der gewünschten Auswahloption.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { singleSelectOptionId: "<em>OPTION_ID</em>" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          singleSelectOptionId: "<em>OPTION_ID</em>"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

### <a name="updating-an-iteration-field"></a>Aktualisieren eines Iterationsfelds

Im folgenden Beispiel wird der Wert eines Iterationsfelds für ein Element aktualisiert.

- Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.
- Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du aktualisieren möchtest.
- Ersetze `FIELD_ID` durch die ID des Iterationsfelds, das du aktualisieren möchtest.
- Ersetze `ITERATION_ID` durch die ID der gewünschten Iteration. Dies kann entweder eine aktive oder abgeschlossene Iteration sein.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { singleSelectOptionId: "<em>OPTION_ID</em>" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          iterationId: "<em>ITERATION_ID</em>"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

### <a name="deleting-an-item-from-a-project"></a>Löschen eines Elements aus einem Projekt

Im folgenden Beispiel wird ein Element aus einem Projekt gelöscht. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du löschen möchtest.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {deleteProjectV2Item(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    deleteProjectV2Item(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
      }
    ) {
      deletedItemId
    }
  }'
```
{% endcli %}
