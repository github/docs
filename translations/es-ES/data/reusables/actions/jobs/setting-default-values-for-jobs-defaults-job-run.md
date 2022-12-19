---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114186"
---
Use `jobs.<job_id>.defaults.run` para proporcionar el valor predeterminado de `shell` y `working-directory` para todos los pasos `run` del trabajo. No se permiten las expresiones ni contexto en esta sección.

Puede proporcionar las opciones predeterminadas de `shell` y `working-directory` para todos los pasos [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) de un trabajo. También puede establecer la configuración predeterminada de `run` para todo el flujo de trabajo. Para más información, vea [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). No puedes utilizar contextos o expresiones en esta palabra clave.

{% data reusables.actions.defaults-override %}

#### Ejemplo: Establecimiento de las opciones predeterminadas de los pasos `run` para un trabajo

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
