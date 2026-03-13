---
title: Troubleshooting GitHub Copilot coding agent
shortTitle: Troubleshoot coding agent
intro: 'Learn how to resolve problems that may occur when you assign tasks to {% data variables.product.prodname_copilot_short %}.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/troubleshooting-copilot-coding-agent
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/troubleshooting-copilot-coding-agent
  - /early-access/copilot/coding-agent/troubleshooting-copilot-coding-agent
  - /copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/troubleshooting-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/troubleshoot-coding-agent
  - /copilot/how-tos/agents/coding-agent/troubleshoot-coding-agent
contentType: how-tos
category: 
  - Troubleshooting Copilot
---

## {% data variables.product.prodname_copilot_short %} is not available in the "Assignees" list on my issue

You can only assign issues to {% data variables.product.prodname_copilot_short %} if you have access to {% data variables.product.prodname_copilot_short %} through either the **{% data variables.copilot.copilot_pro %}** plan, **{% data variables.copilot.copilot_pro_plus %}** plan, the **{% data variables.copilot.copilot_for_business %}**  plan, or the **{% data variables.copilot.copilot_enterprise %}** plan.

If you do not already have a subscription for one of these plans, click this button for more information:<br>
<a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

If you _do_ have {% data variables.copilot.copilot_pro %}, {% data variables.copilot.copilot_pro_plus %}, {% data variables.copilot.copilot_for_business %}, or {% data variables.copilot.copilot_enterprise %}, check that {% data variables.copilot.copilot_coding_agent %} {% ifversion ghec %}is enabled and{% endif %} has not been manually disabled for the repository:

{% ifversion ghec %}

* If you are on the {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise_short %} plan, your ability to use {% data variables.copilot.copilot_coding_agent %} is controlled by your enterprise and/or organization administrator. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/adding-copilot-coding-agent-to-enterprise).

{% endif %}

* For organization-owned repositories, the availability of {% data variables.copilot.copilot_coding_agent %} in the repository is managed by the organization and/or enterprise administrators. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

* For personal repositories, the availability of {% data variables.copilot.copilot_coding_agent %} in the repository is configured in your account settings. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-copilot-coding-agent).

> [!NOTE]
> You can check whether {% data variables.copilot.copilot_coding_agent %} has been enabled for you in the features page of your {% data variables.product.prodname_copilot_short %} settings: [github.com/settings/copilot/features](https://github.com/settings/copilot/features).

## I have an {% data variables.product.prodname_emu %} account and {% data variables.product.prodname_copilot_short %} won't work in my personal repository

{% data reusables.copilot.coding-agent-emu-limitation %}

If you have an {% data variables.enterprise.prodname_managed_user %} and try to assign {% data variables.product.prodname_copilot_short %} to an issue in a personal repository, you may see an error message reporting that {% data variables.product.prodname_actions %} are not available for your repository.

To use {% data variables.copilot.copilot_coding_agent %}, you'll need to work with repositories owned by your organization instead of personal repositories.

## {% data variables.product.prodname_copilot_short %} can't create a pull request from {% data variables.copilot.copilot_chat_short %}

If you asked {% data variables.product.prodname_copilot_short %} to create a pull request and it responds that it cannot directly create a pull request, check that {% data variables.copilot.copilot_coding_agent %} is available.

> [!IMPORTANT]
> {% data reusables.copilot.coding-agent.use-chat-participant-in-vsc %}

## I assigned an issue to {% data variables.product.prodname_copilot_short %}, but nothing is happening

Wait a while, then refresh the page. You should see {% data variables.product.prodname_copilot_short %} leave an 👀 reaction on the issue. Shortly after this, {% data variables.product.prodname_copilot_short %} will open a draft pull request linked to the issue, which will be shown in the issue timeline.

## {% data variables.product.prodname_copilot_short %} has opened a pull request, but nothing is happening

If there is a "{% data variables.product.prodname_copilot_short %} started work" event in the pull request timeline, click **View session** to see the session logs. These will stream live, and you will be able to see what {% data variables.product.prodname_copilot_short %} is doing.

## {% data variables.product.prodname_copilot_short %} won't respond to my pull request comments

{% data reusables.copilot.coding-agent.write-access-required %}

If you do have write access, and you mention `@copilot` on a pull request that is assigned to {% data variables.product.prodname_copilot_short %}, the comment is passed to {% data variables.copilot.copilot_coding_agent %}. An eyes emoji (👀) is added to your comment to indicate that {% data variables.copilot.copilot_coding_agent %} has seen your comment. Shortly after, a "{% data variables.product.prodname_copilot_short %} started work" event is added to the pull request timeline.

If this doesn't happen, {% data variables.product.prodname_copilot_short %} may have been unassigned from the pull request, or you may not have write access. Note that {% data variables.product.prodname_copilot_short %} only responds to mentions in open pull requests. Once a pull request is merged or closed, {% data variables.copilot.copilot_coding_agent %} will not respond to new mentions or comments to better focus on active development work.

## Based on the agent session logs, {% data variables.product.prodname_copilot_short %} appears to be stuck

{% data variables.product.prodname_copilot_short %} can appear to be stuck for a while, and then get moving again.

If the session remains stuck, it will time out after an hour. You can retry by unassigning the issue and then reassigning it to {% data variables.product.prodname_copilot_short %}.

If {% data variables.product.prodname_copilot_short %} got stuck while responding to a comment, try adding the same comment to the pull request again.

## My {% data variables.product.prodname_actions %} workflows are not running when Copilot pushes

{% data variables.product.prodname_actions %} workflows will not run automatically when {% data variables.product.prodname_copilot_short %} pushes changes to a pull request.

To allow {% data variables.product.prodname_actions %} workflows to run, click the **Approve and run workflows** button in the pull request's merge box. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot).

## {% data variables.product.prodname_copilot_short %} is pushing changes which don't pass my CI checks

While working on an issue, {% data variables.product.prodname_copilot_short %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can execute automated tests and linters to validate its work before it pushes.

It is most likely to do this if given clear instructions on what to do. The best way to do this is with a `.github/copilot-instructions.md` file. See [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices#adding-custom-instructions-to-your-repository).

## There is a warning from {% data variables.product.prodname_copilot %} about the firewall

By default, {% data variables.product.prodname_copilot_short %}'s access to the internet is limited by a firewall.

Limiting access to the internet helps to manage data exfiltration risks, where surprising behavior from {% data variables.product.prodname_copilot_short %} or malicious instructions given to it could lead to code or other sensitive information being leaked to remote locations.

If {% data variables.product.prodname_copilot_short %} tries to make a request which is blocked by the firewall, a warning is added to the pull request body (if {% data variables.product.prodname_copilot_short %} is responding to an issue assignment) or to a comment (if {% data variables.product.prodname_copilot_short %} is responding to a comment). The warning shows the blocked address and the command that tried to make the request.

![Screenshot of a warning from {% data variables.product.prodname_copilot_short %} about being blocked by the firewall.](/assets/images/help/copilot/coding-agent/firewall-warning.png)

For more information, see [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

## {% data variables.product.prodname_copilot_short %} is not picking up attached screenshots

The maximum image size allowed by {% data variables.copilot.copilot_coding_agent %} is 3.00 MiB. Images larger than this will be removed from the request.

## Further reading

* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
