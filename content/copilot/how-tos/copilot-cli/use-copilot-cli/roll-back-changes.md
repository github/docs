---
title: Rolling back changes made during a {% data variables.copilot.copilot_cli %} session
shortTitle: Roll back changes
intro: "Rewind your {% data variables.copilot.copilot_cli_short %} session to a previous prompt to undo changes in conversation history, and optionally restore files."
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/copilot-cli/roll-back-changes
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

When you work in an interactive {% data variables.copilot.copilot_cli_short %} session, {% data variables.product.prodname_copilot_short %} can make changes to files, run shell commands, and modify your repository. If the result isn't what you expected, you can rewind to a previous point in the session to undo those changes.

You can trigger a rewind by pressing <kbd>Esc</kbd> twice when {% data variables.product.prodname_copilot_short %} is idle, or by using the `/undo` slash command (or its alias `/rewind`).

When you select a point to rewind to, you can choose whether to **Rewind the conversation only** or **Rewind the conversation and restore files**.

Rewind works in any directory, including folders that aren't Git repositories. It restores only the files that {% data variables.product.prodname_copilot_short %} changed.

This article explains how to roll back changes. For more conceptual information about rewinding to an earlier point in a session, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/cancel-and-roll-back).

## Prerequisites

* **A rewind point must exist.** You can't roll back before your first prompt in a session.
* **File restoration is only available for sessions that tracked file changes.** If you resume a session that started before file-change tracking was enabled, only conversation rewind is offered. Start a new session to be able to restore file changes.
* **File restoration skips files you changed yourself.** Files whose current contents no longer match what {% data variables.product.prodname_copilot_short %} last wrote (for example, because you edited them afterward), and files that were too large to back up, are left untouched rather than overwritten.
* **Rewind isn't available for remote-backed sessions**, or while the session still has work in progress.

## Rolling back with a double Esc keypress

> [!WARNING]
>
> * Rewinding cannot be undone. Once you roll back, later session history is permanently removed.
> * If you choose to restore files, {% data variables.product.prodname_copilot_short %} restores only the files it changed, and skips any file whose current contents no longer match what it last wrote, so your own later edits aren't overwritten.

Pressing <kbd>Esc</kbd> twice only opens the rewind picker when {% data variables.product.prodname_copilot_short %} is idle. For details of what a double <kbd>Esc</kbd> does when an operation is in progress, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/cancel-and-roll-back#what-pressing-esc-does-in-different-situations).

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

## Verifying the rollback

After rolling back, you can use Git commands to verify the state of your repository and confirm that it matches your expectations.

Typing `!` allows you to run shell commands directly from the {% data variables.copilot.copilot_cli_short %} input prompt, so you don't need to exit the CLI to check the repository state.

| To do this                                                | Enter this command       |
| --------------------------------------------------------- | ------------------------ |
| Check which files show as modified, staged, or untracked. | `! git status`           |
| Show the SHA and commit message of the current commit.    | `! git log --oneline -1` |
| Review the unstaged changes.                              | `! git diff`             |

## Further reading

- [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
