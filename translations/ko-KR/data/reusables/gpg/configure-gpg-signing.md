---
ms.openlocfilehash: 106c5660ab12d4e3e8b87aeafc33cbca8898a7d8
ms.sourcegitcommit: 42536e8cb82d50b98cdaee038f09c6aeb0d037c6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: "148012066"
---
1. 이전에 서명할 때 다른 키 형식을 사용하도록 Git을 `--gpg-sign`구성한 경우 기본 형식이 사용되도록 이 구성을 `openpgp` 설정 해제합니다.

   ```Shell
   $ git config --global --unset gpg.format
   ```
