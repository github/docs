---
title: 프로젝트(베타) 자동화
intro: 기본 제공 워크플로 또는 API 및 {% data variables.product.prodname_actions %}를 사용하여 프로젝트를 관리할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 07/26/2022
ms.locfileid: "147410533"
---
{% data reusables.projects.projects-beta %}

{% data reusables.projects.graphql-deprecation %}

## <a name="introduction"></a>소개

자동화를 추가하여 프로젝트를 관리할 수 있습니다. 프로젝트(베타)에는 UI를 통해 구성할 수 있는 기본 제공 워크플로가 포함되어 있습니다. 또한 GraphQL API 및 {% data variables.product.prodname_actions %}을(를) 사용하여 사용자 지정 워크플로를 작성할 수 있습니다.

## <a name="built-in-workflows"></a>기본 제공 워크플로

{% data reusables.projects.about-workflows %}

프로젝트에 대한 기본 제공 워크플로를 사용하거나 사용하지 않을 수 있습니다.

{% data reusables.projects.enable-basic-workflow %}

## <a name="-data-variablesproductprodname_actions--workflows"></a>{% data variables.product.prodname_actions %} 워크플로

이 섹션에서는 GraphQL API 및 {% data variables.product.prodname_actions %}을(를) 사용하여 조직 프로젝트에 끌어오기 요청을 추가하는 방법을 보여 줍니다. 예제 워크플로에서 끌어오기 요청이 “검토 준비 완료”로 표시되면 “상태” 필드가 “Todo”로 설정된 새 작업이 프로젝트에 추가되고 현재 날짜가 사용자 지정 “게시 날짜” 필드에 추가됩니다.

아래 워크플로 중 하나를 복사하고 아래 표에 설명된 대로 수정하여 요구 사항을 충족할 수 있습니다.

프로젝트는 여러 리포지토리에 걸쳐 있지만 워크플로는 리포지토리에만 적용됩니다. 프로젝트를 추적하려는 각 리포지토리에 워크플로를 추가합니다. 워크플로 파일을 만드는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 빠른 시작](/actions/quickstart)”을 참조하세요.

이 문서에서는 {% data variables.product.prodname_actions %}에 대한 기본적인 이해가 있다고 가정합니다. {% data variables.product.prodname_actions %}에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}](/actions)”을(를) 참조하세요.

API를 통해 프로젝트에 적용할 수 있는 다른 변경 내용에 대한 자세한 내용은 “[API를 사용하여 프로젝트 관리](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)”를 참조하세요.

{% note %}

**참고:** `GITHUB_TOKEN`은 리포지토리 수준으로 범위가 지정되며 프로젝트(베타)에 액세스할 수 없습니다. 프로젝트(베타)에 액세스하려면 {% data variables.product.prodname_github_app %}(조직 프로젝트에 권장) 또는 개인용 액세스 토큰(사용자 프로젝트에 권장)을 만들 수 있습니다. 두 방법 모두에 대한 워크플로 예제는 다음과 같습니다.

{% endnote %}

### <a name="example-workflow-authenticating-with-a--data-variablesproductprodname_github_app-"></a>{% data variables.product.prodname_github_app %}을(를) 사용하여 인증하는 예제 워크플로

1. {% data variables.product.prodname_github_app %}을(를) 만들거나 조직이 소유한 기존 {% data variables.product.prodname_github_app %}을(를) 선택합니다. 자세한 내용은 “[{% data variables.product.prodname_github_app %} 만들기](/developers/apps/building-github-apps/creating-a-github-app)”를 참조하세요.
2. {% data variables.product.prodname_github_app %}에 조직 프로젝트에 대한 읽기 및 쓰기 권한을 부여합니다. 자세한 내용은 “[{% data variables.product.prodname_github_app %}의 권한 편집](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)”을 참조하세요.

   {% note %}

   **참고:** 조직 프로젝트 및 리포지토리 프로젝트에 대한 앱의 권한을 제어할 수 있습니다. 조직 프로젝트를 읽고 쓸 수 있는 권한을 부여해야 합니다. 리포지토리 프로젝트를 읽고 쓸 수 있는 권한만으로는 충분하지 않습니다.

   {% endnote %}

