---
title: Rolling back changes made during a {% data variables.copilot.copilot_cli %} session
shortTitle: Roll back changes
intro: 'Rewind your {% data variables.copilot.copilot_cli_short %} session to a previous prompt to undo changes in conversation history, and optionally restore files.'
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

You can trigger a rewind by pressing <kbd>Esc</kbd> twice, or by using the `/undo` slash command (or its alias `/rewind`).

{% data variables.copilot.copilot_cli_short %} supports two rewind behaviors:

* **Git-based rewind**: rolls back to a workspace snapshot taken at the start of a prompt.
* **Tools-based rewind**: lets you rewind conversation history only, or rewind conversation history and restore files that {% data variables.product.prodname_copilot_short %} changed.
 
> [!NOTE]
> Tools-based rewind is currently an experimental feature and is only available if you have used the `/experimental on` slash command, or the `--experimental` command line option.

{% data variables.copilot.copilot_cli_short %} automatically chooses one of these rewind behaviors based on your environment to provide the best possible rewind experience.

To tell which of the rewind behaviors is active:

* If the picker immediately shows snapshots and selecting one performs the rollback, you're using **Git-based rewind**.
* If selecting a rewind point opens an action menu with **Conversation only** and **Conversation + files**, you're using **tools-based rewind**.

This article explains how to roll back changes. For more conceptual information about rewinding to an earlier point in a session, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/cancel-and-roll-back).

## Prerequisites

* **A rewind point must exist.** You can't roll back before your first prompt in a session.
* **For Git-based rewind only:** you must be in a Git repository with at least one commit.
* **For tools-based rewind:** file restoration can be skipped for files that were changed after {% data variables.product.prodname_copilot_short %} last touched them.

## Rolling back with a double Esc keypress

> [!WARNING]
> * Rewinding cannot be undone. Once you roll back, later session history is permanently removed.
> * In **Git-based rewind**, rolling back restores your entire workspace to the state it was in at the selected snapshot. This reverts all changes made after that point—not only changes made by {% data variables.product.prodname_copilot_short %}, but also any manual edits and changes from shell commands. Any new files created in the workspace after the snapshot was taken are deleted, regardless of their Git status.
> * In **tools-based rewind**, you can choose whether to restore files. If you choose file restoration, files changed after {% data variables.product.prodname_copilot_short %} may be left unchanged to avoid overwriting your newer edits.

When {% data variables.product.prodname_copilot_short %} has finished responding to a prompt you've entered:

1. Make sure the input area is empty. If there's text in the input area, pressing <kbd>Esc</kbd> twice in quick succession clears the text.
1. Press <kbd>Esc</kbd> twice in quick succession to open the rewind picker.

   The picker lists available rewind points for the current session, with the most recent first. The ten most recent points are displayed at once. If there are more than ten, use the <kbd>↓</kbd> arrow key to scroll down through earlier points.
   For each rewind point, the beginning of the prompt you entered is shown, with an indication of how long ago you submitted it.

1. Choose a rewind point.

   * In Git-based rewind, selecting a snapshot restores the workspace to the state at the start of that prompt.
   * In tools-based rewind, after choosing a rewind point you can select:
     * **Conversation only** (history rewound, files unchanged), or
     * **Conversation + files** (history rewound and restorable files changed by {% data variables.product.prodname_copilot_short %} are restored).

   > [!NOTE]
   > In Git-based rewind, the repository is rolled back to its state immediately before {% data variables.product.prodname_copilot_short %} started working on the prompt, not immediately after it finished working on the prompt.

   The prompt you selected is shown in the input area, so you can edit and resubmit it, if required.

## Rolling back with the `/undo` slash command

The `/undo` slash command, and its alias `/rewind`, provide an alternative way of opening the rewind picker.

Both commands produce the same result that you get by pressing <kbd>Esc</kbd> twice when {% data variables.product.prodname_copilot_short %} is idle and there is no text in the input area.

## Verifying the rollback

After rolling back, you can use Git commands to verify the state of your repository and confirm that it matches your expectations.

Typing `!` allows you to run shell commands directly from the {% data variables.copilot.copilot_cli_short %} input prompt, so you don't need to exit the CLI to check the repository state.

| To do this | Enter this command       |
| ---------- | ------------------------ |
| Check which files show as modified, staged, or untracked. | `! git status` |
| Show the SHA and commit message of the current commit.    | `! git log --oneline -1` |
| Review the unstaged changes. | `! git diff` |

## Further reading

* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
