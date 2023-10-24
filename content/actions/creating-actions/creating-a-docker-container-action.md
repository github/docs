---
title: Creating a Docker container action
shortTitle: Create a Docker container action
intro: 'This guide shows you the minimal steps required to build a Docker container action. '
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

In this guide, you'll learn about the basic components needed to create and use a packaged Docker container action. To focus this guide on the components needed to package the action, the functionality of the action's code is minimal. The action prints "Hello World" in the logs or "Hello [who-to-greet]" if you provide a custom name.

Once you complete this project, you should understand how to build your own Docker container action and test it in a workflow.

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## Prerequisites

- You must create a repository on {% data variables.location.product_location %} and clone it to your workstation. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)" and "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)."
- If your repository uses {% data variables.large_files.product_name_short %}, you must include the objects in archives of your repository. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."
- You may find it helpful to have a basic understanding of {% data variables.product.prodname_actions %}, environment variables and the Docker container filesystem. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables)" and "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)."

## Creating a Dockerfile

In your new `hello-world-docker-action` directory, create a new `Dockerfile` file. Make sure that your filename is capitalized correctly (use a capital `D` but not a capital `f`) if you're having issues. For more information, see "[AUTOTITLE](/actions/creating-actions/dockerfile-support-for-github-actions)."

**Dockerfile**

```dockerfile copy
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## Creating an action metadata file

Create a new `action.yml` file in the `hello-world-docker-action` directory you created above. For more information, see "[AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions)."

{% raw %}
**action.yml**

```yaml copy
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

This metadata defines one `who-to-greet`  input and one `time` output parameter. To pass inputs to the Docker container, you should declare the input using `inputs` and pass the input in the `args` keyword. Everything you include in `args` is passed to the container, but for better discoverability for users of your action, we recommended using inputs.

{% data variables.product.prodname_dotcom %} will build an image from your `Dockerfile`, and run commands in a new container using this image.

## Writing the action code

You can choose any base Docker image and, therefore, any language for your action. The following shell script example uses the `who-to-greet` input variable to print "Hello [who-to-greet]" in the log file.

Next, the script gets the current time and sets it as an output variable that actions running later in a job can use. In order for {% data variables.product.prodname_dotcom %} to recognize output variables, you must {% ifversion actions-save-state-set-output-envs %}write them to the `$GITHUB_OUTPUT` environment file: `echo "<output name>=<value>" >> $GITHUB_OUTPUT`{% else %}use a workflow command in a specific syntax: `echo "::set-output name=<output name>::<value>"`{% endif %}. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)."

1. Create a new `entrypoint.sh` file in the `hello-world-docker-action` directory.

1. Add the following code to your `entrypoint.sh` file.

   **entrypoint.sh**

   ```shell copy
   #!/bin/sh -l

   echo "Hello $1"
   time=$(date)
   {%- ifversion actions-save-state-set-output-envs %}
   echo "time=$time" >> $GITHUB_OUTPUT
   {%- else %}
   echo "::set-output name=time::$time"
   {%- endif %}

   ```

   If `entrypoint.sh` executes without any errors, the action's status is set to `success`. You can also explicitly set exit codes in your action's code to provide an action's status. For more information, see "[AUTOTITLE](/actions/creating-actions/setting-exit-codes-for-actions)."

1. Make your `entrypoint.sh` file executable. Git provides a way to explicitly change the permission mode of a file so that it doesn’t get reset every time there is a clone/fork.

   ```shell copy
   git add entrypoint.sh
   git update-index --chmod=+x entrypoint.sh
   ```

1. Optionally, to check the permission mode of the file in the git index, run the following command.

   ```shell copy
   git ls-files --stage entrypoint.sh
   ```

   An output like `100755 e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 0       entrypoint.sh` means the file has the executable permission. In this example, `755` denotes the executable permission.

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

```markdown copy
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@{% ifversion actions-save-state-set-output-envs %}v2{% else %}v1{% endif %}
with:
  who-to-greet: 'Mona the Octocat'
```

## Commit, tag, and push your action to {% data variables.product.product_name %}

From your terminal, commit your `action.yml`, `entrypoint.sh`, `Dockerfile`, and `README.md` files.

It's best practice to also add a version tag for releases of your action. For more information on versioning your action, see "[AUTOTITLE](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)."

```shell copy
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## Testing out your action in a workflow

Now you're ready to test your action out in a workflow.

{% ifversion private-actions %}- When an action is in a private repository, you can control who can access it. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."{% else %}- When an action is in a private repository, the action can only be used in workflows in the same repository.{% endif %}
{% ifversion ghes or ghec or ghae %}{% ifversion internal-actions %}- When an action is in an internal repository, you can control who can access it. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."{% else %}- When an action is in an internal repository, the action can only be used in workflows in the same repository.{% endif %}{% endif %}
- Public actions can be used by workflows in any repository.

{% data reusables.actions.enterprise-marketplace-actions %}

### Example using a public action

The following workflow code uses the completed _hello world_ action in the public [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action) repository. Copy the following workflow example code into a `.github/workflows/main.yml` file, but replace the `actions/hello-world-docker-action` with your repository and action name. You can also replace the `who-to-greet` input with your name. {% ifversion fpt or ghec %}Public actions can be used even if they're not published to {% data variables.product.prodname_marketplace %}. For more information, see "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)." {% endif %}

**.github/workflows/main.yml**

```yaml copy
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action@{% ifversion actions-save-state-set-output-envs %}v2{% else %}v1{% endif %}
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

### Example using a private action

Copy the following example workflow code into a `.github/workflows/main.yml` file in your action's repository. You can also replace the `who-to-greet` input with your name. {% ifversion fpt or ghec %}This private action can't be published to {% data variables.product.prodname_marketplace %}, and can only be used in this repository.{% endif %}

**.github/workflows/main.yml**

```yaml copy
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

{% data reusables.actions.test-private-action-example %}

## Accessing files created by a container action

When a container action runs, it will automatically map the default working directory (`GITHUB_WORKSPACE`) on the runner with the `/github/workspace` directory on the container. Any files added to this directory on the container will be available to any subsequent steps in the same job. For example, if you have a container action that builds your project, and you would like to upload the build output as an artifact, you can use the following steps.

**workflow.yml**

```yaml copy
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      # Output build artifacts to /github/workspace on the container.
      - name: Containerized Build
        uses: ./.github/actions/my-container-action

      - name: Upload Build Artifacts
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: workspace_artifacts
          path: {% raw %}${{ github.workspace }}{% endraw %}
```

For more information about uploading build output as an artifact, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

## Example Docker container actions on {% data variables.product.prodname_dotcom_the_website %}

You can find many examples of Docker container actions on {% data variables.product.prodname_dotcom_the_website %}.

- [github/issue-metrics](https://github.com/github/issue-metrics)
- [microsoft/infersharpaction](https://github.com/microsoft/infersharpaction)
- [microsoft/ps-docs](https://github.com/microsoft/ps-docs)
