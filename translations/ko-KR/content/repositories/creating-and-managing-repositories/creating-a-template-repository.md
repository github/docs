---
title: 템플릿 리포지토리 만들기
intro: '기존 리포지토리를 템플릿으로 만들어서 자신과 다른 사용자가 동일한 디렉터리 구조, 분기 및 파일을 사용하여 새 리포지토리를 생성하도록 할 수 있습니다.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136917'
---
{% note %}

**참고**: 템플릿 리포지토리에는 {% data variables.large_files.product_name_short %}를 사용하여 저장된 파일을 포함할 수 없습니다.

{% endnote %}

템플릿 리포지토리를 만들려면 리포지토리를 만든 다음, 리포지토리를 템플릿으로 만들어야 합니다. 리포지토리를 만드는 방법에 대한 자세한 내용은 “[새 리포지토리 만들기](/articles/creating-a-new-repository)”를 참조하세요.

리포지토리를 템플릿으로 만들면 리포지토리에 액세스할 수 있는 모든 사용자가 기본 분기와 동일한 디렉터리 구조 및 파일을 사용하여 새 리포지토리를 생성할 수 있습니다. 리포지토리에 다른 모든 분기를 포함하도록 선택할 수도 있습니다. 템플릿에서 만든 분기는 관련 없는 기록을 포함하므로 끌어오기 요청을 만들거나 분기 간에 병합할 수 없습니다. 자세한 내용은 “[템플릿에서 리포지토리 만들기](/articles/creating-a-repository-from-a-template)”를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. **템플릿 리포지토리** 를 선택합니다.
  ![리포지토리를 템플릿으로 만들기 위한 확인란](/assets/images/help/repository/template-repository-checkbox.png)
