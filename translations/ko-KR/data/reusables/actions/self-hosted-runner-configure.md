---
ms.openlocfilehash: 27ed9d55b8199298dc1cfdf8b4d3da925e08aa8d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068008"
---
1. 자체 호스팅 실행기 컴퓨터의 운영 체제 이미지 및 아키텍처를 선택합니다.
1. 실행기 애플리케이션을 다운로드하고 자체 호스팅 실행기 컴퓨터에 설치하는 방법을 보여 주는 지침이 표시됩니다.

   자체 호스팅 실행기 컴퓨터에서 셸을 열고 표시되는 순서대로 각 셸 명령을 실행합니다.

   {% note %}

   **참고:** Windows에서 자체 호스팅 실행기 애플리케이션을 서비스로 설치하려면 관리자 권한으로 셸을 열어야 합니다. 또한 Windows 시스템 계정이 실행기 디렉터리에 액세스할 수 있도록 자체 호스팅 실행기 애플리케이션의 디렉터리로 `C:\actions-runner`를 사용하는 것이 좋습니다.

   {% endnote %}

   지침은 다음 작업을 완료하는 단계를 안내합니다.
   - 자체 호스팅 실행기 애플리케이션 다운로드 및 추출
   - `config` 스크립트를 실행하여 자체 호스팅 실행기 애플리케이션을 구성하고 {% data variables.product.prodname_actions %}에 등록합니다. `config` 스크립트에는 요청을 인증하기 위해 대상 URL 및 자동으로 생성된 시간 제한 토큰이 필요합니다.
     - Windows에서 `config` 스크립트는 자체 호스팅 실행기 애플리케이션을 서비스로 설치할지 묻습니다. Linux 및 macOS의 경우 실행기 추가를 완료한 후 서비스를 설치할 수 있습니다. 자세한 내용은 “[자체 호스팅 실행기 애플리케이션을 서비스로 구성](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)”을 참조하세요.
   - 자체 호스팅 실행기 애플리케이션을 실행하여 컴퓨터를 {% data variables.product.prodname_actions %}에 연결합니다.
