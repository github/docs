---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069037"
---
# 변수

변수는 재사용 가능한 텍스트의 긴 문자열입니다.

이 디렉터리의 YAML 파일은 각각 여러 변수를 포함합니다.

각 YAML 파일 내의 경로, 파일 이름, 키에 따라 데이터 개체 에 어떤 경로가 있는지 결정됩니다.  

`data/variables/foo/bar.yml` 파일을 예로 들 수 있습니다.

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

해당 값은 다음과 같이 액세스할 수 있습니다.

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
