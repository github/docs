---
title: Managing complex workflows
shortTitle: Managing complex workflows
intro: 'This guide shows you how to use the advanced features of {% data variables.product.prodname_actions %}, with secret management, dependent jobs, caching, build matrices,{% ifversion fpt or ghes > 3.0 or ghae %} environments,{% endif %} and labels.'
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Overview

This article describes some of the advanced features of {% data variables.product.prodname_actions %} that help you work create more complex workflows.

## Storing secrets

If your workflows use sensitive data, such as passwords or certificates, you can save these in {% data variables.product.prodname_dotcom %} as _secrets_ and then use them in your workflows as environment variables. This means that you will be able to create and share workflows without having to embed sensitive values directly in the YAML workflow.

This example action demonstrates how to reference an existing secret as an environment variable, and send it as a parameter to an example command.

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

For more information, see "[Creating and storing encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."

## Creating dependent jobs

By default, the jobs in your workflow all run in parallel at the same time. So if you have a job that must only run after another job has completed, you can use the `needs` keyword to create this dependency. If one of the jobs fails, all dependent jobs are skipped; however, if you need the jobs to continue, you can define this using the [`if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) conditional statement.

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

For more information, see [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds).

## Using a build matrix

You can use a build matrix if you want your workflow to run tests across multiple combinations of operating systems, platforms, and languages. The build matrix is created using the `strategy` keyword, which receives the build options as an array. For example, this build matrix will run the job multiple times, using different versions of Node.js:

{% raw %}
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [6, 8, 10]
    steps:
      - uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node }}
```
{% endraw %}

For more information, see [`jobs.<job_id>.strategy.matrix`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

{% ifversion fpt %}
## Caching dependencies

{% data variables.product.prodname_dotcom %}-hosted runners are started as fresh environments for each job, so if your jobs regularly reuse dependencies, you can consider caching these files to help improve performance. Once the cache is created, it is available to all workflows in the same repository.

This example demonstrates how to cache the ` ~/.npm` directory:

{% raw %}
```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
```
{% endraw %}

For more information, see "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>."
{% endif %}

## Using databases and service containers

If your job requires a database or cache service, you can use the [`services`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idservices) keyword to create an ephemeral container to host the service; the resulting container is then available to all steps in that job and is removed when the job has completed. This example demonstrates how a job can use `services` to create a `postgres` container, and then use `node` to connect to the service.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

For more information, see "[Using databases and service containers](/actions/configuring-and-managing-workflows/using-databases-and-service-containers)."

## Using labels to route workflows

This feature helps you assign jobs to a specific hosted runner. If you want to be sure that a particular type of runner will process your job, you can use labels to control where jobs are executed. You can assign labels to a self-hosted runner in addition to their default label of `self-hosted`. Then, you can refer to these labels in your YAML workflow, ensuring that the job is routed in a predictable way.{% ifversion not ghae %} {% data variables.product.prodname_dotcom %}-hosted runners have predefined labels assigned.{% endif %}

{% ifversion ghae %}
This example shows how a workflow can use labels to specify the required runner:

```yaml
jobs:
  example-job:
    runs-on: [AE-runner-for-CI]
```

For more information, see ["Using labels with {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-labels-with-ae-hosted-runners)."
{% else %}
This example shows how a workflow can use labels to specify the required runner:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

A workflow will only run on a runner that has all the labels in the `runs-on` array. The job will preferentially go to an idle self-hosted runner with the specified labels. If none are available and a {% data variables.product.prodname_dotcom %}-hosted runner with the specified labels exists, the job will go to a {% data variables.product.prodname_dotcom %}-hosted runner.

To learn more about self-hosted runner labels, see ["Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)."
To learn more about {% data variables.product.prodname_dotcom %}-hosted runner labels, see ["Supported runners and hardware resources"](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).
{% endif %}

{% ifversion fpt or ghes > 3.0 %}
## Using environments

You can configure environments with protection rules and secrets. Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the environment is sent to a runner. For more information, see "[Environments](/actions/reference/environments)."
{% endif %}

## Using a workflow template

{% data reusables.actions.workflow-template-overview %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If your repository already has existing workflows: In the upper-left corner, click **New workflow**.
  ![Create a new workflow](/assets/images/help/repository/actions-new-workflow.png)
1. Under the name of the template you'd like to use, click **Set up this workflow**.
  ![Set up this workflow](/assets/images/help/settings/actions-create-starter-workflow.png)

## Next steps

To continue learning about {% data variables.product.prodname_actions %}, see "[Sharing workflows with your organization](/actions/learn-github-actions/sharing-workflows-with-your-organization)."
