---
ms.openlocfilehash: 6dfaad4dc9dc813104183b2c9db41e480c9b27fb
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163579"
---
1. Git에서 SSH 서명 키를 설정하려면 아래 텍스트를 붙여넣고 **/PATH/TO/KEY를 대체합니다. 사용** 하려는 공개 키에 대한 경로가 있는 PUB입니다.
  ```bash
  $ git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
