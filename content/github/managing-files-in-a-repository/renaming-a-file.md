---
title: Renaming a file
intro: 'You can rename any file in your repositories directly in {% data variables.product.product_name %}. Renaming a file also gives you the opportunity to [move the file to a new location](/articles/moving-a-file-to-a-new-location).'
redirect_from:
  - /articles/renaming-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tips**:

- If you try to rename a file in a repository that you don’t have access to, we will fork the project to your user account and help you send [a pull request](/articles/about-pull-requests) to the original repository after you commit your change.
- File names created via the web interface can only contain alphanumeric characters and hyphens (`-`). To use other characters, create and commit the files locally and then push them to the repository.
- Some files, such as images, require that you rename them from the command line. For more information, see "[Renaming a file using the command line](/articles/renaming-a-file-using-the-command-line)."

{% endtip %}

1. In your repository, browse to the file you want to rename.
2. In the upper right corner of the file view, click {% octicon "pencil" aria-label="The edit icon" %} to open the file editor.
![Edit file icon](/assets/images/help/repository/edit-file-icon.png)
3. In the filename field, change the name of the file to the new filename you want. You can also update the contents of your file at the same time.
![Editing a file name](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
