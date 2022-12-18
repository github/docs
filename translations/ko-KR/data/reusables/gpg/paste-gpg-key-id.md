---
ms.openlocfilehash: a844d741a89d4839e7c2c4010a1479246cc4d405
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009239"
---
1. Git에서 기본 GPG 서명 키를 설정하려면 아래 텍스트를 붙여넣고 사용하려는 GPG 기본 키 ID로 대체합니다. 이 예제에서 GPG 키 ID는 `3AA5C34371567BD2`입니다.
   ```shell
   $ git config --global user.signingkey 3AA5C34371567BD2
   ```
   
   또는 하위 키를 설정할 때 `!` 접미사를 포함합니다. 이 예제에서 GPG 하위 키 ID는 `4BB6D45482678BE3`입니다.
   ```shell
   $ git config --global user.signingkey 4BB6D45482678BE3!
   ```
