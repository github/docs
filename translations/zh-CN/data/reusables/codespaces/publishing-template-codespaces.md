---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159501"
---
如果你使用的是 codespace，可以从 {% data variables.product.prodname_vscode_shortname %} Web 客户端或桌面应用程序发布它。

{% data reusables.codespaces.source-control-display-dark %}
1. 若要暂存更改，请单击已添加或更改文件旁边的 +，如果你更改了多个文件并希望全部暂存，请单击“更改”旁边的按钮 。

   ![突出显示的暂存按钮的源代码管理侧栏](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   注意： 如果从 {% data variables.product.company_short %} 的空白模板开始，则不会看到更改列表，除非已将目录初始化为 Git 存储库。 若要发布从空白模板创建的 codespace，请在“源代码管理”视图中单击“发布到 {% data variables.product.company_short %}”，然后跳到步骤 5。

   {% endnote %}
2. 若要提交暂存更改，请键入描述所做更改的提交消息，然后单击“提交”。

   ![包含提交消息的源代码管理侧栏](/assets/images/help/codespaces/vscode-commit-button.png) 
3. 单击“发布分支”。
   
   ![VS Code 中“发布分支”按钮的屏幕截图](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. 在“存储库名称”下拉列表中，键入新存储库的名称，然后选择“发布到 {% data variables.product.company_short %} 专用存储库”或“发布到 {% data variables.product.company_short %} 公共存储库”。 
   
   ![VS Code 中“存储库名称”下拉列表的屏幕截图](/assets/images/help/codespaces/choose-new-repository.png)

   新存储库的所有者将是创建 codespace 时所使用的 {% data variables.product.prodname_dotcom %} 帐户。
5. （可选）在编辑器右下角显示的弹出窗口中，单击“在 {% data variables.product.company_short %} 上打开”，查看 {% data variables.product.prodname_dotcom_the_website %} 上的新存储库。
   
   ![VS Code 中“在 GitHub 中打开”弹出窗口的屏幕截图](/assets/images/help/codespaces/open-on-github.png)