---
title: 参考和引用内容
intro: 您可以使用第三方工具参考和引用 GitHub 上的内容。
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: e0bb3dabe5e9ebc8a4dff80797087c8adadfb710
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129426'
---
## 使用 Zenodo 发出仓库的持久标识符

为了使您的仓库在学术文献中更易于参考，您可以创建持久标识符，也称为数字对象标识符 (DOI)。 可以使用数据存档工具 [Zenodo](https://zenodo.org/about) 对 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的存储库进行存档，并为存档发出 DOI。

{% tip %}

**提示：**
- Zenodo 只能访问公共存储库，因此请确保要存档的存储库是[公共](/articles/making-a-private-repository-public)的。
- 如果要存档属于组织的存储库，组织所有者可能需要对 Zenodo 应用程序[批准访问权限](/articles/approving-oauth-apps-for-your-organization)。
- 请确保存储库中包含[许可证](/articles/open-source-licensing)，以便读者了解如何重复使用你的工作。

{% endtip %}

1. 导航到 [Zenodo](http://zenodo.org/)。
2. 在屏幕左下角单击“登录”。 ![Zenodo 登录按钮](/assets/images/help/repository/zenodo_login.png)
3. 单击“使用 GitHub 登录”。 ![使用 GitHub 登录 Zenodo](/assets/images/help/repository/zenodo_login_with_github.png)
4. 审阅有关访问权限的信息，然后单击“授权应用程序”。 ![授权 Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. 导航到 [Zenodo GitHub 页面](https://zenodo.org/account/settings/github/)。 ![Zenodo GitHub 页面](/assets/images/help/repository/zenodo_github_page.png)
6. 在要存档的存储库的名称右侧，将按钮从“关”切换为“开”，使它能够进行存档。 ![在存储库上启用 Zenodo 存档](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo 会在你每次创建新 {% data variables.product.product_name %} [版本](/articles/about-releases/)时存档存储库和发出新的 DOI。 按照“[创建版本](/articles/creating-releases/)”中的步骤创建新的版本。

## 使用 Figshare 宣传和引用研究资料

学者可以使用数据管理服务 [Figshare](http://figshare.com) 来宣传和引用研究材料。 有关详细信息，请参阅“[Figshare 的支持站点](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account)”。
