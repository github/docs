---
title: 리포지토리 이름 바꾸기
intro: 조직 소유자이거나 리포지토리에 대한 관리자 권한이 있는 경우 리포지토리의 이름을 변경할 수 있습니다.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: d0067d96dce2f2cf9fe8bb2dd519668780d861ff
ms.sourcegitcommit: bd8b3e152f17d90acf222a0d50ba9595184c1f5f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111675'
---
리포지토리의 이름을 바꾸면 프로젝트 사이트 URL을 제외한 모든 기존 정보가 다음을 비롯한 새 이름으로 자동으로 리디렉션됩니다.

* 문제
* Wikis
* 별
* 팔로워

프로젝트 사이트에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”를 참조하세요.

웹 트래픽을 리디렉션하는 것 외에도 이전 위치를 대상으로 하는 모든 `git clone`, `git fetch` 또는 `git push` 작업은 새 위치에서 수행된 것처럼 계속 작동합니다. 그러나 혼동을 줄이려면 새 리포지토리 URL을 가리키도록 기존 로컬 클론을 업데이트하는 것이 좋습니다. 명령줄에서 `git remote`를 사용하여 이 작업을 수행할 수 있습니다.

```shell
$ git remote set-url origin NEW_URL
```

자세한 내용은 “[원격 리포지토리 관리](/github/getting-started-with-github/managing-remote-repositories)”를 참조하세요.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_pages %} 사이트가 있는 리포지토리의 이름을 바꾸려는 경우 사이트에 사용자 지정 도메인을 사용하는 것이 좋습니다. 이렇게 하면 리포지토리의 이름을 바꿔도 사이트 URL이 영향을 받지 않습니다. 자세한 내용은 “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %} 사이트 정보](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)”를 참조하세요. 

{% endif %}

{% note %}

**참고:** {% data variables.product.prodname_dotcom %}은(는) 이름이 바뀐 리포지토리에서 호스트하는 작업으로 호출을 리디렉션하지 않습니다. 해당 작업을 사용하는 모든 워크플로는 오류 `repository not found`와 함께 실패합니다. 대신 새 이름으로 새 리포지토리 및 작업을 만들고 이전 리포지토리를 보관합니다. 자세한 내용은 “[리포지토리 보관](/repositories/archiving-a-github-repository/archiving-repositories)”을 참조하세요.

{% endnote %}

{% warning %}

**경고**: 나중에 계정 아래에 새 리포지토리를 만드는 경우 이름이 바뀐 리포지토리의 원래 이름을 다시 사용하지 마세요. 이렇게 하면 이름이 바뀐 리포지토리로 리디렉션이 더 이상 작동하지 않습니다.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. **리포지토리 이름** 제목 아래에 리포지토리의 새 이름을 입력합니다.
   ![리포지토리 이름 바꾸기](/assets/images/help/repository/repository-name-change.png)
4. **이름 바꾸기** 를 클릭합니다. 완료되었습니다!
