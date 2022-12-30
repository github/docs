---
ms.openlocfilehash: 082f3b30b23ed6c8b2a7a4261cace89e32f0a8c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133526"
---
Standardmäßig werden alle Abhängigkeiten, die explizit in einer Manifest- oder Sperrdatei definiert sind, auf dem neuesten Stand gehalten. Du kannst `allow` und `ignore` verwenden, um Abhängigkeiten anzupassen, um Versions-Updates zu verwalten. {% data variables.product.prodname_dependabot %} sucht nach allen zulässigen Abhängigkeiten und filtert dann alle ignorierten Abhängigkeiten oder Versionen aus. Eine Abhängigkeit, die sowohl mit einer als auch einer `allow` und einer `ignore` übereinstimmt, wird ignoriert.
