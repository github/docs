---
title: 创建新仓库
intro: 您可以在个人帐户或者您有足够权限的任何组织中创建新仓库。
redirect_from:
  - /creating-a-repo/
  - /articles/creating-a-repository-in-an-organization/
  - /articles/creating-a-new-organization-repository/
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**提示：**所有者可限制组织中的仓库创建权限。 更多信息请参阅“[限制在组织中创建仓库](/articles/restricting-repository-creation-in-your-organization)”。

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_cli %} 创建仓库。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh 仓库创建`](https://cli.github.com/manual/gh_repo_create)”。

{% endtip %}
{% endif %}

{% data reusables.repositories.create_new %}
2. （可选）要创建具有现有仓库的目录结构和文件的仓库，请使用 **Choose a template（选择模板）**下拉菜单并选择一个模板仓库。 您将看到由您和您所属组织拥有的模板仓库，或者您以前使用过的模板仓库。 更多信息请参阅“[从模板创建仓库](/articles/creating-a-repository-from-a-template)”。 ![Template drop-down menu](/assets/images/help/repository/template-drop-down.png){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
3. （可选）如果您选择使用模板，要包括模板中所有分支的目录结构和文件，而不仅仅是默认分支，请选择 **Include all branches（包括所有分支）**。 ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
3. 在“Owner（所有者）”下拉菜单中，选择要在其上创建仓库的帐户。 ![所有者下拉菜单](/assets/images/help/repository/create-repository-owner.png)
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. 如果您不使用模板，可以使用许多可选项预填充仓库。 如果要将现有仓库导入 {% data variables.product.product_name %}，请不要选择上述任何选项，否则可能会导致合并冲突。 您可以通过用户界面添加或创建新文件，或者选择稍后使用命令行添加新文件。 更多信息请参阅“[使用命令行导入 Git 仓库](/articles/importing-a-git-repository-using-the-command-line/)”、“[使用命令行将文件添加到仓库](/articles/adding-a-file-to-a-repository-using-the-command-line)”和“[解决合并冲突](/articles/addressing-merge-conflicts/)”。
    - 您可以创建自述文件以介绍您的项目。 更多信息请参阅“[关于自述文件](/articles/about-readmes/)”。
    - 您可以创建 *.gitignore* 文件以设置忽略规则。 更多信息请参阅“[忽略文件](/articles/ignoring-files)”。{% if currentVersion == "free-pro-team@latest" %}
    - 您可以选择为项目添加软件许可。 更多信息请参阅“[许可仓库](/articles/licensing-a-repository)”。{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% if currentVersion == "free-pro-team@latest" %}
9. 在生成的 Quick Setup（快速设置）页面底部的“Import code from an old repository（从旧仓库导入代码）”下，您可以选择将项目导入新仓库。 为此，请单击 **Import code（导入代码）**。
{% endif %}

### 延伸阅读

- “[管理对组织仓库的访问](/articles/managing-access-to-your-organization-s-repositories)”
- [开源指南](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
