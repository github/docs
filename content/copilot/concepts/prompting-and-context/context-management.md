---
title: Managing context for GitHub Copilot
shortTitle: Context management
allowTitleToDifferFromFilename: true
intro: 'Understand how {% data variables.product.prodname_copilot_short %} manages conversation context, what happens during long sessions, and how to stay in control of your context window.'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/agents/copilot-cli/context-management
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## About the context window

When you use {% data variables.product.prodname_copilot %}, every message you send, every response from {% data variables.product.prodname_copilot_short %}, every tool call and its result, and the system instructions that define {% data variables.product.prodname_copilot_short %}'s behavior are all held in a **context window**. The context window is the total amount of information that the AI model can consider at one time when generating a response.

The context window has a fixed size, measured in tokens, that varies by model. Tokens typically consist of short, commonly used words, and fragments of multi-syllable words. As your conversation progresses, the context window fills up with:

* **System instructions and tool definitions**: The built-in instructions that tell {% data variables.product.prodname_copilot_short %} how to behave, plus the schemas of all available tools. These are always present and take up a fixed portion of the context window.
* **Your messages**: Every prompt you send.
* **{% data variables.product.prodname_copilot_short %}'s responses**: Everything {% data variables.product.prodname_copilot_short %} says back to you.
* **Tool calls and results**: When {% data variables.product.prodname_copilot_short %} reads files, runs commands, or searches your codebase, both the request and the output are added to the context. Tool results can be especially large—for example, if a tool reads a long file or runs a command that produces extensive output.

All of this accumulates in the context window. In a long or complex session, the context window can fill up.

## Why the context window matters

The context window is what allows {% data variables.product.prodname_copilot_short %} to consider previous parts of a conversation when it's deciding how to respond to a prompt. Everything inside the context window is available to {% data variables.product.prodname_copilot_short %} to reference when it works on a task.

This means that in a very long session, {% data variables.product.prodname_copilot_short %} might not be able to hold the entire conversation history at once. {% data variables.product.prodname_copilot_short %} therefore has context management features that effectively allow you to continue a conversation for as long as you need.

## Checking your context usage

The controls for context usage vary by client and surface. For example:

* In the {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.github_copilot_app %}, use `/context` to check usage for the current session.
* In supported IDEs, look for a context window indicator in or below the {% data variables.product.prodname_copilot_short %} chat input area. For example, in {% data variables.product.prodname_vscode %}, the indicator is a small circle. In some other IDEs, the usage is displayed in the session information dialog provided by the {% data variables.copilot.copilot_extension_short %}.

You may want to check your context usage when:

