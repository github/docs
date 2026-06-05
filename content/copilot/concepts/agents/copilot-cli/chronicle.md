---
title: 'About {% data variables.copilot.copilot_cli %} session data'
shortTitle: Session data
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.copilot_cli_short %} records every session locally. You can resume previous sessions, ask {% data variables.product.prodname_copilot_short %} questions about your interactions with the CLI, and use the `/chronicle` slash command for useful session-based insights.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

Every time you use {% data variables.copilot.copilot_cli_short %}, a complete set of data about your session—including your prompts, {% data variables.product.prodname_copilot_short %}'s responses, the tools that were used, and details of files that were modified—is recorded on your local machine. Over time, this builds up a rich history of what you've worked on, how you've worked, and what {% data variables.product.prodname_copilot_short %} has done for you.

This session data powers several features:

* **Resuming sessions**: You can pick up where you left off in any previous session.
* **Asking questions about your history**: You can ask {% data variables.product.prodname_copilot_short %} questions about your past work, and it will query your session data to answer them.
* **The `/chronicle` slash command**: A set of purpose-built subcommands that generate standup reports, personalized tips, and suggestions for improving your custom instructions—all derived from your session history.

This conceptual article explains how session data is stored, and how you can leverage it to enhance your workflow. For a practical guide to resuming a session, asking {% data variables.product.prodname_copilot_short %} about your CLI sessions, and using the `/chronicle` slash command, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle).

{% data reusables.copilot.copilot-cli.cli-experimental-chronicle %}

## How session data is stored

Every {% data variables.copilot.copilot_cli_short %} session is persisted as a set of files in the `~/.copilot/session-state/` directory on your machine. The data for each session contains a complete record of the session. These files allow you to resume an interactive CLI session.

In addition to the session files, {% data variables.copilot.copilot_cli_short %} stores structured session data in a local SQLite database, referred to as the session store. This data is a subset of the full data stored in the session files. The session store is what powers the `/chronicle` slash command and it also allows {% data variables.product.prodname_copilot_short %} to answer questions you ask about your past work.

### Privacy and data locality

All session data is stored locally in your home directory and is only accessible to your user account. {% data variables.product.prodname_copilot_short %} reads this data on your machine when you ask questions about your interactions with the CLI, or when you use the `/chronicle` slash command. Session data such as your previous prompts, context data, and responses you received may be sent to the AI model, just as they would be in any normal {% data variables.copilot.copilot_cli_short %} interaction.

If you want to remove data for a particular CLI session, you can delete the relevant session directory from `~/.copilot/session-state/`. You can clear all session data by deleting everything under `~/.copilot/session-state/`. After doing this you must manually reindex the session store. See the [Reindexing the session store](#reindexing-the-session-store) later in this article.

## About the `/chronicle` slash command

The `/chronicle SUBCOMMAND` command uses the data in the session store to provide insights and suggestions about your use of {% data variables.copilot.copilot_cli_short %}.

You can enter the following commands in an interactive CLI session:

* `/chronicle standup`: Generates a short report summarizing what you worked on in your recent CLI sessions, including branch names, pull request links, and status checks.
* `/chronicle tips`: Provides personalized tips for using {% data variables.copilot.copilot_cli_short %} more effectively.
* `/chronicle improve`: Analyzes your session history to identify patterns where {% data variables.product.prodname_copilot_short %} may have misunderstood your intent or where there was a lot of back-and-forth, and generates custom instructions to help {% data variables.product.prodname_copilot_short %} better understand you in the future.
* `/chronicle reindex`: Rebuilds the session store from your session history files.

## Benefits of `/chronicle` and the session data

* **Self-improving workflow**: The `improve` subcommand creates a feedback loop that helps you to refine your custom instructions. Over time, this makes the agent more effective for your specific project.

* **Effortless standup reports**: Instead of manually reconstructing what you did yesterday, `/chronicle standup` generates a standup summary from your actual session data.

* **Personalized coaching**: The `tips` subcommand acts as a personal productivity coach that knows both what {% data variables.copilot.copilot_cli_short %} can do and how you actually use it. It bridges the gap between available features and your current workflow.

* **Talk to your coding history**: The session store lets {% data variables.product.prodname_copilot_short %} answer any question that your past sessions might help with—from recalling a bug fix you did last week to analyzing your prompting patterns over time.

* **Local and private**: All session data—both the raw JSONL files and the SQLite session store—stays on your machine. Nothing is uploaded or shared beyond the normal AI model interactions that happen in any {% data variables.copilot.copilot_cli_short %} session. You have full control over your data and can delete it at any time.

## When should you use these features?

* **At the start of your day**: Run `/chronicle standup last 3 days` to generate a reminder of what you worked on recently and the CLI session you were working in.
* **Periodically, to level up**: Run `/chronicle tips` every week or two to discover features and workflow improvements you might be missing.
* **When {% data variables.product.prodname_copilot_short %} keeps making the same mistake**: Run `/chronicle improve` to identify the pattern and generate custom instructions to fix it.
* **To recall past work**: Ask a free-form question like "Have I worked on anything related to the payments API?" and {% data variables.product.prodname_copilot_short %} will search your history.
* **To continue previous work**: Use `copilot --continue` or `copilot --resume` to pick up where you left off.

## Reindexing the session store

The session store is populated incrementally during a CLI session. Data for a session is written to disk in a session-specific subdirectory of `~/.copilot/session-state/`. This also happens periodically during a session, and also when the session ends.

You can reindex the session store from the session files on disk, although typically you will never need to do this.

Situations where you might need to reindex include:

* **Indexing old sessions**: If you have old session files on disk that were created before the session store existed, reindexing will populate the session store with data from those sessions.
* **Session deletion**: If you want to delete a session from your history you can delete the session directory and then reindex the session store.
* **Migrating/recovering sessions**: If you moved your session files to another machine, or restored them from a backup, without also moving/restoring the session store file (`~/.copilot/session-store.db`), you can use the reindex command to recreate the session store.
* **File corruption**: If the session store file (`~/.copilot/session-store.db`) becomes corrupted, or is accidentally deleted, you can recover the session store from the session files.
* **Unexpected termination**: If a session terminates unexpectedly (for example, due to a crash or power loss) before data held in memory has been flushed to the session store you may be able to populate the session store with the missing data if it was written to disk, in the session files, prior to the termination.

To reindex the session store, use the following slash command in an interactive CLI session:

```copilot copy
/chronicle reindex
```

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
