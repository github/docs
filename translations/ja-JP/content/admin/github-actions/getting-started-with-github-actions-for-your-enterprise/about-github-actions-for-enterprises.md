---
title: エンタープライズの GitHub Actions について
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %} を使うと、Enterprise のソフトウェア開発サイクルを自動化することで、開発者の生産性を向上させることができます。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 682e5c4bc4b17105df59c4e5474bf46ec11fe211
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160745'
---
## エンタープライズ {% data variables.product.prodname_actions %} について

{% data reusables.actions.about-actions-for-enterprises %}

| タスク | 詳細情報 |
| ---- | ---------------- |
| アプリケーションを自動的にテストしてビルドする | 「[継続的インテグレーションについて](/actions/automating-builds-and-tests/about-continuous-integration)」 | 
| アプリケーションをデプロイする | 「[継続的デプロイについて](/actions/deployment/about-deployments/about-continuous-deployment)」 |
| コードを自動的かつ安全に成果物とコンテナーにパッケージ化する | 「[{% data variables.product.prodname_actions %} を使用したパッケージ化について](/actions/publishing-packages/about-packaging-with-github-actions)」 |
| プロジェクト管理タスクを自動化する | 「[プロジェクト管理での {% data variables.product.prodname_actions %} の使用](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)」 |

{% data variables.product.prodname_actions %} は、チームが大規模な作業を迅速に行うために役立ちます。 大規模なリポジトリが {% data variables.product.prodname_actions %} の使用を開始すると、チームが 1 日にマージする pull request が大幅に増加し、pull request のマージ速度も大幅に上がります。 詳細については、「The State of the Octoverse」の「[コードの記述と出荷の高速化](https://octoverse.github.com/2021/writing-code-faster/#scale-through-automation)」を参照してください。

独自の自動化を作成することができます。あるいは、業界のリーダーやオープンソース コミュニティによって構築された 10,000 を超えるアクションで構成されているエコシステムのワークフローを使用して調整することもできます。 {% ifversion ghec %}詳細については、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions)」を参照してください。{% else %}開発者が {% data variables.location.product_location %}に存在するアクションを使用するように制限することも、開発者が {% data variables.product.prodname_dotcom_the_website %} 上のアクションにアクセスできるように許可することもできます。 詳細については、「[エンタープライズでのアクションの使用について](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)」を参照してください。{% endif %}

{% data variables.product.prodname_actions %} は、よく使用される {% data variables.product.product_name %} エクスペリエンスに直接統合されているため、開発者にとってわかりやすい機能です。

{% ifversion ghec %}{% data variables.product.company_short %} によって管理およびアップグレードされる、{% data variables.product.company_short %} ホステッド ランナーの利便性を活用できます。あるいは、{% else %}{% endif %}セルフホステッド ランナーを使用して、独自の非公開 CI/CD インフラストラクチャを管理できます。 セルフホステッド ランナーを使用すると、ソフトウェア開発サイクルをインターネットに公開することなく、ビルド、テスト、デプロイを完了するための正確な環境とリソースを決定できます。 詳細については、{% ifversion ghec %}「[{% data variables.product.company_short %} ホステッド ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners)」および{% endif %} 「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。

{% data variables.product.prodname_actions %} では、デプロイを細かく制御することができます。 たとえば、環境を使用して、ジョブを続行するために承認を要求したり、ワークフローをトリガーできるブランチを制限したり、シークレットへのアクセスを制限したりすることができます。{% ifversion ghec or ghes > 3.4 %} ワークフローが OpenID Connect (OIDC) をサポートするクラウド プロバイダーのリソースにアクセスする必要がある場合、そのクラウド プロバイダーで直接認証されるようにワークフローを構成できます。 OIDC には、有効期間が長いシークレットとして資格情報を格納する必要性を解消するなど、セキュリティ上の利点があります。 詳細については、「[OpenID Connect を使用したセキュリティ強化について](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)」を参照してください。{% endif %}

{% data variables.product.prodname_actions %} には、エンタープライズのソフトウェア開発サイクルを管理し、コンプライアンスの義務を満たすためのツールも含まれています。 詳細については、「[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise (エンタープライズでフォーク pull request のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)」を参照してください。

## {% data variables.product.prodname_actions %} の使用開始について

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %} {% data reusables.actions.ghes-actions-not-enabled-by-default %} 計画が完了したら、{% data variables.product.prodname_actions %} を有効化する手順に従うことができます。 たとえば、場合によっては、{% data variables.location.product_location %}のために CPU とメモリをアップグレードする必要があります。 詳細については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。

{% else %} 計画が完了したら、{% data variables.product.prodname_actions %} の使用を開始する手順に従うことができます。 詳細については、{% ifversion ghec %}「[{% data variables.product.prodname_ghe_cloud %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud)」{% elsif ghae %}「[{% data variables.product.prodname_ghe_managed %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)」{% endif %}を参照してください。 {% endif %}

## 参考資料

- 「[{% data variables.product.prodname_actions %} の理解](/actions/learn-github-actions/understanding-github-actions)」{% ifversion ghec %}
- 「[{% data variables.product.prodname_actions %} の課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」{% endif %}
