---
ms.openlocfilehash: b11001db7ae2d9d7faa953bac8271282b136eee6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093374"
---
1. Usando a linha de comando, remova qualquer controle remoto do git atualmente configurado para o repositório.

  ```shell
  # Show existing remotes
  $ git remote -v
  > origin  git@git-server/octocat/hello-world.git (fetch)
  > origin  git@git-server/octocat/hello-world.git (push)
  # Remove existing remotes
  $ git remote remove origin
  ```
