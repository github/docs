---
title: 내 커밋이 잘못된 사용자에게 연결된 이유는 무엇인가요?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %}은 커밋 헤더의 메일 주소를 사용하여 커밋을 GitHub 사용자에게 연결합니다. 커밋이 다른 사용자와 연결되어 있거나 사용자와 전혀 연결되어 있지 않은 경우 로컬 Git 구성 설정을 변경하거나{% ifversion not ghae %} 계정 메일 설정에 메일 주소를 추가하거나 둘 다 수행해야 할 수 있습니다{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
ms.openlocfilehash: c9fe8ce23f0052fde754a584d093577b2f8b809c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099309'
---
{% tip %}

**참고**: 커밋이 다른 사용자에게 연결된 경우 해당 사용자가 내 리포지토리에 액세스할 수 있다는 의미는 아닙니다. 내가 소유한 리포지토리에 공동 작업자로 추가하거나 리포지토리에 액세스할 수 있는 팀에 추가하는 사용자만 내 리포지토리에 액세스할 수 있습니다.

{% endtip %}

## 커밋이 다른 사용자에게 연결됨

커밋이 다른 사용자에게 연결되었다면 이는 로컬 Git 구성 설정의 이메일 주소가 {% data variables.product.product_name %}의 해당 사용자 계정에 연결되어 있음을 의미합니다. 이 경우 향후 커밋을 연결하려면 로컬 Git 구성 설정의 이메일을{% ifversion ghae %} {% data variables.product.product_name %}의 계정과 연결된 주소로 변경할 수 있습니다. 이전 커밋은 연결되지 않습니다. 자세한 내용은 "[커밋 전자 메일 주소 설정"을 참조하세요](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git). {% else %}이(가) {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 계정의 계정에 새 전자 메일 주소를 추가하여 향후 커밋을 계정에 연결합니다.

1. 로컬 Git 구성에서 이메일 주소를 변경하려면 “[커밋 이메일 주소 설정](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”의 단계를 수행합니다. 여러 컴퓨터에서 작업하는 경우 각 컴퓨터에서 이 설정을 변경해야 합니다.
2. “[GitHub 계정에 이메일 주소 추가](/articles/adding-an-email-address-to-your-github-account)”의 단계를 수행하여 2단계의 이메일 주소를 계정 설정에 추가합니다.{% endif %}

이 시점부터는 커밋을 만들면 계정에 연결됩니다.

## 커밋이 사용자에게 연결되지 않음

커밋이 사용자에게 연결되지 않는 경우 커밋 작성자의 이름은 사용자 프로필에 대한 링크로 렌더링되지 않습니다.

해당 커밋에 사용되는 이메일 주소를 확인하고 커밋을 계정에 연결하려면 다음 단계를 수행합니다.

1. 커밋 메시지 링크를 클릭하여 커밋으로 이동합니다.
![커밋 메시지 링크](/assets/images/help/commits/commit-msg-link.png)
2. 커밋이 연결되지 않는 이유에 대한 메시지를 읽으려면 사용자 이름 오른쪽에 있는 파란색 {% octicon "question" aria-label="Question mark" %}를 마우스로 가리킵니다.
![커밋 가리키기 메시지](/assets/images/help/commits/commit-hover-msg.png)

  - **인식할 수 없는 작성자(이메일 주소 포함)** 이메일 주소와 함께 이 메시지가 표시되면 커밋을 작성하는 데 사용한 주소가 {% data variables.product.product_name %}의 계정에 연결되지 않은 것입니다. {% ifversion not ghae %}커밋을 연결하려면 [GitHub 메일 설정에 메일 주소를 추가합니다](/articles/adding-an-email-address-to-your-github-account).{% endif %}{% ifversion not ghae %} 메일 주소에 Gravatar가 연결되어 있으면 기본 회색 Octocat이 아닌 커밋 옆에 Gravatar가 표시됩니다.{% endif %}
  - **인식할 수 없는 작성자(이메일 주소 없음)** 이메일 주소 없이 이 메시지가 표시되면 {% data variables.product.product_name %}의 계정에 연결할 수 없는 일반 이메일 주소를 사용한 것입니다. {% ifversion not ghae %} 향후 커밋을 연결하려면 [Git에서 커밋 이메일 주소를 설정](/articles/setting-your-commit-email-address)한 다음, [GitHub 이메일 설정에 새 주소를 추가](/articles/adding-an-email-address-to-your-github-account)해야 합니다. 이전 커밋은 연결되지 않습니다.{% endif %}
  - **잘못된 이메일** 로컬 Git 구성 설정의 이메일 주소가 비어 있거나 이메일 주소로 형식이 지정되지 않았습니다.{% ifversion not ghae %} 향후 커밋을 연결하려면 [Git에서 커밋 이메일 주소를 설정](/articles/setting-your-commit-email-address)한 다음, [GitHub 이메일 설정에 새 주소를 추가](/articles/adding-an-email-address-to-your-github-account)해야 합니다. 이전 커밋은 연결되지 않습니다.{% endif %}

{% ifversion ghae %} 향후 커밋을 연결하려면 로컬 Git 구성 설정의 이메일을 계정과 연결된 주소로 변경할 수 있습니다. 이전 커밋은 연결되지 않습니다. 자세한 내용은 “[커밋 이메일 주소 설정](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”을 참조하세요.
{% endif %}

{% warning %}

로컬 Git 구성에 일반 이메일 주소 또는 다른 사용자의 계정에 이미 연결된 이메일 주소가 포함된 경우 이전 커밋이 계정에 연결되지 않습니다. Git을 사용하면 이전 커밋에 사용된 이메일 주소를 변경할 수 있지만, 특히 공유 리포지토리에서는 이를 사용하지 않는 것이 좋습니다.

{% endwarning %}

## 추가 참고 자료

* “[커밋 검색](/search-github/searching-on-github/searching-commits)”
