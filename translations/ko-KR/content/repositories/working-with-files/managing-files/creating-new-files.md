---
title: 새 파일 만들기
intro: '쓰기 권한이 있는 리포지토리의 {% data variables.product.product_name %}에 직접 새 파일을 만들 수 있습니다.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136570'
---
{% data variables.product.product_name %}에 파일을 만들 때 다음을 고려합니다.

- 액세스할 수 없는 리포지토리에서 새 파일을 만들려고 하면 프로젝트를 개인 계정으로 포크하고 변경 내용을 커밋한 후 원래 리포지토리로 [끌어오기 요청](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)을 보낼 수 있습니다.
- 웹 인터페이스를 통해 만든 파일 이름에는 영숫자 문자와 하이픈(`-`)만 포함될 수 있습니다. 다른 문자를 사용하려면 [로컬로 파일을 만들고 커밋한 다음 {% data variables.product.product_name %}의 리포지토리로 푸시합니다](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. 리포지토리에서 파일을 만들 폴더로 이동합니다.
{% data reusables.files.add-file %}
4. 파일 이름 필드에 파일 이름 및 확장명을 입력합니다. 하위 디렉터리를 만들려면 디렉터리 구분 기호 `/`를 입력합니다.
![새 파일 이름](/assets/images/help/repository/new-file-name.png)
5. **새 파일 편집** 탭에서 파일에 내용을 추가합니다.
![새 파일의 내용](/assets/images/help/repository/new-file-content.png)
6. 새 내용을 검토하려면 **미리 보기** 를 클릭합니다.
![새 파일 미리 보기 단추](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
