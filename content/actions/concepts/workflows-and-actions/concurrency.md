---
title: Concurrency
intro: 'Learn about running workflows and jobs simultaneously.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Workflows
---

By default, {% data variables.product.prodname_actions %} allows multiple jobs within the same workflow, multiple workflow runs within the same repository, and multiple workflow runs across a repository owner's account to run concurrently. This means that multiple instances of the same workflow or job can run at the same time, performing the same steps.

{% data variables.product.prodname_actions %} also allows you to disable concurrent execution. This can be useful for controlling your account’s or organization’s resources in situations where running multiple workflows or jobs at the same time could cause conflicts or consume more Actions minutes and storage than expected. For example, you might want to prevent multiple deployments from running at the same time, or cancel linters checking outdated commits.

To start controlling concurrency in your own workflows with the `concurrency` keyword, see [AUTOTITLE](/actions/how-tos/writing-workflows/choosing-when-your-workflow-runs/control-the-concurrency-of-workflows-and-jobs).
