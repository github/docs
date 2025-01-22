---
title: About workflows
shortTitle: About workflows
intro: 'Get a high-level overview of {% data variables.product.prodname_actions %} workflows, including triggers, syntax, and advanced features.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
  - /actions/using-workflows/about-workflows
topics:
  - Workflows
layout: inline
---

## About workflows

{% data reusables.actions.about-workflows-long %}

## Workflow basics

A workflow must contain the following basic components:

1. One or more _events_ that will trigger the workflow.
1. One or more _jobs_, each of which will execute on a _runner_ machine and run a series of one or more _steps_.
1. Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.

For more information on these basic components, see [AUTOTITLE](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions).

![Diagram of an event triggering Runner 1 to run Job 1, which triggers Runner 2 to run Job 2. Each of the jobs is broken into multiple steps.](/assets/images/help/actions/overview-actions-simple.png)

## Triggering a workflow

{% data reusables.actions.about-triggers %}

For more information, see [AUTOTITLE](/actions/using-workflows/triggering-a-workflow), and for a full list of events, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows).

## Workflow syntax

Workflows are defined using YAML. For the full reference of the YAML syntax for authoring workflows, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows).

For more on managing workflow runs, such as re-running, cancelling, or deleting a workflow run, see [AUTOTITLE](/actions/managing-workflow-runs).

## Using workflow templates

{% data reusables.actions.workflow-template-overview %}

{% data reusables.actions.workflow-templates-repo-link %}

## Advanced workflow features

This section briefly describes some of the advanced features of {% data variables.product.prodname_actions %} that help you create more complex workflows.

### Storing secrets

If your workflows use sensitive data, such as passwords or certificates, you can save these in {% data variables.product.prodname_dotcom %} as _secrets_ and then use them in your workflows as environment variables. This means that you will be able to create and share workflows without having to embed sensitive values directly in the workflow's YAML source.

This example job demonstrates how to reference an existing secret as an environment variable, and send it as a parameter to an example command.

{% raw %}

```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```

{% endraw %}

For more information, see [AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions).

### Creating dependent jobs

By default, the jobs in your workflow all run in parallel at the same time. If you have a job that must only run after another job has completed, you can use the `needs` keyword to create this dependency. If one of the jobs fails, all dependent jobs are skipped; however, if you need the jobs to continue, you can define this using the `if` conditional statement.

In this example, the `setup`, `build`, and `test` jobs run in series, with `build` and `test` being dependent on the successful completion of the job that precedes them:

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

For more information, see [AUTOTITLE](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs).

### Using a matrix

{% data reusables.actions.jobs.about-matrix-strategy %} The matrix is created using the `strategy` keyword, which receives the build options as an array. For example, this matrix will run the job multiple times, using different versions of Node.js:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

For more information, see [AUTOTITLE](/actions/using-jobs/using-a-matrix-for-your-jobs).

### Caching dependencies

If your jobs regularly reuse dependencies, you can consider caching these files to help improve performance. Once the cache is created, it is available to all workflows in the same repository.

This example demonstrates how to cache the `~/.npm` directory:

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

For more information, see [AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

### Using databases and service containers

If your job requires a database or cache service, you can use the [`services`](/actions/using-jobs/running-jobs-in-a-container) keyword to create an ephemeral container to host the service; the resulting container is then available to all steps in that job and is removed when the job has completed. This example demonstrates how a job can use `services` to create a `postgres` container, and then use `node` to connect to the service.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:20-bookworm-slim
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

For more information, see [AUTOTITLE](/actions/using-containerized-services).

### Using labels to route workflows

If you want to be sure that a particular type of runner will process your job, you can use labels to control where jobs are executed. You can assign labels to a self-hosted runner in addition to their default label of `self-hosted`. Then, you can refer to these labels in your YAML workflow, ensuring that the job is routed in a predictable way. {% data variables.product.prodname_dotcom %}-hosted runners have predefined labels assigned.

This example shows how a workflow can use labels to specify the required runner:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

A workflow will only run on a runner that has all the labels in the `runs-on` array. The job will preferentially go to an idle self-hosted runner with the specified labels. {% ifversion fpt or ghec %}If none are available and a {% data variables.product.prodname_dotcom %}-hosted runner with the specified labels exists, the job will go to a {% data variables.product.prodname_dotcom %}-hosted runner.{% endif %}

To learn more about self-hosted runner labels, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners).

{% ifversion fpt or ghec %}
To learn more about {% data variables.product.prodname_dotcom %}-hosted runner labels, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).
{% endif %}

### Reusing workflows

{% data reusables.actions.reusable-workflows %}

### Security hardening for workflows

{% data reusables.actions.about-security-hardening-for-worklows %}

### Using environments

You can configure environments with protection rules and secrets to control the execution of jobs in a workflow. Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the environment is sent to a runner. For more information, see [AUTOTITLE](/actions/deployment/targeting-different-environments/managing-environments-for-deployment).
