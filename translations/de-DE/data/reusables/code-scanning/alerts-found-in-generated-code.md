---
ms.openlocfilehash: a39c6a75a0b6decf15352f2d164d593f0d020fff
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182306"
---
Bei kompilierten Sprachen wie Java,{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %}{% ifversion codeql-go-autobuild %} Go,{% endif %} C, C++ und C# analysiert {% data variables.product.prodname_codeql %} den gesamten Code, der während der Workflowausführung erstellt wurde. Um die Menge des zu analysierenden Codes zu begrenzen, kannst du durch die Angabe eigener Kompilierungsschritte in einem `run`-Block nur den Code kompilieren, den du analysieren möchtest. Durch die Angabe deiner eigenen Buildschritte mithilfe der Filter `paths` und `paths-ignore` für die Ereignisse `pull_request` und `push` kannst du die Schritte wie gewünscht kombinieren, um sicherzustellen, dass dein Workflow nur ausgeführt wird, wenn der bestimmte Code geändert wird. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

Für Sprachen wie{% ifversion codeql-go-autobuild %}{% else %} Go,{% endif %} JavaScript, Python und TypeScript, die {% data variables.product.prodname_codeql %} ohne Kompilierung des Quellcodes analysiert, kannst du zusätzliche Konfigurationsoptionen angeben, um den Umfang des zu analysierenden Codes zu begrenzen. Weitere Informationen findest du unter [Angeben von zu überprüfenden Verzeichnissen](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan).