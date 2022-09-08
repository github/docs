---
ms.openlocfilehash: 48326e29174e0cba6f56d99436271a68f65189bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145099149"
---
## 比较构件和依赖项缓存

构件与缓存类似，因为它们能够在 {% data variables.product.prodname_dotcom %} 上存储文件，但每项功能都提供不同的用例，不能互换使用。

- 当想要重复使用在作业或工作流运行之间不频繁更改的文件时（例如从程序包管理系统构建依赖项），请使用缓存。
- 如果要保存作业生成的文件，以在工作流运行结束后查看（例如生成的二进制文件或生成日志），请使用项目。 
