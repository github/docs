---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
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
