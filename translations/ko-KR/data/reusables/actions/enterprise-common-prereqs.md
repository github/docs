---
ms.openlocfilehash: cd22ce0370b3b6c0cab9756d64c14c2d32e89bcf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097991"
---
* {% data variables.product.prodname_actions %}에 대한 하드웨어 요구 사항을 검토합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”을 참조하세요.
* {% 데이터 variables.location.product_location %}의 도메인에 대해 TLS를 구성해야 합니다. 자세한 내용은 “[TLS 구성](/admin/configuration/configuring-tls)”을 참조하세요.

  {% note %}
  
  **참고:** {% data reusables.actions.enterprise-self-signed-cert %}

  {% endnote %}
* {% data reusables.actions.enterprise-http-proxy %}
