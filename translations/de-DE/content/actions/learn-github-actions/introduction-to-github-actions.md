---
title: Introduction to GitHub Actions
shortTitle: Introduction to GitHub Actions
intro: 'Learn about the core concepts and various components of {% data variables.product.prodname_actions %}, and see an example that shows you how to add automation to your repository.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Übersicht

{% data variables.product.prodname_actions %} help you automate tasks within your software development life cycle. {% data variables.product.prodname_actions %} are event-driven, meaning that you can run a series of commands after a specified event has occurred. For example, every time someone creates a pull request for a repository, you can automatically run a command that executes a software testing script.

This diagram demonstrates how you can use {% data variables.product.prodname_actions %} to automatically run your software testing scripts. An event automatically triggers the _workflow_, which contains a _job_. The job then uses _steps_ to control the order in which _actions_ are run. These actions are the commands that automate your software testing.

![Workflow overview](/assets/images/help/images/overview-actions-simple.png)

### The components of {% data variables.product.prodname_actions %}

Below is a list of the multiple {% data variables.product.prodname_actions %} components that work together to run jobs. You can see how these components interact with each other.

![Component and service overview](/assets/images/help/images/overview-actions-design.png)

#### Workflows

The workflow is an automated procedure that you add to your repository. Workflows are made up of one or more jobs and can be scheduled or triggered by an event. The workflow can be used to build, test, package, release, or deploy a project on {% data variables.product.prodname_dotcom %}.

#### Ereignisse

An event is a specific activity that triggers a workflow. Die Aktivität kann beispielsweise von {% data variables.product.prodname_dotcom %} stammen, wenn ein Commit an Repository gepusht oder wenn ein Issue oder ein Pull Request erstellt wird. You can also use the [repository dispatch webhook](/rest/reference/repos#create-a-repository-dispatch-event) to trigger a workflow when an external event occurs. For a complete list of events that can be used to trigger workflows, see [Events that trigger workflows](/actions/reference/events-that-trigger-workflows).

#### Jobs

A job is a set of steps that execute on the same runner. By default, a workflow with multiple jobs will run those jobs in parallel. You can also configure a workflow to run jobs sequentially. Ein Workflow kann beispielsweise zwei sequentielle Aufträge umfassen, in denen der Code erstellt und getestet wird, wobei der Testauftrag vom Status des Build-Auftrags abhängig ist. Wenn der Build-Auftrag fehlschlägt, wird der Testauftrag nicht ausgeführt.

#### Steps

A step is an individual task that can run commands in a job. A step can be either an _action_ or a shell command. Each step in a job executes on the same runner, allowing the actions in that job to share data with each other.

#### Actions

_Actions_ are standalone commands that are combined into _steps_ to create a _job_. Aktionen sind der kleinste portable Baustein eines Workflows. You can create your own actions, or use actions created by the {% data variables.product.prodname_dotcom %} community. Soll eine Aktion in einem Workflow verwendet werden, müssen Sie sie als Schritt einfügen.

#### Runners

{% if currentVersion == "github-ae@latest" %}A runner is a server that has the [{% data variables.product.prodname_actions %} runner application](https://github.com/actions/runner) installed. For {% data variables.product.prodname_ghe_managed %}, you can use the security hardened {% data variables.actions.hosted_runner %}s which are bundled with your instance in the cloud. A runner listens for available jobs, runs one job at a time, and reports the progress, logs, and results back to {% data variables.product.prodname_dotcom %}. {% data variables.actions.hosted_runner %}s run each workflow job in a fresh virtual environment. For more information, see "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."
{% else %}
A runner is a server that has the [{% data variables.product.prodname_actions %} runner application](https://github.com/actions/runner) installed. You can use a runner hosted by
{% data variables.product.prodname_dotcom %}, or you can host your own. A runner listens for available jobs, runs one job at a time, and reports the progress, logs, and results back to {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_dotcom %}-hosted runners are based on Ubuntu Linux, Microsoft Windows, and macOS, and each job in a workflow runs in a fresh virtual environment.  For information on {% data variables.product.prodname_dotcom %}-hosted runners, see "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)." If you need a different operating system or require a specific hardware configuration, you can host your own runners. For information on self-hosted runners, see "[Hosting your own runners](/actions/hosting-your-own-runners)."
{% endif %}

### Create an example workflow

{% data variables.product.prodname_actions %} uses YAML syntax to define the events, jobs, and steps. These YAML files are stored in your code repository, in a directory called `.github/workflows`.

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
          - uses: actions/setup-node@v1
          - run: npm install -g bats
          - run: bats -v
    ```
1. Commit these changes and push them to your {% data variables.product.prodname_dotcom %} repository.

Your new {% data variables.product.prodname_actions %} workflow file is now installed in your repository and will run automatically each time someone pushes a change to the repository. For details about a job's execution history, see "[Viewing the workflow's activity](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)."

### Understanding the workflow file

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
  Specify the event that automatically triggers the workflow file. This example uses the <code>push</code> event, so that the jobs run every time someone pushes a change to the repository. You can set up the workflow to only run on certain branches, paths, or tags. For syntax examples including or excluding branches, paths, or tags, see <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Groups together all the jobs that run in the <code>learn-github-actions</code> workflow file.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
  Defines the name of the <code>check-bats-version</code> job stored within the <code>jobs</code> section.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configures the job to run on an Ubuntu Linux runner. This means that the job will execute on a fresh virtual machine hosted by GitHub. For syntax examples using other runners, see <a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  Groups together all the steps that run in the <code>check-bats-version</code> job. Each item nested under this section is a separate action or shell command.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
  The <code>uses</code> keyword tells the job to retrieve <code>v2</code> of the community action named <code>actions/checkout@v2</code>. This is an action that checks out your repository and downloads it to the runner, allowing you to run actions against your code (such as testing tools). You must use the checkout action any time your workflow will run against the repository's code or you are using an action defined in the repository.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v1
  ```
</td>
<td>
  This action installs the <code>node</code> software package on the runner, giving you access to the <code>npm</code> command.
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

#### Visualizing the workflow file

In this diagram, you can see the workflow file you just created and how the {% data variables.product.prodname_actions %} components are organized in a hierarchy. Each step executes a single action or shell command. Steps 1 and 2 use prebuilt community actions. Steps 3 and 4 run shell commands directly on the runner. To find more prebuilt actions for your workflows, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."

![Workflow overview](/assets/images/help/images/overview-actions-event.png)


### Viewing the job's activity

Once your job has started running, you can {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}see a visualization graph of the run's progress and {% endif %}view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Klicke unter Deinem Repository-Namen auf **Actions** (Aktionen). ![Navigate to repository](/assets/images/help/images/learn-github-actions-repository.png)
1. In the left sidebar, click the workflow you want to see. ![Screenshot of workflow results](/assets/images/help/images/learn-github-actions-workflow.png)
1. Under "Workflow runs", click the name of the run you want to see. ![Screenshot of workflow runs](/assets/images/help/images/learn-github-actions-run.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
1. Under **Jobs** or in the visualization graph, click the job you want to see. ![Select job](/assets/images/help/images/overview-actions-result-navigate.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
1. View the results of each step. ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result-updated-2.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
1. Click on the job name to see the results of each step. ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. Click on the job name to see the results of each step. ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result.png)
{% endif %}

### Nächste Schritte:

To continue learning about {% data variables.product.prodname_actions %}, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."

### Support kontaktieren

{% data reusables.github-actions.contacting-support %}
