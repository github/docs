---
title: Enhancing GitHub Copilot agent mode with MCP
allowTitleToDifferFromFilename: true
shortTitle: Enhance agent mode with MCP
intro: 'Learn how to use the Model Context Protocol (MCP) to expand the agentic capabilities of {% data variables.copilot.copilot_chat_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/tutorials/enhancing-copilot-agent-mode-with-mcp
contentType: tutorials
---

{% data reusables.copilot.mcp-availability-and-preview-note %}

## About {% data variables.product.prodname_copilot_short %}'s agentic capabilities and MCP

{% data variables.product.prodname_copilot_short %}'s agentic capabilities refer to the ability to **work independently** by executing multi-step workflows without constant guidance, **make decisions** by choosing appropriate tools and approaches based on context, and **iterate and adapt** by adjusting its approach according to feedback and results. You can access these capabilities by using agent mode.

When combined with Model Context Protocol (MCP) servers, agent mode becomes significantly more powerful, giving {% data variables.product.prodname_copilot_short %} access to external resources without switching context. This enables {% data variables.product.prodname_copilot_short %} to complete agentic "loops," where it can dynamically adapt its approach by autonomously finding relevant information, analyzing feedback, and making informed decisions. With MCP, {% data variables.product.prodname_copilot_short %} can complete a task with minimal human intervention, continuously adjusting its strategy based on what it discovers.

### Benefits of combining MCP with agent mode

When you use MCP servers with agent mode, you unlock several key benefits:

* **Extended context**: MCP servers provide {% data variables.product.prodname_copilot_short %} with access to external data sources, APIs, and tools.
* **Reduced manual effort**: {% data variables.product.prodname_copilot_short %} can perform tasks like creating issues and running workflows while you focus on higher-value tasks.
* **Seamless integration**: {% data variables.product.prodname_copilot_short %} can work on a task involving multiple tools and platforms without switching contexts or requiring custom integrations.

## Best practices for using MCP with agent mode

Follow these best practices to get the most out of combining MCP servers with agent mode.

### Prompting strategies

* **Be specific about goals**: Clearly define what you want to accomplish in your prompt and what output you want.
* **Provide context**: Include relevant background information about your project and requirements, including links to external resources that {% data variables.product.prodname_copilot_short %} can access.
* **Set boundaries**: Specify any constraints or limitations for the task. For example, if you want {% data variables.product.prodname_copilot_short %} to only plan a new feature and not make any changes yet, specify that. You can also limit which MCP tools are enabled.
* **Request confirmations**: Ask {% data variables.product.prodname_copilot_short %} to confirm its understanding before proceeding with significant changes.
* **Use prompt files or custom instructions**: You can create prompt files or custom instructions files to guide {% data variables.product.prodname_copilot_short %} on how to behave for different MCP servers. See [AUTOTITLE](/copilot/concepts/about-customizing-github-copilot-chat-responses).

### MCP server use

* **Choose relevant servers**: Select and enable MCP servers that align with your specific workflow needs.
* **Start simple**: Begin with a few well-established MCP servers before adding more complex integrations.
* **Test connectivity**: Ensure all MCP servers are properly configured and accessible before starting agent mode tasks.

### Security considerations

