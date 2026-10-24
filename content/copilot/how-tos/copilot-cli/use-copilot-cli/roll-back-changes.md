---
title: Canceling operations and rolling back changes in GitHub Copilot CLI
shortTitle: Cancel and roll back
allowTitleToDifferFromFilename: true
intro: "Stop an active {% data variables.copilot.copilot_cli_short %} operation, or rewind a session to undo changes in conversation history and optionally restore files."
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/copilot-cli/roll-back-changes
  - /copilot/concepts/agents/copilot-cli/cancel-and-roll-back
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

When you work in an interactive {% data variables.copilot.copilot_cli_short %} session, you can stop work that is in progress or undo work that has already been completed:

* **Cancel an operation** by using <kbd>Esc</kbd> or <kbd>Ctrl</kbd>+<kbd>C</kbd>. These keys behave differently depending on whether {% data variables.product.prodname_copilot_short %} is working, prompts are queued, or a dialog is open.
* **Roll back completed work** by pressing <kbd>Esc</kbd> twice when {% data variables.product.prodname_copilot_short %} is idle, or by using the `/undo` slash command or its `/rewind` alias.

When you roll back, you can choose whether to rewind only the conversation or also restore files that {% data variables.product.prodname_copilot_short %} changed.

Rewind works in any directory, including folders that aren't Git repositories. It restores only the files that {% data variables.product.prodname_copilot_short %} changed.

## Canceling an operation

Use <kbd>Esc</kbd> when you want gradual, targeted control. While {% data variables.product.prodname_copilot_short %} is working, the first press displays a reminder and a second press interrupts the operation. A single press also closes an open dialog or denies a pending permission request.

Use <kbd>Ctrl</kbd>+<kbd>C</kbd> when you want to cancel without the confirming second press that <kbd>Esc</kbd> requires. A single <kbd>Ctrl</kbd>+<kbd>C</kbd> immediately cancels the active operation and clears any queued prompts. Any file write that is already in progress will complete—files are not left corrupted mid-write—but any remaining planned changes are abandoned. Pressing <kbd>Ctrl</kbd>+<kbd>C</kbd> a second time within two seconds, when the input area is empty, exits the session entirely.

### What pressing Esc does in different situations

The effect of pressing <kbd>Esc</kbd> depends on the current state of the session.

| Current state | What pressing <kbd>Esc</kbd> does |
| ------------- | --------------------------------- |
| {% data variables.product.prodname_copilot_short %} is active with no queued prompts. | Displays an "Esc again to cancel" reminder. Press <kbd>Esc</kbd> again within half a second to cancel the operation. |
| {% data variables.product.prodname_copilot_short %} is active and prompts are queued. | Displays the cancellation reminder. Pressing <kbd>Esc</kbd> again interrupts the current operation. In a local session, queued prompts are processed as the next turn. In a remote-backed or attached session, the operation is fully canceled and queued prompts are not run as a follow-up turn. |
| A permission dialog is open. | Denies the pending request without requiring a second press. |
| A dialog, overlay, or picker is open. | Closes the dialog, overlay, or picker. |
| {% data variables.product.prodname_copilot_short %} is idle. | Displays a reminder that pressing <kbd>Esc</kbd> again quickly will open the rewind picker. |

Pressing <kbd>Esc</kbd> twice quickly opens the rewind picker only when {% data variables.product.prodname_copilot_short %} is idle and the input area is empty. In other situations, a double <kbd>Esc</kbd> performs the first applicable action in this order:

1. Cancels a running shell command.
1. Stops the current response.
1. Stops background agents.
1. Clears text in the input area.

## Rolling back with a double Esc keypress

> [!WARNING]
>
> * Rewinding cannot be undone. Once you roll back, later session history is permanently removed.
> * If you choose to restore files, {% data variables.product.prodname_copilot_short %} restores only the files it changed, and skips any file whose current contents no longer match what it last wrote, so your own later edits aren't overwritten.

