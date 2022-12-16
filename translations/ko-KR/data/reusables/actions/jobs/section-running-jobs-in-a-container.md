---
ms.openlocfilehash: 59a9cc8c52f8e3d28b2b392c28ef6abcb52439a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147718207"
---
`jobs.<job_id>.container`를 사용하여 컨테이너를 아직 지정하지 않은 작업에서 모든 단계를 실행하는 컨테이너를 만듭니다. 스크립트 및 컨테이너 작업을 둘 다 사용하는 단계가 있는 경우 컨테이너 작업은 동일한 볼륨 탑재가 있는 동일한 네트워크에서 형제 컨테이너로 실행됩니다.

`container`를 설정하지 않으면 단계가 컨테이너에서 실행되도록 구성된 작업을 참조하지 않는 한, 모든 단계가 `runs-on`으로 지정된 호스트에서 직접 실행됩니다.

{% note %}

**참고:** 컨테이너 내의 `run` 단계에 대한 기본 셸은 `bash`가 아니라 `sh`입니다. 이 셸은 [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun) 또는 [`jobs.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell)로 재정의할 수 있습니다.

{% endnote %}

### 예: 컨테이너 내에서 작업 실행

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

컨테이너 이미지만 지정하면 `image` 키워드를 생략해도 됩니다.

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
