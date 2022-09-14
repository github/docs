---
ms.openlocfilehash: 599e48d3a38c855896fac842f5c8b4833488aeae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063721"
---
Para linguagens compiladas como Java, C, C++ e C#, o {% data variables.product.prodname_codeql %} analisa todo o código construído durante a execução do fluxo de trabalho. Para limitar a quantidade de código analisada, compile apenas o código que deseja analisar especificando etapas de build próprias em um bloco `run`. Combine a especificação de etapas de build próprias com o uso dos filtros `paths` e `paths-ignore` nos eventos `pull_request` e `push` para garantir que o fluxo de trabalho seja executado somente quando o código específico for alterado. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Para linguagens como Go, JavaScript, Python e TypeScript, que {% data variables.product.prodname_codeql %} analisa sem compilar o código-fonte, você pode especificar as opções de configuração adicionais para limitar a quantidade de código a ser analisado. Para obter mais informações, confira "[Como especificar diretórios para verificação](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)".
