---
title: GitHub 교육자를 위한 빠른 시작
intro: '약 15분 후에 교사는 {% data variables.product.company_short %}에 대한 할인, 교육 및 도구를 시작한 다음 {% data variables.product.prodname_classroom %}을 사용하여 소프트웨어 개발 과정에서 학생들을 위한 교실을 만들 수 있습니다.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: Quickstart
ms.openlocfilehash: 8ab34de6a7e2583fc2447fc01729ced7044b3fa7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573886'
---
## 소개

소프트웨어 개발 과정을 가르치는 교육자는 {% data variables.product.prodname_education %}의 할인, 파트너십, 학습 및 도구를 사용하여 학생들에게 관련 기술을 효과적으로 가르칠 수 있습니다.

이 가이드에서는 {% data variables.product.product_name %}를 시작하고, {% data variables.product.prodname_education %}을 통해 계정 및 할인된 서비스에 등록하고, {% data variables.product.prodname_classroom %}에 대한 과정 및 과제 공간을 만듭니다.

{% tip %}

**팁**: 학생이며 학업 할인을 활용하려면 “[학생으로 {% data variables.product.prodname_global_campus %}에 신청](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)”을 참조하세요.

{% endtip %}

## {% data variables.product.product_name %}에 계정 만들기

먼저 {% data variables.product.product_name %}에 무료 개인 계정을 만들어야 합니다.

{% data reusables.accounts.create-account %}
1. 프롬프트에 따라 무료 개인 계정을 만듭니다.

개인 계정을 만든 후 무료 조직 계정을 만듭니다. 이 조직 계정을 사용하여 {% data variables.product.prodname_classroom %} 클래스룸을 만들고 관리합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. 프롬프트에 따라 무료 조직을 만듭니다.

자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/github/getting-started-with-github/types-of-github-accounts)”을 참조하세요.

## 교사 혜택 신청

다음으로, 한 곳에서 교육 혜택에 액세스할 수 있는 포털인 {% data variables.product.prodname_global_campus %}에 신청하여 {% data variables.product.company_short %}에서 교사 혜택 및 리소스에 등록합니다.  {% data reusables.education.educator-requirements %}

{% tip %}

**팁** {% data variables.product.company_short %}는 개별 할인 외에도 {% data variables.product.prodname_campus_program %}을 통해 교육 기관과의 파트너십을 제공합니다. 자세한 내용은 [{% data variables.product.prodname_campus_program %}](https://education.github.com/schools) 웹 사이트를 참조하세요.

{% endtip %}

{% data reusables.education.benefits-page %} {% data reusables.education.click-get-teacher-benefits %} {% data reusables.education.select-email-address %} {% data reusables.education.upload-proof-status %} {% data reusables.education.school-name %} {% data reusables.education.plan-to-use-github %} {% data reusables.education.submit-application %}

확인된 {% data variables.product.prodname_global_campus %} 교육자는 [{% data variables.product.prodname_education %} 웹 사이트](https://education.github.com)로 이동하여 언제든지 {% data variables.product.prodname_global_campus %}에 액세스할 수 있습니다.

## {% data variables.product.prodname_classroom %} 설정

개인 계정 및 조직 계정을 사용하여 {% data variables.product.prodname_classroom %}을 시작할 준비가 되었습니다. {% data variables.product.prodname_classroom %}은 무료로 사용할 수 있습니다. 과제를 추적 및 관리하고, 과제를 자동으로 채점하고, 학생들에게 피드백을 제공할 수 있습니다.

{% data reusables.classroom.sign-into-github-classroom %}
1. {% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_dotcom %}의 개인 계정에 액세스하도록 권한을 부여하려면 정보를 검토한 다음 **{% data variables.product.prodname_classroom %} 권한부여** 를 클릭합니다.
  ![개인 계정에 대한 "{% data variables.product.prodname_classroom %} 권한 부여" 단추](/assets/images/help/classroom/setup-click-authorize-github-classroom.png)
1. 정보를 검토합니다. {% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_dotcom %}의 조직 계정에 액세스하도록 권한을 부여하려면 **Grant**(허용)를 클릭합니다.
  ![조직의 “Grant”(허용) 단추](/assets/images/help/classroom/setup-click-grant.png)
  
  {% tip %}
  
  **팁**: **Request**(요청) 단추가 **Grant**(허용) 대신 표시되면 소유자가 아닌 조직의 구성원입니다. 소유자는 {% data variables.product.prodname_classroom %}에 대한 요청을 승인해야 합니다. {% data variables.product.prodname_classroom %}에서 클래스룸 및 과제를 만들고 관리하려면 조직 소유자여야 합니다. 자세한 내용은 “[OAuth 앱 권한 부여](/github/authenticating-to-github/authorizing-oauth-apps#oauth-apps-and-organizations)”를 참조하세요.
  
  {% endtip %}
  
1. **Authorize github**(GitHub 권한 부여)를 클릭합니다.
  ![조직의 “Authorize”(권한 부여) 단추 클릭](/assets/images/help/classroom/setup-click-authorize-github.png)

## 클래스룸 만들기

{% data reusables.classroom.about-classrooms %}

{% data reusables.classroom.sign-into-github-classroom %}
1. **reate your first classroom**(첫 번째 클래스룸 만들기) 또는 **New classroom**(새 클래스룸)을 클릭합니다.
{% data reusables.classroom.guide-create-new-classroom %}

## 다음 단계

클래스룸을 만들었으므로 {% data variables.product.product_name %} 및 {% data variables.product.prodname_classroom %}을 사용하여 과정을 보강할 준비가 되었습니다.  🎉

- {% data variables.product.prodname_classroom %}에 대한 비디오를 시청하세요. 자세한 내용은 “[{% data variables.product.prodname_classroom %}을 설정하는 기본 사항](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)”을 참조하세요.
- 클래스룸 및 클래스룸 관리자를 관리하고 클래스룸에 대한 학생 명단을 만듭니다. 자세한 내용은 “[클래스룸 관리](/education/manage-coursework-with-github-classroom/manage-classrooms)”를 참조하세요.
- Git 및 {% data variables.product.company_short %} 시작 과제를 사용하여 학생들에게 Git 및 {% data variables.product.product_name %} 기본 사항에 대한 개요를 제공합니다. 자세한 내용은 “[Git 및 {% data variables.product.company_short %} 시작 과제 사용](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)”을 참조하세요.
- 개별 학생 또는 팀에 대한 과제를 만듭니다. {% data reusables.classroom.for-more-information-about-assignment-creation %}
- 자동 테스트를 작성하고 구현하여 과제 리포지토리에서 직접 학생들에게 즉각적인 피드백을 제공합니다. 자세한 내용은 “[자동 채점 사용](/education/manage-coursework-with-github-classroom/use-autograding)”을 참조하세요.
- {% data variables.product.prodname_education_community_with_url %}에 참여합니다.
