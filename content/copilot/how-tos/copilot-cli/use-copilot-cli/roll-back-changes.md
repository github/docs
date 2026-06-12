---
title: Rolling back changes made during a {% data variables.copilot.copilot_cli %} session
shortTitle: Roll back changes
intro: 'Rewind your {% data variables.copilot.copilot_cli_short %} session to a previous prompt to undo changes and restore your repository to a previous state.'
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

When you enter a prompt, the first thing {% data variables.copilot.copilot_cli_short %} does is take a snapshot of your workspace state. This snapshot allows you to roll back to that point in the session if you need to. You can trigger a rewind by pressing <kbd>Esc</kbd> twice, or by using the `/undo` slash command.

This article explains how to roll back changes. For more conceptual information about rewinding to an earlier point in a session, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/cancel-and-roll-back).

## Prerequisites

* **You must be working in a Git repository with at least one commit.** {% data variables.copilot.copilot_cli_short %} uses Git operations to track and restore workspace state.
* **A snapshot must exist.** Snapshots are created automatically at the start of each of your interactions with {% data variables.product.prodname_copilot_short %} in a CLI session. You can't roll back changes made before your first prompt in a session, or to the repository state for a step where snapshot creation was skipped, see [Changes that can't be rolled back](/copilot/concepts/agents/copilot-cli/cancel-and-roll-back#changes-that-cant-be-rolled-back).

## Rolling back with a double Esc keypress

> [!WARNING]
> * {% data reusables.copilot.copilot-cli.cli-rewind-warning %}
> * Rewinding cannot be undone. Once you roll back to a snapshot, all snapshots and session history after that point are permanently removed.

When {% data variables.product.prodname_copilot_short %} has finished responding to a prompt you've entered:

1. Make sure the input area is empty. If there's text in the input area, pressing <kbd>Esc</kbd> twice in quick succession clears the text.
1. Press <kbd>Esc</kbd> twice in quick succession to open the rewind picker.

   The rewind picker lists the available snapshots for the current session, with the most recent first. The ten most recent snapshots are displayed. If there are more than ten snapshots available you can use the <kbd>↓</kbd> arrow key to scroll down through earlier snapshots.

   For each snapshot, the beginning of the prompt you entered is shown, with an indication of how long ago you submitted it.

1. Choose a snapshot to roll back to. This will return you to the state of the repository when you entered the associated prompt.

   > [!NOTE]
   > The repository is rolled back to its state immediately before {% data variables.product.prodname_copilot_short %} started working on the prompt, not immediately after it finished working on the prompt.

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
