---
title: プライベート ネットワークへの接続
intro: '{% data variables.product.prodname_github_codespaces %} は、パッケージ レジストリ、ライセンス サーバー、オンプレミス データベースなど、プライベート ネットワーク上のリソースに接続できます。'
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
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159927'
---
## codespace ネットワークについて

既定では、codespace から、パブリック インターネット上のすべてのリソース (パッケージ マネージャー、ライセンス サーバー、データベース、クラウド プラットフォーム API を含みます) にアクセスできますが、プライベート ネットワーク上のリソースにはアクセスできません。

## プライベート ネットワーク上のリソースへの接続

現在、{% data variables.product.prodname_github_codespaces %} 内のプライベート ネットワーク上のリソースにアクセスする方法は 2 つあります。
- {% data variables.product.prodname_cli %} 拡張機能を使用して、ローカル コンピューターをリモート リソースへのゲートウェイとして構成する。
- VPN を使用する。 

### GitHub CLI 拡張機能を使用してリモート リソースにアクセスする

{% note %}

**注:** {% data variables.product.prodname_cli %} 拡張機能は現在ベータ段階であり、変更されることがあります。 

{% endnote %}

{% data variables.product.prodname_cli %} 拡張機能を使用すると、codespace とご自分のローカル コンピューターの間にブリッジを作成し、コンピューターからアクセスできるあらゆるリモート リソースに codespace がアクセスできるようにすることができます。 codespace は、ローカル コンピューターをネットワーク ゲートウェイとして使用して、それらのリソースに到達します。 詳しくは、[{% data variables.product.prodname_cli %} を使用してリモート リソースにアクセスする](https://github.com/github/gh-net#codespaces-network-bridge)方法に関するページを参照してください。

   
   

### VPN を使ってプライベート ネットワークの背後にあるリソースにアクセスする

{% data variables.product.prodname_cli %} 拡張機能の代わりに、VPN を使用して、codespace 内からプライベート ネットワークの背後にあるリソースにアクセスできます。

プライベート ネットワーク上のリソースにアクセスするには、[OpenVPN](https://openvpn.net/) などの VPN ツールをお勧めします。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} からの OpenVPN クライアントを使う](https://github.com/codespaces-contrib/codespaces-openvpn)」をご覧ください。

また、{% data variables.product.prodname_dotcom %} で積極的にお勧めしているわけではありませんが、{% data variables.product.prodname_github_codespaces %} と統合する方法の例を示すサード パーティ ソリューションもいくつかあります。

これらのサード パーティ ソリューションには、次のものが含まれます。

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### codespace のプライベート リソースを許可リストに載せる

{% data variables.product.prodname_dotcom %} では、Meta API で、いくつかの製品の IP 範囲を発行していますが、codespace IP は動的に割り当てられます。つまり、codespace の IP アドレスが毎日同じとは限らないということです。 ユーザーが IP 範囲全体を許可リストに載せてしまうと、そのユーザーの codespace に関係のないユーザーも、すべての codespace にアクセスできるようになってしまうため、お勧めしません。

Meta API の詳しい情報については、「[メタ情報](/rest/reference/meta)」を参照してください。

## パブリック インターネットへのアクセスを制限する

現時点では、パブリック インターネットからの codespace へのアクセスを制限したり、認証されたユーザーが転送されたポートにアクセスできないように適切に制限したりする方法はありません。

codespace をセキュリティで保護する方法について詳しくは、「[{% data variables.product.prodname_github_codespaces %} のセキュリティ](/codespaces/codespaces-reference/security-in-github-codespaces)」をご覧ください。
