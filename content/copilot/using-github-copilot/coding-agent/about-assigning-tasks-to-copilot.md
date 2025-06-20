---
title: About assigning tasks to Copilot
intro: 'You can assign {% data variables.product.github %} issues to {% data variables.product.prodname_copilot_short %}, or ask {% data variables.product.prodname_copilot_short %} to create a pull request.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=about+assigning+issues+to+copilot&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: overview
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/about-assigning-tasks-to-copilot
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/about-assigning-issues-to-copilot
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/about-assigning-tasks-to-copilot
---

> [!NOTE]
> * {% data reusables.copilot.coding-agent.preview-note-text %}
> * The setting that blocks suggestions matching public code may not work as intended when using {% data variables.copilot.copilot_coding_agent %}. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code).

## Overview of {% data variables.copilot.copilot_coding_agent %}

With {% data variables.copilot.copilot_coding_agent %}, {% data variables.product.prodname_copilot %} can work independently in the background to complete tasks, just like a human developer.

{% data variables.product.prodname_copilot_short %} can:

* Fix bugs
* Implement incremental new features
* Improve test coverage
* Update documentation
* Address technical debt

To delegate development tasks to {% data variables.product.prodname_copilot_short %}, you can:

* Assign an issue to {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/using-copilot-to-work-on-an-issue).
* Use {% data variables.copilot.copilot_chat %} to ask {% data variables.product.prodname_copilot_short %} to create a pull request. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/asking-copilot-to-create-a-pull-request).

{% data variables.product.prodname_copilot_short %} will evaluate the task it has been assigned based on the prompt you give it—whether that's from the issue description or a chat message. Then {% data variables.product.prodname_copilot_short %} will make the required changes and open a pull request. When {% data variables.product.prodname_copilot_short %} finishes, it will request a review from you, and you can leave pull request comments to ask {% data variables.product.prodname_copilot_short %} to iterate.

While working on a coding task, {% data variables.product.prodname_copilot_short %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can explore your code, make changes, execute automated tests and linters and more.

### {% data variables.copilot.copilot_coding_agent %} vs. agent mode in {% data variables.product.prodname_vscode %}

{% data variables.copilot.copilot_coding_agent %} is distinct from the "agent mode" feature available in {% data variables.product.prodname_vscode %}. {% data variables.copilot.copilot_coding_agent %} works autonomously in a {% data variables.product.prodname_actions %}-powered environment to complete development tasks assigned through {% data variables.product.github %} issues or {% data variables.copilot.copilot_chat %} prompts, and creates pull requests with the results. In contrast, agent mode in {% data variables.product.prodname_vscode %} is part of the {% data variables.copilot.copilot_edits %} feature that allows {% data variables.product.prodname_copilot_short %} to make autonomous edits directly in your local development environment. For more information about agent mode, see [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide?tool=visualstudio#copilot-edits-1).

### Streamlining software development with {% data variables.copilot.copilot_coding_agent %}

Assigning tasks to {% data variables.product.prodname_copilot_short %} can enhance your software development workflow.

For example, you can assign {% data variables.product.prodname_copilot_short %} to straightforward issues on your backlog. This allows you to spend less time on these and more time on more complex or interesting work, or work that requires a high degree of creative thinking. {% data variables.product.prodname_copilot_short %} can work on "nice to have" issues that improve the quality of your codebase or product, but often remain on the backlog while you focus on more urgent work.

Having {% data variables.product.prodname_copilot_short %} as an additional coding resource also allows you to start tasks that you might not have otherwise due to lack of resources. For example, you might delegate {% data variables.product.prodname_copilot_short %} tasks to refactor code or add more logging, then immediately assign these to {% data variables.product.prodname_copilot_short %}.

{% data variables.product.prodname_copilot_short %} can start a task, which you then pick up and continue working on yourself. By assigning the initial work to {% data variables.product.prodname_copilot_short %}, you free up time that you would otherwise have spent doing repetitive tasks, such as setting up the scaffolding for a new project.

### Making {% data variables.copilot.copilot_coding_agent %} available

Before you can assign tasks to {% data variables.product.prodname_copilot_short %}, it must be enabled. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/enabling-copilot-coding-agent).

## {% data variables.copilot.copilot_coding_agent %} usage costs

{% data variables.copilot.copilot_coding_agent %} uses {% data variables.product.prodname_actions %} minutes and {% data variables.product.prodname_copilot_short %} premium requests.

Within your monthly usage allowance for {% data variables.product.prodname_actions %} and premium requests, you can ask {% data variables.product.prodname_copilot_short %} to work on coding tasks without incurring any additional costs.

For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-coding-agent).

## Risks and mitigations

{% data variables.copilot.copilot_coding_agent %} is an autonomous agent that has access to your code and can push changes to your repository. This entails certain risks. Where possible, {% data variables.product.github %} has applied appropriate mitigations.

### Risk: {% data variables.product.prodname_copilot_short %} can push code changes to your repository

To mitigate this risk, {% data variables.product.github %}:

