---
ms.openlocfilehash: 142794535bf66481cbdf5ec8430ed18ff9a0034d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079402"
---
Fluxos de trabalho reutilizáveis de repositórios públicos podem ser referenciados usando um SHA, uma tag de lançamento ou um nome de branch. Para ver mais informações, confira ["Como chamar um fluxo de trabalho reutilizável"](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow). 

Quando você executa novamente um fluxo de trabalho que usa um fluxo de trabalho reutilizável e a referência não é um SHA, há alguns comportamentos a serem observados:

* A reexecução de todos os trabalhos em um fluxo de trabalho usará o fluxo de trabalho reutilizável da referência especificada. Para ver mais informações sobre como executar novamente todos os trabalhos em um fluxo, confira ["Como reexecutar todos os trabalhos em um fluxo de trabalho"](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow).
* Reexecutar trabalhos com falha ou um trabalho específico em um fluxo usará o fluxo de trabalho reutilizável do mesmo SHA de commit da primeira tentativa. Para obter mais informações sobre como reexecutar trabalhos com falha em um fluxo de trabalho, confira ["Como reexecutar trabalhos com falha em um fluxo de trabalho"](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow). Para ver mais informações sobre como reexecutar um trabalho específico em um fluxo, confira ["Como reexecutar um trabalho específico em um fluxo de trabalho"](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow).
