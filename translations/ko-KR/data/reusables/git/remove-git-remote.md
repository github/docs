---
ms.openlocfilehash: b11001db7ae2d9d7faa953bac8271282b136eee6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110303"
---
1. 명령줄을 사용하여 리포지토리에 대해 현재 구성된 모든 git 원격을 제거합니다.

  ```shell
  # Show existing remotes
  $ git remote -v
  > origin  git@git-server/octocat/hello-world.git (fetch)
  > origin  git@git-server/octocat/hello-world.git (push)
  # Remove existing remotes
  $ git remote remove origin
  ```
