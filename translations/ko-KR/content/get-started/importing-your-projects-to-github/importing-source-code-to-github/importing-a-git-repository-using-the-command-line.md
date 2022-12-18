---
title: 명령줄을 사용하여 Git 리포지토리 가져오기
intro: '{% ifversion fpt %} [GitHub Importer](/articles/importing-a-repository-with-github-importer)가 목적에 적합하지 않은 경우(예: 기존 코드가 프라이빗 네트워크에서 호스트되는 경우) 명령줄을 사용하여 가져오는 것이 좋습니다.{% else %}명령줄을 사용하여 Git 프로젝트를 가져오는 것은 기존 코드가 프라이빗 네트워크에서 호스트되는 경우에 적합합니다.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: 2ecc685c4631c617e13ca9e60128c93c6f2a0b89
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094171'
---
시작하기 전에 다음을 알고 있어야 합니다.

- {% data variables.product.product_name %} 사용자 이름
- 외부 리포지토리의 복제 URL(예: `https://external-host.com/user/repo.git` 또는 `git://external-host.com/user/repo.git`)(`external-host.com` 도메인 이름 앞에 `user@` 포함)

{% tip %}

데모를 위해 다음을 사용합니다.

- 외부 계정(**extuser**)
- 외부 Git 호스트(`https://external-host.com`)
- {% data variables.product.product_name %} 개인 계정(**ghuser**)
- {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 **리포지** 토리

{% endtip %}

1. [{% data variables.product.product_name %}에서 새 리포지토리를 만듭니다](/articles/creating-a-new-repository). 외부 Git 리포지토리를 새 리포지토리로 가져옵니다.
2. 명령줄에서 외부 복제 URL을 사용하여 리포지토리의 “최소” 복제본을 만듭니다. 이렇게 하면 파일 편집을 위한 작업 디렉터리 없이 데이터의 전체 복사본이 생성되며, 모든 이전 데이터를 새로 내보냅니다.
  ```shell
  $ git clone --bare https://external-host.com/EXTUSER/REPO.git
  # Makes a bare clone of the external repository in a local directory
  ```
3. “미러” 옵션을 사용하여 로컬로 복제된 리포지토리를 {% data variables.product.product_name %}에 푸시합니다. 그러면 분기 및 태그와 같은 모든 참조가 가져온 리포지토리에 복사됩니다.
  ```shell
  $ cd REPO.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/USER/REPO.git
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}
  ```
4. 임시 로컬 리포지토리를 제거합니다.
  ```shell
  $ cd ..
  $ rm -rf REPO.git
  ```
