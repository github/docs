---
ms.openlocfilehash: 43e874e29bca10faa81fd0f24e4098fe20eab90c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065657"
---
密钥 | 类型 | 说明
----|------|------------
`action` | `string` | 执行的操作内容. 可以为 `added` 或 `removed`。
`repository_selection` | `string` | 安装所在仓库的选择。 可以为 `selected` 或 `all`。
`repositories_added` | `array` | 已添加到安装中的仓库对象数组。
`repositories_removed` | `array` | 已从安装中删除的仓库对象数组。
