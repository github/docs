---
title: Creating new files
intro: 'You can create new files directly on {% data variables.product.product_name %} in any repository you have write access to.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
When creating a file on {% data variables.product.product_name %}, consider the following:

- If you try to create a new file in a repository that you don’t have access to, we will fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
- File names created via the web interface can only contain alphanumeric characters and hyphens (`-`). To use other characters, [create and commit the files locally, then push them to the repository on {% data variables.product.product_name %}](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
1. In your repository, browse to the folder where you want to create a file.
{% data reusables.files.add-file %}
1. In the file name field, type the name and extension for the file. To create subdirectories, type the `/` directory separator.
1. In the file contents text box, type content for the file.
1. To review the new content, above the file contents, click **Preview**.
{% ifversion code-search-code-view %}
   ![Screenshot of a file in edit mode. Above the text box for editing file contents, a tab, labeled "Preview", outlined in dark orange.](/assets/images/help/repository/new-file-preview.png)
{% else %}
   ![Screenshot of a file in edit mode. Above the text box for editing file contents, a tab, labeled "Preview", outlined in dark orange.](/assets/images/enterprise/repository/new-file-preview.png)
{% endif %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
