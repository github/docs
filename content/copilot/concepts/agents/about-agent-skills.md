---
title: About agent skills
shortTitle: Agent skills
intro: 'Skills allow {% data variables.product.prodname_copilot_short %} to perform specialized tasks.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><br>{% data reusables.gated-features.copilot-cli %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Learn about Copilot
  - Learn about Copilot CLI
---

> [!NOTE]
> Agent Skills work with {% data variables.copilot.copilot_coding_agent %}, the {% data variables.copilot.copilot_cli %} and agent mode in {% data variables.product.prodname_vscode %} Insiders. Support in the stable version of {% data variables.product.prodname_vscode_shortname %} is coming soon.

## About agent skills

Agent skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. The Agent Skills specification is an [open standard](https://github.com/agentskills/agentskills), used by a range of different AI systems.

You can create your own skills to teach {% data variables.product.prodname_copilot_short %} to perform tasks in a specific, repeatable way—or use skills shared online, for example in the [`anthropics/skills`](https://github.com/anthropics/skills) repository or {% data variables.product.company_short %}'s community created [`github/awesome-copilot`](https://github.com/github/awesome-copilot) collection.

{% data variables.product.prodname_copilot_short %} supports:

* Project skills, stored in your repository (`.github/skills` or `.claude/skills`)
* Personal skills, stored in your home directory and shared across projects (`~/.copilot/skills` or `~/.claude/skills`) ({% data variables.copilot.copilot_coding_agent %} and {% data variables.copilot.copilot_cli %} only)

Support for organization-level and enterprise-level skills is coming soon.

## Next steps

To create an agent skill, see:

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-skills)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-skills)
* [AUTOTITLE](/copilot/reference/customization-cheat-sheet)
