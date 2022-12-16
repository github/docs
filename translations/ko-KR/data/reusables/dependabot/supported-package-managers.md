---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169242"
---
다음 표에서는 각 패키지 관리자에 대해 다음을 보여줍니다.
- *dependabot.yml* 파일에 사용할 YAML 값
- 패키지 관리자의 지원되는 버전
- 프라이빗 {% data variables.product.prodname_dotcom %} 리포지토리 또는 레지스트리의 종속성이 지원되는지 여부
- 벤더링된 종속성이 지원되는지 여부

패키지 관리자 | YAML 값      | 지원되는 버전 | 프라이빗 리포지토리 | 프라이빗 레지스트리 | 벤더링
---------------|------------------|------------------|:---:|:---:|:---:
번들러        | `bundler`        | v1, v2           | | **✓** | **✓** |
Cargo          | `cargo`          | v1               | **✓** | **✓** | |
작성기       | `composer`       | v1, v2           | **✓** | **✓** | |
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
git 하위모듈  | `gitsubmodule`   | 해당 없음(버전 없음) | **✓** | **✓** | |
GitHub 작업 | `github-actions` | 해당 없음(버전 없음) | **✓** | **✓** | |
Go 모듈     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | 해당 없음(버전 없음)<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | 해당 없음(버전 없음)<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6, v7, v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
술집            | `pub`            | v2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1, v2, v3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | v1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

**팁:** `pipenv` 및 `poetry` 같은 패키지 관리자의 경우 `pip` YAML 값을 사용해야 합니다. 예를 들어 `poetry`를 사용하여 Python 종속성을 관리하고 {% data variables.product.prodname_dependabot %}에서 새 버전의 종속성 매니페스트 파일을 모니터링하기를 원하는 경우 *dependabot.yml* 파일의 `package-ecosystem: "pip"`를 사용하세요.

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %} [1] {% data variables.product.prodname_dependabot %}는 Kubernetes 매니페스트에서 Docker 이미지 태그를 업데이트할 수 있습니다. Docker `package-ecosystem` 이미지 태그를 참조하는 Kubernetes 매니페스트를 포함하는 각 디렉터리에 대한 _dependabot.yml_ 파일의 Docker 요소에 항목을 추가합니다. Kubernetes 매니페스트는 Kubernetes 배포 YAML 파일 또는 Helm 차트일 수 있습니다. 에 대한 _dependabot.yml_ 파일을 구성하는 방법에 대한 `docker`자세한 내용은 "`package-ecosystem`[dependabot.yml 파일의 구성 옵션"에서](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem) ""를 참조하세요.

   {% data variables.product.prodname_dependabot %}은(는) 퍼블릭 및 프라이빗 Docker 레지스트리를 모두 지원합니다. 지원되는 레지스트리 목록은 "[dependabot.yml 파일에 대한 구성 옵션](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)"의 "`docker-registry`"를 참조하세요.
{% endif %}

[2] {% data variables.product.prodname_dependabot %}은(는) Gradle을 실행하지 않지만 , `build.gradle``build.gradle.kts` (Kotlin 프로젝트의 경우) 및 파일 이름에 있는 `dependencies` 선언을 통해 `apply` 포함된 파일에 대한 업데이트를 지원합니다. `apply`는 `apply to`, 재귀 또는 고급 구문(예: 속성에 의해 정의된 파일 이름인 `mapOf`와 함께 Kotlin의 `apply`)을 지원하지 않습니다.

[3] {% data variables.product.prodname_dependabot %}은(는) Maven을 실행하지 않지만 파일에 대한 업데이트를 지원합니다 `pom.xml` .

[4] {% data variables.product.prodname_dependabot %}은(는) NuGet CLI를 실행하지 않지만 버전 4.8까지 대부분의 기능을 지원합니다.

{% ifversion dependabot-PEP621-support %} [5] 파일에 대한 `requirements.txt` 업데이트를 지원하는 것 외에도 {% data variables.product.prodname_dependabot %}은 PEP 621 표준을 따르는 경우 파일에 대한 `pyproject.toml` 업데이트를 지원합니다. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} [6] {% ifversion ghes = 3.5 %}`pub` 지원이 현재 베타 버전입니다. 알려진 제한 사항은 변경될 수 있습니다. {% data variables.product.prodname_dependabot %}은
   - `pub`에 대한 Git 종속성 업데이트를 지원하지 않습니다. 
   - 이전 버전을 사용할 수 있더라도 업데이트를 시도하는 버전이 무시되면 업데이트를 수행하지 않습니다.

   `pub`에 대한 _dependabot.yml_ 파일 구성에 대한 자세한 내용은 “[베타 수준 에코시스템에 대한 지원 사용](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)”을 참조하세요.
   {%- else %}{% data variables.product.prodname_dependabot %}은 `pub`을 업데이트하려는 버전이 무시될 경우 이전 버전을 사용할 수 있더라도 업데이트를 수행하지 않습니다.{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] Dependabot은 v2 이상에 대한 공급업체 종속성을 지원합니다. {% endif %}

