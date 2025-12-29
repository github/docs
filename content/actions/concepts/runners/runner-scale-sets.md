---
title: Runner scale sets
intro: 'Learn about what a runner scale set is and how they can interact with the {% data variables.product.prodname_actions_runner_controller %}.'
layout: inline
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Actions Runner Controller
redirect_from:
  - /actions/concepts/runners/about-runner-scale-sets
---

## About runner scale sets

A runner scale set is a group of homogeneous runners that can be assigned jobs from {% data variables.product.prodname_actions %}. The number of active runners owned by a runner scale set can be controlled by auto-scaling runner solutions such as {% data variables.product.prodname_actions_runner_controller %} (ARC).

You can use runner groups to manage runner scale sets. Similar to self-hosted runners, you can add runner scale sets to existing runner groups. However, runner scale sets can belong to only one runner group at a time and can only have one label assigned to them.

To assign jobs to a runner scale set, you must configure your workflow to reference the runner scale set’s name. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/using-actions-runner-controller-runners-in-a-workflow).

## Legal notice

{% data reusables.actions.actions-runner-controller-legal-notice %}

## Next steps

* For more information about the {% data variables.product.prodname_actions_runner_controller %} as a concept, see [AUTOTITLE](/actions/concepts/runners/about-actions-runner-controller).
* To learn about runner groups, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups).
