---
title: About GitHub Copilot
shortTitle: About Copilot
intro: 'Understand how {% data variables.product.prodname_copilot %} helps you ship software faster, how it works, and how to get access.'
versions:
  feature: copilot
redirect_from:
  - /copilot/copilot-individual
  - /copilot/copilot-individual/about-github-copilot-individual
  - /copilot/copilot-business/about-github-copilot-business
  - /copilot/github-copilot-enterprise/about-github-copilot-enterprise
  - /copilot/github-copilot-enterprise/overview
  - /copilot/overview-of-github-copilot/about-github-copilot-for-individuals
  - /copilot/overview-of-github-copilot/about-github-copilot
  - /copilot/overview-of-github-copilot/about-github-copilot-individual
  - /copilot/overview-of-github-copilot/about-github-copilot-for-business
  - /copilot/overview-of-github-copilot/about-github-copilot-business
  - /copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise
  - /copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization
  - /copilot/managing-copilot-business
  - /copilot/managing-copilot-for-business
  - /copilot/github-copilot-enterprise
  - /copilot/copilot-business
  - /copilot/copilot-business/github-copilot-business-feature-set
  - /copilot/copilot-individual/github-copilot-individual-feature-set
  - /copilot/github-copilot-enterprise/github-copilot-enterprise-feature-set
  - /copilot/about-github-copilot/github-copilot-features
  - /copilot/get-started/github-copilot-features
  - /copilot/get-started/features
  - /copilot/about-github-copilot/what-is-github-copilot
  - /copilot/get-started/what-is-github-copilot
contentType: get-started
category:
  - Learn about Copilot
---

{% data variables.product.prodname_copilot %} is an AI assistant that helps you write, understand, and ship software. It suggests code as you type, answers questions about a codebase, reviews your changes, and works on tasks you assign it.

Because {% data variables.product.prodname_copilot_short %} is built into {% data variables.product.github %}, it works within the development workflow you already use:

* Your code and its history.
* The issues and pull requests you already use to track work.
* The automations you run in your repository.

A change can start as an issue, be picked up by an agent, return as a pull request, get reviewed for quality and security, and be merged.

You and {% data variables.product.prodname_copilot_short %} work on it in the same place, with the same context, instead of moving code into separate tools and back again.

## How {% data variables.product.prodname_copilot_short %} works

{% data variables.product.prodname_copilot_short %}'s capabilities and supporting features fall into four categories:

**Assistive.** {% data variables.product.prodname_copilot_short %} responds while you work, suggesting code, answering questions, or explaining code. You review and apply each suggestion.

**Agentic.** You describe a goal, and {% data variables.product.prodname_copilot_short %} can work through multiple steps. It researches a repository, proposes a plan, edits files, reviews pull requests, runs tools, and prepares tasks for your review. You remain responsible for reviewing and approving.

**Customizations.** You customize {% data variables.product.prodname_copilot_short %}'s responses with instructions, reusable prompts, repository context, external tools, agent skills, and custom agents. When {% data variables.product.prodname_copilot_short %} understands your project's structure, conventions, and tooling, it gives you better responses.

**External AI agents, models, and tools.** Coding agents, models, and tools, including MCP servers from other providers, work alongside {% data variables.product.prodname_copilot_short %}. Third-party coding agents work asynchronously on development tasks and can make changes and open or update pull requests for your review. They are subject to the same security protections, mitigations, and limitations as {% data variables.product.prodname_copilot_short %}.

## What you can do with {% data variables.product.prodname_copilot_short %}

{% data variables.product.prodname_copilot_short %} helps you throughout the software development lifecycle. For example:

* **Understand code** by asking questions about files, repositories, and development concepts.
* **Plan and implement tasks** with an agent that can research a repository, make changes, and prepare a pull request for your review.
* **Customize responses** with instructions, reusable prompts, repository context, tools, and specialized agents.
* **Write code** with inline suggestions and natural-language prompts.
* **Build applications** from natural-language descriptions.
* **Change code** by asking {% data variables.product.prodname_copilot_short %} to edit, refactor, or fix code.
* **Review code** and pull requests, including summaries and suggestions for potential improvements.

The capabilities available to you depend on your Copilot plan, the client you use, and your organization's policies.

## Get access

You can start using {% data variables.product.prodname_copilot_short %} in several ways, depending on your role and needs.

### Individuals

* **Try {% data variables.product.prodname_copilot_short %} for free.** Use [{% data variables.copilot.copilot_free_short %}](https://github.com/copilot?ref_product=copilot&ref_plan=free&ref_style=text&ref_type=engagement) to explore core features with no paid plan required.
* **Subscribe to a paid plan.** Upgrade to a paid plan for access to premium features, increased access to models, and a higher monthly allowance of {% data variables.product.prodname_ai_credits_short %}. See [AUTOTITLE](/copilot/how-tos/manage-your-account/get-started-with-a-copilot-plan) for more information.
* **Get free access if you're eligible.** Students, teachers, and open source maintainers may qualify for access to premium features at no cost. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students) and [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-teachers-and-os-maintainers).

### Members of an organization

* **Request access from your organization.** If your organization or enterprise has a {% data variables.product.prodname_copilot %} plan, go to [https://github.com/settings/copilot](https://github.com/settings/copilot) and request access under "Get {% data variables.product.prodname_copilot_short %} from an organization."

### Organization and enterprise owners

{% data reusables.copilot.plans.subscribe-for-org %}

{% data reusables.copilot.plans.subscribe-for-enterprise %}

If you are on **{% data variables.product.prodname_ghe_server %}**, see [AUTOTITLE](/enterprise-server@latest/copilot/copilot-on-ghes/about-copilot-on-ghes).

## Control for organizations and enterprises

If you use {% data variables.product.prodname_copilot_short %} through an organization or enterprise, administrators decide how it can be used. They control which members have access, set policies for which features are available, exclude files that {% data variables.product.prodname_copilot_short %} shouldn't see, and review usage data and audit logs to understand how it's being used.

These settings help administrators manage {% data variables.product.prodname_copilot_short %} across the environments and features available to their organization or enterprise. Some settings and controls depend on the {% data variables.product.prodname_copilot_short %} plan and the client where {% data variables.product.prodname_copilot_short %} is used. See [AUTOTITLE](/copilot/how-tos/administer-copilot).

## Next steps

* Start using {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/how-tos/set-up).
* View the {% data variables.product.prodname_copilot_short %} features available to you by navigating to your {% data variables.product.prodname_copilot_short %} settings at [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text).
