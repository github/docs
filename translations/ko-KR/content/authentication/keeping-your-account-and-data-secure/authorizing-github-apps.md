---
title: GitHub 앱에 권한 부여
intro: '애플리케이션이 {% data variables.product.prodname_dotcom %} 계정에 대한 정보를 검색할 수 있도록 {% data variables.product.prodname_github_app %}에 권한을 부여하고, 경우에 따라 사용자 대신 {% data variables.product.prodname_dotcom %}에서 변경할 수 있도록 할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
ms.openlocfilehash: 050f437f411919c4be488e61c032a8543a301e02
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115055'
---
{% data variables.product.prodname_dotcom %} ID를 확인하거나 사용자 대신 {% data variables.product.prodname_dotcom %}의 데이터를 조작해야 하는 타사 애플리케이션은 {% data variables.product.prodname_github_app %}에 해당 권한을 부여하도록 요청할 수 있습니다. 

{% data variables.product.prodname_github_app %}에 권한을 부여하는 경우 애플리케이션을 신뢰하는지 확인하고 애플리케이션 개발자와 애플리케이션에서 액세스하려는 정보 종류를 검토해야 합니다.

권한 부여 중에 {% data variables.product.prodname_github_app %}에 다음 권한을 부여하라는 메시지가 표시됩니다.
* **{% data variables.product.prodname_dotcom %} ID 확인**<br/>
  권한이 부여되면 {% data variables.product.prodname_github_app %}은 요청된 액세스 수준에 따라 퍼블릭 GitHub 프로필과 일부 프라이빗 세부 정보(예: 메일 주소)를 프로그래밍 방식으로 검색할 수 있습니다.
* **사용자가 액세스할 수 있는 리소스 파악**<br/>
  권한이 부여되면 {% data variables.product.prodname_github_app %}은 사용자가 액세스할 수 있는 _프라이빗_ {% data variables.product.prodname_dotcom %} 리소스(예: 프라이빗 {% data variables.product.prodname_dotcom %} 리포지토리)를 프로그래밍 방식으로 읽을 수 있습니다. {% data variables.product.prodname_github_app %} 설치도 ‘해당 리소스’에 있습니다. 예를 들어 애플리케이션은 이 권한을 사용하여 적절한 리포지토리 목록을 표시할 수 있습니다.
* **사용자 대신 작업**<br/>
  애플리케이션이 사용자로 {% data variables.product.prodname_dotcom %}에서 작업을 수행해야 할 수도 있습니다. 여기에는 이슈 만들기 또는 끌어오기 요청에 주석 달기가 포함될 수 있습니다. 사용자 대신 작업하는 권한은 사용자와 {% data variables.product.prodname_github_app %}이 ‘둘 다’ 액세스할 수 있는 {% data variables.product.prodname_dotcom %} 리소스로 제한됩니다. 그러나 애플리케이션이 사용자 대신 아무것도 변경할 수 없는 경우도 있습니다.
  
## {% data variables.product.prodname_github_app %}이 사용자 대신 작업하는 경우는 언제인가요?

{% data variables.product.prodname_github_app %}이 사용자 대신 작업하는 상황은 {% data variables.product.prodname_github_app %}의 목적과 사용되는 컨텍스트에 따라 다양합니다. 

예를 들어 IDE(통합 개발 환경)에서 사용자가 IDE를 통해 작성한 변경 내용을 {% data variables.product.prodname_dotcom %}의 리포지토리로 다시 푸시하기 위해 {% data variables.product.prodname_github_app %}을 사용하여 사용자 대신 상호 작용할 수 있습니다.  {% data variables.product.prodname_github_app %}은 [사용자-서버 요청](/get-started/quickstart/github-glossary#user-to-server-request)을 통해 이 작업을 수행합니다.

{% data variables.product.prodname_github_app %}이 이런 방식으로 사용자 대신 작업하는 경우, 아래 표시된 것과 유사하게 {% data variables.product.prodname_github_app %}의 작은 아바타가 사용자 아바타에 오버레이된 특수 아이콘을 통해 GitHub에서 식별됩니다.

![{% data variables.product.prodname_github_app %}의 “사용자-서버” 요청에서 생성되는 이슈](/assets/images/help/apps/github-apps-new-issue.png)

## {% data variables.product.prodname_github_app %}은 사용자가 액세스할 수 있는 리소스를 어느 범위까지 파악하고 대신 작업할 수 있나요?

권한이 부여된 후 {% data variables.product.prodname_github_app %}이 사용자가 액세스할 수 있는 리소스를 파악하고 대신 작업할 수 있는 범위는 다음으로 제한됩니다.

* 앱이 설치된 조직 또는 리포지토리 
* 앱이 요청한 권한
* {% data variables.product.prodname_dotcom %} 리소스에 대한 사용자 액세스 권한

예제를 사용해서 설명하겠습니다.

{% data variables.product.prodname_dotcom %} 사용자인 Alice가 {% data variables.product.prodname_dotcom %} ID를 사용하여 타사 웹 애플리케이션인 ExampleApp에 로그인합니다. 이 프로세스 중에 Alice는 ExampleApp에 대신 작업을 수행할 수 있는 권한을 부여합니다.

그러나 ExampleApp이 {% data variables.product.prodname_dotcom %}에서 Alice 대신 수행할 수 있는 활동은 ExampleApp이 설치된 리포지토리, ExampleApp이 요청한 권한, {% data variables.product.prodname_dotcom %} 리소스에 대한 Alice의 액세스 권한으로 제한됩니다. 

즉, ExampleApp이 Alice 대신 이슈를 만들려면 Repo A라는 리포지토리에서 다음이 모두 true여야 합니다.

* ExampleApp의 {% data variables.product.prodname_github_app %}이 이슈에 대한 쓰기 권한을 요청합니다.
* Repo A에 대한 관리자 권한이 있는 사용자가 Repo A에 ExampleApp의 {% data variables.product.prodname_github_app %}을 설치한 상태여야 합니다.
* Alice에게 Repo A에 대한 읽기 권한이 있어야 합니다. 다양한 활동을 수행하는 데 필요한 권한에 대한 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.
