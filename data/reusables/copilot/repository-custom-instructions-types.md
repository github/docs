You can create repository custom instructions in two ways:

* **Repository-wide instructions**: Create a single `copilot-instructions.md` file at the repository root that applies to all files in the repository.
* **Path-specific instructions**: Create one or more `.instructions.md` files with an `applyTo` field that apply only to specific files or directories. Path-specific instructions are currently supported for **{% data variables.copilot.copilot_chat_short %}** in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and **{% data variables.product.prodname_copilot %} coding agent**.
