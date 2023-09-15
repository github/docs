---
title: Migrating from Jenkins to GitHub Actions
intro: '{% data variables.product.prodname_actions %} and Jenkins share multiple similarities, which makes migration to {% data variables.product.prodname_actions %} relatively straightforward.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-jenkins-to-github-actions
  - /actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
  - /actions/migrating-to-github-actions/manual-migrations/migrating-from-jenkins-to-github-actions
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
shortTitle: Migrate from Jenkins
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Jenkins and {% data variables.product.prodname_actions %} both allow you to create workflows that automatically build, test, publish, release, and deploy code. Jenkins and {% data variables.product.prodname_actions %} share some similarities in workflow configuration:

- Jenkins creates workflows using _Declarative Pipelines_, which are similar to {% data variables.product.prodname_actions %} workflow files.
- Jenkins uses _stages_ to run a collection of steps, while {% data variables.product.prodname_actions %} uses jobs to group one or more steps or individual commands.
- Jenkins and {% data variables.product.prodname_actions %} support container-based builds. For more information, see "[AUTOTITLE](/actions/creating-actions/creating-a-docker-container-action)."
- Steps or tasks can be reused and shared with the community.

For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)."

## Key differences

- Jenkins has two types of syntax for creating pipelines: Declarative Pipeline and Scripted Pipeline. {% data variables.product.prodname_actions %} uses YAML to create workflows and configuration files. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)."
- Jenkins deployments are typically self-hosted, with users maintaining the servers in their own data centers. {% data variables.product.prodname_actions %} offers a hybrid cloud approach by hosting its own runners that you can use to run jobs, while also supporting self-hosted runners. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners).

## Comparing capabilities

### Distributing your builds

Jenkins lets you send builds to a single build agent, or you can distribute them across multiple agents. You can also classify these agents according to various attributes, such as operating system types.

Similarly, {% data variables.product.prodname_actions %} can send jobs to {% data variables.product.prodname_dotcom %}-hosted or self-hosted runners, and you can use labels to classify runners according to various attributes. For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions#runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."

### Using sections to organize pipelines

Jenkins splits its Declarative Pipelines into multiple sections. Similarly, {% data variables.product.prodname_actions %} organizes its workflows into separate sections. The table below compares Jenkins sections with the {% data variables.product.prodname_actions %} workflow.

| Jenkins Directives | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     | None  |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobs) |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## Using directives

Jenkins uses directives to manage _Declarative Pipelines_. These directives define the characteristics of your workflow and how it will execute. The table below demonstrates how these directives map to concepts within {% data variables.product.prodname_actions %}.

| Jenkins Directives | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                  | [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv) |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                       | [`jobs.<job_id>.strategy`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes) |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                    | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions) |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                        | [`on`](/actions/using-workflows/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/using-workflows/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) <br> [<code>on.<pull_request\>.<branches\></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers) | [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds) |
| [Jenkins cron syntax](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)            | [`on.schedule`](/actions/using-workflows/workflow-syntax-for-github-actions#onschedule) |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                              | [`jobs.<job_id>`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idname) |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                              | {% ifversion ghae %}The command-line tools available in `PATH` on your self-hosted runner systems. {% data reusables.actions.self-hosted-runners-software %}{% else %}[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software) |{% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                              | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                | [`jobs.<job_id>.if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idif) |

## Using sequential stages

### Parallel job processing

Jenkins can run the `stages` and `steps` in parallel, while {% data variables.product.prodname_actions %} currently only runs jobs in parallel.

| Jenkins Parallel | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

### Matrix

Both {% data variables.product.prodname_actions %} and Jenkins let you use a matrix to define various system combinations.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/using-workflows/about-workflows#using-a-build-matrix) <br> [`context`](/actions/learn-github-actions/contexts) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/learn-github-actions/contexts#steps-context) |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) | None |

### Using steps to execute tasks

Jenkins groups `steps` together in `stages`. Each of these steps can be a script, function, or command, among others. Similarly, {% data variables.product.prodname_actions %} uses `jobs` to execute specific groups of `steps`.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps) | [`jobs.<job_id>.steps`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## Examples of common tasks

### Scheduling a pipeline to run with `cron`

#### Jenkins pipeline with `cron`

```yaml
pipeline {
  agent any
  triggers {
    cron('H/15 * * * 1-5')
  }
}
```

#### {% data variables.product.prodname_actions %} workflow with `cron`

```yaml
on:
  schedule:
    - cron: '*/15 * * * 1-5'
```

### Configuring environment variables in a pipeline

#### Jenkins pipeline with an environment variable

```yaml
pipeline {
  agent any
  environment {
    MAVEN_PATH = '/usr/local/maven'
  }
}
```

#### {% data variables.product.prodname_actions %} workflow with an environment variable

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

### Building from upstream projects

#### Jenkins pipeline that builds from an upstream project

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

#### {% data variables.product.prodname_actions %} workflow that builds from an upstream project

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

### Building with multiple operating systems

#### Jenkins pipeline that builds with multiple operating systems

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
            tools { nodejs "node-16" }
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

#### {% data variables.product.prodname_actions %} workflow that builds with multiple operating systems

```yaml
name: demo-workflow
on:
  push:
jobs:
  test:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      fail-fast: false
      matrix:
        os: [macos-latest, ubuntu-latest]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16
      - run: npm install -g bats
      - run: bats tests
        working-directory: ./scripts/myapp
```
