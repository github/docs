---
title: Researching with {% data variables.copilot.copilot_cli %}
shortTitle: Researching with {% data variables.product.prodname_copilot_short %}
allowTitleToDifferFromFilename: true
intro: 'The `/research` slash command turns {% data variables.product.prodname_copilot_short %} into your research assistant, gathering in-depth information and insights on a topic.'
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

{% data variables.copilot.copilot_cli_short %}'s `/research` slash command is a powerful tool for deep research and investigation. When you enter `/research` followed by details of what you want to know about, {% data variables.product.prodname_copilot_short %} activates a specialized research agent that gathers and processes information from your codebase, from relevant {% data variables.product.github %} repositories, and from the web. This built-in custom agent produces a comprehensive Markdown report with citations, along with a brief summary in the CLI. You can view the full report and save it as a gist on {% data variables.product.github %}, making it easy to share.

The command is designed to provide exhaustive, well-cited answers to complex questions about codebases, APIs, libraries, software architecture and other technical topics.

## Using the `/research` slash command

In an interactive CLI session, enter:

```copilot copy
/research TOPIC
```

Where `TOPIC` is a natural language description of what you want to find out about.

Depending on the permissions you have given the CLI, {% data variables.product.prodname_copilot_short %} may ask you to grant permission for it to create a directory in which to store data as it compiles the research.

When the research is complete, {% data variables.product.prodname_copilot_short %} shows you a summary of the key findings, and gives you a link to a Markdown file containing the full report.

## Viewing and sharing a research report

You can use the link displayed when the research completes to view the full report in your default editor for Markdown files.

Alternatively, press <kbd>Ctrl</kbd>+<kbd>Y</kbd> to open the current session's most recent research report in the terminal.

> [!NOTE]
> The application used to display a report when you press <kbd>Ctrl</kbd>+<kbd>Y</kbd> is determined by the value of the `COPILOT_EDITOR`, `VISUAL`, or `EDITOR` environment variables (in that order of precedence). If none of these are set, the CLI will use vi on Linux or vim on macOS.

To share the report you can either save it to a file or create a {% data variables.product.github %} gist.

1. To create a gist enter:

   ```copilot copy
   /share gist research
   ```

   To save to a file, enter:

   ```copilot copy
   /share file research [PATH]
   ```

   If you omit the `[PATH]` parameter, the file will be saved to the current working directory with a filename based on the research topic.

1. Use the up/down and enter keys to select the report you want to share from the list of research reports you've created during the current session.

   The URL of the gist, or the path to the file, is displayed in the CLI.

## Benefits of `/research`

* **Depth over speed**: Normal chat is optimized for quick answers. `/research` is optimized for thoroughness. It produces reports that can be hundreds of lines long, with architecture diagrams, code snippets, and citations.

* **Saved and shareable output**: Reports are saved to disk as Markdown files. You can view and share them at any time. This makes the research output a permanent artifact, rather than a transient chat message.

* **Works across repositories**: When logged into {% data variables.product.github %}, the agent can search across your organization's repositories, fetch files from any public or accessible private repository, and search the web—it's not limited to your local codebase.

* **Query-type adaptation**: Rather than generating a standard, one-size-fits-all report, the response format automatically adapts to whether you're asking a how-to question, a conceptual question, or requesting a technical deep-dive.

* **Autonomous operation**: The agent never interrupts you with clarifying questions. It makes reasonable assumptions and explicitly documents them in a "Confidence Assessment" section.

## Example prompts for `/research`

### Codebase architecture

```copilot copy
/research What is the architecture of this codebase?
```

**Why it works well**: The research agent has access to `grep`, `glob`, and `view` tools scoped to your current working directory. It can explore the full project tree, read key files, and synthesize an architectural overview—something a normal chat response might do only superficially. The agent will typically produce architecture diagrams, component breakdowns, and data flow descriptions.

### How a specific technology works

```copilot copy
/research How does React implement concurrent rendering?
```

**Why it works well**: The agent uses specialized tools to pull information from the internet, and to look at actual React source code on {% data variables.product.github %}. It's instructed to prioritize code over documentation and provide file paths with line numbers.

### Understanding internal implementation patterns

```copilot copy
/research How are feature flags implemented at our organization?
```

**Why it works well**: The agent is explicitly instructed to "always prioritize internal/private implementations over public/open-source alternatives" and to search the organization's repositories first using `org:ORGNAME` queries. It knows to look for internal naming patterns like `-hub`, `-service`, `-client`.

### Comparing technologies or approaches

```copilot copy
/research What's the difference between JWT and session-based authentication?
```

**Why it works well**: The agent adapts its response to "Conceptual/Explanatory Questions" with narrative explanations, trade-offs, and design decisions. It will typically use tables for comparisons of three or more items.

### Process/how-to questions

```copilot copy
/research How do I add an endpoint to the API?
```

**Why it works well**: The agent is trained to detect query type and provide step-by-step guidance with links to relevant docs, contacts, and systems for process/how-to type questions.

### Deep-diving into a specific codebase component

```copilot copy
/research How is the session management system implemented in this repo?
```

**Why it works well**: Combining local tools (`grep`, `glob`, `view`) with the agent's instructions to "trace imports, calls, and type references" and "follow dependencies" means it will walk through the actual implementation, not just give a high-level answer.

## When you might _not_ want to use `/research`

* **Quick, simple questions**: If you just want to know "What does this function do?" or "Fix this bug", a normal chat message is faster and more appropriate. `/research` is designed for questions requiring extensive investigation.

* **When you need code changes**: `/research` produces a report, not code modifications. It uses the `create` tool to save the report file, but does not use `edit`, `bash`, or other code-modification tools. If you need the agent to actually change your code, use a normal prompt (typically starting in plan mode).

* **Time-sensitive interactions**: Research takes longer than a normal response because the agent makes many tool calls (searching code, fetching files, searching the web). If you need a quick answer in the flow of coding, normal chat is better.

## Considerations and things to be aware of

* **Reports are tied to your session**: Research reports are stored in a session-specific research directory. If you start a new session, previous research won't be available within the CLI when you use the <kbd>Ctrl</kbd>+<kbd>Y</kbd> shortcut or the `/share` slash command. However, you can access previous reports from the appropriate `~/.copilot/session-state/SESSION-ID/research/` directory.

  In Linux or macOS, you can use the following command at a terminal command prompt to list the 10 most recent CLI session directories:

  ```bash copy
  ls -dtl ~/.copilot/session-state/*/ | head -10
  ```

* **The research agent uses a specific model**: The research agent is hard-coded to use a particular AI model (see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#built-in-agents)). The model selection is not configurable via the `/model` command. The research agent always uses the defined model regardless of what model you've selected for your main session.

* **Report quality varies by query type**: The agent classifies your query into three types and adapts its response accordingly:

  * **Process questions** → step-by-step guidance (minimal code).
  * **Conceptual questions** → narrative explanation with context.
  * **Technical deep-dives** → full architecture diagrams, component sections, and code examples.

  The way you phrase your prompt may affect the agent's choice of research classification. For example, if you want a technical deep-dive but you phrase your question as "What is X?", you might get a conceptual answer. In this situation you could rephrase your prompt to be more explicit about the type of report you want {% data variables.product.prodname_copilot_short %} to produce. For example: "Give me a technical deep-dive into X, with architecture diagrams and code examples."

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli)
