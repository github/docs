---
title: About GitHub Agentic Workflows
shortTitle: Agentic Workflows
intro: 'Automate repetitive repository work with natural language instructions executed by AI coding agents in {% data variables.product.prodname_actions %}.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

{% data reusables.copilot.agentic-workflows-preview-note %}

## About {% data variables.copilot.agentic_workflows_short %}

{% data variables.copilot.github_agentic_workflows %} are AI-powered repository automations that you define in markdown and run as {% data variables.product.prodname_actions %} workflows. Unlike traditional automation with fixed if-then rules, {% data variables.copilot.agentic_workflows_short %} use coding agents to understand context, make decisions, and take meaningful actions—all from natural language instructions.

In practice, compared with traditional workflows that execute predefined steps:

* {% data variables.copilot.agentic_workflows_short_cap %} execute natural language instructions with contextual reasoning.
* You still define guardrails in frontmatter, such as triggers, permissions, and safe outputs.

With {% data variables.copilot.agentic_workflows_short %}, you can automate tasks like:

* Triaging incoming issues and labeling them by type and priority
* Investigating CI failures and suggesting fixes
* Generating daily or weekly repository status reports
* Keeping documentation up to date with code changes
* Improving test coverage

## Benefits of using {% data variables.copilot.agentic_workflows_short %}

* **Automate repetitive repository work**. Define issue triage, CI investigation, documentation updates, and reporting in natural language.
* **Reduce workflow complexity**. Write markdown instructions instead of building complex procedural scripts for every scenario.
* **Keep human review in the loop**. {% data variables.copilot.agentic_workflows_short_cap %} can generate ready-to-review outputs, such as issues, comments, and pull requests, while you control approvals and merges.
* **Run agents with layered security**. Agents run in firewalled containers with read-only tokens by default. Write actions are limited to declared "safe outputs" that you have defined, and checked by agentic threat detection.

## Requirements

To create and use {% data variables.copilot.agentic_workflows_short %}, you need:

* {% data variables.product.prodname_actions %} enabled for your repository.
* An account with an AI engine (agent), such as {% data variables.product.prodname_copilot %}, {% data variables.product.prodname_anthropic_claude %}, {% data variables.product.prodname_openai_codex %}, or Google Gemini.
* {% data variables.product.prodname_cli %} installed and authenticated

## How {% data variables.copilot.agentic_workflows_short %} work

Each workflow markdown file has two parts:

* **Frontmatter** (YAML between `---` markers): Configures when the workflow runs, what permissions it has, and what write operations are allowed.
* **Markdown body**: Contains your natural language instructions that the AI agent follows.

At a high level, the process to create and use {% data variables.copilot.agentic_workflows_short %} is:

1. Define the agentic workflow `.md` file, including YAML frontmatter and markdown instructions.
1. Compile the markdown workflow file into a hardened `.lock.yml` {% data variables.product.prodname_actions %} workflow file.
1. Commit and push both files to the default branch of your repository.
1. Run the workflow like any other {% data variables.product.prodname_actions %} workflow, on a trigger or in the {% data variables.product.github %} web interface for your repository. You can also run it from the {% data variables.product.prodname_cli %}.

Here's an example of a workflow to create a daily status report issue for a repository:

```markdown
---
on: daily

permissions:
  contents: read
  issues: read
  pull-requests: read
  copilot-requests: write

network: defaults

tools:
  github:
    toolsets: [default]

safe-outputs:
  create-issue:

---

# Daily Repo Status Report

Review recent activity in the repository, including issues, pull requests, discussions, and code changes.

Create a {% data variables.product.github %} issue summarizing what changed in the last 24 hours (merged pull requests, closed issues, and new discussions), any blockers or open questions mentioned in comments, progress toward visible goals, and recommended next steps for maintainers.

Keep the summary concise. Adjust the level of detail based on how much activity occurred.
```

For detailed steps on creating and updating {% data variables.copilot.agentic_workflows_short %}, see [AUTOTITLE](/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).

## Supported coding agents

{% data variables.copilot.github_agentic_workflows %} support multiple coding agents, including:

* {% data variables.product.prodname_copilot %} (requires a {% data variables.product.prodname_copilot %} plan)
* {% data variables.product.prodname_anthropic_claude %}
* {% data variables.product.prodname_openai_codex %}
* Google Gemini

