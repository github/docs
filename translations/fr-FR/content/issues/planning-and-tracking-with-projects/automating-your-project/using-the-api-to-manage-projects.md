---
title: 'Utilisation de l’API pour gérer des {% data variables.product.prodname_projects_v2 %}'
shortTitle: Automating with the API
intro: Vous pouvez utiliser l’API GraphQL pour automatiser vos projets.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 9deedb6f9940afd509eeaf974abd916a0cb5f5a0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107244'
---
Cet article explique comment utiliser l’API GraphQL pour gérer un projet. Pour plus d’informations sur l’utilisation de l’API dans un workflow {% data variables.product.prodname_actions %}, consultez « [Automatisation des {% data variables.product.prodname_projects_v2 %} avec des actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions) ». Pour obtenir la liste complète des types de données disponibles, consultez « [Référence](/graphql/reference) ».

{% data reusables.projects.graphql-deprecation %}

## Authentification

{% curl %}

Dans tous les exemples cURL suivants, remplacez `TOKEN` par un jeton avec l’étendue `read:project` (pour les requêtes) ou `project` (pour les requêtes et les mutations). Le jeton peut être un {% data variables.product.pat_v1 %} pour un utilisateur ou un jeton d’accès d’installation pour une {% data variables.product.prodname_github_app %}. Pour plus d’informations sur la création d’un {% data variables.product.pat_generic %}, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) ». Pour plus d’informations sur la création d’un jeton d’accès d’installation pour une {% data variables.product.prodname_github_app %}, consultez « [Authentification avec une {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app) ».

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Avant d’exécuter les commandes {% data variables.product.prodname_cli %}, vous devez vous authentifier en exécutant `gh auth login --scopes "project"`. Si vous avez seulement besoin de lire, mais pas de modifier des projets, vous pouvez fournir l’étendue `read:project` au lieu de `project`. Pour plus d’informations sur l’authentification à la ligne de commande, consultez « [gh auth login](https://cli.github.com/manual/gh_auth_login) ».

{% endcli %}

{% cli %}

## Utilisation de variables

Dans tous les exemples suivants, vous pouvez utiliser des variables pour simplifier vos scripts. Utilisez `-F` pour passer une variable qui est un nombre, un booléen ou une valeur null. Utilisez `-f` pour les autres variables. Par exemple,

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

Pour plus d’informations, consultez « [Formation d’appels avec GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables) ».

{% endcli %}

## Recherche d’informations sur les projets

Utilisez des requêtes pour obtenir des données sur les projets. Pour plus d’informations, consultez « [À propos des requêtes](/graphql/guides/forming-calls-with-graphql#about-queries) ».

### Recherche de l’ID de nœud d’un projet d’organisation

Pour mettre à jour votre projet par le biais de l’API, vous devez connaître l’ID de nœud du projet.

Vous pouvez trouver l’ID de nœud d’un projet d’organisation si vous connaissez le nom de l’organisation et le numéro de projet. Remplacez `ORGANIZATION` par le nom de votre organisation. Par exemple : `octo-org`. Remplacez `NUMBER` par le numéro de projet. Pour trouver le numéro de projet, consultez l’URL du projet. Par exemple, `https://github.com/orgs/octo-org/projects/5` a pour numéro de projet 5.

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

Vous pouvez également trouver l’ID de nœud de tous les projets de votre organisation. L’exemple suivant retourne l’ID de nœud et le titre des 20 premiers projets d’une organisation. Remplacez `ORGANIZATION` par le nom de votre organisation. Par exemple : `octo-org`.

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

### Recherche de l’ID de nœud d’un projet d’utilisateur 

Pour mettre à jour votre projet par le biais de l’API, vous devez connaître l’ID de nœud du projet.

Vous pouvez obtenir l’ID de nœud d’un projet d’utilisateur si vous connaissez le numéro de projet. Remplacez `USER` par votre ID d’utilisateur. Par exemple : `octocat`. Remplacez `NUMBER` par votre numéro de projet. Pour trouver le numéro de projet, consultez l’URL du projet. Par exemple, `https://github.com/users/octocat/projects/5` a pour numéro de projet 5.

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

Vous pouvez également trouver l’ID de nœud pour tous vos projets. L’exemple suivant retourne l’ID de nœud et le titre de vos 20 premiers projets. Remplacez `USER` par votre nom d’utilisateur. Par exemple : `octocat`.

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

### Recherche de l’ID de nœud d’un champ

Pour mettre à jour la valeur d’un champ, vous devez connaître l’ID de nœud du champ. De plus, vous devez connaître l’ID des options pour les champs de sélection unique et l’ID des itérations pour les champs d’itération.

L’exemple suivant retourne l’ID, le nom, les paramètres et la configuration des 20 premiers champs d’un projet. Remplacez `PROJECT_ID` par l’ID de nœud de votre projet.

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

La réponse ressemblera à l’exemple suivant :

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

Chaque champ a un nom et un ID. Les champs de sélection unique sont renvoyés sous la forme d’un objet `ProjectV2SingleSelectField` et comportent un champ `options` dans lequel vous pouvez trouver l’ID de chaque option pour sélection unique. Les champs d’itération sont renvoyés sous forme d’objet `ProjectV2IterationField` et comportent un champ `configuration` qui comprend un champ `iterations` contenant l’ID et des informations sur chaque itération. 

Si vous avez simplement besoin du nom et de l’ID d’un champ, et que vous n’avez pas besoin d’informations sur les itérations ou les options d’un champ de sélection unique, vous pouvez utiliser l’objet `ProjectV2FieldCommon`. 

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

La réponse lors de l’utilisation de l’objet `ProjectV2FieldCommon` ressemblera à l’exemple suivant :

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

### Recherche d’informations sur les éléments d’un projet 

Vous pouvez interroger l’API pour trouver des informations sur les éléments de votre projet.

L’exemple suivant renvoie les 20 premiers problèmes, demandes de tirage et brouillons de problèmes d’un projet. Pour les questions et les demandes de tirage, il renverra également le titre et les 10 premiers responsables. Pour un projet de numéro, il renverra le titre et le corps. L’exemple renvoie également le nom et la valeur des champs de texte, de date ou de sélection unique dans les huit premiers champs du projet. Remplacez `PROJECT_ID` par l’ID de nœud de votre projet.

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

Un projet peut contenir des éléments qu’un utilisateur n’est pas autorisé à afficher. Dans ce cas, le type d’article sera renvoyé sous la forme `REDACTED`.

## Mise à jour des projets 

Utilisez des mutations pour mettre à jour des projets. Pour plus d’informations, consultez « [À propos des mutations](/graphql/guides/forming-calls-with-graphql#about-mutations) ».

{% note %}

**Remarque :** Vous ne pouvez pas ajouter et mettre à jour un élément dans le même appel. Vous devez utiliser `addProjectV2ItemById` pour ajouter l’élément, puis `updateProjectV2ItemFieldValue` pour le mettre à jour.

{% endnote %}

### Ajout d’un élément à un projet

L’exemple suivant ajoute un problème ou une demande de tirage à votre projet. Remplacez `PROJECT_ID` par l’ID de nœud de votre projet. Remplacez `CONTENT_ID` par l’ID de nœud du problème ou de la demande de tirage à ajouter.

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

La réponse contient l’ID de nœud de l’élément récemment créé.

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

Si vous essayez d’ajouter un élément qui existe déjà, l’ID de l’élément existant est retourné à la place.

### Ajouter un brouillon de problème à un projet

L’exemple suivant ajoutera un brouillon de problème à votre projet. Remplacez `PROJECT_ID` par l’ID de nœud de votre projet. Remplacez `TITLE` et `BODY` par le contenu que vous souhaitez pour le nouveau problème provisoire.

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

La réponse contient l’ID de nœud de brouillon de problème récemment créé.

```json
{
  "data": {
    "addProjectV2ItemById": {
      "projectItem": {
        "id": "PVTI_lADOANN5s84ACbL0zgBbxFc"
      }
    }
  }
}
```

### Mise à jour des paramètres d’un projet 

L’exemple suivant met à jour les paramètres de votre projet. Remplacez `PROJECT_ID` par l’ID de nœud de votre projet. Définissez `public` sur `true` pour rendre votre projet public sur {% data variables.product.product_name %}. Modifiez `readme` pour apporter des modifications au fichier README de votre projet.

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

### Mise à jour d’un champ de texte, de nombre ou de date personnalisé 

L’exemple suivant met à jour la valeur d’un champ texte pour un élément. Remplacez `PROJECT_ID` par l’ID de nœud de votre projet. Remplacez `ITEM_ID` par l’ID de nœud de l’élément que vous souhaitez mettre à jour. Remplacez `FIELD_ID` par l’ID du champ que vous souhaitez mettre à jour.

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

**Remarque :** Vous ne pouvez pas utiliser `updateProjectV2ItemFieldValue` pour modifier `Assignees`, `Labels`, `Milestone` ou `Repository` parce que ces champs sont des propriétés de demandes de tirage et de problèmes, et non des éléments de projet. Au lieu de cela, vous pouvez utiliser les mutations suivantes :

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### Mise à jour d’un champ de sélection unique

L’exemple suivant met à jour la valeur d’un champ de sélection unique pour un élément.

- Remplacez `PROJECT_ID` par l’ID de nœud de votre projet.
- Remplacez `ITEM_ID` par l’ID de nœud de l’élément que vous souhaitez mettre à jour.
- Remplacez `FIELD_ID` par l’ID du champ de sélection unique que vous souhaitez mettre à jour.
- Remplacez `OPTION_ID` par l’ID de l’option de sélection unique désirée.

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

### Mise à jour d’un champ d’itération

L’exemple suivant met à jour la valeur d’un champ d’itération pour un élément.

- Remplacez `PROJECT_ID` par l’ID de nœud de votre projet.
- Remplacez `ITEM_ID` par l’ID de nœud de l’élément que vous souhaitez mettre à jour.
- Remplacez `FIELD_ID` par l’ID du champ d’itération que vous souhaitez mettre à jour.
- Remplacez `ITERATION_ID` par l’ID de l’itération désirée. Il peut s’agir d’une itération active ou terminée.

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

### Suppression d’un élément d’un projet

L’exemple suivant supprime un élément d’un projet. Remplacez `PROJECT_ID` par l’ID de nœud de votre projet. Remplacez `ITEM_ID` par l’ID de nœud de l’élément que vous souhaitez supprimer.

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

## Gestion de projets 

### Création de projets

Vous pouvez utiliser une mutation pour créer un projet. Pour plus d’informations, consultez « [À propos des mutations](/graphql/guides/forming-calls-with-graphql#about-mutations) ».

Pour créer un projet en utilisant l’API, vous devez fournir un nom pour le projet et l’ID de nœud d’un utilisateur ou d’une organisation {% data variables.product.product_name %} qui deviendra propriétaire du projet.

Vous pouvez trouver l’ID de nœud d’un utilisateur ou d’une organisation {% data variables.product.product_name %} si vous connaissez le nom d’utilisateur. Remplacez <code>GITHUB_OWNER</code> par le nom d’utilisateur {% data variables.product.product_name %} du propriétaire du nouveau projet.

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

Pour créer le projet, remplacez `OWNER_ID` par l’ID de nœud du propriétaire du nouveau projet et remplacez `PROJECT_NAME` par un nom pour le projet.

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


## Utilisation de webhooks

Vous pouvez utiliser des webhooks pour vous abonner à des événements qui se passent dans votre projet. Par exemple, lorsqu’un élément est modifié, {% data variables.product.product_name %} peut envoyer une charge utile HTTP POST à l’URL configurée du webhook qui peut déclencher une automatisation sur votre serveur. Pour plus d’informations sur les webhooks, consultez « [À propos des webhooks](/developers/webhooks-and-events/webhooks/about-webhooks) ». Pour en savoir plus sur l’événement de webhook `projects_v2_item`, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item) ».
