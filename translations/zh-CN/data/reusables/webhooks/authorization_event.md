---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065662"
---
任何人都可以从 [GitHub 帐户设置页面](https://github.com/settings/apps/authorizations)撤销他们对 GitHub 应用的授权。 撤销对 GitHub 应用程序的授权不会卸载 GitHub 应用程序。 您应该编程 GitHub 应用程序，使其在收到此 web 挂钩后，不再代表已撤销令牌的人调用 API。 如果 GitHub 应用继续使用已撤销的访问令牌，它将收到 `401 Bad Credentials` 错误。
