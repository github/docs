---
title: アプライアンスの依存関係レビューを構成する
shortTitle: Configuring dependency review
intro: 'pull request をレビューするときにユーザーが依存関係の変化を理解できるように、{% data variables.location.product_location %} の依存関係レビューを有効または無効にしたり、構成したりすることができます。'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107758'
---
## 依存関係の確認について

{% data reusables.dependency-review.feature-overview %}  

ライセンス チェック、pull request のブロック、CI/CD インテグレーションなどの一部の追加機能は、[依存関係レビュー アクション](https://github.com/actions/dependency-review-action)を行うと利用できます。

## ライセンスに {% data variables.product.prodname_GH_advanced_security %} が含まれているかどうかを確認する

{% data reusables.advanced-security.check-for-ghas-license %}

## 依存関係レビューの前提条件

- {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} のライセンス (「[{% data variables.product.prodname_GH_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」をご覧ください)。{% endif %}

- インスタンスに対して有効になっている依存関係グラフ。 サイト管理者は、管理コンソールまたは管理シェルを使って依存関係グラフを有効にすることができます (「[Enterprise の依存関係グラフを有効にする](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)」をご覧ください)。
  
- {% data variables.product.prodname_advisory_database %} から脆弱性をダウンロードして同期するために有効化された {% data variables.product.prodname_github_connect %}。 これは通常、{% data variables.product.prodname_dependabot %} のセットアップの一環として構成されます (「[Enterprise に対して Dependabot を有効にする](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」をご覧ください)。

## 依存関係レビューを有効および無効にする

依存関係レビューを有効または無効にするには、インスタンスに対して依存関係グラフを有効または無効にする必要があります。

詳細については、「[企業の依存関係グラフの有効化](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)」を参照してください。

## {% data variables.product.prodname_actions %} を使って依存関係レビューを実行する

{% data reusables.dependency-review.dependency-review-action-beta-note %}

依存関係レビュー アクションは、{% data variables.product.prodname_ghe_server %} のインストールに含まれています。 これは、{% data variables.product.prodname_GH_advanced_security %} と依存関係グラフが有効になっているすべてのリポジトリで使うことができます。

{% data reusables.dependency-review.dependency-review-action-overview %}  

ユーザーは、{% data variables.product.prodname_actions %} ワークフローを使って、依存関係レビュー アクションを実行します。 {% data variables.product.prodname_actions %} のランナーをまだセットアップしていない場合、ユーザーを有効にしてワークフローを実行するには、これを行う必要があります。 セルフホストランナーは、リポジトリ、Organization、または Enterprise アカウントレベルでプロビジョニングできます。 詳しくは、「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」と「[セルフホステッド ランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners)」をご覧ください。

