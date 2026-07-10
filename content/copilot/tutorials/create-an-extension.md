---
title: Creating extensions for {% data variables.copilot.copilot_cli %}
shortTitle: Create CLI extensions
allowTitleToDifferFromFilename: true
intro: 'Build extensions that add your own tools and slash commands to {% data variables.copilot.copilot_cli_short %}.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.copilot.copilot-cli.cli-extensions-experimental %}

An extension lets you add your own capabilities to {% data variables.copilot.copilot_cli_short %}. Each extension is a small Node.js module that runs as a separate process alongside your interactive session and connects back to it. Through that connection, an extension can add **tools** that {% data variables.product.prodname_copilot_short %} can call while it works on your behalf, and **slash commands** that you run yourself.

In this tutorial, you'll build two simple extensions as examples of what you can do:

* A tool, called `tool-time`, that {% data variables.product.prodname_copilot_short %} can call to report how long its tool calls have taken so far in a session.
* A slash command, called `/tokencount`, that reports how many tokens you've used since you started counting.

Both examples rely only on the SDK that's bundled with the {% data variables.copilot.copilot_cli_short %}, so there's nothing extra to install. For background on how extensions work, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-cli-extensions).

> [!WARNING]
> Extensions execute on your computer with your privileges. Only load extension code that you trust, in the same way you would only run any other script you didn't write yourself.

## Prerequisites

* **{% data variables.copilot.copilot_cli %}**: You need {% data variables.copilot.copilot_cli_short %} installed and set up. See [AUTOTITLE](/copilot/how-tos/copilot-cli/cli-getting-started).
* **Experimental features enabled**: Extensions are currently an experimental feature. The steps in this tutorial turn on experimental features each time you start the CLI, using the `--experimental` command line option.
* **JavaScript**: Extensions are written in JavaScript, so you'll need to be familiar with this language to create your own extensions.
* **A repository**: The second example adds a project-level extension, so you'll need a local copy of a Git repository in which to add the extension.

## Example extension 1: A "tool time" tool

This example adds a **user-level** extension called `tool-time`. It adds a new tool—called `session_tool_time`—that {% data variables.product.prodname_copilot_short %} can call to report how long tool calls have taken so far this session, and how many calls that covers.

To ensure a tool is used by the CLI, the tool must do something the CLI can't do on its own. In this case, the `session_tool_time` tool keeps track of how long tool calls take by listening to events from the CLI about when tool calls start and finish, and recording the timings itself. Because the CLI doesn't record these timings anywhere that {% data variables.product.prodname_copilot_short %} can read, the only way for {% data variables.product.prodname_copilot_short %} to know them is to call the tool. The tool's description explains this to the model, which steers it toward using the tool when you ask about tool call timings.

### Step 1: Create the extension file

1. Create the following directory and file in your home directory:

   ```text
   ~/.copilot/extensions/tool-time/extension.mjs
   ```

   Because this is under `~/.copilot/extensions/`, the extension is available in **all** your CLI sessions, in every directory—not just one repository.

