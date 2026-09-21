---
title: Where to use GitHub Copilot
shortTitle: Where to use Copilot
intro: 'Choose where to work with {% data variables.product.prodname_copilot %}, from understanding an issue to writing, reviewing, testing, and shipping code.'
versions:
  feature: copilot
contentType: get-started
category:
  - Learn about Copilot
---

Use {% data variables.product.prodname_copilot %} in the tools you already use to plan, build, review, test, and ship software.

The {% data variables.copilot.github_copilot_app %} is the best place to do it all in one workflow: manage agent-driven work across parallel tasks, coordinate work across repositories, and keep the browser, terminal, and pull request lifecycle connected in one place.

You can also ask questions in your browser, get suggestions while editing code in your IDE, work from the terminal, or build your own {% data variables.product.prodname_copilot_short %}-powered tools with the SDK.

If you’re not sure where to start, choose a surface based on the coding work you want to do now. Surfaces can have overlapping use cases: some support broad, multi-step workflows, while others focus on specific tasks.

## Where you can use {% data variables.product.prodname_copilot_short %}

| Where | Use it for | Get started |
| ----- | ---------- | ----------- |
| **{% data variables.copilot.github_copilot_app %}** | Managing your developer and agent-driven work across parallel tasks, multiple repositories, and the pull request lifecycle in one dedicated workspace. | [AUTOTITLE](/copilot/get-started/quickstart-copilot-app) |
| **{% data variables.copilot.copilot_cli %}** | Working with {% data variables.product.prodname_copilot_short %} from the terminal, including repeatable command-line workflows. | [AUTOTITLE](/copilot/get-started/cli-quickstart) |
| **Your IDE**<br>({% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_jetbrains_ides %}, Eclipse, and XCode) | Getting inline suggestions, chatting about nearby code, and using an agent that can edit files for you. | [AUTOTITLE](/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide) |
| **{% data variables.copilot.copilot_sdk %}** | Building custom applications that use the same primitives as {% data variables.product.prodname_copilot_short %}. | [AUTOTITLE](/copilot/get-started/sdk-quickstart) |
| **{% data variables.product.github %} website** | Asking questions about repositories, issues, and pull requests, or assigning work to an agent. | [AUTOTITLE](/copilot/get-started/quickstart-for-using-github-copilot-on-github-com) |
| **{% data variables.product.prodname_mobile %}** | Chatting with {% data variables.product.prodname_copilot_short %} while away from your main development environment. | [AUTOTITLE](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile) |
| **{% data variables.product.prodname_desktop %}** | Getting help with commit messages and summaries. | [AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-copilot-in-github-desktop) |

To check which {% data variables.product.prodname_copilot_short %} features are available to your personal account, go to your {% data variables.product.prodname_copilot_short %} settings at [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text).

To compare support across IDEs, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix).

## Which one is right for me?

You do not need to use every surface. Choose the one closest to the work you are doing now.

If you are not sure where to start, use {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website. There is nothing to install, and you can ask questions about a repository, issue, or pull request you already have open.

Use these common development contexts to choose a surface:

* **Coordinating agent work**: Use the {% data variables.copilot.github_copilot_app %} when you want one place to coordinate agent work, manage parallel workstreams, work across multiple repositories, and keep the browser, terminal, and pull request lifecycle connected.
* **Running commands**: Use {% data variables.copilot.copilot_cli %} when you want to work in the terminal, run complex terminal commands, and execute tasks in parallel. For agent tasks that run commands, use cloud or local sandboxes to control where commands run and what they can access.
* **Writing code**: Use {% data variables.product.prodname_copilot %} in your IDE when you want to write and refine your code interactively.
* **Extending your own tools**: Use {% data variables.copilot.copilot_sdk %} when you are building an application or internal workflow that calls {% data variables.product.prodname_copilot_short %} directly.
* **Planning a change**: Use the {% data variables.product.github %} website when the work starts from an issue, pull request, or unfamiliar repository.
* **Checking work away from your desk**: Use {% data variables.product.prodname_mobile %} when you need to ask a quick question from a mobile device.

You can switch surfaces later, often without starting over. For example, you might understand an issue in the web interface, ask an agent to make a change, review the pull request in your IDE, and then follow up from the terminal.

## How the surfaces work together

Some context, permissions, and configuration can carry between surfaces. The settings and context that apply depend on the {% data variables.product.prodname_copilot_short %} feature and the surface you use.

Where supported, your plan, custom instructions, agent skills, and connected MCP servers apply across the places where you use {% data variables.product.prodname_copilot_short %}, so you can configure them once and use them in different parts of your workflow.

A single piece of work can move between surfaces. For example, you can start with an issue on {% data variables.product.github %}, assign it to {% data variables.copilot.copilot_cloud_agent %}, track the work in the {% data variables.copilot.github_copilot_app %}, review the pull request in your IDE, and merge it in the web interface.

You can also start {% data variables.product.prodname_copilot_short %} working on a task in your terminal, then continue the same session in your browser or on your mobile device.

The surfaces also share the same foundation. The {% data variables.product.prodname_copilot_short %} experiences you use across surfaces are all powered by the same SDK and platform primitives. You can use that same SDK to build {% data variables.product.prodname_copilot_short %} into your own applications, tools, and workflows, so custom integrations and first-party {% data variables.product.prodname_copilot_short %} experiences all work with the same underlying capabilities.

Your choices hold across the workflow, including:

* **Which model**: Different models suit different kinds of work, and you can switch models for chat and agents. See [AUTOTITLE](/copilot/how-tos/use-ai-models/change-the-chat-model).
* **Which agents**: {% data variables.product.prodname_copilot_short %} agents and agents from other providers work in the same repositories, open pull requests, and go through review. {% data variables.product.prodname_copilot_short %} applies the same security protections, mitigations, and limitations to third-party agents as it does to {% data variables.copilot.copilot_cloud_agent %}. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent) and [AUTOTITLE](/copilot/concepts/agents/about-third-party-coding-agents).
* **What {% data variables.product.prodname_copilot_short %} can see**: Custom instructions, agent skills, and MCP servers connect {% data variables.product.prodname_copilot_short %} to your conventions and to the tools your team uses. See [AUTOTITLE](/copilot/concepts/context/mcp).
* **What {% data variables.product.prodname_copilot_short %} remembers**: For supported features, {% data variables.copilot.copilot_memory %} can reuse repository facts and your preferences in later work. See [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

For organizations, administrator policies apply across most surfaces developers use. See [AUTOTITLE](/copilot/how-tos/administer-copilot).

## Next steps

* Compare the available {% data variables.product.prodname_copilot_short %} plans. See [AUTOTITLE](/copilot/get-started/plans).
