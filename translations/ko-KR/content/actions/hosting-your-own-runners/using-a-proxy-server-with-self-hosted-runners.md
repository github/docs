---
title: 자체 호스팅 실행기를 사용하는 프록시 서버 사용
intro: '프록시 서버를 사용하여 {% data variables.product.product_name %}와 통신하도록 자체 호스팅 실행기를 구성할 수 있습니다.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Proxy servers
ms.openlocfilehash: e6c9d36b052627726f73f6a07d989a192cd1e738
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090437'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 환경 변수를 사용하여 프록시 서버 구성

프록시 서버를 통해 통신하기 위해 자체 호스팅 실행기가 필요한 경우 자체 호스팅 실행기 애플리케이션은 다음 환경 변수에 설정된 프록시 구성을 사용합니다.

* `https_proxy`: HTTPS 트래픽용 프록시 URL입니다. 필요한 경우 기본 인증 자격 증명도 포함할 수 있습니다. 예를 들면 다음과 같습니다.
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: HTTP 트래픽용 프록시 URL입니다. 필요한 경우 기본 인증 자격 증명도 포함할 수 있습니다. 예를 들면 다음과 같습니다.
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: 프록시를 사용하지 않아야 하는 호스트의 쉼표로 구분된 목록입니다. `no_proxy`에서는 호스트 이름만 허용되며, IP 주소는 사용할 수 없습니다. 예를 들면 다음과 같습니다.
  * `example.com`
  * `example.com,myserver.local:443,example.org`

자체 호스팅 실행기 애플리케이션이 시작될 때 프록시 환경 변수를 읽으므로 자체 호스팅 실행기 애플리케이션을 구성하거나 시작하기 전에 환경 변수를 설정해야 합니다. 프록시 구성이 변경되면, 자체 호스팅 실행기 응용 프로그램을 다시 시작해야 합니다.

Windows 머신에서 프록시 환경 변수 이름은 대/소문자를 구분하지 않습니다. Linux 및 macOS 머신에서는 모두 소문자인 환경 변수를 사용하는 것이 좋습니다. Linux 또는 macOS의 경우에 소문자 및 대문자로 된 환경 변수가 모두 있는 경우(예: `https_proxy`, `HTTPS_PROXY`), 자체 호스팅 실행기 응용 프로그램은 소문자 환경 변수를 사용합니다.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## .env 파일을 사용하여 프록시 구성 설정

환경 변수를 설정하는 것이 실용적이지 않은 경우 자체 호스팅 실행기 애플리케이션 디렉터리의 _.env_ 파일에서 프록시 구성 변수를 설정할 수 있습니다. 예를 들어 시스템 계정으로 실행기 애플리케이션을 서비스로 구성하려는 경우 이 작업이 필요할 수 있습니다. 실행기 애플리케이션은 시작 시 _.env_ 에서 프록시 구성을 위해 설정된 변수를 읽습니다.

_.env_ 프록시 구성 예제는 다음과 같습니다.

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Docker 컨테이너에 대한 프록시 구성 설정

워크플로에서 Docker 컨테이너 작업 또는 서비스 컨테이너를 사용하는 경우 위 환경 변수를 설정하는 것 외에도 프록시 서버를 사용하도록 Docker를 구성해야 할 수 있습니다.

필요한 Docker 구성에 대한 자세한 내용은 Docker 설명서에서 “[프록시 서버를 사용하도록 Docker 구성](https://docs.docker.com/network/proxy/)”을 참조하세요.
