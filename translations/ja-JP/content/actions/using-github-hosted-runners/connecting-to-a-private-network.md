---
title: プライベート ネットワークへの接続
intro: '{% data variables.product.prodname_dotcom %} ホステッド ランナーをプライベート ネットワーク上のリソース (パッケージ レジストリ、シークレット マネージャー、その他のオンプレミス サービスなど) に接続できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
ms.openlocfilehash: 2a74b149596e0158cdc6b5e40508b1d4a54eb8e6
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884270'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_dotcom %} ホステッド ランナーについて

{% data variables.product.prodname_dotcom %} ホステッド ランナーは、既定でパブリック インターネットにアクセスできます。 ただし、これらのランナーは、パッケージ レジストリ、シークレット マネージャー、その他のオンプレミス サービスなど、プライベート ネットワーク上のリソースにアクセスすることもできます。 

{% data variables.product.prodname_dotcom %} ホステッド ランナーは、すべての {% data variables.product.prodname_dotcom %} のお客様間で共有されるため、ワークフローの実行中にご自身のランナーだけにプライベート ネットワークを接続する方法が必要になります。 このアクセスを構成するには、異なるいくつかの方法があり、それぞれ異なる利点と欠点があります。

{% ifversion fpt or ghec or ghes > 3.4 %}
### API ゲートウェイと OIDC を使用する

{% data variables.product.prodname_actions %} では、OpenID Connect (OIDC) トークンを使用して、{% data variables.product.prodname_actions %} の外部でワークフローを認証できます。 たとえば、OIDC トークンを使用して受信要求を認証し、プライベート ネットワーク内のワークフローに代わって API 要求を行う API ゲートウェイをプライベート ネットワークのエッジで実行できます。

次の図は、このソリューションのアーキテクチャの概要を示しています。

![OIDC ゲートウェイの図](/assets/images/help/images/actions-oidc-gateway.png)

OIDC トークンが {% data variables.product.prodname_actions %} から取得されただけでなく、想定されている特定のワークフローから取得されたことの認証を行い、他の {% data variables.product.prodname_actions %} ユーザーがプライベート ネットワーク内のサービスにアクセスできないようにすることが重要です。 OIDC 要求を使用して、これらの条件を作成できます。 詳細については、「[OIDC 要求を使ったクラウド ロールに対する信頼条件の定義](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)」を参照してください。

このアプローチの主な欠点は、ユーザーに代わって要求を行う API ゲートウェイを実装し、それをネットワークのエッジで実行する必要があることです。

しかし、さまざまな利点もあります。
- ファイアウォールを構成したり、プライベート ネットワークのルーティングを変更したりする必要はありません。 
- API ゲートウェイはステートレスであるため、高可用性と高スループットを処理するために水平方向にスケーリングされます。

詳細については、[API ゲートウェイの参照実装](https://github.com/github/actions-oidc-gateway-example) (これは、ユース ケースに合わせたカスタマイズが必要であり、そのまま実行できる状態ではないことに注意してください) と、「[OpenID Connect を使用したセキュリティ強化について](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)」を参照してください。
{% endif %}

### WireGuard を使用してネットワーク オーバーレイを作成する

API ゲートウェイのための別個のインフラストラクチャを維持することを望まない場合は、両方の場所で WireGuard を実行することで、ランナーとプライベート ネットワーク内のサービスの間にオーバーレイ ネットワークを作成できます。

このアプローチにはさまざまな欠点があります。 

- プライベート サービスで実行されている WireGuard に到達するには、ワークフローで参照できる既知の IP アドレスとポートが必要です。これは、パブリック IP アドレスとポート、ネットワーク ゲートウェイ上のポート マッピング、または DNS を動的に更新するサービスのいずれかです。 
- WireGuard は既定では NAT トラバーサルを処理しないため、このサービスを提供する方法を特定する必要があります。
- この接続は 1 対 1 であるため、高可用性または高スループットが必要な場合は、WireGuard 上にそれを構築する必要があります。 
- ランナーとプライベート サービスの両方のキーを生成して安全に保存する必要があります。 WireGuard は UDP を使用するため、ネットワークで UDP トラフィックをサポートする必要があります。

利点もいくつかあります。WireGuard は既存のサーバーで実行できるので別個のインフラストラクチャを維持する必要がなく、また、{% data variables.product.prodname_dotcom %} ホステッド ランナーで十分にサポートされています。

### 例: WireGuard を構成する

このワークフロー例では、プライベート サービスに接続するように WireGuard を構成します。

この例では、プライベート ネットワークで実行されている WireGuard インスタンスの構成は次のとおりです。
- `192.168.1.1` というオーバーレイ ネットワーク IP アドレス
- `1.2.3.4:56789` というパブリック IP アドレスとポート
- 公開キー `examplepubkey1234...`

{% data variables.product.prodname_actions %} ランナーの WireGuard インスタンスの構成はこのとおりです。
- `192.168.1.2` というオーバーレイ ネットワーク IP アドレス
- 秘密キーは、{% data variables.product.prodname_actions %} シークレットとして `WIREGUARD_PRIVATE_KEY` に保存されます。

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

キーを安全に保存する方法については、「[WireGuard クイック スタート](https://www.wireguard.com/quickstart/)」と「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

### Tailscale を使用してネットワーク オーバーレイを作成する

Tailscale は WireGuard 上に構築された商用製品です。 このオプションは WireGuard によく似ていますが、Tailscale はオープンソース コンポーネントではなく完全な製品エクスペリエンスである点が異なります。

欠点は WireGuard に似ています。接続は 1 対 1 であるため、高可用性または高スループットのために追加の作業を行うことが必要な場合があります。 キーを生成して安全に保存する必要があります。 プロトコルはまだ UDP であるため、ネットワークで UDP トラフィックをサポートする必要があります。

ただし、WireGuard に勝るいくつかの利点があります。NAT トラバーサルが組み込まれているため、パブリック インターネットにポートを公開する必要はありません。 Tailscale では、オーバーレイ ネットワークに接続する 1 つのステップで {% data variables.product.prodname_actions %} ワークフローが提供されるため、これらのオプションの中では最もすばやく起動して実行できます。

詳細については、「[Tailscale GitHub アクション](https://github.com/tailscale/github-action)」を参照してください。また、キーを安全に保存する方法については、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。
