---
title: Importing a Subversion repository
intro: 'You can import a repository from Subversion by converting the repository to Git, then pushing the Git repository to {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Subversion
---

## Prerequisites

To follow these steps, you must use a macOS or Linux system and have the following tools installed:

- [Subversion](https://subversion.apache.org)
- [Git](https://git-scm.com/downloads), including `git-svn`
- {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) (see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)")

## Importing a Subversion repository

{% data reusables.migrations.create-empty-repo %}
{% data reusables.migrations.confirm-git-installed %}
1. To confirm that `git svn` is available on your machine, run `git svn --version`.

   The output should be similar to `git-svn version 2.40.0 (svn 1.14.2)`.

   If you can run `git` successfully but encounter an error when running `git svn`, you may need to install `git svn` separately. We recommend using Homebrew or the Ubuntu package registry, which include `git-svn` packages.
{% data reusables.migrations.confirm-git-lfs-installed %}
1. Check out your Subversion repository.

   For example, to check out the Logisim open source project from Sourceforge, run `svn checkout https://svn.code.sf.net/p/circuit/code/trunk`.
1. Move into the directory for your Subversion repository.
1. To get a list of authors in your Subversion project and store the list in `authors.txt`, run the following script:

   ```shell copy
   svn log -q | grep -e '^r' | awk 'BEGIN { FS = "|" } ; { print $2" = "$2 }' | sed 's/^[ \t]*//' | sort | uniq > authors.txt
   ```

1. Update your `authors.txt` file, mapping the author name used in the Subversion repository to the name you want to use in your Git repository, with the following format:

   ```text
   octocat = The Octocat <octocat@github.com>
   ```

1. To convert your Subversion repository to a Git repository, use `git svn`.

   - If your Subversion repository has a standard format, with “trunk”, “branches”, and “tags” folders, run `git svn clone -s URL PATH/TO/DESTINATION --authors-file PATH/TO/AUTHORS.TXT`, replacing `URL` with the URL of the Subversion repository, `PATH/TO/DESTINATION` with the path to the directory you want to clone the repository into, and `PATH/TO/AUTHORS.TXT` with the path to your `authors.txt` file.

     For example, to clone the Logisim project from Sourceforge into a directory called logisim, run `git svn clone -s https://svn.code.sf.net/p/circuit/code logisim --authors-file path/to/authors.txt`.

   - If your Subversion repository is non-standard, you can customize `git svn` to handle your repository. For more information, see [git-svn](https://git-scm.com/docs/git-svn) in the Git documentation.
1. Git will check out each SVN revision and turn the revision into a Git commit. If your repository has many files or a lot of history, this process will take a long time.

   For large repositories, the command may freeze. If so, you can begin where you ended by terminating the command with <kbd>Ctrl</kbd>+<kbd>C</kbd>, moving to your new directory, and then running `git svn fetch`.
{% data reusables.migrations.move-into-git-repo-directory %}
{% data reusables.migrations.add-github-repo-as-remote %}
{% data reusables.migrations.push-to-github %}

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/get-started/using-git/troubleshooting-the-2-gb-push-limit)"
{% endif %}
