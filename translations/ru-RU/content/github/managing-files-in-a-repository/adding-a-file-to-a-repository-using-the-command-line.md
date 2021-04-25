---
title: Adding a file to a repository using the command line
intro: 'You can upload an existing file to a {% data variables.product.product_name %} repository using the command line.'
redirect_from:
  - /articles/adding-a-file-to-a-repository-from-the-command-line/
  - /articles/adding-a-file-to-a-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

{% tip %}

**Tip:** You can also [add an existing file to a repository from the {% data variables.product.product_name %} website](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. On your computer, move the file you'd like to upload to

{% data variables.product.product_name %} into the local directory that was created when you cloned the repository.
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### Дополнительная литература

- "[Creating new files](/articles/creating-new-files)"
- "[Adding an existing project to GitHub using the command line](/articles/adding-an-existing-project-to-github-using-the-command-line)"
