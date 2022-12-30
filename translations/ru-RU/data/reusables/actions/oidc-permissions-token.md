---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878442"
---
Для выполнения задания или рабочего процесса требуется параметр `permissions` с [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). Вы не сможете запросить маркер идентификатора JWT OIDC, если `permissions` для параметра `id-token` задано `read` или `none`.

Этот параметр `id-token: write` позволяет запрашивать JWT у поставщика OIDC {% data variables.product.prodname_dotcom %}, применяя один из следующих способов:

- использование переменных среды в средстве выполнения (`ACTIONS_ID_TOKEN_REQUEST_URL` и `ACTIONS_ID_TOKEN_REQUEST_TOKEN`);
- использование `getIDToken()` из набора средств Actions.

Если необходимо получить токен OIDC для рабочего процесса, разрешение можно установить на уровне рабочего процесса. Пример:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

Если необходимо получить маркер OIDC только для одного задания, такое разрешение можно установить в этом задании. Пример:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

В зависимости от требований рабочего процесса, возможно, будет необходимо указать здесь дополнительные разрешения. 
