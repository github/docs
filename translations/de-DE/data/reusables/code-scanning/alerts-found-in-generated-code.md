---
ms.openlocfilehash: bc31880a8f42a48324c81b13db40b9b1d09b1286
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109238"
---
Bei kompilierten Sprachen wie Java,{% ifversion codeql-go-autobuild %} Go,{% endif %} C, C++ und C# analysiert {% data variables.product.prodname_codeql %} den gesamten Code, der während der Workflowausführung erstellt wurde. Um die Menge des zu analysierenden Codes zu begrenzen, kannst du durch die Angabe eigener Kompilierungsschritte in einem `run`-Block nur den Code kompilieren, den du analysieren möchtest. Durch die Angabe deiner eigenen Buildschritte mithilfe der Filter `paths` und `paths-ignore` für die Ereignisse `pull_request` und `push` kannst du die Schritte wie gewünscht kombinieren, um sicherzustellen, dass dein Workflow nur ausgeführt wird, wenn der bestimmte Code geändert wird. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

Für Sprachen wie{% ifversion codeql-go-autobuild %}{% else %} Go,{% endif %} JavaScript, Python und TypeScript, die {% data variables.product.prodname_codeql %} ohne Kompilierung des Quellcodes analysiert, kannst du zusätzliche Konfigurationsoptionen angeben, um den Umfang des zu analysierenden Codes zu begrenzen. Weitere Informationen findest du unter [Angeben von zu überprüfenden Verzeichnissen](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan).