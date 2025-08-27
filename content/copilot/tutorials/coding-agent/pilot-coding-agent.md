---
title: 'Piloting GitHub Copilot coding agent in your organization'
shortTitle: 'Pilot {% data variables.copilot.copilot_coding_agent_short %}'
intro: 'Follow best practices to enable {% data variables.copilot.copilot_coding_agent %} in your organization.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
product: '{% data reusables.gated-features.copilot-coding-agent %}'
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org
  - /copilot/tutorials/pilot-copilot-coding-agent
contentType: tutorials
---
<!--JTBD: When rolling out {% data variables.copilot.copilot_coding_agent %}, I want to understand use cases and follow best practices, so I can ensure I'm using it as intended and get value from a pilot program.-->

{% data reusables.copilot.coding-agent.preview-note %}

{% data variables.copilot.copilot_coding_agent %} is an autonomous, AI-powered agent that completes software development tasks on {% data variables.product.github %}. Adopting {% data variables.copilot.copilot_coding_agent %} in your organization frees your engineering teams to spend more time thinking strategically and less time making routine fixes and maintenance updates in a codebase.

{% data variables.copilot.copilot_coding_agent %}:

* **Joins your team**: Developers can delegate work to {% data variables.product.prodname_copilot_short %} unlike IDE-based coding agents that require synchronous pairing sessions. {% data variables.product.prodname_copilot_short %} opens draft pull requests for team members to review and iterates based on feedback, as a developer would.
* **Reduces context switching**: Developers working in JetBrains IDEs, {% data variables.product.prodname_vscode_shortname %}, {% data variables.product.prodname_vs %}, or {% data variables.product.prodname_dotcom_the_website %} can ask {% data variables.copilot.copilot_coding_agent %} to create a pull request to complete small tasks without stopping what they are currently doing.
* **Executes tasks in parallel**: {% data variables.product.prodname_copilot_short %} can work on multiple issues simultaneously, handling tasks in the background while your team focuses on other priorities.

## 1. Evaluate

Before enabling {% data variables.copilot.copilot_coding_agent %} for members, understand how {% data variables.copilot.copilot_coding_agent %} will fit into your organization. This will help you evaluate whether {% data variables.copilot.copilot_coding_agent %} is suitable for your needs and plan communications and training sessions for developers.

1. Learn about {% data variables.copilot.copilot_coding_agent %}, including the costs, built-in security features, and how it differs from other AI tools your developers may be used to. See [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).
1. Learn about the tasks that {% data variables.copilot.copilot_coding_agent %} is best suited for. These are generally well-defined and scoped issues, such as increasing test coverage, fixing bugs or flaky tests, or updating config files or documentation. See [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices).
1. Consider how {% data variables.copilot.copilot_coding_agent %} fits alongside other tools in your organization's workflows. For an example scenario that walks through how to use {% data variables.copilot.copilot_coding_agent %} alongside other AI features on {% data variables.product.github %}, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/integrating-agentic-ai).

## 2. Secure

All AI models are trained to meet a request, even if they don't have all the information needed to provide a good answer, and this can lead them to make mistakes. By following best practices, you can build on the default security features of {% data variables.copilot.copilot_coding_agent %}.

1. Give {% data variables.product.prodname_copilot_short %} the information it needs to work successfully in a repository using a `copilot-instructions.md` file. See [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).
1. Set up the {% data variables.product.prodname_copilot_short %} development environment for a repository with access to the tools and package repositories approved by the organization using a `copilot-setup-steps.yml` file and local MCP servers. See [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent) and [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).
1. Follow best practices for storing secrets securely. See [AUTOTITLE](/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
1. Enable code security features to further lower the risk of leaking secrets and introducing vulnerabilities into the code. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization).
1. Configure your branch rulesets to ensure that all pull requests raised by {% data variables.product.prodname_copilot_short %} are approved by a second user with write permissions (a sub-option of "Require a pull request before merging"). See {% ifversion ghec %}[AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance), {% endif %}[AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization) and [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-a-pull-request-before-merging).

## 3. Pilot

<a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=using-cca-effectively" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

