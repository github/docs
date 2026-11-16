---
title: About GitHub Copilot Dreaming
shortTitle: '{% data variables.copilot.copilot_dreaming %}'
allowTitleToDifferFromFilename: true
intro: 'Learn how {% data variables.copilot.copilot_dreaming %} updates {% data variables.product.prodname_copilot_short %}''s context, how to enable it, and how to review run results.'
product: 'Available for eligible paid {% data variables.product.prodname_copilot_short %} plans. See [Availability and prerequisites](#availability-and-prerequisites). <br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=dreaming-purchase&utm_medium=docs&utm_campaign=universe-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

> [!NOTE]
> {% data variables.copilot.copilot_dreaming %} is in {% data variables.release-phases.public_preview %} and is subject to change.

{% data variables.copilot.copilot_dreaming %} works in the background to keep {% data variables.product.prodname_copilot_short %}'s memories and repository guidance up to date. It analyzes eligible {% data variables.product.prodname_copilot_short %} sessions and pull request review feedback to identify useful information, correct outdated guidance, and remove duplicate memories. For example, it can propose an update when your repository's instructions describe an obsolete test command.

{% data variables.copilot.copilot_memory %} stores repository facts and personal preferences that {% data variables.product.prodname_copilot_short %} can learn and reuse during normal interactions, even when {% data variables.copilot.copilot_dreaming %} is off. {% data variables.copilot.copilot_dreaming %} maintains these memories in the background to help keep them relevant and accurate. It updates context, not the underlying AI model. For more information about {% data variables.copilot.copilot_memory %}, see [AUTOTITLE](/copilot/concepts/prompting-and-context/copilot-memory).

You do not need to keep a {% data variables.product.prodname_copilot_short %} conversation open for {% data variables.copilot.copilot_dreaming %} to run.

## What {% data variables.copilot.copilot_dreaming_short %} can do

| Capability | Information it uses | Output |
| --- | --- | --- |
| Repository customization | Eligible repository sessions, code, memories, and guidance | Updated repository memories and proposed instruction or skill changes |
| Personal memory curation | Your eligible sessions and personal memories | Updated personal memories. No changes to personal instruction or skill files |
| Code review customization | Feedback on merged pull requests and current repository code | Guidance for future {% data variables.copilot.copilot_code-review_short %}s |

Repository customization can review tracked `.github/copilot-instructions.md`, `.github/instructions/**`, `.github/agents/**`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `REVIEW.md`, and `.github/skills/**` files. It does not necessarily change every file. Which instructions, skills, and memories {% data variables.product.prodname_copilot_short %} uses depends on the {% data variables.product.prodname_copilot_short %} feature.

## How changes are applied

* **Memories:** {% data variables.copilot.copilot_dreaming %} adds, updates, and deletes memories automatically, without approval for each change.
* **Checked-in instructions and skills:** {% data variables.copilot.copilot_dreaming %} proposes changes in a pull request. Files remain unchanged until you merge the pull request.
* **Code review guidance:** {% data variables.copilot.copilot_dreaming %} updates internal code review guidance without a pull request. This guidance complements the checked-in instruction files that {% data variables.copilot.copilot_code-review_short %} also uses.

AI-generated guidance can be incorrect. Review proposed file changes before merging. To review or delete memories, see [Data and controls](#data-and-controls). Not every run makes changes or opens a pull request.

You configure {% data variables.copilot.copilot_dreaming %} on {% data variables.product.prodname_dotcom_the_website %}. To view individual run outputs in the {% data variables.copilot.github_copilot_app_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-copilot-dreaming-results-in-the-copilot-app).

## Availability and prerequisites

{% data variables.copilot.copilot_dreaming %} is available for eligible paid {% data variables.product.prodname_copilot_short %} plans. The initial preview requires access to GPT-6.1 Sol and is not available on {% data variables.copilot.copilot_pro_short %}. It does not support {% data variables.product.prodname_ghe_cloud %} with data residency.

Each capability requires these settings:

| Capability | {% data variables.copilot.copilot_memory_short %} setting | {% data variables.copilot.copilot_dreaming_short %} setting | Session syncing | Other required settings |
| --- | --- | --- | --- | --- |
| Repository customization | Repository-level {% data variables.copilot.copilot_memory_short %} is enabled | Enabled through organization policy or the personally owned repository's settings | Required | GPT-6.1 Sol allowed by policy |
| Personal memory curation | Personal {% data variables.copilot.copilot_memory_short %} is enabled | Personal {% data variables.copilot.copilot_dreaming_short %} permitted by managed policies, where applicable, and enabled for the user | Required | GPT-6.1 Sol allowed by policy |
| Code review customization | Repository-level {% data variables.copilot.copilot_memory_short %} is enabled | Enabled through organization policy or the personally owned repository's settings | Not required | {% data variables.copilot.copilot_code-review_short %} and its preview features enabled. GPT-6.1 Sol allowed by policy |

Code review customization does not currently support self-hosted runners.

All capabilities require an eligible {% data variables.product.prodname_copilot_short %} subscription and permission under applicable enterprise and organization policies. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-dreaming).

