---
title: GitHub 계정에 새 GPG 키 추가
intro: '{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}에서 새로운 (또는 기존) GPG 키를 사용하도록 계정을 구성하려면 계정에 대한 키도 필요합니다.'
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088372"
---
{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}의 계정에 새 GPG 키를 추가하기 전에 다음을 수행해야 합니다.
- [기존 GPG 키 확인](/articles/checking-for-existing-gpg-keys)
- [새 GPG 키 생성 및 복사](/articles/generating-a-new-gpg-key)

GitHub 계정에 여러 퍼블릭 키를 추가할 수 있습니다. 해당 프라이빗 키로 서명된 커밋은 확인됨으로 표시됩니다. 퍼블릭 키를 제거하면 해당 프라이빗 키로 서명된 모든 커밋이 더 이상 확인됨으로 표시되지 않습니다.

{% data reusables.gpg.supported-gpg-key-algorithms %}

서명을 확인할 때 서명을 추출하고 해당 키 ID를 구문 분석하려고 시도합니다. 키 ID를 {% data variables.product.product_name %}에 업로드된 키와 일치합니다. {% data variables.product.product_name %}에 GPG 키를 업로드할 때까지 서명을 확인할 수 없습니다.

## <a name="adding-a-gpg-key"></a>GPG 키 추가

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. **새 GPG 키** 클릭합니다.
   ![GPG 키 단추](/assets/images/help/settings/gpg-add-gpg-key.png)
4. “키” 필드에 [GPG 키를 생성](/articles/generating-a-new-gpg-key)할 때 복사한 GPG 키를 붙여넣습니다.
   ![키 필드](/assets/images/help/settings/gpg-key-paste.png)
5. **GPG 키 추가** 를 클릭합니다.
   ![키 추가 단추](/assets/images/help/settings/gpg-add-key.png)
6. 작업을 확인하려면 {% data variables.product.product_name %} 암호를 입력합니다.

## <a name="further-reading"></a>추가 참고 자료

* “[기존 GPG 키 확인](/articles/checking-for-existing-gpg-keys)”
* “[새 GPG 키 생성](/articles/generating-a-new-gpg-key)”
* “[서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)”
* “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”
* “[GPG 키를 사용하여 커밋 및 태그 서명](/articles/signing-commits-and-tags-using-gpg)”
