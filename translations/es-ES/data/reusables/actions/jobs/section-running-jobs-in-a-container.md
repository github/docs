---
ms.openlocfilehash: 59a9cc8c52f8e3d28b2b392c28ef6abcb52439a9
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147718209"
---
Use `jobs.<job_id>.container` a fin de crear un contenedor para ejecutar cualquier paso de un trabajo que todavía no especifique un contenedor. Si tienes pasos que usan tanto acciones de script como de contenedor, las acciones de contenedor se ejecutarán como contenedores hermanos en la misma red con los mismos montajes de volumen.

Si no configura un objeto `container`, todos los pasos se ejecutarán directamente en el host especificado por `runs-on`, a menos que un paso haga referencia a una acción configurada para ejecutarse en un contenedor.

{% note %}

**Nota:** El shell predeterminado para los pasos `run` dentro de un contenedor es `sh` en lugar de `bash`. Esto se puede invalidar con [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun) o [`jobs.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

{% endnote %}

### Ejemplo: Ejecución de un trabajo dentro de un contenedor

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

Cuando solo especifique una imagen de contenedor, puede omitir la palabra clave `image`.

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
