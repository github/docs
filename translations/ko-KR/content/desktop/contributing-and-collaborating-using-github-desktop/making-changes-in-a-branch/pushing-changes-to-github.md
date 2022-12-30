---
title: GitHub로 변경 내용 푸시
shortTitle: Pushing changes
intro: '프로젝트에 대한 변경 내용을 로컬로 커밋할 때 다른 사용자가 원격 리포지토리에서 액세스할 수 있도록 {% data variables.product.prodname_dotcom %}에 해당 변경 내용을 푸시할 수 있습니다.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  fpt: '*'
ms.openlocfilehash: b881fa5d9e66c4a63b8c648d87072037a8cba543
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090140'
---
## {% data variables.product.prodname_dotcom %}(으)로의 변경 내용 푸시 정보

변경 내용을 푸시할 때 로컬 리포지토리의 커밋된 변경 내용을 {% data variables.product.prodname_dotcom %}의 원격 리포지토리로 보냅니다. 프로젝트를 로컬로 변경하고 다른 사용자가 변경 내용에 액세스할 수 있도록 하려면 변경 내용을 {% data variables.product.prodname_dotcom %}(으)로 푸시해야 합니다.

변경 내용을 푸시하기 전에 원격 리포지토리에 추가된 모든 커밋을 포함하도록 로컬 분기를 업데이트해야 합니다. 로컬 분기에 없는 원격에서 누군가가 커밋한 경우 {% data variables.product.prodname_desktop %}은(는) 병합 충돌을 방지하기 위해 변경 내용을 푸시하기 전 새 커밋을 가져오라는 메시지를 표시합니다. 자세한 내용은 “[분기 동기화](/desktop/contributing-to-projects/syncing-your-branch)”를 참조하세요.

{% data reusables.desktop.protected-branches %}

## {% data variables.product.prodname_dotcom %}(으)로의 변경 내용 푸시

{% note %}

**참고:** {% data variables.product.prodname_desktop %}은(는) 특정 제한을 초과하는 경우 푸시를 거부합니다.

- 푸시에는 크기가 {% data variables.large_files.max_github_size %}을(를) 초과하는 큰 파일이 포함되어 있습니다.
- 푸시는 총 크기에서 {% data variables.large_files.max_file_size %}을(를) 초과합니다.

대용량 파일을 추적하도록 {% data variables.large_files.product_name_long %}을(를) 구성하는 경우 일반적으로 거부되는 대용량 파일을 푸시할 수 있습니다. 자세한 내용은 “[{% data variables.large_files.product_name_long %} 및 {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)”을(를) 참조하세요.

{% endnote %}

{% data reusables.desktop.push-origin %}
2. {% data variables.product.prodname_desktop %}에서 원격에서 새 커밋을 가져오라는 메시지가 표시되면 **가져오기** 를 클릭합니다.
  ![가져오기 단추](/assets/images/help/desktop/fetch-newer-commits.png)
3. 필요에 따라 **끌어오기 요청 만들기** 를 클릭하여 끌어오기 요청을 열고 변경 내용을 공동 작업합니다. 자세한 내용은 “[문제 또는 끌어오기 요청 만들기](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)” ![끌어오기 요청 만들기 단추](/assets/images/help/desktop/create-pull-request.png)를 참조하세요.

## 추가 참고 자료
- “[푸시](/github/getting-started-with-github/github-glossary/#push)” - {% data variables.product.prodname_dotcom %} 용어 설명
- “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)”
