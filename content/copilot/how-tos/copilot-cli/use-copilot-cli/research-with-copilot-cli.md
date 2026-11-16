---
title: Researching with {% data variables.copilot.copilot_cli %}
shortTitle: Research with {% data variables.copilot.copilot_cli_short %}
allowTitleToDifferFromFilename: true
intro: 'Use the `/research` slash command to investigate a complex topic and produce a cited report from your codebase, repositories on {% data variables.product.github %}, and web sources.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Build with Copilot CLI
docsTeamMetrics:
  - copilot-cli
redirect_from:
  - /copilot/concepts/agents/copilot-cli/research
---

## About research in {% data variables.copilot.copilot_cli_short %}

The `/research` slash command invokes a specialized research agent. It investigates a topic and produces a cited Markdown report. The agent can gather information from your local codebase, public and accessible private repositories across your organization, and the web.

Research is optimized for complex questions that require an in-depth investigation. For an overview of research across {% data variables.product.prodname_copilot_short %} surfaces, see [AUTOTITLE](/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/researching-with-agents).

## Running a research investigation

1. In an interactive {% data variables.copilot.copilot_cli_short %} session, enter:

   ```copilot copy
   /research TOPIC
   ```

   Replace `TOPIC` with a natural-language description of what you want to investigate.

1. If prompted, review and approve the permissions the agent needs. For example, the agent may request permission to create a directory to store data while compiling the research.
1. Wait for the research to complete. {% data variables.product.prodname_copilot_short %} displays a summary of the key findings. It also provides a link to the full Markdown report.
1. Review the report, including its sources and documented assumptions.

## Writing an effective research prompt

State your question, its scope, and the type of response you want. If relevant, include the repositories, components, technologies, constraints, or time period to investigate.

The research agent adapts its report to the question:

* Process questions typically produce step-by-step guidance.
* Conceptual questions typically produce narrative explanations and tradeoffs.
* Technical deep dives can include architecture diagrams and code examples.

Below are some example research prompts and explanations of why they work well.

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

## Viewing and sharing a research report

When the research completes, use the displayed link to open the full report in your default Markdown editor. Alternatively, press <kbd>Ctrl</kbd>+<kbd>Y</kbd> to open the most recent research report from the current session.

> [!NOTE]
> The editor used by <kbd>Ctrl</kbd>+<kbd>Y</kbd> is determined by the `COPILOT_EDITOR`, `VISUAL`, or `EDITOR` environment variables, in that order. On Linux and macOS, if none of these variables are set, {% data variables.copilot.copilot_cli_short %} uses vi.

To create a {% data variables.product.github %} gist containing a research report, enter:

```copilot copy
/share gist research
```

To save a report to a file, enter:

```copilot copy
/share file research [PATH]
```

If you omit `[PATH]`, the report is saved to the current working directory with a filename based on the research topic.

Use the arrow keys and <kbd>Enter</kbd> to select a report created during the current session. {% data variables.copilot.copilot_cli_short %} then displays the URL of the gist or the path to the saved file.

## Considerations

* **Research reports belong to a session**: The report picker and <kbd>Ctrl</kbd>+<kbd>Y</kbd> shortcut only show reports from the current session. You can still access reports from previous sessions in `~/.copilot/session-state/SESSION-ID/research/`.
* **Research uses a dedicated model**: The research agent uses its configured model regardless of the model selected for your main session. You cannot change the research model with `/model`.
* **Research takes longer than normal chat**: The agent searches multiple sources and produces a detailed report. Use a normal prompt for quick, narrowly scoped questions.
* **Research does not make code changes**: The research workflow produces findings rather than modifying your project. Start or resume a normal agent task when you are ready to implement changes.
