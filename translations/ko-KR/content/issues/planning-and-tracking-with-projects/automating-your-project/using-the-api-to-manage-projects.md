---
title: 'API를 사용하여 {% data variables.product.prodname_projects_v2 %} 관리'
shortTitle: Automating with the API
intro: GraphQL API를 사용하여 프로젝트를 자동화할 수 있습니다.
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169234'
---
이 문서에서는 GraphQL API를 사용하여 프로젝트를 관리하는 방법을 보여 줍니다. {% data variables.product.prodname_actions %}워크플로에서 API를 사용하는 방법에 대한 자세한 내용은 “[작업을 사용하여 {% data variables.product.prodname_projects_v2 %} 자동화](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)”를 참조하세요. 사용 가능한 데이터 형식의 전체 목록은 "[참조](/graphql/reference)"를 참조하세요.

{% data reusables.projects.graphql-deprecation %}

## 인증

{% curl %}

다음 모든 cURL 예제에서 `TOKEN`을 범위가 `read:project`인 토큰(쿼리의 경우) 또는 범위가 `project`인 토큰(쿼리 및 변형의 경우)으로 바꿉니다. 토큰은 사용자에 대한 {% data variables.product.pat_v1 %} 또는 {% data variables.product.prodname_github_app %}에 대한 설치 액세스 토큰일 수 있습니다. {% data variables.product.pat_generic %}을(를) 만드는 방법에 대한 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). {% data variables.product.prodname_github_app %}에 대한 설치 액세스 토큰을 만드는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_github_apps %}로 인증](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)"을 참조하세요.

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} 명령을 실행하기 전에 `gh auth login --scopes "project"`를 실행하여 인증해야 합니다. 프로젝트를 읽을 필요만 있고 편집할 필요는 없는 경우 `project` 대신 `read:project` 범위를 제공할 수 있습니다. 명령줄 인증에 대한 자세한 내용은 "[gh auth login](https://cli.github.com/manual/gh_auth_login)"을 참조하세요.

{% endcli %}

{% cli %}

## 변수 사용

다음 모든 예제에서는 변수를 사용하여 스크립트를 간소화할 수 있습니다. 숫자, 부울 또는 null인 변수를 전달하려면 `-F`를 사용합니다. 다른 변수에는 `-f`를 사용합니다. 예를 들면 다음과 같습니다.

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

자세한 내용은 "[GraphQL을 사용하여 호출 형성](/graphql/guides/forming-calls-with-graphql#working-with-variables)"을 참조하세요.

{% endcli %}

## 프로젝트에 대한 정보 찾기

