---
title: 여러 작성자와 커밋 만들기
intro: '커밋 메시지에 하나 이상의 `Co-authored-by` 후행부를 추가하여 하나의 커밋을 둘 이상의 작성자에게 귀속시킬 수 있습니다. 공동 작성 커밋은 {% data variables.product.product_name %}{% ifversion ghes or ghae %}에 표시되며 프로필 기여 그래프 및 리포지토리의 통계에 포함될 수 있습니다{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: dafc83a883f9c3cc6a1915d9f03b493dbd99d669
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094515'
---
## 필수 공동 작성자 정보

커밋에 공동 작성자를 추가하려면 먼저 각 공동 작성자에 대해 사용할 적절한 이메일을 알고 있어야 합니다. 공동 작성자의 커밋이 기여로 계산되도록 하려면 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정과 연결된 전자 메일을 사용해야 합니다.

{% ifversion fpt or ghec %}

이메일 주소를 공개하지 않기로 한 사용자가 있는 경우, 개인 정보 보호를 위해 {% data variables.product.product_name %} 제공 `no-reply` 이메일을 사용해야 합니다. 그런 경우가 아니라면 공동 작성자의 이메일이 커밋 메시지에서 공개됩니다. 이메일을 공개하지 않으려는 경우, Git 작업에 {% data variables.product.product_name %} 제공 `no-reply` 이메일을 사용하고 다른 공동 작성자들에게 커밋 후행부에 `no-reply` 이메일을 나열하도록 요청할 수 있습니다.

자세한 내용은 “[커밋 이메일 주소 설정](/articles/setting-your-commit-email-address)”을 참조하세요.

  {% tip %}

  **팁:** 다음 정보를 공유하여 공동 작성자가 선호하는 이메일 주소를 찾도록 도울 수 있습니다.
  - {% data variables.product.product_name %} 제공 `no-reply` 이메일을 찾으려면 “내 이메일 주소를 비공개로 유지”에서 이메일 설정 페이지로 이동합니다.
  - 컴퓨터에서 Git을 구성하는 데 사용한 이메일을 찾으려면 명령줄에서 `git config user.email`을 실행합니다.

  {% endtip %}

{% endif %}

## {% data variables.product.prodname_desktop %}을 사용하여 공동 작성 커밋 만들기

{% data variables.product.prodname_desktop %}을 사용하여 공동 작성자와 함께 커밋을 만들 수 있습니다. 자세한 내용은 “[커밋 메시지 작성 및 변경 내용 푸시](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)”와 [{% data variables.product.prodname_desktop %}](https://desktop.github.com)을 참조하세요.

![커밋 메시지에 공동 작성자 추가](/assets/images/help/desktop/co-authors-demo-hq.gif)

## 명령줄에서 공동 작성 커밋 만들기

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. 커밋 메시지와 변경 내용에 대한 짧고 의미 있는 설명을 입력합니다. 커밋 설명 후에는 닫는 따옴표 대신 두 개의 빈 줄을 추가합니다.
  ```
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **팁:** 명령줄에서 텍스트 편집기를 사용하여 커밋 메시지를 입력하는 경우 커밋 설명의 끝과 `Co-authored-by:` 커밋 후행부 사이에 두 개의 줄 바꿈이 있는지 확인하세요.

  {% endtip %}

3. 커밋 메시지의 다음 줄에서 각 공동 작성자에 해당하는 정보와 함께 `Co-authored-by: name <name@example.com>`을 입력합니다. 공동 작성자 정보 이후에 닫는 따옴표를 추가합니다.

  여러 공동 작성자를 추가하는 경우 각 공동 작성자에게 고유한 줄과 `Co-authored-by:` 커밋 후행부를 제공합니다.
  ```
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: NAME <NAME@EXAMPLE.COM>
  Co-authored-by: AUTHOR-NAME <ANOTHER-NAME@EXAMPLE.COM>"
  ```

다음에 푸시할 때 {% 데이터 variables.location.product_location %}에 새 커밋 및 메시지가 표시됩니다. 자세한 내용은 “[원격 리포지토리에 변경 내용 푸시](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)”를 참조하세요.

## {% data variables.product.product_name %}에서 공동 작성 커밋 만들기

{% data variables.product.product_name %}의 웹 편집기를 사용하여 파일을 변경했으면, 커밋 메시지에 `Co-authored-by:` 후행부를 추가하여 공동 작성 커밋을 만들 수 있습니다.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. 함께 변경한 후 페이지 하단에 변경 내용을 설명하는 짧고 의미 있는 커밋 메시지를 입력합니다.
  ![변경 내용에 대한 메시지 커밋](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. 커밋 메시지 아래의 텍스트 상자에 각 공동 작성자에 해당하는 정보와 함께 `Co-authored-by: name <name@example.com>`을 추가합니다. 여러 공동 작성자를 추가하는 경우 각 공동 작성자에게 고유한 줄과 `Co-authored-by:` 커밋 후행부를 제공합니다.

  ![두 번째 커밋 메시지 텍스트 상자의 커밋 메시지 공동 작성자 후행부](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. **변경 내용 커밋** 또는 **변경 내용 제안** 을 클릭합니다.

새 커밋 및 메시지가 {% 데이터 variables.location.product_location %}에 표시됩니다.

## 추가 참고 자료
{% ifversion ghes or ghae %}
- “[프로필에서 기여 보기](/articles/viewing-contributions-on-your-profile)”
- “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”{% endif %}
- “[프로젝트의 기여자 보기](/articles/viewing-a-projects-contributors)”
- “[커밋 메시지 변경](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)”
- {% data variables.product.prodname_desktop %} 설명서의 “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)”