> [!IMPORTANT]
> Before enabling {% data variables.copilot.copilot_dreaming %}, complete the prerequisites shown in the table for the capabilities you want to use. If {% data variables.copilot.copilot_dreaming_short %} is already enabled when you complete additional prerequisites, turn {% data variables.copilot.copilot_dreaming %} off and on again using the setting that controls the affected personal memories or repositories. Completing the prerequisites alone does not activate additional capabilities.

Each {% data variables.copilot.copilot_dreaming_short %} setting enables the capabilities whose prerequisites are met within its scope. For repositories, this can include both repository customization and code review customization. You cannot switch these capabilities on or off individually.

### Enabling session syncing

Session syncing saves local sessions to your {% data variables.product.github %} account. It is enabled by default for {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %}, subject to organization and enterprise policies.

For users who get {% data variables.product.prodname_copilot_short %} from an enterprise or organization, **Store local sessions in the Cloud**, under "{% data variables.copilot.copilot_cli_short %}" in the enterprise or organization policy settings, must be set to at least **View from cloud**. If the policy is disabled or unconfigured, sessions remain local. For more information, see [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-remote-control).

If you previously disabled syncing of your own {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.github_copilot_app %} sessions by setting `remoteExport` to `false` in `~/.copilot/settings.json`, remove that setting to restore the default behavior, or set it to `true`. Syncing remains subject to feature availability and applicable enterprise or organization policies.

## Costs and usage

{% data variables.copilot.copilot_dreaming %} model usage is billed in {% data variables.product.prodname_ai_credits_short %} as part of your existing {% data variables.product.prodname_copilot_short %} usage, not as a separate item for {% data variables.copilot.copilot_dreaming %}. Cost depends on processing and the number of enabled users and repositories, including inactive repositories. For more information about billing for {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing) and [AUTOTITLE](/copilot/concepts/billing-and-usage/individuals/billing).

Every {% data variables.copilot.copilot_dreaming %} run uses {% data variables.product.prodname_ai_credits_short %}. This includes runs that make no changes or process inactive repositories. You should review repository coverage and billing controls before enabling {% data variables.copilot.copilot_dreaming %}.

Administrators can monitor {% data variables.product.prodname_ai_credits_short %} usage for their enterprise or organization. Total usage includes other features, and app attribution requires a detailed usage report rather than the **AI usage** view. See [AUTOTITLE](/billing/how-tos/products/view-productlicense-use#analyzing-ai-credits-usage).

Individual users can review their own usage in their personal {% data variables.product.prodname_copilot_short %} settings. See [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-ai-usage).

Before increasing the number of organizations in an enterprise for which {% data variables.copilot.copilot_dreaming %} is enabled, make sure to configure spending controls for the relevant billing account. Alerts alone do not stop usage. A per-user budget may not cover repository-level app usage, and separate budgets for individual {% data variables.copilot.copilot_dreaming %} app installations are not available. For more information, see [AUTOTITLE](/billing/how-tos/set-up-budgets).

## Data and controls

{% data variables.copilot.copilot_dreaming %} can use previously synced sessions, memories, repository content, and pull request review feedback. Each run may use only some of this information. Turning off session syncing does not delete sessions that have already been synced.

Instructions and skills proposed in pull requests are visible to people with access to the repository. {% data variables.copilot.copilot_dreaming %} does not change who can access or manage personal memories. See [AUTOTITLE](/copilot/concepts/prompting-and-context/copilot-memory#user-level-preferences).

To stop future runs, disable {% data variables.copilot.copilot_dreaming %} in the relevant enterprise, organization, personal, or repository settings. At enterprise level, select **Disabled everywhere**. Turning off personal {% data variables.copilot.copilot_dreaming_short %} does not stop runs for organization-owned repositories. A run already in progress may continue.

Turning off {% data variables.copilot.copilot_dreaming %} does not undo its changes, delete information it has created, close its pull requests, or restore deleted memories. You can manage existing changes separately:

* Review and delete personal memories in your personal settings. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#viewing-and-deleting-your-user-level-preferences).
* Review and delete repository memories in repository settings. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-and-deleting-repository-level-facts).
* Review, close, or merge pull requests containing proposed changes to instructions and skills.

Run details in the {% data variables.copilot.github_copilot_app_short %} are not a complete activity history and do not include an option to undo a run.

For more information, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/session-data).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#enabling-copilot-dreaming-for-your-personal-account)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-dreaming)
