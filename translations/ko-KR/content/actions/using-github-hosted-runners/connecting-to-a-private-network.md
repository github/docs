---
title: 개인 네트워크에 연결
shortTitle: Connect to a private network
intro: '{% data variables.product.prodname_dotcom %} 호스팅된 실행기를 패키지 레지스트리, 비밀 관리자, 기타 온-프레미스 서비스를 비롯한 프라이빗 네트워크의 리소스에 연결할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
ms.openlocfilehash: d593369c1f1455d1f5cf766e5983eb4f010ec064
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009587'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_dotcom %} 호스팅된 실행기 네트워킹 정보

기본적으로 {% data variables.product.prodname_dotcom %} 호스팅된 실행기는 퍼블릭 인터넷에 액세스할 수 있습니다. 그러나 이러한 실행기에서 패키지 레지스트리, 비밀 관리자 또는 기타 온-프레미스 서비스와 같은 개인 네트워크의 리소스에 액세스하도록 할 수도 있습니다. 

{% data variables.product.prodname_dotcom %} 호스팅된 실행기는 모든 {% data variables.product.prodname_dotcom %} 고객 간에 공유되므로 워크플로를 실행하는 동안 실행기에게만 개인 네트워크를 연결하는 방법이 필요합니다. 이 액세스를 구성하기 위해 취할 수 있는 몇 가지 방법이 있으며, 각각 다른 장점과 단점이 있습니다.

{% ifversion fpt or ghec or ghes > 3.4 %}
### OIDC에서 API 게이트웨이 사용

{% data variables.product.prodname_actions %}를 사용하면 OIDC(OpenID Connect) 토큰을 사용하여 {% data variables.product.prodname_actions %} 외부에서 워크플로를 인증할 수 있습니다. 예를 들어 OIDC 토큰을 사용하여 들어오는 요청을 인증한 다음, 개인 네트워크의 워크플로를 대신하여 API 요청을 만드는 API 게이트웨이를 개인 네트워크 가장자리에서 실행할 수 있습니다.

다음 다이어그램에서는 이 솔루션의 아키텍처에 대한 개요를 제공합니다.

![OIDC 게이트웨이 다이어그램](/assets/images/help/images/actions-oidc-gateway.png)

OIDC 토큰이 {% data variables.product.prodname_actions %}에서 온 것뿐만 아니라 다른 {% data variables.product.prodname_actions %} 사용자가 개인 네트워크의 서비스에 액세스할 수 없도록 예상되는 워크플로에서 특별히 제공된 토큰을 인증하는 것이 중요합니다. OIDC 클레임을 사용하여 이러한 조건을 만들 수 있습니다. 자세한 내용은 “[OIDC 클레임을 사용하여 클라우드 역할에 대한 신뢰 조건 정의](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)”를 참조하세요.

이 방법의 주요 단점은 API 게이트웨이를 구현하여 사용자 대신 요청하고 네트워크 가장자리에서 실행해야 하는 것입니다.

하지만 다음과 같은 다양한 장점도 있습니다.
- 방화벽을 구성하거나 개인 네트워크의 라우팅을 수정할 필요가 없습니다. 
- API 게이트웨이는 상태 비저장이므로 고가용성 및 높은 처리량을 처리하기 위해 수평으로 스케일링됩니다.

자세한 내용은 [API 게이트웨이의 참조 구현](https://github.com/github/actions-oidc-gateway-example) (사용 사례에 대한 사용자 지정이 필요하며, 있는 그대로 실행할 준비가 되지 않음) 및 “[OpenID Connect를 사용한 보안 강화 정보](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”를 참조하세요.
{% endif %}

### WireGuard를 사용하여 네트워크 오버레이 만들기

API 게이트웨이에 대한 별도의 인프라를 유지 관리하지 않으려면 두 위치에서 WireGuard를 실행하여 실행기와 개인 네트워크의 서비스 간에 오버레이 네트워크를 만들 수 있습니다.

이러한 접근 방법에는 다양한 불편한 점이 있습니다. 

- 프라이빗 서비스에서 실행되는 WireGuard에 도달하려면 워크플로에서 참조할 수 있는 잘 알려진 IP 주소 및 포트가 필요합니다. 이는 공용 IP 주소 및 포트, 네트워크 게이트웨이의 포트 매핑 또는 DNS를 동적으로 업데이트하는 서비스일 수 있습니다. 
- WireGuard는 NAT 통과를 기본으로 처리하지 않으므로 이 서비스를 제공하는 방법을 식별해야 합니다.
- 이 연결은 일대일이므로 고가용성 또는 높은 처리량이 필요한 경우 WireGuard를 기반으로 빌드해야 합니다. 
- 실행기와 프라이빗 서비스 모두에 대한 키를 생성하고 안전하게 저장해야 합니다. WireGuard는 UDP를 사용하므로 네트워크에서 UDP 트래픽을 지원해야 합니다.

기존 서버에서 WireGuard를 실행할 수 있으므로 별도의 인프라를 유지할 필요가 없으며 {% data variables.product.prodname_dotcom %} 호스팅된 실행기에서 잘 지원되므로 몇 가지 장점도 있습니다.

### 예: WireGuard 구성

이 예제 워크플로는 프라이빗 서비스에 연결하도록 WireGuard를 구성합니다.

이 예제의 경우 개인 네트워크에서 실행되는 WireGuard 인스턴스에는 다음과 같은 구성이 있습니다.
- `192.168.1.1`의 네트워크 IP 주소 오버레이
- `1.2.3.4:56789`의 공용 IP 주소 및 포트
- 퍼블릭 키 `examplepubkey1234...`

{% data variables.product.prodname_actions %} 실행기에서 WireGuard 인스턴스에는 다음 구성이 있습니다.
- `192.168.1.2`의 네트워크 IP 주소 오버레이
- 프라이빗 키는 `WIREGUARD_PRIVATE_KEY` 아래에 {% data variables.product.prodname_actions %} 비밀로 저장됩니다.

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

자세한 내용은 [WireGuard의 빠른 시작](https://www.wireguard.com/quickstart/)과 키를 안전하게 저장하는 방법에 대한 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

### Tailscale을 사용하여 네트워크 오버레이 만들기

Tailscale은 WireGuard를 기반으로 제작된 상업용 제품입니다. Tailscale이 오픈 소스 구성 요소 대신 완전한 제품 환경이라는 점을 제외하면 이 옵션은 WireGuard와 매우 유사합니다.

WireGuard와 유사한 단점이 있습니다. 연결은 일대일이므로 고가용성 또는 높은 처리량을 위해 추가 작업을 수행해야 할 수 있습니다. 여전히 키를 생성하고 안전하게 저장해야 합니다. 프로토콜은 여전히 UDP이므로 네트워크에서 UDP 트래픽을 지원해야 합니다.

그러나 WireGuard에 비해 몇 가지 장점이 있습니다. NAT 통과가 기본 제공되므로 퍼블릭 인터넷에 포트를 노출할 필요가 없습니다. Tailscale은 오버레이 네트워크에 연결하는 단일 단계로 {% data variables.product.prodname_actions %} 워크플로를 제공하므로 이러한 옵션 중 가장 빠르게 시작하고 실행할 수 있습니다.

자세한 내용은 [Tailscale GitHub 작업](https://github.com/tailscale/github-action)과 키를 안전하게 저장하는 방법에 대한 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.
