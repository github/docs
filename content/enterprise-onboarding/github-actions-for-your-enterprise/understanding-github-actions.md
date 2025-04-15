---
title: Understanding GitHub Actions
shortTitle: Understand GitHub Actions
intro: 'Learn the basics of {% data variables.product.prodname_actions %}, including core concepts and essential terminology.'
versions:
  ghec: '*'
type: overview
topics:
  - Fundamentals
  - Actions
allowTitleToDifferFromFilename: true
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% data reusables.actions.about-actions %} You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

{% data variables.product.prodname_actions %} goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

{% data variables.product.prodname_dotcom %} provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.

For more information about introducing {% data variables.product.prodname_actions %} to your enterprise, see [AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise).

## The components of {% data variables.product.prodname_actions %}

You can configure a {% data variables.product.prodname_actions %} **workflow** to be triggered when an **event** occurs in your repository, such as a pull request being opened or an issue being created. Your workflow contains one or more **jobs** which can run in sequential order or in parallel. Each job will run inside its own virtual machine **runner**, or inside a container, and has one or more **steps** that either run a script that you define or run an **action**, which is a reusable extension that can simplify your workflow.

![Diagram of an event triggering Runner 1 to run Job 1, which triggers Runner 2 to run Job 2. Each of the jobs is broken into multiple steps.](/assets/images/help/actions/overview-actions-simple.png)

### Workflows

{% data reusables.actions.about-workflows-long %}

You can reference a workflow within another workflow. For more information, see [AUTOTITLE](/actions/using-workflows/reusing-workflows).

For more information, see [AUTOTITLE](/actions/using-workflows).

### Events

An **event** is a specific activity in a repository that triggers a **workflow** run. For example, an activity can originate from {% data variables.product.prodname_dotcom %} when someone creates a pull request, opens an issue, or pushes a commit to a repository. You can also trigger a workflow to run on a [schedule](/actions/using-workflows/events-that-trigger-workflows#schedule), by [posting to a REST API](/rest/repos/repos#create-a-repository-dispatch-event), or manually.

For a complete list of events that can be used to trigger workflows, see [Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows).

### Jobs

A **job** is a set of **steps** in a workflow that is executed on the same **runner**. Each step is either a shell script that will be executed, or an **action** that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another. For example, you can have a step that builds your application followed by a step that tests the application that was built.

You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel. When a job takes a dependency on another job, it waits for the dependent job to complete before running.

For example, you might configure multiple build jobs for different architectures without any job dependencies and a packaging job that depends on those builds. The build jobs run in parallel, and once they complete successfully, the packaging job runs.

For more information, see [AUTOTITLE](/actions/using-jobs).

### Actions

An **action** is a custom application for the {% data variables.product.prodname_actions %} platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your **workflow** files. An action can pull your Git repository from {% data variables.product.prodname_dotcom %}, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

You can write your own actions, or you can find actions to use in your workflows in the {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

For more information on actions, see [AUTOTITLE](/actions/creating-actions).

### Runners

A **runner** is a server that runs your workflows when they're triggered. Each runner can run a single **job** at a time.
{% data variables.product.company_short %} provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your **workflows**. Each workflow run executes in a fresh, newly-provisioned virtual machine.

{% data variables.product.prodname_dotcom %} also offers {% data variables.actions.hosted_runner %}s, which are available in larger configurations. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners).

If you need a different operating system or require a specific hardware configuration, you can host your own runners.

For more information about self-hosted runners, see [AUTOTITLE](/actions/hosting-your-own-runners).

## Next steps

Next, learn about planning a rollout of {% data variables.product.prodname_actions %} in your enterprise. See [AUTOTITLE](/enterprise-onboarding/github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise).
