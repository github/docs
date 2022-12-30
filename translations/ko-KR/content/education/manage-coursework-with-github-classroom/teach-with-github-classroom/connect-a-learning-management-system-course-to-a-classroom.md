---
title: 학습 관리 시스템 과정을 교실에 연결
intro: '교실의 명단을 가져올 수 있도록 {% 데이터 variables.product.prodname_classroom %}에 연결하도록 LTI 규격 학습 관리 시스템(LMS) 과정을 구성할 수 있습니다.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
  - /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
  - /education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS course
ms.openlocfilehash: 6c750201bf46c7cf5d6965623f60bebc8e64e4ab
ms.sourcegitcommit: 04329ee7464efbb558d77d06664e8578cd154d87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/15/2022
ms.locfileid: '148046457'
---
## LMS를 교실에 연결하는 방법

LMS(학습 관리 시스템)를 {% 데이터 variables.product.prodname_classroom %}에 연결하고 LMS에서 학생 식별자 명단을 가져올 수 있습니다. 

## 필수 구성 요소

LMS를 교실에 연결하려면 LMS 인스턴스의 관리자가 OAuth 핸드셰이크를 시작하기 위해 GitHub 교실에 LMS를 등록해야 합니다. 관리자는 이 등록 프로세스를 한 번만 수행하면 LMS 인스턴스를 사용하는 모든 교사가 LMS 과정을 교실에 동기화할 수 있습니다. 자세한 내용은 "[GitHub 교실에 학습 관리 시스템 등록"을](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom) 참조하세요.

{% note %}

**참고:** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

{% data variables.product.prodname_classroom %}에 연결하도록 LMS를 구성하려면 먼저 클래스룸을 만들어야 합니다. 자세한 내용은 “[클래스룸 관리](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)”를 참조하세요.

## 지원되는 LMS

{% data reusables.classroom.supported-lmses %}

## 캔버스 과정과 교실 연결

