---
ms.openlocfilehash: 55be1692eaf41dbee91aa298eeb9a969e5b91b42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147549074"
---
{%- ifversion custom-pattern-dry-run-ga %}
1. 选择要在其中执行试运行的存储库。
   * 若要在整个组织中执行试运行，请选择“组织中的所有存储库”。
   ![显示为试运行选择的存储库的屏幕截图](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-all-repos.png)
   * 若要指定要在其中执行试运行的存储库，请选择“所选存储库”，然后搜索并选择最多 10 个存储库。
   ![显示为试运行选择的存储库的屏幕截图](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repos-option.png)
1. 准备好测试新的自定义模式后，请单击“运行”。
{%- else %}
1. 搜索并选择最多 10 个要在其中执行试运行的存储库。
   ![显示为试运行选择的存储库的屏幕截图](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repo.png)
1. 准备好测试新的自定义模式后，请单击“试运行”。
{%- endif %}
