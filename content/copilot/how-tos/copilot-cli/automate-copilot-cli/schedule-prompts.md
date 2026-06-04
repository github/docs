---
title: Scheduling prompts in {% data variables.copilot.copilot_cli %}
shortTitle: Schedule prompts
allowTitleToDifferFromFilename: true
intro: 'Use the `/every` and `/after` slash commands to submit a prompt to {% data variables.product.prodname_copilot_short %} on a recurring schedule, or after a specified delay.'
versions:
  feature: copilot
contentType: how-tos
docsTeamMetrics:
  - copilot-cli
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
---

> [!NOTE]
> The `/every` and `/after` commands are currently experimental features and are only available if you have used the `/experimental on` slash command, or the `--experimental` command line option.

In an interactive {% data variables.copilot.copilot_cli_short %} session you can schedule a prompt to be submitted automatically. This is useful when you want {% data variables.product.prodname_copilot_short %} to repeat a task at a regular cadence or to perform a one-off task after a delay, without you having to remember to submit the prompt manually.

There are two slash commands for this:

* `/every` — schedule a prompt to be sent **repeatedly** at a fixed interval.
* `/after` — schedule a prompt to be sent **once**, after a specified period of time.

Both commands are only available inside an interactive {% data variables.copilot.copilot_cli_short %} session: the schedules fire only while the session in which they were created is running. For ways to run {% data variables.copilot.copilot_cli_short %} on a schedule when no session is open, see [Running a prompt from an external scheduler](#running-a-prompt-from-an-external-scheduler) at the end of this article.

## Scheduling a recurring prompt with `/every`

In an interactive {% data variables.copilot.copilot_cli_short %} session, type `/every` followed by an interval of time and the prompt you want to be submitted.

```copilot
/every INTERVAL PROMPT
```

The prompt will be submitted after the interval you specified has elapsed and then again on the same cadence until you delete the schedule entry or you end the interactive CLI session.

### Examples

```copilot
/every 1h run the test suite and summarize any new failures
```

```copilot
/every 30m check for new comments on my open pull requests
```

## Scheduling a once-only prompt with `/after`

Type `/after` followed by a delay and the prompt you want to submit:

```copilot
/after DELAY PROMPT
```

The prompt fires once, after the delay has elapsed, and is then removed from the schedule list.

### Examples

```copilot
/after 30m Give me details of changes to README.md made in the last 30 minutes
```

```copilot
/after 10m Check that the address finder is visible on example.com/register
```

## Scheduling a skill

You can use `/every` and `/after` to schedule a skill. To do this, you can reference the skill explicitly by using its slash command, or you can use natural language to tell {% data variables.product.prodname_copilot_short %} to run the skill.

> [!NOTE]
> Only user-invocable skills can be scheduled this way. You cannot include built-in slash commands (such as `/clear`) in a scheduled prompt.

### Examples

```copilot
/after 2h Use the docx skill to create a new file summarizing recent changes to this repo
```

```copilot
/every 1d /refactor-plan Adjust the architecture of this project to improve the responsiveness of the client UI
```

## Interval and delay syntax

| Suffix | Unit    | Example |
| ------ | ------- | ------- |
| `s`    | seconds | `30s`   |
| `m`    | minutes | `5m`    |
| `h`    | hours   | `2h`    |
| `d`    | days    | `1d`    |

A bare number with no suffix is interpreted as minutes—for example, `/every 30 remind me to check for Slack messages` schedules the prompt every 30 minutes.

The minimum interval is **10 seconds** and the maximum is **1 day** (24 hours).

## Identifying scheduled prompts in the session

When a scheduled prompt is triggered, {% data variables.product.prodname_copilot_short %} precedes the prompt with text such as `[Scheduled prompt #4]` to distinguish it from a prompt you typed yourself.

You can use the ID to cancel the schedule. For example, by entering `stop prompt 4`.

## Managing scheduled prompts

To list the active schedules for the current session, type `/every` or `/after` with no arguments.

To delete a schedule, use the arrow keys on your keyboard to move through the list and select the schedule you want to delete, then press <kbd>d</kbd>.

Press <kbd>Esc</kbd> to exit the schedule list.

## What happens when you close and reopen a session

Scheduled prompts are scoped to the session they were created in, and they are only triggered while that session is running.

When you reopen the session (using the `--continue` or `--resume` command line options) the schedules are restarted, with interval before a schedule is triggered measured from the moment you reopen the session.

If an `/after` schedule had not been triggered before you closed the session, it remains in the schedule list and will be triggered after the specified delay in the reopened session.

## Running a prompt from an external scheduler

The `/every` and `/after` commands only run while an interactive {% data variables.copilot.copilot_cli_short %} session is open. If you want a prompt to run on a schedule even when no session is active, you can run {% data variables.copilot.copilot_cli_short %} from an external scheduler such as **cron** on macOS or Linux, or **Task Scheduler** on Windows.

To run {% data variables.copilot.copilot_cli_short %} programmatically, use the syntax `copilot -p "YOUR PROMPT"`. The CLI processes your prompt without displaying the interactive interface and then exits.

This is useful for tasks such as:

* **Nightly maintenance** — for example, running your test suite against the latest changes on a branch every night and posting a summary to a tracking issue.
* **Periodic dependency checks** — for example, opening a weekly pull request that updates dependencies and runs the test suite against the result.
* **Scheduled reports** — for example, generating a daily summary of new issues or pull requests assigned to you and emailing or posting it to a chat channel.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically).

## Further reading

* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface)
