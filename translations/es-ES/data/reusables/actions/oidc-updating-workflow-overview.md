---
ms.openlocfilehash: a2d715cc94af2755d4161ef0715314caa0e82047
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145092062"
---
Para agregar la integración de OIDC a tus flujos de despliegue en la nube, necesitarás agregar los siguientes cambios en el código:

- Otorga permiso para recuperar el token del proveedor de OIDC de {% data variables.product.prodname_dotcom %}:
  - El flujo de trabajo necesita un valor `permissions` con un valor `id-token` definido. Esto te permite recuperar el token de OIDC desde cualquier job en el flujo de trabajo. Si solo necesitas recuperar un token de OIDC para un solo job, entonces este permiso puede configurarse dentro de dicho job.
- Solicita el Token Web JSON (JWT) desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %} y preséntaselo a tu proveedor de servicios en la nube para recibir un token de acceso:
  - Puedes utilizar el kit de herramientas de acciones para recuperar los tokens en tu job o puedes utilizar la acción oficial que creó tu proveedor de servicios en la nube para recuperar el JWT y recibir el token de acceso desde la nube.
