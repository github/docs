---
title: 개인 네트워크에 연결
intro: '{% data variables.product.prodname_github_codespaces %}를 패키지 레지스트리, 라이선스 서버 및 온-프레미스 데이터베이스를 비롯한 프라이빗 네트워크의 리소스에 연결할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 92b8f2b9ea438a4cc799aec1969ff6773f90c298
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159926'
---
## Codespace 네트워킹 정보

기본적으로 Codespace는 패키지 관리자, 라이선스 서버, 데이터베이스 및 클라우드 플랫폼 API를 포함하여 퍼블릭 인터넷의 모든 리소스에 액세스할 수 있지만 개인 네트워크의 리소스에는 액세스할 수 없습니다.

## 개인 네트워크의 리소스에 연결

현재 {% data variables.product.prodname_github_codespaces %} 내에서 프라이빗 네트워크의 리소스에 액세스하는 두 가지 방법이 있습니다.
- {% data variables.product.prodname_cli %} 확장을 사용하여 로컬 컴퓨터를 원격 리소스에 대한 게이트웨이로 구성합니다.
- VPN을 사용합니다. 

### GitHub CLI 확장을 사용하여 원격 리소스에 액세스

{% note %}

**참고**: {% data variables.product.prodname_cli %} 확장은 현재 베타로 제공되며 변경될 수 있습니다. 

{% endnote %}

{% data variables.product.prodname_cli %} 확장을 사용하여 codespace와 로컬 컴퓨터 간에 브리지를 만들 수 있으며, codespace는 컴퓨터에서 액세스할 수 있는 원격 리소스에 액세스할 수 있습니다. codespace는 로컬 컴퓨터를 네트워크 게이트웨이로 사용하여 해당 리소스에 연결합니다. 자세한 내용은 “[{% data variables.product.prodname_cli %} 사용을 통한 원격 리소스 액세스”](https://github.com/github/gh-net#codespaces-network-bridge)를 참조하세요.

   
   

### VPN을 사용하여 개인 네트워크 뒤의 리소스에 액세스

{% data variables.product.prodname_cli %} 확장 대신 VPN을 사용하여 codespace 내에서 프라이빗 네트워크 뒤에 있는 리소스에 액세스할 수 있습니다.

개인 네트워크의 리소스에 액세스하려면 [OpenVPN](https://openvpn.net/) 같은 VPN 도구를 사용하는 것이 좋습니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에서 OpenVPN 클라이언트 사용](https://github.com/codespaces-contrib/codespaces-openvpn)"을 참조하세요.

{% data variables.product.prodname_dotcom %}에서 명시적으로 보증하지는 않지만 {% data variables.product.prodname_github_codespaces %}와 통합하는 방법에 대한 예제를 제공한 여러 타사 솔루션도 있습니다.

해당하는 타사 솔루션은 다음과 같습니다.

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Codespaces에 대한 프라이빗 리소스 허용 목록

{% data variables.product.prodname_dotcom %}은 메타 API에 여러 제품에 대한 IP 범위를 게시하지만, Codespaces IP는 동적으로 할당되므로 Codespace가 매일 동일한 IP 주소를 갖는다는 보장은 없습니다. 모든 Codespace에 지나치게 광범위한 액세스 권한을 부여하므로(Codespace와 관련되지 않은 사용자 포함) 사용자는 전체 IP 범위를 허용 목록에 추가하지 않는 것이 좋습니다.

메타 API에 대한 자세한 내용은 “[메타](/rest/reference/meta)”를 참조하세요.

## 퍼블릭 인터넷에 대한 액세스 제한

현재는 Codespace가 퍼블릭 인터넷에 액세스하지 못하도록 제한하거나 적절하게 인증된 사용자가 전달된 포트에 액세스하지 못하도록 제한할 수 없습니다.

Codespace를 보호하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 보안](/codespaces/codespaces-reference/security-in-github-codespaces)”을 참조하세요.
