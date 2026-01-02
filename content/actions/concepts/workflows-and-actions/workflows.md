---
title: Workflows
intro: 'Get a high-level overview of {% data variables.product.prodname_actions %} workflows, including triggers, syntax, and advanced features.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
redirect_from:
  - /articles/configuring-workflows
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
  - /actions/using-workflows/about-workflows
  - /actions/writing-workflows/about-workflows
  - /actions/concepts/use-cases/using-github-actions-for-project-management
  - /actions/concepts/workflows-and-actions/about-workflows
topics:
  - Workflows
layout: inline
---

## About workflows

{% data reusables.actions.about-workflows-long %}

## Workflow basics

A workflow must contain the following basic components:

1. One or more _events_ that will trigger the workflow.
1. One or more _jobs_, each of which will execute on a _runner_ machine and run a series of one or more _steps_.
1. Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.

For more information on these basic components, see [AUTOTITLE](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions).

![Diagram of an event triggering Runner 1 to run Job 1, which triggers Runner 2 to run Job 2. Each of the jobs is broken into multiple steps.](/assets/images/help/actions/overview-actions-simple.png)

## Workflow triggers

{% data reusables.actions.about-triggers %}

For more information, see [AUTOTITLE](/actions/using-workflows/triggering-a-workflow).

## Next steps

To build your first workflow, see [AUTOTITLE](/actions/tutorials/creating-an-example-workflow).
