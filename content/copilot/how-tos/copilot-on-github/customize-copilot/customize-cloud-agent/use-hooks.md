---
title: Customize agent workflows with hooks
shortTitle: Use hooks
intro: 'Run automated checks—like linting, formatting, or security scans—at key points during agent execution to enforce quality standards.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/use-hooks
  - /copilot/how-tos/use-copilot-agents/cloud-agent/use-hooks
---

{% data reusables.copilot.cloud-agent.hooks-intro %}

## Creating a hook in a repository on {% data variables.product.github %}

1. Create a new `NAME.json` file (where `NAME` describes the purpose of the file) in the `.github/hooks/` folder of your repository.

   > [!IMPORTANT]
   > The hooks configuration file **must be present** on your repository's default branch to be used by {% data variables.copilot.copilot_cloud_agent %}.

{% data reusables.copilot.cloud-agent.create-hooks-instructions %}

## Troubleshooting

{% data reusables.copilot.cloud-agent.troubleshoot-hooks %}

## Further reading

* [AUTOTITLE](/copilot/reference/hooks-reference)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment)
