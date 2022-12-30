---
title: 분기로 변경 내용 내보내기
intro: 이 문서에서는 Codespace 변경 내용을 분기로 내보내는 단계를 제공합니다.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159910'
---
## 분기로 변경 내용 내보내기

{% data variables.product.prodname_github_codespaces %}를 사용하는 동안 Codespace를 시작하지 않고 변경 내용을 분기로 내보낼 수 있습니다. 이는 [지출 한도](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)에 도달했거나 codespace에 액세스하는 일반적인 문제가 있는 경우에 유용할 수 있습니다.

codespace가 게시되지 않은 경우(템플릿에서 생성되고 {% data variables.product.product_name %}의 리포지토리와 연결되지 않은 경우 변경 내용을 분기로 내보낼 수는 없지만 codespace를 시작하지 않고 새 리포지토리에 codespace를 게시할 수 있습니다. 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom).

변경 내용을 분기로 내보내려면 다음을 수행합니다.

{% data reusables.codespaces.your-codespaces-procedure-step %} 또는 개별 리포지토리의 경우 **{% octicon "code" aria-label="The code icon" %} 코드** 메뉴를 클릭합니다.
1. 내보낼 codespace 오른쪽에 있는 줄임표( **...** )를 클릭합니다.
2. **{% octicon "git-branch" aria-label="The git branch icon" %} 분기로 변경 사항 내보내기** 를 선택합니다.

  ![분기로 변경 내용 내보내기](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. 팝오버에서 **분기 만들기** 를 선택합니다.
