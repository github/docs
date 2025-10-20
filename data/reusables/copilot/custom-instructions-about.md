* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository.

  Repository-wide custom instructions files are used for chat responses, for code review, and also by {% data variables.copilot.copilot_coding_agent %}.

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within the `.github/instructions` directory in the repository.

  By using path-specific instructions you can avoid overloading your repository-wide instructions with information that only applies to files of certain types, or in certain directories.

  > [!NOTE]
  > Currently, path-specific custom instructions files are only used by {% data variables.copilot.copilot_code-review_short %}, {% data variables.copilot.copilot_coding_agent %}, and {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}.

For more information, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).
