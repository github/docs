---
title: Working with multiple {% data variables.copilot.copilot_cli %} sessions
shortTitle: Work with multiple sessions
allowTitleToDifferFromFilename: true
intro: "Run several {% data variables.copilot.copilot_cli_short %} sessions at once and use the sidebar to quickly move between them."
versions:
    feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

Each time you start {% data variables.copilot.copilot_cli_short %}, you begin or resume a **session**. You can think of a session as a conversation between you and {% data variables.product.prodname_copilot %}, which includes:

* **Your prompts**: What you've asked {% data variables.product.prodname_copilot_short %} to do, and any replies you made when {% data variables.product.prodname_copilot_short %} asked you questions.
* **{% data variables.product.prodname_copilot_short %}'s responses**: Answers, explanations, commands, code changes, and so on.
* **Conversation context**: Information sent to the large language model to allow it to respond to your prompts appropriately.
* **Tool activity**: Files {% data variables.product.prodname_copilot_short %} has accessed, commands it has run, searches it has performed.
* **Session-specific state**: For example, the current working directory, filesystem permissions, access approvals, the current mode (interactive, plan, or autopilot).

You're not limited to one session at a time. You can keep several running side by side and switch between them. This can be useful when you are:

* **Working on two pieces of work at once**—for example, building a feature in one session while fixing an unrelated bug in another.
* **Waiting on a long-running task**—let one session compile, run your test suite, or work autonomously in autopilot while you plan the next change in another.
* **Handing work off**—delegate a task to the cloud and keep an eye on it while you carry on locally.

There are three places where you can work with your sessions:

* The **sessions sidebar**: a panel docked to the left of your current conversation for quickly switching between the sessions. This is the fastest way to move between active, or recently active, local sessions.
* The **Sessions tab**: a more complete list of your session history, including remote sessions. The list is searchable and is displayed in the main CLI area.
* The **session picker**: a command-line interface for switching between sessions, which you can invoke from any local session by entering `/resume` or `/continue`.

The sessions sidebar is the main focus of this article.

## The sessions sidebar

The sidebar is a panel that opens alongside your current chat. Because it sits beside the conversation rather than replacing it, your conversation timeline and prompt input field remain visible while you are on the **Current** tab of the main CLI area. You can see your other sessions without leaving the session you are working in.

### Opening and closing the sidebar

From your conversation, while there is nothing in the prompt input field, press <kbd>←</kbd> to open the sidebar and move focus into it. Press <kbd>→</kbd> to move focus back to the conversation, and again to close the sidebar. If you prefer Vim-style keys, <kbd>h</kbd> and <kbd>l</kbd> work the same way while the sidebar has focus.

### Moving between sessions

While the sidebar has focus, press <kbd>↑</kbd> and <kbd>↓</kbd> (or <kbd>k</kbd> and <kbd>j</kbd>) to move through your sessions. Press <kbd>Enter</kbd> to open the session you've chosen. Focus returns to the conversation, allowing you to immediately type a prompt.

Press <kbd>s</kbd> to change the order in which sessions are listed, cycling through **Recent**, **Created**, **Name**, and **None** (unsorted).

You can also switch to a session with the mouse. Both a single and a double click switch to a session. A single click returns the focus to the conversation (like pressing <kbd>Enter</kbd>), while a double click leaves the focus in the sidebar with that session selected, so you can keep moving through the session list.

### Creating and closing sessions

You can manage your sessions right from the sidebar:

* Press <kbd>n</kbd> to start a **new** session.
* Press <kbd>x</kbd> twice to **close** the highlighted session.

  > [!NOTE]
  > {% data reusables.copilot.close-session %}

At the top of the sidebar are two header buttons: **←** (to close the sidebar) and **+** (to start a new session). Press <kbd>↑</kbd> past the top of the list to move onto this button row, then <kbd>Tab</kbd> to switch between the buttons and <kbd>Enter</kbd> to activate one. You can also click a button directly.

### Reading session status at a glance

Because the sidebar stays on screen while you work, it acts as a session status board. You can tell at a glance which sessions are:

* Currently running (a solid circle icon: `●`).
* The current session displayed in the CLI's **Current** tab (highlighted).
* Recently used, but not currently running (a hollow circle icon: `○`).
* Busy processing a turn (a pulsing circle icon: `● ◉ ◎ ○`), or idle (a static icon).
* Awaiting your attention (`!` for a permission prompt, `?` for a question).
* In a particular mode (plan and autopilot modes use different colored text from the default mode).

### Resizing and mouse control

Beyond clicking a session to switch to it, you can drag the divider between the sidebar and your conversation to resize the panel, and hover the list and use the scroll wheel to move through longer lists of sessions.

### Getting quick help

Press <kbd>?</kbd> while the sidebar is open to see a quick reference guide to the session sidebar.

For the full sidebar reference, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#the-sessions-sidebar).

## The Sessions tab

The **Sessions** tab is a full-screen view of your sessions. Use the <kbd>Tab</kbd> key to switch to this tab. Alternatively, enter `/session`.

The **Sessions** tab offers several things you don't get in the sidebar:

* **Search**: press <kbd>/</kbd> then start typing the name of a session you want to find.
* **Scope filter**: press <kbd>a</kbd> to cycle the list between **local**, **remote**, and **all** sessions.
* **Full history**: the tab scans your complete session store, not just the recent ones.
* **Cloud and remote sessions**: sessions that ran in the cloud appear here so you can resume them.

## Choosing between the sidebar and the Sessions tab

Both places list your sessions, but they are tuned for different jobs. The sidebar is a quick switcher for the sessions you are actively juggling. The **Sessions** tab is the full library and management surface.

