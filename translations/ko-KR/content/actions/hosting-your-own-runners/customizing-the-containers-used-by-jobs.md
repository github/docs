---
title: 작업에서 사용하는 컨테이너 사용자 지정
intro: 자체 호스팅 실행기가 작업에 대한 컨테이너를 호출하는 방법을 사용자 지정할 수 있습니다.
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881165'
---
{% note %}

**참고**: 이 기능은 현재 베타로 제공되며 변경될 수 있습니다.

{% endnote %}

## 컨테이너 사용자 지정 정보

{% data variables.product.prodname_actions %}를 사용하면 워크플로 파일에 `container:` 문을 사용하여 컨테이너 내에서 작업을 실행할 수 있습니다. 자세한 내용은 "[컨테이너에서 작업 실행](/actions/using-jobs/running-jobs-in-a-container)"을 참조하세요. 컨테이너 기반 작업을 처리하기 위해 자체 호스팅 실행기는 각 작업에 대한 컨테이너를 만듭니다.

{% data variables.product.prodname_actions %}는 자체 호스팅 실행기에서 컨테이너를 만드는 방법을 사용자 지정할 수 있는 명령을 지원합니다. 예를 들어 이러한 명령을 사용하여 Kubernetes 또는 Podman을 통해 컨테이너를 관리하고 컨테이너를 호출하는 데 사용되는 `docker run` 또는 `docker create` 명령을 사용자 지정할 수도 있습니다. 사용자 지정 명령은 실행기에서 특정 환경 변수를 설정할 때 자동으로 트리거되는 스크립트에 의해 실행됩니다. 자세한 내용은 아래의 "[사용자 지정 스크립트 트리거](#triggering-the-customization-script)"를 참조하세요.

이 사용자 지정은 Linux 기반 자체 호스팅 실행기에서만 사용할 수 있으며 루트 사용자 액세스는 필요하지 않습니다.

## 컨테이너 사용자 지정 명령

{% data variables.product.prodname_actions %}에는 컨테이너 사용자 지정을 위한 다음 명령이 포함되어 있습니다.

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job): 작업이 시작될 때 호출됩니다.
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): 작업이 종료될 때 호출됩니다.
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): 작업의 각 컨테이너 작업에 대해 한 번씩 호출됩니다.
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): 컨테이너 작업이 아닌 모든 단계를 실행합니다.

이러한 사용자 지정 명령은 각각 자체 JSON 파일에 정의되어야 합니다. 파일 이름은 확장명이 `.json`인 명령 이름과 일치해야 합니다. 예를 들어 `prepare_job` 명령은 `prepare_job.json`에 정의되어 있습니다. 그런 다음 이러한 JSON 파일은 자체 호스팅 실행기에서 주 `index.js` 스크립트의 일부로 함께 실행됩니다. 이 프로세스는 "[사용자 지정 스크립트 생성](#generating-the-customization-script)"에서 자세히 설명합니다.

이러한 명령에는 아래에 자세히 설명된 구성 인수도 포함됩니다.

### `prepare_job`

작업이 시작될 때 `prepare_job` 명령이 호출됩니다. {% data variables.product.prodname_actions %}는 작업에 있는 모든 작업 컨테이너 또는 서비스 컨테이너를 전달합니다. 이 명령은 작업에 서비스 컨테이너 또는 작업 컨테이너가 있는 경우 호출됩니다. 

{% data variables.product.prodname_actions %}는 `prepare_job` 명령에서 다음 작업을 수행한다고 가정합니다.

