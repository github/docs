---
title: Core concepts for GitHub Actions
shortTitle: Core concepts
intro: 'Below is a list of common {% data variables.product.prodname_actions %} terms we use across our sites and {% data variables.product.prodname_actions %} documentation.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Действие

Individual tasks that you combine as steps to create a job. Actions are the smallest portable building block of a workflow. You can create your own actions, use actions shared from the {% data variables.product.prodname_dotcom %} community, and customize public actions. To use an action in a workflow, you must include it as a step.

### Artifact

Artifacts are the files created when you build and test your code. For example, artifacts might include binary or package files, test results, screenshots, or log files. Artifacts are associated with the workflow run where they were created and can be used by another job or deployed.

### Continuous integration (CI)

The software development practice of frequently committing small code changes to a shared repository. With {% data variables.product.prodname_actions %}, you can create custom CI workflows that automate building and testing your code. From your repository, you can view the status of your code changes and detailed logs for each action in your workflow. CI saves developers time by providing immediate feedback on code changes to detect and resolve bugs faster.

### Continuous deployment (CD)

Continuous deployment builds on continuous integration. When new code is committed and passes your CI tests, the code is automatically deployed to production. With {% data variables.product.prodname_actions %}, you can create custom CD workflows to automatically deploy your code to any cloud, self-hosted service, or platform from your repository. CD saves developers time by automating the deployment process and deploys tested, stable code changes more quickly to your customers.

### Событие

A specific activity that triggers a workflow run. For example, activity can originate from {% data variables.product.prodname_dotcom %} when someone pushes a commit to a repository or when an issue or pull request is created. You can also configure a workflow to run when an external event occurs using the repository dispatch webhook.

### {% data variables.product.prodname_dotcom %}-hosted runner
{% data variables.product.prodname_dotcom %} hosts Linux, Windows, and macOS runners. Jobs run in a fresh instance of a virtual machine that includes commonly-used, preinstalled software. {% data variables.product.prodname_dotcom %} performs all upgrades and maintenance of {% data variables.product.prodname_dotcom %}-hosted runners. You cannot customize the hardware configuration of {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### Job

A set of steps that execute on the same runner. You can define the dependency rules for how jobs run in a workflow file. Jobs can run at the same time in parallel or run sequentially depending on the status of a previous job. For example, a workflow can have two sequential jobs that build and test code, where the test job is dependent on the status of the build job. If the build job fails, the test job will not run. For {% data variables.product.prodname_dotcom %}-hosted runners, each job in a workflow runs in a fresh instance of a virtual environment.

### Runner

Any machine with the {% data variables.product.prodname_actions %} runner application installed. You can use a runner hosted by {% data variables.product.prodname_dotcom %} or host your own runner. A runner waits for available jobs. When a runner picks up a job, it runs the job's actions and reports the progress, logs, and final results back to {% data variables.product.prodname_dotcom %}. Runners run one job at a time. For more information, see "[{% data variables.product.prodname_dotcom %}-hosted runner](#github-hosted-runner)" and "[Self-hosted runner](#self-hosted-runner)."

{% note %}

**Note:** {% data reusables.github-actions.runner-app-open-source %}

{% endnote %}

### Self-hosted runner

A machine you manage and maintain with the self-hosted runner application installed. {% data reusables.github-actions.self-hosted-runner-description %} For more information, see "[Hosting your own runners](/github/automating-your-workflow-with-github-actions/hosting-your-own-runners)."

### Шаг

A step is an individual task that can run commands or actions. A job configures one or more steps. Each step in a job executes on the same runner, allowing the actions in that job to share information using the filesystem.

### Virtual environment

The virtual environment of a {% data variables.product.prodname_dotcom %}-hosted runner includes the virtual machine's hardware configuration, operating system, and installed software. For more information, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### Workflow

A configurable automated process that you can set up in your repository to build, test, package, release, or deploy any project on {% data variables.product.prodname_dotcom %}. Workflows are made up of one or more jobs and can be scheduled or activated by an event.

### Workflow file

The YAML file that defines your workflow configuration with at least one job. This file lives in the root of your {% data variables.product.prodname_dotcom %} repository in the `.github/workflows` directory.

### Workflow run

An instance of your workflow that runs when the pre-configured event occurs. You can see the jobs, actions, logs, and statuses for each workflow run.
