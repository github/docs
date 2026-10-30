---
title: Getting pull requests ready to merge with {% data variables.copilot.agent_merge %}
shortTitle: Watch and fix pull requests
allowTitleToDifferFromFilename: true
intro: Let {% data variables.product.prodname_copilot_short %} watch your pull requests, and fix failed workflows and merge conflicts, while you focus on other work.
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
redirect_from:
  - /copilot/how-tos/copilot-on-github/use-copilot-agents/get-pull-requests-ready-to-merge
---

## About {% data variables.copilot.agent_merge %}

{% data variables.copilot.agent_merge %} is part of {% data variables.copilot.copilot_in_the_cloud_short %}. It watches a pull request for blockers you choose and starts work automatically when it finds one. You can allow {% data variables.product.prodname_copilot_short %} to fix failed {% data variables.product.prodname_actions %} workflows, resolve merge conflicts, or both.

{% data variables.copilot.agent_merge %} helps get a pull request ready to merge and keep it there. It does not replace your review of the changes or the repository's merge requirements.

## Prerequisites and limitations

To use {% data variables.copilot.agent_merge %}, you must have access to {% data variables.copilot.copilot_in_the_cloud_short %} through a paid {% data variables.product.prodname_copilot_short %} plan. If your organization or enterprise provides your {% data variables.product.prodname_copilot_short %} access, its policies must allow you to use {% data variables.copilot.copilot_in_the_cloud_short %}.

The repository's **Enable automations** {% data variables.product.prodname_copilot_short %} policy must also be enabled.

{% data variables.copilot.agent_merge %} does not support stacked pull requests or pull requests opened from a fork.

## Enabling {% data variables.copilot.agent_merge %} for a pull request

1. On {% data variables.product.github %}, open the pull request you want {% data variables.product.prodname_copilot_short %} to watch.
1. In the merge box of the pull request, click **Watch and fix**.
1. Choose the actions you want {% data variables.product.prodname_copilot_short %} to perform:

   * **Fix failed Actions workflows**: Allow {% data variables.product.prodname_copilot_short %} to investigate and fix failing {% data variables.product.prodname_actions %} workflows.
   * **Resolve merge conflicts**: Allow {% data variables.product.prodname_copilot_short %} to resolve conflicts between the pull request's branch and its base branch.

When one of the blockers you selected appears, {% data variables.product.prodname_copilot_short %} starts working in a cloud development environment to fix it.

## Following {% data variables.copilot.agent_merge %}'s work

As {% data variables.product.prodname_copilot_short %} watches your pull request, you'll see updates in the {% data variables.copilot.agent_merge %} section of the merge box.

When {% data variables.product.prodname_copilot_short %} starts work, an update appears as a pull request timeline event. The update explains why it started, such as a failed workflow or a merge conflict.

Review the changes {% data variables.product.prodname_copilot_short %} makes and check the workflow results before merging. {% data variables.copilot.agent_merge %} does not remove the need for human review.

## Enabling {% data variables.copilot.agent_merge %} automatically

You can enable {% data variables.copilot.agent_merge %} by default for pull requests you create.

{% data reusables.user-settings.access_settings %}
1. In the sidebar, under **{% data variables.product.prodname_copilot_short %}**, click **Cloud**.
1. Select **Enable {% data variables.copilot.agent_merge %} automatically for pull requests I create**.
1. Use the **Fix failed Actions workflows** and **Resolve merge conflicts** switches to choose which actions {% data variables.product.prodname_copilot_short %} can perform when {% data variables.copilot.agent_merge %} is automatically enabled for your pull requests. You can enable either action or both.

## Disabling {% data variables.copilot.agent_merge %} for a pull request

You can disable {% data variables.copilot.agent_merge %} for a pull request if you enabled it or if you have write access to the repository.

1. On {% data variables.product.github %}, open the pull request.
1. In the merge box at the bottom of the pull request, click **Unassign {% data variables.product.prodname_copilot_short %}**.

## Using {% data variables.copilot.agent_merge %} with auto-merge

{% data variables.copilot.agent_merge %} fixes blockers, while auto-merge merges a pull request after all required reviews and status checks pass. Enabling {% data variables.copilot.agent_merge %} does not enable auto-merge.

You can combine the two to let {% data variables.product.prodname_copilot_short %} get the pull request ready and keep it ready, while {% data variables.product.github %} merges it as soon as all requirements are met. For setup guidance, see [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/automatically-merging-a-pull-request).

## Customizing {% data variables.copilot.agent_merge %}'s environment

Although {% data variables.copilot.agent_merge %} is part of {% data variables.copilot.copilot_in_the_cloud_short %}, its fixes run in an {% data variables.product.prodname_actions %}-based development environment, not a cloud sandbox. It uses the same repository customizations as other {% data variables.product.prodname_copilot_short %} tasks that run on {% data variables.product.prodname_actions %}, including:

* Setup steps in `.github/workflows/copilot-setup-steps.yml`. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).
* Repository custom instructions. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
* Repository agent skills. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).

## Usage and billing

The {% data variables.product.prodname_ai_credits_short %} used by {% data variables.copilot.agent_merge %} are charged to the user who enables it for the pull request, not necessarily the pull request's author. For more information about usage and allowances, see [AUTOTITLE](/copilot/concepts/billing-and-usage).
