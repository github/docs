---
title: 継続的デプロイについて
intro: '{% data variables.product.prodname_actions %} を使って、{% data variables.product.prodname_dotcom %} リポジトリにカスタム継続的デプロイ (CD) ワークフローを直接作成できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: About continuous deployment
ms.openlocfilehash: 379afa0088f7f10302f5bf8202f5259ac4777bec
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147060139'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 継続的デプロイについて

_継続的デプロイ_ (CD) は、自動化を使用してソフトウェアの更新プログラムを公開およびデプロイする方法です。 一般的な CD プロセスの一環として、コードはデプロイ前に自動的にビルドされてテストされます。

継続的デプロイは、多くの場合、継続的インテグレーションと組み合わされます。 継続的インテグレーションの詳細については、「[継続的インテグレーションについて](/actions/guides/about-continuous-integration)」を参照してください。

## {% data variables.product.prodname_actions %} を使用する継続的デプロイについて

{% data variables.product.prodname_actions %} ワークフローを設定して、ソフトウェア製品をデプロイできます。 製品が意図したとおりに動作することを確認するため、ワークフローでリポジトリ内のコードをビルドし、デプロイする前にテストを実行できます。

CD ワークフローは、{% data variables.product.product_name %} イベントが発生したとき (たとえば、新しいコードがリポジトリの既定のブランチにプッシュされたとき)、設定されたスケジュールで、手動で、またはリポジトリ ディスパッチ Webhook を使用して外部イベントが発生したときに実行するように、設定できます。 ワークフローを実行できるときについて詳しくは、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

{% data variables.product.prodname_actions %} には、デプロイをより詳細に制御できる機能が用意されています。 たとえば、環境を使用して、ジョブの続行に承認を要求したり、ワークフローをトリガーできるブランチを制限したり、シークレットへのアクセスを制限したりできます。 コンカレンシーを使用して、CD パイプラインを、最大 1 つの進行中のデプロイと 1 つの保留中のデプロイに制限できます。 これらの機能の詳細については、「[GitHub Actions を使用してデプロイする](/actions/deployment/deploying-with-github-actions)」と「[デプロイに環境を使用する](/actions/deployment/using-environments-for-deployment)」を参照してください。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## OpenID Connect を使用してクラウド リソースにアクセスする

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## スターター ワークフローとサード パーティのアクション

{% data reusables.actions.cd-templates-actions %}

## 参考資料

- [GitHub Actions を使用してデプロイする](/actions/deployment/deploying-with-github-actions)
- [デプロイに環境を使用する](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_actions %} の支払いを管理する](/billing/managing-billing-for-github-actions)"{% endif %}

