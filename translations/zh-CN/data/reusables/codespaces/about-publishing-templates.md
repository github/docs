---
ms.openlocfilehash: 88adaa8f671dd9eb805301c3e659bcdba76f24cc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159515"
---
在从模板创建的 codespace 中工作时，你的工作将保存在云中的虚拟机上，但不会存储在 {% data variables.product.prodname_dotcom %} 上的存储库中。

可以保存文件、关闭并停止 codespace，稍后再返回工作。 通常会预安装 Git，工作目录将自动初始化为 Git 存储库，除非你从 {% data variables.product.company_short %} 的空白模板开始。 这意味着可以立即使用 Git 进行本地源代码管理，例如添加和提交文件。

但是，如果删除未发布的 codespace，或者该 codespace 由于在保持期内未使用而被自动删除，则你的工作也会被删除。 若要持久保存你的工作并允许其他人处理你的项目，你需要将 codespace 发布到 {% data variables.product.prodname_dotcom %} 上的存储库。