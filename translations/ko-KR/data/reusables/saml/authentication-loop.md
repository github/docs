---
ms.openlocfilehash: 7e0f711826a1f1ea1bee8cec18bf5b4614815174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109131"
---
## 사용자는 인증을 위해 반복적으로 리디렉션됩니다.

사용자가 루프에서 반복적으로 SAML 인증 프롬프트로 리디렉션되는 경우 IdP 설정에서 SAML 세션 기간을 늘려야 할 수 있습니다. 

SAML 응답에서 보낸 `SessionNotOnOrAfter` 값은 사용자가 인증을 위해 IdP로 다시 리디렉션되는 시기를 결정합니다. SAML 세션 기간이 2시간 이하로 구성된 경우 {% data variables.product.prodname_dotcom_the_website %}은 만료되기 5분 전에 SAML 세션을 새로 고칩니다. 세션 기간이 5분 이하로 구성된 경우 사용자가 SAML 인증 루프에 갇히게 될 수 있습니다. 

이 문제를 해결하려면 최소 SAML 세션 기간을 4시간으로 구성하는 것이 좋습니다. 자세한 내용은 "[SAML 구성 참조](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#session-duration-and-timeout)"를 참조하세요.
