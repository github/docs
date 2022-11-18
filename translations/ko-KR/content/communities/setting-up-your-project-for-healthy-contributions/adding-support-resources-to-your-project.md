---
title: 프로젝트에 지원 리소스 추가
intro: 지원 파일을 만들어 프로젝트에서 도움을 받는 방법에 대해 사람들에게 알릴 수 있습니다.
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090206'
---
특정 지원 리소스로 사용자를 안내하려면 리포지토리의 루트, `docs` 또는 `.github` 폴더에 SUPPORT 파일을 추가할 수 있습니다. 리포지토리에서 문제를 만들면 프로젝트의 SUPPORT 파일에 대한 링크가 표시됩니다.

![지원 지침](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

조직 또는 개인 계정에 대한 기본 지원 리소스를 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

{% endif %}

{% tip %}

**팁:** 사용자가 지원 지침을 찾을 수 있도록 리포지토리의 다른 위치(예: [README 파일](/articles/about-readmes/))에서 SUPPORT 파일에 연결할 수 있습니다.

{% endtip %}

## 프로젝트에 지원 리소스 추가

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 *SUPPORT.md* (모두 대문자)를 입력합니다.
4. **새 파일 편집** 탭에서 사용자가 프로젝트에 대해 지원을 받을 수 있는 방법에 대한 정보를 추가합니다.
5. SUPPORT 파일을 검토하려면 **미리 보기** 를 클릭합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
