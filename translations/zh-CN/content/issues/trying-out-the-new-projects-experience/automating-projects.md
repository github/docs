---
title: 自动化项目（测试版）
intro: '您可以使用 API 和 {% data variables.product.prodname_actions %} 来管理您的项目。'
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

## 简介

本文说明如何使用 GraphQL API 和 {% data variables.product.prodname_actions %} 向项目添加拉取请求。 当拉取请求标记为“准备审核”时，项目中会添加一项“状态”字段设置为“待办”的新任务，并且当前日期添加到自定义的“发布日期”字段中。

本文假设您基本了解 {% data variables.product.prodname_actions %}。 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[{% data variables.product.prodname_actions %}](/actions)”。

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

{% note %}

**注意：** `GITHUB_TOKEN` 没有必要的范围来访问项目（测试版）。 您必须使用 `org:write` 范围创建一个令牌，并将其保存为仓库或组织中的密码。 在以下工作流程中，将 `YOUR_TOKEN` 替换为密码名称。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

{% endnote %}

## 示例工作流程

您可以复制此工作流程，并按照下表所述进行修改，以满足您的需求。 项目可以跨越多个仓库，但工作流是特定于仓库的。 将此工作流程添加到您希望项目跟踪的每个仓库。 有关创建工作流程文件的更多信息，请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。

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

下表解释了工作流程的各个部分，并显示如何根据自己的使用进行调整。

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

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
为此步骤设置环境变量。
<br>
<br>
使用 <code>org:write</code> 范围创建一个令牌，并将其保存为仓库或组织中的密码。 将 <code>YOUR_TOKEN</code> 替换为密码名称。
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
使用 <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> 查询项目 ID 的 API 以及项目前 20 个字段的 ID、名称和设置。 响应存储在一个名为 <code>project_data.json</code> 的文件中。
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
解析 API 查询的响应，并将相关 ID 存储为环境变量。 修改此选项以获取不同字段或选项的 ID。 例如：
<ul>
<li>要获取名为 <code>Team</code> 的字段的 ID，请添加 <code>echo 'TEAM_FIELD_ID='$(jq 'data. rbodiation.projectNext.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>。</li>
<li>要为 <code>Team</code> 字段获取名为 <code>Octoteam</code> 的选项的 ID，请添加 <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") |.settings | fromjson.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
</ul>
<strong>注意：</strong>此工作流假定您有一个名为“状态”的单选字段，其中包括一个名为“待办”的选项和一个名为“发布日期”的日期字段。 您必须修改此部分以匹配表中存在的字段。
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
为此步骤设置环境变量。 <code>GITHUB_TOKEN</code> 如上所述。 <code>PR_ID</code> 是触发此工作流程的拉取请求的 ID。

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

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
```

</td>
<td>
为此步骤设置环境变量。 <code>GITHUB_TOKEN</code> 如上所述。

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
将 <code>Status</code> 字段的值设置为 <code>Todo</code>。 设置 <code>Date posted</code> 字段的值。
</td>
</tr>

</table>

## 后续步骤

有关可以通过 API 对项目进行的其他更改的更多信息，请参阅“[使用 API 管理项目](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)”。 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[{% data variables.product.prodname_actions %}](/actions)”。