쿼리를 사용하여 프로젝트에 대한 데이터를 가져옵니다. 자세한 내용은 “[쿼리 정보](/graphql/guides/forming-calls-with-graphql#about-queries)”를 참조하세요.

### 조직 프로젝트의 노드 ID 찾기

API를 통해 프로젝트를 업데이트하려면 프로젝트의 노드 ID를 알고 있어야 합니다.

조직 이름 및 프로젝트 번호를 알고 있는 경우 조직 프로젝트의 노드 ID를 찾을 수 있습니다. `ORGANIZATION`을 조직 이름으로 바꿉니다. 예: `octo-org`. `NUMBER`를 프로젝트 번호로 바꿉니다. 프로젝트 번호를 찾으려면 프로젝트 URL을 확인합니다. 예를 들어 `https://github.com/orgs/octo-org/projects/5`의 프로젝트 번호는 5입니다.

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

조직에 있는 모든 프로젝트의 노드 ID를 찾을 수도 있습니다. 다음 예제에서는 조직에서 처음 20개 프로젝트의 노드 ID와 제목을 반환합니다. `ORGANIZATION`을 조직 이름으로 바꿉니다. 예: `octo-org`.

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

### 사용자 프로젝트의 노드 ID 찾기 

API를 통해 프로젝트를 업데이트하려면 프로젝트의 노드 ID를 알고 있어야 합니다.

프로젝트 번호를 알고 있는 경우 사용자 프로젝트의 노드 ID를 찾을 수 있습니다. `USER`을 사용자 이름으로 바꿉니다. 예: `octocat`. `NUMBER`를 프로젝트 번호로 바꿉니다. 프로젝트 번호를 찾으려면 프로젝트 URL을 확인합니다. 예를 들어 `https://github.com/users/octocat/projects/5`의 프로젝트 번호는 5입니다.

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

모든 프로젝트의 노드 ID를 찾을 수도 있습니다. 다음 예제에서는 처음 20개 프로젝트의 노드 ID와 제목을 반환합니다. `USER`를 사용자 이름으로 바꿉니다. 예: `octocat`.

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

### 필드의 노드 ID 찾기

필드 값을 업데이트하려면 필드의 노드 ID를 알아야 합니다. 또한 단일 선택 필드에 대한 옵션의 ID와 반복 필드에 대한 반복의 ID를 알아야 합니다.

다음 예제에서는 프로젝트의 처음 20개 필드에 대한 ID, 이름, 설정 및 구성을 반환합니다. `PROJECT_ID`를 프로젝트의 노드 ID로 바꿉니다.

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

응답은 다음 예제와 유사합니다.

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

각 필드에는 ID 및 이름이 있습니다. 단일 선택 필드는 `ProjectV2SingleSelectField` 개체로 반환되고 단일 선택 항목에 대한 각 옵션의 ID를 찾을 수 있는 `options` 필드가 있습니다. 반복 필드는 `ProjectV2IterationField` 개체로 반환되며 ID와 각 반복에 대한 정보가 포함된 `iterations` 필드가 포함된 `configuration` 필드가 있습니다. 

필드의 이름과 ID만 필요하고 반복 또는 단일 선택 필드 옵션에 대한 정보가 필요하지 않은 경우 `ProjectV2FieldCommon` 개체를 사용할 수 있습니다. 

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

`ProjectV2FieldCommon` 개체를 사용할 때의 응답은 다음 예제와 유사합니다.

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

### 프로젝트의 항목에 대한 정보 찾기 

API를 쿼리하여 프로젝트의 항목에 대한 정보를 찾을 수 있습니다.

다음 예제에서는 프로젝트의 처음 20개 이슈, 끌어오기 요청 및 초안 이슈를 반환합니다. 이슈 및 끌어오기 요청의 경우 제목과 처음 10명의 담당자도 반환합니다. 초안 이슈의 경우 제목과 본문을 반환합니다. 또한 이 예제에서는 프로젝트의 처음 8개 필드에 있는 텍스트, 날짜 또는 단일 선택 필드의 필드 이름과 값을 반환합니다. `PROJECT_ID`를 프로젝트의 노드 ID로 바꿉니다.

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

프로젝트에는 사용자가 볼 수 있는 권한이 없는 항목이 포함될 수 있습니다. 이 경우 항목 유형이 `REDACTED`로 반환됩니다.

## 프로젝트 업데이트 

변형을 사용하여 프로젝트를 업데이트합니다. 자세한 내용은 “[변형 정보](/graphql/guides/forming-calls-with-graphql#about-mutations)”를 참조하세요.

{% note %}

**참고:** 동일한 호출에서 항목을 추가하고 업데이트할 수 없습니다. `addProjectV2ItemById`을 사용하여 항목을 추가한 다음, `updateProjectV2ItemFieldValue`를 사용하여 항목을 업데이트해야 합니다.

{% endnote %}

### 프로젝트에 항목 추가

다음 예제에서는 프로젝트에 이슈 또는 끌어오기 요청을 추가합니다. `PROJECT_ID`를 프로젝트의 노드 ID로 바꿉니다. 추가하려는 이슈 또는 끌어오기 요청의 노드 ID로 `CONTENT_ID`를 바꿉니다.

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

응답에는 새로 만든 항목의 노드 ID가 포함됩니다.

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

이미 존재하는 항목을 추가하려고 하면 기존 항목 ID가 대신 반환됩니다.

### 프로젝트에 초안 이슈 추가

다음 예제에서는 프로젝트에 초안 이슈를 추가합니다. `PROJECT_ID`를 프로젝트의 노드 ID로 바꿉니다. `TITLE` 및 `BODY`를 새 초안 이슈에 대해 원하는 콘텐츠로 대체합니다.

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

응답에는 새로 만든 초안 이슈의 노드 ID가 포함됩니다.

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

### 프로젝트 설정 업데이트 

다음 예제에서는 프로젝트의 설정을 업데이트합니다. `PROJECT_ID`를 프로젝트의 노드 ID로 바꿉니다. `public`을 `true`로 설정하여 {% data variables.product.product_name %}에서 프로젝트를 퍼블릭으로 지정합니다. `readme`을 수정하여 프로젝트의 추가 정보를 변경합니다.

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

### 사용자 지정 텍스트, 숫자 또는 날짜 필드 업데이트 

다음 예제에서는 항목의 텍스트 필드 값을 업데이트합니다. `PROJECT_ID`를 프로젝트의 노드 ID로 바꿉니다. 업데이트하려는 항목의 노드 ID로 `ITEM_ID`를 바꿉니다. 업데이트하려는 필드의 ID로 `FIELD_ID`를 바꿉니다.

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

**참고:** 이러한 필드는 프로젝트 항목이 아닌 끌어오기 요청 및 이슈의 속성이므로 `updateProjectV2ItemFieldValue`을 사용하여 `Assignees`, `Labels`, `Milestone` 또는 `Repository`를 변경할 수 없습니다. 대신 다음과 같은 변형을 사용할 수 있습니다.

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### 단일 선택 필드 업데이트

다음 예제에서는 항목의 단일 선택 필드 값을 업데이트합니다.

- `PROJECT_ID` - 프로젝트의 노드 ID로 바꿉니다.
- `ITEM_ID` - 업데이트하려는 항목의 노드 ID로 바꿉니다.
- `FIELD_ID` - 업데이트하려는 단일 선택 필드의 ID로 바꿉니다.
- `OPTION_ID` - 원하는 단일 선택 옵션의 ID로 바꿉니다.

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

### 반복 필드 업데이트

다음 예제에서는 항목의 반복 필드 값을 업데이트합니다.

- `PROJECT_ID` - 프로젝트의 노드 ID로 바꿉니다.
- `ITEM_ID` - 업데이트하려는 항목의 노드 ID로 바꿉니다.
- `FIELD_ID` - 업데이트하려는 반복 필드의 ID로 바꿉니다.
- `ITERATION_ID` - 원하는 반복의 ID로 바꿉니다. 활성 또는 완료된 반복일 수 있습니다.

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

### 프로젝트에서 항목 삭제

다음 예제에서는 프로젝트에서 항목을 삭제합니다. `PROJECT_ID`를 프로젝트의 노드 ID로 바꿉니다. 삭제하려는 항목의 노드 ID로 `ITEM_ID`를 바꿉니다.

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

## 프로젝트 관리 

### 프로젝트 만들기

변형을 사용하여 새 프로젝트를 만들 수 있습니다. 자세한 내용은 “[변형 정보](/graphql/guides/forming-calls-with-graphql#about-mutations)”를 참조하세요.

API를 사용하여 새 프로젝트를 만들려면 프로젝트의 이름과 프로젝트의 소유자가 될 {% data variables.product.product_name %} 사용자 또는 조직의 노드 ID를 제공해야 합니다.

사용자 이름을 알고 있는 경우 {% data variables.product.product_name %} 사용자 또는 조직의 노드 ID를 찾을 수 있습니다. 을 새 프로젝트 소유자의 {% data variables.product.product_name %} 사용자 이름으로 바꿉 있습니다 <code>GITHUB_OWNER</code> .

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

프로젝트를 `OWNER_ID` 만들려면 을 새 프로젝트 소유자의 노드 ID로 바꾸고 을 프로젝트의 이름으로 바꿉 `PROJECT_NAME` 니다.

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


## 웹후크 사용

웹후크를 사용하여 프로젝트에서 발생하는 이벤트를 구독할 수 있습니다. 예를 들어 항목을 편집할 때 {% data variables.product.product_name %}은 서버에서 자동화를 트리거할 수 있는 웹후크의 구성된 URL에 HTTP POST 페이로드를 보낼 수 있습니다. 웹후크에 대한 자세한 내용은 “[웹후크 정보](/developers/webhooks-and-events/webhooks/about-webhooks)”를 참조하세요. `projects_v2_item` 웹후크 이벤트에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item)”를 참조하세요.
