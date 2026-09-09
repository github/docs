---
title: Adding custom instructions for {% data variables.copilot.copilot_cli %}
shortTitle: Add custom instructions
intro: 'Give {% data variables.product.prodname_copilot_short %} additional context on how to understand your project and how to build, test and validate its changes.'
versions:
  feature: copilot
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
redirect_from:
  - /copilot/how-tos/copilot-cli/add-repository-instructions
  - /copilot/how-tos/copilot-cli/add-custom-instructions
contentType: how-tos
docsTeamMetrics:
  - copilot-cli
---

{% data variables.product.prodname_copilot %} can provide responses that are tailored to your personal preferences, the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create custom instructions that automatically add this information for you. The additional information is not displayed, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

## Types of custom instructions

{% data variables.copilot.copilot_cli %} supports instructions from the following locations.

Unless noted in the table below, {% data variables.copilot.copilot_cli_short %} discovers repository and agent instruction files in the **standard locations**: the repository root, the current working directory, intermediate directories between them, and any directories nested in the path of a file it is working on. Modular instruction files (those matching `*.instructions.md`) are path-specific—a file with an `applyTo` value applies only to matching files.

| Location | Scope and behavior |
| --- | --- |
| `$HOME/.copilot/copilot-instructions.md` | User-level instructions that apply across repositories. |
| `$HOME/.copilot/instructions/**/*.instructions.md` | Modular user-level instructions. |
| `.github/copilot-instructions.md` | Repository-wide instructions, discovered in the standard locations. |
| `.github/instructions/**/*.instructions.md` | Modular repository instructions, discovered in the standard locations but not intermediate directories. |
| `AGENTS.md` | Agent instructions, discovered in the standard locations. For more information, see the [agentsmd/agents.md repository](https://github.com/agentsmd/agents.md). |
| `CLAUDE.md` | Agent instructions, discovered in the standard locations. {% data variables.copilot.copilot_cli_short %} also uses `.claude/CLAUDE.md`. |
| `GEMINI.md` | Agent instructions, discovered in the standard locations. |
| Directories listed in `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` | Additional `AGENTS.md` and `*.instructions.md` files. Separate multiple directories with commas. |

If you set the `COPILOT_HOME` environment variable, {% data variables.copilot.copilot_cli_short %} uses that directory instead of `$HOME/.copilot` for both user-level instruction locations.

Use the `/instructions` command to view the instruction files discovered for the current session and enable or disable individual files.

## How multiple instruction files interact

When multiple applicable user-level and repository instruction files exist, {% data variables.copilot.copilot_cli_short %} combines their instructions. It removes duplicate copies of identical user-level `copilot-instructions.md`, repository-wide, and agent instructions, but does not define a general precedence order between these files. Avoid conflicting instructions.

Path-specific instructions are included only when their `applyTo` value matches a file that {% data variables.copilot.copilot_cli_short %} is working with. An instruction file that you disable using `/instructions` is not included.

## Creating repository-wide custom instructions

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

   For help on writing effective custom instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization#writing-effective-custom-instructions).

### Referencing other files

In `.github/copilot-instructions.md`, `AGENTS.md`, or `CLAUDE.md`, use `@` followed by a relative path to include another file. {% data variables.copilot.copilot_cli_short %} reads the referenced file immediately and supports references within referenced files.

Referenced files must remain within the repository, or within the custom instructions directory for local instructions. Absolute paths and paths beginning with `~/` are not loaded. File references are not expanded in `GEMINI.md` or `*.instructions.md` files.

## Creating path-specific custom instructions

{% data reusables.copilot.custom-instructions-path %}

## Custom instructions in use

Changes you make to custom instructions files are not immediately available for use in active CLI sessions. To apply your changes, exit the current session and then either resume it (for example, run `copilot --continue`), or start a new session (for example, use `/new` from within an interactive session).

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/customize-code-review)
