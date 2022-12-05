---
title: 'Verwalten von {% data variables.product.prodname_projects_v2 %} mit der API'
shortTitle: Automating with the API
intro: 'Du kannst die GraphQL-API verwenden, um deine Projekte zu automatisieren.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ab041e8473e310913eb1b794302415e9b6323e76
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169232'
---
In diesem Artikel wird veranschaulicht, wie du die GraphQL-API verwendest, um ein Projekt zu verwalten. Weitere Informationen zum Verwenden der API in einem {% data variables.product.prodname_actions %}-Workflow findest du unter [Automatisieren von {% data variables.product.prodname_projects_v2 %} mit Aktionen](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions). Eine vollständige Liste der verfügbaren Datentypen findest du unter [Referenz](/graphql/reference).

{% data reusables.projects.graphql-deprecation %}

## Authentifizierung

{% curl %}

Ersetze `TOKEN` in allen folgenden cURL-Beispielen durch ein Token, das den Bereich `read:project` (für Abfragen) oder `project` (für Abfragen und Mutationen) aufweist. Das Token kann ein {% data variables.product.pat_v1 %} für einen Benutzer oder ein Installationszugriffstoken für eine {% data variables.product.prodname_github_app %} sein. Weitere Informationen zum Erstellen eines {% data variables.product.pat_generic %} findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). Weitere Informationen zum Erstellen eines Installationszugriffstokens für eine {% data variables.product.prodname_github_app %} findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app).

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Bevor du {% data variables.product.prodname_cli %}-Befehle ausführen kannst, musst du dich authentifizieren, indem du `gh auth login --scopes "project"` ausführst. Wenn du für Projekte nur Lese- aber keinen Schreibzugriff benötigst, kannst du den `read:project`-Bereich anstelle von `project` bereitstellen. Weitere Informationen zur Befehlszeilenauthentifizierung findest du unter [gh auth login](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% cli %}

## Verwenden von Variablen

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

## Suchen nach Informationen zu Projekten

