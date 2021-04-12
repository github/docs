---
title: Quickstart for GitHub Actions
intro: 'Add a {% data variables.product.prodname_actions %} workflow to an existing repository in 5 minutes or less.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'quick_start'
topics:
  - 'Fundamentals'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introduction

You only need an existing {% data variables.product.prodname_dotcom %} repository to create and run a {% data variables.product.prodname_actions %} workflow. In this guide, you'll add a workflow that lints multiple coding languages using the [{% data variables.product.prodname_dotcom %} Super-Linter action](https://github.com/github/super-linter). The workflow uses Super-Linter to validate your source code every time a new commit is pushed to your repository.

### Creating your first workflow

1. From your repository on {% data variables.product.prodname_dotcom %}, create a new file in the `.github/workflows` directory named `superlinter.yml`. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
2. Copy the following YAML contents into the `superlinter.yml` file. **Note:** If your default branch is not `main`, update the value of `DEFAULT_BRANCH` to match your repository's default branch name.
    {% raw %}
    ```yaml{:copy}
    name: Super-Linter

    # Run this workflow every time a new commit pushed to your repository
    on: push

    jobs:
      # Set the job key. The key is displayed as the job name
      # when a job name is not provided
      super-lint:
        # Name the Job
        name: Lint code base
        # Set the type of machine to run on
        runs-on: ubuntu-latest

        steps:
          # Checks out a copy of your repository on the ubuntu-latest machine
          - name: Checkout code
            uses: actions/checkout@v2

          # Runs the Super-Linter action
          - name: Run Super-Linter
            uses: github/super-linter@v3
            env:
              DEFAULT_BRANCH: main
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```
    {% endraw %}
3. To run your workflow, scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**. ![Commit workflow file](/assets/images/commit-workflow-file.png)

Committing the workflow file in your repository triggers the `push` event and runs your workflow.

### Viewing your workflow results

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
1. Under **Jobs** or in the visualization graph, click the **Lint code base** job. ![Lint code base job](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% else %}
1. In the left sidebar, click the **Lint code base** job. ![Lint code base job](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% endif %}
{% data reusables.repositories.view-failed-job-results-superlinter %}

### More workflow templates

{% data reusables.actions.workflow-template-overview %}

### 다음 단계

The super-linter workflow you just added runs each time code is pushed to your repository to help you spot errors and inconsistencies in your code. But this is only the beginning of what you can do with {% data variables.product.prodname_actions %}. Your repository can contain multiple workflows that trigger different jobs based on different events. {% data variables.product.prodname_actions %} can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial
- "[Guides](/actions/guides)" for specific uses cases and examples
- [github/super-linter](https://github.com/github/super-linter) for more details about configuring the Super-Linter action

<div id="quickstart-treatment" hidden>

### Introduction

Printing "Hello, World!" is a great way to explore the basic set up and syntax of a new programming language. In this guide, you'll use GitHub Actions to print "Hello, World!" within your {% data variables.product.prodname_dotcom %} repository's workflow logs. All you need to get started is a {% data variables.product.prodname_dotcom %} repository where you feel comfortable creating and running a sample {% data variables.product.prodname_actions %} workflow. Feel free to create a new repository for this Quickstart to test this and future {% data variables.product.prodname_actions %} workflows.

### Creating your first workflow

1. From your repository on {% data variables.product.prodname_dotcom %}, create a new file in the `.github/workflows` directory named `hello-world.yml`. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
2. Copy the following YAML contents into the `hello-world.yml` file.
    {% raw %}
    ```yaml{:copy}
    name: Say hello!

    # GitHub Actions Workflows are automatically triggered by GitHub events
    on:
      # For this workflow, we're using the workflow_dispatch event which is triggered when the user clicks Run workflow in the GitHub Actions UI
      workflow_dispatch:
        # The workflow_dispatch event accepts optional inputs so you can customize the behavior of the workflow
        inputs:
          name:
            description: 'Person to greet'
            required: true
            default: 'World'
    # When the event is triggered, GitHub Actions will run the jobs indicated
    jobs:
      say_hello:
        # Uses a ubuntu-latest runner to complete the requested steps
        runs-on: ubuntu-latest
        steps:
        - run: |
            echo "Hello ${{ github.event.inputs.name }}!"
    ```
    {% endraw %}
3. Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**.
    ![Commit workflow file](/assets/images/help/repository/commit-hello-world-file.png)
4. Once the pull request has been merged, you'll be ready to move on to "Trigger your workflow".

### Trigger your workflow

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to run.
   ![Select say hello job](/assets/images/help/repository/say-hello-job.png)
1. On the right, click the **Run workflow** drop-down and click **Run workflow**. Optionally, you can enter a custom message into the "Person to greet" input before running the workflow.
   ![Trigger the manual workflow](/assets/images/help/repository/manual-workflow-trigger.png)
1. The workflow run will appear at the top of the list of "Say hello!" workflow runs. Click "Say hello!" to see the result of the workflow run.
   ![Workflow run result listing](/assets/images/help/repository/workflow-run-listing.png)
1. In the left sidebar, click the "say_hello" job.
   ![Workflow job listing](/assets/images/help/repository/workflow-job-listing.png)
1. In the workflow logs, expand the 'Run echo "Hello World!"' section.
   ![Workflow detail](/assets/images/help/repository/workflow-log-listing.png)

### More workflow templates

{% data reusables.actions.workflow-template-overview %}

### Next steps

The hello-world workflow you just added is a minimal example of a manually triggered workflow. This is only the beginning of what you can do with {% data variables.product.prodname_actions %}. Your repository can contain multiple workflows that trigger different jobs based on different events. {% data variables.product.prodname_actions %} can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial
- "[Guides](/actions/guides)" for specific uses cases and examples

</div>
