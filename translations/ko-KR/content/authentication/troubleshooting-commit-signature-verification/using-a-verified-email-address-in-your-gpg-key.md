---
title: GPG 키에 확인된 메일 주소 사용
intro: '서명을 확인할 때 {% data variables.product.product_name %}는 커밋한 사람 또는 태그한 사람의 메일 주소가 GPG 키 ID의 메일 주소와 일치하는지 그리고 사용자 계정에서 확인된 메일 주소인지 확인합니다. 이를 통해 키가 사용자에게 속하고 사용자가 커밋 또는 태그를 만들었음을 보장합니다.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
ms.openlocfilehash: bb9f4fbbfdb70ba55870ab068a33c566791fbaf2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088249'
---
{% ifversion fpt or ghec %} GitHub 메일 주소를 확인해야 하는 경우 “[메일 주소 확인](/articles/verifying-your-email-address/)”을 참조하세요. {% endif %}GPG 키에 메일 주소를 추가하거나 업데이트해야 하는 경우 “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”을 참조하세요.

커밋과 태그에는 여러 메일 주소가 포함될 수 있습니다. 커밋의 경우 작성자(코드를 작성한 사람)와 커밋한 사람(트리에 커밋을 추가한 사람)이 있습니다. Git을 사용하여 커밋에 서명하는 경우 병합, cherry-pick 또는 일반 `git commit` 중인지에 관계없이 커밋한 사람 메일 주소는 사용자 메일 주소가 됩니다(작성자 메일 주소가 사용자 메일 주소가 아닌 경우 포함). 태그는 더 간단합니다. 태그 메일 주소는 항상 태그를 만든 사용자입니다.

커밋한 사람 또는 태거 메일 주소를 변경해야 하는 경우 “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address/)”을 참조하세요.

## 추가 참고 자료

- “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)”
