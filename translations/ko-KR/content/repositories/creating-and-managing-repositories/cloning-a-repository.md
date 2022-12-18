---
title: 리포지토리 복제
intro: '{% 데이터 variables.location.product_location %}에 리포지토리를 만들면 원격 리포지토리로 존재합니다. 리포지토리를 복제하여 컴퓨터에 로컬 복사본을 만들고 두 위치 간에 동기화할 수 있습니다.'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 98c470d19b9c1fcf5cbef0fdd091e86a63d08583
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093923'
---
## 리포지토리 복제 정보

{% 데이터 variables.location.product_location %}에서 로컬 컴퓨터로 리포지토리를 복제하여 병합 충돌을 보다 쉽게 해결하고, 파일을 추가 또는 제거하고, 더 큰 커밋을 푸시할 수 있습니다. 리포지토리를 복제할 때 {% 데이터 variables.location.product_location %}에서 로컬 머신으로 리포지토리를 복사합니다.

리포지토리를 복제하면 프로젝트의 모든 파일 및 폴더 버전을 포함하여 {% 데이터 variables.location.product_location %}이(가) 해당 시점에 가지고 있는 모든 리포지토리 데이터의 전체 복사본을 가져옵니다. {% 데이터 variables.location.product_location %}에서 원격 리포지토리에 변경 내용을 푸시하거나 {% 데이터 variables.location.product_location %}에서 다른 사용자의 변경 내용을 가져올 수 있습니다. 자세한 내용은 “[Git 사용](/github/getting-started-with-github/using-git)”을 참조하세요.

기존 리포지토리를 복제하거나 다른 사람의 기존 리포지토리를 복제하여 프로젝트에 기여할 수 있습니다.

## 리포지토리 복제

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

리포지토리를 로컬로 복제하려면 `repo clone` 하위 명령을 사용합니다. `repository` 매개 변수를 확장의 리포지토리로 바꿉니다. `octo-org/octo-repo`, `monalisa/octo-repo` 또는 `octo-repo`). `OWNER/REPO` 리포지토리 인수의 `OWNER/` 부분을 생략하면 기본값은 인증 사용자의 이름으로 설정됩니다.

```shell
gh repo clone REPOSITORY
```

GitHub URL을 사용하여 리포지토리를 복제할 수도 있습니다.

```shell
gh repo clone https://github.com/PATH-TO/REPOSITORY
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
4. {% data variables.product.prodname_desktop %}의 프롬프트에 따라 복제를 완료합니다.

자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_desktop %}으로 리포지토리 복제](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)”를 참조하세요.

{% enddesktop %}

## 빈 리포지토리 복제

빈 리포지토리에는 파일이 없습니다. 리포지토리를 만들 때 추가 정보로 리포지토리를 초기화하지 않는 경우가 많습니다.

{% data reusables.repositories.navigate-to-repo %}
2. HTTPS를 사용하여 명령줄을 통해 리포지토리를 복제하려면 “빠른 설정”에서 {% octicon "clippy" aria-label="The clipboard icon" %}을(를) 클릭합니다. 조직의 SSH 인증 기관에서 발급한 인증서를 포함하여 SSH 키를 사용하여 리포지토리를 복제하려면 **SSH** 를 클릭한 다음, {% octicon "clippy" aria-label="The clipboard icon" %}을 클릭합니다.
   ![빈 리포지토리 복제 URL 단추](/assets/images/help/repository/empty-https-url-clone-button.png)

   또는 데스크톱에서 리포지토리를 복제하려면 {% octicon "desktop-download" aria-label="The desktop download button" %} **데스크톱에서 설정** 을 클릭하고 프롬프트에 따라 복제를 완료합니다.
   ![빈 리포지토리 복제 데스크톱 단추](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

## 복제 오류 문제 해결

리포지토리를 복제할 때 몇 가지 오류가 발생할 수 있습니다.

리포지토리를 복제할 수 없는 경우 다음을 확인합니다.

- HTTP를 사용하여 연결할 수 있습니다. 자세한 내용은 “[HTTPS 복제 오류](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)”를 참조하세요.
- 복제하려는 리포지토리에 액세스할 수 있는 권한이 있습니다. 자세한 내용은 “[오류: 리포지토리를 찾을 수 없음](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)”을 참조하세요.
- 복제하려는 기본 분기가 여전히 존재합니다. 자세한 내용은 “[오류: 원격 헤드가 존재하지 않는 참조를 참조하기 때문에 체크 아웃할 수 없음](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)”를 참조하세요.

{% ifversion fpt or ghec %}

## 추가 참고 자료

- “[연결 문제 해결](/articles/troubleshooting-connectivity-problems)” {% endif %}
