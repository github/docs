---
title: 리포지토리에서 파일 삭제
intro: '{% data variables.product.product_name %}의 리포지토리에서 개별 파일{% ifversion fpt or ghes or ghec %}  또는 전체 디렉터리{% endif %}를 삭제할 수 있습니다.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
ms.openlocfilehash: b3d939a7be6be37e875104f7a3c4df53f7a3b7ed
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136564'
---
## 파일{% ifversion fpt or ghes or ghec %} 및 디렉터리{% endif %} 삭제 정보

디렉터리{% endif %}의 모든 파일을 포함하여 리포지토리{% ifversion fpt or ghes or ghec %} 또는 전체 디렉터리에서 개별 파일을 삭제할 수 있습니다.

쓰기 권한이 없는 리포지토리에서 파일{% ifversion fpt or ghes or ghec %} 또는 디렉터리{% endif %}의 삭제를 시도하면 프로젝트를 개인 계정으로 포크하고 변경 내용을 커밋한 후 원래 리포지토리로 끌어오기 요청을 보낼 수 있습니다. 자세한 내용은 “[끌어오기 요청 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”를 참조하세요.

삭제한 파일{% ifversion fpt or ghes or ghec %} 또는 디렉터리{% endif %}에 중요한 데이터가 포함되어 있으면 리포지토리의 Git 기록에서 데이터를 계속 사용할 수 있습니다. {% data variables.product.product_name %}에서 파일을 완전히 제거하려면 리포지토리의 기록에서 파일을 제거해야 합니다. 자세한 내용은 “[리포지토리에서 중요한 데이터 제거](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)”를 참조하세요.

## 파일 삭제

1. 리포지토리에서 삭제할 파일로 이동합니다.
2. 파일 맨 위에서 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## 디렉터리 삭제

1. 리포지토리에서 삭제할 디렉터리로 이동합니다.
1. 오른쪽 상단 모서리에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **디렉터리 삭제** 를 클릭합니다.
  ![디렉터리 삭제 단추](/assets/images/help/repository/delete-directory-button.png)
1. 삭제할 파일을 검토합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% endif %}
