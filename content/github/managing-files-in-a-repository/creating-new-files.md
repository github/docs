---
title: Creating new files
intro: 'You can create new files directly on {% data variables.product.product_name %} in any repository you have write access to.'
redirect_from:
  - /articles/creating-new-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

When creating a file on {% data variables.product.product_name %}, consider the following:

- If you try to create a new file in a repository that you don’t have access to, we will fork the project to your user account and help you send [a pull request](/articles/about-pull-requests) to the original repository after you commit your change.
- File names created via the web interface can only contain alphanumeric characters and hyphens (`-`). To use other characters, [create and commit the files locally, then push them to the repository on {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. In your repository, browse to the folder where you want to create a file.
{% data reusables.files.add-file %}
4. In the file name field, type the name and extension for the file. To create subdirectories, type the `/` directory separator.
![New file name](/assets/images/help/repository/new-file-name.png)
5. On the **Edit new file** tab, add content to the file.
![Content in new file](/assets/images/help/repository/new-file-content.png)
6. To review the new content, click **Preview**.
![New file preview button](/assets/images/help/repository/new-file-preview.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Further reading

- "[Adding a file to a repository](/articles/adding-a-file-to-a-repository)"
- "[Adding a file to a repository using the command line](/articles/adding-a-file-to-a-repository-using-the-command-line)"
