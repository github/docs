---
title: Importing a Mercurial repository
intro: 'You can import a repository from Mercurial by converting the repository to Git, then pushing the Git repository to {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Mercurial
---

## Prerequisites

To follow these steps, you must use a macOS or Linux system and have the following tools installed:

* [Mercurial](https://www.mercurial-scm.org)
* [Git](https://git-scm.com/downloads)
* {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) (see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)")
* [Python](https://www.python.org), including the `pip` package manager

## Importing a Mercurial repository

{% data reusables.migrations.create-empty-repo %}
1. To confirm that Mercurial is installed on your machine, run `hg --version`.

   The output should be similar to `Mercurial Distributed SCM (version 6.4)`.
{% data reusables.migrations.confirm-git-installed %}
{% data reusables.migrations.confirm-git-lfs-installed %}
1. To confirm that `pip` is installed on your machine, run `pip --version`.

   The output should be similar to `pip 21.2.4`.
1. To install the `mercurial` Python package, run `pip install mercurial`.
1. Download the latest release of [fast-export](https://github.com/frej/fast-export/releases) to your machine, then extract the archive.
1. Move into the extracted directory, then run `./hg-fast-export.sh --help`.

   The output should start with `usage: hg-fast-export.sh`.
1. Clone your Mercurial repository.

   For example, to clone the source code of Mercurial itself to the `mercurial-repo` directory, run `hg clone https://www.mercurial-scm.org/repo/hg mercurial-repo`.
1. Create a new directory, move into the new directory, then initialize a fresh Git repository.

   For example, if you want to name your new repository `mercurial-git`, run `mkdir mercurial-git && cd mercurial-git && git init`.
{% data reusables.migrations.move-into-git-repo-directory %}
1. To configure your new Git repository to handle the case of filenames in the same way as Mercurial, run `git config core.ignoreCase false`.
1. To get a list of committers in your Mercurial project and store the list in `committers.txt`, run the following script.

   ```shell copy
   hg log --template "{author}\n" | sort | uniq > committers.txt
   ```

1. Update your `committers.txt` file, mapping the committer name used in the Mercurial repository to the name you want to use in your Git repository, with the following format:

   ```text
   “The Octocat <octocato@gmail.com>”=”Octocat <octocat@github.com>”
   ```

1. In your initialized Git repository, run `hg-fast-export.sh`, passing in the path to your Mercurial repository and the path to your `committers.txt` file as arguments.

   For example, `../fast-export-221024/hg-fast-export.sh -r ../mercurial-repo -A ../mercurial-repo/committers.txt -M main`.
1. After the import finishes, to check out your newly-created Git repository, run `git checkout HEAD`.
{% data reusables.migrations.add-github-repo-as-remote %}
{% data reusables.migrations.push-to-github %}

{% ifversion fpt or ghec %}

## Further reading

* "[AUTOTITLE](/get-started/using-git/troubleshooting-the-2-gb-push-limit)"
{% endif %}
