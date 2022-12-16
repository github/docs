---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160149"
---
codespace에서 작업하는 경우 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트 또는 데스크톱 애플리케이션에서 게시할 수 있습니다.

{% data reusables.codespaces.source-control-display-dark %}
1. 변경 내용을 스테이징하려면 추가하거나 변경한 파일 옆을 클릭하거나 여러 파일을 변경하고 모두 스테이징하려는 경우 **변경 내용** 옆을 클릭합니다 **+**.

   ![스테이징 단추가 강조 표시된 소스 제어 사이드바](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **참고:** {% data variables.product.company_short %}의 빈 템플릿에서 시작하는 경우 디렉터리를 Git 리포지토리로 이미 초기화하지 않은 한 변경 내용 목록이 표시되지 않습니다. 빈 템플릿에서 만든 codespace를 게시하려면 소스 제어 보기에서 **{% data variables.product.company_short %}에 게시** 를 클릭한 다음 5단계로 건너뜁니다.

   {% endnote %}
2. 준비된 변경 내용을 커밋하려면 변경 내용을 설명하는 커밋 메시지를 입력한 다음 **커밋** 을 클릭합니다.

   ![커밋 메시지가 있는 소스 제어 사이드바](/assets/images/help/codespaces/vscode-commit-button.png) 
3. **분기 게시** 를 클릭합니다.
   
   ![VS Code의 "분기 게시" 단추 스크린샷](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. "리포지토리 이름" 드롭다운에서 새 리포지토리의 이름을 입력한 다음 **{% data variables.product.company_short %} 프라이빗 리포지토리에 게시** 또는 **{% data variables.product.company_short %} 퍼블릭 리포지토리에 게시** 를 선택합니다.
   
   ![VS Code의 "리포지토리 이름" 드롭다운 스크린샷](/assets/images/help/codespaces/choose-new-repository.png)

   새 리포지토리의 소유자는 codespace를 만든 {% data variables.product.prodname_dotcom %} 계정이 됩니다.
5. 필요에 따라 편집기의 오른쪽 아래 모서리에 표시되는 팝업에서 **{% data variables.product.company_short %}에서 열기를 클릭하여 {% data** variables.product.prodname_dotcom_the_website %}에서 새 리포지토리를 봅니다.
   
   ![VS Code의 "GitHub에서 열기" 팝업 스크린샷](/assets/images/help/codespaces/open-on-github.png)