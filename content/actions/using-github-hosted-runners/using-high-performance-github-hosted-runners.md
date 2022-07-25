---
title: Using high performance GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} offers more powerful hosted virtual machines to run your demanding workflows.'
miniTocMaxHeadingLevel: 3
versions:
  feature: 'actions-high-performance-runners'
shortTitle: Using high performance runners
---

## Overview of high performance {% data variables.product.prodname_dotcom %}-hosted runners

In addition to the general purpose {% data variables.product.prodname_dotcom %}-hosted runners, {% data variables.product.prodname_dotcom %} also offers a range of powerful runners with more RAM and CPU.

These powerful runners are ephemeral virtual machines hosted by {% data variables.product.prodname_dotcom %}, and have the runner application and other tools preinstalled on Ubuntu Linux or Windows. Each virtual machine is only used for one job, and is automatically shut down and wiped after the job has completed.

High performance {% data variables.product.prodname_dotcom %}-hosted runners are managed at the organization level, where they are arranged into groups of identical hardware configurations. Once you've created a group, you can then add a high performance {% data variables.product.prodname_dotcom %}-hosted runner to the group and update your workflows to target the group. You can then decide which repositories are permitted to send jobs to the group for processing. For more information about groups, see "[Managing access to GitHub-hosted runners using groups](/actions/using-github-hosted-runners/managing-access-to-github-hosted-runners-using-groups)."

The more powerful {% data variables.product.prodname_dotcom %}-hosted runners are billed differently to the general purpose runners. For more information, see "[Managing billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)".

## Prerequisites

- Create a runner group. Runner groups are used to collect sets of identically-configured virtual machines. You can then decide which organizations or repositories are permitted to run jobs access to those sets of machines. 
Each {% data variables.product.prodname_dotcom %}-hosted runner must be added to an existing group, so you will first need to create a runner group before proceeding. You can create a group by following the steps in "[Managing access to GitHub-hosted runners using groups](/actions/using-github-hosted-runners/managing-access-to-github-hosted-runners-using-groups)."

## Adding a new {% data variables.product.prodname_dotcom %}-hosted runner



## Running jobs on your runner

## Managing access to your runners





