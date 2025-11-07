# Docs changelog

**24 October 2025**

To support the enterprise roles and teams public preview, we:

* Created a new concepts category in the [enterprise admin](https://docs.github.com/en/enterprise-cloud@latest/admin) docs aimed at onboarding administrators, including new articles on roles and teams in an enterprise.
* Built a user journey for setting up roles, teams, and apps to simplify administration, starting with [Identifying the roles required by your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements).
* Published how-to content on [creating custom roles](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/create-custom-roles), [creating enterprise teams](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams), and [assigning roles](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles).
* Communicated new conceptual frameworks and best practices for enterprise accounts, including [Best practices for organizing work in your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/best-practices) and [Enterprise accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/enterprise-accounts).

<hr>

**17 October 2025**

We have updated the [Account and profile](https://docs.github.com/en/account-and-profile) and [Subscriptions and notifications](https://docs.github.com/en/subscriptions-and-notifications) docs for improved usability, scannability, and information architecture.

To support accomplishing tasks without context switching or sifting through unrelated content, articles are now organized by content type and focused on jobs-to-be-done. Additionally, related information is now linked from content type to content type.

<hr>

**14 October 2025**

We've added a new tutorial about how to [Review AI-generated code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code). The article gives techniques to verify and validate AI-generated code, and also suggests how Copilot can help with reviews.

<hr>

**13 October 2025**

To help large enterprises keep their automations secure and consistent across many organizations, we published [Automating app installations in your enterprise's organizations](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-github-apps-for-your-enterprise/automate-installations). This is one of the most requested features from customer feedback.

The tutorial shows how to manage installations and run automations using enterprise-owned apps and the new apps installation API. Security-conscious enterprises will see that Apps maximize security by providing short-lived, minimally scoped tokens at every stage.



<hr>

**1 October 2025**

We’ve updated the Spark documentation to support the launch for Copilot Enterprise users, making it easier to understand and enable Spark:

* Conceptual article: [About GitHub Spark](https://docs.github.com/en/copilot/concepts/spark#enterprise-considerations) now includes enterprise considerations (governance, billing, infrastructure, and benefits).
* How-to: [Managing GitHub Spark in your enterprise](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-spark) is streamlined to prerequisites and enablement steps, with links to related policies.

<hr>

**29 September 2025**

Claude Sonnet 4.5 has been released as a Public Preview. At the time of launch, it will be available on the following platforms: 

- **Copilot Chat** 
  - Released for GitHub.com, VS Code, GitHub Mobile
  - With: Copilot Pro, Pro+, Business, and Enterprise
- **Copilot Coding Agent**
  - With: Copilot Pro, and Copilot Pro+ 
- **Copilot CLI**
  - With: Copilot Pro, Pro+, Business, and Enterprise

The following articles have been updated: 

- [About GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent)
- [Supported AI models in GitHub Copilot](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
- [Hosting of models for GitHub Copilot Chat](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
- [AI model comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)

<hr>

**26 September 2025**

To coincide with additional functionality for Copilot coding agent being added to the GitHub Mobile app, we've updated the following articles:

* [Using GitHub Copilot to work on an issue](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/assign-copilot-to-an-issue#assigning-an-issue-to-copilot-on-github-mobile)
* [Tracking GitHub Copilot's sessions](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions#tracking-sessions-from-github-mobile)
* [Asking GitHub Copilot to create a pull request](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#asking-copilot-to-create-a-pull-request-from-github-mobile)

<hr>

**25 September 2025**

GitHub Copilot CLI has been released as a public preview. It allows you to use Copilot directly from your terminal. You can use it to answer questions, write and debug code, and interact with GitHub.com. For example, you can ask Copilot to make some changes to a project and create a pull request.

GitHub Copilot CLI gives you quick access to a powerful AI agent, without having to leave your terminal. It can help you complete tasks more quickly by working on your behalf, and you can work iteratively with GitHub Copilot CLI to build the code you need.

See:

* [About GitHub Copilot CLI](https://docs.github.com/copilot/concepts/agents/about-copilot-cli)
* [Using GitHub Copilot CLI](https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli)

<hr>

**25 September 2025**

We've updated the documentation for the GA release of [Copilot Spaces](https://github.com/copilot/spaces). Spaces allow you to organize and centralize content and resources in order to ground Copilot Chat's responses in that context and share knowledge across teams. You can now also access Copilot Spaces in your IDE via the GitHub MCP server. 

See the updated docs: 
* [About organizing and sharing context with GitHub Copilot Spaces](https://docs.github.com/copilot/concepts/context/spaces)
* [Creating GitHub Copilot Spaces](https://docs.github.com/copilot/how-tos/provide-context/use-copilot-spaces/create-copilot-spaces)
* [Using GitHub Copilot Spaces](https://docs.github.com/copilot/how-tos/provide-context/use-copilot-spaces/use-copilot-spaces)

<hr>

**24 September 2025**

Until now, assigning Copilot coding agent to an issue was limited to the same repository as the issue. 

You can now: 

* Assign Copilot coding agent to work in a different repository, supporting workflows where issues and code files are managed separately. 
* Provide additional instructions to tailor the agent's output to your requirements. 
* Choose the base branch for the agent to use. 
 
These changes provide a more flexible, transparent, and user-friendly experience for managing automated coding tasks with Copilot coding agent. 

See the updated docs: [Using GitHub Copilot to work on an issue](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/assign-copilot-to-an-issue#assigning-an-issue-to-copilot).

<hr>

**23 September 2025**

We've added new documentation for Spark that answers some common customer questions, helps customers troubleshoot known issues, and guides users on the best ways to prompt and provide context to Spark.

See:
- [About GitHub Spark](https://docs.github.com/copilot/concepts/spark)
- [Troubleshooting common issues with GitHub Spark](https://docs.github.com/copilot/how-tos/troubleshoot-copilot/troubleshoot-spark)
- [Write effective prompts and provide useful context for Spark](https://docs.github.com/copilot/tutorials/spark/prompt-tips)

<hr>

**17 September 2025**

We've added information about the GitHub MCP Registry, and guidance on how to use it in VS Code.

See [About the GitHub MCP Registry](https://docs.github.com/copilot/concepts/context/mcp#about-the-github-mcp-registry) and [Using the GitHub MCP Registry](https://docs.github.com/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp#using-the-github-mcp-registry).

<hr>

**17 September 2025**

We've added documentation for expanded features for reusing workflow configurations in GitHub Actions. 

You can now use YAML anchors and aliases to reuse pieces of content in a workflow. See [YAML anchors and aliases](https://docs.github.com/actions/concepts/workflows-and-actions/reusing-workflow-configurations#yaml-anchors-and-aliases). 

To keep the content focused on users' job-to-be-done, we simplified the procedures for [creating workflow templates for your organization](https://docs.github.com/actions/how-tos/reuse-automations/create-workflow-templates). In addition, we updated reference documentation for workflow templates with details on permissions, repository visibility rules, rules for the metadata file, and examples. See [Workflow templates](https://docs.github.com/actions/reference/workflows-and-actions/reusing-workflow-configurations#workflow-templates).

<hr>

**17 September 2025**

You can now publish your Spark app as "read-only." 

By default, data stored in Spark is shared across all users of the app. You can choose to publish your app as "read-only" if you want to showcase your app to others, but you don't want others to be able to edit or delete any stored data.

We've updated the [Spark documentation](https://docs.github.com/copilot/tutorials/build-apps-with-spark) accordingly.

<hr>

**15 September 2025**

We've updated the documentation for Copilot code review to clarify model usage for code review.

See [Responsible use of GitHub Copilot code review](https://docs.github.com/copilot/responsible-use/code-review#model-usage).

<hr>

**11 September 2025**

Copilot Chat in VS Code includes a "Manage models" option which allows you to add models from a variety of LLM providers, such as Azure, Anthropic, Google, and xAI. By installing the AI Toolkit for VS Code, you can install even more models from the "Manage models" option. We've updated the documentation to include details of how to use this new feature.

See [Changing the AI model for GitHub Copilot Chat](https://docs.github.com/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode).

<hr>

**11 September 2025**

You can now enable automatic Copilot code review with its own standalone repository rule. We've updated the documentation accordingly.

See [Configuring automatic code review by GitHub Copilot](https://docs.github.com/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review).

<hr>

**8 September 2025**

We've added a tutorial on planning a project with GitHub Copilot, including creating issues and sub-issues: [Planning a project with GitHub Copilot](https://docs.github.com/copilot/tutorials/plan-a-project). This tutorial provides step-by-step instructions on leveraging Copilot to plan a project from scratch.

Additionally, we've updated [Using GitHub Copilot to create issues](https://docs.github.com/copilot/how-tos/use-copilot-for-common-tasks/use-copilot-to-create-issues) with instructions to create sub-issues and to work with existing issues.

<hr>

**4 September 2025**

We've updated the documentation to remove references to Copilot coding guidelines.

Coding guidelines, which were previously deprecated, have now been removed as a way of customizing Copilot responses. You should now use Copilot custom instructions.

See: [Configure custom instructions for GitHub Copilot](https://docs.github.com/copilot/how-tos/configure-custom-instructions)

<hr>

**4 September 2025**

In addition to repository-wide custom instructions, specified in the `.github/copilot-instructions.md` file, Copilot Code Review now supports:

* Path-specific custom instructions, specified in `.github/instructions/**/NAME.instructions.md` files.
* Custom instructions specified in the organization settings for Copilot.

We have updated several articles in the GitHub documentation accordingly. We have also made changes to clarify the difference between the various types of custom instructions for Copilot Code Review, Copilot Chat, and Copilot Coding Agent.

For example, see: [Adding repository custom instructions for GitHub Copilot](https://docs.github.com/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=webui).

<hr>

**3 September 2025**

We’ve updated [Choosing your enterprise’s plan for GitHub Copilot](https://docs.github.com/copilot/get-started/choose-enterprise-plan) to better highlight the long-term benefits of the Copilot Enterprise (CE) plan. The updated content focuses on the key advantages of CE, such as increased access to premium requests and earlier availability of new models.

<hr>

**2 September 2025**

We've added documentation for support of Copilot code review in Xcode.

See: [Using GitHub Copilot code review](https://docs.github.com/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review?tool=xcode)

<hr>

**2 September 2025**

We've published a new customization library for GitHub Copilot: a curated collection of examples you can copy, adjust, and use to enhance your experience with Copilot. This library is designed to inspire and educate people on the options available to customize Copilot responses.

We've included examples of custom instructions (widely supported) and prompt files (supported in VS Code only). The examples cover scenarios such as debugging, onboarding, and accessibility. We look forward to adding more examples over time.

See: [Customization library](https://docs.github.com/copilot/tutorials/customization-library).

<hr>

**28 August 2025**

We've published an article about the new AI-powered issue intake tool, which automates incoming issue analysis and triage for OS maintainers.

See: [Triaging an issue with AI](https://docs.github.com/issues/tracking-your-work-with-issues/administering-issues/triaging-an-issue-with-ai).

<hr>

**26 August 2025**

xAI Grok Code Fast 1 is now available in public preview for GitHub Copilot. Grok Code Fast 1 is slowly rolling out to all paid Copilot plans and you will be able to access the model in Visual Studio Code (Agent, Ask, and Edit modes).

See: [Supported AI models in GitHub Copilot](https://docs.github.com/copilot/reference/ai-models/supported-models).

<hr>

**15 August 2025**

When interacting with the GitHub MCP server for a public repository, push protection blocks secrets from appearing in AI-generated responses and also prevents secrets from being included in any actions you perform, such as creating an issue.

See [Working with push protection and the GitHub MCP server](https://docs.github.com/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server).

<hr>

**12 August 2025**

OpenAI GPT-5 is now available in public preview for GitHub Copilot. GPT-5 is slowly rolling out to all paid Copilot plans and you will be able to access the model in GitHub Copilot Chat on github.com and Visual Studio Code (Agent, Ask, and Edit modes). 

See [Supported AI models in Copilot](https://docs.github.com/copilot/reference/ai-models/supported-models).

<hr>

**12 August 2025**

We’ve updated the documentation for Copilot repository custom instructions to go with the release that now brings this feature to the Eclipse IDE.

See: [Adding repository custom instructions for GitHub Copilot](https://docs.github.com/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=eclipse) and [About customizing GitHub Copilot Chat responses](https://docs.github.com/copilot/concepts/response-customization?tool=eclipse).

<hr>

**12 August 2025**

We have added a tutorial for using Copilot to create Mermaid diagrams at [Creating Diagrams](https://docs.github.com/copilot/tutorials/copilot-chat-cookbook/communicate-effectively/creating-diagrams).

<hr>

**4 August 2025**

To address common pain points that developers face when remediating a leaked secret, we created a new article, "[Remediating a leaked secret](https://docs.github.com/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/remediating-a-leaked-secret)". 

The new guide incorporates cross-platform GitHub tools, as well as opinionated guidance from GitHub's secret scanning team, to walk the developer through a thorough remediation process.

It also clearly communicates the risks of leaked secrets, the challenges of remediation, and the value of enabling [GitHub Secret Protection](https://docs.github.com/get-started/learning-about-github/about-github-advanced-security#github-secret-protection).

<hr>

**28 July 2025**

We have restructured the general "[Billing and payments](https://docs.github.com/billing)" articles to align with the Copilot and Actions docs. In addition, we've combined a few old "About" articles to directly answer common questions that new users have: [How GitHub billing works](https://docs.github.com/billing/get-started/how-billing-works) and [Introduction to billing and licensing](https://docs.github.com/billing/get-started/introduction-to-billing).

<hr>

**16 July 2025**

We've added documentation describing how to use the GraphQL API to create a new issue and, in the same request, assign the issue to Copilot coding agent.

See: [Using Copilot to work on an issue](https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/using-copilot-to-work-on-an-issue#assigning-an-issue-to-copilot-via-the-github-api).

<hr>

**16 July 2025**

We've updated the Copilot documentation to coincide with the release of an improved user interface for configuring the firewall for Copilot coding agent.

See: [Customizing or disabling the firewall for Copilot coding agent](https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

<hr>

**16 July 2025**

We've updated the Copilot docs to coincide with the release of issue form support for Copilot Chat. When you use Copilot Chat to create an issue, an issue form will be used if there's an appropriate one in the repo. Previously only issue templates were supported.

See [Using GitHub Copilot to create issues](https://docs.github.com/copilot/how-tos/github-flow/using-github-copilot-to-create-issues).

<hr>

**30 June 2025**

Many enterprise customers want to measure the downstream impact of Copilot on their company, looking beyond leading metrics like adoption and usage.

Inspired by [GitHub's latest guidance](https://resources.github.com/engineering-system-success-playbook/), we've published three guides that provide usecases, training resources, and metrics to help you plan and measure your rollout to achieve real-world goals, such as increasing test coverage.

Get started at [Achieving your company's engineering goals with GitHub Copilot](https://docs.github.com/copilot/get-started/achieve-engineering-goals).

<hr>

**27 June 2025**

We've published a new guide about how to combine use of GitHub Copilot's agent mode with Model Context Protocol (MCP) servers to complete complex tasks through agentic "loops" - illustrated through an accessibility compliance example. The guide also discusses best practices and benefits around using these two features together. See [Enhancing Copilot agent mode with MCP](https://docs.github.com/copilot/tutorials/enhancing-copilot-agent-mode-with-mcp).

<hr>

**27 June 2025**

We’ve published a new set of new documentation articles designed to help users make the most of the **Dependabot metrics page** in the organization’s security overview.

These clear, actionable guides help users:

- **[View metrics for Dependabot alerts](https://docs.github.com/enterprise-cloud@latest/code-security/security-overview/viewing-metrics-for-dependabot-alerts)**
  This article is aimed at security and engineering leads who want to learn how to access and interpret key metrics, so they can quickly assess their organization’s exposure and remediation progress.

- **[Understand your organization’s exposure to vulnerable dependencies](https://docs.github.com/enterprise-cloud@latest/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilites/about-your-exposure-to-vulnerable-dependencies)**
  In this article, security analysts and compliance teams get a deep dive into how vulnerable dependencies are tracked and what these numbers mean for their risk landscape.

- **[Prioritize Dependabot alerts using metrics](https://docs.github.com/enterprise-cloud@latest/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilites/prioritizing-dependabot-alerts-using-metrics)**
  This guide provides engineering managers and remediation teams with strategies for using metrics to focus the team’s efforts where they matter most, making remediation more efficient.

<hr>

**27 June 2025**

We've published a new scenario-based guide for Copilot: [Learning a new programming language with GitHub Copilot](https://docs.github.com/copilot/tutorials/learning-a-new-programming-language-with-github-copilot).

This guide is for developers who are proficient with at least one programming language and want to learn an additional language. It provides information about how you can use Copilot as your personalized learning assistant. It also provides many ready-made prompts that you can use when you are learning a new programming language.

<hr>

**25 June 2025**

GitHub Models launched [Pay-As-You-Go billing and Bring Your Own Key support](https://github.blog/changelog/2025-06-24-github-models-now-supports-moving-beyond-free-limits/). This provides real production usage for the first time and lays the foundation for Models to scale beyond a free sandbox.

See [About Billing for GitHub Models](https://docs.github.com/billing/managing-billing-for-your-products/about-billing-for-github-models) and [Using your own API keys in GitHub Models](https://docs.github.com/github-models/github-models-at-scale/set-up-custom-model-integration-models-byok).

<hr>

**23 June 2025**

We’ve restructured our documentation around Copilot’s AI models to make it easier for users to understand, choose, and configure models across clients and plans. See [Supported AI models in Copilot](https://docs.github.com/copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot) and [Choosing the right AI model for your task](https://docs.github.com/copilot/reference/ai-models/model-comparison).

<hr>

**18 June 2025**

We've published a new responsible AI article for Copilot: [Responsible use of GitHub Copilot code completion](https://docs.github.com/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-completion). This provides RAI transparency information for this feature of GitHub Copilot.

<hr>

**13 June 2025**

We've published a new article for people learning to code: [Developing your project locally](https://docs.github.com/get-started/learning-to-code/developing-your-project-locally).

This tutorial helps learners gain core skills needed to set up any project locally by working through an example client-side application using HTML, CSS, and JavaScript. The goal is to help new coders use GitHub tools to recognize patterns across different technologies and build confidence in their ability to set up any project locally.

<hr>

**13 June 2025**

To manage System for Cross-domain Identity Management (SCIM) integration with confidence, customers need to understand the different types of deprovisioning, the actions that trigger them, and their options for reinstating deprovisioned users.

We've published a new article to answer questions around suspending and reinstating Enterprise Managed Users, or users where SCIM is enabled on GitHub Enterprise Server: [Deprovisioning and reinstating users with SCIM](https://docs.github.com/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/deprovisioning-and-reinstating-users).

<hr>

**11 June 2025**

We've added a new scenario-based guide for the Builder persona: [Using Copilot to explore a codebase](https://docs.github.com/copilot/tutorials/using-copilot-to-explore-a-codebase).

<hr>

**24 April 2025**

To help learners feel confident they are building real coding skills while using Copilot, we published [Setting up Copilot for learning to code](https://docs.github.com/get-started/learning-to-code/setting-up-copilot-for-learning-to-code).

This article helps learners take their first steps in coding with Copilot acting as a tutor, rather than a code completion tool. Configuring Copilot for learning emphasizes skill development and gives learners a way to use Copilot as a daily tool to foster learning and coding independence.
