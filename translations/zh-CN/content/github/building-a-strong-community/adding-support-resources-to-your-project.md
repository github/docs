---
title: 将支持资源添加到项目
intro: 您可以创建 SUPPORT 文件，让人们知道获取项目相关帮助的方式。
redirect_from:
  - /articles/adding-support-resources-to-your-project
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

要将人们定向到特定的支持资源，您可以将 SUPPORT 文件添加到仓库的根文件夹 `docs` 或 `.github`。 当有人在您的仓库中创建议题时，就会看到项目 SUPPORT 文件的链接。

![支持指南](/assets/images/help/issues/support_guidelines_in_issue.png)

您可以为组织{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} 或用户帐户{% endif %} 创建默认的支持资源。 更多信息请参阅“[创建默认社区健康文件](/github/building-a-strong-community/creating-a-default-community-health-file)”。

{% tip %}

**提示：**为帮助人们查找您的支持指南，您可以从仓库其他位置（如[自述文件](/articles/about-readmes/)）链接到 SUPPORT 文件。

{% endtip %}

### 将支持资源添加到项目

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. 在文件名字段中，输入 *SUPPORT.md*（全大写）。
4. 在 **Edit new file（编辑新文件）**选项卡中，添加人们如何获取项目支持的信息。
5. 要查阅 SUPPORT 文件，请单击 **Preview（预览）**。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
