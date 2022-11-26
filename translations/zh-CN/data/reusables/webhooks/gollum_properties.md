---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145084318"
---
密钥 | 类型 | 说明
----|------|-------------
`pages`|`array` | 已更新的页面。
`pages[][page_name]`|`string` | 页的名称。
`pages[][title]`|`string` |  - 当前页标题。
`pages[][action]`|`string` |  - 在该页上执行的操作。 可以是 `created` 或 `edited`。
`pages[][sha]`|`string` | 页面的最新提交 SHA。
`pages[][html_url]`|`string` | 指向 HTML wiki 页面。
