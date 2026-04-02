---
title: Risks and mitigations for GitHub Copilot cloud agent
shortTitle: Risks and mitigations
intro: 'How do {% data variables.copilot.copilot_coding_agent %}''s built-in security protections mitigate known risks?'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Manage Copilot for a team
  - Roll Copilot out at scale
---

{% data variables.copilot.copilot_coding_agent %} is an autonomous agent that has access to your code and can push changes to your repository. This entails certain risks.

Where possible, {% data variables.product.github %} has applied appropriate mitigations. This gives {% data variables.copilot.copilot_coding_agent %} a strong base of built-in security protections that you can supplement by following best practice guidance.

## Unvalidated code can introduce vulnerabilities

{% data reusables.copilot.coding-agent-validation-tools-intro %} {% data variables.copilot.copilot_coding_agent %}'s security validation **does not require** a {% data variables.product.prodname_GHAS_cs_or_sp %} license.

* **{% data variables.product.prodname_codeql %}** is used to identify code security issues.
* Newly introduced dependencies are checked against the **{% data variables.product.prodname_advisory_database %}** for malware advisories, and for any CVSS-rated High or Critical vulnerabilities.
* **{% data variables.product.prodname_secret_scanning_caps %}** is used to detect sensitive information such as API keys, tokens, and other secrets.
* Details about the analysis performed and the actions taken by {% data variables.copilot.copilot_coding_agent %} can be reviewed in the session log. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

Optionally, you can disable one or more of the code quality and security validation tools used by {% data variables.copilot.copilot_coding_agent %}. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/configuring-agent-settings).

## {% data variables.copilot.copilot_coding_agent %} can push code changes to your repository

To mitigate this risk, {% data variables.product.github %}:

* **Limits who can trigger the agent.** Only users with write access to the repository can trigger {% data variables.copilot.copilot_coding_agent %} to work. Comments from users without write access are never presented to the agent.
* **Limits the branch the agent can push to.** {% data variables.copilot.copilot_coding_agent %} only has the ability to push to a single branch. When the agent is triggered by mentioning `@copilot` on an existing pull request, {% data variables.product.prodname_copilot_short %} has write access to the pull request's branch. In other cases, a new `copilot/` branch is created for {% data variables.product.prodname_copilot_short %}, and the agent can only push to that branch. The agent is also subject to any branch protections and required checks for the working repository.
* **Limits the agent's credentials.** {% data variables.copilot.copilot_coding_agent %} can only perform simple push operations. It cannot directly run `git push` or other Git commands.
* **Requires human review before merging.** Draft pull requests created by {% data variables.copilot.copilot_coding_agent %} must be reviewed and merged by a human. {% data variables.copilot.copilot_coding_agent %} cannot mark its pull requests as "Ready for review" and cannot approve or merge a pull request.
* **Restricts {% data variables.product.prodname_actions %} workflow runs.** By default, workflows are not triggered until {% data variables.copilot.copilot_coding_agent %}'s code is reviewed and a user with write access to the repository clicks the **Approve and run workflows** button. Optionally, you can configure {% data variables.product.prodname_copilot_short %} to allow workflows to run automatically. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs#managing-github-actions-workflow-runs).
* **Prevents the user who asked {% data variables.copilot.copilot_coding_agent %} to create a pull request from approving it.** This maintains the expected controls in the "Required approvals" rule and branch protection. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

## {% data variables.copilot.copilot_coding_agent %} has access to sensitive information

{% data variables.copilot.copilot_coding_agent %} has access to code and other sensitive information, and could leak it, either accidentally or due to malicious user input.

To mitigate this risk, {% data variables.product.github %} **restricts {% data variables.copilot.copilot_coding_agent %}'s access to the internet**. See [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

## AI prompts can be vulnerable to injection

Users can include hidden messages in issues assigned to {% data variables.copilot.copilot_coding_agent %} or comments left for {% data variables.copilot.copilot_coding_agent %} as a form of [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/).

To mitigate this risk, {% data variables.product.github %} **filters hidden characters before passing user input to {% data variables.copilot.copilot_coding_agent %}**: For example, text entered as an HTML comment in an issue or pull request comment is not passed to {% data variables.copilot.copilot_coding_agent %}.

## Administrators can lose sight of agents' work

To mitigate this risk, {% data variables.copilot.copilot_coding_agent %} is designed to be auditable and traceable.

* {% data variables.copilot.copilot_coding_agent %}'s commits are authored by {% data variables.product.prodname_copilot_short %}, with the developer who assigned the issue or requested the change to the pull request marked as the co-author. This makes it easier to identify code generated by {% data variables.copilot.copilot_coding_agent %} and who started the task.
* Session logs and audit log events are available to administrators.
* The commit message for each agent-authored commit includes a link to the agent session logs, for code review and auditing. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).
