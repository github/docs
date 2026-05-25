---
title: Canceling a {% data variables.copilot.copilot_cli %} operation and rolling back changes
shortTitle: Cancel and roll back
intro: 'Find out about the different ways to cancel an active {% data variables.product.prodname_copilot_short %} operation, and how to roll back changes made during a session if the result isn''t what you expected.'
versions:
  feature: copilot
contentType: concepts
docsTeamMetrics:
  - copilot-cli
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
---

## Introduction

When you work in an interactive {% data variables.copilot.copilot_cli_short %} session, you can press <kbd>Esc</kbd> or <kbd>Ctrl</kbd>+<kbd>C</kbd> to control what {% data variables.product.prodname_copilot_short %} is doing. Both keypresses can cancel operations, but they work slightly differently:

* <kbd>Ctrl</kbd>+<kbd>C</kbd> immediately stops the current operation.
* A single <kbd>Esc</kbd> keypress gives you more gradual control—letting you dismiss dialogs, clear queued prompts, or cancel an operation in stages.

If {% data variables.product.prodname_copilot_short %} has already made changes and you want to undo them, you can roll back your workspace to a previous point in the session. {% data variables.copilot.copilot_cli_short %} takes a snapshot of your workspace state each time you enter a prompt, and this allows you to rewind to an earlier state by pressing <kbd>Esc</kbd> twice when {% data variables.product.prodname_copilot_short %} is idle and the input area is empty.

## What pressing Esc does in different situations

Pressing <kbd>Esc</kbd> once performs different actions depending on the current state of the session:

| Current state | What pressing <kbd>Esc</kbd> does |
| ------------- | ------------------------ |
| {% data variables.product.prodname_copilot_short %} is active with no queued prompts. | Cancels the running operation. |
| {% data variables.product.prodname_copilot_short %} is active and there are queued prompts. | Clears the queued prompts without stopping the current operation. |
| A dialog, overlay, or picker is open. | Closes the dialog, overlay, or picker. |
| {% data variables.product.prodname_copilot_short %} is idle. | Shows a brief reminder that pressing <kbd>Esc</kbd> again quickly will open the rewind picker. See [Rolling back changes](#rolling-back-changes). |

## When to use Esc instead of Ctrl+C

The main difference between these two ways of canceling an operation is that <kbd>Esc</kbd> is designed for gradual, targeted intervention, while <kbd>Ctrl</kbd>+<kbd>C</kbd> is a hard stop.

Use <kbd>Esc</kbd> when you want to interact with {% data variables.product.prodname_copilot_short %} without necessarily ending the current operation. For example, if a permission dialog appears and you want to deny that specific request, pressing <kbd>Esc</kbd> dismisses the dialog and {% data variables.product.prodname_copilot_short %} continues working—it just won't use the tool you denied. Similarly, if you've queued follow-up prompts and want to cancel them without interrupting the work already in progress, <kbd>Esc</kbd> clears the queue while the current operation keeps running. Pressing <kbd>Esc</kbd> only cancels the operation outright if there are no dialogs open and no queued prompts to clear first.

Use <kbd>Ctrl</kbd>+<kbd>C</kbd> when you want to stop everything at once. It immediately cancels the active operation and clears any queued prompts in a single keypress. Any file write that is already in progress will complete—files are not left corrupted mid-write—but any remaining planned changes are abandoned. Pressing <kbd>Ctrl</kbd>+<kbd>C</kbd> a second time within two seconds, when the input area is empty, exits the session entirely.

As a rule of thumb, use <kbd>Esc</kbd> when you want to intervene selectively, and <kbd>Ctrl</kbd>+<kbd>C</kbd> when you want to stop and start over.

## Rolling back changes

While {% data variables.product.prodname_copilot_short %} is inactive and there is no text in the input area, you can press <kbd>Esc</kbd> twice to display a list of points in your current session that you can roll back to. Each point corresponds to a snapshot of your workspace that was taken immediately before {% data variables.product.prodname_copilot_short %} started working on the prompt shown in the list.

For full details of how to use the double <kbd>Esc</kbd> keypress to roll back changes made during a session, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes).

> [!WARNING]
> {% data reusables.copilot.copilot-cli.cli-rewind-warning %}

### What happens when you roll back

When you select a snapshot from the rewind picker, the following actions occur:

1. **Git state is restored.** The repository is checked out to the Git commit and branch recorded in the snapshot.
1. **Untracked files are cleaned.** Files that did not exist at the time of the snapshot are removed.
1. **Modified files are restored.** Files that were changed after the snapshot are reverted to their backed-up state, including permissions and staging state.
1. **Session history is truncated.** The conversation is rewound to the point where the selected snapshot was taken. All messages and tool calls that occurred after that point are removed from the session.
1. **Snapshots are removed.** The selected snapshot and all snapshots after it are permanently deleted. Only snapshots from earlier conversation steps remain available for future rewinds.
1. **Rollback confirmed.** After the rollback, {% data variables.product.prodname_copilot_short %} displays a message indicating how many files were restored.
1. **Your prompt is restored.** The prompt associated with the selected snapshot is placed in the input area.

### Changes that can't be rolled back

Rewind is unavailable in the following situations:

* **Files over 10 MB.** Individual files larger than 10 MB are skipped during snapshot creation. Changes to these files are not restored during a rollback.
* **More than 500 changed files.** If more than 500 files were changed during a single step of a CLI conversation, a snapshot is not created for that step. You will not be able to roll back changes made in that step. Earlier snapshots are unaffected.

## Further reading

* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
