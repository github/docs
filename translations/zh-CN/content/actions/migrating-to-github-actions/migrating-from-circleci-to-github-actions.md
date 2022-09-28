---
title: 从 CircleCI 迁移到 GitHub Actions
intro: GitHub Actions 和 CircleCI 在配置上具有若干相似之处，这使得迁移到 GitHub Actions 相对简单。
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrate from CircleCI
ms.openlocfilehash: d3f7a527f21588ec2bd60e04639a861c35b12b7f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147518966'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

CircleCI 和 {% data variables.product.prodname_actions %} 都允许您创建能自动构建、测试、发布、发行和部署代码的工作流程。 CircleCI 和 {% data variables.product.prodname_actions %} 的工作流程配置有一些相似之处：

- 工作流程配置文件以 YAML 编写并存储在仓库中。
- 工作流程包括一项或多项作业。
- 作业包括一个或多个步骤或单个命令。
- 步骤或任务可以重复使用并与社区共享。

有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的核心概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”。

## 主要差异

从 CircleCI 迁移时，考虑以下差异：

- CircleCI 的自动测试并行性根据用户指定的规则或历史计时信息自动对测试进行分组。 此功能未内置于 {% data variables.product.prodname_actions %}。
- 在 Docker 容器中执行的操作对权限问题很敏感，因为容器具有不同的用户映射。 可以通过不使用 Dockerfile 中的 `USER` 说明来避免其中许多问题。 {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %}若要详细了解 {% data variables.product.product_name %} 托管的运行器上的 Docker 文件系统，请参阅“[关于 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)”。
{% endif %}

## 迁移工作流程和作业

CircleCI 在 config.yml 文件中定义 `workflows`，可以通过它配置多个工作流。 {% data variables.product.product_name %} 要求每个工作流有一个工作流文件，因此不要求你声明 `workflows`。 需要为 config.yml 中配置的每个工作流创建一个新的工作流文件。

CircleCI 和 {% data variables.product.prodname_actions %} 在配置文件中使用相似的语法配置 `jobs`。 如果在 CircleCI 工作流程中使用 `requires` 配置作业之间的任何依赖项，那么可以使用等效的 {% data variables.product.prodname_actions %} `needs` 语法。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

## 将 orbs 迁移到操作

CircleCI 和 {% data variables.product.prodname_actions %} 都提供在工作流程中重复使用和共享任务的机制。 CircleCI 使用以 YAML 编写的概念 orbs 来提供人们可以在工作流程中重复使用的任务。 {% data variables.product.prodname_actions %} 具有强大而灵活的可重复使用的组件，称为“操作”，您可以使用 JavaScript 文件或 Docker 映像来构建操作。 您可以编写自定义代码来创建操作，以您喜欢的方式与仓库交互，包括使用 {% data variables.product.product_name %} 的 API 以及任何公开的第三方 API 进行交互。 例如，操作可以发布 npm 模块、在创建紧急问题时发送短信提醒，或者部署可用于生产的代码。 有关详细信息，请参阅“[创建操作](/actions/creating-actions)”。

CircleCI 可以使用 YAML 锚点和别名来重复使用工作流程的组件。 {% data variables.product.prodname_actions %} 支持对于重复使用矩阵的最常见需求。 有关矩阵的详细信息，请参阅“[为作业使用矩阵](/actions/using-jobs/using-a-matrix-for-your-jobs)”。

## 使用 Docker 映像


CircleCI 和 {% data variables.product.prodname_actions %} 都支持在 Docker 映像中运行步骤。

CircleCI 提供一套具有共同依赖项的预建映像。 这些映像的 `USER` 设置为 `circleci`，会导致权限与 {% data variables.product.prodname_actions %} 冲突。

建议在迁移到 {% data variables.product.prodname_actions %} 时不使用 CircleCI 的预建映像。 在许多情况下，您可以使用操作来安装需要的附加依赖项。

{% ifversion ghae %} 有关 Docker 文件系统的详细信息，请参阅“[Docker 容器文件系统](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)”。

{% data reusables.actions.self-hosted-runners-software %} {% else %}有关 Docker 文件系统的详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)”。

若要详细了解 {% data variables.product.prodname_dotcom %} 托管的运行器映像中可用的工具和包，请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的规范](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。
{% endif %}

## 使用变量和密码

CircleCI 和 {% data variables.product.prodname_actions %} 支持在配置文件中设置环境变量，并使用 CircleCI 或 {% data variables.product.product_name %} UI 创建密码。

有关详细信息，请参阅“[使用环境变量](/actions/configuring-and-managing-workflows/using-environment-variables)”和“[创建和使用加密的机密](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。

## 缓存

CircleCI 和 {% data variables.product.prodname_actions %} 提供在配置文件中手动缓存文件的方法。

{% ifversion actions-caching %}

下面是每个系统的语法示例：

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub 操作
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

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

{% data variables.product.prodname_actions %} 没有 CircleCI 的 Docker 层缓存（或 DLC）的等效项。

## 在作业之间保持数据

CircleCI 和 {% data variables.product.prodname_actions %} 提供在作业之间保持数据的机制。

下面是 CircleCI 和 {% data variables.product.prodname_actions %} 配置语法中的示例。

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub 操作
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

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

有关详细信息，请参阅“[使用工件持久保存工作流数据](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)”。

## 使用数据库和服务容器

这两个系统都允许您包括用于数据库、缓存或其他依赖项的其他容器。

在 CircleCI 中，config.yaml 中列出的第一个映像是用于运行命令的主要映像。 {% data variables.product.prodname_actions %} 使用显式部分：使用 `container` 作为主容器，并在 `services` 中列出其他容器。

下面是 CircleCI 和 {% data variables.product.prodname_actions %} 配置语法中的示例。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub 操作
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26: docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""

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


workflows: version: 2 build: jobs: - ruby-26 ...

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

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
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

有关详细信息，请参阅“[关于服务容器](/actions/configuring-and-managing-workflows/about-service-containers)”。

## 完整的示例

下面是一个真实的示例。 左边显示用于 [thoughtbot/administrator](https://github.com/thoughtbot/administrate) 存储库的实际 CircleCI config.yml。 右边显示 {% data variables.product.prodname_actions %} 等效项。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub 操作
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands: shared_steps: steps: - checkout

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

default_job: &default_job working_directory: ~/administrate steps:
    - shared_steps
    # 针对多个版本的 Rails 运行测试
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs: ruby-25: <<: *default_job docker: - image: circleci/ruby:2.5.0-node-browsers environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby25 POSTGRES_PASSWORD: ""

  ruby-26: <<: *default_job docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""


workflows: version: 2 multiple-rubies: jobs: - ruby-26 - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
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
</td>
</tr>
</table>
