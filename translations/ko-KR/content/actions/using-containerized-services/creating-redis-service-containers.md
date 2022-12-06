---
title: Redis 서비스 컨테이너 만들기
shortTitle: Create Redis service containers
intro: 서비스 컨테이너를 사용하여 워크플로에서 Redis 클라이언트를 만들 수 있습니다. 이 가이드에서는 컨테이너 또는 실행기 컴퓨터에서 직접 실행되는 작업에 대한 Redis 서비스를 만드는 예제를 보여 줍니다.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
  - /actions/configuring-and-managing-workflows/creating-redis-service-containers
  - /actions/guides/creating-redis-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Containers
  - Docker
ms.openlocfilehash: 990e84cb4e25ec1334c63a83d827a8d96c0175eb
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009578'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Docker Hub `redis` 이미지를 사용하여 서비스 컨테이너를 구성하는 워크플로 예제를 보여 줍니다. 워크플로는 스크립트를 실행하여 Redis 클라이언트를 만들고 클라이언트를 데이터로 채웁니다. 워크플로가 Redis 클라이언트를 만들고 채우는지 테스트하기 위해 스크립트는 클라이언트의 데이터를 콘솔에 출력합니다.

{% data reusables.actions.docker-container-os-support %}

## 필수 조건

{% data reusables.actions.service-container-prereqs %}

YAML, {% data variables.product.prodname_actions %}의 구문 및 Redis에 대한 기본적인 이해가 도움이 될 수도 있습니다. 자세한 내용은 다음을 참조하세요.

- “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”
- Redis 설명서의 “[Redis 시작](https://redislabs.com/get-started-with-redis/)”

## 컨테이너에서 작업 실행

{% data reusables.actions.container-jobs-intro %}

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:10.18-jessie

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: redis
          # The default Redis port
          REDIS_PORT: 6379
```

### 컨테이너 작업 구성

{% data reusables.actions.service-container-host %}

{% data reusables.actions.redis-label-description %}

```yaml{:copy}
jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:10.18-jessie

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

### 단계 구성

{% data reusables.actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: redis
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

Redis 서비스의 호스트 이름은 워크플로에서 구성한 레이블(이 경우 `redis`)입니다. 동일한 사용자 정의 브리지 네트워크의 Docker 컨테이너는 기본적으로 모든 포트를 열기 때문에 기본 Redis 포트 6379의 서비스 컨테이너에 액세스할 수 있습니다.

## 실행기 컴퓨터에서 직접 작업 실행

실행기 컴퓨터에서 직접 작업을 실행하는 경우 서비스 컨테이너의 포트를 Docker 호스트의 포트에 매핑해야 합니다. `localhost` 및 Docker 호스트 포트 번호를 사용하여 Docker 호스트에서 서비스 컨테이너에 액세스할 수 있습니다.

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: Redis runner example
on: push

jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create
        # a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: localhost
          # The default Redis port
          REDIS_PORT: 6379
```

### 실행기 작업 구성

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.redis-label-description %}

워크플로는 Redis 서비스 컨테이너의 포트 6379를 Docker 호스트에 매핑합니다. `ports` 키워드에 대한 자세한 내용은 “[서비스 컨테이너 정보](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)”를 참조하세요.

```yaml{:copy}
jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379
```

### 단계 구성

{% data reusables.actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: localhost
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

{% data reusables.actions.service-container-localhost %}

## Redis 서비스 컨테이너 테스트

Redis 클라이언트를 만들고 클라이언트를 일부 자리 표시자 데이터로 채우는 다음 스크립트를 사용하여 워크플로를 테스트할 수 있습니다. 그런 다음, 스크립트는 Redis 테이블에 저장된 값을 터미널에 출력합니다. 스크립트는 원하는 언어를 사용할 수 있지만 이 예제에서는 Node.js 및 `redis` npm 모듈을 사용합니다. 자세한 내용은 [npm redis 모듈](https://www.npmjs.com/package/redis)을 참조하세요.

워크플로에 필요한 Redis 작업을 포함하도록 *client.js* 를 수정할 수 있습니다. 이 예제에서 스크립트는 Redis 클라이언트 인스턴스를 만들고 자리 표시자 데이터를 추가한 다음 데이터를 검색합니다.

{% data reusables.actions.service-container-add-script %}

```javascript{:copy}
const redis = require("redis");

// Creates a new Redis client
// If REDIS_HOST is not set, the default host is localhost
// If REDIS_PORT is not set, the default port is 6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Sets the key "octocat" to a value of "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Octopus"
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Dinosaur and Octopus"
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Robot"
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// Gets all fields in "species" key

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
```

스크립트는 `createClient` 메서드를 사용하여 새 Redis 클라이언트를 만듭니다. 이 메서드는 `host` 및 `port` 매개 변수를 허용합니다. 스크립트는 `REDIS_HOST` 및 `REDIS_PORT` 환경 변수를 사용하여 클라이언트의 IP 주소 및 포트를 설정합니다. `host` 및 `port`가 정의되지 않은 경우 기본 호스트는 `localhost`이고 기본 포트는 6379입니다.

스크립트는 `set` 및 `hset` 메서드를 사용하여 일부 키, 필드 및 값으로 데이터베이스를 채웁다. Redis 클라이언트에 데이터가 포함되어 있는지 확인하기 위해 스크립트는 테이블의 내용을 콘솔 로그에 출력합니다.

이 워크플로를 실행할 때 Redis 클라이언트를 만들고 데이터를 추가했는지 확인하는 “Redis에 연결” 단계에서 다음 출력이 표시됩니다.

```
Reply: OK
Reply: 1
Reply: 1
Reply: 1  
3 replies:
    0: octocat
    1: dinotocat
    2: robotocat
```
