All repositories are migrated as private by default, and only the user that ran the migration and organization owners will have access to the repository. If you don't want the repository to be private, change the visibility.

* You can set a repository's visibility with the `--target-repo-visibility` CLI option or the `targetRepoVisibility` GraphQL property.
* You can change a repository's visibility in the browser. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)."
* Alternatively, you can use {% data variables.product.prodname_cli %} to change repository visibility from the command line. You can even add this command to the script that was generated to run your migrations. For more information, see [`gh repo edit`](https://cli.github.com/manual/gh_repo_edit) in the {% data variables.product.prodname_cli %} documentation.
