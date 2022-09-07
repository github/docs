---
ms.openlocfilehash: 9634dbe779ef8c4bf0707adfe45d6e5084d95196
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069558"
---
La ejecución del trabajo o del flujo de trabajo necesita una configuración `permissions` con [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). No podrá solicitar el token de identificador JWT de OIDC si el valor `permissions` de `id-token` está establecido en `read` o `none`.

El valor `id-token: write` permite solicitar JWT desde el proveedor OIDC de {% data variables.product.prodname_dotcom %} mediante uno de estos enfoques:

- Con variables de entorno en el ejecutor (`ACTIONS_ID_TOKEN_REQUEST_URL` y `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Con `getIDToken()` del kit de herramientas de Acciones.

Si solo necesitas recuperar un token de OIDC para un solo job, entonces este permiso puede configurarse dentro de dicho job. Por ejemplo:

```yaml{:copy}
permissions:
  id-token: write
```

Puede que necesites especificar permisos adicionales aquí, dependiendo de los requisitos de tu flujo de trabajo. 
