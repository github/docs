---
ms.openlocfilehash: 005667bae249af732a73e5afc53e7dcd7ae436fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088489"
---
{% ifversion ghes %}
### 2FA를 지원하는 인증 방법

| 인증 방법 | Description  | 2단계 인증 지원 |
|-----------------------|--------------|-----------------------------------|
| 기본 제공 | {% data variables.product.prodname_ghe_server %} 어플라이언스에 저장된 개인 계정에 대해 인증이 수행됩니다. | {% data variables.product.prodname_ghe_server %} 어플라이언스에서 지원 및 관리됩니다. 조직 관리자는 조직 멤버에 대해 2FA를 사용하도록 요구할 수 있습니다. |{% ifversion ghes %}
| ID 공급자를 사용한 기본 제공 인증| ID 공급자에 저장된 계정에 대해 인증이 수행됩니다. | ID 공급자에 따라 다릅니다.{% endif %}
| LDAP | 인증을 위한 회사 디렉터리 서비스와의 통합을 허용합니다. | {% data variables.product.prodname_ghe_server %} 어플라이언스에서 지원 및 관리됩니다. 조직 관리자는 조직 멤버에 대해 2FA를 사용하도록 요구할 수 있습니다. |
| SAML | 인증은 외부 ID 공급자에서 수행됩니다. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %} |
| CAS | Single Sign-On 서비스는 외부 서버에서 제공합니다. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
