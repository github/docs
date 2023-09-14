---
title: About large files on GitHub
intro: '{% data variables.product.product_name %} limits the size of files you can track in regular Git repositories. Learn how to track or remove files that are beyond the limit.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
---

## About size limits on {% data variables.product.product_name %}

{% data variables.product.product_name %} tries to provide abundant storage for all Git repositories, although there are hard limits for file {% ifversion fpt or ghec or ghae %}and repository sizes{% else %} sizes and recommendations for repository sizes{% endif %}. {% ifversion fpt or ghec %}To ensure performance and reliability for our users, we actively monitor signals of overall repository health. Repository health is a function of various interacting factors, including size, commit frequency, contents, and structure.{% endif %}

### File size limits

{% data variables.product.product_name %} limits the size of files allowed in repositories. If you attempt to add or update a file that is larger than {% data variables.large_files.warning_size %}, you will receive a warning from Git. The changes will still successfully push to your repository, but you can consider removing the commit to minimize performance impact. For more information, see "[Removing files from a repository's history](#removing-files-from-a-repositorys-history)."

{% note %}

**Note:** If you add a file to a repository via a browser, the file can be no larger than {% data variables.large_files.max_github_browser_size %}. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)."

{% endnote %}

{% ifversion ghes %}By default, {% endif %}{% data variables.product.product_name %} blocks files larger than {% data variables.large_files.max_github_size %}. {% ifversion ghes %}However, a site administrator can configure a different limit for {% data variables.location.product_location %}.  For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)."{% endif %}

To track files beyond this limit, you must use {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)."

If you need to distribute large files within your repository, you can create releases on {% data variables.location.product_location %} instead of tracking the files. For more information, see "[Distributing large binaries](#distributing-large-binaries)."

Git is not designed to handle large SQL files. To share large databases with other developers, we recommend using a file sharing service.

{% ifversion fpt or ghec or ghae %}

### Repository size limits

We recommend repositories remain small, ideally less than 1 GB, and less than 5 GB is strongly recommended. {% ifversion ghae %}The maximum size for a repository on {% data variables.product.product_name %} is 100 GB. {% endif %}Smaller repositories are faster to clone and easier to work with and maintain. If your repository excessively impacts our infrastructure, you might receive an email from {% data variables.contact.github_support %} asking you to take corrective action. We try to be flexible, especially with large projects that have many collaborators, and will work with you to find a resolution whenever possible. You can prevent your repository from impacting our infrastructure by effectively managing your repository's size and overall health. You can find advice and a tool for repository analysis in the [`github/git-sizer`](https://github.com/github/git-sizer) repository.

External dependencies can cause Git repositories to become very large. To avoid filling a repository with external dependencies, we recommend you use a package manager. Popular package managers for common languages include [Bundler](http://bundler.io/), [Node's Package Manager](http://npmjs.org/), and [Maven](https://maven.apache.org/). These package managers support using Git repositories directly, so you don't need pre-packaged sources.

Git is not designed to serve as a backup tool. However, there are many solutions specifically designed for performing backups, such as [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/), and [CrashPlan](https://www.crashplan.com/en-us/).
{% endif %}

{% ifversion ghes %}

### Repository size recommendations

We recommend repositories remain small, ideally less than 1 GB, and less than 5 GB is strongly recommended. Smaller repositories are faster to clone and easier to work with and maintain.

You can prevent your repository from impacting your infrastructure by effectively managing your repository's size and overall health. You can find advice and a tool for repository analysis in the [github/git-sizer](https://github.com/github/git-sizer) repository.
{% endif %}

## Removing files from a repository's history

{% warning %}

**Warning**: These procedures will permanently remove files from the repository on your computer and {% data variables.location.product_location %}. If the file is important, make a local backup copy in a directory outside of the repository.

{% endwarning %}

### Removing a file added in the most recent unpushed commit

If the file was added with your most recent commit, and you have not pushed to {% data variables.location.product_location %}, you can delete the file and amend the commit:

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
1. To remove the file, enter `git rm --cached`:

   ```shell
   $ git rm --cached GIANT_FILE
   # Stage our giant file for removal, but leave it on disk
   ```

1. Commit this change using `--amend -CHEAD`:

   ```shell
   $ git commit --amend -CHEAD
   # Amend the previous commit with your change
   # Simply making a new commit won't work, as you need
   # to remove the file from the unpushed history as well
   ```

1. Push your commits to {% data variables.location.product_location %}:

   ```shell
   $ git push
   # Push our rewritten, smaller commit
   ```

### Removing a file that was added in an earlier commit

If you added a file in an earlier commit, you need to remove it from the repository's history. To remove files from the repository's history, you can use the BFG Repo-Cleaner or the `git filter-repo` command. For more information see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

## Distributing large binaries

If you need to distribute large files within your repository, you can create releases on {% data variables.location.product_location %}. Releases allow you to package software, release notes, and links to binary files, for other people to use. For more information, visit "[AUTOTITLE](/repositories/releasing-projects-on-github/about-releases)."

{% ifversion fpt or ghec %}

We don't limit the total size of the binary files in the release or the bandwidth used to deliver them. However, each individual file must be smaller than {% data variables.large_files.max_lfs_size %}.

{% endif %}
