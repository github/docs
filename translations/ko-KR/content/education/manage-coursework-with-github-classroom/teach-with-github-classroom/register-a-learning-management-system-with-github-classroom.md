---
title: GitHub 클래스룸에 학습 관리 시스템 등록
intro: '{% data variables.product.prodname_classroom %}를 사용하여 LTI 규격 LMS(학습 관리 시스템)를 구성할 수 있습니다.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
ms.openlocfilehash: e1c1abed5ce4ebf82c19b29fef9a005fbe4c7a02
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106855'
---
## 교실에 LMS 등록 정보

LMS를 클래스룸에 연결하려면 LMS 인스턴스의 관리자가 {% data variables.product.prodname_classroom %}을 허용하도록 LMS를 구성한 다음{% data variables.product.prodname_classroom %}에 LMS를 등록하여 OAuth 핸드셰이크를 시작해야 합니다. 관리자는 이 등록 프로세스를 한 번만 수행하면 LMS 인스턴스를 사용하는 모든 교사가 LMS 과정을 교실에 동기화할 수 있습니다. LMS 과정을 교실에 연결하는 방법에 대한 자세한 내용은 "[학습 관리 시스템 과정을 교실에 연결"을](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom) 참조하세요.

{% note %}

**참고:** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

## 지원되는 LMS

{% data reusables.classroom.supported-lmses %}

## {% data variables.product.prodname_classroom %}에 대한 Canvas 구성

