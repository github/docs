---
title: Adding a file to a repository using the command line
intro: 'You can upload an existing file to a {{ site.data.variables.product.product_name }} repository using the command line.'
redirect_from:
  - /articles/adding-a-file-to-a-repository-from-the-command-line/
  - /articles/adding-a-file-to-a-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tip:** You can also [add an existing file to a repository from the {{ site.data.variables.product.product_name }} website](/articles/adding-a-file-to-a-repository).

{% endtip %}

{{ site.data.reusables.command_line.manipulating_file_prereqs }}

{{ site.data.reusables.repositories.sensitive-info-warning }}

1. On your computer, move the file you'd like to upload to {{ site.data.variables.product.product_name }} into the local directory that was created when you cloned the repository.
{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
{{ site.data.reusables.command_line.switching_directories_procedural }}
{{ site.data.reusables.git.stage_for_commit }}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {{ site.data.reusables.git.unstage-codeblock }}
  ```
{{ site.data.reusables.git.commit-file }}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {{ site.data.reusables.git.reset-head-to-previous-commit-codeblock }}
  ```
{{ site.data.reusables.git.git-push }}

### 더 읽을거리

- "[Creating new files](/articles/creating-new-files)"
- "[Adding an existing project to GitHub using the command line](/articles/adding-an-existing-project-to-github-using-the-command-line)"
