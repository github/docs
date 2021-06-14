---
title: 使用 GitHub 导入工具导入仓库
intro: 如果您有项目托管在另一个版本控制系统上，可以使用 GitHub 导入工具将其自动导入到 GitHub。
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github/
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
versions:
  free-pro-team: '*'
---

{% tip %}

**提示：**GitHub 导入工具不适用于所有导入。 例如，如果您现有的代码托管在私有网络上，我们的工具便无法访问。 在这些情况下，我们建议对 Git 仓库[使用命令行导入](/articles/importing-a-git-repository-using-the-command-line)，或者对导入自其他版本控制系统的项目使用[源代码迁移工具](/articles/source-code-migration-tools)。

{% endtip %}

如果在导入时要将仓库中的提交匹配到作者的 GitHub 用户帐户，请确保在开始导入之前，仓库的每个贡献者都有 GitHub 帐户。

{% data reusables.repositories.migrating-from-codeplex %}

{% data reusables.repositories.repo-size-limit %}

1. 在任何页面的右上角，单击 {% octicon "plus" aria-label="Plus symbol" %}，然后单击 **Import repository（导入仓库）**。 ![新仓库菜单中的导入仓库选项](/assets/images/help/importer/import-repository.png)
2. 在 "Your old repository's clone URL"（您的旧仓库的克隆 URL）下，输入要导入的项目的 URL。 ![导入的仓库 URL 对应的文本字段](/assets/images/help/importer/import-url.png)
3. 选择拥有仓库的用户帐户或组织，然后输入 GitHub 上帐户的名称。 ![仓库所有者菜单和仓库名称字段](/assets/images/help/importer/import-repo-owner-name.png)
4. 指定新仓库是*公共*还是*私有*。 更多信息请参阅“[设置仓库可见性](/articles/setting-repository-visibility)”。 ![公共或私有仓库单选按钮](/assets/images/help/importer/import-public-or-private.png)
5. 检查您输入的信息，然后单击 **Begin import（开始导入）**。 ![开始导入按钮](/assets/images/help/importer/begin-import-button.png)
6. 如果您的旧项目有密码保护，请输入该项目的登录信息，然后单击 **Submit（提交）**。 ![有密码保护项目的密码表单和提交按钮](/assets/images/help/importer/submit-old-credentials-importer.png)
7. 如果有多个项目托管于旧项目的克隆 URL 上，请选择要导入的项目，然后单击 **Submit（提交）**。 ![要导入的项目列表和提交按钮](/assets/images/help/importer/choose-project-importer.png)
8. 如果项目包含超过 100 MB 的大文件，请选择是否使用 [Git Large File Storage](/articles/versioning-large-files) 导入大文件，然后单击 **Continue（继续）**。 ![Git Large File Storage 菜单和继续按钮](/assets/images/help/importer/select-gitlfs-importer.png)

在仓库完成导入时，您会收到一封电子邮件。

### 延伸阅读

- "[使用 GitHub 导入工具更新提交作者属性](/articles/updating-commit-author-attribution-with-github-importer)"
