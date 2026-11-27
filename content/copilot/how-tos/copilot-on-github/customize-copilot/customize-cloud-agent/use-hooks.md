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

1. Commit the file to the repository and merge it into the default branch. Your hooks will now run during agent sessions.

## Troubleshooting

{% data reusables.copilot.cloud-agent.troubleshoot-hooks %}

* **Test hooks locally** by piping test input into your hook to validate its behavior:

  > [!WARNING]
  > Hook input can include sensitive data (for example, prompts, tool arguments, or credentials). Use sanitized test payloads, avoid real secrets, and remove or redact any temporary full-input logging after debugging.

  ```shell copy
  # Create test input
  echo '{"timestamp":1704614400000,"cwd":"/tmp","toolName":"bash","toolArgs":"{\"command\":\"ls\"}"}' | ./my-hook.sh

  # Check exit code
  echo $?

  # Validate output is valid JSON
  ./my-hook.sh | jq .
  ```

## Further reading

* [AUTOTITLE](/copilot/reference/hooks-reference)
* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github)
* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-cli)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