You specify which agent to use in the workflow frontmatter property `engine`. Each engine requires its own authentication secret configured in your repository. {% data variables.product.prodname_copilot %} is the default engine if none is specified.

For more information, see the [engine reference](https://github.github.com/gh-aw/reference/engines/).

## Security guardrails

{% data variables.copilot.github_agentic_workflows %} are designed with security as a priority:

* **Read-only by default**: Workflows have read-only repository permissions unless you explicitly grant more.
* **Safe outputs**: Write operations (such as creating issues, adding comments, or opening pull requests) are only allowed through validated `safe-outputs` declared in the frontmatter.
* **Secrets stay outside the agent runtime**: Sensitive credentials are kept in isolated downstream jobs instead of being exposed directly to the agent.
* **Threat detection**: Proposed outputs are scanned for suspicious or unsafe changes before write actions are applied.
* **Firewalled execution**: Agents run in isolated {% data variables.product.prodname_actions %} environments.
* **Role-based access**: You can restrict who can trigger or modify {% data variables.copilot.agentic_workflows_short %} using role-based access controls.

For a full architecture walkthrough, see the [security documentation](https://github.github.com/gh-aw/introduction/architecture/).

## Usage and billing

The total cost of {% data variables.copilot.agentic_workflows_short %} has two parts:

* {% data variables.product.prodname_actions %} minutes consumed by workflow jobs.
* Inference costs from the configured AI engine.

For inference, {% data variables.copilot.github_agentic_workflows %} use AI Credits (AIC) as a general metric for monitoring and budgeting across engines. `1 AIC = $0.01 USD`.

How billing applies depends on the engine:

* Default {% data variables.product.prodname_copilot %} engine: AIC usage maps to {% data variables.product.prodname_ai_credits_short %} in {% data variables.product.prodname_copilot %} billing.
* Third-party engine: Inference is billed by that provider.

You can use the {% data variables.product.prodname_cli %} to review usage and estimated cost for {% data variables.copilot.agentic_workflows_short %}. Use `gh aw logs` to view recent workflow runs, including duration, token usage, and AIC estimates across runs. Use `gh aw audit RUN-ID` to inspect a single run in more detail, including token usage and estimated inference cost. AIC values are best-effort estimates and may not exactly match provider invoices, so verify final charges in your provider's billing dashboard.

You can also set `max-ai-credits` in workflow frontmatter to cap inference usage for a single run. The default cap is 1,000 AIC per run.

For an overview of billing for {% data variables.copilot.github_agentic_workflows %} and cost optimization guidance, see [Cost management](https://github.github.com/gh-aw/reference/cost-management/) on the {% data variables.copilot.github_agentic_workflows %} documentation site.

### Enabling organization billing for {% data variables.copilot.github_agentic_workflows %}

For {% data variables.product.prodname_copilot %} agentic workflows in organization-owned repositories, if the organization has a {% data variables.product.prodname_copilot %} plan, we strongly recommend using {% data variables.product.prodname_actions %}' built-in `GITHUB_TOKEN`. This approach bills to the organization and avoids using a {% data variables.product.pat_generic %}.

To bill to the organization, you need:

1. An organization administrator to enable "Copilot CLI" and "Allow use of Copilot CLI billed to the organization" in {% data variables.product.prodname_copilot %} policy settings. If "Copilot CLI" is already enabled, the billing policy is enabled by default.
1. In each workflow frontmatter, include `copilot-requests: write` under the `permissions` object.

When `copilot-requests: write` is set in workflow frontmatter permissions, the {% data variables.product.prodname_actions %}' token is used for Copilot requests, so you don't need a `COPILOT_GITHUB_TOKEN`. If the {% data variables.product.prodname_actions %} token does not have {% data variables.product.prodname_copilot %} access from the organization, the workflow fails when it sends Copilot requests, and you should configure `COPILOT_GITHUB_TOKEN` instead.

For detailed setup instructions, see [Using the built-in `GITHUB_TOKEN`](/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows#using-the-built-in-github_token).

## Next steps

* To add your first agentic workflow, see [AUTOTITLE](/copilot/how-tos/github-agentic-workflows/quickstart).
* For more information on creating and using {% data variables.copilot.agentic_workflows_short %}, see [AUTOTITLE](/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).
* For the full reference documentation, including advanced patterns and examples, see the [{% data variables.copilot.github_agentic_workflows %} documentation site](https://github.github.com/gh-aw/).
