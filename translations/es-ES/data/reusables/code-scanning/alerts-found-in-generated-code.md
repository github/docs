---
ms.openlocfilehash: 599e48d3a38c855896fac842f5c8b4833488aeae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063749"
---
Para los lenguajes compilados como Java, C, C++ y C#, {% data variables.product.prodname_codeql %} analiza todo el código que se haya compilado durante la ejecución del flujo de trabajo. Para limitar la cantidad de código que se analiza, compile únicamente el código que quiera analizar; para ello, especifique pasos de compilación propios en un bloque `run`. Puede combinar la especificación de los pasos de compilación propios con el uso de los filtros `paths` o `paths-ignore` en los eventos `pull_request` y `push` para asegurarse de que el flujo de trabajo solo se ejecuta cuando se cambia código específico. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

En el caso de los lenguajes como Go, JavaScript, Python y TypeScript, los cuales analiza {% data variables.product.prodname_codeql %} sin compilar el código fuente, puedes especificar opciones adicionales de configuración para limitar la cantidad de código a analizar. Para más información, vea "[Especificación de los directorios que se van a examinar](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)".
