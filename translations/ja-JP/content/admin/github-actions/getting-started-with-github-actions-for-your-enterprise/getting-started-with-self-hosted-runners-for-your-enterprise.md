---
title: 企業向けセルフホスト ランナーの概要
shortTitle: Self-hosted runners
intro: '開発者が {% data variables.product.prodname_actions %} を使用してワークフローの自動化を開始できるように、Enterprise 用のランナー マシンを構成できます。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
ms.openlocfilehash: e369c7bf3a9da15cd4e0ee43f54815e89ab4b45a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106622'
---
## {% data variables.product.prodname_actions %} のセルフホスト ランナーについて

{% data reusables.actions.about-actions-for-enterprises %}詳細については、「[企業向け {% data variables.product.prodname_actions %} について](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)」を参照してください。

{% data variables.product.prodname_actions %} を使用すると、開発者はアクションと呼ばれる個々のタスクを作成して組み合わせて、カスタム ワークフローを作成できます。 {% ifversion ghes or ghae %}{% data variables.product.prodname_actions %} を {% ifversion ghae %}Enterprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %} で有効にするには、ジョブを実行するマシンを少なくとも 1 台ホストする必要があります。{% endif %}{% ifversion ghec %}ジョブを実行する独自のランナー マシンをホストできます。この{% elsif ghes or ghae %}この{% endif %}マシンは、セルフホスト ランナーと呼ばれます。 {% data reusables.actions.self-hosted-runner-locations %}{% data reusables.actions.self-hosted-runner-architecture %}{% ifversion ghec %}すべての{% elsif ghes or ghae %}セルフホスト {% endif %}ランナーで Linux、Windows、または macOS を実行できます。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners)に関する記述をご覧ください。

{% ifversion ghec %}

または、{% data variables.product.company_short %} ホスト ランナー マシンを使用できます。 {% data variables.product.company_short %} ホスト ランナーは、このガイドの範囲外です。 詳細については、「[{% data variables.product.company_short %} ホスト ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners)」を参照してください。

{% endif %}

このガイドでは、Enterprise 内の {% data variables.product.prodname_actions %} 用のセルフホスト ランナーに一元管理アプローチを適用する方法について説明します。 このガイドでは、次のタスクを行います。

1. Enterprise 内で実行できるアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を制約する制限付きポリシーを構成する
1. Enterprise にセルフホスト ランナーをデプロイする
1. Enterprise で使用できるランナーへのアクセスを管理するためのグループを作成する
1. 必要に応じて、ランナーを使用できるリポジトリをさらに制限する
1. 必要に応じて、カスタム ツールをビルドしてセルフホスト ランナーを自動的にスケーリングする

また、セルフホスト ランナーを監視およびセキュリティで保護する方法、{% ifversion ghes or ghae %}{% data variables.product.prodname_dotcom_the_website %} からアクションにアクセスする方法、{% endif %}ランナー マシン上のソフトウェアをカスタマイズする方法についても詳しく説明します。

このガイドを完了すると、{% ifversion ghec or ghae %}Enterprise のメンバー{% elsif ghes %}{% data variables.location.product_location %} のユーザー{% endif %}は、セルフホスト ランナー マシン上で {% data variables.product.prodname_actions %} からワークフロー ジョブを実行できるようになります。

## 前提条件

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Enterprise は少なくとも 1 つの Organization を所有している必要があります。 詳細については、「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」および「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

## 1. {% data variables.product.prodname_actions %} 用のポリシーを構成する

まず、すべての Organization に対して {% data variables.product.prodname_actions %} を有効にし、{% ifversion ghec or ghae%}{% data variables.product.product_name %} の Enterprise 内で{% elsif ghes %}{% data variables.location.product_location %} で{% endif %}実行できるアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を制限するポリシーを構成します。 必要に応じて、Organization 所有者は、各 Organization に対してこれらのポリシーをさらに制限できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. [ポリシー] で、 **[すべての Organization に対して有効にする]** を選択します。
   
   ![{% data variables.product.prodname_actions %} の [すべての Organization に対して有効にする] ポリシーのスクリーンショット](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. {% data reusables.actions.policy-label-for-select-actions-workflows %} および **[GitHub によって作成されたアクションを許可]** を選択して、ローカル アクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}および {% data variables.product.company_short %} で作成されたアクションを許可します。

   {% ifversion actions-workflow-policy %} ![{% data variables.product.prodname_actions %} での [select アクションを許可] と [{% data variables.product.company_short %} で作成されたアクションを許可] のスクリーンショット](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png) {%- else %}![{% data variables.product.prodname_actions %} での [select アクションを許可] と [{% data variables.product.company_short %} で作成されたアクションを許可] のスクリーンショット](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png){%- endif %}
1. **[保存]** をクリックします。

{% ifversion ghec or ghae %}Enterprise メンバー{% elsif ghes %}{% data variables.location.product_location %} のユーザー{% endif %}が使用できるアクションを制限するために追加のポリシーを構成できます。 詳細については、「[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise (エンタープライズでフォーク pull request のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)」を参照してください。

## 2. Enterprise のセルフホスト ランナーをデプロイする

次に、セルフホスト ランナーを Enterprise に追加します。 {% data variables.product.product_name %} により、ランナー マシンに必要なソフトウェアをインストールする手順が表示されます。 ランナーをデプロイした後、ランナー マシンと {%ifversion ghec or ghae %}Enterprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %} の間の接続を確認できます。

