---
title: 끌어오기 요청에 Codespace 사용
shortTitle: Pull requests
intro: 개발 워크플로에서 {% data variables.product.prodname_codespaces %}를 사용하여 끌어오기 요청을 만들고, 끌어오기 요청을 검토하고, 주석을 처리할 수 있습니다.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
ms.openlocfilehash: f3c0a007f1f9d53796e5969102bc8b6622702a96
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145125257"
---
## <a name="about-pull-requests-in--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %}의 끌어오기 요청 정보

{% data variables.product.prodname_codespaces %}에서는 끌어오기 요청을 사용하는 데 필요한 다양한 기능을 제공합니다.

- [끌어오기 요청 만들기](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - 터미널 및 Git 명령 또는 원본 제어 뷰를 사용하여 {% data variables.product.prodname_dotcom_the_website %}에서처럼 끌어오기 요청을 만들 수 있습니다. 리포지토리에서 끌어오기 요청 템플릿을 사용하는 경우 원본 제어 뷰 내에서 이 템플릿을 사용할 수 있습니다.
- [끌어오기 요청 열기](#opening-a-pull-request-in-codespaces) - 병합되는 분기에 대해 codespace 액세스 권한이 있는 경우 codespace에서 기존 끌어오기 요청을 열 수 있습니다.
- [끌어오기 요청 검토](#reviewing-a-pull-request-in-codespaces) - codespace에서 끌어오기 요청을 연 후에는 “GitHub 끌어오기 요청” 보기를 사용하여 검토 주석을 추가하고 끌어오기 요청을 승인할 수 있습니다. {% data variables.product.prodname_codespaces %}를 사용하여 [검토 주석을 볼 수 있습니다](#view-comments-from-a-review-in-codespaces).

## <a name="opening-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %}에서 끌어오기 요청 열기

{% data reusables.repositories.sidebar-pr %}

2. 끌어오기 요청 목록에서 {% data variables.product.prodname_codespaces %}에서 열려는 끌어오기 요청을 클릭합니다.
3. 화면 오른쪽에서 **{% octicon "code" aria-label="The code icon" %} 코드** 를 클릭합니다. 
4. {% data variables.product.prodname_codespaces %} 탭에서 **분기에서 codespace 만들기** 를 클릭합니다.
  ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## <a name="reviewing-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %}에서 끌어오기 요청 검토

{% data reusables.codespaces.review-pr %}

끌어오기 요청을 검토하는 방법에 대한 자세한 내용은 “[끌어오기 요청에서 제안된 변경 내용 검토](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”를 참조하세요.

## <a name="view-comments-from-a-review-in--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %}에서 검토의 주석 보기

끌어오기 요청에 대한 피드백을 받은 후에는 [에서 열어](#opening-a-pull-request-in-codespaces) [검토 주석](#reviewing-a-pull-request-in-codespaces)을 볼 수 있습니다. 여기에서 주석에 응답하거나, 반응을 추가하거나, 검토를 해제할 수 있습니다. 

  ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/incorporating-codespaces.png)
