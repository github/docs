---
title: Understanding GitHub Actions
shortTitle: Understanding GitHub Actions
intro: 'Learn the basics of {% data variables.product.prodname_actions %}, including core concepts and essential terminology.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% data reusables.actions.about-actions %}  You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

{% data variables.product.prodname_actions %} goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

{% data variables.product.prodname_dotcom %} provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.  

## The components of {% data variables.product.prodname_actions %}

You can configure a {% data variables.product.prodname_actions %} _workflow_ to be triggered when an _event_ occurs in your repository, such as a pull request being opened or an issue being created.  Your workflow contains one or more _jobs_ which can run in sequential order or in parallel.  Each job will run inside its own virtual machine _runner_, or inside a container, and has one or more _steps_ that either run a script that you define or run an _action_, which is a reusable extension that can simplify your workflow.

![Workflow overview](/assets/images/help/images/overview-actions-simple.png)

### Workflows

A workflow is a configurable automated process that will run one or more jobs.  Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

Your repository can have multiple workflows in a repository, each of which can perform a different set of steps.  For example, you can have one workflow to build and test pull requests, another workflow to deploy your application every time a release is created, and still another workflow that adds a label every time someone opens a new issue.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}You can reference a workflow within another workflow, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."{% endif %}

For more information about workflows, see "[Using workflows](/actions/using-workflows)."

### Events

An event is a specific activity in a repository that triggers a workflow run. For example, activity can originate from {% data variables.product.prodname_dotcom %} when someone creates a pull request, opens an issue, or pushes a commit to a repository.  You can also trigger a workflow run on a schedule, by [posting to a REST API](/rest/reference/repos#create-a-repository-dispatch-event), or manually.

For a complete list of events that can be used to trigger workflows, see [Events that trigger workflows](/actions/reference/events-that-trigger-workflows).

### Jobs

A job is a set of _steps_ in a workflow that execute on the same runner.  Each step is either a shell script that will be executed, or an _action_ that will be run.  Steps are executed in order and are dependent on each other.  Since each step is executed on the same runner, you can share data from one step to another.  For example, you can have a step that builds your application followed by a step that tests the application that was built.

You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other.  When a job takes a dependency on another job, it will wait for the dependent job to complete before it can run.  For example, you may have multiple build jobs for different architectures that have no dependencies, and a packaging job that is dependent on those jobs.  The build jobs will run in parallel, and when they have all completed successfully, the packaging job will run.

For more information about jobs, see "[Using jobs](/actions/using-jobs)."

### Actions

An _action_ is a custom application for the {% data variables.product.prodname_actions %} platform that performs a complex but frequently repeated task.  Use an action to help reduce the amount of repetitive code that you write in your workflow files.  An action can pull your git repository from {% data variables.product.prodname_dotcom %}, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

You can write your own actions, or you can find actions to use in your workflows in the {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

For more information, see "[Creating actions](/actions/creating-actions)."

### Runners

{% data reusables.actions.about-runners %} Each runner can run a single job at a time. {% ifversion ghes or ghae %} You must host your own runners for {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine. If you need a different operating system or require a specific hardware configuration, you can host your own runners.{% endif %} For more information{% ifversion fpt or ghec %} about self-hosted runners{% endif %}, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

## Create an example workflow

{% data variables.product.prodname_actions %} uses YAML syntax to define the workflow.  Each workflow is stored as a separate YAML file in your code repository, in a directory called `.github/workflows`.

You can create an example workflow in your repository that automatically triggers a series of commands whenever code is pushed. In this workflow, {% data variables.product.prodname_actions %} checks out the pushed code, installs the software dependencies, and runs `bats -v`.

1. In your repository, create the `.github/workflows/` directory to store your workflow files.
1. In the `.github/workflows/` directory, create a new file called `learn-github-actions.yml` and add the following code.
    ```yaml
    name: learn-github-actions
    on: [push]
    jobs:
      check-bats-version:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v2
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
    ```
1. Commit these changes and push them to your {% data variables.product.prodname_dotcom %} repository.

Your new {% data variables.product.prodname_actions %} workflow file is now installed in your repository and will run automatically each time someone pushes a change to the repository. For details about a job's execution history, see "[Viewing the workflow's activity](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)."

## Understanding the workflow file

To help you understand how YAML syntax is used to create a workflow file, this section explains each line of the introduction's example:

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Optional</em> - The name of the workflow as it will appear in the Actions tab of the {% data variables.product.prodname_dotcom %} repository.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Specifies the trigger for this workflow. This example uses the <code>push</code> event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request.  This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Groups together all the jobs that run in the <code>learn-github-actions</code> workflow.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Defines a job named <code>check-bats-version</code>. The child keys will define properties of the job.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configures the job to run on the latest version of an Ubuntu Linux runner. This means that the job will execute on a fresh virtual machine hosted by GitHub. For syntax examples using other runners, see <a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  Groups together all the steps that run in the <code>check-bats-version</code> job. Each item nested under this section is a separate action or shell script.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
The <code>uses</code> keyword specifies that this step will run <code>v2</code> of the <code>actions/checkout</code> action.  This is an action that checks out your repository onto the runner, allowing you to run scripts or other actions against your code (such as build and test tools). You should use the checkout action any time your workflow will run against the repository's code.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
  ```
</td>
<td>
  This step uses the <code>actions/setup-node@v2</code> action to install the specified version of the Node.js (this example uses v14). This puts both the <code>node</code> and <code>npm</code> commands in your <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  The <code>run</code> keyword tells the job to execute a command on the runner. In this case, you are using <code>npm</code> to install the <code>bats</code> software testing package.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  Finally, you'll run the <code>bats</code> command with a parameter that outputs the software version.
</td>
</tr>
</table>

### Visualizing the workflow file

In this diagram, you can see the workflow file you just created and how the {% data variables.product.prodname_actions %} components are organized in a hierarchy. Each step executes a single action or shell script. Steps 1 and 2 run actions, while steps 3 and 4 run shell scripts. To find more prebuilt actions for your workflows, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."

![Workflow overview](/assets/images/help/images/overview-actions-event.png)

## Viewing the workflow's activity

Once your workflow has started running, you can {% ifversion fpt or ghes > 3.0 or ghae or ghec %}see a visualization graph of the run's progress and {% endif %}view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click **Actions**.
    ![Navigate to repository](/assets/images/help/images/learn-github-actions-repository.png)
1. In the left sidebar, click the workflow you want to see.
    ![Screenshot of workflow results](/assets/images/help/images/learn-github-actions-workflow.png)
1. Under "Workflow runs", click the name of the run you want to see.
    ![Screenshot of workflow runs](/assets/images/help/images/learn-github-actions-run.png)
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. Under **Jobs** or in the visualization graph, click the job you want to see.
   ![Select job](/assets/images/help/images/overview-actions-result-navigate.png)
{% endif %}
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. View the results of each step.
    ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result-updated-2.png)
{% elsif ghes %}
1. Click on the job name to see the results of each step.
    ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. Click on the job name to see the results of each step.
    ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result.png)
{% endif %}

## Next steps

To continue learning about {% data variables.product.prodname_actions %}, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."

{% ifversion fpt or ghec or ghes %}

To understand how billing works for {% data variables.product.prodname_actions %}, see "[About billing for {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".

{% endif %}

## Contacting support

{% data reusables.github-actions.contacting-support %}

## Further reading

{% ifversion ghec or ghes or ghae %}
- "[About {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)"{% endif %}