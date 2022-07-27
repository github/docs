---
title: 自动化项目（测试版）
intro: '您可以使用内置工作流程或 API 和 {% data variables.product.prodname_actions %} 来管理项目。'
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

## 简介

您可以添加自动化来帮助管理项目。 项目（测试版）包括可通过 UI 配置的内置工作流程。 此外，您可以使用 GraphQL API 和 {% data variables.product.prodname_actions %} 编写自定义工作流程。

## 内置工作流程

{% data reusables.projects.about-workflows %}

您可以为项目启用或禁用内置工作流程。

{% data reusables.projects.enable-basic-workflow %}

## {% data variables.product.prodname_actions %} 工作流程

本节说明如何使用 GraphQL API 和 {% data variables.product.prodname_actions %} 向组织项目添加拉取请求。 在示例工作流程中，当拉取请求标记为“准备审核”时，项目中会添加一项“状态”字段设置为“待办”的新任务，并且当前日期添加到自定义的“发布日期”字段中。

您可以复制以下工作流程之一，并按照下表中的说明对其进行修改，以满足您的需求。

项目可以跨越多个仓库，但工作流是特定于仓库的。 将工作流程添加到您希望项目跟踪的每个仓库。 有关创建工作流程文件的更多信息，请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。

本文假设您基本了解 {% data variables.product.prodname_actions %}。 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[{% data variables.product.prodname_actions %}](/actions)”。

有关可以通过 API 对项目进行的其他更改的更多信息，请参阅“[使用 API 管理项目](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)”。

{% note %}

**注意：** `GITHUB_TOKEN` 的范围限定为存储库级别，无法访问项目（测试版）。 要访问项目（测试版），可以创建 {% data variables.product.prodname_github_app %} （建议用于组织项目）或个人访问令牌（建议用于用户项目）。 下面显示了这两种方法的工作流程示例。

{% endnote %}

### 使用 {% data variables.product.prodname_github_app %} 进行身份验证的示例工作流程

1. 创建 {% data variables.product.prodname_github_app %} 或选择组织拥有的现有 {% data variables.product.prodname_github_app %}。 更多信息请参阅“[创建 {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app)”。
2. 授予 {% data variables.product.prodname_github_app %} 对组织项目的读取和写入权限。 更多信息请参阅“[编辑 {% data variables.product.prodname_github_app %} 的权限](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)”。

   {% note %}

   **注意：** 您可以控制应用程序对组织项目和存储库项目的权限。 您必须授予读取和写入组织项目的权限；读取和写入存储库项目的权限是不够的。

   {% endnote %}

3. 在组织中安装 {% data variables.product.prodname_github_app %}。 为项目需要访问的所有存储库安装它。 更多信息请参阅“[安装 {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)。”
4. 将 {% data variables.product.prodname_github_app %} 的 ID 作为机密存储在存储库或组织中。 在以下工作流程中，将 `APP_ID` 替换为密钥的名称。 您可以在应用的设置页面上或通过应用 API 找到应用 ID。 更多信息请参阅“[应用程序](/rest/reference/apps#get-an-app)”。
5. 为应用生成私钥。 将生成的文件的内容作为机密存储在存储库或组织中。 （存储文件的全部内容，包括 `-----BEGIN RSA PRIVATE KEY-----` 和 `-----END RSA PRIVATE KEY-----`）。 在以下工作流程中，将 `APP_PEM` 替换为密钥的名称。 更多信息请参阅“[向 {% data variables.product.prodname_github_apps %} 验证](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”。
6. 在以下工作流程中，将 `YOUR_ORGANIZATION` 替换为组织的名称。 例如 `octo-org`。 将 `YOUR_PROJECT_NUMBER` 替换为您的项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/orgs/octo-org/projects/5` 有一个编号为 5 的项目。

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

### 使用个人访问令牌进行身份验证的示例工作流程

1. 创建具有 `project` 和 `repo` 作用域的个人访问令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。
2. 将个人访问令牌另存为存储库或组织中的机密。
3. 在以下工作流程中，将 `YOUR_TOKEN` 替换为密码名称。 将 `YOUR_ORGANIZATION` 替换为您的组织名称。 例如 `octo-org`。 将 `YOUR_PROJECT_NUMBER` 替换为您的项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/orgs/octo-org/projects/5` 有一个编号为 5 的项目。

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

### 工作流程说明

下表说明了示例工作流程的各个部分，并向您展示了如何调整工作流程以供自己使用。

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
当仓库中的拉取请求标记为“准备审核”时，此工作流程将运行。
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
使用 <a href="https://github.com/tibdex/github-app-token">tibdex/github-app-token action</a> 从应用 ID 和私钥为应用生成安装访问令牌。 稍后在工作流程中以s <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code> 的形式访问安装访问令牌。
<br>
<br>
将 <code>APP_ID</code> 替换为包含应用 ID 的密钥的名称。
<br>
<br>
将 <code>APP_PEM</code> 替换为包含应用私钥的机密的名称。
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
为此步骤设置环境变量。
<br>
<br>
如果使用的是个人访问令牌，请将 <code>YOUR_TOKEN</code> 替换为包含个人访问令牌的机密的名称。
<br>
<br>
将 <code>YOUR_ORGANIZATION</code> 替换为组织名称。 例如 <code>octo-org</code>。
<br>
<br>
将 <code>YOUR_PROJECT_NUMBER</code> 替换为项目编号。 要查找项目编号，请查看项目 URL。 例如，<code>https://github.com/orgs/octo-org/projects/5</code> 有一个编号为 5 的项目。
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
<p>使用 <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> 查询项目 ID 的 API 以及项目前 20 个字段的名称和 ID。 <code>fields</code> 返回并集，查询使用内联分段 (<code>... on</code>) 返回有关任何 <code>ProjectV2Field</code> 和 <code>ProjectV2SingleSelectfield</code> 字段的信息。</p>

<p>响应存储在一个名为 <code>project_data.json</code> 的文件中。</p>
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
解析 API 查询的响应，并将相关 ID 存储为环境变量。 修改此选项以获取不同字段或选项的 ID。 例如：
<ul>
<li>要获取名为 <code>Team</code> 的字段的 ID，请添加 <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>。</li>
<li>要为 <code>Team</code> 单选字段获取名为 <code>Octoteam</code> 的选项的 ID，请添加 <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
</ul>
<strong>注意：</strong>此工作流假定您有一个名为“状态”的单选字段，其中包括一个名为“待办”的选项和一个名为“发布日期”的日期字段。 您必须修改此部分以匹配表中存在的字段。
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
为此步骤设置环境变量。 <code>GITHUB_TOKEN</code> 如上所述。 <code>PR_ID</code> 是触发此工作流程的拉取请求的 ID。

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
使用 <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> 和 API 将触发此工作流程的拉取请求添加到项目。 <code>jq</code> 标志解析了获取已创建项的 ID 的响应。
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
将已创建项的 ID 存储为环境变量。
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
以 <code>yyy-mm-dd</code> 格式保存当前日期为环境变量。
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
为此步骤设置环境变量。 <code>GITHUB_TOKEN</code> 如上所述。

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
将 <code>Status</code> 字段的值设置为 <code>Todo</code>。 设置 <code>Date posted</code> 字段的值。
</td>
</tr>

</table>
