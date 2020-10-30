---
title: Adding a file to a repository
intro: 'You can upload and commit an existing file to a {% data variables.product.product_name %} repository. Drag and drop a file to any directory in the file tree, or upload files from the repository''s main page.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Files that you add to a repository via a browser are limited to {% data variables.large_files.max_github_browser_size %} per file. You can add larger files, up to {% data variables.large_files.max_github_size %} each, via the command line. For more information, see "[Adding a file to a repository using the command line](/articles/adding-a-file-to-a-repository-using-the-command-line)."

{% tip %}

**Советы:**
- You can upload multiple files to {% data variables.product.product_name %} at the same time.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
2. Under your repository name, click **Upload files**. ![Upload files button](/assets/images/help/repository/upload-files-button.png)
{% else %}
2. Above the list of files, using the **Add file** drop-down, click **Upload files**. !["Upload files" in the "Add file" dropdown](/assets/images/help/repository/upload-files-button.png)
{% endif %}
3. Drag and drop the file or folder you'd like to upload to your repository onto the file tree. ![Drag and drop area](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Click **Commit changes**. ![Commit changes button](/assets/images/help/repository/commit-changes-button.png)