Verwende Abfragen, um Daten zu Projekten abzurufen. Weitere Informationen findest du unter [Informationen zu Abfragen](/graphql/guides/forming-calls-with-graphql#about-queries).

### Suchen der Knoten-ID eines Organisationsprojekts

Um dein Projekt über die API zu aktualisieren, musst du die Knoten-ID des Projekts kennen.

Zum Suchen der Knoten-ID eines Organisationsprojekts benötigst du den Namen und die Projektnummer der Organisation. Ersetze `ORGANIZATION` durch den Namen deiner Organisation. Beispiel: `octo-org`. Ersetze `NUMBER` durch die Projektnummer. Sieh dir die URL des Projekts an, um die Projektnummer zu finden. `https://github.com/orgs/octo-org/projects/5` hat beispielsweise die Projektnummer 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{organization(login: \"ORGANIZATION\") {projectV2(number: NUMBER){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "ORGANIZATION"){
      projectV2(number: NUMBER) {
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
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"{organization(login: \"ORGANIZATION\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "ORGANIZATION") {
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

### Suchen der Knoten-ID eines Benutzerprojekts 

Um dein Projekt über die API zu aktualisieren, musst du die Knoten-ID des Projekts kennen.

Zum Suchen der Knoten-ID eines Benutzerprojekts benötigst du die Projektnummer. Ersetzen Sie `USER` durch Ihren Benutzernamen. Beispiel: `octocat`. Ersetze `NUMBER` durch deine Projektnummer. Sieh dir die URL des Projekts an, um die Projektnummer zu ermitteln. `https://github.com/users/octocat/projects/5` hat beispielsweise die Projektnummer 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{user(login: \"USER\") {projectV2(number: NUMBER){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "USER"){
      projectV2(number: NUMBER) {
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
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"{user(login: \"USER\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "USER") {
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

### Suchen der Knoten-ID eines Felds

Um den Wert eines Felds zu aktualisieren, musst du die Knoten-ID des Felds kennen. Darüber hinaus musst du auch die ID der Optionen für einzelne Auswahlfelder und bei Iterationsfeldern auch die IDs der Iterationen kennen.

Im folgenden Beispiel werden die IDs, der Name, die Einstellungen und die Konfiguration für die ersten 20 Felder in einem Projekt zurückgegeben. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{ node(id: \"PROJECT_ID\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2Field { id name } ... on ProjectV2IterationField { id name configuration { iterations { startDate id }}} ... on ProjectV2SingleSelectField { id name options { id name }}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "PROJECT_ID") {
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
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{ node(id: \"PROJECT_ID\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2FieldCommon { id name }}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "PROJECT_ID") {
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
}'
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

### Suchen von Informationen zu Elementen in einem Projekt 

Du kannst die API abfragen, um Informationen zu Elementen in deinem Projekt zu finden.

Im folgenden Beispiel werden die ersten 20 Issues, Pull Requests und Entwurfsissues in einem Projekt zurückgegeben. Bei Issues und Pull Requests werden auch Titel und die ersten 10 zugewiesenen Personen zurückgegeben. Bei Entwurfsissues wird der Titel und der Textkörper zurückgegeben. Im Beispiel wird auch der Feldname und der Wert für alle Text-, Datums- oder Einzelauswahlfelder in den ersten acht Feldern des Projekts zurückgegeben. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{ node(id: \"PROJECT_ID\") { ... on ProjectV2 { items(first: 20) { nodes{ id fieldValues(first: 8) { nodes{ ... on ProjectV2ItemFieldTextValue { text field { ... on ProjectV2FieldCommon {  name }}} ... on ProjectV2ItemFieldDateValue { date field { ... on ProjectV2FieldCommon { name } } } ... on ProjectV2ItemFieldSingleSelectValue { name field { ... on ProjectV2FieldCommon { name }}}}} content{ ... on DraftIssue { title body } ...on Issue { title assignees(first: 10) { nodes{ login }}} ...on PullRequest { title assignees(first: 10) { nodes{ login }}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    node(id: "PROJECT_ID") {
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

## Aktualisieren von Projekten 

Du verwendest Mutationen, um Projekte zu aktualisieren. Weitere Informationen findest du unter [Informationen zu Mutationen](/graphql/guides/forming-calls-with-graphql#about-mutations).

{% note %}

**Hinweis:** Du kannst ein Element nicht im selben Aufruf hinzufügen und aktualisieren. Du musst `addProjectV2ItemById` verwenden, um das Element hinzuzufügen, und das Element anschließend mit `updateProjectV2ItemFieldValue` aktualisieren.

{% endnote %}

### Hinzufügen eines Elements zu einem Projekt

Im folgenden Beispiel wird deinem Projekt ein Issue oder Pull Request hinzugefügt. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `CONTENT_ID` durch die Knoten-ID des Issues oder Pull Requests, das bzw. den du hinzufügen möchtest.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {addProjectV2ItemById(input: {projectId: \"PROJECT_ID\" contentId: \"CONTENT_ID\"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2ItemById(input: {projectId: "PROJECT_ID" contentId: "CONTENT_ID"}) {
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

### Hinzufügen eines Entwurfsissues zu einem Projekt

Im folgenden Beispiel wird deinem Projekt ein Entwurfsissue hinzugefügt. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `TITLE` und `BODY` durch den Inhalt, den du für das neue Entwurfsissue benötigst.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {addProjectV2DraftIssue(input: {projectId: \"PROJECT_ID\" title: \"TITLE\" body: \"BODY\"}) {projectItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2DraftIssue(input: {projectId: "PROJECT_ID" title: "TITLE" body: "BODY"}) {
      projectItem {
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
    "addProjectV2DraftIssue": {
      "projectItem": {
        "id": "PVTI_lADOANN5s84ACbL0zgBbxFc"
      }
    }
  }
}
```

### Aktualisieren der Einstellungen eines Projekts 

Im folgenden Beispiel werden die Einstellungen deines Projekts aktualisiert. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Lege `public` auf `true` fest, um dein Projekt auf {% data variables.product.product_name %} öffentlich zu machen. Ändere `readme`, um Änderungen an der README-Datei deines Projekts vorzunehmen.

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: Bearer TOKEN' \
--data '{"query":"mutation { updateProjectV2(input: { projectId: \"PROJECT_ID\", title: \"Project title\", public: false, readme: \"# Project README\n\nA long description\", shortDescription: \"A short description\"}) { projectV2 { id, title, readme, shortDescription }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2(
      input: {
        projectId: "PROJECT_ID", 
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

### Aktualisieren eines benutzerdefinierten Text-, Zahlen- oder Datumsfelds 

Im folgenden Beispiel wird der Wert eines Textfelds für ein Element aktualisiert. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du aktualisieren möchtest. Ersetze `FIELD_ID` durch die ID des Felds, das du aktualisieren möchtest.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\" fieldId: \"FIELD_ID\" value: { text: \"Updated text\" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
        fieldId: "FIELD_ID"
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

### Aktualisieren eines einzelnen Auswahlfelds

Im folgenden Beispiel wird der Wert eines einzelnen Auswahlfelds für ein Element aktualisiert.

- Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.
- Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du aktualisieren möchtest.
- Ersetze `FIELD_ID` durch die ID des einzelnen Auswahlfelds, das du aktualisieren möchtest.
- Ersetze `OPTION_ID` durch die ID der gewünschten Auswahloption.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\" fieldId: \"FIELD_ID\" value: { singleSelectOptionId: \"OPTION_ID\" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
        fieldId: "FIELD_ID"
        value: { 
          singleSelectOptionId: "OPTION_ID"        
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

### Aktualisieren eines Iterationsfelds

Im folgenden Beispiel wird der Wert eines Iterationsfelds für ein Element aktualisiert.

- Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts.
- Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du aktualisieren möchtest.
- Ersetze `FIELD_ID` durch die ID des Iterationsfelds, das du aktualisieren möchtest.
- Ersetze `ITERATION_ID` durch die ID der gewünschten Iteration. Dies kann entweder eine aktive oder abgeschlossene Iteration sein.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\" fieldId: \"FIELD_ID\" value: { iterationId: \"ITERATION_ID\" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
        fieldId: "FIELD_ID"
        value: { 
          iterationId: "ITERATION_ID"        
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

### Löschen eines Elements aus einem Projekt

Im folgenden Beispiel wird ein Element aus einem Projekt gelöscht. Ersetze `PROJECT_ID` durch die Knoten-ID deines Projekts. Ersetze `ITEM_ID` durch die Knoten-ID des Elements, das du löschen möchtest.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {deleteProjectV2Item(input: {projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    deleteProjectV2Item(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
      }
    ) {
      deletedItemId
    }
  }'
```
{% endcli %}

## Verwalten von Projekten 

### Erstellen von Projekten

Du kannst eine Mutation verwenden, um ein neues Projekt zu erstellen. Weitere Informationen findest du unter [Informationen zu Mutationen](/graphql/guides/forming-calls-with-graphql#about-mutations).

Um ein neues Projekt über die API zu erstellen, musst du einen Namen für das Projekt und die Knoten-ID für einen {% data variables.product.product_name %}-Benutzer oder eine Organisation angeben, der bzw. die als Besitzer des Projekts fungieren soll.

Wenn du den Benutzernamen kennst, kannst du die Knoten-ID eines {% data variables.product.product_name %}-Benutzers oder einer Organisation ermitteln. Ersetze <code>GITHUB_OWNER</code> durch den {% data variables.product.product_name %}-Benutzernamen des neuen Projektbesitzers.

{% curl %}
```shell
curl --request GET \
  --url https://api.github.com/users/<em>GITHUB_OWNER</em> \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'Accept: application/vnd.github+json'
```
{% endcurl %}

{% cli %}
```shell
gh api -H "Accept: application/vnd.github+json" /users/<em>GITHUB_OWNER</em>
```
{% endcli %}

Um das Projekt zu erstellen, ersetze `OWNER_ID` durch die Knoten-ID des neuen Projektbesitzers und `PROJECT_NAME` durch einen Namen für das Projekt.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {createProjectV2(input: {ownerId: \"<em>OWNER_ID</em>\" title: \"<em>PROJECT_NAME</em>\"}) {projectV2 {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation{
    createProjectV2(
      input: {
        ownerId: "<em>OWNER_ID</em>",
        title: "<em>PROJECT_NAME</em>"
      }
    ){
      projectV2 {
        id
      }
     }
  }'
```
{% endcli %}


## Verwenden von Webhooks

Du kannst Webhooks verwenden, um Ereignisse zu abonnieren, die in deinem Projekt stattfinden. Beispielsweise kann {% data variables.product.product_name %} beim Bearbeiten eines Elements eine HTTP POST-Nutzlast an die konfigurierte URL des Webhooks senden, die Automatisierung auf deinem Server auslösen kann. Weitere Informationen zu Webhooks findest du unter [Informationen zu Webhooks](/developers/webhooks-and-events/webhooks/about-webhooks). Weitere Informationen zum `projects_v2_item`-Webhookereignis findest du unter [Webhookereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item).
