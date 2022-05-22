---
title: Configuring a workflow
intro: You can create custom workflows to automate your project's software development life cycle processes.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-github-action/
  - /articles/creating-a-workflow-with-github-actions/
  - /articles/configuring-a-workflow
  - /github/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /actions/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /actions/creating-workflows/workflow-configuration-options
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

People with write or admin permissions to a repository can create, edit, or view workflows.

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About workflows

Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any project on {% data variables.product.prodname_dotcom %}. With workflows you can automate your software development life cycle with a wide range of tools and services. For more information, see "[About {% data variables.product.prodname_actions %}](/articles/about-github-actions)."

You can create more than one workflow in a repository. You must store workflows in the `.github/workflows` directory in the root of your repository.

Workflows must have at least one job, and jobs contain a set of steps that perform individual tasks. Steps can run commands or use an action. You can create your own actions or use actions shared by the {% data variables.product.prodname_dotcom %} community and customize them as needed.

You can configure a workflow to start when a {% data variables.product.prodname_dotcom %} event occurs, on a schedule, or from an external event.

You need to configure workflows using YAML syntax, and save them as workflow files in your repository. Once you've successfully created a YAML workflow file and triggered the workflow, you will see the build logs, tests results, artifacts, and statuses for each step of your workflow. For more information, see "[Managing a workflow run](/articles/managing-a-workflow-run)."

 ![Annotated workflow run image](/assets/images/help/repository/annotated-workflow.png)

You can also receive notifications for workflow status updates. For more information about notification options, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)."

Usage limits apply to individual workflows. For more information, see "[Usage limits for workflows](/articles/workflow-syntax-for-github-actions#usage-limits)."

### Creating a workflow file

At a high level, these are the steps to add a workflow file. You can find specific configuration examples in the sections that follow.

1. At the root of your repository, create a directory named `.github/workflows` to store your workflow files.

1. In `.github/workflows`, add a `.yml` or `.yaml` file for your workflow. For example, `.github/workflows/continuous-integration-workflow.yml`.

1. Use the "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)" reference documentation to choose events to trigger an action, add actions, and customize your workflow.

1. Commit your changes in the workflow file to the branch where you want your workflow to run.

#### Workflow file example

{% raw %}
```yaml
name: Greet Everyone
# This workflow is triggered on pushes to the repository.
on: [push]

jobs:
  build:
    # Job name is Greeting
    name: Greeting
    # This job runs on Linux
    runs-on: ubuntu-latest
    steps:
      # This step uses GitHub's hello-world-javascript-action: https://github.com/actions/hello-world-javascript-action
      - name: Hello world
        uses: actions/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
        id: hello
      # This step prints an output (time) from the previous step's action.
      - name: Echo the greeting's time
        run: echo 'The time was ${{ steps.hello.outputs.time }}.'
```
{% endraw %}

{% data reusables.github-actions.invalid-workflow-files %}

### Triggering a workflow with events

You can configure a workflow to start once:
- An event on {% data variables.product.prodname_dotcom %} occurs, such as when someone pushes a commit to a repository or when an issue or pull request is created.
- A scheduled event begins.
- An external event occurs.

To trigger a workflow after an event happens on {% data variables.product.prodname_dotcom %}, add `on:` and an event value after the workflow name. For example, this workflow is triggered when changes are pushed to any branch in the repository.

```yaml
name: descriptive-workflow-name
on: push
```

To schedule a workflow, you can use the POSIX cron syntax in your workflow file. The shortest interval you can run scheduled workflows is once every 5 minutes. For example, this workflow is triggered every hour.

```yaml
on:
  schedule:
    - cron: '0 * * * *'
```

#### Manually running a workflow

To manually run a workflow, you must first configure your workflow to use the `workflow_dispatch` event. You can configure custom-defined input properties, default input values, and required inputs directly in your workflow. When the workflow runs, you can access the input values in the `github.event.inputs` context. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows/#workflow_dispatch)" and "[Context and expression syntax for {% data variables.product.prodname_dotcom %} Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

This example defines the `name` and `home` inputs and prints them using the `github.event.inputs.name` and `github.event.inputs.home` contexts. If a `name` isn't provided, the default value 'Mona the Octocat' is printed.

{% raw %}
```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo "Hello ${{ github.event.inputs.name }}!"
        echo "- in ${{ github.event.inputs.home }}!"
```
{% endraw %}

