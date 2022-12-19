---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145111439"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>{% data variables.product.prodname_ghe_server %} 3.0 이상에 대한 최소 요구 사항 정보

{% data variables.product.prodname_ghe_server %} 3.0 이상으로 업그레이드하기 전에 인스턴스에 대해 프로비저닝한 하드웨어 리소스를 검토합니다. {% data variables.product.prodname_ghe_server %} 3.0에는 {% data variables.product.prodname_actions %} 및 {% data variables.product.prodname_registry %}와 같은 새로운 기능이 도입되었으며 버전 2.22 이하보다 더 많은 리소스가 필요합니다. 자세한 내용은 [{% data variables.product.prodname_ghe_server %} 3.0 릴리스 정보](/enterprise-server@3.0/admin/release-notes)를 참조하세요.

{% data variables.product.prodname_ghe_server %} 3.0 이상에 대해 늘어난 요구 사항이 다음 표에 **굵게** 표시됩니다.

| 사용자 라이선스 | vCPU | 메모리 | 연결된 스토리지 | 루트 스토리지 |
| :- | -: | -: | -: | -: |
| 평가판, 데모 또는 10명의 라이트 사용자 | **4**<br/>_이전 버전에서는 2_ | **32GB**<br/>_이전 버전에서는 16GB_ | **150GB**<br/>_이전 버전에서는 100GB_ | 200GB |
| 10~3,000  | **8**<br/>_이전 버전에서는 4_ | **48GB**<br/>_이전 버전에서는 32GB_ | **300GB**<br/>_이전 버전에서는 250GB_ | 200GB |
| 3,000~5,000 | **12**<br/>_이전 버전에서는 8_ | 64GB | 500GB | 200GB |
| 5,000~8,000 | **16**<br/>_이전 버전에서는 12_ | 96GB | 750GB | 200GB |
| 8,000~10,000+ | **20**<br/>_이전 버전에서는 16_ | **160 GB**<br/>_이전 버전에서는 128GB_ | 1000GB | 200GB |

{% ifversion ghes %}

{% data variables.product.prodname_actions %}에 대한 하드웨어 요구 사항에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”을 참조하세요.

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
