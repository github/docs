---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158579"
---
将 {% data variables.product.prodname_dotcom_the_website %} 上的帐户连接到 {% data variables.product.prodname_github_codespaces %} 扩展后，可以创建新的 codespace。 有关 {% data variables.product.prodname_github_codespaces %} 扩展的详细信息，请参阅 [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 单击“添加”图标：{% octicon "plus" aria-label="The plus icon" %}。

   ![{% data variables.product.prodname_github_codespaces %} 中的“新建 Codespace”选项](/assets/images/help/codespaces/create-codespace-vscode.png)

3. 键入要在其中开发的存储库的名称，然后将其选中。

   ![搜索要在其中新建 codespace 的存储库](/assets/images/help/codespaces/choose-repository-vscode.png)

   如果你选择的存储库归组织所有，并且该组织已将此存储库的 codespace 配置为可向组织或其父企业计费，则后续提示中会显示一条消息，告知谁将支付 codespace 费用。

4. 单击要在其中开发的分支。

   ![搜索要在其中新建 codespace 的分支](/assets/images/help/codespaces/choose-branch-vscode.png)

5. 如果系统提示选择开发容器配置文件，请从列表中选择一个文件。

   ![为 {% data variables.product.prodname_github_codespaces %} 选择一个开发容器配置文件](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. 选择你要使用的机器类型。

   ![新 codespace 的实例类型](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   注意：{% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