* **Use OAuth when available**: For MCP servers like {% data variables.product.prodname_dotcom %} MCP, prefer OAuth authentication over {% data variables.product.pat_generic_plural %}. See [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server#remote-mcp-server-configuration-with-oauth).
* **Limit permissions**: Only grant MCP servers the minimum permissions necessary for your tasks.
* **Review connections**: Regularly audit which MCP servers have access to your development environment.
* **Monitor activity**: Keep track of what actions {% data variables.product.prodname_copilot_short %} performs through MCP servers.
* **Prevent secret leaks**: Push protection blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the {% data variables.product.github %} MCP server. This is currently available for public repositories only. See [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

## Example scenario: Implementing accessibility compliance

> [!NOTE] The following scenario is only meant to demonstrate the patterns and strategies you can use with agent mode and MCP servers to complete a task from start to finish; the scenario, prompts and responses are just examples.

Let's say your team has received feedback that your customer portal needs to be updated to comply with the latest accessibility standards. You've been tasked with improving accessibility across the application with the following guidance:

* A list of specifications defined by the design team.
* Issues created in your project's repository after an accessibility audit.

You can use {% data variables.product.prodname_copilot_short %} agent mode to leverage multiple MCP servers to efficiently implement accessibility improvements.

The scenario below demonstrates how you can use separate prompts for different phases (research, planning, implementation, and validation), resulting in multiple agentic "loops" loosely aligned with software development lifecycle phases. This approach creates natural checkpoints where you can review progress, provide feedback, and adjust your requirements before {% data variables.product.prodname_copilot_short %} continues to the next phase.

* [Prerequisites](#prerequisites)
* [Setting up MCP servers](#setting-up-mcp-servers)
* [Step 1: Research loop - Analyzing accessibility requirements](#step-1-research-loop---analyzing-accessibility-requirements)
* [Step 2: Planning loop - Accessibility implementation strategy](#step-2-planning-loop---accessibility-implementation-strategy)
* [Step 3: Implementation loop - Making accessibility improvements](#step-3-implementation-loop---making-accessibility-improvements)
* [Step 4: Testing loop - Accessibility verification with Playwright](#step-4-testing-loop---accessibility-verification-with-playwright)
* [Step 5: Updating {% data variables.product.github %} issues](#step-5-updating-github-issues)
* [Further reading](#further-reading)

### Prerequisites

Before using agent mode with MCP, ensure you have:

* An IDE with {% data variables.product.prodname_copilot_short %} integration and MCP support (such as {% data variables.product.prodname_vscode %})
* Agent mode enabled
* Access to the required MCP servers you want to use

### Setting up MCP servers

First, you need to configure the MCP servers that you anticipate {% data variables.product.prodname_copilot_short %} will need. For this example scenario, we'll use:

* **{% data variables.product.github %} MCP server**: Configure the {% data variables.product.github %} MCP server to enable {% data variables.product.prodname_copilot_short %} to access your repository, examine your codebase, research existing issues, create branches, and manage pull requests. See [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server).

* **Figma MCP server**: Configure the Figma MCP server to allow {% data variables.product.prodname_copilot_short %} to access design files that include accessibility specifications, such as color contrast requirements, focus states, and interaction patterns. See [Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) or try out the [Dev Mode MCP server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server) in open beta.

* **Playwright MCP server**: Set up the Playwright MCP server to enable {% data variables.product.prodname_copilot_short %} to write and run automated accessibility tests, including screen reader compatibility and keyboard navigation tests. See [mcp-playwright](https://github.com/executeautomation/mcp-playwright).

### Step 1: Research loop - Analyzing accessibility requirements

Prompt {% data variables.product.prodname_copilot_short %} to analyze both accessibility requirements and existing accessibility-related {% data variables.product.github %} issues in the project.

In your prompt, include a link to the Figma file. In order for Copilot to successfully read and analyze the design specifications, select a specific node or layer in the file, so that the node ID is included in the URL.

**Example prompt**: `I need to make our customer portal WCAG 2.1 AA compliant. Use the Figma MCP to analyze our design specifications at https://figma.com/design/DESIGN-FILE-FOR-ACCESSIBILITY-SPECS?node-id=NODE_ID for accessibility requirements. Also use the GitHub MCP to find open GitHub issues with the labels accessibility or WCAG in the customer-portal repository. Then sort them into categories and list each issue that falls under the category with the issue title and number.`

**Example response from {% data variables.product.prodname_copilot_short %}:**

{% data variables.product.prodname_copilot_short %} should respond first by requesting to run tools from the Figma and GitHub MCP servers. Once you allow it, {% data variables.product.prodname_copilot_short %} will analyze the Figma design specifications and search for and organize GitHub issues into categories.

For example, {% data variables.product.prodname_copilot_short %} may identify color contrast as a category based on finding multiple issues about it.

> * Color Contrast Issues
>   * Issue #134: Dashboard text contrast ratio below 4.5:1
>   * Issue #156: Form error states don't meet contrast requirements

This gives you a comprehensive overview of accessibility requirements that you can then have {% data variables.product.prodname_copilot_short %} prioritize and create a plan for.

### Step 2: Planning loop - Accessibility implementation strategy

Next, ask {% data variables.product.prodname_copilot_short %} to create a detailed implementation plan.

**Example prompt**: `Based on your accessibility analysis of our Figma designs and GitHub issues, create a focused implementation plan for an immediate pull request addressing the highest priority accessibility issues. Don't make any changes yet. Also suggest follow-up issues we should create for the remaining Figma specifications.`

**Example response from {% data variables.product.prodname_copilot_short %}:**

{% data variables.product.prodname_copilot_short %} will respond by creating a prioritized implementation plan focused on high-impact accessibility issues for an immediate pull request while suggesting follow-up issues for remaining work.

For example, {% data variables.product.prodname_copilot_short %} may identify what needs to be done to fix the issues in the color contrast category.

> * **1. Color Contrast Fixes:**
>   * Update text color variables in variables.scss to ensure 4.5:1 contrast ratio for all normal text
>   * Modify UI component colors in DashboardCard.vue and other primary components to meet 3:1 contrast ratio
>   * Prioritize fixing Issue #134 (Dashboard text contrast) and Issue #156 (Form error states)

You can ask {% data variables.product.prodname_copilot_short %} to adjust the plan based on what you want to focus on. The outcome is a plan you are comfortable with that you can now ask {% data variables.product.prodname_copilot_short %} to implement.

### Step 3: Implementation loop - Making accessibility improvements

After reviewing the plan, prompt {% data variables.product.prodname_copilot_short %} to begin implementing accessibility fixes.

**Example prompt**: `Create a new branch and implement the critical accessibility fixes according to your proposed implementation plan. Focus on the top three categories that you identified as highest priority. Create a pull request with proper references to the issues being fixed.`

**Example response from {% data variables.product.prodname_copilot_short %}:**

{% data variables.product.prodname_copilot_short %} will respond by executing the implementation plan, making targeted code changes to address the identified accessibility issues and creating a pull request.

For example, {% data variables.product.prodname_copilot_short %} may create a new branch called `fix/critical-accessibility-issues` and make changes to address the color contrast issues.

> * Fixed dashboard text contrast issues (Issue #134):
>   * Updated text color variables in `src/styles/variables.scss` from #767676 to #595959
>   * Modified dark text on light gray backgrounds in `DashboardCard.vue` to ensure 4.5:1 ratio
>
>I've opened pull request #213 with these changes.

### Step 4: Testing loop - Accessibility verification with Playwright

You can prompt {% data variables.product.prodname_copilot_short %} to create and run accessibility tests using the Playwright MCP.

**Example prompt**: `Create focused accessibility tests for the components we've updated in the pull request. Use the Playwright MCP.`

**Example response from {% data variables.product.prodname_copilot_short %}:**

{% data variables.product.prodname_copilot_short %} will respond by developing accessibility tests and, if necessary, creating a Playwright configuration file.

For example, {% data variables.product.prodname_copilot_short %} may create a test file around text contrast.

> **Test implementation:**
>
> * Created a targeted test file in `tests/accessibility/`:
>   * `contrast.spec.ts` - Validates text contrast ratios

Once the tests are created, {% data variables.product.prodname_copilot_short %} will ask for permission to use various tools from the Playwright MCP to run the tests. Note that sometimes Copilot may do additional testing that you didn't necessarily ask for; you can try to prevent this by adjusting your prompt to be stricter.

### Step 5: Updating {% data variables.product.github %} issues

Finally, prompt {% data variables.product.prodname_copilot_short %} to update the {% data variables.product.github %} issues that have been addressed in the pull request, and create follow-up issues.

**Example prompt**: `Update the GitHub issues we've fixed in the pull request with comments summarizing the changes. Create the follow-up issues you suggested for the remaining accessibility work.`

**Example response from {% data variables.product.prodname_copilot_short %}:**

{% data variables.product.prodname_copilot_short %} will respond by asking for permission to use the necessary tools from the {% data variables.product.github %} MCP server. It will then update the {% data variables.product.github %} issues with detailed comments and create structured follow-up issues for remaining work.

For example, {% data variables.product.prodname_copilot_short %} will add comments in the color contrast issues initially identified in the research step.

> **Updated issues with comments:**
>
> * Issue #134: "Dashboard text contrast ratio below 4.5:1"
>   * Comment: "Fixed in PR #213 by updating text color variables in variables.scss and DashboardCard component. All dashboard text now meets 4.5:1 contrast ratio, verified by automated tests."

Now you can review the pull request and make any adjustments. Once you have verified that the changes are valid, you can merge as with any other pull request.

## Hands-on practice

Try the [Integrate MCP with {% data variables.product.prodname_copilot %}](https://github.com/skills/integrate-mcp-with-copilot/) Skills exercise for practical experience integrating MCP with {% data variables.product.prodname_copilot %}.

## Further reading

* **MCP fundamentals**: For more information about setting up and configuring MCP servers, see [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp).
