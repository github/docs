* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository.

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository.

  By using path-specific instructions you can avoid overloading your repository-wide instructions with information that only applies to files of certain types, or in certain directories.

* **Agent instructions**, which are similar to repository-wide custom instructions, but are currently not supported by all {% data variables.product.prodname_copilot_short %} features.

  These are specified in files called `AGENTS.md`, `CLAUDE.md`, or `GEMINI.md`.

For details of support for each of these types of repository custom instructions across different {% data variables.product.prodname_copilot_short %} features, see [AUTOTITLE](/copilot/reference/custom-instructions-support).

For a curated collection of examples, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).
