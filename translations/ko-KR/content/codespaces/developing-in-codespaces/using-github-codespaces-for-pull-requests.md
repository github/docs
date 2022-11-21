---
title: 끌어오기 요청에 Github Codespaces 사용
shortTitle: Pull requests
intro: '웹 브라우저에서 {% data variables.product.prodname_github_codespaces %}를 사용하거나 {% data variables.product.prodname_vscode %}에서 끌어오기 요청을 만들고, 끌어오기 요청을 검토하고, 검토 주석을 처리할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160009'
---
## {% data variables.product.prodname_github_codespaces %}의 끌어오기 요청 정보

{% data variables.product.prodname_github_codespaces %}에서는 끌어오기 요청을 사용하는 데 필요한 다양한 기능을 제공합니다.

- [끌어오기 요청 만들기](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - 터미널 및 Git 명령 또는 원본 제어 뷰를 사용하여 {% data variables.product.prodname_dotcom_the_website %}에서처럼 끌어오기 요청을 만들 수 있습니다. 리포지토리에서 끌어오기 요청 템플릿을 사용하는 경우 원본 제어 뷰 내에서 이 템플릿을 사용할 수 있습니다.
- [끌어오기 요청 열기](#opening-a-pull-request-in-codespaces) - 병합되는 분기에 대해 codespace 액세스 권한이 있는 경우 codespace에서 기존 끌어오기 요청을 열 수 있습니다.
- [끌어오기 요청 검토](#reviewing-a-pull-request-in-codespaces) - codespace에서 끌어오기 요청을 연 후에는 “GitHub 끌어오기 요청” 보기를 사용하여 검토 주석을 추가하고 끌어오기 요청을 승인할 수 있습니다. {% data variables.product.prodname_github_codespaces %}을(를) 사용하여 [검토 주석을 볼 수도 있습니다](#view-comments-from-a-review-in-codespaces).

## {% data variables.product.prodname_codespaces %}에서 끌어오기 요청 열기

{% data reusables.repositories.sidebar-pr %}

1. 끌어오기 요청 목록에서 {% data variables.product.prodname_codespaces %}에서 열려는 끌어오기 요청을 클릭합니다.
1. 화면 오른쪽에서 **{% octicon "code" aria-label="The code icon" %} 코드** 를 클릭합니다. 
1. {% data variables.product.prodname_codespaces %} 탭에서 더하기 기호({% octicon "plus" aria-label="The plus icon" %})를 클릭합니다.

   ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   끌어오기 요청 분기에 대한 codespace가 만들어지고 {% data variables.product.prodname_github_codespaces %}에 대한 기본 편집기에서 열립니다.

## {% data variables.product.prodname_codespaces %}에서 끌어오기 요청 검토

1. 기본 편집기가 {% data variables.product.prodname_vscode %} 또는 웹용 {% data variables.product.prodname_vscode %}로 설정된 상태에서 위의 "[끌어오기 요청 열기](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)"에 설명된 대로 codespace에서 끌어오기 요청을 엽니다.
2. 작업 표시줄에서 **GitHub Pull Request**(GitHub 끌어오기 요청) 보기를 클릭합니다. 이 보기는 codespace에서 끌어오기 요청을 열 때만 나타납니다.
  ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/github-pr-view.png)
3. 특정 파일을 검토하려면 사이드바에서 **파일 열기** 아이콘을 클릭합니다.
  ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/changes-in-files.png)
4. 검토 설명을 추가하려면 줄 번호 옆에 있는 **+** 아이콘을 클릭합니다. 검토 설명을 입력한 다음 **Start Review**(검토 시작)를 클릭합니다.
  ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/start-review.png)
5. 검토 주석 추가가 완료되면 사이드바에서 주석을 제출하거나, 변경 내용을 승인하거나, 변경 내용을 요청할 수 있습니다.
  ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/submit-review.png)

끌어오기 요청을 검토하는 방법에 대한 자세한 내용은 “[끌어오기 요청에서 제안된 변경 내용 검토](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”를 참조하세요.

## {% data variables.product.prodname_codespaces %}에서 검토의 주석 보기

끌어오기 요청에 대한 피드백을 받은 후에는 웹 브라우저의 [codespace](#opening-a-pull-request-in-codespaces) 또는 {% data variables.product.prodname_vscode_shortname %}에서 열면 [검토 주석](#reviewing-a-pull-request-in-codespaces)을 볼 수 있습니다. 여기에서 주석에 응답하거나, 반응을 추가하거나, 검토를 해제할 수 있습니다. 

  ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/incorporating-codespaces.png)



