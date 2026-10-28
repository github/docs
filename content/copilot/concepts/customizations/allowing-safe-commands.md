---
title: Allowing safe commands to run without manual approval
shortTitle: '{% data variables.copilot.assisted_permissions_caps %}'
allowTitleToDifferFromFilename: true
intro: 'The {% data variables.copilot.assisted_permissions %} option reduces manual approval prompts by using a large language model to assess permission requests.'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/agents/allowing-safe-commands
contentType: concepts
category:
  - Learn about Copilot
---

## Introduction

When {% data variables.product.prodname_copilot_short %} works on a task, it often needs to take actions that could change your system, such as running shell commands, editing files, or accessing URLs. You can choose how permission requests for these actions are handled.

Answering approval prompts keeps you in control, but it can slow you down, especially at the start of a session when {% data variables.product.prodname_copilot_short %} needs to establish which actions it's allowed to take. To reduce the number of prompts, you can grant {% data variables.product.prodname_copilot_short %} unconditional permissions—but doing so removes your oversight of individual actions.

{% data variables.copilot.assisted_permissions_caps %} is a middle ground between manual approval and granting broad permissions with an allow-all option. It uses a large language model to review permission requests and automatically approve actions it judges to be safe in the context of your task. In a standard interactive session, requests that still require approval are put to you.

> [!NOTE]
> {% data variables.copilot.assisted_permissions_caps %} is available in {% data variables.copilot.copilot_cli %}, {% data variables.product.prodname_vscode %}, and the {% data variables.copilot.github_copilot_app %}.

## Approval options

You can choose between three options that determine how much you want to be involved in approving the actions {% data variables.product.prodname_copilot_short %} takes. Existing deny rules and enterprise restrictions still apply. Requests that are already allowed by your permissions can run without a prompt or a model review.

* **Manual approval:** {% data variables.product.prodname_copilot_short %} asks for your approval when an action isn't already allowed, such as running a command that isn't read-only, editing a file, or accessing a URL. You can approve an action once, or for the rest of the session. This gives you the most oversight, but requires you to respond to the most prompts.

* **{% data variables.copilot.assisted_permissions_caps %}:** {% data variables.product.prodname_copilot_short %} uses a model to assess eligible permission requests and automatically approves those it judges to be safe. You are prompted when a request still needs your approval. This reduces prompts without granting blanket permission to run commands.

* **Unconditional approval:** {% data variables.product.prodname_copilot_short %} has broad permission to use tools, paths, and URLs without a model safety review or individual approval prompts. This is the most permissive option and removes your oversight of individual actions. This is the behavior you get in {% data variables.copilot.copilot_cli_short %} when you use the `--allow-all` (or `--yolo`) command line option, or the `/permissions allow-all` (or `/yolo`) slash command.

Your administrator can disable unconditional approval with `permissions.disableBypassPermissionsMode: "disable"` without disabling {% data variables.copilot.assisted_permissions %}. The separate `permissions.disableAssistedPermissionsMode: true` setting disables {% data variables.copilot.assisted_permissions %}. For more information, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#permissions).

## How {% data variables.copilot.assisted_permissions %} works

When you enable {% data variables.copilot.assisted_permissions %}, existing rules and human approvals are evaluated before a model review. For eligible requests that aren't already resolved—whether to run a command, access a path, or fetch a URL—the model assesses whether the action is safe and within the authority you gave for the task.

In {% data variables.copilot.copilot_cli_short %}, enterprise `ask` rules for shell commands, file reads, file writes, and URLs can be satisfied by model approval when the request is eligible for review. This means those rules do not always result in a prompt for your confirmation. Enterprise deny rules still apply.

{% data variables.copilot.assisted_permissions_caps %} does not review other tool calls that enterprise rules require you to approve, or requests to bypass local sandboxing. Those requests remain subject to the session's normal permission handling.

For requests it can review, the model makes a recommendation:

* If the model is confident that the request is safe, {% data variables.product.prodname_copilot_short %} approves it automatically and continues, without prompting you.
* If the model is not confident that the request is safe, {% data variables.product.prodname_copilot_short %} asks for your approval, as it would with manual approval.

If a safety review is unavailable or cannot evaluate a request, the request follows the session's normal permission handling.

> [!NOTE]
> In autopilot mode and non-interactive runs, requests that still require your approval are denied instead. When the safety review requires approval, its explanation is passed back to {% data variables.product.prodname_copilot_short %} so it can try a different approach. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/autopilot).

{% data variables.product.prodname_copilot_short %} selects the model used for the safety review, which can differ from the model you selected for your conversation. If the selected review model is unavailable, the review can use your session's active model instead. If you use your own model provider, the review uses your session's active model.

