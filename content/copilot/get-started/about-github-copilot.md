---

title: About GitHub Copilot
shortTitle: About Copilot
intro: 'Understand how {% data variables.product.prodname_copilot %} helps you write, understand, and ship software, how it works, and how to get access.'
versions:
feature: copilot
redirect_from:

* /copilot/copilot-individual
* /copilot/copilot-individual/about-github-copilot-individual
* /copilot/copilot-business/about-github-copilot-business
* /copilot/github-copilot-enterprise/overview
* /copilot/overview-of-github-copilot/about-github-copilot-for-individuals
* /copilot/overview-of-github-copilot/about-github-copilot
* /copilot/overview-of-github-copilot/about-github-copilot-individual
* /copilot/overview-of-github-copilot/about-github-copilot-for-business
* /copilot/overview-of-github-copilot/about-github-copilot-business
* /copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise
* /copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization
* /copilot/managing-copilot-business
* /copilot/managing-copilot-for-business
* /copilot/github-copilot-enterprise
* /copilot/copilot-business
* /copilot/copilot-business/github-copilot-business-feature-set
* /copilot/copilot-individual/github-copilot-individual-feature-set
* /copilot/github-copilot-enterprise/github-copilot-enterprise-feature-set
* /copilot/about-github-copilot/github-copilot-features
* /copilot/get-started/github-copilot-features
* /copilot/get-started/features
* /copilot/about-github-copilot/what-is-github-copilot
* /copilot/get-started/what-is-github-copilot

---

{% data variables.product.prodname_copilot %} is an AI assistant that helps you write, understand, and ship software. It can suggest code as you type, answer questions about your code and codebase, help you make changes, and assist with code and pull request reviews.

Because {% data variables.product.prodname_copilot_short %} is integrated with {% data variables.product.github %}, it can work with the development workflow you already use, including:

* Your code and its history.
* Issues and pull requests used to track work.
* Automations configured for your repository.

Depending on the features available to you, a task can start with an issue, be worked on by an agent, and result in a pull request for review. You remain responsible for reviewing changes before they are merged.

## How {% data variables.product.prodname_copilot_short %} works

{% data variables.product.prodname_copilot_short %}'s capabilities can be grouped into several areas:

**Assistive.** {% data variables.product.prodname_copilot_short %} can respond while you work by suggesting code, answering questions, and explaining code. You review and apply suggestions as needed.

**Agentic.** You can describe a goal and use an agent to work through multiple steps toward that goal. Depending on the feature and environment, an agent can analyze a repository, create a plan, edit files, use available tools, and prepare changes for your review.

**Customizations.** You can customize {% data variables.product.prodname_copilot_short %}'s behavior with instructions, reusable prompts, repository context, tools, agent skills, and custom agents. Providing project-specific context can help {% data variables.product.prodname_copilot_short %} produce responses that better match your project's structure and conventions.

**External AI agents, models, and tools.** {% data variables.product.prodname_copilot_short %} can work with external agents, models, and tools, including MCP servers from other providers, where supported. External coding agents can work asynchronously on development tasks and may create or update pull requests for your review. The capabilities, security considerations, and limitations of external services can vary by provider.

## What you can do with {% data variables.product.prodname_copilot_short %}

{% data variables.product.prodname_copilot_short %} can help throughout the software development lifecycle. For example:

* **Understand code** by asking questions about files, repositories, and development concepts.
* **Plan and implement tasks** with an agent that can analyze a repository, make changes, and prepare a pull request for review.
* **Customize responses** with instructions, reusable prompts, repository context, tools, and specialized agents.
* **Write code** with inline suggestions and natural-language prompts.
* **Build applications** from natural-language descriptions.
* **Change code** by asking {% data variables.product.prodname_copilot_short %} to edit, refactor, or fix code.
* **Review code and pull requests** by generating summaries and identifying potential improvements.

The capabilities available to you depend on your {% data variables.product.prodname_copilot_short %} plan, the client you use, and your organization's policies.

## Get access

You can start using {% data variables.product.prodname_copilot_short %} in several ways, depending on your role and needs.

### Individuals

* **Try {% data variables.product.prodname_copilot_short %} for free.** Use [{% data variables.copilot.copilot_free_short %}](https://github.com/copilot?ref_product=copilot&ref_plan=free&ref_style=text&ref_type=engagement) to explore available features without a paid plan.
* **Subscribe to a paid plan.** Paid plans provide access to additional features, models, and {% data variables.product.prodname_ai_credits_short %}. See [AUTOTITLE](/copilot/how-tos/manage-your-account/get-started-with-a-copilot-plan) for more information.
* **Get access if you're eligible.** Students, teachers, and open source maintainers may be eligible for access to {% data variables.product.prodname_copilot_short %} features at no additional cost. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students) and [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-teachers-and-os-maintainers).

### Members of an organization

* **Request access from your organization.** If your organization or enterprise has a {% data variables.product.prodname_copilot %} plan, go to [your Copilot settings](https://github.com/settings/copilot) and request access under "Get {% data variables.product.prodname_copilot_short %} from an organization."

### Organization and enterprise owners

{% data reusables.copilot.plans.subscribe-for-org %}

{% data reusables.copilot.plans.subscribe-for-enterprise %}

## Control for organizations and enterprises

If you use {% data variables.product.prodname_copilot_short %} through an organization or enterprise, administrators can control how it is used. They can manage member access, configure policies for available features, exclude files that {% data variables.product.prodname_copilot_short %} should not access, and review usage data and audit logs.

The settings and controls available to administrators depend on the {% data variables.product.prodname_copilot_short %} plan and the client where {% data variables.product.prodname_copilot_short %} is used. See [AUTOTITLE](/copilot/how-tos/administer-copilot).

## Next steps

* Start using {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/how-tos/set-up).
* View the {% data variables.product.prodname_copilot_short %} features available to you by navigating to your {% data variables.product.prodname_copilot_short %} settings at [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text).
