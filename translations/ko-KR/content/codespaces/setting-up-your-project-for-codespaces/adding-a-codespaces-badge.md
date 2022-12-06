---
title: “GitHub Codespaces에서 열기” 배지 추가
shortTitle: Add a Codespaces badge
intro: 사용자가 클릭하여 codespace를 만들 수 있는 리포지토리의 Markdown 파일에 배지를 추가할 수 있습니다.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: c69a815501f5943a56d32af3e58cd7850a69588b
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158783'
---
## 개요

Markdown 파일에 “{% data variables.product.prodname_github_codespaces %}에서 열기” 배지를 추가하면 리포지토리에 대한 codespace를 쉽게 만들 수 있습니다.

![추가 정보 페이지의 Codespaces 배지 스크린샷](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

배지를 만들 때 배지가 만들 codespace에 대한 특정 구성 옵션을 선택할 수 있습니다.

사용자가 배지를 클릭하면 사용자가 미리 선택한 옵션으로 codespace 만들기를 위한 고급 옵션 페이지로 이동됩니다. 고급 옵션 페이지에 대한 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

고급 옵션 페이지에서 사용자는 필요한 경우 미리 선택된 설정을 변경한 다음 **codespace 만들기** 를 클릭할 수 있습니다.

## “{% data variables.product.prodname_github_codespaces %}에서 열기” 배지 만들기

{% data reusables.repositories.navigate-to-repo %}
1. 리포지토리 이름 아래에서 "분기" 드롭다운 메뉴를 사용하고 배지를 만들 분기를 선택합니다.

   ![분기 드롭다운 메뉴의 스크린샷](/assets/images/help/codespaces/branch-drop-down.png)

1. **{% octicon "code" aria-label="The code icon" %} 코드** 단추를 클릭한 다음 **Codespaces** 탭을 클릭합니다.

   ![새 codespace 단추의 스크린샷](/assets/images/help/codespaces/new-codespace-button.png)

1. **Codespaces** 탭의 오른쪽 위에 있는 줄임표(**...**)를 클릭한 다음 **옵션으로 새로** 만들기를 클릭합니다.

   ![“codespace 구성 및 만들기” 옵션의 스크린샷](/assets/images/help/codespaces/default-machine-type.png)

1. codespace를 만들기 위한 고급 옵션 페이지에서 각 필드에서 미리 선택하려는 값을 선택합니다.

   ![고급 옵션 페이지 스크린샷](/assets/images/help/codespaces/advanced-options.png)

1. 브라우저의 주소 표시줄에서 URL을 복사합니다.
1. 예를 들어 리포지토리 `README.md` 파일에 다음 Markdown을 추가합니다.

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   예를 들어:

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   위의 예제에서 `0000000`은 리포지토리의 참조 번호가 됩니다. URL의 다른 세부 정보는 고급 옵션 페이지의 필드에서 선택한 값에 따라 결정됩니다.