### Prerequisites

* **A rewind point must exist.** You can't roll back before your first prompt in a session.
* **File restoration is only available for sessions that tracked file changes.** If you resume a session that started before file-change tracking was enabled, only conversation rewind is offered. Start a new session to be able to restore file changes.
* **Rewind isn't available for remote-backed sessions**, or while the session still has work in progress.

When {% data variables.product.prodname_copilot_short %} has finished responding to a prompt you've entered:

1. Make sure the input area is empty and no work is in progress. If there's text in the input area, pressing <kbd>Esc</kbd> twice in quick succession clears the text instead of opening the picker.
1. Press <kbd>Esc</kbd> twice in quick succession to open the rewind picker.

    The picker lists available rewind points for the current session, with the most recent first. The ten most recent points are displayed at once. If there are more than ten, use the <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys to scroll through them.
    For each rewind point, the beginning of the prompt you entered is shown, along with how long ago you submitted it. For turns that changed files, the number of lines added and removed by that turn is also shown.

1. Choose a rewind point and press <kbd>Enter</kbd>.

   Choosing a rewind point opens an action menu where you can select **Conversation only** or **Conversation + files**. The latter is unavailable for a rewind point when neither that turn nor any later turn changed any files that can be restored. Before restoring, {% data variables.product.prodname_copilot_short %} shows a per-file preview of the changes so you can confirm.

   > [!NOTE]
   > The rewind is applied relative to the state immediately **before** {% data variables.product.prodname_copilot_short %} started working on the prompt, not immediately after it finished working on the prompt.

   The prompt you selected is shown in the input area, so you can edit and resubmit it, if required.

## Rolling back with the `/undo` slash command

The `/undo` slash command, and its alias `/rewind`, provide an alternative way of opening the rewind picker.

Both commands produce the same result that you get by pressing <kbd>Esc</kbd> twice when {% data variables.product.prodname_copilot_short %} is idle and there is no text in the input area.

## What happens when you roll back

If you choose to rewind the conversation and restore files:

1. {% data variables.product.prodname_copilot_short %} restores the files it changed to their state before the selected prompt. It skips files that you edited afterward.
1. The conversation is rewound to the selected point. Messages and tool calls after that point are removed.
1. Captured file changes for the discarded turns are removed. Earlier rewind points remain available.
1. {% data variables.product.prodname_copilot_short %} reports how many files were restored and identifies any skipped files.
1. The selected prompt is placed in the input area so you can edit and resubmit it.

If you choose to rewind only the conversation, your files are left untouched. The later session history is removed and the selected prompt is restored to the input area.

## Changes that can't be restored

File restoration is skipped or unavailable in these situations:

* **Files over 10 MB**: Changes to individual files larger than 10 MB aren't captured.
* **More than 500 changed files**: If a single turn changes more than 500 files, file changes for that turn aren't captured. Other turns are unaffected.
* **Files you changed yourself**: If a file's current contents no longer match what {% data variables.product.prodname_copilot_short %} last wrote, the file is left untouched.
* **Sessions without file tracking**: If a session started before file-change tracking was enabled, only conversation rewind is available.
* **Remote-backed or busy sessions**: Rewind isn't available for remote-backed sessions or while work is still in progress.

## Verifying the rollback

After rolling back, you can use Git commands to verify the state of your repository and confirm that it matches your expectations.

Typing `!` allows you to run shell commands directly from the {% data variables.copilot.copilot_cli_short %} input prompt, so you don't need to exit the CLI to check the repository state.

| To do this                                                | Enter this command       |
| --------------------------------------------------------- | ------------------------ |
| Check which files show as modified, staged, or untracked. | `! git status`           |
| Show the SHA and commit message of the current commit.    | `! git log --oneline -1` |
| Review the unstaged changes.                              | `! git diff`             |

## Further reading

* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
