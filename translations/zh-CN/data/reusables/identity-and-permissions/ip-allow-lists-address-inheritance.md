---
ms.openlocfilehash: ce7aa40d4312947c099afb8c1a8b88bacd021847
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145097407"
---
如果你在允许列表设置中选择“为已安装的 GitHub 应用程序启用 IP 允许列表配置”，则来自已安装 {% data variables.product.prodname_github_apps %} 的 IP 地址将添加到你的允许列表中。 不管您的允许列表目前是否启用，都会发生这种情况。 如果您安装 {% data variables.product.prodname_github_app %}，然后该应用程序的创建者更改其允许列表中的地址，则允许列表会自动更新这些更改。

您可以通过查看描述字段来识别从 {% data variables.product.prodname_github_apps %} 自动添加的 IP 地址。 这些 IP 地址的描述是：“由 NAME GitHub App管理”。 与手动添加的地址不同，您无法编辑、删除或禁用从 {% data variables.product.prodname_github_apps %} 自动添加的 IP 地址。
