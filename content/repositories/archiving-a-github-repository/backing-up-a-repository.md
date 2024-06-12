---
title: Backing up a repository
intro: 'You can use Git{% ifversion fpt or ghec %}, a third-party tool,{% endif %} or the API to back up your repository.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
---

You may want to take backups of repositories for archiving or disaster recovery purposes.

Depending on the {% data variables.product.prodname_dotcom %} features you use and your requirements (for example whether you need to be able to restore the backup), there are different backup options which include different data.

You may want to store your backups on an external hard drive and/or upload them to a cloud-based backup or storage service such as [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/), or [Dropbox](https://www.dropbox.com/dropbox).

## Backing up a Git repository with the Git CLI

A Git repository includes all of the files and folders associated with a project, along with each file's revision history. For more information, see "[AUTOTITLE](/get-started/using-git/about-git#about-repositories)."

You can take a backup of a Git repository, including the revision history, by performing a mirror clone with the Git CLI.

To perform a mirror clone, use the `git clone` command with the `--mirror` option.

```bash
git clone --mirror https://github.com/EXAMPLE-USER/REPOSITORY.git
```

If the repository includes {% data variables.large_files.product_name_long %} objects, pull in the objects. For more details on {% data variables.large_files.product_name_long %} and how to install it, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)."

```bash
git lfs fetch --all
```

Once you have cloned the Git repository, you can compress it into an archive (for example a `.zip` or `.tar.gz` file) and move it to a location for safe-keeping.

You can restore your backup by decompressing the archive and then pushing the Git repository to a Git remote.

## Backing up a wiki with the Git CLI

Wikis in {% data variables.product.prodname_dotcom %} are stored as Git repositories. This means that you can back up a wiki by cloning it. For more details on how to clone a wiki using Git, see "[AUTOTITLE](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages#cloning-wikis-to-your-computer)."

Once you have cloned the wiki, you can compress it into an archive (for example a `.zip` or `.tar.gz` file) and move it to a location for safe-keeping.

You can restore your backup by decompressing the archive and then pushing the wiki repository to a Git remote.

## Backing up a Git repository and selected metadata with migration archives

You can use the REST API to generate a migration archive for a repository. For more information, see "[AUTOTITLE](/rest/migrations/orgs)."

These archives are designed for moving data between {% data variables.product.prodname_dotcom %} products, but they can also be used {% ifversion fpt or ghec %}to back up a repository for archiving purposes{% else %} as backups.{% endif %}

{% warning %}

**Warning:** Migration archives do not include all data related to a repository. For example, {% data variables.large_files.product_name_long %} objects, discussions, or packages are not included. For more information on what is included in migration archives, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products)."

{% endwarning %}

Once you have generated an archive, you can move it to a location of your choice for safe-keeping.

{% ifversion ghes %}
Migration archives can be restored to your {% data variables.product.prodname_ghe_server %} instance using the `ghe-migrator` tool, which is accessible over SSH. For more information, see "[AUTOTITLE](/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)."

{% warning %}

**Warning:** Migration archives are not designed to be used as backups, and it is not guaranteed that a migration archive generated today will be restorable in future versions of {% data variables.product.prodname_ghe_server %}.

{% endwarning %}

{% else %}
There is no supported, documented way to restore migration archives on {% data variables.product.prodname_dotcom_the_website %}, so these backups are only suitable for archiving purposes.
{% endif %}

{% ifversion fpt or ghec %}

## Third-party backup tools

A number of self-service tools exist that automate backups of repositories. Backup tools will download data from _specific_ repositories and organize it within a new branch or directory.

For more information about self-service backup tools, see the [Backup Utilities category on {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
