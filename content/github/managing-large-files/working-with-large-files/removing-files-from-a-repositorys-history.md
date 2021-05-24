---
title: Removing files from a repository's history
intro: 'To remove a large file from your repository, you must completely remove it from your local repository and from {% data variables.product.product_location %}.'
redirect_from:
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% warning %}

**Warning**: These procedures will permanently remove files from the repository on your computer and {% data variables.product.product_location %}. If the file is important, make a local backup copy in a directory outside of the repository.

{% endwarning %}

### Removing a file added in the most recent unpushed commit

If the file was added with your most recent commit, and you have not pushed to {% data variables.product.product_location %}, you can delete the file and amend the commit:

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. To remove the file, enter `git rm --cached`:
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. Commit this change using `--amend -CHEAD`:
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Push your commits to {% data variables.product.product_location %}:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Removing a file that was added in an earlier commit

If you added a file in an earlier commit, you need to remove it from the repository's history. To remove files from the repository's history, you can use the BFG Repo-Cleaner or the `git filter-branch` command. For more information see "[Removing sensitive data from a repository](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)."
