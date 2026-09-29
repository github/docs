---
applyTo: ".github/instructions/**,.github/agents/**"
---

# Editing Copilot content instruction and agent files

This applies when you add, edit, review, or remove a Copilot instruction or shared agent file that guides how **content** (articles, data files) is written. It does **not** apply to code instructions or agents owned by the engineering team (for example `code.instructions.md`).

Content-writing guidance goes in one of two places. Decide which before writing anything.

## Always-on instruction files (`.github/instructions/*.instructions.md`)

These load automatically into every Copilot interaction whose files match the `applyTo` pattern. Use them only for rules that apply to every content interaction, regardless of persona, task, or phase.

* Keep the always-on set that loads for content under roughly **150 discrete rules**, with a soft backstop of **~6,500 tokens**. Rule count matters more, because adherence slips as the number of instructions grows. Both are soft warnings: slightly over is fine. Run `npm run measure-instruction-budget` to see where a change lands, and report the before and after numbers.
* Front-load the most important rules. Rules earlier in a file are followed more reliably, and the order in which separate files are combined is not guaranteed.
* A rule earns a spot only if it scores well on these factors:
  * **Model default gap**: The model consistently gets it wrong without the rule.
  * **Breadth**: It applies to every content interaction, not just some personas, tasks, or phases.
  * **Cost of missing it**: Getting it wrong causes expensive rework (wrong audience, wrong scope), not polish that is cheap to catch in review.
  * **Conciseness**: It fits in one or two short, actionable rules.
* Write rules as short imperatives, not multi-paragraph explanations.

## Shared agent files (`.github/agents/`)

Writers invoke these deliberately. Each agent has its own budget (up to 30,000 characters), so guidance that is narrow, detailed, or needs room to explain goes here. There are three kinds:

* **Persona agents** target a specific audience: `builder-writer` (developers building software) and `driver-writer` (admins and decision-makers enabling developers at scale).
* **Task agents** help with a specific type of work, such as a content design plan or release notes.
* **Review agents** give a focused editing pass on existing content, such as readability.

Use agents, not skills, for docs-writing guidance. Skills can be invoked automatically and unpredictably, which undermines consistent output across the team.

## Always

* Do not duplicate guidance that already exists in another instruction file or shared agent. Check before adding.
* Keep content-writing guidance in these shared files, never in personal instructions, so it stays consistent across the team.

The reasoning behind these rules is written up for humans at https://github.com/github/technical-content/blob/main/contributing-to-docs/docs-work/copilot-instruction-architecture.md. You do not need to read it to follow them.
