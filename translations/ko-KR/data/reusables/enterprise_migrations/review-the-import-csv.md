---
ms.openlocfilehash: 52ba84fdbfdaa4150aff2b1e1bba858bf1ab7d41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111311"
---
1. `/PATH/REPO-NAME.git/git-import/raw-authors.csv`에서 쉼표로 구분된(CSV) 파일을 검토합니다. 다음 열을 포함해야 합니다.
    - `ID`: 원래 리포지토리에 저장된 작성자 및 고유한 식별자
    - `NAME`: 원래 리포지토리에 저장된 작성자

  원래 리포지토리의 작성자를 이메일 주소 및 이름에 매핑하려면 `ID,(ignored),GIT_EMAIL,GIT_NAME` 열로 새 CSV 파일을 만듭니다. 여기서 모든 항목에 대한 “ID”별 작성자 정보를 “GIT_EMAIL” 및 “GIT_NAME”으로 바꿉니다.

  #### 예:

   - 원래 작성자 ID: `octocat@111111-2222-3333-4444-55555555555`
   - 새 이메일 주소: `octocat@github.com`
   - 새 이름: `The Octocat`

   원래 작성자를 새 Git 사용자에게 매핑하려면 CSV 파일에 다음 줄이 포함되어야 합니다.

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
