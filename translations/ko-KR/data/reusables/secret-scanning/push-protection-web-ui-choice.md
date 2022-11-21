---
ms.openlocfilehash: 7bb1603715c255f08ac0bfbe7ff2cdbfe99a3134
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109122"
---
웹 UI를 사용하여 푸시 보호가 사용하도록 설정된 비밀 검사를 사용하는 리포지토리 또는 조직에 지원되는 비밀을 커밋하려고 하면 {% data variables.product.prodname_dotcom %}이(가) 커밋을 차단합니다. 

페이지 상단에 비밀의 위치에 대한 정보가 있는 배너가 표시되며, 파일에도 비밀에 밑줄이 표시되어 쉽게 찾을 수 있습니다.

{% ifversion push-protection-custom-link-orgs %}

  ![비밀 검사 푸시 보호로 인해 차단된 웹 UI의 커밋을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![비밀 검사 푸시 보호로 인해 차단된 웹 UI의 커밋을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}