{% data variables.product.prodname_classroom %}에 Canvas 설치를 등록하여 교사가 명단 데이터를 교실로 가져올 수 있도록 할 수 있습니다. 캔버스에 대한 자세한 내용은 [캔버스 웹 사이트](https://www.instructure.com/canvas/)를 참조하세요.

### 1. 캔버스에 {% data variables.product.prodname_classroom %} 개발자 키 등록

1. [캔버스](https://www.instructure.com/canvas/#login)에 로그인합니다.
2. 홈페이지의 왼쪽 사이드바에서 **관리** 클릭한 다음 **사이트 관리** 클릭합니다.
3. **개발자 키를** 클릭합니다.
4. "개발자 키"에서 **+ 개발자 키** 단추를 클릭한 다음, 드롭다운 메뉴에서 **+ LTI 키를** 선택합니다.
5. "키 설정" 구성 화면에서 필드를 다음 값으로 설정합니다. 

    | 캔버스 앱 구성의 필드 | 값 또는 설정 |
    | :- | :- |
    | **방법** | `Manual Entry` |
    | **제목** | `GitHub Classroom` <br/><br/>**참고**: 모든 이름을 사용할 수 있지만 다른 이름으로 설정하면 교사에게 전달되어야 합니다.  |
    | **설명** | `Sync Canvas course rosters to GitHub Classroom` (또는 이와 유사한 항목) |
    | **대상 링크 URI** | `https://classroom.github.com/context-link` |
    | **OpenID Connect 시작 URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **JWK 메서드** | `Public JWK URL` |
    | **공용 JWK URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **리디렉션 URI** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **LTI Advantage Services** 드롭다운 | "도구가 설치된 컨텍스트와 연결된 사용자 데이터를 검색할 수 있습니다." 확인란을 선택합니다. |
    | **추가 설정** 드롭다운 | "개인 정보 수준"에서 `Public` |
    | **배치** | `Course Settings Sub Navigation`를 선택합니다. <br/><br/>**참고**: 배치를 다른 항목으로 설정하는 경우 교사에게 전달해야 합니다. 설명서에서는 단추의 배치가 될 것으로 예상합니다. |
6. **저장** 을 클릭합니다.
7. "개발자 키" 페이지의 표에서 GitHub 클래스룸 개발자 키에 대한 행에서 "세부 정보" 열에 있는 클라이언트 ID 값을 기록해 둡니다. 설치를 완료하려면 교사에게 전달해야 합니다. 
8. "개발자 키" 페이지의 테이블에서 "상태" 열 아래에서 키의 상태를 "켜기"로 전환합니다.

### 2. {% data variables.product.prodname_classroom %}에 개발자 키 등록

1. [https://editor.swagger.io](https://classroom.github.com/register-lms) 로 이동합니다. 
2. 다음 정보를 입력합니다.
   - "LMS 유형"의 드롭다운 메뉴에서 "캔버스"를 선택합니다. 
   - "발급자 식별자": `https://canvas.instructure.com`
   - "도메인": Canvas 인스턴스의 기본 URL
   - "클라이언트 ID": 만든 개발자 키의 "세부 정보" 아래의 "클라이언트 ID"
   - "OIDC 권한 부여 엔드포인트": 끝에 추가된 Canvas 인스턴스 `/login/oauth2/token` 의 기본 URL입니다.
   - "OAuth 2.0 토큰 검색 URL": 끝에 추가된 Canvas 인스턴스 `/api/lti/authorize_redirect` 의 기본 URL입니다.
   - "키 집합 URL": 마지막에 가 추가된 Canvas 인스턴스 `/api/lti/security/jwks` 의 기본 URL입니다.

  ![GitHub 클래스룸에 Canvas 인스턴스 등록](/assets/images/help/classroom/register-canvas-with-github-classroom.png)

3. **등록** 을 클릭합니다. 
4. 화면 맨 위에 "성공적으로 등록된 LMS" 배너가 표시되어야 합니다. 즉, LMS 인스턴스를 등록했으며 교사가 이제 교실을 연결할 수 있습니다.

## {% data variables.product.prodname_classroom %}에 대한 Moodle 구성

교사가 명단 데이터를 교실로 가져올 수 있도록 {% data variables.product.prodname_classroom %}에 Moodle 설치를 등록할 수 있습니다. Moodle에 대한 자세한 내용은 [Moodle 웹 사이트](https://moodle.org)를 참조하세요.

Moodle 버전 3.0 이상을 사용해야 합니다.

### 1. Moodle에서 LTI 도구로 게시 사용

1. [Moodle](https://moodle.org/login/)에 로그인합니다.
2. 최상위 메뉴에서 "사이트 관리" 탭을 클릭합니다.
3. "사이트 관리" 페이지에서 "플러그 인" 탭을 클릭한 다음 "인증" 섹션까지 아래로 스크롤하여 **인증 관리를** 클릭합니다.
4. "LTI" 필드 옆에 있는 토글 단추를 클릭하여 LTI를 사용하도록 설정합니다.
5. "플러그 인" 탭을 다시 클릭한 다음 아래로 스크롤하여 "등록"으로 스크롤하고 **등록 플러그 인 관리를** 클릭합니다.
6. "LTI 도구로 게시" 필드 옆에 있는 토글 단추를 클릭하여 LTI 도구로 게시를 사용하도록 설정합니다.
7. 최상위 메뉴의 "사이트 관리" 탭을 클릭하여 "사이트 관리" 페이지로 돌아가서 "보안" 섹션까지 아래로 스크롤하고 **HTTP 보안을** 클릭합니다.
8. "프레임 포함 허용" 옆에 있는 확인란을 선택하여 프레임 포함을 사용하도록 설정한 다음 **변경 내용 저장** 을 클릭합니다.

### 2. 외부 도구로 {% data variables.product.prodname_classroom %} 등록

1. 최상위 메뉴의 "사이트 관리" 탭을 클릭하여 Moodle "사이트 관리" 페이지로 돌아갑니다. 
2. "플러그 인" 탭을 클릭한 다음 "활동 모듈" 섹션 옆에 있는 "외부 도구"에서 **도구 관리를** 클릭합니다.
3. **수동으로 도구 구성을** 클릭합니다. 
4. 필드에 다음 값을 입력합니다.

    | Moodle 앱 구성의 필드 | 값 또는 설정 |
    | :- | :- |
    | **도구 이름** | `GitHub Classroom` <br/><br/>**참고**: 모든 이름을 사용할 수 있지만 다른 이름으로 설정하면 교사에게 전달되어야 합니다. |
    | **도구 URL** | `https://classroom.github.com` |
    | **LTI 버전** | `LTI 1.3` |
    | **공개 키 유형** | `Keyset URL` |
    | **공개 키 집합** | `https://classroom.github.com/.well-known/jwks.json` |
    | **로그인 URL 시작** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **리디렉션 URI** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **기본 시작 컨테이너** | `New window` |

5. **딥 링크 지원(콘텐츠 항목 메시지)** 확인란을 선택합니다.
6. "서비스" 드롭다운 아래의 드롭다운 메뉴에서 "IMS LTI 이름 및 역할 프로비저닝" 옆에 있는 "이 서비스를 사용하여 개인 정보 설정에 따라 멤버의 정보를 검색"을 선택합니다. 
7. **변경 내용 저장** 을 클릭합니다. 
8. 이제 GitHub 클래스룸이 외부 도구로 등록되었습니다. "도구"의 'GitHub 교실' 상자에서 메뉴 아이콘을 클릭하여 "도구 구성 세부 정보" 화면을 확인합니다. 이 화면에는 아래의 {% data variables.product.prodname_classroom %}에 인스턴스를 등록하는 마지막 단계에서 입력해야 하는 중요한 정보가 포함되어 있습니다. 

### 3. {% data variables.product.prodname_classroom %}에 Moodle 인스턴스 등록

1. [https://editor.swagger.io](https://classroom.github.com/register-lms) 로 이동합니다. 
2. 다음 정보를 입력합니다.
   - "LMS 유형"의 드롭다운 메뉴에서 "Moodle"을 선택합니다. 
   - "발급자 식별자": Moodle에서 만든 외부 도구의 "도구 구성 세부 정보"의 "플랫폼 ID"
   - "도메인": Moodle 인스턴스의 기본 URL
   - "클라이언트 ID": Moodle에서 만든 외부 도구의 "도구 구성 세부 정보"의 "클라이언트 ID"
   - "인증 요청 URL": Moodle에서 만든 외부 도구의 "도구 구성 세부 정보"의 "인증 요청 URL"
   - "액세스 토큰 URL": Moodle에서 만든 외부 도구의 "도구 구성 세부 정보"에서 "액세스 토큰 URL"
   - "키 집합 URL": Moodle에서 만든 외부 도구의 "도구 구성 세부 정보"의 "공개 키 집합 URL"
  
  ![GitHub 클래스룸에 Moodle 인스턴스 등록](/assets/images/help/classroom/register-moodle-with-github-classroom.png)

3. **등록** 을 클릭합니다.
4. 화면 맨 위에 "성공적으로 등록된 LMS" 배너가 표시되어야 합니다. 즉, LMS 인스턴스를 등록했으며 교사가 교실을 연결할 수 있습니다.

## {% data variables.product.prodname_classroom %}에 대한 Sakai 구성

### 1. {% data variables.product.prodname_classroom %}을(를) 외부 도구로 등록

1. 사카이로 이동하여 로그인합니다.
2. "관리 작업 영역"으로 이동하고 왼쪽 사이드바에서 **외부 도구를** 선택합니다. 
3. **LTI 1.x 도구 설치** 를 클릭합니다.
4. 필드에 다음 값을 입력합니다.

    | Sakai 앱 구성의 필드 | 값 또는 설정 |
    | :- | :- |
    | **도구 이름** | GitHub 교실 - [과정 이름] <br/><br/>**참고**: 어떤 이름도 사용할 수 있지만 다른 이름으로 설정하면 교사에게 전달되어야 합니다. |
    | **단추 텍스트** (도구 메뉴의 텍스트) | {% data variables.product.prodname_classroom %}을(를) 시작하는 단추에서 교사가 볼 수 있는 내용입니다. 예를 들어 값은 일 수 있습니다 `sync`. |
    | **시작 URL** | `https://classroom.github.com/context-link` |
    | **외부 도구로 사용자 이름 보내기** | 이 확인란을 선택합니다. |
    | **외부 도구에 명단 제공** | 이 확인란을 선택합니다. |
    | **도구에서 LTI 1.3을 지원합니다.** | 이 확인란을 선택합니다. |
    | **LTI 1.3 도구 키 집합 URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **LTI 1.3 도구 OpenID Connect/초기화 엔드포인트** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **LTI 1.3 도구 리디렉션 엔드포인트** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
5. 제출 시 Sakai는 {% data variables.product.prodname_classroom %}에 Sakai 인스턴스를 등록하는 데 필요한 정보를 표시합니다.

### 2. {% data variables.product.prodname_classroom %}에 Sakai 인스턴스 등록

1. [https://editor.swagger.io](https://classroom.github.com/register-lms) 로 이동합니다.
2. 다음 정보를 입력합니다.
   - "LMS 유형"의 드롭다운 메뉴에서 "Sakai"를 선택합니다. 
   - "LTI 1.3 플랫폼 발급자": Sakai에서 제공하는 "LTI 1.3 플랫폼 발급자" 필드
   - "도메인": Sakai 인스턴스의 기본 URL
   - "LTI 1.3 클라이언트 ID": Sakai에서 제공하는 "LTI 1.3 클라이언트 ID" 필드
   - "LTI 1.3 플랫폼 OIDC 인증 URL": Sakai에서 제공하는 "LTI 1.3 플랫폼 OIDC 인증 URL" 필드
   - "LTI 1.3 플랫폼 OAuth2 전달자 토큰 검색 URL": Sakai에서 제공하는 "LTI 1.3 플랫폼 OAuth2 전달자 토큰 검색 URL" 필드
   - "LTI 1.3 Platform OAuth2 잘 알려진/KeySet URL": Sakai에서 제공하는 "LTI 1.3 플랫폼 OAuth2 잘 알려진/KeySet URL" 필드
  
  ![GitHub 클래스룸에 Sakai 인스턴스 등록](/assets/images/help/classroom/register-sakai-with-github-classroom.png)

3. **등록** 을 클릭합니다. 
4. 화면 맨 위에 "성공적으로 등록된 LMS" 배너가 표시되어야 합니다. 즉, LMS 인스턴스를 등록했으며 교사가 교실을 연결할 수 있습니다.
