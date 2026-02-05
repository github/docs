---
title: Adding custom instructions for Copilot CLI
shortTitle: Add custom instructions
intro: 'Create custom instructions files that give {% data variables.product.prodname_copilot_short %} additional context on how to understand your project and how to build, test and validate its changes.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/how-tos/copilot-cli/add-repository-instructions
contentType: how-tos
---

{% data variables.product.prodname_copilot %} can provide responses that are tailored to your personal preferences, the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create custom instructions that automatically add this information for you. The additional information is not displayed, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

## Types of custom instructions

{% data variables.copilot.copilot_cli %} supports the following types of custom instructions.

### Repository-wide custom instructions

These apply to all requests made in the context of a repository.

These are specified in a `copilot-instructions.md` file in the `.github` directory at the root of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions).

### Path-specific custom instructions

These apply to requests made in the context of files that match a specified path.

These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory at the root of the repository, or within or below a `.github/instructions` directory in the current working directory. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions).

If the path you specify in these instructions matches a file that {% data variables.product.prodname_copilot_short %} is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used. You should avoid potential conflicts between instructions as {% data variables.product.prodname_copilot_short %}'s choice between conflicting instructions is non-deterministic.

### Agent instructions

These are used by various AI agents.

You can create one or more `AGENTS.md` files. These can be located in the repository's root directory, in the current working directory, or in any of the directories specified by a comma-separated list of paths in the `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` environment variable.

Instructions in the `AGENTS.md` file in the root directory, if found, are treated as primary instructions. If an `AGENTS.md` file and a `.github/copilot-instructions.md` file are both found at the root of the repository, the instructions in both files are used.

Instructions found in other `AGENTS.md` files are treated as additional instructions. Any primary instructions that are found are likely to have more effect on {% data variables.product.prodname_copilot_short %}'s responses than additional instructions.

For more information, see the [openai/agents.md repository](https://github.com/openai/agents.md).

Alternatively, you can use `CLAUDE.md` and `GEMINI.md` files. These must be located at the root of the repository.

### Local instructions

These apply within a specific local environment.

You can specify instructions within your own home directory, by creating a file at `$HOME/.copilot/copilot-instructions.md`.

You can also set the `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` environment variable to a comma-separated list of directories. {% data variables.copilot.copilot_cli_short %} will look for an `AGENTS.md` file, and any `.github/instructions/**/*.instructions.md` files, in each of these directories.

## Creating repository-wide custom instructions

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

   For help on writing effective custom instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization#writing-effective-custom-instructions).

## Creating path-specific custom instructions

{% data reusables.copilot.custom-instructions-path %}

{% data reusables.copilot.custom-instructions-note %}

{% data variables.copilot.copilot_cli_short %} caches instructions after they have been read. If you edit an instructions file, and you want to ensure that the changes are used, you must do one of the following:

* Restart {% data variables.copilot.copilot_cli_short %}.
* Use `/resume SESSION-ID`. You can use the `/session` command to find the ID of the current session.

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)
