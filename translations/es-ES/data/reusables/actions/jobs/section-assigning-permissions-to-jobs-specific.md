---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145092089"
---
Para un trabajo concreto, puede usar `jobs.<job_id>.permissions` para modificar los permisos predeterminados concedidos a `GITHUB_TOKEN` si se agrega o elimina el acceso según sea necesario, de forma que solo se permita el acceso mínimo necesario. Para más información, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Al especificar el permiso dentro de una definición de trabajo, puede configurar un conjunto diferente de permisos para el `GITHUB_TOKEN` de cada trabajo, si es necesario. Como alternativa, puedes especificar los permisos para todos los jobs en el flujo de trabajo. Para obtener información sobre cómo definir permisos en el nivel de flujo de trabajo, vea [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### Ejemplo: Configurar los permisos para un job específico

En este ejemplo se muestran los permisos establecidos para `GITHUB_TOKEN` que solo se aplicarán al trabajo denominado `stale`. Se concede acceso de escritura a los ámbitos `issues` y `pull-requests`. El resto de los alcances no tendrán acceso.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
