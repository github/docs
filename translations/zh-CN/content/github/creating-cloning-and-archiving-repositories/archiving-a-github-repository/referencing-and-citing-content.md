---
title: 参考和引用内容
intro: 您可以使用第三方工具参考和引用 GitHub 上的内容。
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
versions:
  free-pro-team: '*'
topics:
  - Repositories
---
### 使用 Zenodo 发出仓库的持久标识符

为了使您的仓库在学术文献中更易于参考，您可以创建持久标识符，也称为数字对象标识符 (DOI)。 您可以使用数据存档工具 [Zenodo](https://zenodo.org/about) 来存档 {% data variables.product.product_name %} 仓库并发出存档的 DOI。

{% tip %}

**提示：**
- Zenodo 只能访问公共仓库，因此请确保您要存档的仓库是[公共](/articles/making-a-private-repository-public)仓库。
- 如果要存档属于组织的仓库，则组织所有者可能需要[批准访问](/articles/approving-oauth-apps-for-your-organization) Zenodo 应用程序。
- 确保您的仓库中包含[许可证](/articles/open-source-licensing)，以使读者了解他们如何才能重复使用您的工作。

{% endtip %}

1. 导航到 [Zenodo](http://zenodo.org/)。
2. 在屏幕的左上角，单击 **Log in（登录）**。 ![Zenodo 登录按钮](/assets/images/help/repository/zenodo_login.png)
3. 单击 **Log in with GitHub（使用 GitHub 登录）**。 ![使用 GitHub 登录 Zenodo](/assets/images/help/repository/zenodo_login_with_github.png)
4. 检查有关访问权限的信息，然后单击 **Authorize application（授权应用程序）**。 ![授权 Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. 导航到 [Zenodo GitHub 页面](https://zenodo.org/account/settings/github/)。 ![Zenodo GitHub 页面](/assets/images/help/repository/zenodo_github_page.png)
6. 在您想要存档的仓库名称右侧，将按钮从 **Off（关）**切换为 **On（开）**可启用存档。 ![启用 Zenodo 仓库存档](/assets/images/help/repository/zenodo_toggle_on.png)

每次创建新 {% data variables.product.product_name %} [发行版](/articles/about-releases/)时，Zenodo 都会存档您的仓库并发出一个新 DOI。 按照“[创建发行版](/articles/creating-releases/)”中的步骤操作，创建新的发行版。

### 使用 Figshare 宣传和引用研究资料

学者可以使用数据管理服务 [Figshare](http://figshare.com) 来宣传和引用研究资料。 更多信息请参阅 [Figshare 的支持站点](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account)。
