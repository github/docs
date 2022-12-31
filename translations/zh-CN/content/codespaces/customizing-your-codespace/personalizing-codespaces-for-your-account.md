---
title: 个性化您账户的 Codespaces
shortTitle: Personalize your codespaces
intro: 你可以通过使用 {% data variables.product.product_name %} 上的 `dotfiles` 存储库或使用设置同步来个性化 {% data variables.product.prodname_codespaces %}。
redirect_from:
- /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
- /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
- /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 2c136318f3eff0a8caed8900520b8eb8a7772add
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681347"
---
## <a name="about-personalizing--data-variablesproductprodname_codespaces-"></a>关于个性化 {% data variables.product.prodname_codespaces %}

在使用任何开发环境时，根据您的喜好和工作流程自定义设置和工具是一个重要步骤。 {% data variables.product.prodname_codespaces %} 允许两种主要方法个性化您的代码空间。

- [设置同步](#settings-sync) - 可以在 {% data variables.product.prodname_codespaces %} 与其他 {% data variables.product.prodname_vscode %} 实例之间使用和共享 {% data variables.product.prodname_vscode %} 设置。
- [Dotfiles](#dotfiles) - 可以使用 `dotfiles` 存储库指定脚本、shell 首选项和其他配置。

{% data variables.product.prodname_codespaces %} 个性化适用于您创建的任何代码空间。

项目维护员还可以定义默认配置，将应用到任何人创建的仓库的每个代码空间。 有关详细信息，请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。

## <a name="settings-sync"></a>设置同步

设置同步允许您在机器和 {% data variables.product.prodname_vscode %} 实例中共享配置，如设置、键盘快捷方式、片段、扩展和 UI 状态。

要启用设置同步，在活动栏的左下角，选择 {% octicon "gear" aria-label="The gear icon" %} 并单击“打开设置同步...”。 在对话框中，选择要同步的设置。

![在管理菜单中设置同步选项](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

有关详细信息，请参阅 {% data variables.product.prodname_vscode %} 文档中的[设置同步指南](https://code.visualstudio.com/docs/editor/settings-sync)。

## <a name="dotfiles"></a>Dotfiles

Dotfiles 是类似 Unix 的系统上以 `.` 开头的文件和文件夹，用于控制系统上应用程序和 shell 的配置。 您可以在 {% data variables.product.prodname_dotcom %} 上的仓库中存储和管理 dotfiles。 有关 dotfiles 存储库中所含内容的建议和教程，请参阅 [GitHub 执行 dotfiles](https://dotfiles.github.io/)。

dotfiles 仓库可能包括 shell 别名和首选项、您想要安装的任何工具或您想要执行的任何其他代码个性化。

可以通过在[个人 {% data variables.product.prodname_codespaces %} 设置](https://github.com/settings/codespaces)中选择存储库，将 {% data variables.product.prodname_codespaces %} 配置为使用你拥有的任何存储库中的 dotfiles。

创建新的代码空间时，{% data variables.product.prodname_dotcom %} 会将所选存储库克隆到代码空间环境，并查找以下文件之一来设置环境。

* install.sh
* _install_
* bootstrap.sh
* _bootstrap_
* script/bootstrap
* _setup.sh_
* setup
* script/setup

如果未找到这些文件，则所选 dotfiles 存储库中以 `.` 开头的文件或文件夹通过符号链接到代码空间的 `~` 或 `$HOME` 目录。

对所选 dotfiles 仓库所做的任何更改只会应用到每个新的代码空间，而不影响任何现有的代码空间。

{% note %}

注意：目前，{% data variables.product.prodname_codespaces %} 不支持使用 `dotfiles` 存储库个性化 {% data variables.product.prodname_vscode %} 编辑器的用户设置。 可以为项目存储库中的特定项目设置默认“工作区”和“远程 [Codespaces]”设置。  有关详细信息，请参阅“[开发容器简介](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)”。

{% endnote %}

### <a name="enabling-your-dotfiles-repository-for--data-variablesproductprodname_codespaces-"></a>为 {% data variables.product.prodname_codespaces %} 启用 dotfiles 存储库

您可以使用所选的 dotfiles 存储库来个性化您的 {% data variables.product.prodname_codespaces %} 环境。 选择 dotfiles 存储库后，可以向其中添加脚本、首选项和配置。 然后，您需要从个人 {% data variables.product.prodname_codespaces %} 设置页面启用 dotfiles。

{% warning %}

警告：Dotfiles 能够运行任意脚本，这些脚本可能包含意外或恶意代码。 在安装 dotfiles 存储库之前，我们建议检查脚本以确保它们不会执行任何意外操作。

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“Dotfiles”下，选择“自动安装 dotfiles”，以便 {% data variables.product.prodname_codespaces %} 自动将 dotfiles 安装到你创建的每个新 codespace 中。
   ![安装 dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. 选择要从中安装 dotfile 的存储库。
   ![选择 dotfiles 存储库](/assets/images/help/codespaces/select-dotfiles-repo.png)

您可以随时将更多脚本、首选项、配置文件添加到 dotfiles 存储库或编辑现有文件。 对设置的更改将仅由新的代码空间选取。

如果 codespace 无法从 dotfiles 中选取配置设置，请参阅“[排查 {% data variables.product.prodname_codespaces %} 的 dotfiles 问题](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)”。

## <a name="other-available-settings"></a>其他可用设置

还可以使用其他 [{% data variables.product.prodname_codespaces %} 设置](https://github.com/settings/codespaces)对 {% data variables.product.prodname_codespaces %} 进行个性化设置：

- 若要设置默认区域，请参阅“[为 {% data variables.product.prodname_codespaces %} 设置默认区域](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)”。
- 若要设置编辑器，请参阅“[为 {% data variables.product.prodname_codespaces %} 设置默认编辑器](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)”。
- 若要添加加密的机密，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的加密机密](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)”。
- 若要启用 GPG 验证，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的 GPG 验证](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)”。
- 若要允许 codespace 访问其他存储库，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的访问和安全性](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)”。

## <a name="further-reading"></a>延伸阅读

* [创建新存储库](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)