### セルフホスト ランナーの追加

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. グループを使用してセルフホスト ランナーへのアクセスを管理する

ランナー グループを作成して、Enterprise に追加したランナーへのアクセスを管理できます。 グループを使用して、どの Enterprise がランナーで {% data variables.product.prodname_actions %} からジョブを実行できるかを選択します。

{% data variables.product.product_name %} では、すべての新しいランナーがグループに追加されます。 ランナーは一度に 1 つのグループに含めることができます。 {% data variables.product.product_name %} の既定では、新しいランナーは "既定" のグループに追加されます。

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Organization のアクセスのポリシーを選択するには、[Organization のアクセス] で **[Organization のアクセス]** ドロップダウンを選択し、 **[選択した Organization]** をクリックします。
1. Organization アクセス ポリシーのドロップダウンの右側にある {% octicon "gear" aria-label="The Gear icon" %} をクリックします。
1. ランナー グループへのアクセス権を付与する対象の Organization を選択します。
{%- ifversion ghec or ghes %}
1. 必要に応じて、選択した Organization のパブリック リポジトリでグループ内のランナーを使用できるようにするには、 **[パブリック リポジトリの許可]** を選択します。

   {% warning %}

   **警告**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)に関する記述をご覧ください。

   {% endwarning %} {%- endif %} {% data reusables.actions.create-runner-group %} {%- ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. [ランナー] タブをクリックします。
1. ランナーの一覧で、前のセクションでデプロイしたランナーをクリックします。
1. **[編集]** をクリックします。
1. **[ランナー グループ] {% octicon "gear" aria-label="The Gear icon" %}** をクリックします。
1. ランナー グループの一覧で、前に作成したグループの名前をクリックします。
1. **[保存]** をクリックするとランナーがグループに移動します。
{%- elsif ghes < 3.4 or ghae %}
1. [既定値] の右側で、グループ内のランナーの数をクリックしてランナーを表示します。
1. デプロイしたランナーを選択します。
1. [ランナー グループ] の右側にある **[グループに移動]** ドロップダウンを選択し、前に作成したグループをクリックします。
{%- endif %}

これで、指定した Organization 内の {% data variables.product.prodname_actions %} からジョブを実行できるセルフホスト ランナーがデプロイされました。

## 4. セルフホスト ランナーへのアクセスをさらに制限する

必要に応じて、Organization 所有者は、作成したランナー グループのアクセス ポリシーをさらに制限できます。 たとえば、Organization 所有者は、組織内の特定のリポジトリにのみランナー グループの使用を許可できます。

詳細については、「[グループを使用してセルフホスト ランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。

## 5. セルフホスト ランナーを自動的にスケーリングする

必要に応じて、カスタム ツールを構築して、{% ifversion ghec or ghae %}Enterprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %} のセルフホスト ランナーを自動的にスケーリングできます。 たとえば、ツールで {% data variables.location.product_location %} からの Webhook イベントに応答して、ランナー マシンのクラスターを自動的にスケーリングできます。 詳細については、「[セルフホスト ランナーによる自動スケーリング](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)」を参照してください。

## 次の手順

- セルフホスト ランナーを監視し、一般的な問題のトラブルシューティングを行うことができます。 詳細については、「[セルフホスト ランナーの監視とトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。

- {% data variables.product.company_short %} では、セルフホスト ランナー マシンのセキュリティに関する考慮事項を確認することをお勧めします。 詳細については、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)」を参照してください。

- {% ifversion ghec %}{% data variables.product.prodname_ghe_server %} または {% data variables.product.prodname_ghe_managed %} を使用する場合は、{% elsif ghes or ghae %}{% endif %}{% data variables.product.prodname_dotcom_the_website %} 上のアクションを含むリポジトリを {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} または {% data variables.product.prodname_ghe_managed %}{% endif %} 上の Enterprise に手動で同期できます。 または、{% data variables.product.prodname_github_connect %} を使用して、Enterprise のメンバーが {% data variables.product.prodname_dotcom_the_website %} からアクションに自動的にアクセスできるようにすることもできます。 詳細については、次を参照してください。

   {%- ifversion ghes or ghae %}
   - 「[{% data variables.product.prodname_dotcom_the_website %} からアクションを手動で同期する](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)」
   - 「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスの有効化](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)」{%- elsif ghec %}
   - [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) または [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) ドキュメントの「{% data variables.product.prodname_dotcom_the_website %} からアクションを手動で同期する」
   - [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) または [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) ドキュメントの「{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスの有効化」{%- endif %}

- セルフホスト ランナー マシンで使用できるソフトウェアをカスタマイズしたり、{% ifversion ghes or ghae %}{% data variables.product.prodname_dotcom_the_website %} を使用しているお客様が利用可能な{% endif %}{% data variables.product.company_short %} ホスト ランナーと同様のソフトウェアを実行するようにランナーを構成したりできます。 {% data variables.product.prodname_actions %} 用のランナー マシンを支えるソフトウェアは、オープンソースです。 詳細については、[`actions/runner`](https://github.com/actions/runner) および [`actions/runner-images`](https://github.com/actions/runner-images) リポジトリを参照してください。

## 参考資料

- 「[セルフホスト ランナー アプリケーションをサービスとして構成する](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)」
- 「[ワークフローでのセルフホスト ランナーの利用](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)」
