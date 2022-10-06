---
ms.openlocfilehash: ce7aa40d4312947c099afb8c1a8b88bacd021847
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110058"
---
Si selecciona **Enable IP allow list configuration for installed GitHub Apps** (Habilitar la configuración de la lista de direcciones IP permitidas para las aplicaciones de GitHub instaladas) en su configuración de lista de direcciones permitidas, las direcciones IP de las {% data variables.product.prodname_github_apps %} instaladas se agregarán a su lista de direcciones permitidas. Esto pasa sin importar si tu lista de direcciones permitidas se encuentra habilitada actualmente. Si instalas una {% data variables.product.prodname_github_app %} y luego el creador de dicha aplicación cambia las direcciones en su lista de direcciones permitidas, tu lista se actualizará automáticamente con dichos cambios.

Puedes identificar las direcciones IP que se agregaron automáticamente desde {% data variables.product.prodname_github_apps %} si revisas el campo de descripción. La descripción de estas direcciones IP es: "Managed by the NAME GitHub App". A diferencia de las direcciones que agregas manualmente, no puedes editar, borrar o inhabilitar las direcciones IP que se agregan automáticamente desde las {% data variables.product.prodname_github_apps %}.
