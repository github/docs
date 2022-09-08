---
ms.openlocfilehash: 286ed6049cd19b1d7f4c5c7dfb4d737dd0f68475
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145092086"
---
Use `jobs.<job_id>.container.volumes` para establecer un valor `array` de volúmenes para que lo use contenedor. Puedes usar volúmenes para compartir datos entre servicios u otros pasos en un trabajo. Puedes especificar volúmenes Docker con nombre, volúmenes Docker anónimos o montajes de enlace en el host.

Para especificar un volumen, especifica la ruta de origen y destino:

`<source>:<destinationPath>`.

`<source>` es un nombre de volumen o una ruta absoluta en el equipo host y `<destinationPath>` es una ruta absoluta en el contenedor.

#### Ejemplo: Montaje de volúmenes en un contenedor

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
