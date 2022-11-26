---
title: 'Автоматизация {% data variables.product.prodname_projects_v2 %} с помощью Actions'
shortTitle: Automating with Actions
intro: 'Для автоматизации проектов можно использовать {% data variables.product.prodname_actions %}.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106848'
---
## Рабочие процессы {% data variables.product.prodname_actions %}

В этом разделе показано, как использовать API GraphQL и {% data variables.product.prodname_actions %} для добавления запроса на вытягивание в проект организации. В примерах рабочих процессов, когда запрос на вытягивание помечен как "готов к проверке", в проект добавляется новая задача, для которой в поле "Состояние" указано "Выполнить", а в настраиваемое поле "Дата публикации" добавляется текущая дата.

Вы можете скопировать один из приведенных ниже рабочих процессов и изменить его, как описано в таблице ниже, в соответствии с вашими потребностями.

Проект может охватывать несколько репозиториев, но рабочий процесс зависит от репозитория. Добавьте рабочий процесс в каждый репозиторий, который требуется отслеживать в проекте. Дополнительные сведения о создании файлов рабочего процесса см. в разделе "[Краткое руководство по {% data variables.product.prodname_actions %}](/actions/quickstart).

В этой статье предполагается, что у вас есть базовое представление о {% data variables.product.prodname_actions %}. Дополнительные сведения о {% data variables.product.prodname_actions %} см. в разделе [{% data variables.product.prodname_actions %}](/actions).

Дополнительные сведения о других изменениях, которые можно внести в проект с помощью API, см. в разделе [Использование API для управления проектами](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects).

