---
title: 파일 편집
intro: '파일 편집기를 사용하여 리포지토리의 {% data variables.product.product_name %}에서 직접 파일을 편집할 수 있습니다.'
redirect_from:
  - /articles/editing-files
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Edit files
ms.openlocfilehash: 515b773aaa9dd2a93d6c0b4b70adb3ef10afe082
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136563'
---
## 리포지토리에서 파일 편집

{% tip %}

**팁**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**참고:** {% data variables.product.product_name %}의 파일 편집기는 [CodeMirror](https://codemirror.net/)를 사용합니다.

{% endnote %}

1. 리포지토리에서 편집할 파일로 이동합니다.
{% data reusables.repositories.edit-file %}
3. **파일 편집** 탭에서 파일에 필요한 모든 내용을 변경합니다.
![파일의 새 콘텐츠](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 다른 사용자의 리포지토리에서 파일 편집

다른 사용자의 리포지토리에서 파일을 편집할 때 자동으로 [리포지토리를 포크](/articles/fork-a-repo)하고 [끌어오기 요청을 엽니다](/articles/creating-a-pull-request).

1. 다른 사용자의 리포지토리에서 편집할 파일이 포함된 폴더를 찾습니다. 편집할 파일의 이름을 클릭합니다.
2. 파일의 콘텐츠 위에서 {% octicon "pencil" aria-label="The edit icon" %}을(를) 클릭합니다. 이 시점에서 GitHub는 리포지토리를 포크합니다.
3. 파일에 필요한 내용을 변경합니다.
![파일의 새 콘텐츠](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
6. **파일 변경 제안** 을 클릭합니다.
![변경 내용 커밋 단추](/assets/images/help/repository/propose_file_change_button.png)
7. 끌어오기 요청의 제목과 설명을 입력합니다.
![끌어오기 요청 설명 페이지](/assets/images/help/pull_requests/pullrequest-description.png)
8. **끌어오기 요청 만들기** 를 클릭합니다.
![끌어오기 요청 단추](/assets/images/help/pull_requests/pullrequest-send.png)