| | Sidebar | Sessions tab |
| --- | ------- | ------------ |
| **Layout** | Docked beside your conversation | Full-screen |
| **Your current chat** | Stays visible | Hidden while the tab is open |
| **Sessions shown** | Recent and live local sessions | Your complete history |
| **Cloud / remote sessions** | No | Yes |
| **Search** | No | Yes |
| **Scope (all / local / remote)** | No (just local) | Yes |
| **Best for** | Fast switching in context | Finding, browsing, and managing |

Use the **sidebar** when you want to:

* **Stay in your conversation.** The sidebar keeps your conversation timeline on screen while you see your other sessions. Opening the **Sessions** tab hides your current conversation entirely.
* **Switch fast, in place.** With the sidebar focused, you can quickly switch back and forth between sessions.
* **Keep an eye on status.** Because it stays on screen, the sidebar lets you see your sessions' status and attention markers—no need to navigate away to check on them.
* **Toggle without leaving your flow.** You can open, close, switch sessions with the arrow keys as part of your normal typing.

Use the **Sessions tab** when you want to:

* **Search** for a specific past session.
* **Resume a cloud or remote session**—these only appear in the tab.
* **Browse your full history**—older sessions that have dropped out of the sidebar's recent list are only reachable here.

You don't give up much by staying in the sidebar for day-to-day work. You can do most session management in the sidebar without going to the **Sessions** tab.

## Returning to a previous session

Sessions are saved, so you can come back to work you started earlier—to continue a task, check what an agent did, or reuse the context you had already built up.

* **From the sidebar**: recent sessions for your current directory appear as resumable rows (marked ○). Highlight one and press <kbd>Enter</kbd> to open it and start working there again.
* **From the Sessions tab**: search or browse your complete history, including cloud sessions, and open any of them.
* **With the session picker**: within a local session, enter `/resume` (or `/continue`) to display a picker listing your saved sessions. Use the arrow keys to navigate to a session, then press <kbd>Enter</kbd> to open it, or `d` to delete it. Press `s` to cycle through different sort orders for the list: **relevance** (how well it matches your current working directory), **last used**, **created**, and **name**.

You can also pick a session when you start {% data variables.copilot.copilot_cli_short %} from the command line:

```shell
# Resume the most recent session
copilot --continue

# Choose a session to resume
copilot --resume

# Resume a specific session by ID, ID prefix, or exact name
copilot --resume=SESSION-ID
copilot --resume="my feature"

# Name a new session so it is easy to find later
copilot --name "checkout refactor"
```

## Active and inactive sessions

At any moment, a session is one of two things:

* **Active**: running right now inside {% data variables.copilot.copilot_cli_short %}, whether it's the session you're chatting with or one running in the background. When you switch away from a session it keeps running rather than stopping, so a long task carries on while you move to another. Active sessions are indicated with a filled circle (`●`).
* **Inactive**: saved to disk but not running. Inactive sessions are indicated with an empty circle (`○`).

A local session stays active for as long as the {% data variables.copilot.copilot_cli_short %} process running it stays open. There's no inactivity timeout—a background session sitting idle isn't stopped automatically. When you quit {% data variables.copilot.copilot_cli_short %}, its local sessions stop and become inactive. They're still saved, so you can resume them next time. To stop your machine sleeping while a session is active, use `/keep-alive on`.

Sessions can also run **remotely**. When you delegate a task with [`/delegate`](/copilot/how-tos/copilot-cli/cli-best-practices#the-delegate-command) (or by prefixing a prompt with `&`), {% data variables.product.prodname_copilot_short %} hands the work off to {% data variables.copilot.copilot_cloud_agent %} on {% data variables.product.github %}, which works in the background on your behalf—independently of your CLI. These cloud sessions appear in the **Sessions** tab, where you can resume them and steer locally. For more on hands-off work, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/delegate-tasks-to-cca).

### Stopping a session

To stop the session you are currently working in, use the `/exit` slash command. Alternatively, you can stop a session from the sidebar by highlighting it and pressing <kbd>x</kbd>. This stops the session and removes it from the sidebar until you resume it.

Stopping a session doesn't delete it. The session is saved and you can resume it later.

You don't have to stop sessions. Leaving them running lets you switch back instantly with their full context. But you might stop one to halt work you no longer want: for example, a session running in autopilot mode, or a session running a prompt that you scheduled with `/every` or `/after`. You might also choose to stop a session to free up memory, or just to reduce clutter in the sidebar.

## Session slash commands

You can manage sessions with slash commands from inside any session:

| Command | What it does |
| ------- | ------------ |
| `/new` | Start a new session. |
| `/resume [SESSION-ID]`, `/continue` | Switch to another session, choosing from the picker (or pass an ID). |
| `/rename [NAME]` | Rename the current session (a name is generated if you omit one). |
| `/session` | Open the **Sessions** tab. |
| `/session info` | Show details about the current session. |
| `/session id` | Show the current session ID and copy it to the clipboard. |
| `/session files` | List the files changed in this session. |
| `/session plan` | Show the current plan. |
| `/session checkpoints [N]` | Show the session's checkpoints. |
| `/session cleanup`, `/session prune` | Housekeeping for old or stale session data. |
| `/session delete [ID]`, `/session delete-all` | Delete a session, or all of them. |
| `/exit`, `/quit` | Close the current session. If others are open, the newest remaining one comes to the foreground. The CLI quits only when you close the last session. |

## Customizing the sidebar

The sidebar is available by default. You can turn off the ability to open it, or change various aspects of its behavior, by using the various `/settings sidebar.*` slash commands in an interactive session. For example, you can enable close buttons for each session in the sidebar, and you can have the current focus (conversation or sidebar) follow the mouse pointer position.

For the full list of sidebar settings and their defaults, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#sessions-sidebar-settings).

Further reading:
* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/chronicle)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#session-status-indicators)
