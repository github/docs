---
title: Working with canvas extensions in the GitHub Copilot app
shortTitle: Canvas extensions
intro: 'Use canvases in the {% data variables.copilot.github_copilot_app %} to build shared, agent-driven artifacts and interfaces for human-agent collaboration.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-canvas-extensions-signup&utm_medium=docs&utm_campaign=github-copilot-app-ga-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## About canvas extensions

A canvas extension is a shared, interactive surface for a work artifact, such as a plan, triage board, browser session, release checklist, dashboard, incident, or spreadsheet.

While chat is useful for defining intent and discussing tasks, most work happens in work surfaces such as a terminal, a browser, a document, or a dashboard. Canvases allow you to collaborate with the agent directly in those work surfaces.

Canvases are bidirectional: the agent can update the canvas while it works, and you can edit on that same surface. When you create a canvas, the agent generates capabilities based on your prompt and workflow. As you iterate, you can ask it to add, remove, or revise those capabilities. Once created, canvases open in the app's right side panel.

For example, you can create an agentic kanban canvas where people use UI controls to create or move cards, and ask the agent to add agent-callable capabilities such as `get_board`, `add_card`, and `move_card`. This lets people and agents coordinate work from one shared board.

## Why use a canvas

Canvases are helpful when a task or workflow needs structure, iteration, and verification, and a chat is not enough. You can use chat to instruct the agent and reason through ambiguity, then use the canvas to inspect, steer, and verify visible work directly without needing to rely on prompts only.

Canvases provide two kinds of value: they improve the human-agent partnership by giving both sides a shared surface to work in, and they let you customize that surface to match your workflow.

Canvases are useful when you need to:

* Ground agent work in an actual artifact or environment that fits your workflow.
* Steer or correct work directly on the shared surface, then let the agent continue from those changes.
* Inspect progress and outcomes as visible changes to a shared artifact, not just chat responses.
* Keep work continuous across turns, sessions, and handoffs.

## Example use cases

Canvas extensions can be customized to fit your needs or your team's needs across a range of scenarios. For example:

* **Agentic kanban boards:** Let humans and agents add cards, move work, and kick off tasks.
* **Issue triage boards:** Summarize top issues, recurring themes, and user pain points for a repository.
* **Markdown canvases:** Build a persistent markdown file for planning your day, prioritizing issues and pull requests, launching and monitoring agent sessions, and keeping related work in one editable surface.
* **Document canvases:** Open, edit, and collaborate on documents, spreadsheets, slide decks, and other artifacts directly in the app.

## Creating a canvas

You can create a new canvas from within a session using the `/create-canvas` skill.

1. Open or start an agent session.
1. In the prompt box, type `/create-canvas`, then describe the workflow and capabilities that you want the canvas to support, including what people should be able to do and what the agent should be able to do.
   For example, you can ask the agent to:

   * `Create an agentic kanban canvas with actions to create, assign, and move cards.`
   * `Create a markdown canvas that combines my meetings with prioritized issues and pull requests, then lets me launch and track agent sessions from that canvas.`
1. You can choose whether the canvas should be shared with your team or kept personal:
   * **Project scope:** `.github/extensions` for team-shared canvases committed to the repository.
   * **User scope:** `~/.copilot/extensions` for personal canvases on your machine.

The agent will build the canvas and open it in the right side panel once complete. After that, you can continue iterating by asking the agent to change the interface, shared state, and capabilities.

## How canvas extensions are structured

Each canvas extension lives in its own directory under either `.github/extensions` (project scope) or `~/.copilot/extensions` (user scope).

Although implementations can vary, a canvas extension commonly includes:

* A `package.json` file for extension metadata and dependencies.
* An extension entry file, such as `extension.mjs`, that defines the canvas behavior and capabilities.
* Optional JSON artifacts (for example, files under an `artifacts` directory) for persisted canvas data and state.

When a canvas opens in the app side panel, both people and agents interact with that same shared state through UI actions and agent-callable capabilities.

## Working in a canvas

Once a canvas is open, you can iterate quickly with the agent.

* Add or revise the capabilities of the canvas.
* Use canvas controls (such as buttons, cards, or filters) to update the surface directly.
* Ask the agent to call capabilities exposed by the canvas to update data or take actions.

## Further reading

* [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions).
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app).