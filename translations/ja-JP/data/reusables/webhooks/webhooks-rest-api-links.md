---
ms.openlocfilehash: 3e175aefd9a243a098b5c35ca6d4068a651d2f61
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069052"
---
Webhook REST API を使用すれば、リポジトリ、組織、アプリ Webhook の管理ができます。{% ifversion fpt or ghes > 3.2 or ghae or ghec %}この API を使って Webhook の配信を一覧表示したり、Webhook の個々の配信を取得して再配信したりできます。これは、外部のアプリまたはサービスに統合できます。{% endif %}REST API を使用して、Webhook の構成を変更することもできます。 たとえば、ペイロードURL、コンテントタイプ、SSLの検証、シークレットを変更できます。 詳細については、次を参照してください。

- [リポジトリ Webhook REST API](/rest/reference/webhooks#repository-webhooks)
- [組織の Webhook REST API](/rest/reference/orgs#webhooks)
- [{% data variables.product.prodname_github_app %} Webhook REST API](/rest/reference/apps#webhooks)