- 필요한 경우 이전 작업에서 항목을 정리합니다.
- 필요한 경우 네트워크를 만듭니다.
- 작업 및 서비스 컨테이너를 끌어옵니다.
- 작업 컨테이너를 시작합니다.
- 서비스 컨테이너를 시작합니다.
- {% data variables.product.prodname_actions %}에 필요한 모든 정보를 응답 파일에 씁니다.
  - 필수 사항: 컨테이너가 `alpine` Linux 컨테이너인지 여부를 나타냅니다(`isAlpine` 부울 사용). 
  - 선택 사항: 작업 컨텍스트에서 설정하려는 모든 컨텍스트 필드. 설정하지 않으면 사용자가 필드를 사용할 수 없습니다. 자세한 내용은 “[`job`컨텍스트](/actions/learn-github-actions/contexts#job-context)”를 참조하세요.
- 상태 검사가 성공하고 작업/서비스 컨테이너가 시작되면 `0`을 반환합니다.

#### 인수

- `jobContainer`: **선택 사항**. 지정된 작업 컨테이너에 대한 정보를 포함하는 개체입니다.
  - `image`: **필수 사항**. Docker 이미지를 포함하는 문자열입니다.
  - `workingDirectory`: **필수 사항**. 작업 디렉터리의 절대 경로를 포함하는 문자열입니다.
  - `createOptions`: **선택 사항**. YAML에 지정된 선택적 _만들기_ 옵션입니다. 자세한 내용은 "[예제: 컨테이너 내에서 작업 실행](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)"을 참조하세요.
  - `environmentVariables`: **선택 사항**. 주요 환경 변수의 맵을 설정합니다.
  - `userMountVolumes`: **선택 사항**. YAML에 설정된 사용자 탑재 볼륨의 배열입니다. 자세한 내용은 "[예제: 컨테이너 내에서 작업 실행](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)"을 참조하세요.
    - `sourceVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 원본 경로입니다.
    - `targetVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 대상 경로입니다.
    - `readOnly`: **필수 사항**. 탑재가 읽기 전용이어야 하는지 여부를 결정합니다.
  - `systemMountVolumes`: **필수 사항**. 컨테이너에 탑재할 탑재의 배열입니다(위와 동일한 필드).
    - `sourceVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 원본 경로입니다.
    - `targetVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 대상 경로입니다.
    - `readOnly`: **필수 사항**. 탑재가 읽기 전용이어야 하는지 여부를 결정합니다.
  - `registry` **선택 사항**. 프라이빗 컨테이너 레지스트리에 대한 Docker 레지스트리 자격 증명입니다.
    - `username`: **선택 사항**. 레지스트리 계정의 사용자 이름입니다.
    - `password`: **선택 사항**. 레지스트리 계정의 암호입니다.
    - `serverUrl`: **선택 사항**. 레지스트리 URL입니다.
  - `portMappings`: **선택 사항**. 컨테이너에 매핑할 _source:target_ 포트의 키 값 해시입니다.
- `services`: **선택 사항**. 스핀업할 서비스 컨테이너의 배열입니다.
  - `contextName`: **필수 사항**. 작업 컨텍스트에 있는 서비스의 이름입니다.
  - `image`: **필수 사항**. Docker 이미지를 포함하는 문자열입니다.
  - `createOptions`: **선택 사항**. YAML에 지정된 선택적 _만들기_ 옵션입니다. 자세한 내용은 "[예제: 컨테이너 내에서 작업 실행](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)"을 참조하세요.
  - `environmentVariables`: **선택 사항**. 주요 환경 변수의 맵을 설정합니다.
  - `userMountVolumes`: **선택 사항**. 컨테이너에 탑재할 탑재의 배열입니다(위와 동일한 필드).
    - `sourceVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 원본 경로입니다.
    - `targetVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 대상 경로입니다.
    - `readOnly`: **필수 사항**. 탑재가 읽기 전용이어야 하는지 여부를 결정합니다.
  - `registry` **선택 사항**. 프라이빗 컨테이너 레지스트리에 대한 Docker 레지스트리 자격 증명입니다.
    - `username`: **선택 사항**. 레지스트리 계정의 사용자 이름입니다.
    - `password`: **선택 사항**. 레지스트리 계정의 암호입니다.
    - `serverUrl`: **선택 사항**. 레지스트리 URL입니다.
  - `portMappings`: **선택 사항**. 컨테이너에 매핑할 _source:target_ 포트의 키 값 해시입니다.

#### 예제 입력

```json{:copy}
{
  "command": "prepare_job",
  "responseFile": "/users/octocat/runner/_work/{guid}.json",
  "state": {},
  "args": {
    "jobContainer": {
      "image": "node:14.16",
      "workingDirectory": "/__w/octocat-test2/octocat-test2",
      "createOptions": "--cpus 1",
      "environmentVariables": {
        "NODE_ENV": "development"
      },
      "userMountVolumes": [
        {
          "sourceVolumePath": "my_docker_volume",
          "targetVolumePath": "/volume_mount",
          "readOnly": false
        }
      ],
      "systemMountVolumes": [
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
          "targetVolumePath": "/__w",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
          "targetVolumePath": "/__e",
          "readOnly": true
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
          "targetVolumePath": "/__w/_temp",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
          "targetVolumePath": "/__w/_actions",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
          "targetVolumePath": "/__w/_tool",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
          "targetVolumePath": "/github/home",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
          "targetVolumePath": "/github/workflow",
          "readOnly": false
        }
      ],
      "registry": {
        "username": "octocat",
        "password": "examplePassword",
        "serverUrl": "https://index.docker.io/v1"
      },
      "portMappings": { "80": "801" }
    },
    "services": [
      {
        "contextName": "redis",
        "image": "redis",
        "createOptions": "--cpus 1",
        "environmentVariables": {},
        "userMountVolumes": [],
        "portMappings": { "80": "801" },
        "registry": {
          "username": "octocat",
          "password": "examplePassword",
          "serverUrl": "https://index.docker.io/v1"
        }
      }
    ]
  }
}
```

#### 예제 출력

이 예제 출력은 위의 입력에 정의된 `responseFile`의 내용입니다.

```json{:copy}
{
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "context": {
    "container": {
      "id": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
      "network": "example_network_53269bd575972817b43f7733536b200c"
    },
    "services": {
      "redis": {
        "id": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105",
        "ports": {
          "8080": "8080"
        },
        "network": "example_network_53269bd575972817b43f7733536b200c"
      }
    },
    "isAlpine": true
  }
}
```

### `cleanup_job`

작업이 종료될 때 `cleanup_job` 명령이 호출됩니다. {% data variables.product.prodname_actions %}는 `cleanup_job` 명령에서 다음 작업을 수행한다고 가정합니다.

- 실행 중인 서비스 또는 작업 컨테이너(또는 동등한 Pod)를 중지합니다.
- 네트워크를 중지합니다(있는 경우).
- 작업 또는 서비스 컨테이너(또는 동등한 Pod)를 모두 삭제합니다.
- 네트워크를 삭제합니다(있는 경우).
- 작업에 대해 만들어진 다른 모든 항목을 정리합니다.

#### 인수

`cleanup_job`에 대한 인수는 제공되지 않습니다.

#### 예제 입력

```json{:copy}
{
  "command": "cleanup_job",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {}
}
```

#### 예제 출력

`cleanup_job`에 대한 출력은 필요하지 않습니다.

### `run_container_step`

`run_container_step` 명령은 작업의 각 컨테이너 작업에 대해 한 번씩 호출됩니다. {% data variables.product.prodname_actions %}는 `run_container_step` 명령에서 다음 작업을 수행한다고 가정합니다.

- 필요한 컨테이너를 끌어오거나 빌드합니다(불가능할 경우 실패함).
- 컨테이너 작업을 실행하고 컨테이너의 종료 코드를 반환합니다.
- 모든 단계 로그 출력을 stdout 및 stderr로 스트리밍합니다.
- 실행 후 컨테이너를 정리합니다.

#### 인수

- `image`: **선택 사항**. Docker 이미지를 포함하는 문자열입니다. 그렇지 않으면 dockerfile을 제공해야 합니다.
- `dockerfile`: **선택 사항**. Dockerfile에 대한 경로를 포함하는 문자열입니다. 그렇지 않으면 이미지를 제공해야 합니다.
- `entryPointArgs`: **선택 사항**. 진입점 인수를 포함하는 목록입니다.
- `entryPoint`: **선택 사항**. 기본 이미지 진입점을 덮어써야 하는 경우 사용할 컨테이너 진입점입니다.
- `workingDirectory`: **필수 사항**. 작업 디렉터리의 절대 경로를 포함하는 문자열입니다.
- `createOptions`: **선택 사항**. YAML에 지정된 선택적 _만들기_ 옵션입니다. 자세한 내용은 "[예제: 컨테이너 내에서 작업 실행](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)"을 참조하세요.
- `environmentVariables`: **선택 사항**. 주요 환경 변수의 맵을 설정합니다.
- `prependPath`: **선택 사항**. `$PATH` 변수 앞에 추가할 추가 경로의 배열입니다.
- `userMountVolumes`: **선택 사항**. YAML에 설정된 사용자 탑재 볼륨의 배열입니다. 자세한 내용은 "[예제: 컨테이너 내에서 작업 실행](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)"을 참조하세요.
  - `sourceVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 원본 경로입니다.
  - `targetVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 대상 경로입니다.
  - `readOnly`: **필수 사항**. 탑재가 읽기 전용이어야 하는지 여부를 결정합니다.
- `systemMountVolumes`: **필수 사항**. 위와 동일한 필드를 사용하여 컨테이너에 탑재할 탑재 배열입니다.
  - `sourceVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 원본 경로입니다.
  - `targetVolumePath`: **필수 사항**. Docker 컨테이너에 탑재될 볼륨의 대상 경로입니다.
  - `readOnly`: **필수 사항**. 탑재가 읽기 전용이어야 하는지 여부를 결정합니다.
- `registry` **선택 사항**. 프라이빗 컨테이너 레지스트리에 대한 Docker 레지스트리 자격 증명입니다.
  - `username`: **선택 사항**. 레지스트리 계정의 사용자 이름입니다.
  - `password`: **선택 사항**. 레지스트리 계정의 암호입니다.
  - `serverUrl`: **선택 사항**. 레지스트리 URL입니다.
- `portMappings`: **선택 사항**. 컨테이너에 매핑할 _source:target_ 포트의 키 값 해시입니다.

#### 이미지에 대한 예제 입력

Docker 이미지를 사용하는 경우 `"image":` 매개 변수에 이미지 이름을 지정할 수 있습니다.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": "node:14.16",
    "dockerfile": null,
    "entryPointArgs": ["-f", "/dev/null"],
    "entryPoint": "tail",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Dockerfile에 대한 예제 입력

컨테이너가 Dockerfile에 의해 정의된 경우 이 예제에서는 `"dockerfile":` 매개 변수를 사용하여 입력에 `Dockerfile` 경로를 지정하는 방법을 보여 줍니다.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "services": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": null,
    "dockerfile": "/__w/_actions/foo/dockerfile",
    "entryPointArgs": ["hello world"],
    "entryPoint": "echo",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### 예제 출력

`run_container_step`에 대한 출력은 필요하지 않습니다.

### `run_script_step`

{% data variables.product.prodname_actions %}는 사용자가 다음 작업을 수행한다고 가정합니다.

- 작업 컨테이너 내에서 제공된 스크립트를 호출하고 종료 코드를 반환합니다.
- 모든 단계 로그 출력을 stdout 및 stderr로 스트리밍합니다.

#### 인수

- `entryPointArgs`: **선택 사항**. 진입점 인수를 포함하는 목록입니다.
- `entryPoint`: **선택 사항**. 기본 이미지 진입점을 덮어써야 하는 경우 사용할 컨테이너 진입점입니다.
- `prependPath`: **선택 사항**. `$PATH` 변수 앞에 추가할 추가 경로의 배열입니다.
- `workingDirectory`: **필수 사항**. 작업 디렉터리의 절대 경로를 포함하는 문자열입니다.
- `environmentVariables`: **선택 사항**. 주요 환경 변수의 맵을 설정합니다.

#### 예제 입력

```json{:copy}
{
  "command": "run_script_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "entryPointArgs": ["-e", "/runner/temp/example.sh"],
    "entryPoint": "bash",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "workingDirectory": "/__w/octocat-test2/octocat-test2"
  }
}
```

#### 예제 출력

`run_script_step`에 대한 출력은 필요하지 않습니다.

## 사용자 지정 스크립트 생성

{% data variables.product.prodname_dotcom %}는 Docker 및 Kubernetes에 대한 사용자 지정 스크립트를 생성하는 방법을 보여 주는 예제 리포지토리를 만들었습니다. 

{% note %}

**참고:** 결과 스크립트는 테스트 목적으로 사용할 수 있으며 사용자는 해당 스크립트가 요구 사항에 적합한지 확인해야 합니다.

{% endnote %}

1. [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) 리포지토리를 자체 호스팅 실행기에 복제합니다.

1. `examples/` 디렉터리에는 각각 고유한 JSON 파일이 있는 기존 사용자 지정 명령이 일부 포함되어 있습니다. 이러한 예제를 검토하고 사용자 지정 명령의 시작점으로 사용할 수 있습니다.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. npm 패키지를 빌드합니다. 다음 명령은 `packages/docker/dist` 및 `packages/k8s/dist` 내부에서 `index.js` 파일을 생성합니다.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

`index.js`가 {% data variables.product.prodname_actions %}에 의해 트리거되면 JSON 파일에 정의된 사용자 지정 명령을 실행합니다. `index.js`를 트리거하려면 다음 섹션에 설명된 대로 `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 환경 변수를 추가해야 합니다.

