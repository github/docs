---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114412"
---
### 다른 운영 체제에서 실행

시작 워크플로는 {% data variables.product.prodname_dotcom %}-호스팅된 `ubuntu-latest` 실행기를 사용하여 Linux에서 실행되도록 작업을 구성합니다. `runs-on` 키를 변경하여 다른 운영 체제에서 작업을 실행할 수 있습니다. 예를 들어 {% data variables.product.prodname_dotcom %}-호스팅된 Windows 실행기를 사용할 수 있습니다.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

또는 {% data variables.product.prodname_dotcom %}-호스팅된 macOS 실행기에서 실행할 수 있습니다.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Docker 컨테이너에서 작업을 실행하거나 자체 인프라에서 실행되는 자체 호스팅 실행기를 제공할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)”을 참조하세요.
