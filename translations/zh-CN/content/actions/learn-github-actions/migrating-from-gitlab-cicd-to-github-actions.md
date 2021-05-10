---
title: 从 GitLab CI/CD 迁移到 GitHub Actions
intro: '{% data variables.product.prodname_actions %} 和 GitLab CI/CD 具有一些相似的配置，这使得迁移到 {% data variables.product.prodname_actions %} 很简单。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - GitLab
  - Migration
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 简介

GitLab CI/CD 和 {% data variables.product.prodname_actions %} 都允许您创建能自动构建、测试、发布、发行和部署代码的工作流程。 GitLab CI/CD 和 {% data variables.product.prodname_actions %} 的工作流程配置有一些相似之处：

- 工作流程配置文件以 YAML 编写并存储在代码仓库中。
- 工作流程包括一项或多项作业。
- 作业包括一个或多个步骤或单个命令。
- 作业可以在托管或自托管计算机上运行。

存在一些区别，本指南将说明重要区别，以便您将工作流程迁移到 {% data variables.product.prodname_actions %}。

### Jobs

GitLab CI/CD 中的作业非常类似于 {% data variables.product.prodname_actions %} 中的作业。 在这两个系统中，作业具有以下特征：

* 作业包含一系列按顺序运行的步骤或脚本。
* 作业可在单独的计算机或单独的容器中运行。
* 默认情况下作业并行运行，但可以配置为按顺序运行。

可在作业中运行脚本或 shell 命令。 在 GitLab CI/CD 中，使用 `script` 键指定脚本步骤。 在 {% data variables.product.prodname_actions %} 中，所有脚本都使用 `run` 键来指定。

下面是每个系统的语法示例：

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  job1:
    steps:
      - uses: actions/checkout@v2
      - run: echo "Run your script here"
```
{% endraw %}
</td>
</tr>
</table>

### 运行器

运行器是运行作业的机器。 GitLab CI/CD 和 {% data variables.product.prodname_actions %} 提供托管和自托管的运行器变体。 在 GitLab CI/CD 中，`tags` 用于在不同的平台上运行作业，而在 {% data variables.product.prodname_actions %} 中，它使用 `runs-on` 键运行。

下面是每个系统的语法示例：

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job:
  tags:
    - linux
  script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on : windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)”。

### Docker 映像

GitLab CI/CD 和 {% data variables.product.prodname_actions %} 都支持在 Docker 映像中运行作业。 在 GitLab CI/CD 中，Docker 映像使用 `image` 键定义，而在 {% data variables.product.prodname_actions %} 中，它使用 `container` 键定义。

下面是每个系统的语法示例：

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)”。

### 条件和表达式语法

GitLab CI/CD 使用 `rules` 确定作业是否在特定条件下运行。 {% data variables.product.prodname_actions %} 使用 `if` 关键字使作业仅在满足条件时才运行。

下面是每个系统的语法示例：

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

### 作业之间的依赖关系

GitLab CI/CD 和 {% data variables.product.prodname_actions %} 允许您为作业设置依赖项。 在这两个系统中，默认情况下作业并行运行，但 {% data variables.product.prodname_actions %} 中的作业依赖项可以用 `needs` 键明确指定。 GitLab CI/CD 还具有 `stages` 的概念，其中作业分阶段同时运行，但下一阶段将在前一阶段的所有作业完成时开始。 您可以使用 `needs` 键在 {% data variables.product.prodname_actions %} 中重新创建此情景。

下面是每个系统的语法示例： 工作流程首先同时运行两个名为 `build_a` 和 `build_b` 的作业， 当这些作业完成后，另一个名为 `test_ab` 的作业将运行。 最后，`test_ab` 完成后，`depl_ab` 作业运行。

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a:
  stage: build
  script:
    - echo "This job will run first."

build_b:
  stage: build
  script:
    - echo "This job will run first, in parallel with build_a."

test_ab:
  stage: test
  script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab:
  stage: deploy
  script:
    - echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

### 预定工作流程

GitLab CI/CD 和 {% data variables.product.prodname_actions %} 允许您以特定的间隔运行工作流程。 在 GitLab CI/CD 中，管道计划使用 UI 配置，而在 {% data variables.product.prodname_actions %} 中，您可以使用 "on" 键在预定的间隔时间触发工作流程。

更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#scheduled-events)”。

### 变量和机密

GitLab CI/CD 和 {% data variables.product.prodname_actions %} 支持在管道或工作流程配置文件中设置环境变量，并使用 GitLab 或 {% data variables.product.product_name %} UI 创建密码。

更多信息请参阅“[环境变量](/actions/reference/environment-variables)”和“[使用加密密码](/actions/reference/encrypted-secrets)”。

### 缓存

GitLab CI/CD 和 {% data variables.product.prodname_actions %} 在配置文件中提供了手动缓存工作流程文件的方法。

下面是每个系统的语法示例：

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache:
  key: $CI_COMMIT_REF_SLUG
  paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async:
  script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  test_async:
    - name: Cache node modules
      uses: actions/cache@v2
      with:
        path: ~/.npm
        key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
        restore-keys: v1-npm-deps-
```
{% endraw %}
</td>
</tr>
</table>

{% data variables.product.prodname_actions %} 缓存仅适用于 {% data variables.product.prodname_dotcom %} 托管的运行器。 更多信息请参阅“<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">缓存依赖项以加快工作流程</a>”。

### 构件

GitLab CI/CD 和 {% data variables.product.prodname_actions %} 都可以上传作业创建的文件和目录作为构件。 在 {% data variables.product.prodname_actions %} 中，构件可用于在多个作业中保留数据。

下面是每个系统的语法示例：

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- name: Upload math result for job 1
  uses: actions/upload-artifact@v2
  with:
    name: homework
    path: math-homework.txt
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[将工作流程存储为构件](/actions/guides/storing-workflow-data-as-artifacts)”。

### 数据库和服务容器

这两个系统都允许您包括用于数据库、缓存或其他依赖项的其他容器。

在 GitLab CI/CD 中，作业的容器使用 `image` 键指定，而 {% data variables.product.prodname_actions %} 使用 `container` 键指定。 在这两个系统中，使用 `services` 键指定附加服务容器。

下面是每个系统的语法示例：

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: actions/checkout@v2

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[关于服务容器](/actions/guides/about-service-containers)”。
