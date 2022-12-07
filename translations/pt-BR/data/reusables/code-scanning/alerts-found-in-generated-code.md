---
ms.openlocfilehash: a39c6a75a0b6decf15352f2d164d593f0d020fff
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182303"
---
Para linguagens compiladas como Java,{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %}{% ifversion codeql-go-autobuild %} Go,{% endif %} C, C++ e C#, o {% data variables.product.prodname_codeql %} analisa todo o código criado durante a execução do fluxo de trabalho. Para limitar a quantidade de código analisada, compile apenas o código que deseja analisar especificando etapas de build em um bloco `run`. Combine a especificação de etapas de build próprias com o uso dos filtros `paths` e `paths-ignore` nos eventos `pull_request` e `push` para garantir que o fluxo de trabalho seja executado somente quando o código específico for alterado. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Para linguagens como {% ifversion codeql-go-autobuild %}{% else %} Go,{% endif %} JavaScript, Python e TypeScript, que o {% data variables.product.prodname_codeql %} analisa sem compilar o código-fonte, você pode especificar opções de configuração adicionais para limitar a quantidade de código a ser analisado. Para obter mais informações, confira "[Como especificar diretórios para verificação](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)".