---
title: Deleting files in a repository
intro: 'You can delete an individual file{% ifversion fpt or ghes > 3.0 %} or an entire directory{% endif %} in your repository on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes > 3.0 %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
---
## About file{% ifversion fpt or ghes > 3.0 %} and directory{% endif %} deletion

You can delete an individual file in your repository{% ifversion fpt or ghes > 3.0 %} or an entire directory, including all the files in the directory{% endif %}.

If you try to delete a file{% ifversion fpt or ghes > 3.0 %} or directory{% endif %} in a repository that you don’t have write permissions to, we'll fork the project to your user account and help you send a pull request to the original repository after you commit your change. For more information, see "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."

If the file{% ifversion fpt or ghes > 3.0 %} or directory{% endif %} you deleted contains sensitive data, the data will still be available in the repository's Git history. To completely remove the file from {% data variables.product.product_name %}, you must remove the file from your repository's history. For more information, see "[Removing sensitive data from a repository](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)."

## Deleting a file

1. Browse to the file in your repository that you want to delete.
2. At the top of the file, click {% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes > 3.0 %}
## Deleting a directory

1. Browse to the directory in your repository that you want to delete.
1. In the top-right corner, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete directory**.
  ![Button to delete a directory](/assets/images/help/repository/delete-directory-button.png)
1. Review the files you will delete.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% endif %}
