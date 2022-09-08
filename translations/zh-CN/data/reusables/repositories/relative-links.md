---
ms.openlocfilehash: 20b17f568debf8a418827882dd6d1cc9815445a0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146171859"
---
您可以在渲染的文件中定义相对链接和图像路径，以帮助读者导航到仓库中的其他文件。

相对链接是相对于当前文件的链接。 例如，如果在仓库根目录下有一个自述文件，而在 docs/CONTRIBUTING.md 中有另一个文件，则自述文件中的 CONTRIBUTING.md 的相关链接如下所示 ：

```
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %} 将根据您当前使用的分支自动转换相对链接或图像路径，从而使链接或路径始终有效。 链接的路径将相对于当前文件。 以 `/` 开头的链接将相对于存储库根目录。 可使用所有相对链接操作数，例如 `./` 和 `../`。

相对链接更便于用户克隆仓库。 绝对链接可能无法用于仓库的克隆 - 建议使用相对链接引用仓库中的其他文件。
