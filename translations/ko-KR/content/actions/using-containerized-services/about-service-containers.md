---
title: 서비스 컨테이너 정보
intro: '서비스 컨테이너를 사용하여 데이터베이스, 웹 서비스, 메모리 캐시 및 기타 도구를 워크플로에 연결할 수 있습니다.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
  - /actions/guides/about-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Containers
  - Docker
ms.openlocfilehash: 67bfb403bb18f7364e000170ce71f9387d4ada69
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145121124'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 서비스 컨테이너 정보

서비스 컨테이너는 워크플로에서 애플리케이션을 테스트하거나 운영하는 데 필요할 수 있는 서비스를 호스트하는 간단하고 이식 가능한 방법을 제공하는 Docker 컨테이너입니다. 예를 들어 워크플로는 데이터베이스 및 메모리 캐시에 액세스해야 하는 통합 테스트를 실행해야 할 수 있습니다.

워크플로의 각 작업에 대해 서비스 컨테이너를 구성할 수 있습니다. {% data variables.product.prodname_dotcom %}는 워크플로에 구성된 각 서비스에 대해 새 Docker 컨테이너를 만들고 작업이 완료되면 서비스 컨테이너를 삭제합니다. 작업의 단계는 동일한 작업의 일부인 모든 서비스 컨테이너와 통신할 수 있습니다. 그러나 복합 작업 내에서 서비스 컨테이너를 만들고 사용할 수는 없습니다. 

{% data reusables.actions.docker-container-os-support %}

## 서비스 컨테이너와 통신

실행기 컴퓨터 또는 Docker 컨테이너에서 직접 실행되도록 워크플로의 작업을 구성할 수 있습니다. 작업이 실행기 컴퓨터에서 직접 실행되는지 컨테이너에서 실행되는지에 따라 작업과 해당 서비스 컨테이너 간의 통신은 다릅니다.

### 컨테이너에서 작업 실행

컨테이너에서 작업을 실행할 때 {% data variables.product.prodname_dotcom %}는 Docker의 사용자 정의 브리지 네트워크를 사용하여 서비스 컨테이너를 작업에 연결합니다. 자세한 내용은 Docker 설명서의 “[브리지 네트워크 사용](https://docs.docker.com/network/bridge/)”을 참조하세요.

컨테이너에서 작업 및 서비스를 실행하면 네트워크 액세스가 간소화됩니다. 워크플로에서 구성한 레이블을 사용하여 서비스 컨테이너에 액세스할 수 있습니다. 서비스 컨테이너의 호스트 이름은 레이블 이름에 자동으로 매핑됩니다. 예를 들어 `redis`라는 레이블을 사용하여 서비스 컨테이너를 만드는 경우 서비스 컨테이너의 호스트 이름은 `redis`입니다.

서비스 컨테이너에 대한 포트를 구성할 필요가 없습니다. 기본적으로 동일한 Docker 네트워크의 일부인 모든 컨테이너는 모든 포트를 서로 노출하며 Docker 네트워크 외부에는 포트가 노출되지 않습니다.

### 실행기 컴퓨터에서 작업 실행

실행기 컴퓨터에서 직접 작업을 실행하는 경우 `localhost:<port>` 또는 `127.0.0.1:<port>`를 사용하여 서비스 컨테이너에 액세스할 수 있습니다. {% data variables.product.prodname_dotcom %}는 서비스 컨테이너에서 Docker 호스트로 통신할 수 있도록 컨테이너 네트워크를 구성합니다.

작업이 실행기 컴퓨터에서 직접 실행되는 경우 Docker 컨테이너에서 실행되는 서비스는 기본적으로 실행기에서 해당 포트를 작업에 노출하지 않습니다. 서비스 컨테이너의 포트를 Docker 호스트에 매핑해야 합니다. 자세한 내용은 “[Docker 호스트 및 서비스 컨테이너 포트 매핑](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)”을 참조하세요.

## 서비스 컨테이너 만들기

`services` 키워드를 사용하여 워크플로에서 작업의 일부인 서비스 컨테이너를 만들 수 있습니다. 자세한 내용은 [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices)를 참조하세요.

이 예제에서는 `container-job`이라는 작업에서 `redis`라는 서비스를 만듭니다. 이 예제의 Docker 호스트는 `node:16-bullseye` 컨테이너입니다.

{% raw %}
```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:16-bullseye

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
```
{% endraw %}

## Docker 호스트 및 서비스 컨테이너 포트 매핑

작업이 Docker 컨테이너에서 실행되는 경우 호스트 또는 서비스 컨테이너의 포트를 매핑할 필요가 없습니다. 작업이 실행기 컴퓨터에서 직접 실행되는 경우 필요한 서비스 컨테이너 포트를 호스트 실행기 컴퓨터의 포트에 매핑해야 합니다.

`ports` 키워드를 사용하여 서비스 컨테이너 포트를 Docker 호스트에 매핑할 수 있습니다. 자세한 내용은 [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices)를 참조하세요.

| `ports`의 값 |    설명 |
|------------------|--------------|
| `8080:80` |   컨테이너의 TCP 포트 80을 Docker 호스트의 포트 8080으로 매핑합니다. |
| `8080:80/udp` |   컨테이너의 UDP 포트 80을 Docker 호스트의 포트 8080으로 매핑합니다. |
| `8080/udp`    | 컨테이너에서 임의로 선택한 UDP 포트를 Docker 호스트의 UDP 포트 8080에 매핑합니다. |

`ports` 키워드를 사용하여 포트를 매핑할 때 {% data variables.product.prodname_dotcom %}는 `--publish` 명령을 사용하여 컨테이너의 포트를 Docker 호스트에 게시합니다. 자세한 내용은 Docker 설명서의 “[Docker 컨테이너 네트워킹](https://docs.docker.com/config/containers/container-networking/)”을 참조하세요.

컨테이너 포트가 아닌 Docker 호스트 포트를 지정하면 컨테이너 포트가 사용 중이 아닌 포트에 임의로 할당됩니다. {% data variables.product.prodname_dotcom %}는 서비스 컨테이너 컨텍스트에서 할당된 컨테이너 포트를 설정합니다. 예를 들어 `redis` 서비스 컨테이너의 경우 Docker 호스트 포트 5432를 구성한 경우 `job.services.redis.ports[5432]` 컨텍스트를 사용하여 해당 컨테이너 포트에 액세스할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts#job-context)”를 참조하세요.

### Redis 포트 매핑 예제

다음은 서비스 컨테이너 `redis` 포트 6379를 Docker 호스트 포트 6379에 매핑하는 예제입니다.

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

jobs:
  # Label of the container job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        #
        ports:
          # Opens tcp port 6379 on the host and service container
          - 6379:6379
```
{% endraw %}

## 추가 참고 자료

- “[Redis 서비스 컨테이너 만들기](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)”
- “[PostgreSQL 서비스 컨테이너 만들기](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)”
