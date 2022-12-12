---
title: 조직을 대신하여 커밋 만들기
intro: '커밋 메시지에 후행부를 추가하여 조직을 대신하여 커밋을 만들 수 있습니다. 조직에 귀속된 커밋에는 {% data variables.product.product_name %}에 대한 `on-behalf-of` 배지가 포함됩니다.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: On behalf of an organization
ms.openlocfilehash: 6769b78698e8a5c5a412c8f49324c8a30825206a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094427'
---
{% note %}

**참고:** 조직을 대신하여 커밋을 만드는 기능은 현재 공개 베타 버전이며 변경될 수 있습니다.

{% endnote %}

조직을 대신하여 커밋을 만들려는 사용자는:

- 후행부에 표시된 조직의 구성원이어야 합니다.
- 커밋에 서명해야 합니다.
- 커밋 이메일 및 조직 이메일이 조직에서 확인한 도메인에 있어야 합니다.
- 커밋 메시지가 커밋 후행부 `on-behalf-of: @org <name@organization.com>`으로 끝나야 합니다.
  - `org`는 조직의 로그인 ID
  - `name@organization.com`은 조직의 도메인

조직은 `name@organization.com` 이메일을 오픈 소스 활동을 위한 공개 연락 지점으로 사용할 수 있습니다.

## 명령줄에서 `on-behalf-of` 배지를 사용하여 커밋 만들기

1. 커밋 메시지와 변경 내용에 대한 짧고 의미 있는 설명을 입력합니다. 커밋 설명 후에는 닫는 따옴표 대신 두 개의 빈 줄을 추가합니다.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **팁:** 명령줄에서 텍스트 편집기를 사용하여 커밋 메시지를 입력하는 경우 커밋 설명의 끝과 `on-behalf-of:` 커밋 후행부 사이에 두 개의 줄 바꿈이 있는지 확인하세요.

  {% endtip %}

2. 커밋 메시지의 다음 줄에 `on-behalf-of: @org <name@organization.com>`을 입력한 후 닫는 따옴표를 입력합니다.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: @ORG NAME@ORGANIZATION.COM"
  ```

다음에 푸시할 때 {% 데이터 variables.location.product_location %}에 새 커밋, 메시지 및 배지가 표시됩니다. 자세한 내용은 “[원격 리포지토리에 변경 내용 푸시](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)”를 참조하세요.

## {% data variables.product.product_name %}에서 `on-behalf-of` 배지로 커밋 만들기

{% data variables.product.product_name %}의 웹 편집기를 사용하여 파일을 변경했으면, 커밋 메시지에 `on-behalf-of:` 후행부를 추가하여 조직을 대신해 커밋을 만들 수 있습니다.

1. 변경한 후 페이지 하단에 변경 내용을 설명하는 짧고 의미 있는 커밋 메시지를 입력합니다.
  ![변경 내용에 대한 메시지 커밋](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. 커밋 메시지 아래의 텍스트 상자에 `on-behalf-of: @org <name@organization.com>`을 추가합니다.

  ![두 번째 커밋 메시지 텍스트 상자의 커밋 메시지 on-behalf-of 후행부 예제](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. **변경 내용 커밋** 또는 **변경 내용 제안** 을 클릭합니다.

새 커밋, 메시지 및 배지는 {% 데이터 variables.location.product_location %}에 표시됩니다.

## 추가 참고 자료

- “[프로필에서 기여 보기](/articles/viewing-contributions-on-your-profile)”
- “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
- “[프로젝트의 기여자 보기](/articles/viewing-a-projects-contributors)”
- “[커밋 메시지 변경](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)”
