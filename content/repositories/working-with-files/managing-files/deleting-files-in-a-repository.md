---
title: Deleting files in a repository
intro: 'You can delete an individual file or an entire directory in your repository on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files or directories in a repository.'
topics:
  - Repositories
shortTitle: Delete files
---
## About file and directory deletion

You can delete an individual file in your repository or an entire directory, including all the files in the directory.

If you try to delete a file or directory in a repository that you don’t have write permissions to, we'll fork the project to your personal account and help you send a pull request to the original repository after you commit your change. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

If the file or directory you deleted contains sensitive data, the data will still be available in the repository's Git history. To completely remove the file from {% data variables.product.product_name %}, you must remove the file from your repository's history. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

## Deleting a file

1. Browse to the file in your repository that you want to delete.
{% ifversion code-view-ui %}
1. In the top-right corner, select the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} dropdown menu, then click **Delete file**.

   ![Screenshot of the file list for a directory. To the right of the directory name, a button, labeled with a kebab icon, is outlined in dark orange.](/assets/images/help/repository/delete-file-button.png)
{% else %}
1. At the top of the file, click {% octicon "trash" aria-label="The trash icon" %}.
{% endif %}
{% data reusables.files.commit-message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Deleting a directory

1. Browse to the directory in your repository that you want to delete.
1. In the top-right corner, select the {% octicon "kebab-horizontal" aria-label="More options" %} dropdown menu, then click **Delete directory**.

   ![Screenshot of the file list for a directory. To the right of the directory name, a button, labeled with a kebab icon, is outlined in dark orange.](/assets/images/help/repository/delete-directory-button.png)
1. Review the files you will delete.
{% data reusables.files.commit-message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