3. 조직에 {% data variables.product.prodname_github_app %}을(를) 설치합니다. 프로젝트에 액세스해야 하는 모든 리포지토리에 설치합니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %} 설치](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)”를 참조하세요.
4. {% data variables.product.prodname_github_app %}의 ID를 리포지토리 또는 조직에 비밀로 저장합니다. 다음 워크플로에서 `APP_ID`를 비밀 이름으로 바꿉니다. 앱의 설정 페이지 또는 앱 API를 통해 앱 ID를 찾을 수 있습니다. 자세한 내용은 “[앱](/rest/reference/apps#get-an-app)”을 참조하세요.
5. 앱에 대한 프라이빗 키를 생성합니다. 결과 파일의 콘텐츠를 리포지토리 또는 조직에 비밀로 저장합니다. (`-----BEGIN RSA PRIVATE KEY-----` 및 `-----END RSA PRIVATE KEY-----`를 포함하여 파일의 전체 콘텐츠를 저장합니다.) 다음 워크플로에서 `APP_PEM`을 비밀 이름으로 바꿉니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}에서 인증](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”을 참조하세요.
6. 다음 워크플로에서 `YOUR_ORGANIZATION`을 조직 이름으로 바꿉니다. 예: `octo-org`. `YOUR_PROJECT_NUMBER`를 프로젝트 번호로 바꿉니다. 프로젝트 번호를 찾으려면 프로젝트 URL을 확인합니다. 예를 들어 `https://github.com/orgs/octo-org/projects/5`의 프로젝트 번호는 5입니다.

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

### <a name="example-workflow-authenticating-with-a-personal-access-token"></a>개인용 액세스 토큰을 사용하여 인증하는 예제 워크플로

1. `project` 및 `repo` 범위로 개인용 액세스 토큰을 만듭니다. 자세한 내용은 “[개인용 액세스 토큰 만들기](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”를 참조하세요.
2. 개인용 액세스 토큰을 리포지토리 또는 조직에 비밀로 저장합니다.
3. 다음 워크플로에서 `YOUR_TOKEN`을 비밀 이름으로 바꿉니다. `YOUR_ORGANIZATION`을 조직 이름으로 바꿉니다. 예: `octo-org`. `YOUR_PROJECT_NUMBER`를 프로젝트 번호로 바꿉니다. 프로젝트 번호를 찾으려면 프로젝트 URL을 확인합니다. 예를 들어 `https://github.com/orgs/octo-org/projects/5`의 프로젝트 번호는 5입니다.

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

### <a name="workflow-explanation"></a>워크플로 설명

다음 표에서는 예제 워크플로의 섹션을 설명하고 고유한 용도로 워크플로를 조정하는 방법을 보여 줍니다.

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
이 워크플로는 리포지토리의 끌어오기 요청이 “검토 준비 완료”로 표시될 때마다 실행됩니다.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}에만 다음이 해당됩니다.

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
<a href="https://github.com/tibdex/github-app-token">tibdex/github-app-token 작업</a>을 사용하여 앱 ID 및 프라이빗 키에서 앱에 대한 설치 액세스 토큰을 생성합니다. 설치 액세스 토큰은 나중에 워크플로에서 <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>로 액세스됩니다.
<br>
<br>
<code>APP_ID</code>를 앱 ID가 포함된 비밀 이름으로 바꿉니다.
<br>
<br>
<code>APP_PEM</code>를 앱 프라이빗 키가 포함된 비밀 이름으로 바꿉니다.
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

개인용 액세스 토큰:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
이 단계에 대한 환경 변수를 설정합니다.
<br>
<br>
개인용 액세스 토큰을 사용하는 경우 <code>YOUR_TOKEN</code>을 개인용 액세스 토큰이 포함된 비밀 이름으로 바꿉니다.
<br>
<br>
<code>YOUR_ORGANIZATION</code>을 조직 이름으로 바꿉니다. 예: <code>octo-org</code>.
<br>
<br>
<code>YOUR_PROJECT_NUMBER</code>를 프로젝트 번호로 바꿉니다. 프로젝트 번호를 찾으려면 프로젝트 URL을 확인합니다. 예를 들어 <code>https://github.com/orgs/octo-org/projects/5</code>의 프로젝트 번호는 5입니다.
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
<p><a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a>를 사용하여 API에 프로젝트 ID를 쿼리하고 프로젝트의 처음 20개 필드의 이름과 ID를 반환합니다. <code>fields</code>는 공용 구조체를 반환하고 쿼리는 인라인 조각(<code>... on</code>)을 사용하여 <code>ProjectV2Field</code> 및 <code>ProjectV2SingleSelectField</code> 필드에 대한 정보를 반환합니다.</p>

<p>응답은 <code>project_data.json</code>이라는 파일에 저장됩니다.</p>
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
API 쿼리의 응답을 구문 분석하고 관련 ID를 환경 변수로 저장합니다. 다른 필드 또는 옵션에 대한 ID를 가져오도록 수정합니다. 예를 들면 다음과 같습니다.
<ul>
<li><code>Team</code>이라는 필드의 ID를 얻으려면 <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>를 추가합니다.</li>
<li><code>Team</code> 단일 선택 필드에 대해 <code>Octoteam</code>이라는 옵션의 ID를 가져오려면 <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code>를 추가합니다.</li>
</ul>
<strong>참고: </strong>이 워크플로에서는 “Todo”라는 옵션과 “게시한 날짜”라는 날짜 필드가 포함된 “상태”라는 단일 선택 필드가 있는 프로젝트가 있다고 가정합니다. 테이블에 있는 필드와 일치하도록 이 섹션을 수정해야 합니다.
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

개인용 액세스 토큰:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
이 단계에 대한 환경 변수를 설정합니다. <code>GITHUB_TOKEN</code>은 위에서 설명합니다. <code>PR_ID</code>는 이 워크플로를 트리거한 끌어오기 요청의 ID입니다.

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
<a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> 및 API를 사용하여 이 워크플로를 트리거한 끌어오기 요청을 프로젝트에 추가합니다. <code>jq</code> 플래그는 응답을 구문 분석하여 만든 항목의 ID를 가져옵니다.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
생성된 항목의 ID를 환경 변수로 저장합니다.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
현재 날짜를 <code>yyyy-mm-dd</code> 형식의 환경 변수로 저장합니다.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

개인용 액세스 토큰:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
이 단계에 대한 환경 변수를 설정합니다. <code>GITHUB_TOKEN</code>은 위에서 설명합니다.

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
<code>Status</code> 필드의 값을 <code>Todo</code>로 설정합니다. <code>Date posted</code> 필드의 값을 설정합니다.
</td>
</tr>

</table>