{% 데이터 variables.product.prodname_classroom %}의 교실과 Moodle 과정을 연결할 수 있습니다. 캔버스에 대한 자세한 내용은 [캔버스 웹 사이트](https://www.instructure.com/canvas/)를 참조하세요.

관리자는 LMS 과정을 연결하기 전에 클래스룸에 LMS 인스턴스를 등록해야 합니다. 자세한 내용은 "[{% 데이터 variables.product.prodname_classroom %}에 대한 캔버스 구성](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-canvas-for-github-classroom)"을 참조하세요.

1. [캔버스](https://www.instructure.com/canvas/#login)에 로그인합니다.
1. {% data variables.product.prodname_classroom %}과 통합할 캔버스 과정을 선택합니다.
2. 왼쪽 사이드바에서 "설정"을 클릭한 다음 "앱" 탭을 클릭합니다. 
3. **+ 앱** 단추를 클릭합니다. 
4. "구성 유형"의 드롭다운 메뉴에서 **클라이언트 ID로** 선택합니다. 
5. "클라이언트 ID"에서 {% 데이터 variables.product.prodname_classroom %}을(를) 사용하여 LMS 인스턴스를 등록할 때 LMS 관리자가 만든 클라이언트 ID를 입력합니다.
6. **제출** 을 클릭한 다음 **설치** 를 클릭합니다.
7. 페이지를 새로 고치면 과정 세부 정보 페이지의 오른쪽에 있는 과정 하위 탐색 메뉴에 **GitHub 교실** 링크가 표시됩니다. LMS 관리자가 LMS를 등록할 때 이름을 다른 이름으로 지정하면 이름이 다를 수 있습니다.
8. **GitHub 교실** 링크를 클릭하면 {% 데이터 variables.product.prodname_classroom %}이(가) 시작됩니다. 여기서 LMS 과정과 연결할 클래스룸을 선택할 수 있습니다. 

코스가 연결되면 LMS 코스에서 교실로 명단을 가져올 수 있습니다. 자세한 내용은 "[LMS에서 명단 가져오기](#importing-a-roster-from-your-lms)"를 참조하세요.
## Moodle 과정을 교실과 연결

{% 데이터 variables.product.prodname_classroom %}의 교실과 Moodle 과정을 연결할 수 있습니다. Moodle에 대한 자세한 내용은 [Moodle 웹 사이트](https://moodle.org)를 참조하세요.

관리자는 LMS 과정을 연결하기 전에 클래스룸에 LMS 인스턴스를 등록해야 합니다. 자세한 내용은 "[%}에 대한 {% 데이터 variables.product.prodname_classroom Moodle 구성](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)"을 참조하세요.

Moodle 버전 3.0 이상을 사용해야 합니다.

1. [Moodle](https://moodle.org/login/)에 로그인합니다.
1. {% data variables.product.prodname_classroom %}과 통합할 Moodle 과정을 선택합니다.
2. "외부 도구의 "일반" 아래에 이름이 "GitHub 교실"인 단추가 표시됩니다. LMS 관리자가 LMS를 등록할 때 이름을 다른 이름으로 지정하면 이름이 다를 수 있습니다.
3. **GitHub 교실** 단추를 클릭하면 {% 데이터 variables.product.prodname_classroom %}이(가) 시작됩니다. 여기서 LMS 과정과 연결할 교실을 선택할 수 있습니다. 

코스가 연결되면 LMS 코스에서 교실로 명단을 가져올 수 있습니다. 자세한 내용은 "[LMS에서 명단 가져오기](#importing-a-roster-from-your-lms)"를 참조하세요.
## 사카이 코스와 교실 연결

{% 데이터 variables.product.prodname_classroom %}에서 Sakai 과정을 교실에 연결할 수 있습니다. 사카이에 대한 자세한 내용은 [사카이 웹 사이트를 참조하세요](https://www.sakailms.org/).

관리자는 LMS 과정을 연결하기 전에 클래스룸에 LMS 인스턴스를 등록해야 합니다. 자세한 내용은 "[%}에 대한 {% 데이터 variables.product.prodname_classroom Moodle 구성](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)"을 참조하세요.

1. Sakai 인스턴스에 로그인합니다.
2. {% 데이터 variables.product.prodname_classroom %}과(와) 통합할 Sakai 과정을 선택합니다.
3. **외부 도구를** 클릭합니다. 
4. **도구 링크를** 클릭합니다.
5. "GitHub 교실" 링크를 클릭하면 {% 데이터 variables.product.prodname_classroom %}가 시작됩니다. 여기서 LMS 과정과 연결할 클래스룸을 선택할 수 있습니다.

코스가 연결되면 LMS 코스에서 교실로 명단을 가져올 수 있습니다. 자세한 내용은 "[LMS에서 명단 가져오기](#importing-a-roster-from-your-lms)"를 참조하세요.


## LMS에서 명단 가져오기

LMS에서 명단을 가져오려면:
1. {% 데이터 variables.product.prodname_classroom %}에서 연결된 교실을 열고 "학생" 탭을 선택합니다. 
2. LMS(Canvas, Sakai 또는 Moodle)의 이름이 포함된 **[가져오기]** 단추를 클릭합니다. 
   
   ![캔버스에서 가져오기 단추](/assets/images/help/classroom/import-from-connected-lms.png)

3. 학생에게 사용할 식별자를 선택한 다음 **, 명단 항목 가져오기** 를 클릭하면 명단이 가져옵니다.

기존 명단을 업데이트하려면 다음을 수행합니다.
 1. {% 데이터 variables.product.prodname_classroom %}에서 연결된 교실을 열고 "학생" 탭을 선택합니다. 
 2. LMS(Canvas, Sakai 또는 Moodle)의 이름이 포함된 **[동기화 원본** ] 단추를 클릭합니다.

![Moodle 단추에서 동기화](/assets/images/help/classroom/moodle-sync-roster.png)

## Google 교실에서 명단 가져오기

Google 교실은 LTI 프로토콜을 사용하지 않으므로 명단을 가져오기 전에 GitHub 교실에 연결할 필요가 없습니다.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. 클래스룸에 이미 명단이 있는 경우 명단을 업데이트하거나 명단을 삭제하고 새 명단을 만들 수 있습니다.
    - 명단을 삭제하고 만드는 자세한 방법은 "[클래스룸 명단 삭제](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" 및 "[클래스룸 명단 만들기](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)"를 참조하세요.
    - 명단 업데이트에 대한 자세한 내용은 "[클래스룸의 명단에 학생 추가](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)"를 참조하세요.
1. LMS 목록에서 **Google 교실** 을 클릭합니다.
  !["Google 교실" 단추](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Google에 로그인한 다음 연결할 클래스룸을 선택합니다.

## LMS 연결 끊기

{% 데이터 variables.product.prodname_classroom %} 설정에서 LMS에서 교실 연결을 끊을 수 있습니다.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. "LMS(학습 관리 시스템)에 연결"에서 **연결 설정** 을 클릭합니다.
  ![클래스룸 설정에 있는 "연결 설정" 링크](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. "학습 관리 시스템과의 연결 삭제"에서 **학습 관리 시스템과의 연결 끊기** 를 클릭합니다.
  ![클래스룸에 대한 연결 설정에 있는 "학습 관리 시스템과의 연결 끊기" 단추](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
