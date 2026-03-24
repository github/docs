---
title: 'Using {% data variables.copilot.copilot_cli %} session data'
shortTitle: Use session data
allowTitleToDifferFromFilename: true
intro: 'Resume previous {% data variables.copilot.copilot_cli_short %} sessions, use the `/chronicle` slash command to get insights from your session history, and ask {% data variables.product.prodname_copilot_short %} questions about your CLI usage.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
---

{% data variables.copilot.copilot_cli_short %} stores the data from your CLI sessions locally on your machine. This session data allows you to:

* Resume previous sessions and pick up right where you left off.
* Use the `/chronicle` slash command to generate standup reports, get personalized tips, and receive suggestions for improving your `.github/copilot-instructions.md` file.
* Ask {% data variables.product.prodname_copilot_short %} questions about your past interactions.

This article explains how to use these features. For a deeper dive into how session data is stored, and the benefits of the `/chronicle` command, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/chronicle).

## Resuming a previous session

You can resume a previous interactive CLI session either from the command line, or during an active session.

* **From the command line**, run `copilot --continue` to resume your most recent session. If you want to choose from a list of recent sessions, run `copilot --resume` to open a session picker that lists your recent sessions. Alternatively, if you know the session ID of the session you want to resume, you can run `copilot --resume SESSION-ID` to jump straight into it.

* **During an interactive session**, type `/resume` to switch to a different session. A picker is displayed showing your recent sessions. Alternatively, you can enter `/resume SESSION-ID` to jump straight into a specific session.

> [!NOTE]
> You can find the ID of a current interactive session by using the `/session` slash command. The session ID is also displayed when you exit an interactive session.

When you resume a session, {% data variables.product.prodname_copilot_short %} loads the full conversation history, so you can continue exactly where you left off.

## Renaming a session

When you use the `--resume` command line option, or the `/resume` slash command, your recent sessions are listed. The final column of the list shows the session name, which helps you to identify the session you want to resume. If you have a session you return to frequently you might want to give it a custom name to make it easier to find in the list.

To remame a session:

1. In an interactive session, if you want to rename a session other than the current session use the `/resume` slash command to switch to the session you want to rename.
1. Type `/rename NEW_NAME` to rename the current session. You do not need to enclose the name in quotes.

   For example, `/rename Improve test coverage`.

## Sharing a session

You can save the content of the current session as either a Markdown file or a private gist on {% data variables.product.prodname_dotcom_the_website %}. This allows you to share your prompts and {% data variables.product.prodname_copilot_short %}'s responses with others, or store a record of your work outside of the CLI.

To share a session as a gist, type the following in an interactive session:

```copilot copy
/share gist
```

To export the session conversation as a Markdown file, type:

```copilot copy
/share file [PATH-TO-FILE]
```

If you don't specify a file path, the Markdown file is saved in the current working directory with the name `copilot-session-SESSIONID.md`.

## Using the `/chronicle` slash command

{% data reusables.copilot.copilot-cli.cli-experimental-chronicle %}

The `/chronicle` slash command provides a set of subcommands that generate specific types of insights from your session history. While you can ask {% data variables.product.prodname_copilot_short %} free-form questions about your sessions at any time, `/chronicle` subcommands provide a quick way to get specific insights.

When you type `/chronicle` without arguments, a picker is displayed that lets you choose from the available subcommands:

| Subcommand | Description |
| ---------- | ----------- |
| `standup`  | Generate a standup report from your recent work. |
| `tips`     | Get personalized tips based on your usage patterns. |
| `improve`  | Suggest improvements to your {% data variables.product.prodname_copilot_short %} custom instructions file. |
| `reindex`  | Rebuild the session store index from your session history. |

You can also invoke a subcommand directly, without using the picker—for example, `/chronicle standup`.

### `/chronicle standup`

This generates a short report based on your {% data variables.copilot.copilot_cli_short %} sessions, by default from the last 24 hours. {% data variables.product.prodname_copilot_short %} looks at which branches you worked on, what you accomplished, and any {% data variables.product.github %} pull requests or issues you referenced. It groups the output by completion status, with each item labeled by its branch, and checks the current status of any linked pull requests.

#### Example standup summary

```text
Standup for March 13 2026:

✅ Done

myapp-repo repo maintenance (main branch)

 - Synced local, cleaned files, audited deps, reviewed architecture
 - Session: 69a027e4-9b7b-493e-922e-107acd25abab

🚧 In Progress

MyApp configuration (suppress-start-message branch, myapp-repo)

 - Suppressing startup init prompt message
 - Session: 3034d813-3e1f-413a-b3d9-15427ef8c19c
```

