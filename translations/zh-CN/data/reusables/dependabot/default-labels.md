---
ms.openlocfilehash: 3b05d1b75c37f24e9ae4ce03618910c572f259d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145129898"
---
默认情况下，{% data variables.product.prodname_dependabot %} 会提出所有带有 `dependencies` 标签的拉取请求。 如果定义了多个包管理器，{% data variables.product.prodname_dependabot %} 在每个拉取请求上都会包含一个附加标签。 这表示拉取请求将更新的语言或生态系统，例如：`java` 表示 Gradle 更新，`submodules` 表示 git 子模块。 {% data variables.product.prodname_dependabot %} 将根据需要自动在您的仓库中创建这些默认标签。
