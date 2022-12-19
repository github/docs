---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878443"
---
La ejecución del trabajo o del flujo de trabajo necesita una configuración `permissions` con [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). No podrá solicitar el token de identificador JWT de OIDC si el valor `permissions` de `id-token` está establecido en `read` o `none`.

El valor `id-token: write` permite solicitar JWT desde el proveedor OIDC de {% data variables.product.prodname_dotcom %} mediante uno de estos enfoques:

- Con variables de entorno en el ejecutor (`ACTIONS_ID_TOKEN_REQUEST_URL` y `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Con `getIDToken()` del kit de herramientas de Acciones.

Si necesita capturar un token de OIDC para un flujo de trabajo, el permiso se puede establecer en el nivel de flujo de trabajo. Por ejemplo:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

Si solo necesitas recuperar un token de OIDC para un solo job, entonces este permiso puede configurarse dentro de dicho job. Por ejemplo:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

Puede que necesites especificar permisos adicionales aquí, dependiendo de los requisitos de tu flujo de trabajo. 
