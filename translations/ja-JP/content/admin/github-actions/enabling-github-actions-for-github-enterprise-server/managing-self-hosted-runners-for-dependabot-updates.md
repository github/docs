---
title: エンタープライズでの Dependabot 更新プログラムのセルフホステッド ランナーの管理
intro: 'Enterprise 上のリポジトリで使用される依存関係をセキュリティで保護して維持するための pull request を作成する目的で {% data variables.product.prodname_dependabot %} によって使用される {% data variables.location.product_location %} の専用ランナーを作成できます。'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 0f21d4bc91e519f7af89ff04bd65a6ace742f430
ms.sourcegitcommit: d411e8278b73efd0051816625c0b235ab7c263e9
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181334'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## {% data variables.product.prodname_dependabot_updates %} のセルフホステッド ランナーについて

{% data variables.product.prodname_dependabot %} のセキュリティとバージョン更新プログラムを設定することで、{% data variables.location.product_location %} のユーザーが、安全なコードを作成して管理できるようにします。 {% data variables.product.prodname_dependabot_updates %}を使用すると、開発者は、依存関係が自動的に更新されてセキュアな状態が維持されるようにリポジトリを構成できます。 詳細については、「[エンタープライズでの {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% data variables.location.product_location %} 上で {% data variables.product.prodname_dependabot_updates %} を使うには、依存関係を更新する pull request を作成するようにセルフホステッド ランナーを構成する必要があります。

## 前提条件

{% ifversion dependabot-updates-github-connect %} セルフホステッド ランナーの構成は、{% data variables.product.prodname_dependabot_updates %} を有効化するプロセス内の 1 つの手順にすぎません。 これらの手順の前には、セルフホステッド ランナーで {% data variables.product.prodname_actions %} を使うように {% data variables.location.product_location %} を構成することを含め、従うべきいくつかの手順があります。 詳細については、「[エンタープライズでの {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
{% else %} {% data variables.product.prodname_dependabot_updates %} のセルフホステッド ランナーを構成する前に、次を行う必要があります。

- セルフホステッド ランナーで {% data variables.product.prodname_actions %} を使うように {% data variables.location.product_location %} を構成します。 詳細については、「[GitHub Enterprise Server の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。
- エンタープライズでの {% data variables.product.prodname_dependabot_alerts %} を有効化します。 詳細については、「[エンタープライズでの {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
{% endif %}

## {% data variables.product.prodname_dependabot_updates %}用のセルフホステッド ランナーの構成

{% data variables.product.prodname_actions %} を使うように {% data variables.location.product_location %} を構成した後で、{% data variables.product.prodname_dependabot_updates %} 用のセルフホステッド ランナーを追加する必要があります。

### {% data variables.product.prodname_dependabot %} ランナーのシステム要件

{% data variables.product.prodname_dependabot %} ランナーのために使用する VM は、セルフホステッド ランナーの要件を満たす必要があります。 さらに、次の要件も満たしている必要があります。

- Linux オペレーティング システム
- x64 アーキテクチャ {%- ifversion ghes < 3.5 %}
- Git がインストールされていること {%- endif %}
- Docker がランナー ユーザーのアクセス権を使用してインストールされていること:
  - Docker をルートレス モードでインストールし、`root` 権限なしで Docker にアクセスするようにランナーを構成することをお勧めします。
  - または、Docker をインストールしてから、Docker を実行するための昇格権限をランナー ユーザーに付与します。

CPU とメモリの要件は、特定の VM にデプロイする同時実行ランナーの数によって異なります。 ガイダンスとしては、1 台の 2 CPU 8 GB マシンに 20 台のランナーを正常に設定できました。ただし、最終的に CPU とメモリの要件は更新対象のリポジトリによって大きく異なります。 エコシステムによっては、他のエコシステムよりも多くのリソースが必要になります。

14 を超える同時実行ランナーを 1 つの VM に指定する場合は、Docker が作成できるネットワークの既定数を増やすように Docker の `/etc/docker/daemon.json` 構成も更新する必要があります。

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### {% data variables.product.prodname_dependabot %} ランナーのネットワーク要件

{% data variables.product.prodname_dependabot %} ランナーは、パブリック インターネット、{% data variables.product.prodname_dotcom_the_website %}、および {% data variables.product.prodname_dependabot %} 更新プログラムで使用されるすべての内部レジストリへのアクセスが必要です。 内部ネットワークに対するリスクを最小限に抑えるには、仮想マシン (VM) から内部ネットワークへのアクセスを制限する必要があります。 これにより、ハイジャックされた依存関係をランナーがダウンロードした場合に、内部システムが損害を受ける可能性が減少します。

### {% data variables.product.prodname_dependabot %} 更新プログラム用のセルフホステッド ランナーの追加

1. セルフホステッド ランナーを、リポジトリ、組織、またはエンタープライズ アカウント レベルでプロビジョニングします。 詳細については、「[セルフホスト ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[セルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

2. 上記の要件を使用して、セルフホステッド ランナーを設定します。 たとえば、Ubuntu 20.04 を実行している VM では、次のようになります。{% ifversion ghes < 3.5 %}

   - Git がインストールされていることを確認します。`command -v git`{% endif %}
   - Docker をインストールし、ランナー ユーザーが Docker にアクセスできることを確認します。 詳細については、Docker のドキュメントをご覧ください。
     - [Ubuntu に Docker エンジンをインストールする](https://docs.docker.com/engine/install/ubuntu/)
     - 推奨される方法: [非ルート ユーザーとして Docker デーモンを実行する (ルートレス モード)](https://docs.docker.com/engine/security/rootless/)
     - 別の方法: [非ルート ユーザーとして Docker を管理する](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - ランナーがパブリック インターネットにアクセスできることと、{% data variables.product.prodname_dependabot %} が必要とする内部ネットワークのみにアクセスできることを確認します。

3. `dependabot` ラベルを、{% data variables.product.prodname_dependabot %} で使用する各ランナーに割り当てます。 詳細については、「[セルフホステッド ランナーでのラベルの使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)」を参照してください。

4. 必要に応じて、{% data variables.product.prodname_dependabot %} によってトリガーされるワークフローで、読み取り専用を上回るアクセス許可を使用し、通常提供されているシークレットにアクセスできるようにします。 詳細については、「[エンタープライズでの {% data variables.product.prodname_actions %} のトラブルシューティング](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)」を参照してください。
