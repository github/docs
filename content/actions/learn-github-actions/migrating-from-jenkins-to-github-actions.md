---
title: Migrating from Jenkins to GitHub Actions
intro: '{% data variables.product.prodname_actions %} and Jenkins share multiple similarities, which makes migration to {% data variables.product.prodname_actions %} relatively straightforward.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction

Jenkins and {% data variables.product.prodname_actions %} both allow you to create workflows that automatically build, test, publish, release, and deploy code. Jenkins and {% data variables.product.prodname_actions %} share some similarities in workflow configuration:

- Jenkins creates workflows using _Declarative Pipelines_, which are similar to {% data variables.product.prodname_actions %} workflow files.
- Jenkins uses _stages_ to run a collection of steps, while {% data variables.product.prodname_actions %} uses jobs to group one or more steps or individual commands.
- Jenkins and {% data variables.product.prodname_actions %} support container-based builds. For more information, see "[Creating a Docker container action](/articles/creating-a-docker-container-action)."
- Steps or tasks can be reused and shared with the community.

For more information, see "[Core concepts for {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)."

### Key differences

- Jenkins has two types of syntax for creating pipelines: Declarative Pipeline and Scripted Pipeline. {% data variables.product.prodname_actions %} uses YAML to create workflows and configuration files. For more information, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions)."
- Jenkins deployments are typically self-hosted, with users maintaining the servers in their own data centers. {% data variables.product.prodname_actions %} offers a hybrid cloud approach by hosting its own runners that you can use to run jobs, while also supporting self-hosted runners. For more information, see [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners).

### Comparing capabilities

#### Distributing your builds

Jenkins lets you send builds to a single build agent, or you can distribute them across multiple agents. You can also classify these agents according to various attributes, such as operating system types.

Similarly, {% data variables.product.prodname_actions %} can send jobs to {% data variables.product.prodname_dotcom %}-hosted or self-hosted runners, and you can use labels to classify runners according to various attributes. The following table compares how the distributed build concept is implemented for both Jenkins and {% data variables.product.prodname_actions %}.

| Jenkins       |  {% data variables.product.prodname_actions %}       |
| ------------- | ------------- |
| [`agents`](https://wiki.jenkins.io/display/JENKINS/Distributed+builds)        | [`runners`](/actions/learn-github-actions/introduction-to-github-actions#runners)  <br> [`self-hosted runners`](/actions/hosting-your-own-runners/about-self-hosted-runners)|

#### Using sections to organize pipelines

Jenkins splits its Declarative Pipelines into multiple sections. Similarly, {% data variables.product.prodname_actions %} organizes its workflows into separate sections. The table below compares Jenkins sections with the {% data variables.product.prodname_actions %} workflow.

|Jenkins Directives | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)        | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer)|
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)          |               |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages)          |     [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs)          |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)          |     [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)          |


### Using directives

Jenkins uses directives to manage _Declarative Pipelines_. These directives define the characteristics of your workflow and how it will execute. The table below demonstrates how these directives map to concepts within {% data variables.product.prodname_actions %}.

| Jenkins Directives | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)  |  [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) |
|  [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters) |  [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)|
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)  | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs) |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)  | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\|pull_request>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths) |
|  [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers) |  [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds) |
| [Jenkins cron syntax](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)  |  [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule) |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)  |  [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname)|
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)  |  [Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software) |
|  [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input) | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs)  |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)  |  [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) |


### Using sequential stages

#### Parallel job processing

Jenkins can run the `stages` and `steps` in parallel, while {% data variables.product.prodname_actions %} currently only runs jobs in parallel.

| Jenkins Parallel | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

#### Build matrix

Both {% data variables.product.prodname_actions %} and Jenkins let you use a build matrix to define various system combinations. 

| Jenkins  | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
|  [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)  |  [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions)   |
|  [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)  |  [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context)  |
|  [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)  | |

#### Using steps to execute tasks

Jenkins groups `steps` together in `stages`. Each of these steps can be a script, function, or command, among others. Similarly, {% data variables.product.prodname_actions %} uses `jobs` to execute specific groups of `steps`.

| Jenkins steps  | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
|  [`script`](https://jenkins.io/doc/book/pipeline/syntax/#script)  |  [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps)  |

### Examples of common tasks

#### Scheduling a pipeline to run with `cron`

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} Workflow
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
    - cron:  '*/15 * * * 1-5'
  ```

</td>
</tr>
</table>

#### Configuring environment variables in a pipeline

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} Workflow
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

#### Building from upstream projects

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} Workflow
</th>
</tr>
<tr>
<td>

  ```yaml
  pipeline {
    triggers {
      upstream(
        upstreamProjects: 'job1,job2',
        threshold: hudson.model.Result.SUCCESS)
      }
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

#### Building with multiple operating systems

<table>
<tr>
<th>
Jenkins Pipeline
</th>
<th>
{% data variables.product.prodname_actions %} Workflow
</th>
</tr>
<tr>
<td>

  ```yaml
pipeline {
  agent none
  stages {
    stage('Run Tests') {
      parallel {
        stage('Test On MacOS') {
          agent { label "macos" }
          tools { nodejs "node-12" }
          steps {
            dir("scripts/myapp") {
              sh(script: "npm install -g bats")
              sh(script: "bats tests")
            }
          }
        }
        stage('Test On Linux') {
          agent { label "linux" }
          tools { nodejs "node-12" }
          steps {
            dir("script/myapp") {
              sh(script: "npm install -g bats")
              sh(script: "bats tests")
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
        - uses: actions/checkout@v1
        - uses: actions/setup-node@v1
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
