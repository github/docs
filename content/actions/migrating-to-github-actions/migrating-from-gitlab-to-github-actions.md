---
title: Migrating from GitLab to GitHub Actions
intro: '{{ site.data.variables.product.prodname_actions }} and GitLab share several configuration similarities, which makes migrating to {{ site.data.variables.product.prodname_actions }} relatively straightforward.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Introduction

GitLab and {{ site.data.variables.product.prodname_actions }} both allow you to create workflows that automatically build, test, publish, release, and deploy code. GitLab and {{ site.data.variables.product.prodname_actions }} share some similarities in workflow configuration:

- Workflow configuration files are written in YAML and are stored in the code's repository.
- Workflows include one or more jobs.
- Jobs include one or more steps or individual commands.
- Jobs can run on both managed or on self-hosted machines.

There are a few differences, and this article will guide you to important differences so that you can easily migrate your workflow to GitHub Actions.

### Jobs

Jobs in GitLab are very similar to jobs in {{ site.data.variables.product.prodname_actions }}. In both systems, jobs have the following characteristics:

* Jobs contain a series of steps or scripts that run sequentially.
* Jobs run on separate virtual machines or in separate containers. [ need to check]
* Jobs run in parallel by default, but can be configured to run sequentially.

You can run a script or a shell command in a job. In GitLab, script steps are specified using the `script` key. In {{ site.data.variables.product.prodname_actions }}, all scripts are specified using the `run` key. 

Below is an example of the syntax for each system:

<table class="d-block">
<tr>
<th>
GitLab
</th>
<th>
{{ site.data.variables.product.prodname_actions }}
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

### Runners

Runners are machines on which the jobs run. Both GitLab and {{ site.data.variables.product.prodname_actions }} offers managed and self-hosted variants of runners. In GitLab, `tags` are used to run jobs on different platforms while the same is done in {{ site.data.variables.product.prodname_actions }} with a `runs-on` key.

Below is an example of the syntax for each system.

<table>
<tr>
<th>
GitLab
</th>
<th>
GitHub Actions
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

### Docker Images

Both GitLab and {{ site.data.variables.product.prodname_actions }} support running steps inside of a Docker image. In GitLab, docker images are defined with a `image` key while in GitHub Actions, the same can be done with a `container` key. 

Below is an example of the syntax for each system:

<table class="d-block">
<tr>
<th>
GitLab
</th>
<th>
{{ site.data.variables.product.prodname_actions }}
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

For more information, see "[Syntax for Containers](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)."

### Conditionals and Expression syntax

GitLab uses `rules` to determine if the job will or will not run for a specific condition. GitHub Actions provide a `if` keyword to prevent a job from running unless a condition is met. 

Below is an example of the syntax for each system:

<table class="d-block">
<tr>
<th>
GitLab
</th>
<th>
{{ site.data.variables.product.prodname_actions }}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deply to production server"
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
  if: contains( github.ref, 'master' )
    steps:
    - run: echo "Deply to production server"
```
{% endraw %}
</td>
</tr>
</table>

For more information, see "[Context and expression syntax for {{ site.data.variables.product.prodname_actions }}](/actions/reference/context-and-expression-syntax-for-github-actions)."

### Dependencies between Jobs

Both GitLab and {{ site.data.variables.product.prodname_actions }} allow you to set dependencies for a job. In both systems, jobs run in parallel by default, but job dependencies can be specified explicitly with the `needs` key. GitLab also has a concept of `stages`, where jobs in a stage run concurrently, but the next stage will kick in once all the jobs in the previous stage has completed. You can easily recreate this scenario in GitHub Actions with the `needs` keys. 

Below is an example of the syntax for each system. The workflows start with two jobs named `build_a` and `build_b`, and when these jobs complete, another job called `test_ab` will run. Finally, when this job complete, the job `deploy` will run.

<table class="d-block">
<tr>
<th>
GitLab
</th>
<th>
{{ site.data.variables.product.prodname_actions }}
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
    - echo "This job will run after build_a and buil_b have finished."

deploy_ab:
  stage: test
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
    - run: echo "This job will run after build_a and buil_b have finished"

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

### Scheduled Jobs

Both GitLab and {{ site.data.variables.product.prodname_actions }} allow you to run workflows at a specific interval. In GitLab, pipeline schedules are configured with a UI, while in GitHub Actions, you can trigger a workflow on the scheduled interval with the "on" key. 

For more information, see "[Scheduled events](/actions/reference/events-that-trigger-workflows#scheduled-events)."

### Variables and Secrets

GitLab and {{ site.data.variables.product.prodname_actions }} support setting environment variables in the configuration file and creating secrets using the GitLab or {{ site.data.variables.product.product_name }} UI.

For more information, see "[Using environment variables](/actions/configuring-and-managing-workflows/using-environment-variables)" and "[Creating and using encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."

### Caching

GitLab and {{ site.data.variables.product.prodname_actions }} provide a method to manually cache files in the configuration file.

Below is an example of the syntax for each system.

<table class="d-block">
<tr>
<th>
GitLab
</th>
<th>
GitHub Actions
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

For more information, see "[Caching dependencies to speed up workflows](/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows)."

### Artifacts

Both GitLab and {{ site.data.variables.product.prodname_actions }} provide `artifacts` to upload files and directories created by the job. In {{ site.data.variables.product.prodname_actions }}, artifacts can be used to persist data across multiple jobs. 

Below is an example of the syntax for each system.

<table>
<tr>
<th>
GitLab
</th>
<th>
GitHub Actions
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

For more information, see "[Persisting workflow data using artifacts](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)."

### Databases and Service containers

Both systems enable you to include additional containers for databases, caching, or other dependencies.

In GitLab, primary containers are specified with a `image` key while {{ site.data.variables.product.prodname_actions }} use `container` key for primary containers. In both system additional containers can be specificed with `services` key. 

Below is an example in GitLab and {{ site.data.variables.product.prodname_actions }} configuration syntax.

<table class="d-block">
<tr>
<th>
GitLab
</th>
<th>
GitHub Actions
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

For more information, see "[About service containers](/actions/configuring-and-managing-workflows/about-service-containers)."
