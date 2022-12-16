---
title: GitHub의 대용량 파일 정보
intro: '{% data variables.product.product_name %}은(는) 일반 Git 리포지토리에서 추적할 수 있는 파일의 크기를 제한합니다. 제한을 초과하는 파일을 추적하거나 제거하는 방법을 알아봅니다.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
ms.openlocfilehash: 9e047ab3b237ced16c48cd6174b72bd48db7cffa
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094547'
---
## {% data variables.product.product_name %}의 크기 제한 정보

{% ifversion fpt or ghec %} {% data variables.product.product_name %}은(는) 파일 및 리포지토리 크기에 대한 하드 제한이 있지만 모든 Git 리포지토리에 풍부한 스토리지를 제공하려고 합니다. 사용자의 성능과 안정성을 보장하기 위해 전체 리포지토리 상태의 신호를 적극적으로 모니터링합니다. 리포지토리 상태는 크기, 커밋 빈도, 콘텐츠, 구조를 비롯한 다양한 상호 작용 요소의 함수입니다.

### 파일 크기 제한
{% endif %}

{% data variables.product.product_name %}은(는) 리포지토리에 허용되는 파일의 크기를 제한합니다. {% data variables.large_files.warning_size %}보다 큰 파일을 추가하거나 업데이트하려고 하면 Git에서 경고가 표시됩니다. 변경 내용은 여전히 리포지토리에 성공적으로 푸시되지만 성능 영향을 최소화하기 위해 커밋을 제거하는 것이 좋습니다. 자세한 내용은 “[리포지토리의 기록에서 파일 제거](#removing-files-from-a-repositorys-history)”를 참조하세요.

{% note %}

**참고:** 브라우저를 통해 리포지토리에 파일을 추가하는 경우 파일은 {% data variables.large_files.max_github_browser_size %}보다 클 수 없습니다. 자세한 내용은 “[리포지토리에 파일 추가](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)”를 참조하세요.

{% endnote %}

{% ifversion ghes %} 기본적으로 {% endif %}{% 데이터 variables.product.product_name %}은(는) {% data variables.large_files.max_github_size %}보다 큰 파일을 차단합니다. {% ifversion ghes %} 그러나 사이트 관리자는 {% 데이터 variables.location.product_location %}에 대해 다른 제한을 구성할 수 있습니다.  자세한 내용은 “[Git 푸시 제한 설정](/enterprise/admin/guides/installation/setting-git-push-limits)”을 참조하세요.{% endif %}

이 제한을 초과하는 파일을 추적하려면 {% data variables.large_files.product_name_long %}({% data variables.large_files.product_name_short %})을(를) 사용해야 합니다. 자세한 내용은 “[{% data variables.large_files.product_name_long %} 정보](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)”를 참조하세요.

리포지토리 내에 큰 파일을 배포해야 하는 경우 파일을 추적하는 대신 {% 데이터 variables.location.product_location %}에 릴리스를 만들 수 있습니다. 자세한 내용은 “[큰 이진 파일 배포](#distributing-large-binaries)”를 참조하세요.

Git은 대용량 SQL 파일을 처리하도록 설계되지 않았습니다. 대규모 데이터베이스를 다른 개발자와 공유하려면 [Dropbox](https://www.dropbox.com/)를 사용하는 것이 좋습니다.

{% ifversion fpt or ghec or ghae %}
### 리포지토리 크기 제한

리포지토리는 작게 유지되고 이상적으로는 1GB 미만이며 5GB 미만을 사용하는 것이 좋습니다. {% ifversion ghae %} {% 데이터 variables.product.product_name %}에 있는 리포지토리의 최대 크기는 100GB입니다. {% endif %} 리포지토리가 작을수록 복제 속도가 빨라지고 작업 및 유지 관리가 더 쉬워집니다. 리포지토리가 인프라에 지나치게 영향을 주는 경우 {% data variables.contact.github_support %}에서 정정 작업을 수행하라는 메일을 받을 수 있습니다. 우리는 특히 많은 협력자가 있는 대규모 프로젝트에서 유연하게 작업하려고 노력하며 가능한 한 해결책을 찾기 위해 귀하와 협력할 것입니다. 리포지토리의 크기와 전반적인 상태를 효과적으로 관리하여 리포지토리가 인프라에 영향을 주지 않도록 방지할 수 있습니다. [`github/git-sizer`](https://github.com/github/git-sizer) 리포지토리에서 리포지토리 분석을 위한 조언과 도구를 찾을 수 있습니다.

외부 종속성으로 인해 Git 리포지토리가 매우 커질 수 있습니다. 리포지토리에 외부 종속성이 채워지는 것을 방지하려면 패키지 관리자를 사용하는 것이 좋습니다. 공용 언어에 대한 인기 있는 패키지 관리자로는 [Bundler](http://bundler.io/), [Node의 패키지 관리자](http://npmjs.org/), [Maven](http://maven.apache.org/)이 있습니다. 이러한 패키지 관리자는 Git 리포지토리를 직접 사용할 수 있도록 지원하므로 미리 패키지된 원본이 필요하지 않습니다.

Git은 백업 도구로 사용하도록 설계되지 않았습니다. 그러나 [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/), [CrashPlan](https://www.crashplan.com/en-us/)과 같은 백업을 수행하도록 특별히 설계된 많은 솔루션이 있습니다.
{% endif %}

## 리포지토리의 기록에서 파일 제거

{% warning %}

**경고**: 이러한 절차는 컴퓨터의 리포지토리 및 {% 데이터 variables.location.product_location %}에서 파일을 영구적으로 제거합니다. 파일이 중요한 경우 리포지토리 외부의 디렉터리에 로컬 백업 복사본을 만듭니다.

{% endwarning %}

### 가장 최근에 푸시되지 않은 커밋에 추가된 파일 제거

파일이 가장 최근 커밋과 함께 추가되었으며 {% 데이터 variables.location.product_location %}에 푸시하지 않은 경우 파일을 삭제하고 커밋을 수정할 수 있습니다.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. 파일을 제거하려면 `git rm --cached`를 입력합니다.
  ```shell
  $ git rm --cached GIANT_FILE
  # Stage our giant file for removal, but leave it on disk
  ```
4. `--amend -CHEAD`를 사용하여 이 변경 내용을 커밋합니다.
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. {% 데이터 variables.location.product_location %}에 커밋 푸시:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### 이전 커밋에서 추가된 파일 제거

이전 커밋에서 파일을 추가한 경우 리포지토리의 기록에서 파일을 제거해야 합니다. 리포지토리의 기록에서 파일을 제거하려면 BFG Repo-Cleaner 또는 `git filter-branch` 명령을 사용할 수 있습니다. 자세한 내용은 “[리포지토리에서 중요한 데이터 제거](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)”를 참조하세요.

## 큰 이진 파일 배포

리포지토리 내에 큰 파일을 배포해야 하는 경우 {% 데이터 variables.location.product_location %}에 릴리스를 만들 수 있습니다. 릴리스를 사용하면 다른 사용자가 사용할 수 있도록 소프트웨어, 릴리스 정보, 이진 파일에 대한 링크를 패키지할 수 있습니다. 자세한 내용은 “[릴리스 정보](/github/administering-a-repository/about-releases)”를 참조하세요.

{% ifversion fpt or ghec %}

릴리스에서 이진 파일의 총 크기 또는 파일을 배달하는 데 사용되는 대역폭은 제한하지 않습니다. 그러나 각 개별 파일은 {% data variables.large_files.max_lfs_size %}보다 작아야 합니다.

{% endif %}