You can trigger the `workflow_dispatch` event from the Actions tab on {% data variables.product.prodname_dotcom %} or using the REST API. For more information about using the REST API, see the "[Create a workflow dispatch event](/rest/reference/actions/#create-a-workflow-dispatch-event)." When using the REST API, you configure the `inputs` and `ref` as request body parameters. If the inputs are omitted, the default values defined in the workflow file are used.

To trigger the `workflow_dispatch` event on {% data variables.product.prodname_dotcom %}, your workflow must be in the default branch. Follow these steps to manually trigger a workflow run.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to run. ![actions select workflow](/assets/images/actions-select-workflow.png)
1. Above the list of workflow runs, select **Run workflow**. ![actions workflow dispatch](/assets/images/actions-workflow-dispatch.png)
1. Select the branch where the workflow will run and type the input parameters used by the workflow. Click **Run workflow**. ![actions manually run workflow](/assets/images/actions-manually-run-workflow.png)

#### Triggering workflows from external events

To trigger a workflow after an external event occurs, you can invoke a `repository_dispatch` webhook event by calling the "Create a repository dispatch event" REST API endpoint. For more information, see "[Create a repository dispatch event](/v3/repos/#create-a-repository-dispatch-event)."

For more information and examples, see "[Events that trigger workflows](/articles/events-that-trigger-workflows#webhook-events)."

### Filtering for specific branches, tags, and paths

You can set up your workflow to run only on certain branches.

For example, this workflow runs when a push that includes files in the `test` directory is made on the `master` branch, or pushes to the `v1` tag.

```yaml
on:
  push:
    branches:
      - master
    tags:
      - v1
    # file paths to consider in the event. Optional; defaults to all.
    paths:
      - 'test/*'
```

For more information about branch, tag, and path filter syntax, see "[`on.<push|pull_request>.<branches|tags>`](/articles/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)" and "[`on.<push|pull_request>.paths`](/articles/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

### Choosing a runner

You can run workflows on {% data variables.product.prodname_dotcom %}-hosted runners or self-hosted runners. Jobs can run directly on the machine or in a Docker container.

You can specify the runner for each job in a workflow using `runs-on`. For more information about `runs-on`, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idruns-on)."

{% data reusables.actions.enterprise-github-hosted-runners %}

#### Using a {% data variables.product.prodname_dotcom %}-hosted runner

You can select from different types and versions of virtual host machines, including Linux, Windows, and macOS. Each job in a workflow executes in a fresh instance of the virtual environment, and steps within a job can share information using the filesystem. For more information, see "[Virtual environments for {% data variables.product.prodname_actions %}-hosted runners](/articles/virtual-environments-for-github-actions)."

For example, you can use  `ubuntu-latest` to specify the latest version of an Ubuntu {% data variables.product.prodname_dotcom %}-hosted runner.

```yaml
runs-on: ubuntu-latest
```

#### Using a self-hosted runner

You can use labels to route jobs to specific types of self-hosted runners. All self-hosted runners get the `self-hosted` label and each self-hosted runner has labels for its operating system and system architecture. For more information, see "[Using self-hosted runners in a workflow](/actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

For example, if you added a self-hosted runner with a Linux operating system and ARM32 architecture, you can select that runner using the `self-hosted`, `linux`, and `ARM32` labels.

```yaml
runs-on: [self-hosted, linux, ARM32]
```

### Configuring a build matrix

To test across multiple operating systems, platforms, and language versions at the same time, you can configure a build matrix.

A build matrix allows you to test your code with different software and operating system configurations. For example, a workflow can run a job for more than one supported version of a language, operating system, or tool. For each configuration, a copy of the job runs and reports a status.

You can specify a build matrix in your workflow file with an array that lists the configuration options under `strategy:`. For example, this build matrix will run a job with different versions of Node.js and Ubuntu, a Linux operating system.

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-16.04, ubuntu-18.04]
    node: [6, 8, 10]
