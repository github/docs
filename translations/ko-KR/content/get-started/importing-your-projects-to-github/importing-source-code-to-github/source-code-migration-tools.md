---
title: 소스 코드 마이그레이션 도구
intro: 외부 도구를 사용하여 프로젝트를 GitHub로 이동할 수 있습니다.
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
ms.openlocfilehash: 7877d435e7971f669d9d49a70d2d2450371b5159
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882169'
---
{% ifversion fpt or ghec %}

Subversion, Mercurial, TFVC(Team Foundation 버전 제어) 또는 다른 Git 리포지토리에서 프로젝트를 가져오려면 [GitHub Importer](/articles/about-github-importer)를 사용하는 것이 좋습니다. 외부 도구를 사용하여 프로젝트를 Git으로 변환할 수도 있습니다.

{% endif %}

## Subversion에서 가져오기

일반적인 Subversion 환경에서는 여러 프로젝트가 단일 루트 리포지토리에 저장됩니다. GitHub에서는 각 프로젝트가 일반적으로 개인 계정 또는 조직의 개별 Git 리포지토리에 매핑됩니다. 다음과 같은 경우 Subversion 리포지토리의 각 부분을 별도의 GitHub 리포지토리로 가져오는 것이 좋습니다.

* 협력자가 프로젝트의 해당 부분을 다른 부분과 별도로 체크 아웃하거나 커밋해야 하는 경우
* 각 부분에 고유한 액세스 권한을 부여하려는 경우

Subversion 리포지토리를 Git으로 변환하려면 다음 도구를 사용하는 것이 좋습니다.

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Mercurial에서 가져오기

Mercurial 리포지토리를 Git으로 변환하려면 [hg-fast-export](https://github.com/frej/fast-export)를 사용하는 것이 좋습니다.

## TFVC에서 가져오기

TFVC와 Git 간에 변경 내용을 이동하려면 [git-tfs](https://github.com/git-tfs/git-tfs)를 사용하는 것이 좋습니다.

TFVC(중앙 집중식 버전 제어 시스템)에서 Git로 이동하는 방법에 대한 자세한 내용은 Microsoft 문서 사이트에서 “[Git으로 마이그레이션 계획](https://docs.microsoft.com/devops/develop/git/centralized-to-git)”을 참조하세요.

{% tip %}

**팁:** 프로젝트를 Git으로 성공적으로 변환한 후 [{% data variables.product.prodname_dotcom %}에 푸시](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)할 수 있습니다.

{% endtip %}

{% ifversion fpt or ghec %}

## 추가 참고 자료

- “[GitHub Importer 정보](/articles/about-github-importer)”
- “[GitHub Importer를 사용하여 리포지토리 가져오기](/articles/importing-a-repository-with-github-importer)”
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
