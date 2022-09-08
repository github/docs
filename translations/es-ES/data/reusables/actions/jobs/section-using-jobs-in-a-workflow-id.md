---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114226"
---
Usa `jobs.<job_id>` para asignar un identificador único al trabajo. La clave `job_id` es una cadena y su valor es un mapa de los datos de configuración del trabajo. Debes reemplazar `<job_id>` por una cadena que sea única para el objeto `jobs`. `<job_id>` debe empezar con una letra o `_`, y solo puede contener caracteres alfanuméricos, `-` o `_`.

#### Ejemplo: Crear jobs

En este ejemplo, se han creado dos trabajos y sus valores `job_id` son `my_first_job` y `my_second_job`.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
