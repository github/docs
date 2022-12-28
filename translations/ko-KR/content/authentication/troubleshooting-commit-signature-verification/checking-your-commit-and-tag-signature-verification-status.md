---
title: 커밋 및 태그 서명 확인 상태 확인
intro: '{% data variables.product.product_name %}에서 커밋 및 태그 서명의 확인 상태를 확인할 수 있습니다.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
ms.openlocfilehash: c43072b238d6064b8d6a8cc27bb1994f4806875f
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147653316'
---
## 커밋 서명 확인 상태 확인

1. {% data variables.product.product_name %}에서 끌어오기 요청으로 이동합니다.
{% data reusables.repositories.review-pr-commits %}
3. 커밋의 약식 커밋 해시 옆에 커밋 서명이 확인되었는지{% ifversion fpt or ghec %}, 부분적으로 확인되었는지{% endif %} 또는 확인되지 않았는지 여부를 보여 주는 상자가 있습니다.
![서명된 커밋](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. 커밋 서명에 대한 자세한 정보를 보려면 **확인됨**{% ifversion fpt or ghec %}, **부분적으로 확인됨**,{% endif %} 또는 **확인되지 않음** 을 클릭합니다.
  GPG 서명된 커밋은 사용된 키의 ID를 표시합니다.
  ![확인된 GPG 서명 커밋](/assets/images/help/commits/gpg-signed-commit_verified_details.png) {% ifversion ssh-commit-verification %} SSH 서명된 커밋은 사용된 공개 키의 서명을 표시합니다.
![확인된 SSH 서명 커밋](/assets/images/help/commits/ssh-signed-commit-verified-details.png) {% endif %}

## 태그 서명 확인 상태 확인

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. 릴리스 페이지의 상단에서 **태그** 를 클릭합니다.
![태그 페이지](/assets/images/help/releases/tags-list.png)
3. 태그 설명 옆에 태그 서명이 확인되었는지{% ifversion fpt or ghec %}, 부분적으로 확인되었는지,{% endif %} 또는 확인되지 않았는지 여부를 보여 주는 상자가 있습니다.
![확인된 태그 서명](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. 태그 서명에 대한 자세한 정보를 보려면 **확인됨**{% ifversion fpt or ghec %}, **부분적으로 확인됨**,{% endif %} 또는 **확인되지 않음** 을 클릭합니다. 
![확인된 서명된 태그](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## 추가 참고 자료

- “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)”
- “[커밋 서명](/articles/signing-commits)”
- “[태그 서명](/articles/signing-tags)”
