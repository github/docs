---
title: Removing files from Git Large File Storage
intro: 'If you''ve set up {% data variables.large_files.product_name_short %} for your repository, you can remove all files or a subset of files from {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Removing a single file

1.  Remove the file from the repository's Git history using either the `filter-branch` command or BFG Repo-Cleaner. For detailed information on using these, see "[Removing sensitive data from a repository](/articles/removing-sensitive-data-from-a-repository)."
2. Navigate to your *.gitattributes* file.

  {% note %}

  **Note:** Your *.gitattributes* file is generally saved within your local repository. In some cases, you may have created a global *.gitattributes* file that contains all of your {% data variables.large_files.product_name_short %} associations.

  {% endnote %}
3. Find and remove the associated {% data variables.large_files.product_name_short %} tracking rule within the *.gitattributes* file.
4. Save and exit the *.gitattributes* file.

### Removing all files within a {% data variables.large_files.product_name_short %} repository

1. Remove the files from the repository's Git history using either the `filter-branch` command or BFG Repo-Cleaner. For detailed information on using these, see "[Removing sensitive data from a repository](/articles/removing-sensitive-data-from-a-repository)."
2. Optionally, to uninstall {% data variables.large_files.product_name_short %} in the repository, run:
  ```shell
  $ git lfs uninstall
  ```
  For {% data variables.large_files.product_name_short %} versions below 1.1.0, run:
  ```shell
  $ git lfs uninit
  ```

### {% data variables.large_files.product_name_short %} objects in your repository

After you remove files from {% data variables.large_files.product_name_short %}, the {% data variables.large_files.product_name_short %} objects still exist on the remote storage{% if currentVersion == "free-pro-team@latest" %} and will continue to count toward your {% data variables.large_files.product_name_short %} storage quota{% endif %}.

To remove {% data variables.large_files.product_name_short %} objects from a repository, {% if currentVersion == "free-pro-team@latest" %}delete and recreate the repository. When you delete a repository, any associated issues, stars, and forks are also deleted. For more information, see "[Deleting a repository](/github/administering-a-repository/deleting-a-repository)."{% else %}contact your {% data variables.product.prodname_enterprise %} administrator to archive the objects. Archived objects are purged after three months.{% endif %}

{% note %}

**Note:** If you removed a single file and have other {% data variables.large_files.product_name_short %} objects that you'd like to keep in your repository, after deleting and recreating your repository, reconfigure your {% data variables.large_files.product_name_short %}-associated files. For more information, see "[Removing a single file](#removing-a-single-file)" and "[Configuring {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)."

{% endnote %}

### Further reading

- "[About {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Collaboration with {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"
- "[Installing {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
