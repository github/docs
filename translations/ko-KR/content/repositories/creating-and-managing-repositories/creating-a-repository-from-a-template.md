---
title: 템플릿에서 리포지토리 만들기
intro: 기존 리포지토리와 동일한 디렉터리 구조 및 파일을 가진 새 리포지토리를 생성할 수 있습니다.
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160245'
---
## 리포지토리 템플릿 정보

템플릿 리포지토리에 대한 읽기 권한이 있는 사용자는 해당 템플릿에서 리포지토리를 만들 수 있습니다. 자세한 내용은 “[템플릿 리포지토리 만들기](/articles/creating-a-template-repository)”를 참조하세요.

{% tip %}

**팁**: {% data variables.product.prodname_cli %}를 사용하여 템플릿에서 리포지토리를 만들 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_cli %} 설명서의 “[`gh repo create`](https://cli.github.com/manual/gh_repo_create)”를 참조하세요.

{% endtip %}

템플릿 리포지토리의 기본 분기에서만 디렉터리 구조 및 파일을 포함하거나 모든 분기를 포함하도록 선택할 수 있습니다. 템플릿에서 만든 분기는 관련 없는 기록을 포함하므로 끌어오기 요청을 만들거나 분기 간에 병합할 수 없습니다.

템플릿에서 리포지토리를 만드는 것은 리포지토리 포크와 유사하지만 중요한 차이점이 있습니다.
- 새 포크에는 부모 리포지토리의 전체 커밋 기록이 포함되며 템플릿에서 만든 리포지토리는 단일 커밋으로 시작합니다.
- 포크에 대한 커밋은 기여 그래프에 표시되지 않지만 템플릿에서 만든 리포지토리에 대한 커밋은 기여 그래프에 표시됩니다.
- 포크는 템플릿에서 리포지토리를 만들면 새 프로젝트를 빠르게 시작하는 동시에 기존 프로젝트에 코드를 기여하는 임시 방법이 될 수 있습니다.

포크에 대한 자세한 내용은 "[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"를 참조하세요.

## 템플릿에서 리포지토리 만들기

{% data reusables.repositories.navigate-to-repo %}
1. 파일 목록 위에서 **이 템플릿 사용** 을 클릭합니다.
{% ifversion fpt or ghec %}
1. **새 리포지토리 만들기를** 선택합니다.

   ![이 템플릿 단추 사용](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **참고:** 또는 codespace에서 템플릿을 열고 나중에 새 리포지토리에 작업을 게시할 수 있습니다. 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. 필요에 따라 기본 분기뿐만 아니라 템플릿에 있는 모든 분기의 디렉터리 구조와 파일을 포함하려면 **모든 분기 포함** 을 선택합니다.
  ![모든 분기 포함 확인란](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. **템플릿에서 리포지토리 만들기** 를 클릭합니다.
