---
title: What is my disk quota?
redirect_from:
  - /articles/what-is-the-size-limit-for-a-repository/
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
intro: '{% data variables.product.product_name %} tries to provide abundant storage for all Git repositories, although there are hard limits for file and repository sizes.'
versions:
  free-pro-team: '*'
---
{% data reusables.large_files.use_lfs_tip %}

## File and repository size limitations

To ensure performance and reliability for our users, we actively monitor signals of overall repository health. Repository health is a function of various interacting factors, including size, commit frequency, contents, and structure.

We recommend repositories remain small, ideally less than 1 GB, and less than 5 GB is strongly recommended. Smaller repositories are faster to clone and easier to work with and maintain. Individual files in a repository are strictly limited to a {% data variables.large_files.max_github_size %} maximum size limit. For more information, see "[Working with large files](/github/managing-large-files/working-with-large-files)."

If your repository excessively impacts our infrastructure, you might receive an email from {% data variables.contact.github_support %} asking you to take corrective action. We try to be flexible, especially with large projects that have many collaborators, and will work with you to find a resolution whenever possible. You can prevent your repository from impacting our infrastructure by effectively managing your repository's size and overall health. You can find advice and a tool for repository analysis in the [`github/git-sizer`](https://github.com/github/git-sizer) repository.

{% note %}

**Note:** If you add a file to a repository via a browser, the file can be no larger than {% data variables.large_files.max_github_browser_size %}. For more information, see "[Adding a file to a repository](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)."

{% endnote %}

## Backups

Git is not designed to serve as a backup tool. However, there are many solutions specifically designed for performing backups, such as [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/), and [CrashPlan](https://www.crashplan.com/en-us/).

## Database dumps

Version control systems, such as Git, are not designed to handle large SQL files. To share large databases with other developers, we recommend using [Dropbox](https://www.dropbox.com/).

Git shouldn't be used to backup your production servers. For more information, see "[Backups](/github/managing-large-files/what-is-my-disk-quota#backups)."

## External dependencies

External dependencies can cause Git repositories to become very large. To avoid filling a repository with external dependencies, we recommend you use a package manager. Popular package managers for common languages include [Bundler](http://bundler.io/), [Node's Package Manager](http://npmjs.org/), and [Maven](http://maven.apache.org/). These package managers support using Git repositories directly, so you don't need pre-packaged sources.

## Packaged release versions

We don't recommend distributing compiled code and pre-packaged releases within your repository. For more information, see "[Distributing large binaries](/github/managing-large-files/distributing-large-binaries)."

## Changing history of an existing repository

If you already have a repository that's quite large, you can reduce the size of a repository by removing large files from the repository's history. For more information, see "[Removing files from a repository's history](/github/managing-large-files/removing-files-from-a-repositorys-history)."
