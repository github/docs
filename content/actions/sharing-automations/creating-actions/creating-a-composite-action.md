---
title: Creating a composite action
shortTitle: Create a composite action
intro: 'In this guide, you''ll learn how to build a composite action.'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
  - /actions/creating-actions/creating-a-composite-action
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
topics:
  - Action development
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

In this guide, you'll learn about the basic components needed to create and use a packaged composite action. To focus this guide on the components needed to package the action, the functionality of the action's code is minimal. The action prints "Hello World" and then "Goodbye",  or if you provide a custom name, it prints "Hello [who-to-greet]" and then "Goodbye". The action also maps a random number to the `random-number` output variable, and runs a script named `goodbye.sh`.

Once you complete this project, you should understand how to build your own composite action and test it in a workflow.

{% data reusables.actions.context-injection-warning %}

### Composite actions and reusable workflows

Composite actions allow you to collect a series of workflow job steps into a single action which you can then run as a single job step in multiple workflows. Reusable workflows provide another way of avoiding duplication, by allowing you to run a complete workflow from within other workflows. For more information, see "[AUTOTITLE](/actions/using-workflows/avoiding-duplication)."

## Prerequisites

Before you begin, you'll create a repository on {% data variables.location.product_location %}.

1. Create a new public repository on {% data variables.location.product_location %}. You can choose any repository name, or use the following `hello-world-composite-action` example. You can add these files after your project has been pushed to {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."

1. Clone your repository to your computer. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)."

1. From your terminal, change directories into your new repository.

   ```shell copy
   cd hello-world-composite-action
   ```

1. In the `hello-world-composite-action` repository, create a new file called `goodbye.sh` with example code:

   ```shell copy
   echo "echo Goodbye" > goodbye.sh
   ```

1. From your terminal, make `goodbye.sh` executable.
   {% linux %}

   {% data reusables.actions.composite-actions-executable-linux-mac %}

   {% endlinux %}
   {% mac %}

   {% data reusables.actions.composite-actions-executable-linux-mac %}

   {% endmac %}
   {% windows %}

   ```shell copy
   git add --chmod=+x -- goodbye.sh
   ```

   {% endwindows %}

1. From your terminal, check in your `goodbye.sh` file.

   {% linux %}

   {% data reusables.actions.composite-actions-commit-file-linux-mac %}

   {% endlinux %}
   {% mac %}

   {% data reusables.actions.composite-actions-commit-file-linux-mac %}
   {% endmac %}
   {% windows %}

   ```shell copy
   git commit -m "Add goodbye script"
   git push
   ```

   {% endwindows %}

## Creating an action metadata file

1. In the `hello-world-composite-action` repository, create a new file called `action.yml` and add the following example code. For more information about this syntax, see "[AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

    ```yaml copy
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number:
        description: "Random number"
        value: {% raw %}${{ steps.random-number-generator.outputs.random-number }}{% endraw %}
    runs:
      using: "composite"
      steps:
        - name: Set Greeting
          run: echo "Hello $INPUT_WHO_TO_GREET."
          shell: bash
          env:
            INPUT_WHO_TO_GREET: {% raw %}${{ inputs.who-to-greet }}{% endraw %}

        - name: Random Number Generator
          id: random-number-generator
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
          shell: bash

        - name: Set GitHub Path
          run: echo "$GITHUB_ACTION_PATH" >> $GITHUB_PATH
          shell: bash
          env:
            GITHUB_ACTION_PATH: {% raw %}${{ github.action_path }}{% endraw %}

        - name: Run goodbye.sh
          run: goodbye.sh
          shell: bash

    ```

    This file defines the `who-to-greet` input, maps the random generated number to the `random-number` output variable, adds the action's path to the runner system path (to locate the `goodbye.sh` script during execution), and runs the `goodbye.sh` script.

    For more information about managing outputs, see "[AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

    For more information about how to use `github.action_path`, see "[AUTOTITLE](/actions/learn-github-actions/contexts#github-context)".

1. From your terminal, check in your `action.yml` file.

   ```shell copy
   git add action.yml
   git commit -m "Add action"
   git push
   ```

1. From your terminal, add a tag. This example uses a tag called `v1`. For more information, see "[AUTOTITLE](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)."

   ```shell copy
   git tag -a -m "Description of this release" v1
   git push --follow-tags
   ```

## Testing out your action in a workflow

The following workflow code uses the completed hello world action that you made in "[AUTOTITLE](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)".

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, replacing `OWNER` and `TAG` with the repository owner and the tag you created, respectively. You can also replace the `who-to-greet` input with your name.

```yaml copy
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: OWNER/hello-world-composite-action@TAG
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number "$RANDOM_NUMBER"
        shell: bash
        env:
          RANDOM_NUMBER: {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
```

From your repository, click the **Actions** tab, and select the latest workflow run. The output should include: "Hello Mona the Octocat", the result of the "Goodbye" script, and a random number.

## Example composite actions on {% data variables.product.prodname_dotcom_the_website %}

You can find many examples of composite actions on {% data variables.product.prodname_dotcom_the_website %}.

* [microsoft/action-python](https://github.com/microsoft/action-python)
* [microsoft/gpt-review](https://github.com/microsoft/gpt-review)
* [tailscale/github-action](https://github.com/tailscale/github-action)
