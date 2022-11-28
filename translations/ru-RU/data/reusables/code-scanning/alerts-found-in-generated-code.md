---
ms.openlocfilehash: a39c6a75a0b6decf15352f2d164d593f0d020fff
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182309"
---
Для скомпилированных языков, таких как Java, {% ifversion codeql-kotlin-beta %} Kotlin, {% endif %}{% ifversion codeql-go-autobuild %} Go,{% endif %} C, C++, и C#, {% data variables.product.prodname_codeql %} анализирует весь код, созданный во время выполнения рабочего процесса. Чтобы ограничить объем анализируемого кода, создайте код, который требуется проанализировать, указав собственные шаги сборки в блоке `run` . Можно объединить указание собственных шагов сборки с помощью фильтров `paths` и `paths-ignore` в событиях `pull_request` и `push`, чтобы рабочий процесс выполнялся только при изменении определенного кода. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

Для таких языков, как {% ifversion codeql-go-autobuild %}{% else %} Go,{% endif %} JavaScript, Python и TypeScript, которые {% data variables.product.prodname_codeql %} анализирует без компиляции исходного кода, можно указать дополнительные параметры конфигурации, чтобы ограничить объем анализируемого кода. Дополнительные сведения см. в разделе [Указание каталогов для анализа](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan).