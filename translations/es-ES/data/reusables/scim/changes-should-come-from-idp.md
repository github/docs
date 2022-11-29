---
ms.openlocfilehash: dbc37853f288c92b80e2858c0e94b9a07ca9b60f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134832"
---
Si el aprovisionamiento de SCIM se implementa para su organización, los cambios en la pertenencia a la organización de un usuario se deben desencadenar desde el proveedor de identidades. Si se invita a un usuario manualmente a una organización en lugar de mediante una integración de SCIM existente, es posible que su cuenta de usuario no se vincule correctamente a su identidad de SCIM. Esto puede impedir que la cuenta de usuario se desaprovisione a través de SCIM en el futuro. Si un usuario se quita manualmente en lugar de mediante una integración de SCIM existente, permanecerá una identidad vinculada obsoleta, lo que puede provocar problemas si el usuario necesita volver a unirse a la organización.
