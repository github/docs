---
ms.openlocfilehash: 9e47cc05dec3bbdef729dfc6a06eff8056dd9502
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145122079"
---
### 연속 통합 워크플로의 패키징

패키징 단계는 연속 통합 또는 지속적인 업데이트 워크플로의 일반적인 부분입니다. 연속 통합 워크플로가 끝날 때 패키지를 만들면 끌어오기 요청에 대한 코드 검토 중에 도움이 될 수 있습니다.

코드를 빌드하고 테스트한 후 패키징 단계에서 실행 가능하거나 배포 가능한 아티팩트를 생성합니다. 빌드하는 애플리케이션의 종류에 따라 이 패키지를 수동 테스트를 위해 로컬로 다운로드하거나 사용자가 다운로드할 수 있도록 하거나 스테이징 또는 프로덕션 환경에 배포할 수 있습니다.

예를 들어 Java 프로젝트의 연속 통합 워크플로는 `mvn package`를 실행하여 JAR 파일을 생성할 수 있습니다. 또는 Node.js 애플리케이션에 대한 CI 워크플로가 Docker 컨테이너를 만들 수 있습니다.

이제 끌어오기 요청을 검토할 때 워크플로 실행을 확인하고 생성된 아티팩트 다운로드할 수 있습니다.

![아티팩트 드롭다운 메뉴 다운로드](/assets/images/help/repository/artifact-drop-down-updated.png)

이렇게 하면 머신의 끌어오기 요청에서 코드를 실행할 수 있으며, 이는 끌어오기 요청을 디버그하거나 테스트하는 데 도움이 될 수 있습니다.

### 패키지를 게시하기 위한 워크플로

연속 통합 워크플로에서 테스트를 위해 패키징 아티팩트를 업로드하는 것 외에도 프로젝트를 빌드하고 패키지 레지스트리에 패키지를 게시하는 워크플로를 만들 수 있습니다.

* **{% data variables.product.prodname_registry %}에 패키지 게시**  
  {% data variables.product.prodname_registry %}는 다양한 형식의 패키지에 대한 패키지 호스팅 서비스 역할을 할 수 있습니다. 모든 {% data variables.product.prodname_dotcom %}와 패키지를 공유하거나 협력자 또는 조직과 공유할 프라이빗 패키지와 공유하도록 선택할 수 있습니다. 자세한 내용은 “[GitHub 패키지 소개](/packages/learn-github-packages/introduction-to-github-packages)”를 참조하세요.

  기본 분기에 푸시할 때마다 패키지를 {% data variables.product.prodname_registry %}에 게시할 수 있습니다. 이렇게 하면 프로젝트의 개발자가 {% data variables.product.prodname_registry %}에서 최신 빌드를 설치하여 기본 분기에서 항상 쉽게 실행하고 테스트할 수 있습니다.

* **패키지 레지스트리에 패키지 게시**  
  많은 프로젝트의 경우 새 버전의 프로젝트가 릴리스될 때마다 패키지 레지스트리에 게시됩니다. 예를 들어 JAR 파일을 생성하는 프로젝트는 Maven 중앙 리포지토리에 새 릴리스를 업로드할 수 있습니다. 또는 .NET 프로젝트에서 nuget 패키지를 생성하여 NuGet 갤러리에 업로드할 수 있습니다.

  릴리스를 만들 때마다 패키지를 패키지 레지스트리에 게시하는 워크플로를 만들어 이를 자동화할 수 있습니다. 자세한 내용은 “[릴리스 만들기](/github/administering-a-repository/creating-releases)”를 참조하세요.