* **Limits who can assign tasks to {% data variables.product.prodname_copilot_short %}.** Only users with write access to the repository can trigger {% data variables.product.prodname_copilot_short %} to work. Comments from users without write access are never presented to the agent.
* **Limits the permissions in access tokens used by Copilot.** Pushes are only allowed to branches beginning with `copilot/`. {% data variables.product.prodname_copilot_short %} cannot push to the `main` or `master` branches.
* **Limits {% data variables.product.prodname_copilot_short %}'s credentials.** {% data variables.product.prodname_copilot_short %} can only perform simple push operations. It cannot directly run `git push` or other Git commands.
* **Restricts {% data variables.product.prodname_actions %} workflow runs.** Workflows are not triggered until {% data variables.product.prodname_copilot_short %}'s code is reviewed and a user with write access to the repo clicks the **Approve and run workflows** button. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot).
* **Prevents the user who asked {% data variables.product.prodname_copilot_short %} to create a pull request from approving it.** This maintains the expected controls in the "Required approvals" rule and branch protection. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

### Risk: {% data variables.product.prodname_copilot_short %} has access to sensitive information

{% data variables.product.prodname_copilot_short %} has access to code and other sensitive information, and could leak it, either accidentally or due to malicious user input. To mitigate this risk, {% data variables.product.github %}:

* **Restricts {% data variables.product.prodname_copilot_short %}'s access to the internet.** See [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

### Risk: Prompt injection vulnerabilities

Users can include hidden messages in issues assigned to {% data variables.product.prodname_copilot_short %} or comments left for {% data variables.product.prodname_copilot_short %} as a form of [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/). To mitigate this risk, {% data variables.product.github %}:

* **Filters hidden characters before passing user input to {% data variables.product.prodname_copilot_short %}**: For example, text entered as an HTML comment in an issue or pull request comment is not passed to {% data variables.product.prodname_copilot_short %}.

## Limitations of {% data variables.copilot.copilot_coding_agent %}

{% data variables.copilot.copilot_coding_agent %} has certain limitations in its software development workflow and compatibility with other features.

### Limitations in {% data variables.product.prodname_copilot_short %}'s software development workflow

* **{% data variables.product.prodname_copilot_short %} can only make changes in the same repository where it is creating its pull request**. When {% data variables.product.prodname_copilot_short %} is assigned an issue, it can only make changes in the repository where that issue is located. In addition, {% data variables.product.prodname_copilot_short %} cannot make changes across multiple repositories in one run.
* **{% data variables.product.prodname_copilot_short %} can only access context in the same repository as the assigned issue**. By default, an integration with the {% data variables.product.prodname_copilot_short %} MCP server provides {% data variables.product.prodname_copilot_short %} access to one repository at a time. You can, however, configure broader access. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).
* **{% data variables.product.prodname_copilot_short %} can only open one pull request at a time**. {% data variables.product.prodname_copilot_short %} will open exactly one pull request to address each task it is assigned.
* **{% data variables.product.prodname_copilot_short %} cannot work on an existing pull request that it didn't create**. If you would like {% data variables.product.prodname_copilot_short %} to provide feedback on an existing pull request, you can add it as a reviewer. See [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review).
* **{% data variables.product.prodname_copilot_short %} will always start its changes from the repository's default branch**. {% data variables.product.prodname_copilot_short %} cannot branch off from any other branch—for example, a feature branch or a release branch.

### Limitations in Copilot's compatibility with other features

* **{% data variables.product.prodname_copilot_short %} does not sign its commits**. If you have the "Require signed commits" rule or branch protection enabled, you must rewrite the commit history in order to merge {% data variables.product.prodname_copilot_short %}'s pull requests. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-signed-commits).
* **{% data variables.product.prodname_copilot_short %} does not work with self-hosted {% data variables.product.prodname_actions %} runners**. {% data variables.product.prodname_copilot_short %} has access to its own development environment, running in {% data variables.product.prodname_actions %}, and must use {% data variables.product.prodname_dotcom %}-hosted runners. See [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent#upgrading-to-larger-github-hosted-github-actions-runners).
* **{% data variables.copilot.copilot_coding_agent %} does not work in personal repositories owned by {% data variables.enterprise.prodname_managed_users %}**. This is because {% data variables.copilot.copilot_coding_agent %} requires {% data variables.product.company_short %}-hosted runners, which are not available to repositories owned by {% data variables.enterprise.prodname_managed_users %}. See [AUTOTITLE](/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners).
* **{% data variables.product.prodname_copilot_short %} doesn't account for content exclusions**. Content exclusions allow administrators to configure {% data variables.product.prodname_copilot_short %} to ignore certain files. When using {% data variables.copilot.copilot_coding_agent %}, {% data variables.product.prodname_copilot_short %} will not ignore these files, and will be able to see and update them. See [AUTOTITLE](/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot).
* **{% data variables.copilot.copilot_coding_agent %} is not available in {% data variables.enterprise.data_residency %}**. The agent is only available in {% data variables.product.prodname_dotcom_the_website %}.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent)
* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp)