1. Add this code to `extension.mjs`:

   ```javascript copy
   // Extension: tool-time
   // Adds a session_tool_time tool that reports how long Copilot's tool calls
   // have taken this session. Copilot is never told these timings and they
   // aren't written anywhere, so calling the tool is the only way to find
   // them out.

   import { joinSession } from "@github/copilot-sdk/extension";

   // The tool's own name, so it can avoid timing its own calls.
   const TOOL_NAME = "session_tool_time";

   // Module-level state persists for the whole session, because the extension
   // runs as a single long-lived process.
   const startTimes = new Map(); // tool call id -> Date.now() when call started
   let totalMs = 0; // total milliseconds spent across finished tool calls
   let callCount = 0; // number of finished tool calls measured

   const session = await joinSession({
       tools: [
           {
               name: TOOL_NAME,
               description:
                   "Report how long your tool calls have taken in total so far " +
                   "in THIS session, and how many calls that covers. You are " +
                   "never told how long your tool calls take and the timings " +
                   "aren't recorded anywhere you can read, so call this tool " +
                   "whenever you are asked about it rather than estimating.",
               // Always keep this tool's description in the model's tool list,
               // even when tool search is active, so Copilot reliably sees it:
               defer: "never",
               // Force a permissions approval prompt once, for this extension,
               // rather than on every call of this tool:
               skipPermission: true,
               parameters: { type: "object", properties: {} },
               handler: async () => {
                   const seconds = (totalMs / 1000).toFixed(1);
                   return `So far this session, Copilot's tool calls have taken ${seconds}s in total across ${callCount} call(s).`;
               },
           },
       ],
   });

   // When a tool starts, record the time, keyed by the tool call id so the
   // matching completion can be found later. The tool's own calls are skipped.
   session.on("tool.execution_start", (event) => {
       const data = event.data ?? {};
       if (data.toolName && data.toolName !== TOOL_NAME) {
           startTimes.set(data.toolCallId, Date.now());
       }
   });

   // When a tool finishes, add the elapsed time to the running total.
   session.on("tool.execution_complete", (event) => {
       const data = event.data ?? {};
       const startedAt = startTimes.get(data.toolCallId);
       if (startedAt === undefined) {
           return;
       }
       startTimes.delete(data.toolCallId);
       totalMs += Date.now() - startedAt;
       callCount += 1;
   });
   ```

> [!NOTE]
> * `@github/copilot-sdk/extension` is the extension SDK, which is bundled with the CLI. The CLI resolves this import automatically when it runs your extension, so you don't need to add it to a `package.json` or run a package manager.
> * The `startTimes`, `totalMs`, and `callCount` values live at module scope. Because the extension runs as a single long-lived process for the whole session, they accumulate for as long as the session is open.

### Step 2: Load the extension

1. Start an interactive session with experimental features enabled:

   ```shell copy
   copilot --experimental
   ```

   Because the extension lives under `~/.copilot/extensions/`, you can start the CLI from any directory and the extension will be available.

   If you already had a session open, run `/clear` to start a fresh session, which reloads extensions from disk.

1. Without granting elevated permissions to either the new extension, all extensions, or all tools, you'll be prompted to allow the new extension to skip tool permission prompts. Choose either **Yes** or **Yes, and always allow "user:tool-time" in this directory**.

   > [!NOTE]
   > For the minimum elevated permissions to prevent seeing this message when you start the CLI, add this to your CLI startup command:
   >
   > ```shell copy
   > --allow-tool='extension-permission-access(user:tool-time)'
   > ```
   >
   > For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools).

### Step 3: Confirm the extension is running

Run the `/extensions manage` command to open the extension manager. Your `tool-time` extension should be listed under the **User** group with a status of **running**. Press <kbd>Esc</kbd> to close the manager.

### Step 4: Try it out

1. Unlike a slash command, you don't invoke a tool yourself—{% data variables.product.prodname_copilot_short %} calls it when it's useful. First, give {% data variables.product.prodname_copilot_short %} some work that involves a few tool calls, for example:

   ```copilot copy
   Explore the files in the current directory and give me a short summary of what's here.
   ```

1. Once {% data variables.product.prodname_copilot_short %} finishes responding, ask:

   ```copilot copy
   How long have tool calls taken so far this session?
   ```

   The agent calls the `session_tool_time` tool, from the new extension, and uses it to answer your question.

   > [!TIP]
   > You can confirm that the agent used the new tool by looking at the start of {% data variables.product.prodname_copilot_short %}'s response. The response should be prefixed by the name of the tool that was used; in this case, `session_tool_time`.

### How the tool works

The single call to `joinSession` is what turns a plain Node.js file into a {% data variables.copilot.copilot_cli_short %} extension. It connects the running process to your session and registers everything the extension adds to the CLI—in this case, a single tool.

A tool is defined by these fields:

* **`name`**—the identifier {% data variables.product.prodname_copilot_short %} uses to call the tool.
* **`description`**—what the tool does. The model relies on this text to decide when to call the tool, so it's worth being explicit. This description tells the model that it isn't told these timings itself, which steers it toward calling the tool instead of attempting to work out the timings some other way.
* **`parameters`**—a JSON Schema describing the tool's arguments. This tool takes none, so the schema is an object with no properties.
* **`handler`**—an async function that runs when {% data variables.product.prodname_copilot_short %} calls the tool. Whatever string it returns becomes the tool's result, which the model reads.

Two further fields shape how the tool is offered to the model:

* **`defer: "never"`**—keeps the tool's description in the model's tool list at all times. By default, when many tools are available, the CLI can defer rarely-used tools and let the model search for them on demand. Setting `defer` to `"never"` opts this tool out of that behavior, so {% data variables.product.prodname_copilot_short %} always sees it.

  > [!IMPORTANT]
  > `defer: "never"` simply makes the tool _available_ to {% data variables.product.prodname_copilot_short %}. It doesn't _force_ {% data variables.product.prodname_copilot_short %} to call it. There is no way for an extension to mandate that a particular tool should always be used if there is an alternative means of generating an appropriate response to a prompt. The model always decides for itself which tool to use. In this example, the new tool is reliably used because there's no other way for the model to know the information the tool provides.

* **`skipPermission: true`** allows the tool to run without asking you to approve each call. This is appropriate here because the tool only reads totals the extension has already collected; it doesn't touch your files or run commands.

The timings are gathered by watching the session. The extension subscribes to two events the CLI emits around every tool call:

```javascript
session.on("tool.execution_start", (event) => { /* ... */ });
session.on("tool.execution_complete", (event) => { /* ... */ });
```

A `tool.execution_start` event carries the tool's name (`event.data.toolName`). A `tool.execution_complete` event carries a `success` flag. Neither event carries the other's information, so the extension correlates them using the `toolCallId` that appears on each: when a tool starts, it records the current time under that ID. When the matching completion arrives, it adds the elapsed milliseconds to the running total. The tool skips its own calls so the figure reflects {% data variables.product.prodname_copilot_short %}'s real work.

Because the totals live in the long-lived extension process, they cover the whole session. This is the kind of job extensions are good at: observing what's happening in the session and keeping state across calls.

> [!NOTE]
> * The totals are held in memory, so they reset whenever the extension is reloaded or the session restarts (for example, after `/clear`).
> * The figure is wall-clock time measured from the extension's point of view—the gap between each tool call's start and completion events—so it includes any time a call spent waiting for you to approve it.

## Example extension 2: A token usage slash command

This example adds a project extension called `token-counter`. The extension adds a `/tokencount` slash command that you can use to check how many tokens you've used when interacting with {% data variables.product.prodname_copilot_short %} in the CLI. You run `/tokencount start` when you want to start measuring your token usage, and then you can run `/tokencount` at any later point to check how many tokens you've used since starting the count.

The extension keeps a running total of tokens used in the session by subscribing to events emitted by the CLI, which is something a one-off shell command can't do.

### Step 1: Create the extension file

1. In the root of the Git repository for your project, create the following directories and file:

   ```text
   .github/extensions/token-counter/extension.mjs
   ```

1. Add this code to `extension.mjs`:

   ```javascript copy
   // Extension: token-counter
   // Adds a /tokencount slash command that reports how many tokens you've used
   // since you started counting.

   import { joinSession } from "@github/copilot-sdk/extension";

   // Module-level state. The extension runs as a single long-lived process for
   // the whole session, so these values persist between command invocations.
   let tokensUsed = 0; // Running total of tokens used so far this session.
   let startedAt = null; // tokensUsed when "/tokencount start" was last run.
   // null = not started.
   // startedAt allows you to count tokens multiple times in a session.

   const session = await joinSession({
       commands: [
           {
               name: "tokencount",
               description: "Report how many tokens you've used since " +
                   "'/tokencount start'.",
               handler: async (ctx) => {
                   const arg = (ctx.args ?? "").trim();

                   if (arg === "start") {
                       // Reset: remember the current total as the new baseline.
                       startedAt = tokensUsed;
                       await session.log(
                           "Token counter started. Run '/tokencount' later to " +
                           "see how many tokens you've used.",
                           { level: "info" },
                       );
                       return;
                   }

                   if (startedAt === null) {
                       await session.log(
                           "The token counter has not been started. Start by " +
                           "entering '/tokencount start'.",
                           { level: "info" },
                       );
                       return;
                   }

                   const used = tokensUsed - startedAt;
                   await session.log(
                       `You have used ${used} tokens since entering ` +
                       "'/tokencount start'.",
                       { level: "info" },
                   );
               },
           },
       ],
   });

   // The CLI emits an "assistant.usage" event after each assistant turn. Add the
   // tokens it reports to a running total kept in the extension's memory.
   session.on("assistant.usage", (event) => {
       const { inputTokens = 0, outputTokens = 0 } = event.data ?? {};
       tokensUsed += inputTokens + outputTokens;
   });
   ```

### Step 2: Load the extension

Start an interactive session from the same repository, with experimental features enabled:

```shell copy
copilot --experimental
```

If you already had a session open, you can run `/clear` to start a fresh session, which reloads extensions from disk.

### Step 3: Confirm the extension is running

Run the `/extensions manage` command to open the extension manager. Your `token-counter` extension should be listed under the **Project** group with a status of **running**. Press <kbd>Esc</kbd> to close the manager.

You can also run `/env` to see a summary of everything loaded into the session, including extensions.

### Step 4: Try it out

Unlike a tool, you invoke a slash command yourself. Start the counter:

```copilot copy
/tokencount start
```

Send {% data variables.product.prodname_copilot_short %} a prompt or two so that it uses some tokens—for example, ask it to explain a file. Then check how many tokens you've used:

```copilot copy
/tokencount
```

If you run `/tokencount start` again, the count restarts from zero.

### How the example works

The call to `joinSession` registers everything the extension adds to the CLI—in this case, a single slash command.

A slash command is defined by three fields:

* **`name`**—the command name, without the leading slash. Registering `tokencount` is what makes `/tokencount` available in the session.
* **`description`**—the text shown next to the command in the slash command picker.
* **`handler`**—an async function that runs when you invoke the command. It receives a context object whose `args` property holds the raw text typed after the command name. For `/tokencount start`, `ctx.args` is `"start"`; for a bare `/tokencount`, it is an empty string.

The handler writes its output back to the session with `session.log(message, { level: "info" })`, which prints the message in the transcript.

To know how many tokens have been used, the extension subscribes to a session event:

```javascript
session.on("assistant.usage", (event) => {
    const { inputTokens = 0, outputTokens = 0 } = event.data ?? {};
    tokensUsed += inputTokens + outputTokens;
});
```

The CLI emits an `assistant.usage` event after each assistant turn, carrying the input and output token counts for that turn. The extension adds them to the running total in `tokensUsed`. When you run `/tokencount start`, the handler records the current total in `startedAt`. Entering `/tokencount` with no argument later in the session reports the difference. Because both variables live in the long-lived extension process, they persist for the whole session.

> [!NOTE]
> The totals are held in memory, so they reset whenever the extension is reloaded or the session restarts (for example, after `/clear`).

## Editing and reloading an extension

As you develop an extension, you'll edit `extension.mjs` and want to see your changes. After saving the file, you can pick up the new version in any of these ways:

* Ask {% data variables.product.prodname_copilot_short %} to reload extensions—for example, `Reload my extensions`.
* Run `/clear` to start a new session, which reloads extensions from disk.
* Restart the CLI.

If an extension fails to start or behaves unexpectedly, run `/extensions manage` and inspect the extension to see its status and the path to its log file. Each extension writes a log under `~/.copilot/logs/extensions/`, which is the best place to look when something goes wrong.

## Next steps

* Adapt one of these examples to your own needs. In the CLI, ask {% data variables.product.prodname_copilot_short %} to modify the behavior of either of the example extensions.
* Share a user-level extension. For example, move the `tool-time` extension into a repository's `.github/extensions/` directory to share it with everyone who works in that repository.
* Ask {% data variables.product.prodname_copilot_short %} to create a new extension for you from scratch. {% data variables.copilot.copilot_cli_short %} extensions are powered by the {% data variables.copilot.copilot_sdk_short %}, so an extension can do anything the SDK makes possible, allowing you to add interactive views with buttons and forms, as well as new tools and commands. See [AUTOTITLE](/copilot/how-tos/copilot-sdk).

## Further reading

* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
