---
ms.openlocfilehash: e2c781f830b789fbb8fdaaa9403fe4c7a37c63b5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145164628"
---
`number`|`integer` | 拉取请求号。
`changes`|`object`| 对注释的更改（如果操作为 `edited`）。
`changes[title][from]`|`string` | 先前版本的标题（如果操作为 `edited`）。
`changes[body][from]`|`string` | 先前版本的正文（如果操作为 `edited`）。
`pull_request`|`object` | [拉取请求](/rest/reference/pulls)本身。
