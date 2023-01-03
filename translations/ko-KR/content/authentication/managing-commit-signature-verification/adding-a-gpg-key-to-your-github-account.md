---
title: GitHub 계정에 GPG 키 추가
intro: '{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 새(또는 기존) GPG 키를 사용하도록 계정을 구성하려면 계정에 대한 키도 필요합니다.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: 60c4e440c26332b25f9172b95a2bfb059e03e495
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098806'
---
## 계정에 GPG 키 추가 정보

{% data variables.product.product_name %}에서 계정과 연결된 커밋에 서명하려면 개인 계정에 퍼블릭 GPG 키를 추가할 수 있습니다. 키를 추가하기 전에 기존 키를 확인해야 합니다. 기존 키를 찾을 수 없는 경우 새 키를 생성하고 복사할 수 있습니다. 자세한 내용은 “[기존 GPG 키 확인](/articles/checking-for-existing-gpg-keys)” 및 “[새 GPG 키 생성](/articles/generating-a-new-gpg-key)”을 참조하세요.

{% data variables.product.product_name %}에서 계정에 여러 퍼블릭 키를 추가할 수 있습니다. 해당 프라이빗 키로 서명된 커밋은 확인됨으로 표시됩니다. 퍼블릭 키를 제거하면 해당 프라이빗 키로 서명된 모든 커밋이 더 이상 확인됨으로 표시되지 않습니다.

{% ifversion upload-expired-or-revoked-gpg-key %} 가능한 한 많은 커밋을 확인하려면 만료된 키와 해지된 키를 추가할 수 있습니다. 키가 다른 모든 확인 요구 사항을 충족하는 경우 해당 프라이빗 키 중 하나로 이전에 서명된 커밋이 확인된 것으로 표시되고 서명 키가 만료되거나 해지되었음을 나타냅니다.

![키가 만료된 확인된 커밋](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

서명을 확인할 때 {% data variables.product.product_name %}은 서명을 추출하고 키 ID를 구문 분석하려고 시도합니다. 그러면 키 ID가 {% data variables.product.product_name %}에 추가된 키와 일치합니다. 일치하는 GPG 키가 {% data variables.product.product_name %}에 추가될 때까지 서명을 확인할 수 없습니다.

## GPG 키 추가

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. **새 GPG 키** 클릭합니다.
   ![GPG 키 단추](/assets/images/help/settings/gpg-add-gpg-key.png)
4. “키” 필드에 [GPG 키를 생성](/articles/generating-a-new-gpg-key)할 때 복사한 GPG 키를 붙여넣습니다.
   ![키 필드](/assets/images/help/settings/gpg-key-paste.png)
5. **GPG 키 추가** 를 클릭합니다.
   ![키 추가 단추](/assets/images/help/settings/gpg-add-key.png)
6. 작업을 확인하려면 {% data variables.product.product_name %} 암호를 입력합니다.

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## 만료된 GPG 키 업데이트

서명을 확인할 때 {% data variables.product.product_name %}는 키가 해지되거나 만료되지 않았는지 확인합니다. 서명 키가 해지되거나 만료된 경우 {% data variables.product.product_name %}에서 서명을 확인할 수 없습니다.

키가 만료된 경우 [만료를 업데이트](https://www.gnupg.org/gph/en/manual.html#AEN329)하고, 새 키를 내보내고, {% data variables.product.product_name %}에서 계정에서 만료된 키를 삭제하고, 위에서 설명한 대로 새 키를 계정에 추가해야 합니다. 키가 다른 모든 확인 요구 사항을 충족하기만 하면, 이전 커밋과 태그는 확인된 것으로 표시됩니다.

키가 해지된 경우 기본 키 또는 해지되지 않은 다른 키를 사용하여 커밋에 서명합니다.

키가 유효하지 않으며 키 집합의 다른 유효한 키를 사용하지 않고 새 자격 증명 집합을 사용하여 새 GPG 키를 생성하는 경우 철회되었거나 만료된 키로 만든 커밋은 계속 확인되지 않은 것으로 표시됩니다. 또한 새 자격 증명은 이전 커밋과 태그에 다시 서명하거나 확인할 수 없습니다.
{% endif %}

## 추가 참고 자료

- “[기존 GPG 키 확인](/articles/checking-for-existing-gpg-keys)”
- “[새 GPG 키 생성](/articles/generating-a-new-gpg-key)”
- “[서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)”
- “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”
- “[GPG 키를 사용하여 커밋 및 태그 서명](/articles/signing-commits-and-tags-using-gpg)”
- “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)”
