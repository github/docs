---
title: Core concepts for GitHub Actions
shortTitle: Core concepts
intro: 'Below is a list of common {{ site.data.variables.product.prodname_actions }} terms we use across our sites and {{ site.data.variables.product.prodname_actions }} documentation.'
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Действие

Individual tasks that you combine as steps to create a job. Actions are the smallest portable building block of a workflow. You can create your own actions, use actions shared from the {{ site.data.variables.product.prodname_dotcom }} community, and customize public actions. To use an action in a workflow, you must include it as a step.

### Artifact

Artifacts are the files created when you build and test your code. For example, artifacts might include binary or package files, test results, screenshots, or log files. Artifacts are associated with the workflow run where they were created and can be used by another job or deployed.

### Continuous integration (CI)

The software development practice of frequently committing small code changes to a shared repository. With {{ site.data.variables.product.prodname_actions }}, you can create custom CI workflows that automate building and testing your code. From your repository, you can view the status of your code changes and detailed logs for each action in your workflow. CI saves developers time by providing immediate feedback on code changes to detect and resolve bugs faster.

### Continuous deployment (CD)

Continuous deployment builds on continuous integration. When new code is committed and passes your CI tests, the code is automatically deployed to production. With {{ site.data.variables.product.prodname_actions }}, you can create custom CD workflows to automatically deploy your code to any cloud, self-hosted service, or platform from your repository. CD saves developers time by automating the deployment process and deploys tested, stable code changes more quickly to your customers.

### Событие

A specific activity that triggers a workflow run. For example, activity can originate from {{ site.data.variables.product.prodname_dotcom }} when someone pushes a commit to a repository or when an issue or pull request is created. You can also configure a workflow to run when an external event occurs using the repository dispatch webhook.

### {{ site.data.variables.product.prodname_dotcom }}-hosted runner
{{ site.data.variables.product.prodname_dotcom }} hosts Linux, Windows, and macOS runners. Jobs run in a fresh instance of a virtual machine that includes commonly-used, preinstalled software. {{ site.data.variables.product.prodname_dotcom }} performs all upgrades and maintenance of {{ site.data.variables.product.prodname_dotcom }}-hosted runners. You cannot customize the hardware configuration of {{ site.data.variables.product.prodname_dotcom }}-hosted runners. For more information, see "[Virtual environments for {{ site.data.variables.product.prodname_dotcom }}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### Job

A set of steps that execute on the same runner. You can define the dependency rules for how jobs run in a workflow file. Jobs can run at the same time in parallel or run sequentially depending on the status of a previous job. For example, a workflow can have two sequential jobs that build and test code, where the test job is dependent on the status of the build job. If the build job fails, the test job will not run. For {{ site.data.variables.product.prodname_dotcom }}-hosted runners, each job in a workflow runs in a fresh instance of a virtual environment.

### Runner

Any machine with the {{ site.data.variables.product.prodname_actions }} runner application installed. You can use a runner hosted by {{ site.data.variables.product.prodname_dotcom }} or host your own runner. A runner waits for available jobs. When a runner picks up a job, it runs the job's actions and reports the progress, logs, and final results back to {{ site.data.variables.product.prodname_dotcom }}. Runners run one job at a time. For more information, see "[{{ site.data.variables.product.prodname_dotcom }}-hosted runner](#github-hosted-runner)" and "[Self-hosted runner](#self-hosted-runner)."

{% note %}

**Note:** {{ site.data.reusables.github-actions.runner-app-open-source }}

{% endnote %}

### Self-hosted runner

A machine you manage and maintain with the self-hosted runner application installed. {{ site.data.reusables.github-actions.self-hosted-runner-description }} For more information, see "[Hosting your own runners](/github/automating-your-workflow-with-github-actions/hosting-your-own-runners)."

### Шаг

A step is an individual task that can run commands or actions. A job configures one or more steps. Each step in a job executes on the same runner, allowing the actions in that job to share information using the filesystem.

### Virtual environment

The virtual environment of a {{ site.data.variables.product.prodname_dotcom }}-hosted runner includes the virtual machine's hardware configuration, operating system, and installed software. For more information, see "[Virtual environments for {{ site.data.variables.product.prodname_dotcom }}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### Workflow

A configurable automated process that you can set up in your repository to build, test, package, release, or deploy any project on {{ site.data.variables.product.prodname_dotcom }}. Workflows are made up of one or more jobs and can be scheduled or activated by an event.

### Workflow file

The YAML file that defines your workflow configuration with at least one job. This file lives in the root of your {{ site.data.variables.product.prodname_dotcom }} repository in the `.github/workflows` directory.

### Workflow run

An instance of your workflow that runs when the pre-configured event occurs. You can see the jobs, actions, logs, and statuses for each workflow run.
