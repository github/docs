---
title: 使用 GitHub 导入工具导入仓库
intro: 如果您有项目托管在另一个版本控制系统上，可以使用 GitHub 导入工具将其自动导入到 GitHub。
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use GitHub Importer
ms.openlocfilehash: 09b03d2c2c62cf5812f35a3d5b3379c2d0c8e33e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145911197'
---
{% tip %}

提示：GitHub 导入工具并不适用于所有导入。 例如，如果您现有的代码托管在私有网络上，我们的工具便无法访问。 在这些情况下，我们建议对 Git 存储库[使用命令行导入](/articles/importing-a-git-repository-using-the-command-line)，或者对从其他版本控制系统导入的项目使用[源代码迁移工具](/articles/source-code-migration-tools)。

{% endtip %}

如果在导入时要将存储库中的提交匹配到作者的 GitHub 个人帐户，请确保在开始导入之前，存储库的每个参与者都有 GitHub 帐户。

{% data reusables.repositories.repo-size-limit %}

1. 在任何页面的右上角，单击 {% octicon "plus" aria-label="Plus symbol" %}，然后单击“导入存储库”。
![新存储库菜单中的导入存储库选项](/assets/images/help/importer/import-repository.png)
2. 在 "Your old repository's clone URL"（您的旧仓库的克隆 URL）下，输入要导入的项目的 URL。
![导入的存储库的 URL 对应的文本字段](/assets/images/help/importer/import-url.png)
3. 选择拥有存储库的个人帐户或组织，然后输入 GitHub 上帐户的名称。
![存储库所有者菜单和存储库名称字段](/assets/images/help/importer/import-repo-owner-name.png)
4. 指定新存储库是“公共”还是“专用” 。 有关详细信息，请参阅[设置存储库可见性](/articles/setting-repository-visibility)。
![公共或专用存储库单选按钮](/assets/images/help/importer/import-public-or-private.png)
5. 检查你输入的信息，然后单击“开始导入”。
![“开始导入”按钮](/assets/images/help/importer/begin-import-button.png)
6. 如果你的旧项目需要凭据，请输入该项目的登录信息，然后单击“提交”。 如果在旧项目中为用户帐户启用了 SAML SSO 或 2FA，请在“密码”字段中输入具有存储库读取权限的个人访问令牌，而不是密码。
![受密码保护项目的密码表单和“提交”按钮](/assets/images/help/importer/submit-old-credentials-importer.png)
7. 如果有多个项目托管在旧项目的克隆 URL 上，请选择要导入的项目，然后单击“提交”。
![要导入的项目列表和“提交”按钮](/assets/images/help/importer/choose-project-importer.png)
8. 如果项目包含超过 100 MB 的文件，请选择是否使用 [Git 大型文件存储](/articles/versioning-large-files)导入大型文件，然后单击“继续”。
![“Git 大型文件存储”菜单和“继续”按钮](/assets/images/help/importer/select-gitlfs-importer.png)

在仓库完成导入时，您会收到一封电子邮件。

## 延伸阅读

- “[使用 GitHub 导入工具更新提交作者归属](/articles/updating-commit-author-attribution-with-github-importer)”
