---
title: ビルド システムをセキュリティで保護するためのベスト プラクティス
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: サプライ チェーンの終端を保護する方法 (成果物の構築と配布に使用するシステム) に関するガイダンス。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
ms.openlocfilehash: f184bb668ba1594a77099fab734686b9c550c238
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518857'
---
## このガイドについて

このガイドでは、ビルド システムのセキュリティを向上させるために加えられる最も影響が大きい変更について説明します。 各セクションで、セキュリティを向上させるためにプロセスに対して行うことができる変更の概要を示します。 変更は影響が大きい順に示されます。

## リスクとは

ソフトウェア サプライ チェーンに対する攻撃の一部は、ビルド システムを直接対象とします。 攻撃者がビルド プロセスを変更できる場合は、個人アカウントやコードを侵害することなく、システムを悪用するおそれがあります。 ビルド システムだけでなく、個人のアカウントやコードも忘れずに保護することが重要です。

## ビルド システムのセキュリティによる保護

ビルド システムに必要なセキュリティ機能がいくつかあります。

1. ビルドの手順は明確で繰り返すことができる必要があります。

2. ビルド プロセス中に何が実行されていたかを正確に把握する必要があります。

3. 各ビルドは新しい環境で開始する必要があるため、侵害されたビルドは今後のビルドに影響を与えることはありません。

{% data variables.product.prodname_actions %} は、これらの機能を満たすのに役立ちます。 ビルド手順は、コードと共にリポジトリに格納されます。 ご自分でホストする Windows、Mac、Linux、ランナーなど、ビルドを実行する環境を選びます。 各ビルドは新しいランナー イメージから始まり、ビルド環境に攻撃が持続することは困難になります。

{% data variables.product.prodname_actions %} を使用すると、セキュリティ上の利点に加えて、頻繁かつ高速なビルドのために、ビルドを手動で、定期的に、またはリポジトリの Git イベントでトリガーできます。

{% data variables.product.prodname_actions %} は大きなトピックですが、作業を開始するには、「[GitHub Actions について](/actions/learn-github-actions/understanding-github-actions)」のほかに、「[GitHub ホストランナーの選択](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)」、「[ワークフローのトリガー](/actions/using-workflows/triggering-a-workflow)」を参照してください。

## ビルドに署名する

ビルド プロセスがセキュリティで保護されたら、誰かがビルド プロセスの最終的な結果を改ざんできないようにする必要があります。 これを行う優れた方法は、ビルドに署名することです。 ソフトウェアをパブリックに配布する場合、多くの場合、公開/秘密の暗号化キー ペアで行われます。 秘密キーを使用してビルドに署名し、公開キーを公開して、ソフトウェアのユーザーがビルドの署名を使用する前に確認できるようにします。 ビルドのバイトが変更された場合、署名は検証されません。

ビルドに正確に署名する方法は、記述しているコードの種類とユーザーによって異なります。 多くの場合、秘密キーを安全に格納する方法を知ることは困難です。 ここでの基本的なオプションの 1 つは、{% data variables.product.prodname_actions %} 暗号化されたシークレットを使用することですが、それらの {% data variables.product.prodname_actions %} ワークフローにアクセスするユーザーを制限するように注意する必要があります。 {% ifversion fpt or ghec %} 秘密キーがパブリック インターネット (Microsoft Azure、HashiCorp Vault など) 経由でアクセスできる別のシステムに格納されている場合、より高度なオプションは OpenID Connect で認証することであるため、システム間でシークレットを共有する必要はありません。{% endif %} 秘密キーにアクセスできるのがプライベート ネットワークからのみの場合は、{% data variables.product.prodname_actions %} にセルフホステッド ランナーを使用することもできます。

詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」{% ifversion fpt or ghec %}、「[OpenID Connect によるセキュリティ強化について](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)」、{% endif %} および「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。

## {% data variables.product.prodname_actions %} のセキュリティを強化する

さらに {% data variables.product.prodname_actions %} をセキュリティで保護するために、さらに多くの手順を実行できます。 特に、サードパーティのワークフローを評価する場合は注意が必要です。また、ワークフローに変更を加えることができるユーザーを制限するために `CODEOWNERS` を使用することを検討してください。

詳しくは、「[GitHub Actions のセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions)」、特に「[サードパーティ アクションを使用する](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)」および「[変更の監視に `CODEOWNERS` を使用する](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)」を参照してください。

## 次の手順

- 「[エンドツーエンドのサプライ チェーンのセキュリティ保護](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)」

- 「[アカウントをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)」

- 「[サプライ チェーンのコードをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)」
