---
title: Understanding GitHub Actions
shortTitle: Understand GitHub Actions
intro: 'Learn the basics of {% data variables.product.prodname_actions %}, including core concepts and essential terminology.'
miniTocMaxHeadingLevel: 3
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

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.

{% elsif ghes or ghae %}

You must host your own Linux, Windows, or macOS virtual machines to run workflows for {% data variables.location.product_location %}. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

For more information about introducing {% data variables.product.prodname_actions %} to your enterprise, see "[Introducing {% data variables.product.prodname_actions %} to your enterprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)."

{% endif %}

## The components of {% data variables.product.prodname_actions %}

You can configure a {% data variables.product.prodname_actions %} _workflow_ to be triggered when an _event_ occurs in your repository, such as a pull request being opened or an issue being created.  Your workflow contains one or more _jobs_ which can run in sequential order or in parallel.  Each job will run inside its own virtual machine _runner_, or inside a container, and has one or more _steps_ that either run a script that you define or run an _action_, which is a reusable extension that can simplify your workflow.

![Workflow overview](/assets/images/help/images/overview-actions-simple.png)

### Workflows

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}You can reference a workflow within another workflow, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."{% endif %}

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

{% data reusables.actions.about-runners %} Each runner can run a single job at a time. {% ifversion ghes or ghae %} You must host your own runners for {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine. {% ifversion actions-hosted-runners %} {% data variables.product.prodname_dotcom %} also offers {% data variables.actions.hosted_runner %}s, which are available in larger configurations. For more information, see "[Using {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners)." {% endif %}If you need a different operating system or require a specific hardware configuration, you can host your own runners.{% endif %} For more information{% ifversion fpt or ghec %} about self-hosted runners{% endif %}, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

{% data reusables.actions.workflow-basic-example-and-explanation %}

## Next steps

{% data reusables.actions.onboarding-next-steps %}

## Contacting support

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## Further reading

- "[About {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)"
{% endif %}