## 사용자 지정 스크립트 트리거

사용자 지정 스크립트를 실행기에 배치해야 하지만 자체 호스팅 실행기 애플리케이션 디렉터리에 저장하면 안 됩니다. 스크립트는 실행기 서비스를 실행하는 서비스 계정의 보안 컨텍스트에서 실행됩니다.

{% note %}

**참고**: 트리거된 스크립트는 동기적으로 처리되므로 실행되는 동안 작업 실행을 차단합니다.

{% endnote %}

실행기에 스크립트의 절대 경로를 포함하는 다음 환경 변수가 있는 경우 스크립트가 자동으로 실행됩니다.

- `ACTIONS_RUNNER_CONTAINER_HOOK`: 작업이 실행기에 할당된 경우 작업 실행이 시작되기 전에 이 환경 변수에 정의된 스크립트가 트리거됩니다.

이 환경 변수를 설정하기 위해 운영 체제에 추가하거나, 자체 호스팅 실행기 애플리케이션 디렉터리 내의 `.env` 파일에 추가할 수 있습니다. 예를 들어 다음 `.env` 항목은 각 컨테이너 기반 작업이 실행되기 전에 실행기가 `/Users/octocat/runner/index.js`에서 스크립트를 자동으로 실행하도록 합니다.

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

작업이 항상 컨테이너 내부에서 실행되고 이후에 항상 컨테이너 사용자 지정을 적용하도록 하려면 자체 호스팅 실행기에서 `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 변수를 `true`로 설정할 수 있습니다. 이렇게 하면 작업 컨테이너를 지정하지 않는 작업이 실패합니다.

## 문제 해결

### 시간 제한 설정 없음

현재 `ACTIONS_RUNNER_CONTAINER_HOOK`에서 실행하는 스크립트에 사용할 수 있는 시간 제한 설정이 없습니다. 따라서 스크립트에 시간 제한 처리를 추가하는 것이 좋습니다.

### 워크플로 실행 로그 검토

스크립트가 실행되고 있는지 확인하기 위해 해당 작업에 대한 로그를 검토할 수 있습니다. 로그를 확인하는 방법에 대한 자세한 내용은 “[로그를 보고 오류 진단](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”을 참조하세요.