You can append additional context to the command to customize the output. For example, you can tell {% data variables.product.prodname_copilot_short %} to use a different time period, rather than the default last 24 hours:

```copilot copy
/chronicle standup for the last 3 days
```

### `/chronicle tips`

This analyzes your recent sessions to understand how you work and how you use {% data variables.copilot.copilot_cli_short %}. It then provides 3–5 personalized recommendations. {% data variables.product.prodname_copilot_short %} examines your actual prompts, the tools you use, and the features you haven't tried yet. It cross-references this with the full set of available CLI features—including any custom agents and skills you've set up in the repository—to find opportunities you might be missing.

Tips are grounded in your real usage data, giving you specific suggestions rather than generic advice.

#### Example tips

The following is an example of the main points from a `/chronicle tips` response. In an actual response, each point is explained in more detail.

```text
1. Use @ to mention files instead of pasting content
2. Iterate within a session — don't start over
3. Try /research for your exploration work
4. Turn recurring prompts into a custom agent
5. Use plan mode for multi-step work
```

You can focus the tips on a specific area by appending context after `/chronicle tips`. For example:

```copilot copy
/chronicle tips for better prompting
```

### `/chronicle improve`

This does a deep dive into your session history to find places where {% data variables.product.prodname_copilot_short %} struggled to provide the kind of response or results you were looking for, or where you had to course-correct by providing follow-up prompts. On the basis of this research, it suggests improvements to your `.github/copilot-instructions.md` custom instructions file.

Capturing project-specific knowledge as custom instructions is a powerful way to improve {% data variables.product.prodname_copilot_short %}'s performance when working on your project. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions).

> [!NOTE]
> Unlike other times {% data variables.product.prodname_copilot_short %} uses your session data to answer questions or generate insights, the scope of the `improve` subcommand is limited to data for the current repository or working directory. This ensures the recommendations are relevant to the project you're currently working on.

{% data variables.product.prodname_copilot_short %} looks for friction signals—repeated test failures, build errors that required multiple attempts, user messages that corrected or redirected the agent, and patterns that recur across sessions. It then presents 3–5 specific recommendations, each explaining the problem it found and the instruction that would address it.

For example, {% data variables.product.prodname_copilot_short %} might find that it repeatedly tried to use `jest` for your project that uses `vitest`, or that it kept generating imports in a style that doesn't match your codebase conventions. The suggested instructions would prevent these mistakes in future sessions.

After presenting its recommendations, {% data variables.product.prodname_copilot_short %} asks which ones you'd like to apply. By default all recommendations are selected but you can use the arrow keys on your keyboard to move to any of the recommendations then press the space bar to toggle the suggestion off. After choosing which recommendations to apply, press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot_short %} then creates or updates the `.github/copilot-instructions.md` file.

## Asking questions about your session history

You don't need to use a slash command to take advantage of your session history. If {% data variables.product.prodname_copilot_short %} determines that you are asking about your use of the CLI it will automatically use the session store to provide the context for a response.

> [!NOTE]
> By default, the answers to questions about your interactions with {% data variables.copilot.copilot_cli_short %} are based on all of your recorded sessions, irrespective of the repository or branch you are currently working in.

Here are some examples of the kinds of questions you might ask:

### Insights about tasks

```copilot copy
Using what you know about my sessions, what type of tasks give me one-shot successes and which do I have to iterate on most?
```

{% data variables.product.prodname_copilot_short %} will analyze your conversations, looking for times when an initial response was not followed by related prompts, and times when there was a series of iterative prompts and responses.

### Reduce premium request usage

```copilot copy
Based on my previous CLI sessions, how could I prompt you in a way that would cost less?
```

{% data variables.product.prodname_copilot_short %} will look at your session patterns—prompt length, number of continuation steps, and tool call frequency—and suggest ways to achieve the same results with fewer interactions.

### Find your most productive times

```copilot copy
Look at data for previous sessions. What time of day am I most and least effective at getting good results from Copilot?
```

{% data variables.product.prodname_copilot_short %} will query session timestamps and outcomes to identify when your interactions tend to be most efficient.

### Recall past work

```copilot copy
Have I worked on anything related to authentication in the last month?
```

{% data variables.product.prodname_copilot_short %} uses full-text search across your session history to find relevant sessions, then summarizes what you did.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/chronicle)
* [AUTOTITLE](/copilot/reference/cli-command-reference)
