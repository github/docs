---
ms.openlocfilehash: c7eea7975ef49a5a6e3deed2ade3cb6bb5543ac0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145118529"
---
Al seleccionar la opción **Squash and merge** en una solicitud de incorporación de cambios en la {% data variables.product.product_location %}, las confirmaciones de la solicitud de incorporación de cambios se fusionan mediante combinación con "squash" en una única confirmación. En lugar de ver todas las confirmaciones individuales de un contribuyente de una rama de tema, las confirmaciones se combinan en una confirmación y se fusionan en la rama predeterminada. Las solicitudes de incorporación de cambios con confirmaciones con fusión mediante combinación con "squash" se combinan mediante la [opción de avance rápido](https://git-scm.com/docs/git-merge#_fast_forward_merge).

Para fusionar las solicitudes de incorporación de cambios mediante combinación con "squash" y combinación, debe tener [permisos de escritura](/articles/repository-permission-levels-for-an-organization/) en el repositorio y el repositorio debe [permitir la fusión mediante combinación con "squash"](/articles/configuring-commit-squashing-for-pull-requests/).

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

Puedes combinar y fusionar para crear un historial Git más optimizado en tu repositorio. Los compromisos de trabajo en curso son útiles cuando se trabaja en una rama de característica, pero no son tan importantes para retenerlos en el historial Git. Si combinas estas confirmaciones en una única confirmación al fusionar con la rama predeterminada, puedes conservar los cambios originales usando un historial Git claro.
