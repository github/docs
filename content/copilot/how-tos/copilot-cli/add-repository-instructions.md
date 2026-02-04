---
title: Adding repository custom instructions
shortTitle: Add repository instructions
intro: 'Create repository custom instructions files that give {% data variables.product.prodname_copilot_short %} additional context on how to understand your project and how to build, test and validate its changes.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
---

This version of this article is for using repository custom instructions with the {% data variables.product.prodname_copilot %} CLI. Click the tabs above for instructions on using custom instructions in other environments.

## Creating custom instructions

{% data variables.product.prodname_copilot %} supports three types of repository custom instructions.

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions).

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions).

  If the path you specify matches a file that {% data variables.product.prodname_copilot_short %} is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used. You should avoid potential conflicts between instructions as {% data variables.product.prodname_copilot_short %}'s choice between conflicting instructions is non-deterministic.

* **Agent instructions** are used by AI agents.

  {% data reusables.copilot.custom-instructions-agents %}

  Alternatively, you can use a single `CLAUDE.md` or `GEMINI.md` file stored in the root of the repository.

## Creating repository-wide custom instructions

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

## Creating path-specific custom instructions

{% data reusables.copilot.custom-instructions-path %}

{% data reusables.copilot.custom-instructions-note %}

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)
