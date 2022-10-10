---
ms.openlocfilehash: b11001db7ae2d9d7faa953bac8271282b136eee6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
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
