---
ms.openlocfilehash: a39c6a75a0b6decf15352f2d164d593f0d020fff
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182310"
---
Para los lenguajes compilados como Java,{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %}{% ifversion codeql-go-autobuild %} Go,{% endif %} C, C++, y C#, {% data variables.product.prodname_codeql %} analiza todo el código que se haya compilado durante la ejecución del flujo de trabajo. Para limitar la cantidad de código que se analiza, compila únicamente el código que quieras analizar; para ello, especifica pasos de compilación propios en un bloque `run`. Puede combinar la especificación de los pasos de compilación propios con el uso de los filtros `paths` o `paths-ignore` en los eventos `pull_request` y `push` para asegurarse de que el flujo de trabajo solo se ejecuta cuando se cambia código específico. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

En el caso de los lenguajes como{% ifversion codeql-go-autobuild %}{% else %} Go,{% endif %} JavaScript, Python y TypeScript, que analiza {% data variables.product.prodname_codeql %} sin compilar el código fuente, puedes especificar opciones adicionales de configuración para limitar la cantidad de código que se va a analizar. Para más información, vea "[Especificación de los directorios que se van a examinar](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)".