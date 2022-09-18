---
ms.openlocfilehash: 05d61d8f49c6b53d318abbdceba89223404a7509
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098803"
---
如果存储库中的 C/C++、C# 或 Java 代码有非标准生成过程，`autobuild` 可能会失败。 这种情况需要从工作流中删除 `autobuild` 步骤，并手动添加生成步骤。 如果您要指定仓库中的哪个 Go 文件要提取，则需要添加生成步骤。
