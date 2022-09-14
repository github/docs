---
ms.openlocfilehash: ea162bdacad3d8e4a85c343eb9c3c08afd2b9056
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111706"
---
Al revertir una actualización, tendrá que usar un archivo de paquete de actualización con la extensión *.pkg*. Los archivos de paquete de revisión en caliente con la extensión *.hpkg* no se admiten.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

Se requiere que reinicies después de ejecutar el comando. Bajar de categoría una mejora previa no afecta la partición de datos, ya que las migraciones no se ejecutan en lanzamientos parchados.