Вы также можете использовать рабочий процесс **actions/add-to-project**, который поддерживается {% data variables.product.company_short %} и добавит текущую проблему или запрос на вытягивание в указанный проект. Дополнительные сведения см. в репозитории [actions/add-to-project](https://github.com/actions/add-to-project) и файле сведений.

{% note %}

**Примечание.** `GITHUB_TOKEN` ограничен уровнем репозитория и не может получить доступ к {% data variables.projects.projects_v2 %}. Для доступа к {% data variables.projects.projects_v2 %} можно создать {% data variables.product.prodname_github_app %} (рекомендуется для проектов организации) или {% data variables.product.pat_generic %} (рекомендуется для пользовательских проектов). Ниже приведены примеры рабочих процессов для обоих подходов.

{% endnote %}

### Пример проверки подлинности рабочего процесса при использовании {% data variables.product.prodname_github_app %}

1. Создайте {% data variables.product.prodname_github_app %} или выберите существующий {% data variables.product.prodname_github_app %}, принадлежащий вашей организации. Дополнительные сведения см. в статье [Создание {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app).
2. Предоставьте для {% data variables.product.prodname_github_app %} разрешения на чтение и запись в проектах организации. Дополнительные сведения см. в разделе [Изменение разрешений {% data variables.product.prodname_github_app %}](/developers/apps/managing-github-apps/editing-a-github-apps-permissions).

   {% note %}

   **Примечание.** Вы можете управлять разрешением приложения в проектах организации и проектах репозитория. Необходимо предоставить разрешение на чтение и запись в проектах организации; разрешений на чтение и запись в проектах репозитория будет недостаточно.

   {% endnote %}

3. Установите {% data variables.product.prodname_github_app %} в вашей организации. Установите его для всех репозиториев, к которым проект должен получать доступ. Дополнительные сведения см. в разделе [Установка {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository).
4. Храните идентификатор {% data variables.product.prodname_github_app %} как секрет в репозитории или организации. В следующем рабочем процессе замените `APP_ID` именем секрета. Идентификатор приложения можно найти на странице параметров приложения или через API приложений. Дополнительные сведения см. в разделе [Приложения ](/rest/reference/apps#get-an-app).
5. Создайте закрытый ключ для приложения. Сохраните содержимое итогового файла в виде секрета в репозитории или организации. (Сохраните все содержимое файла, включая `-----BEGIN RSA PRIVATE KEY-----` и `-----END RSA PRIVATE KEY-----`.) В следующем рабочем процессе замените `APP_PEM` именем секрета. Дополнительные сведения см. в разделе [Проверка подлинности с помощью {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
6. В следующем рабочем процессе замените `YOUR_ORGANIZATION` названием организации. Например, `octo-org`. Замените `YOUR_PROJECT_NUMBER` номером проекта. Чтобы найти номер проекта, просмотрите URL-адрес проекта. Например, у `https://github.com/orgs/octo-org/projects/5` номер 5.

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

### Пример проверки подлинности рабочего процесса с помощью {% data variables.product.pat_generic %}

1. Создайте {% data variables.product.pat_v1 %} с областями `project` и `repo` . Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).
2. Сохраните {% data variables.product.pat_generic %} в качестве секрета в репозитории или организации.
3. В следующем рабочем процессе замените `YOUR_TOKEN` именем секрета. Замените `YOUR_ORGANIZATION` названием организации. Например, `octo-org`. Замените `YOUR_PROJECT_NUMBER` номером проекта. Чтобы найти номер проекта, просмотрите URL-адрес проекта. Например, у `https://github.com/orgs/octo-org/projects/5` номер 5.

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

### Описание рабочего процесса

В следующей таблице описаны разделы примеров рабочих процессов и показано, как адаптировать рабочие процессы для собственного использования.

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
Этот рабочий процесс выполняется каждый раз, когда запрос на вытягивание в репозитории помечается как "готов к проверке".
</td>
</tr>

<tr>
<td>

Только {% data variables.product.prodname_github_app %}:

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
Использует <a href="https://github.com/tibdex/github-app-token">действие tibdex/github-app-token</a> для создания маркера доступа установки для приложения на основе идентификатора приложения и закрытого ключа. Маркер доступа установки будет доступен позже в рабочем процессе как <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>.
<br>
<br>
Замените <code>APP_ID</code> именем секрета, содержащего идентификатор приложения.
<br>
<br>
Замените <code>APP_PEM</code> именем секрета, содержащего закрытый ключ.
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
Задает переменные среды для этого шага.
<br>
<br>
Если вы используете {% data variables.product.pat_generic %}, замените <code>YOUR_TOKEN</code> именем секрета, содержащего {% data variables.product.pat_generic %}.
<br>
<br>
Замените <code>YOUR_ORGANIZATION</code> названием организации. Например, <code>octo-org</code>.
<br>
<br>
Замените <code>YOUR_PROJECT_NUMBER</code> номером проекта. Чтобы найти номер проекта, просмотрите URL-адрес проекта. Например, у <code>https://github.com/orgs/octo-org/projects/5</code> номер 5.
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
<p>Использует <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a>, чтобы по идентификатору проекта получить от API идентификаторы, имена и параметры первых 20 полей в этом проекте. <code>fields</code> возвращает объединение, и в этом запросе используются встроенные фрагменты (<code>... on</code>) для передачи сведений о любых полях <code>ProjectV2Field</code> и <code>ProjectV2SingleSelectField</code>.</p>

<p>Ответ хранится в файле с именем <code>project_data.json</code>.</p>
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
Анализирует ответ из запроса API и сохраняет соответствующие идентификаторы в виде переменных среды. Измените его, чтобы получить идентификатор для различных полей или параметров. Пример:
<ul>
<li>Чтобы получить идентификатор поля с именем <code>Team</code>, добавьте <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>Чтобы получить идентификатор параметра с именем <code>Octoteam</code> для поля <code>Team</code> с одиночным выбором, добавьте <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code>.</li>
</ul>
<strong>Примечание. </strong> В этом рабочем процессе предполагается, что у вас есть проект с полем одиночного выбора с именем "Состояние" и вариантом "Выполнить", а также поле даты с именем "Дата публикации". Этот раздел необходимо изменить в соответствии с полями, которые присутствуют в таблице.
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
Задает переменные среды для этого шага. <code>GITHUB_TOKEN</code> — описано выше. <code>PR_ID</code> — это идентификатор запроса на вытягивание, который активировал этот рабочий процесс.

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
Использует <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> и API для добавления в проект запроса на вытягивание, который активировал этот рабочий процесс. Флаг <code>jq</code> анализирует ответ, чтобы получить идентификатор созданного элемента.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
Сохраняет идентификатор созданного элемента в качестве переменной среды.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
Сохраняет текущую дату в виде переменной среды в формате <code>yyyy-mm-dd</code>.
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
Задает переменные среды для этого шага. <code>GITHUB_TOKEN</code> — описано выше.

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
Устанавливает для поля <code>Status</code> значение <code>Todo</code>. Устанавливает значение поля <code>Date posted</code>.
</td>
</tr>

</table>
