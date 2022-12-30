---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069571"
---
Puede usar `permissions` para modificar los permisos predeterminados concedidos a `GITHUB_TOKEN` si se agrega o elimina el acceso según sea necesario, de forma que solo se permita el acceso mínimo necesario. Para obtener más información, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Puede utilizar `permissions` ya sea como una clave de nivel superior, para aplicarlos a todos los trabajos en el flujo de trabajo, o en los trabajos específicos. Cuando agrega la clave `permissions` en un trabajo específico, todas las acciones y comandos de ejecución dentro de este que utilicen `GITHUB_TOKEN` obtendrán los derechos de acceso que especifique.  Para más información, vea [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### Ejemplo: Asignar permisos a un GITHUB_TOKEN

En este ejemplo se muestran los permisos que se están configurando para `GITHUB_TOKEN` que aplicará a todos los trabajos en el flujo de trabajo. Se otorga acceso de lectura a todos los permisos.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
