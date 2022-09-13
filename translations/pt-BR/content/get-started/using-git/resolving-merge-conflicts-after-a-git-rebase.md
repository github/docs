---
title: Resolver conflitos de merge após rebase do GitHub
intro: 'Quando executa uma operação de `git rebase`, você geralmente move commits. Por causa disso, podem ocorrer conflitos de merge. Isso significa que dois ou mais commits modificaram a mesma linha do mesmo arquivo, e o Git não sabe qual alteração aplicar.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve conflicts after rebase
ms.openlocfilehash: 8798282fb804f7b2389d98f69ba2b0e855a2289a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094791'
---
Depois que você reordenar e tratar os commits usando `git rebase`, caso ocorra um conflito de mesclagem, o Git informará isso com a seguinte mensagem impressa no terminal:

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

Aqui, o Git está indicando o commit que está causando o conflito (`fa39187`). Você tem três opções:

* Execute `git rebase --abort` para desfazer por completo a troca de base. O Git retornará você ao estado do branch em que ele estava antes de `git rebase` ser chamado.
* Execute `git rebase --skip` para ignorar por completo o commit. Isso significa que nenhuma das alterações apresentadas pelo commit com problema será incluída. Essa opção dificilmente é usada.
* Você pode corrigir o conflito.

Para corrigir o conflito, siga [os procedimentos padrão para resolução de conflitos de mesclagem por meio da linha de comando](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line). Quando terminar, você precisará chamar `git rebase --continue` para que o Git continue processando o restante da troca de base.
