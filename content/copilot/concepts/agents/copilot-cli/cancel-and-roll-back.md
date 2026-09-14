---
title: Canceling a {% data variables.copilot.copilot_cli %} operation and rolling back changes
shortTitle: Cancel and roll back
intro: "Find out about the different ways to cancel an active {% data variables.product.prodname_copilot_short %} operation, and how to roll back changes made during a session if the result isn't what you expected."
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

* <kbd>Ctrl</kbd>+<kbd>C</kbd> acts immediately, without a confirming second press—removing any queued prompts first (one per press), then canceling the current operation.
* A single <kbd>Esc</kbd> keypress gives you more gradual, staged control. While {% data variables.product.prodname_copilot_short %} is actively working, a single <kbd>Esc</kbd> doesn't cancel right away—it shows a reminder, and a second press interrupts the current operation. In a local session, any queued prompts are then processed as the next turn. In a remote-backed or attached session, the second press fully cancels the operation instead, and queued prompts are not carried over to a follow-up turn.

If {% data variables.product.prodname_copilot_short %} has already made changes and you want to undo them, you can roll back to a previous point in the session. As {% data variables.product.prodname_copilot_short %} works, {% data variables.copilot.copilot_cli_short %} tracks the file changes it makes as it responds to each prompt. This lets you rewind to an earlier point by pressing <kbd>Esc</kbd> twice when {% data variables.product.prodname_copilot_short %} is idle and the input area is empty. When you rewind, you choose whether to rewind the conversation only, or to also restore the files that {% data variables.product.prodname_copilot_short %} changed.

## What pressing Esc does in different situations

Pressing <kbd>Esc</kbd> once performs different actions depending on the current state of the session:

| Current state | What pressing <kbd>Esc</kbd> does |
| ------------- | --------------------------------- |
| {% data variables.product.prodname_copilot_short %} is active with no queued prompts. | Shows an "Esc again to cancel" reminder. The running operation is canceled only if you press <kbd>Esc</kbd> again within half a second. |
| {% data variables.product.prodname_copilot_short %} is active and there are queued prompts. | Shows the "Esc again to cancel" reminder. Pressing <kbd>Esc</kbd> again interrupts the current operation. In a local session, the queued prompts are then processed as the next turn; in a remote-backed or attached session, the operation is fully canceled and the queued prompts are not run as a follow-up turn. |
| A permission dialog is open. | A single <kbd>Esc</kbd> denies the pending request (no second press needed). |
| A dialog, overlay, or picker is open. | Closes the dialog, overlay, or picker. |
| {% data variables.product.prodname_copilot_short %} is idle. | Shows a brief reminder that pressing <kbd>Esc</kbd> again quickly will open the rewind picker. See [Rolling back changes](#rolling-back-changes). |

Pressing <kbd>Esc</kbd> twice quickly, when {% data variables.product.prodname_copilot_short %} is idle and the input area is empty, allows you to roll back to an earlier point in the session. In other situations, a double <kbd>Esc</kbd> does one of the following, in this order of priority:

* Cancels a running shell command.
* Stops the current response.
* Stops background agents.
* Clears text in the input area.

If none of these applies, the rewind picker is displayed.

## When to use Esc instead of Ctrl+C

The main difference between these two ways of canceling an operation is that <kbd>Esc</kbd> is designed for gradual, targeted intervention, while <kbd>Ctrl</kbd>+<kbd>C</kbd> is a hard stop.

Use <kbd>Esc</kbd> when you want a confirming keypress before interrupting an operation. If a permission dialog appears and you want to deny that specific request, pressing <kbd>Esc</kbd> once rejects the request and stops the current operation. If you've queued follow-up prompts in a local session, pressing <kbd>Esc</kbd> twice interrupts the current operation and processes the queued prompts as the next turn. In a remote-backed or attached session, pressing <kbd>Esc</kbd> twice fully cancels the operation instead, and queued prompts are not run as a follow-up turn.

Use <kbd>Ctrl</kbd>+<kbd>C</kbd> when you want to cancel without the confirming second press that <kbd>Esc</kbd> requires. If no prompts are queued, a single <kbd>Ctrl</kbd>+<kbd>C</kbd> immediately cancels the active operation. If you have queued prompts, each <kbd>Ctrl</kbd>+<kbd>C</kbd> removes the most recently queued prompt—one per press—and cancels the active operation only once the queue is empty. Any file write that is already in progress will complete—files are not left corrupted mid-write—but any remaining planned changes are abandoned. Pressing <kbd>Ctrl</kbd>+<kbd>C</kbd> a second time within two seconds, when the input area is empty, exits the session entirely.

As a rule of thumb, use <kbd>Esc</kbd> when you want to intervene selectively, and <kbd>Ctrl</kbd>+<kbd>C</kbd> when you want to stop and start over.

## Rolling back changes

While {% data variables.product.prodname_copilot_short %} is inactive and there is no text in the input area, you can press <kbd>Esc</kbd> twice to display a list of points in your current session that you can roll back to. Each point corresponds to a prompt you submitted, and rewinding takes the session back to the state it was in immediately before {% data variables.product.prodname_copilot_short %} started working on that prompt.

After you choose a rewind point, you decide whether to:

* **Rewind the conversation only**, leaving your files untouched.
* **Rewind the conversation and restore files**, which reverts the files {% data variables.product.prodname_copilot_short %} changed while leaving your own later edits in place.

Because it restores only the files {% data variables.product.prodname_copilot_short %} changed rather than your whole workspace, rewind works in any directory, including folders that aren't Git repositories.

For full details of how to use the double <kbd>Esc</kbd> keypress to roll back changes made during a session, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes).

> [!WARNING]
> {% data reusables.copilot.copilot-cli.cli-rewind-warning %}

### What happens when you roll back

The actions that occur when you roll back depend on the option you choose.

If you choose to rewind the conversation **and** restore files:

1. **Files are restored.** The files {% data variables.product.prodname_copilot_short %} changed are reverted to the state they were in before the selected prompt. Files whose current contents no longer match what {% data variables.product.prodname_copilot_short %} last wrote—for example, because you edited them yourself—are skipped so your later edits aren't overwritten.
1. **Session history is truncated.** The conversation is rewound to the selected point. All messages and tool calls that occurred after that point are removed from the session.
1. **Obsolete snapshots are removed.** The captured file changes for the discarded turns are cleaned up. Earlier points remain available for future rewinds.
1. **Rollback confirmed.** After the rollback, {% data variables.product.prodname_copilot_short %} displays a message indicating how many files were restored, and notes any files that were skipped.
1. **Your prompt is restored.** The prompt associated with the selected point is placed in the input area, so you can edit and resubmit it.

If you choose to rewind the conversation only, your files are left untouched: the session history is truncated (step 2) and your prompt is restored to the input area (step 5).

### Changes that can't be rolled back

File restoration is skipped, or unavailable, in the following situations:

* **Files over 10 MB.** Individual files larger than 10 MB are skipped during capture, so changes to those files are not restored during a rollback.
* **More than 500 changed files.** If more than 500 files were changed during a single turn, file changes for that turn are not captured, so you won't be able to restore files for it. Other turns are unaffected.
* **Files you changed yourself.** Files whose current contents no longer match what {% data variables.product.prodname_copilot_short %} last wrote are left untouched rather than overwritten.
* **Sessions without file tracking.** If you resume a session that started before file-change tracking was enabled, only conversation rewind is available. Start a new session to be able to restore file changes.
* **Remote-backed or busy sessions.** Rewind isn't available for remote-backed sessions, or while the session still has work in progress.

## Further reading

- [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
