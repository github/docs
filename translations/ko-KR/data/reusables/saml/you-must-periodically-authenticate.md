---
ms.openlocfilehash: b6491c615c79c405ccb5ad07fc6b5bebb5bd6a63
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148099205"
---
{% 데이터 variables.product.prodname_dotcom_the_website %}{% elsif ghae %}{% 데이터 variables.location.product_location %}{% endif %}에 대한 조직의 리소스를 인증하고 {% ifversion fpt 또는 ghec %}에 액세스하려면 SAML IdP를 정기적으로 인증해야 합니다. 로그인 기간은 IdP에 의해 지정되며 일반적으로 24시간입니다. 주기적인 로그인 요구 사항은 액세스 길이를 제한하며 계속하려면 자신을 다시 식별해야 합니다. {% ifversion fpt or ghec %}보안 설정에서 활성 SAML 세션을 보고 관리할 수 있습니다. 자세한 내용은 “[활성 SAML 세션 보기 및 관리](/articles/viewing-and-managing-your-active-saml-sessions)”를 참조하세요.{% endif %}
