---
title: 학습 관리 시스템을 GitHub 클래스룸에 연결
intro: '{% data variables.product.prodname_classroom %}에 연결하도록 LTI 규격 LMS(학습 관리 시스템)을 구성하여 수업의 명단을 가져올 수 있습니다.'
versions:
  fpt: '*'
permissions: Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}
redirect_from:
- /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
- /education/manage-coursework-with-github-classroom/connect-to-lms
- /education/manage-coursework-with-github-classroom/generate-lms-credentials
- /education/manage-coursework-with-github-classroom/setup-canvas
- /education/manage-coursework-with-github-classroom/setup-generic-lms
- /education/manage-coursework-with-github-classroom/setup-moodle
- /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
ms.openlocfilehash: e97a90ee822e779ecdf6ca94b7d35c29ddab5e5e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717831"
---
## LMS 구성 정보

학습 관리 시스템(LMS)을 {% data variables.product.prodname_classroom %}에 연결하면 {% data variables.product.prodname_classroom %}에서 학생 식별자 명단을 LMS에서 가져올 수 있습니다. LMS를 {% data variables.product.prodname_classroom %}에 연결하려면 LMS에서 {% data variables.product.prodname_classroom %}의 구성 자격 증명을 입력해야 합니다.

## 필수 조건

{% data variables.product.prodname_classroom %}에 연결하도록 LMS를 구성하려면 먼저 클래스룸을 만들어야 합니다. 자세한 내용은 “[클래스룸 관리](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)”를 참조하세요.

## 지원되는 LMS

{% note %}

**참고:** {% data variables.product.prodname_classroom %}에서는 이전에 학습 도구 상호 운용성(LTI) 버전 1.0 및 1.1을 구현하는 LMS에서의 명단 데이터 가져오기를 지원했습니다. 2022년 6월 30일 IMS(교육 관리 시스템) 글로벌 학습 컨소시엄은 [LTI 버전 1.0 및 1.1에 대한 지원을 종료했습니다](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). 중요한 학생 정보를 안전하게 유지하기 위해 {% data variables.product.company_short %}에서는 LTI 규격 LMS에서 명단 데이터 가져오기를 일시적으로 비활성화했습니다.<br><br>

최신 버전의 Learning Tools 상호 운용성 [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability)에 대한 지원은 현재 개발 중이며 곧 {% data variables.product.prodname_classroom %}에서 제공해 드릴 수 있습니다.

{% endnote %}

LTI는 업계 표준 프로토콜이며 GitHub 클래스룸의 LTI 사용은 IMS(교육 관리 시스템) 글로벌 학습 컨소시엄에 의해 인증됩니다. 자세한 내용은 IMS 글로벌 학습 컨소시엄 웹 사이트에서 [학습 도구 상호 운용성](https://www.imsglobal.org/activity/learning-tools-interoperability) 및 [IMS 글로벌 학습 컨소시엄 정보](http://www.imsglobal.org/aboutims.html)를 참조하세요.

{% data variables.product.company_short %}는 다음 LMS에서 {% data variables.product.prodname_classroom %}으로 명단 데이터를 가져오는 작업을 테스트했습니다.

- Google 클래스룸


## Google 클래스룸에 연결

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. 클래스룸에 이미 명단이 있는 경우 명단을 업데이트하거나 명단을 삭제하고 새 명단을 만들 수 있습니다.
    - 명단을 삭제하고 만드는 자세한 방법은 "[클래스룸 명단 삭제](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" 및 "[클래스룸 명단 만들기](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)"를 참조하세요.
    - 명단 업데이트에 대한 자세한 내용은 "[클래스룸의 명단에 학생 추가](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)"를 참조하세요.
1. LMS 목록에서 Google 클래스룸을 클릭합니다.
  ![Google 클래스룸](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Google에 로그인한 다음 연결할 클래스룸을 선택합니다.


## Canvas, Moodle, Sakai 및 기타 LMS에 연결

{% data variables.product.company_short %}가 LTI(Learning Tools Interoperability) 버전 1.3으로 업데이트되므로 다른 LMS에 대한 연결을 일시적으로 사용할 수 없습니다. 자세한 내용은 [지원되는 LMS](#supported-lmses)를 참조하세요.

그 동안 클래스의 명단을 수동으로 입력할 수 있습니다. LMS에서 {% data variables.product.prodname_classroom %}으로 명단을 수동으로 가져오는 자세한 방법은 “[클래스룸 관리](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)”를 참조하세요.

## LMS 연결 끊기

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. "LMS(학습 관리 시스템)에 연결"에서 **연결 설정** 을 클릭합니다.
  ![클래스룸 설정에 있는 "연결 설정" 링크](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. "학습 관리 시스템과의 연결 삭제"에서 **학습 관리 시스템과의 연결 끊기** 를 클릭합니다.
  ![클래스룸에 대한 연결 설정에 있는 "학습 관리 시스템과의 연결 끊기" 단추](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
