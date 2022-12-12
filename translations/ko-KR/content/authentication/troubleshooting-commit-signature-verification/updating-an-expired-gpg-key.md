---
title: 만료된 GPG 키 업데이트
intro: 서명을 확인할 때 {% data variables.product.product_name %}는 키가 해지되거나 만료되지 않았는지 확인합니다. 서명 키가 해지되거나 만료된 경우 {% data variables.product.product_name %}에서 서명을 확인할 수 없습니다. 키가 해지된 경우 기본 키 또는 해지되지 않은 다른 키를 사용하여 커밋에 서명합니다.
redirect_from:
- /articles/updating-an-expired-gpg-key
- /github/authenticating-to-github/updating-an-expired-gpg-key
- /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Update expired GPG key
ms.openlocfilehash: daf4f225426ccb67d2fa536afbd9a1f6517e4913
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088258"
---
키가 만료된 경우 [만료를 업데이트](https://www.gnupg.org/gph/en/manual/c235.html#AEN328)하고, 새 키를 내보내고, GitHub 계정에서 만료된 키를 삭제하고, [GitHub에 새 키를 업로드](/articles/adding-a-new-gpg-key-to-your-github-account/)해야 합니다. 키가 다른 모든 확인 요구 사항을 충족하기만 하면, 이전 커밋과 태그는 확인된 것으로 표시됩니다.

키가 유효하지 않으며 키 집합의 다른 유효한 키를 사용하지 않고 새 자격 증명 집합을 사용하여 새 GPG 키를 생성하는 경우 철회되었거나 만료된 키로 만든 커밋은 계속 확인되지 않은 것으로 표시됩니다. 또한 새 자격 증명은 이전 커밋과 태그에 다시 서명하거나 확인할 수 없습니다.

## <a name="further-reading"></a>추가 참고 자료

- “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)”
