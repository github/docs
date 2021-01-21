---
title: 从 CircleCI 迁移到 GitHub 操作
intro: 'GitHub 操作和 CircleCI 在配置上具有若干相似之处，这使得迁移到 GitHub 操作相对简单。'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-circleci-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

CircleCI 和 {% data variables.product.prodname_actions %} 都允许您创建能自动构建、测试、发布、发行和部署代码的工作流程。 CircleCI 和 {% data variables.product.prodname_actions %} 的工作流程配置有一些相似之处：

- 工作流程配置文件以 YAML 编写并存储在仓库中。
- 工作流程包括一项或多项作业。
- 作业包括一个或多个步骤或单个命令。
- 步骤或任务可以重复使用并与社区共享。

更多信息请参阅“[{% data variables.product.prodname_actions %} 的核心概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”。

### 主要差异

从 CircleCI 迁移时，考虑以下差异：

- CircleCI 的自动测试并行性根据用户指定的规则或历史计时信息自动对测试进行分组。 此功能未内置于 {% data variables.product.prodname_actions %}。
- 在 Docker 容器中执行的操作对权限问题很敏感，因为容器具有不同的用户映射。 您可以通过在 *Dockerfile* 中不使用 `USER` 指令来避免这些问题。 有关 Docker 文件系统的更多信息，请参阅“[ {% data variables.product.product_name %} 托管运行器的虚拟环境](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)”。

### 迁移工作流程和作业

CircleCI 在 *config.yml* 文件中定义 `workflows`，允许您配置多个工作流程。 {% data variables.product.product_name %} 对每个工作流程需要一个工作流程文件，因此不要求您声明 `workflows`。 您需要为 *config.yml* 中配置的每个工作流程创建一个新的工作流程文件。

CircleCI 和 {% data variables.product.prodname_actions %} 在配置文件中使用相似的语法配置 `jobs`。 如果在 CircleCI 工作流程中使用 `requires` 配置作业之间的任何依赖项，您可以使用等效的 {% data variables.product.prodname_actions %} `needs` 语法。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

### 将 orbs 迁移到操作

CircleCI 和 {% data variables.product.prodname_actions %} 都提供在工作流程中重复使用和共享任务的机制。 CircleCI 使用以 YAML 编写的概念 orbs 来提供人们可以在工作流程中重复使用的任务。 {% data variables.product.prodname_actions %} 具有强大而灵活的可重复使用的组件，称为“操作”，您可以使用 JavaScript 文件或 Docker 映像来构建操作。 您可以编写自定义代码来创建操作，以您喜欢的方式与仓库交互，包括使用 {% data variables.product.product_name %} 的 API 以及任何公开的第三方 API 进行交互。 例如，操作可以发布 npm 模块、在创建紧急议题时发送短信提醒，或者部署可用于生产的代码。 更多信息请参阅“[创建操作](/actions/creating-actions)”。

CircleCI 可以使用 YAML 锚点和别名来重复使用工作流程的组件。 {% data variables.product.prodname_actions %} 支持对于重复使用构建矩阵的最常见需求。 有关构建矩阵的更多信息，请参阅“[管理复杂的工作流程](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix)”。

### 使用 Docker 映像


CircleCI 和 {% data variables.product.prodname_actions %} 都支持在 Docker 映像中运行步骤。

CircleCI 提供一套具有共同依赖项的预建映像。 这些映像的 `USER` 设置为 `circleci`，会导致权限与 {% data variables.product.prodname_actions %} 冲突。

建议在迁移到 {% data variables.product.prodname_actions %} 时不使用 CircleCI 的预建映像。 在许多情况下，您可以使用操作来安装需要的附加依赖项。

有关 Docker 文件系统的更多信息，请参阅“[ {% data variables.product.product_name %} 托管运行器的虚拟环境](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)”。

有关 {% data variables.product.prodname_dotcom %} 托管的虚拟环境中可用的工具和软件包的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的规格](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。

### 使用变量和密码

CircleCI 和 {% data variables.product.prodname_actions %} 支持在配置文件中设置环境变量，并使用 CircleCI 或 {% data variables.product.product_name %} UI 创建密码。

更多信息请参阅“[使用环境变量](/actions/configuring-and-managing-workflows/using-environment-variables)”和“[创建和使用加密密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。

### 缓存

CircleCI 和 {% data variables.product.prodname_actions %} 提供在配置文件中手动缓存文件的方法。

下面是每个系统的语法示例：

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
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

{% data variables.product.prodname_actions %} 没有 CircleCI 的 Docker 层缓存（或 DLC）的等效项。

### 在作业之间保持数据

CircleCI 和 {% data variables.product.prodname_actions %} 提供在作业之间保持数据的机制。

下面是 CircleCI 和 {% data variables.product.prodname_actions %} 配置语法中的示例。

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:
    at: /tmp/workspace
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

...

- name: Download math result for job 1
  uses: actions/download-artifact@v2
  with:
    name: homework
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[使用构件持久化工作流程](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)”。

### 使用数据库和服务容器

这两个系统都允许您包括用于数据库、缓存或其他依赖项的其他容器。

在 CircleCI 中，*config.yaml* 中列出的第一个映像是用于运行命令的主要映像。 {% data variables.product.prodname_actions %} 使用明确的区域： `container` 用于主容器，并在 `services` 中列出附加容器。

下面是 CircleCI 和 {% data variables.product.prodname_actions %} 配置语法中的示例。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26:
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows:
  version: 2
  build:
    jobs:
      - ruby-26
...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
        - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
    # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
    # See https://docs.github.com/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem
    - name: Setup file system permissions
      run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
    - uses: actions/checkout@v2
    - name: Install dependencies
      run: bundle install --path vendor/bundle
    - name: Setup environment configuration
      run: cp .sample.env .env
    - name: Setup database
      run: bundle exec rake db:setup
    - name: Run tests
      run: bundle exec rake
```
{% endraw %}
</td>
</tr>
</table>

更多信息请参阅“[关于服务容器](/actions/configuring-and-managing-workflows/about-service-containers)”。

### 完整示例

下面是一个真实的示例。 左边显示用于 [thoughtbot/administrator](https://github.com/thoughtbot/administrate) 仓库的实际 CircleCI *config.yml*。 右边显示 {% data variables.product.prodname_actions %} 等效项。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands:
  shared_steps:
    steps:
      - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job
  working_directory: ~/administrate
  steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs:
  ruby-25:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.5.0-node-browsers
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""

  ruby-26:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""


workflows:
  version: 2
  multiple-rubies:
    jobs:
      - ruby-26
      - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
        - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
    - uses: actions/checkout@v2
    - name: Setup Ruby
      uses: eregon/use-ruby-action@master
      with:
        ruby-version: ${{ matrix.ruby }}
    - name: Cache dependencies
      uses: actions/cache@v2
      with:
        path: vendor/bundle
        key: administrate-${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}
    - name: Install postgres headers
      run: sudo apt-get install libpq-dev
    - name: Install dependencies
      run: bundle install --path vendor/bundle
    - name: Setup environment configuration
      run: cp .sample.env .env
    - name: Setup database
      run: bundle exec rake db:setup
    - name: Run tests
      run: bundle exec rake
    - name: Install appraisal
      run: bundle exec appraisal install
    - name: Run appraisal
      run: bundle exec appraisal rake
```
{% endraw %}
</td>
</tr>
</table>
