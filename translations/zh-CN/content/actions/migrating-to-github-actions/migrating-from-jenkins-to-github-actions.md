---
title: 从 Jenkins 迁移到 GitHub Actions
intro: '{% data variables.product.prodname_actions %} 和 Jenkins 有多种相似之处，这使得迁移到 {% data variables.product.prodname_actions %} 相对简单。'
redirect_from:
  - /actions/learn-github-actions/migrating-from-jenkins-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Jenkins
  - Migration
  - CI
  - CD
shortTitle: 从 Jenkins 迁移
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

Jenkins 和 {% data variables.product.prodname_actions %} 都允许您创建能自动构建、测试、发布、发行和部署代码的工作流程。 Jenkins 和 {% data variables.product.prodname_actions %} 的工作流程配置有一些相似之处：

- Jenkins 使用 _Declarative Pelines_ 创建工作流程，这些工作流程类似于 {% data variables.product.prodname_actions %} 工作流程文件。
- Jenkins 使用_阶段_运行步骤集合，而 {% data variables.product.prodname_actions %} 则使用作业来分组一个或多个步骤或单个命令。
- Jenkins 和 {% data variables.product.prodname_actions %} 支持基于容器的构建。 更多信息请参阅“[创建 Docker 容器操作](/articles/creating-a-docker-container-action)”。
- 步骤或任务可以重复使用并与社区共享。

更多信息请参阅“[{% data variables.product.prodname_actions %} 的核心概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”。

## 主要差异

- Jenkins 有两种类型的语法用来创建管道：Declarative Pipeline 和 Scripted Pipeline。 {% data variables.product.prodname_actions %} 使用 YAML 创建工作流程和配置文件。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions)”。
- Jenkins 部署通常是自托管的，用户在自己的数据中心维护服务器。 {% data variables.product.prodname_actions %} 通过托管自己可用于运行作业的运行器提供混合云方法，同时也支持自托管运行器。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。

## 比较功能

### 分发版本

Jenkins 可让您发送版本到单个构建代理，或者您可以在多个代理之间进行分发。 您也可以根据不同的属性（例如操作系统类型）对这些代理进行分类。

同样， {% data variables.product.prodname_actions %} 可以向 {% data variables.product.prodname_dotcom %} 托管或自托管的运行器发送作业，您可以根据不同的属性使用标签对运行器分类。 更多信息请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions#runners)”和“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。

### 使用区段组织管道

Jenkins 将其 Declarative Pipelines 分为多个区段。 同样，{% data variables.product.prodname_actions %} 也将其工作流程分成单独的部分。 下表比较了Jenkins 区段与 {% data variables.product.prodname_actions %} 工作流程。

| Jenkins 指令                                                      | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |                                                                                                                                                                                                                                                                                                        |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs)                                                                                                                                                                                                |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)                                                                                                                                                                |

## 使用指令

Jenkins 使用指令来管理 _Declarative Pipelines_。 这些指令定义工作流程的特性及其执行方式。 下表演示这些指令如何映射到 {% data variables.product.prodname_actions %} 中的概念。

| Jenkins 指令                                                                                                                                                                                                                                                    | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                                                                                                                                                                                     | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                          | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)                                                                                                                                                                                                                                                                                                                           |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                       | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                                           | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) <br> [<code>on.<pull_request\>.<branches\></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                    | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Jenkins cron syntax](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)                                                                                                                                                                               | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`阶段，暂存`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                                                                                                                                                                                                 | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| {% ifversion ghae %}命令行工具在自托管运行器系统上的 `PATH` 中可用。 {% data reusables.actions.self-hosted-runners-software %}{% else %}[{% data variables.product.prodname_dotcom %} 托管的运行器的规格](/actions/reference/specifications-for-github-hosted-runners/#supported-software) | {% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                                                                                                                                                                                                 | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                                                                                                                                                                                   | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## 使用连续阶段

### 并行作业处理

Jenkins 可以并行运行 `stages` 和 `steps`，而 {% data variables.product.prodname_actions %} 目前只能并行运行作业。

| Jenkins Parallel                                                    | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

### 构建矩阵

{% data variables.product.prodname_actions %} 和 Jenkins 都允许您使用构建矩阵来定义各种系统组合。

| Jenkins                                                                  | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context)                                                                                            |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |                                                                                                                                                                                                 |

### 使用步骤执行任务

Jenkins 将 `steps` 组织在 `stages`。 每个步骤都可以是脚本、函数或命令等。 同样， {% data variables.product.prodname_actions %} 使用 `job` 来执行特定的 `steps` 组。

| Jenkins 步骤                                                      | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`script`](https://jenkins.io/doc/book/pipeline/syntax/#script) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## 常见任务示例

### 计划与 `cron` 一起运行的管道

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} 工作流程
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  triggers {
    cron('H/15 * * * 1-5')
  }
}
```

</td>
<td>

```yaml
on:
  schedule:
    - cron: '*/15 * * * 1-5'
```

</td>
</tr>
</table>

### 配置管道中的环境变量

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} 工作流程
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  environment {
    MAVEN_PATH = '/usr/local/maven'
  }
}
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### 从上游项目构建

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} 工作流程
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  triggers {
    upstream(
      upstreamProjects: 'job1,job2',
      threshold: hudson.model.Result.SUCCESS
    )
  }
}
```

</td>
<td>

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

</td>
</tr>
</table>

### 使用多个操作系统构建

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} 工作流程
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent none
  stages {
    stage('Run Tests') {
      matrix {
        axes {
          axis {
            name: 'PLATFORM'
            values: 'macos', 'linux'
          }
        }
        agent { label "${PLATFORM}" }
        stages {
          stage('test') {
            tools { nodejs "node-12" }
            steps {
              dir("scripts/myapp") {
                sh(script: "npm install -g bats")
                sh(script: "bats tests")
              }
            }
          }
        }
      }
    }
  }
}
```

</td>
<td>

{% raw %}
```yaml
name: demo-workflow
on:
  push:
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: [macos-latest, ubuntu-latest]
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 12
      - run: npm install -g bats
      - run: bats tests
        working-directory: scripts/myapp
```
{% endraw %}

</td>
</tr>
</table>