> [!IMPORTANT]
> {% data variables.copilot.assisted_permissions_caps %} reduces how often you're prompted, but it doesn't remove your responsibility for what {% data variables.product.prodname_copilot_short %} does. The model can make mistakes and approve dangerous or unintended actions. This feature is not a substitute for sandboxing or access restrictions. As with any automatic approval option, you should review the actions {% data variables.product.prodname_copilot_short %} takes, and consider running it in a sandbox or other isolated environment. For more information, see [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-cli#risk-mitigation).

## Using {% data variables.copilot.assisted_permissions %} in the {% data variables.copilot.github_copilot_app %}

To turn on {% data variables.copilot.assisted_permissions %} for a local session:

1. In the prompt box, open the mode menu, which shows the current mode, such as **Interactive**, **Plan**, or **Autopilot**.
1. Click **Tool permissions**, then select **Assisted**.

Your selection applies to the current session and is also saved as the default for new local sessions. It does not change other existing sessions. To change the default without changing the current session, open **Settings**, select **Sessions**, and choose **Assisted** under **Tool permissions**.

To turn on {% data variables.copilot.assisted_permissions %} for only the current active session, without changing the default, enter `/permissions assisted` in the prompt box. Enter `/permissions manual` to return that session to manual approval, or `/permissions show` to check its permission mode.

Tool permission controls are not available for cloud sessions. For sessions on a remote host, the available permission modes depend on what that host supports. Administrator restrictions still apply, even if you select **Assisted** as your default.

## Using {% data variables.copilot.assisted_permissions %} in {% data variables.copilot.copilot_cli %}

There are three ways to turn on {% data variables.copilot.assisted_permissions %}, depending on whether you want it for the session you're in, for every new session, or for a single automated run.

### Turning it on during an interactive session

Enter the following slash command:

```copilot copy
/permissions assisted
```

To return to manual approval, enter `/permissions manual`. To check which permission mode you're currently in, enter `/permissions show`. You can also enter `/permissions`, with no argument, to choose a mode from a list.

### Making it the default for new sessions

To make {% data variables.copilot.assisted_permissions %} your preferred mode for new interactive sessions, set `defaultPermissionMode` to `"assisted"` in your user configuration file (`~/.copilot/settings.json`). You can edit the file directly, or use the `/settings` slash command during a session. For more information, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#user-settings-copilotsettingsjson).

The setting applies to new interactive sessions only. If your administrator sets `permissions.defaultMode`, that managed default takes precedence over your preference. You can still choose a different mode for a session, such as with `/permissions manual`, if policy permits it.

Resumed sessions keep their saved permission mode, subject to current policy restrictions. The `--allow-all` or `--yolo` option takes precedence over either default if policy permits it. If the selected default is unavailable or blocked by policy, the CLI starts with manual approval.

To make manual approval your preferred default, set `defaultPermissionMode` to `"manual"`. If neither you nor your administrator has configured a default, new sessions can start in manual or assisted mode. Use `/permissions show` to check.

### Using it for a non-interactive run

When you run {% data variables.copilot.copilot_cli_short %} non-interactively—with the `-p` or `--prompt` option, or in an environment with no terminal attached, such as a CI/CD workflow—use the `--assisted-approval` command line option:

```shell copy
copilot -p "Fix the failing tests" --assisted-approval
```

You can also set the `COPILOT_ASSISTED_APPROVAL` environment variable to `true`, which is useful in automated environments where you can't easily change the command that's run.

This option is only for non-interactive runs. If you use it when starting an interactive session, the CLI exits with an error. To use {% data variables.copilot.assisted_permissions %} in an interactive session, use `/permissions assisted` or the `defaultPermissionMode` setting instead.

#### When to use the command line option

In a non-interactive run there is nobody available to answer approval prompts, so you would otherwise have to choose between two unappealing options. Without any permission options, {% data variables.product.prodname_copilot_short %} is denied anything that needs approval, and often can't finish the task. With `--allow-all-tools`, you grant blanket tool permissions without a model safety review.

`--assisted-approval` is the middle ground. Requests the safety review judges to be safe are approved automatically. If the review requires your approval, the request is denied and its explanation is passed back to {% data variables.product.prodname_copilot_short %} so it can try a different approach. Other requests that still require approval are also denied.

Consider using it when you want an unattended run—in a CI/CD workflow, a scheduled job, or a batch script—to complete real work without giving {% data variables.product.prodname_copilot_short %} unconditional permission to run any command.

For more information about running {% data variables.copilot.copilot_cli_short %} programmatically, see [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically).

> [!WARNING]
> When successfully enabled, `--assisted-approval` takes precedence over `--allow-all-tools`, but it does not change `--allow-all-paths` or `--allow-all-urls`. If you combine it with `--allow-all` (or `--yolo`), path and URL access can still be unrestricted even though {% data variables.copilot.assisted_permissions %} is enabled for tool requests.
>
> If {% data variables.copilot.assisted_permissions %} can't be turned on—because your enterprise settings block it, for example—the CLI writes a warning to standard error. It does not cancel a separate `--allow-all-tools` option that you supplied, so tool requests may still be approved without a safety review. Check for this warning in the output of automated runs.

### How {% data variables.copilot.assisted_permissions %} behaves in {% data variables.copilot.copilot_cli_short %}

* **Turning it on in a session affects only that session.** When you enter `/permissions assisted`, {% data variables.copilot.assisted_permissions %} stays on for the rest of that session, unless you turn it off. It doesn't affect any other sessions you currently have open. To apply it to future sessions, use the `defaultPermissionMode` setting described above.

* **You can switch to {% data variables.copilot.assisted_permissions %} at any time.** If you started a session with the most permissive setting (`--allow-all` or its alias `--yolo`), entering `/permissions assisted` switches you from unconditional approval to {% data variables.copilot.assisted_permissions %}.

* **You can turn on {% data variables.copilot.assisted_permissions %} while {% data variables.product.prodname_copilot_short %} is working.** You don't have to wait for a task to finish. Subsequent eligible permission requests use {% data variables.copilot.assisted_permissions %}. Depending on your previous setting, this may increase or reduce the number of approval requests you see during the task.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically)
* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-cli#security-implications-of-automatic-tool-approval)
* [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/autopilot)
