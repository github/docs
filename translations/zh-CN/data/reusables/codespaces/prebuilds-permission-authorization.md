---
ms.openlocfilehash: 21a587f89a71ccd8e9f1a69aa5423a840f26b9a6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147431597"
---
   如果存储库的开发容器配置指定了访问其他存储库的权限，你将看到一个授权页面。 有关如何在 `devcontainer.json` 文件中指定此权限的详细信息，请参阅“[管理对 codespace 中其他存储库的访问](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。   

   单击 {% octicon "chevron-down" aria-label="The expand down icon" %} 查看请求权限的详细信息。

   ![预生成的授权页面的屏幕截图](/assets/images/help/codespaces/prebuild-authorization-page.png)

   单击“授权并继续”，授予这些权限来创建预生成。 另外，可以单击“在未经授权的情况下继续”，但如果这样做，从生成的预生成创建的 codespace 可能无法正常工作。

   {% note %}

   **注意**：使用此预生成创建 codespace 的用户也需要授予这些权限。

   {% endnote %}