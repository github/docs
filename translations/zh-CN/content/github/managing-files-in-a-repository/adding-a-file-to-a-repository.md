---
title: 添加文件到仓库
intro: '您可以上传并提交现有文件到 {% data variables.product.product_name %} 仓库。 将文件拖放到文件树中的任何目录，或者从仓库的主页面上传文件。'
redirect_from:
  - /articles/adding-a-file-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

通过浏览器添加到仓库的文件大小限于每个文件 {% data variables.large_files.max_github_browser_size %}。 较大的文件可通过命令行添加，最大每个 {% data variables.large_files.max_github_size %}。 更多信息请参阅“[使用命令行添加文件到仓库](/articles/adding-a-file-to-a-repository-using-the-command-line)”。

{% tip %}

**提示：**
- 您可以同时将多个文件上传到 {% data variables.product.product_name %}。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
2. 在仓库名称下，单击 **Upload files（上传文件）**。 ![上传文件按钮](/assets/images/help/repository/upload-files-button.png)
{% else %}
2. 在文件列表上方，使用 **Add file（添加文件）**下拉菜单，单击 **Upload files（上传文件）**。 !["Add file（添加文件）"下拉菜单中的"Upload files（上传文件）"](/assets/images/help/repository/upload-files-button.png)
{% endif %}
3. 将要上传的文件或文件夹拖放到文件树中。 ![拖放区域](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. 单击 **Commit changes（提交更改）**。 ![提交更改按钮](/assets/images/help/repository/commit-changes-button.png)
