---
ms.openlocfilehash: bd13eb5688fd7c67e9230170ea2b451852660943
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098129"
---
## 기능 기반 버전 관리

기능 기반 버전 관리를 사용하면 임의로 명명된 “기능”의 버전을 한 곳에서 정의하고 제어할 수 있습니다.

**참고**: 테스트에 사용되므로 `data/features/placeholder.yml`은 삭제하지 마세요.

## 작동 방식

이 디렉터리에서 사용하려는 기능 이름을 사용하여 새 YAML 파일을 추가합니다. `meow`라고 명명된 기능의 경우 `data/features/meow.yml`이 됩니다.

기능을 사용할 수 있는 버전의 짧은 이름과 함께 YML 파일에 `versions` 블록을 추가합니다. 예를 들면 다음과 같습니다.

```yaml
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.1'
  ghae: '*'
```

형식 및 허용되는 값은 [frontmatter 버전 속성](/content#versions)과 동일합니다.

### Liquid 조건부

이제 콘텐츠 파일에서 `{% ifversion meow %} ... {% endif %}`를 사용할 수 있습니다!

### Frontmatter

콘텐츠 파일의 frontmatter에서 기능을 사용할 수도 있습니다.

```yaml
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.1'
  feature: 'meow'
```

`feature:`는 지원되지 않으므로 여러 동시 버전을 지정하는 데 사용할 수 없습니다. 또는 필요한 버전 관리를 사용하여 새 기능 기반 버전 관리 파일을 만들 수 있습니다.

## 스키마 적용

기능 버전 관리의 유효성을 검사하기 위한 스키마는 [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js)에 있으며 [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js)에서 실행합니다.

## 기능 태그를 제거하는 스크립트

TBD!
