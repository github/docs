---
title: Removing files from Git Large File Storage
intro: 'If you''ve set up {% data variables.large_files.product_name_short %} for your repository, you can remove all files or a subset of files from {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Remove files
---
## Removing a single file

1. Remove the file from the repository's Git history using either the `filter-repo` command or BFG Repo-Cleaner. For detailed information on using these, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."
1. Navigate to your _.gitattributes_ file.

   {% note %}

   **Note:** Your _.gitattributes_ file is generally saved within your local repository. In some cases, you may have created a global _.gitattributes_ file that contains all of your {% data variables.large_files.product_name_short %} associations.

   {% endnote %}
1. Find and remove the associated {% data variables.large_files.product_name_short %} tracking rule within the _.gitattributes_ file.
1. Save and exit the _.gitattributes_ file.

## Removing all files within a {% data variables.large_files.product_name_short %} repository

1. Remove the files from the repository's Git history using either the `filter-repo` command or BFG Repo-Cleaner. For detailed information on using these, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."
1. Optionally, to uninstall {% data variables.large_files.product_name_short %} in the repository, run:

   ```shell
   git lfs uninstall
   ```

   For {% data variables.large_files.product_name_short %} versions below 1.1.0, run:

   ```shell
   git lfs uninit
   ```

## {% data variables.large_files.product_name_short %} objects in your repository

After you remove files from {% data variables.large_files.product_name_short %}, the {% data variables.large_files.product_name_short %} objects still exist on the remote storage{% ifversion fpt or ghec %} and will continue to count toward your {% data variables.large_files.product_name_short %} storage quota{% endif %}.

To remove {% data variables.large_files.product_name_short %} objects from a repository, {% ifversion fpt or ghec %}delete and recreate the repository. When you delete a repository, any associated issues, stars, and forks are also deleted. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository)." If you need to purge a removed object and you are unable to delete the repository, please [contact support](/support) for help.{% else %}contact your {% data variables.product.prodname_enterprise %} administrator to archive the objects. Archived objects are purged after three months.{% endif %}

{% note %}

**Note:** If you removed a single file and have other {% data variables.large_files.product_name_short %} objects that you'd like to keep in your repository, after deleting and recreating your repository, reconfigure your {% data variables.large_files.product_name_short %}-associated files. For more information, see "[Removing a single file](#removing-a-single-file)" and "[AUTOTITLE](/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage)."

{% endnote %}

## Further reading

* "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)"
* "[AUTOTITLE](/repositories/working-with-files/managing-large-files/collaboration-with-git-large-file-storage)"
* "[AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)"