* You're in a long session and want to know how much space is left.
* {% data variables.product.prodname_copilot_short %} seems to be forgetting earlier parts of the conversation.
* You want to understand whether compaction has occurred, or is likely to occur soon. See [Compaction](#compaction).

## Managing your context window

You can manage your context window by monitoring usage, compacting old messages, and controlling large tool outputs.

> [!NOTE]
> Available controls differ by client and surface.

When you are unable to manage your context window effectively through the available commands and settings, you may need to consider alternative strategies such as breaking your conversation into smaller sessions or reducing the size of tool outputs by prompting {% data variables.product.prodname_copilot_short %} to truncate or summarize them. Also, {% data variables.product.prodname_copilot_short %} can delegate work to subagents, which have context windows separate from the main agent. This can help keep the main agent's context focused.

### Context usage using the `/context` command

In some surfaces you can use the `/context` slash command to visualize your current context window usage. The first line of the output shows the active model and the number of tokens currently in use out of the model's total context window capacity. The remainder of the output shows token usage, and context window percentage, for:

* **System Prompt**: the base system prompt.
* **Custom Instructions**: your loaded custom instructions (shown only when present).
* **System Tools**: built-in tool definitions.
* **MCP Tools**: tool definitions contributed by MCP servers.
* **Messages**: your conversation history.
* **Free Space**: unused context still available.
* **Buffer**: capacity reserved for the model's response and headroom.

### Managing large tool output for {% data variables.copilot.copilot_cli_short %}

To prevent a single tool response from consuming too much of the context window, tool output larger than 20 KiB is saved to a temporary file by default. The model receives the file path and a preview instead of the full output. This applies to all tools, including tools provided by MCP servers.

To change the limit, set `COPILOT_LARGE_OUTPUT_THRESHOLD_BYTES` to a positive number of UTF-8 bytes before starting the CLI. Increasing the limit leaves less context available for the conversation and subsequent tool calls.

## Compaction

Compaction is the process that allows {% data variables.product.prodname_copilot_short %} to support long-running sessions without hitting the limits of the context window.

The availability, behavior, and controls for compaction vary by client and surface. For example:

* In the {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.github_copilot_app %}, compaction can happen automatically or you can trigger it with `/compact`.
* In {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_jetbrains_ides %}, you can manually compact a session using the {% data variables.copilot.copilot_extension_short %}.

### When compaction happens

The exact thresholds and behavior for compaction varies depending on the client and its configuration.

For the {% data variables.copilot.copilot_cli_short %}, when your conversation reaches approximately 80% of the context window's capacity, {% data variables.copilot.copilot_cli_short %} automatically starts compacting the context in the background. This leaves a buffer of approximately 20% so that tool calls can continue to run while compaction is in progress. If the context fills to approximately 95% before compaction finishes, {% data variables.copilot.copilot_cli_short %} pauses briefly to wait for compaction to complete before continuing.

In the {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.github_copilot_app %}, you can trigger compaction manually at any time by entering the `/compact` command. This is useful if you're about to start a new phase of work and want to free up context space proactively. Press <kbd>Esc</kbd> to cancel a manual compaction if you change your mind.

### Where compaction happens

Compaction is available in most supported clients, including {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_jetbrains_ides %}, and Eclipse, but not in the Xcode IDE.

### What compaction does

When compaction runs, {% data variables.product.prodname_copilot_short %}:

1. Takes a snapshot of the current conversation history.
1. Sends the full conversation to the AI model with a special prompt that asks it to generate a structured summary. The summary captures the goals of the conversation, what was done, key technical details, important files, and planned next steps.
1. Replaces the old conversation history with the summary, along with any original user instructions and the current state of any plans or to-do lists.
1. Keeps any messages that were added while compaction was running in the background.

The result is that the conversation history is compressed into a much smaller summary, freeing up the majority of the context window for new work. {% data variables.product.prodname_copilot_short %} uses this summary to maintain continuity—it knows what was discussed, what was decided, and what to do next—even though the original messages have been replaced.

### What compaction does not preserve

Compaction is a summarization process, so some detail is inevitably lost. The summary captures the key points, but fine-grained details—such as the exact wording of every message, the full output of every command, or minor decisions made early in a long conversation—may not be included. If you need {% data variables.product.prodname_copilot_short %} to recall a very specific detail from much earlier in the session, it may not have that information after compaction.

You can't reverse a completed compaction.

### What would happen without compaction

Without compaction, once the context window filled up, {% data variables.product.prodname_copilot_short %} would have to fall back to simply dropping old messages from the conversation history—removing them without any summary or record. This would mean losing context abruptly, with no way for {% data variables.product.prodname_copilot_short %} to know what was in the deleted messages. Compaction avoids this by replacing the history with an intelligent summary rather than discarding it.

## Checkpoints

A checkpoint can be a saved summary produced by compaction, a restore point for file edits, and/or a point from which you can fork a conversation. These are distinct capabilities, and their availability and actions varies by client and surface.

Throughout the rest of this article, a **checkpoint** refers to a saved compaction summary, such as the numbered, titled files created in the {% data variables.copilot.copilot_cli_short %}.

### When checkpoints are useful

* **Reviewing what happened**: After a long session with multiple compactions, earlier phases of the conversation are no longer in the active context. Checkpoints let you read back through what {% data variables.product.prodname_copilot_short %} did at each compaction.
* **Verifying continuity**: If you want to check that {% data variables.product.prodname_copilot_short %}'s summary accurately captured your earlier work before continuing, you can review the most recent checkpoint.
* **Debugging confusion**: If {% data variables.product.prodname_copilot_short %} seems to have forgotten a decision or is going in a direction that contradicts earlier work, checking checkpoints can reveal what was preserved during compaction and what might have been summarized differently than you expected.

> [!NOTE]
> In most clients including the {% data variables.copilot.copilot_cli_short %}, checkpoint summaries are created automatically. You don't need to manage them—they're there if you need them. For most sessions, you won't need to look at checkpoints at all.

### Viewing checkpoints for {% data variables.copilot.copilot_cli_short %}

To see all checkpoints in your current session, enter:

```copilot copy
/session checkpoints
```

This lists every checkpoint with its number and title:

```text
Checkpoint History (3 total):
  3. Refactoring authentication module
  2. Implementing user dashboard
  1. Initial planning and setup
```

Use the checkpoint number to view the full content of any checkpoint. For example, to view checkpoint 2, enter:

```copilot copy
/session checkpoints 2
```

## Using long-running sessions

Automatic compaction allows you to continue working in a long-running session without worrying about hitting the limits of the context window. There are times when this is very useful, and other times when you might prefer to start a fresh session.

### When long sessions are useful

Long-running sessions work well when:

* You're working on a multi-phase task, such as building a feature that requires scaffolding, implementation, testing, and then creating a pull request.
* You're iterating on a problem and want {% data variables.product.prodname_copilot_short %} to retain the context of what's been tried and what hasn't worked.
* You're doing exploratory work across a codebase and building up shared understanding with {% data variables.product.prodname_copilot_short %} over time.

### When to start a fresh session

Starting a new session is better when:

* You're switching to an unrelated task. {% data variables.product.prodname_copilot_short %} doesn't need the context of your previous work, and a clean context window means more space for the new task.
* The conversation has gone through many compactions, and you feel that important context is being lost in the summarization process.
* You want a clean slate—for example, if work went in a wrong direction and you'd rather start over than have {% data variables.product.prodname_copilot_short %} try to reconcile earlier decisions with a new approach.

In some clients and surfaces, you can resume a previous session to continue with its existing conversation context instead of starting over. Resume methods and checkpoint availability vary by client and surface.