> [!TIP] You need {% data variables.copilot.copilot_pro %}, {% data variables.copilot.copilot_pro_plus %}, {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} to use {% data variables.copilot.copilot_coding_agent %}.

As with any other change to working practices, it's important to run a trial to learn how to deploy {% data variables.copilot.copilot_coding_agent %} effectively in your organization or enterprise.

1. Gather a cross-functional team for the trial to bring different roles, backgrounds, and perspectives to the project. This will make it easier to ensure that you explore a broad range of ways to define issues, assign work to {% data variables.product.prodname_copilot_short %}, and give clear review feedback.
1. Choose an isolated or low-risk repository, for example, one that contains documentation or internal tools. You could create a fresh repository to use as a playground, but {% data variables.product.prodname_copilot_short %} needs context to be successful, so you would need to add a lot of context, including team processes, development environment, and common dependencies.
1. Enable {% data variables.copilot.copilot_coding_agent %} in the repository and optionally enable third-party MCP servers for enhanced context sharing. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).
1. Create repository instructions and pre-install any tools required in the development environment {% data variables.product.prodname_copilot_short %} uses. See [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent).
1. Identify a few compelling use cases for your organization, for example: test coverage or improving accessibility. See [Choose the right type of tasks to give to Copilot](/copilot/tutorials/coding-agent/best-practices#choosing-the-right-type-of-tasks-to-give-to-copilot) in the best practice guide.
1. Use best practice to create or refine issues for {% data variables.product.prodname_copilot_short %} in your pilot repository.
1. Assign issues to {% data variables.product.prodname_copilot_short %} and prepare team members to review its work.
1. Spend time looking at the codebase or documentation in {% data variables.product.prodname_vscode_shortname %} or {% data variables.product.prodname_dotcom_the_website %}, asking {% data variables.product.prodname_copilot_short %} to create a pull request to fix any bugs or small improvements that you identify.

Over the course of the trial, the team should iterate on the repository instructions, installed tools, access to MCP servers, and issue definition to identify how your organization can get the most from {% data variables.copilot.copilot_coding_agent %}. This process will help you identify your organization's best practices for working with {% data variables.product.prodname_copilot_short %} and plan an effective rollout strategy.

In addition to giving you insight into how to set up {% data variables.copilot.copilot_coding_agent %} for success, you'll learn how {% data variables.product.prodname_copilot_short %} uses premium requests and actions minutes. This will be valuable when you come to set and manage your budget for a broader trial or full rollout. See [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/assigning-licenses/managing-your-companys-spending-on-github-copilot).

### Enhancing with MCP

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to provide {% data variables.copilot.copilot_coding_agent %} with access to different data sources and tools.

{% data variables.copilot.copilot_coding_agent %} has access to the full {% data variables.product.github %} context of the repository it's working in, including issues and pull requests, using the built-in {% data variables.product.github %} MCP server. By default, it's restricted from accessing external data by authentication barriers and a firewall.

You can extend the information available to {% data variables.copilot.copilot_coding_agent %} by giving it access to local MCP servers for the tools your organization uses. For example, you might want to provide access to local MCP servers for some of the following contexts:

* **Project planning tools**: Allow {% data variables.product.prodname_copilot_short %} direct access to private planning documents that are stored outside {% data variables.product.github %} in tools like Notion or Figma.
* **Augment training data**: Each LLM contains training data up to a specific cut-off date. If you're working with fast moving tools, {% data variables.product.prodname_copilot_short %} may not have access to information on new features. You can fill this knowledge gap by making the tool's MCP server available. For example, adding the Terraform MCP server will give {% data variables.product.prodname_copilot_short %} access to the most recently supported Terraform providers.

For more information, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).

## Next steps

When you're satisfied with the pilot, you can:

* Enable {% data variables.copilot.copilot_coding_agent %} in more organizations or repositories.
* Identify more use cases for {% data variables.copilot.copilot_coding_agent %} and train developers accordingly.
* Continue to collect feedback and measure results.

To assess the impact of a new tool, we recommend measuring the tool's impact on your organization's downstream goals. For a systematic approach to driving and measuring improvements in engineering systems, see {% data variables.product.company_short %}'s [Engineering System Success Playbook](https://resources.github.com/engineering-system-success-playbook/).
