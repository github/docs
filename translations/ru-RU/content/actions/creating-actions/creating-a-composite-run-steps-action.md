---
title: Creating a composite run steps action
intro: 'In this guide, you''ll learn how to build a composite run steps action.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Action development
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introduction

In this guide, you'll learn about the basic components needed to create and use a packaged composite run steps action. To focus this guide on the components needed to package the action, the functionality of the action's code is minimal. The action prints "Hello World" and then "Goodbye",  or if you provide a custom name, it prints "Hello [who-to-greet]" and then "Goodbye". The action also maps a random number to the `random-number` output variable, and runs a script named `goodbye.sh`.

Once you complete this project, you should understand how to build your own composite run steps action and test it in a workflow.

### Требования

Before you begin, you'll create a {% data variables.product.product_name %} repository.

1. Create a new public repository on {% data variables.product.product_location %}. You can choose any repository name, or use the following `hello-world-composite-run-steps-action` example. You can add these files after your project has been pushed to {% data variables.product.product_name %}. For more information, see "[Create a new repository](/articles/creating-a-new-repository)."

1. Clone your repository to your computer. For more information, see "[Cloning a repository](/articles/cloning-a-repository)."

1. From your terminal, change directories into your new repository.

  ```shell
  cd hello-world-composite-run-steps-action
  ```

2. In the `hello-world-composite-run-steps-action` repository, create a new file called `goodbye.sh`, and add the following example code:

  ```bash
  echo "Goodbye"
  ```

3. From your terminal, make `goodbye.sh` executable.

  ```shell
  chmod +x goodbye.sh
  ```

1. From your terminal, check in your `goodbye.sh` file.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

### Creating an action metadata file

1. In the `hello-world-composite-run-steps-action` repository, create a new file called `action.yml` and add the following example code. For more information about this syntax, see "[`runs` for a composite run steps](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-run-steps-actions)".

    {% raw %}
    **action.yml**
    ```yaml
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
        value: ${{ steps.random-number-generator.outputs.random-id }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator
          run: echo "::set-output name=random-id::$(echo $RANDOM)"
          shell: bash
        - run: ${{ github.action_path }}/goodbye.sh
          shell: bash
    ```
    {% endraw %}
  This file defines the `who-to-greet` input, maps the random generated number to the `random-number` output variable, and runs the `goodbye.sh` script. It also tells the runner how to execute the composite run steps action.

  For more information about managing outputs, see "[`outputs` for a composite run steps](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-run-steps-actions)".

  For more information about how to use `github.action_path`, see "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. From your terminal, check in your `action.yml` file.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. From your terminal, add a tag. This example uses a tag called `v1`. For more information, see "[About actions](/actions/creating-actions/about-actions#using-release-management-for-actions)."

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

### Testing out your action in a workflow

The following workflow code uses the completed hello world action that you made in "[Creating an action metadata file](/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)".

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, but replace `actions/hello-world-composite-run-steps-action@v1` with the repository and tag you created. You can also replace the `who-to-greet` input with your name.

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: actions/checkout@v2
      - id: foo
        uses: actions/hello-world-composite-run-steps-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number ${{ steps.foo.outputs.random-number }}
        shell: bash
```
{% endraw %}

From your repository, click the **Actions** tab, and select the latest workflow run. The output should include: "Hello Mona the Octocat", the result of the "Goodbye" script, and a random number.
