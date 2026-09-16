---
title: Built-in skills for the GitHub Copilot app
shortTitle: Built-in skills
allowTitleToDifferFromFilename: true
intro: 'Use this reference to find built-in agent skills available in the {% data variables.copilot.github_copilot_app %}.'
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: reference
category:
  - Author and optimize with Copilot
---

This page lists {% data variables.product.github %}-provided built-in agent skills for the {% data variables.copilot.github_copilot_app %}. It does not list agent skills from plugins, repositories, organizations, or personal customizations.

## Built-in skills in the {% data variables.copilot.github_copilot_app %}

Some built-in skills are available as slash commands. When available in your current context, you can run them by typing `/<skill-id>` in the prompt box, for example `/orchestrate`. Other built-in skills may run automatically as part of specific app workflows or when you mention a relevant task in your prompt.

| Skill ID | When to use |
| --- | --- |
| `af` | Find installable MCP servers, tools, skills, and agents by searching ARD Agent Finder. Invoke this skill with `/af`. See [AUTOTITLE](/copilot/concepts/context/mcp#agent-finder). |
| `agent-merge` | Follow up on review comments, failing checks, and merge conflicts after agent merge is enabled for a pull request. The agent merge workflow invokes this skill automatically. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests#merging-a-pull-request). |
| `create-canvas` | Create and troubleshoot canvas extensions in the app side panel, including actions, inputs, rendered content, and setup. Invoke this skill with `/create-canvas`. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions). |
| `orchestrate` | Coordinate work across sessions and repositories by creating and guiding child sessions. Invoke this skill with `/orchestrate`. |
| `pr-stack` | Create and manage a stack of dependent pull requests, with one child session for each layer. Invoke this skill with `/pr-stack`. See [AUTOTITLE](/pull-requests/get-started/about-stacked-prs). |
| `customize-cloud-agent` | Set up the cloud agent environment, including `copilot-setup-steps.yml`, preinstalled tools and dependencies, runners, and settings. The app invokes this skill when your prompt asks to set up or customize the cloud agent environment. |

## Further reading

* [AUTOTITLE](/copilot/reference/github-copilot-app-reference/slash-commands)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app)
* [AUTOTITLE](/copilot/concepts/agents/about-agent-skills)
