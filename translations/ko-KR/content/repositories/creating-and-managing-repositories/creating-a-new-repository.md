---
title: 새 리포지토리 만들기
intro: 개인 계정 또는 자신이 충분한 권한을 가진 조직에 새 리포지토리를 만들 수 있습니다.
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: c399ac1a0881fe593087dada707296b226a5d9d8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136923'
---
{% tip %}

**팁:** 소유자는 조직의 리포지토리 만들기 권한을 제한할 수 있습니다. 자세한 내용은 “[조직의 리포지토리 만들기 제한](/articles/restricting-repository-creation-in-your-organization)”을 참조하세요.

{% endtip %}

{% tip %}

**팁**: {% data variables.product.prodname_cli %}을(를) 사용하여 gist를 만들 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_cli %} 설명서의 “[`gh repo create`](https://cli.github.com/manual/gh_repo_create)”를 참조하세요.

{% endtip %}

{% data reusables.repositories.create_new %}
2. 필요에 따라 기존 리포지토리의 디렉터리 구조 및 파일을 사용하여 리포지토리를 만들려면 **템플릿 선택** 드롭다운을 사용하고 템플릿 리포지토리를 선택합니다. 구성원이거나 이전에 사용한 사용자 및 조직이 소유한 템플릿 리포지토리가 표시됩니다. 자세한 내용은 “[템플릿에서 리포지토리 만들기](/articles/creating-a-repository-from-a-template)”를 참조하세요.
  ![템플릿 드롭다운 메뉴](/assets/images/help/repository/template-drop-down.png)
3. 필요에 따라 템플릿을 사용하도록 선택한 경우 기본 분기뿐만 아니라 템플릿에 있는 모든 분기의 디렉터리 구조와 파일을 포함하려면 **모든 분기 포함** 을 선택합니다.
    ![모든 분기 포함 확인란](/assets/images/help/repository/include-all-branches.png)
3. 소유자 드롭다운에서 리포지토리를 만들 계정을 선택합니다.
   ![소유자 드롭다운 메뉴](/assets/images/help/repository/create-repository-owner.png) {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. 템플릿을 사용하지 않는 경우 리포지토리를 미리 채울 수 있는 여러 선택적 항목이 있습니다. 기존 리포지토리를 {% data variables.product.product_name %}(으)로 가져오는 경우 병합 충돌이 발생할 수 있으므로 이러한 옵션을 선택하지 마세요. 사용자 인터페이스를 사용하여 새 파일을 추가하거나, 만들거나 나중에 명령줄을 사용하여 새 파일을 추가하도록 선택할 수 있습니다. 자세한 내용은 “[명령줄을 사용하여 Git 리포지토리 가져오기](/articles/importing-a-git-repository-using-the-command-line/)”, “[리포지토리에 파일 추가](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)” 및 “[병합 충돌 해결](/articles/addressing-merge-conflicts/)”을 참조하세요.
    - 프로젝트를 설명하는 문서인 추가 정보(README)를 만들 수 있습니다. 자세한 내용은 “[추가 정보](/articles/about-readmes/)”를 참조하세요.
    - 무시 규칙 집합인 *.gitignore* 파일을 만들 수 있습니다. 자세한 내용은 “[파일 무시](/github/getting-started-with-github/ignoring-files)”를 참조하세요. {% ifversion fpt or ghec %}
    - 프로젝트에 대한 소프트웨어 라이선스를 추가하도록 선택할 수 있습니다. 자세한 내용은 “[리포지토리 라이선스](/articles/licensing-a-repository)”를 참조하세요.{% endif %} {% data reusables.repositories.select-marketplace-apps %} {% data reusables.repositories.create-repo %} {% ifversion fpt or ghec %}
9. 결과 빠른 설치 페이지의 맨 아래에 있는 “이전 리포지토리에서 코드 가져오기”에서 프로젝트를 새 리포지토리로 가져오도록 선택할 수 있습니다. 이렇게 하려면 **코드 가져오기** 를 클릭합니다.
{% endif %}

## 추가 참고 자료

- “[조직의 리포지토리에 대한 액세스 권한 관리](/articles/managing-access-to-your-organization-s-repositories)”
- [오픈 소스 가이드](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
