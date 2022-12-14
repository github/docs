---
ms.openlocfilehash: 37a70890c8fc5dc4e1109c4625b67998974b7eac
ms.sourcegitcommit: ae862229f8c6d32af4230e73d28cb7050dec82d5
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/06/2022
ms.locfileid: "148010440"
---
키 | 형식 | 설명
---|---|---
`action` | `string` | 수행된 작업입니다. `created`, `dismissed`, `reopened`, `fixed` 또는 `reintroduced` 중 하나일 수 있습니다.
`alert` | `object` | 이벤트에 관련된 Dependabot [`alert`](/rest/dependabot/alerts#get-a-dependabot-alert) 입니다.
{% 데이터 reusables.webhooks.repo_desc %} {% 데이터 reusables.webhooks.org_desc %} {% 데이터 reusables.webhooks.app_desc %} `sender` | `object` | `action` `dismissed` is 또는 `reopened`,이 `sender` 이벤트를 트리거한 경우입니다 [`user`](/rest/users/users#get-a-user) . 다른 `sender` 모든 작업에 대한 {% ifversion ghes 또는 ghae %}`github-enterprise`{% else %}`github`{% endif %}입니다.
