---
title: 리포지토리 복제
intro: 리포지토리의 미러를 포크하지 않고 유지하려면 특수 클론 명령을 실행한 다음 새 리포지토리에 미러 푸시할 수 있습니다.
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135488'
---
{% ifversion fpt or ghec %}

{% note %}

**참고:** 다른 버전 제어 시스템에 호스트된 프로젝트가 있는 경우 {% data variables.product.prodname_dotcom %} 가져오기 도구를 사용하여 프로젝트를 {% data variables.product.prodname_dotcom %}으로 자동으로 가져올 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %} 가져오기 정보](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)"를 참조하세요.

{% endnote %}

{% endif %}

원래 리포지토리를 리포지토리의 새 복사본 또는 _미러_ 로 푸시하려면 먼저 {% data variables.location.product_location %}에 [새 리포지토리를 만들어야](/articles/creating-a-new-repository) 합니다. 이러한 예제에서 `exampleuser/new-repository` 또는 `exampleuser/mirrored`는 미러입니다.

## 리포지토리 미러링

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 리포지토리의 베어 복제본을 만듭니다.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. 새 리포지토리에 미러 푸시합니다.
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. 이전에 만든 임시 로컬 리포지토리를 제거합니다.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## {% data variables.large_files.product_name_long %} 개체가 포함된 리포지토리 미러링

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 리포지토리의 베어 복제본을 만듭니다. 예제 사용자 이름을 리포지토리를 소유한 사람 또는 조직의 이름으로 바꾸고, 예제 리포지토리 이름을 복제하려는 리포지토리의 이름으로 바꿉니다.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. 방금 복제한 리포지토리로 이동합니다.
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. 리포지토리의 {% data variables.large_files.product_name_long %} 개체를 끌어옵니다.
  ```shell
  $ git lfs fetch --all
  ```
5. 새 리포지토리에 미러 푸시합니다.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. 리포지토리의 {% data variables.large_files.product_name_long %} 개체를 미러에 끌어옵니다.
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. 이전에 만든 임시 로컬 리포지토리를 제거합니다.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## 다른 위치에서 리포지토리 미러링

원래 위치에서 업데이트를 가져오는 것을 포함하여 다른 위치에 리포지토리를 미러링하려는 경우 미러를 복제하고 변경 내용을 주기적으로 푸시할 수 있습니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 리포지토리의 미러링된 베어 복제본을 만듭니다.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. 푸시 위치를 미러로 설정합니다.
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
베어 클론과 마찬가지로 미러링된 클론에는 모든 원격 분기와 태그가 포함되지만, 가져올 때마다 모든 로컬 참조를 덮어쓰므로 항상 원래 리포지토리와 동일합니다. 푸시에 대한 URL을 설정하면 미러로의 푸시가 간소화됩니다.

4. 미러를 업데이트하려면 업데이트를 가져오고 푸시합니다.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## 추가 참고 자료

* "[GitHub로 변경 내용 푸시](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[Git 대용량 파일 Storage 및 GitHub Desktop 정보](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* “[GitHub Importer 정보](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)”

{% endif %}
