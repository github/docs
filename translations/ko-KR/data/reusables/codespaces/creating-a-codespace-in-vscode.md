---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158583"
---
{% data variables.product.prodname_dotcom_the_website %}의 계정을 {% data variables.product.prodname_github_codespaces %} 확장에 연결한 후 새 codespace를 만들 수 있습니다. {% data variables.product.prodname_github_codespaces %} 확장에 대한 자세한 내용은 [{% data variables.product.prodname_vs_marketplace_shortname %}를 참조하세요](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 추가 아이콘({% octicon "plus" aria-label="The plus icon" %})을 클릭합니다.

   ![{% data variables.product.prodname_github_codespaces %}에서 새 Codespace 만들기 옵션](/assets/images/help/codespaces/create-codespace-vscode.png)

3. 개발하려는 리포지토리의 이름을 입력한 다음 선택합니다.

   ![리포지토리를 검색하여 새 codespace 만들기](/assets/images/help/codespaces/choose-repository-vscode.png)

   선택한 리포지토리가 조직 소유이고 조직에서 이 리포지토리에 대한 codespace를 조직 또는 해당 부모 엔터프라이즈에 청구하도록 구성한 경우 후속 프롬프트에 codespace 비용을 지불할 사용자를 알려주는 메시지가 표시됩니다.

4. 개발하려는 분기를 클릭합니다.

   ![분기를 검색하여 새 codespace 만들기](/assets/images/help/codespaces/choose-branch-vscode.png)

5. 개발 컨테이너 구성 파일을 선택하라는 메시지가 표시되면 목록에서 파일을 선택합니다.

   ![{% data variables.product.prodname_github_codespaces %}에 대한 개발 컨테이너 구성 파일 선택](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. 사용할 머신 유형을 클릭합니다.

   ![새 codespace에 대한 인스턴스 형식](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **참고**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
