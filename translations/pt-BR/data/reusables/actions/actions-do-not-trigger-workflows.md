---
ms.openlocfilehash: 9c62e7c7c015ddaf1fb84d7c27eadce9e1a42487
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094493"
---
Quando você usar o `GITHUB_TOKEN` do repositório para executar tarefas, os eventos disparados pelo `GITHUB_TOKEN` não criarão uma execução de fluxo de trabalho. Isso impede que você crie execuções de fluxo de trabalho recursivo. Por exemplo, se uma execução de fluxo de trabalho efetuar push do código usando o `GITHUB_TOKEN` do repositório, um novo fluxo de trabalho não será executado mesmo quando o repositório contiver um fluxo de trabalho configurado para ser executado quando os eventos do `push` ocorrerem.