```
{% endraw %}

For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)."

### Using the checkout action

There are several standard actions you can use in your workflow. The checkout action is a standard action that you must include in your workflow before other actions when:
- Your workflow requires a copy of your repository's code, such as when you're building and testing your repository or using continuous integration.
- There's at least one action in your workflow that is defined in the same repository. For more information, see "[Referencing actions in your workflow](#referencing-actions-in-your-workflow)."

To use the standard checkout action without further specifications, include this step:
```yaml
- uses: actions/checkout@v2
```
Using `v2` in this example ensures you're using a stable version of the checkout action. For more information, see [the checkout action](https://github.com/actions/checkout).

### Choosing the type of actions for your workflow

There are different types of actions you can use in your workflow to suit your project's needs:
- Docker container actions
- JavaScript actions
- Composite run steps actions

For more information, see "[About actions](/articles/about-actions#types-of-actions)."

When choosing the type of actions to use in your workflow, we recommend exploring existing actions in public repositories or on Docker hub and potentially customizing these actions for your project.

You can browse and use actions built by {% data variables.product.prodname_dotcom %} in the [github.com/actions](https://github.com/actions) organization. To visit Docker Hub, see "[Docker Hub](https://www.docker.com/products/docker-hub)" on the Docker site.

### Referencing actions in your workflow

To reference actions in your workflow file with the correct syntax, you must consider where the action is defined.

Workflows can use actions defined in:
- A public repository
- The same repository where your workflow file references the actions
- A published Docker container image on Docker Hub

To use an action defined in a private repository, both the workflow file and the action must be in the same repository. Your workflow cannot use actions defined in other private repositories, even if the other private repository is in the same organization.

To keep your workflow stable even when updates are made to an action, you can reference the version of the action you're using by specifying a Git ref or Docker tag number in your workflow file. For examples, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)."

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.dependabot.version-updates-for-actions %}
{% endif %}

For more detailed configuration options, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

#### Referencing an action from a public repository

If an action is defined in a public repository, you must reference the action using the syntax `{owner}/{repo}@{ref}` or `{owner}/{repo}/{path}@{ref}`.

```yaml
jobs:
  my_first_job:
    name: My Job Name
      steps:
        - uses: actions/setup-node@v1
          with:
            node-version: 10.x
```

To see a complete workflow example, see the [setup node](https://github.com/actions/setup-node) template repository.

#### Referencing an action in the same repository where a workflow file uses the action

If an action is defined in the same repository where your workflow file uses the action, you can reference the action with either the ‌`{owner}/{repo}@{ref}` or `./path/to/dir` syntax in your workflow file.

Example repository file structure:

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Example workflow file:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: actions/checkout@v2
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

#### Referencing a container on Docker Hub

If an action is defined in a published Docker container image on Docker Hub, you must reference the action with the `docker://{image}:{tag}` syntax in your workflow file. To protect your code and data, we strongly recommend you verify the integrity of the Docker container image from Docker Hub before using it in your workflow.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

For some examples of Docker actions, see the [Docker-image.yml workflow](https://github.com/actions/starter-workflows/blob/master/ci/docker-image.yml) and "[Creating a Docker container action](/articles/creating-a-docker-container-action)."

For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)."

### Adding a workflow status badge to your repository

{% data reusables.repositories.actions-workflow-status-badge-into %}

If your workflow uses the `name` keyword, you must reference the workflow by name. If the name of your workflow contains white space, you'll need to replace the space with the URL encoded string `%20`. For more information about the `name` keyword, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)."

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

Alternatively, if your workflow doesn't have a `name`, you must reference the workflow file using the file path relative to the repository's root directory.

{% note %}

**Note:** Referencing the workflow file using the file path does not work if the workflow has a `name`.

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_FILE_PATH>/badge.svg
```

#### Example using a workflow name

This Markdown example adds a status badge for a workflow with the name "Greet Everyone." The `OWNER` of the repository is the `actions` organization and the `REPOSITORY` name is `hello-world`.

```
![example workflow name](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

#### Example using a workflow file path

This Markdown example adds a status badge for a workflow with the file path `.github/workflows/main.yml`. The `OWNER` of the repository is the `actions` organization and the `REPOSITORY` name is `hello-world`.

```
![example workflow file path](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

#### Example using the `branch` parameter

This Markdown example adds a status badge for a branch with the name `feature-1`.

```
![example branch parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

#### Example using the `event` parameter

This Markdown example adds a badge that displays the status of workflow runs triggered by the `pull_request` event.

```
![example event parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```

{% if currentVersion == "free-pro-team@latest" %}
### Дополнительная литература

- "[Managing billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
