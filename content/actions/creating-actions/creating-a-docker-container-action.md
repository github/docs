---
title: Creating a Docker container action
intro: 'This guide shows you the minimal steps required to build a Docker container action. '
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
type: tutorial
topics:
  - Action development
  - Docker
shortTitle: Docker container action
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introduction

In this guide, you'll learn about the basic components needed to create and use a packaged Docker container action. To focus this guide on the components needed to package the action, the functionality of the action's code is minimal. The action prints "Hello World" in the logs or "Hello [who-to-greet]" if you provide a custom name.

Once you complete this project, you should understand how to build your own Docker container action and test it in a workflow.

{% data reusables.github-actions.self-hosted-runner-reqs-docker %}

{% data reusables.github-actions.context-injection-warning %}

## Prerequisites

You may find it helpful to have a basic understanding of {% data variables.product.prodname_actions %} environment variables and the Docker container filesystem:

- "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"
{% ifversion ghae %}
- "[Docker container filesystem](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)."
{% else %} 
- "[Virtual environments for {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners#docker-container-filesystem)"
{% endif %}

Before you begin, you'll need to create a {% data variables.product.prodname_dotcom %} repository.

1. Create a new repository on {% data variables.product.product_location %}. You can choose any repository name or use "hello-world-docker-action" like this example. For more information, see "[Create a new repository](/articles/creating-a-new-repository)."

1. Clone your repository to your computer. For more information, see "[Cloning a repository](/articles/cloning-a-repository)."

1. From your terminal, change directories into your new repository.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Creating a Dockerfile

In your new `hello-world-docker-action` directory, create a new `Dockerfile` file. For more information, see "[Dockerfile support for {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions)."

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## Creating an action metadata file

Create a new `action.yml` file in the `hello-world-docker-action` directory you created above. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)."

{% raw %}
**action.yml**
```yaml{:copy}
# action.yml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

This metadata defines one `who-to-greet`  input and one `time` output parameter. To pass inputs to the Docker container, you must declare the input using `inputs` and pass the input in the `args` keyword.

{% data variables.product.prodname_dotcom %} will build an image from your `Dockerfile`, and run commands in a new container using this image.

## Writing the action code

You can choose any base Docker image and, therefore, any language for your action. The following shell script example uses the `who-to-greet` input variable to print "Hello [who-to-greet]" in the log file.

Next, the script gets the current time and sets it as an output variable that actions running later in a job can use. In order for {% data variables.product.prodname_dotcom %} to recognize output variables, you must use a workflow command in a specific syntax: `echo "::set-output name=<output name>::<value>"`. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)."

1. Create a new `entrypoint.sh` file in the `hello-world-docker-action` directory.

1. Add the following code to your `entrypoint.sh` file.

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  If `entrypoint.sh` executes without any errors, the action's status is set to `success`. You can also explicitly set exit codes in your action's code to provide an action's status. For more information, see "[Setting exit codes for actions](/actions/creating-actions/setting-exit-codes-for-actions)."

1. Make your `entrypoint.sh` file executable by running the following command on your system.

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

## Creating a README

To let people know how to use your action, you can create a README file. A README is most helpful when you plan to share your action publicly, but is also a great way to remind you or your team how to use the action.

In your `hello-world-docker-action` directory, create a `README.md` file that specifies the following information:

- A detailed description of what the action does.
- Required input and output arguments.
- Optional input and output arguments.
- Secrets the action uses.
- Environment variables the action uses.
- An example of how to use your action in a workflow.

**README.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

## Commit, tag, and push your action to {% data variables.product.product_name %}

From your terminal, commit your `action.yml`, `entrypoint.sh`, `Dockerfile`, and `README.md` files.

It's best practice to also add a version tag for releases of your action. For more information on versioning your action, see "[About actions](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)."

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## Testing out your action in a workflow

Now you're ready to test your action out in a workflow. When an action is in a private repository, the action can only be used in workflows in the same repository. Public actions can be used by workflows in any repository.

{% data reusables.actions.enterprise-marketplace-actions %}

### Example using a public action

The following workflow code uses the completed _hello world_ action in the public [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action) repository. Copy the following workflow example code into a `.github/workflows/main.yml` file, but replace the `actions/hello-world-docker-action` with your repository and action name. You can also replace the `who-to-greet` input with your name. {% ifversion fpt %}Public actions can be used even if they're not published to {% data variables.product.prodname_marketplace %}. For more information, see "[Publishing an action](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)." {% endif %}

{% raw %}
**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

### Example using a private action

Copy the following example workflow code into a `.github/workflows/main.yml` file in your action's repository. You can also replace the `who-to-greet` input with your name. {% ifversion fpt %}This private action can't be published to {% data variables.product.prodname_marketplace %}, and can only be used in this repository.{% endif %}

{% raw %}
**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: actions/checkout@v2
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

From your repository, click the **Actions** tab, and select the latest workflow run. {% ifversion fpt or ghes > 3.0 or ghae %}Under **Jobs** or in the visualization graph, click **A job to say hello**. {% endif %}You should see "Hello Mona the Octocat" or the name you used for the `who-to-greet` input and the timestamp printed in the log.

{% ifversion fpt or ghes > 3.0 or ghae %}
![A screenshot of using your action in a workflow](/assets/images/help/repository/docker-action-workflow-run-updated.png)
{% else %}
![A screenshot of using your action in a workflow](/assets/images/help/repository/docker-action-workflow-run.png)
{% endif %}
