---
title: リポジトリの GitHub Actions の設定を管理する
intro: '特定のリポジトリの {% data variables.product.prodname_actions %} を無効化または構成できます。'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 80bce0a3f43ccac75215bd738922dc5d79868793
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061129'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## リポジトリの {% data variables.product.prodname_actions %} 権限について

{% data reusables.actions.disabling-github-actions %} {% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

リポジトリで {% data variables.product.prodname_actions %} を有効化できます。 {% data reusables.actions.enabled-actions-description %} リポジトリの {% data variables.product.prodname_actions %} を完全に無効化することができます。 {% data reusables.actions.disabled-actions-description %}

または、リポジトリで {% data variables.product.prodname_actions %} を有効にしながら、ワークフローが実行できるアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を制限することもできます。

## リポジトリの {% data variables.product.prodname_actions %} 権限を管理する

リポジトリの {% data variables.product.prodname_actions %} を無効にしたり、リポジトリで使用できるアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を構成するポリシーを設定したりすることもできます。

{% note %}

**注:** Organization に優先ポリシーがある場合、または優先ポリシーのある Enterprise によって管理されている場合は、これらの設定を管理できない場合があります。 詳細については、「[Organization の {% data variables.product.prodname_actions %} の無効化または制限](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」または「[Enterprise での {% data variables.product.prodname_actions %} に対するポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. [Actions permissions] で、オプションを選択します。

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![このリポジトリのアクション ポリシーを設定する](/assets/images/help/repository/actions-policy-with-workflows.png) {%- else %} ![このリポジトリのアクション ポリシーを設定する](/assets/images/help/repository/actions-policy.png) {%- endif %}
1. **[保存]** をクリックします。

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. [アクションのアクセス許可] で、[{% data reusables.actions.policy-label-for-select-actions-workflows %}] を選択して、必要なアクションを一覧に追加します。

   {% ifversion actions-workflow-policy%} ![許可リストにアクションと再利用可能なワークフローを追加する](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![アクションを許可リストに追加する](/assets/images/help/repository/actions-policy-allow-list.png) {%- else %} ![アクションを許可リストに追加する](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png) {%- endif %}
1. **[保存]** をクリックします。

{% ifversion fpt or ghec %}
## パブリック リポジトリでのフォークからワークフローへの変更を制御する

{% data reusables.actions.workflow-run-approve-public-fork %}

リポジトリのこの動作は、以下の手順を使用して構成できます。 この設定を変更すると、Organization または Enterprise のレベルで設定された構成がオーバーライドされます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

## プライベート リポジトリのフォークに対するワークフローを有効にする

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Enterprise または {% endif %}Organization でポリシーが無効になっている場合、リポジトリに対して有効にすることはできません。

{% data reusables.actions.private-repository-forks-options %}

### プライベート リポジトリのフォーク ポリシーを構成する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %}

## リポジトリに対する `GITHUB_TOKEN` のアクセス許可の設定

{% data reusables.actions.workflow-permissions-intro %}

既定のアクセス許可は、Organization の設定でも構成できます。 ご利用のリポジトリが組織に属し、その組織の設定でより制限の厳しい既定値が選択されている場合、リポジトリの設定で同じオプションが選択されて、制限の緩いオプションは無効になります。

{% data reusables.actions.workflow-permissions-modifying %}

### 既定の `GITHUB_TOKEN` のアクセス許可の構成

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} 既定では、個人アカウントに新しいリポジトリを作成すると、`GITHUB_TOKEN` には `contents` スコープの読み取りアクセス権のみが付与されます。 組織で新しいリポジトリを作成すると、その設定は組織の設定で構成されているものから継承されます。
{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. [ワークフローのアクセス許可] で、`GITHUB_TOKEN` に対して、すべてのスコープでの読み取りと書き込みアクセスを許可するか、`contents` スコープでの読み取りアクセスのみを許可するかを選択します。

   ![このリポジトリの GITHUB_TOKEN アクセス許可を設定する](/assets/images/help/settings/actions-workflow-permissions-repository{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)

1. **[保存]** をクリックして設定を適用します。

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### {% data variables.product.prodname_actions %} による pull request の作成または承認を回避する

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

既定では、個人用アカウントで新しいリポジトリを作成する場合、ワークフローは pull request の作成または承認を許可されません。 組織で新しいリポジトリを作成すると、その設定は組織の設定で構成されているものから継承されます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. [ワークフローのアクセス許可] にある、 **[GitHub Actions での pull request の作成と承認を許可する]** 設定を使用して、`GITHUB_TOKEN` で pull request の作成と承認ができるかどうかを構成します。

   ![このリポジトリの GITHUB_TOKEN アクセス許可を設定する](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. **[保存]** をクリックして設定を適用します。
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## 内部リポジトリ内のコンポーネントへのアクセスを許可する

Enterprise のメンバーは、内部リポジトリを使用して、情報をパブリックに共有せずにプロジェクトで作業できます。 詳細については、「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)」を参照してください。

次の手順を使って、内部リポジトリ内の{% ifversion internal-actions%}アクションと{% endif %}ワークフローにリポジトリの外部からアクセスできるかどうかを構成できます。{% ifversion internal-actions %}詳しくは、「[アクションとワークフローを Enterprise と共有する](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)」をご覧ください。 または、REST API を使用して、アクセスのレベルを設定したり、その詳細を取得したりできます。 詳細については、「[リポジトリの外部にあるワークフローに対するアクセスのレベルを取得する](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)」および「[リポジトリの外部にあるワークフローに対するアクセスのレベルを設定する](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)」を参照してください。{% endif %}

1. {% data variables.product.prodname_dotcom %} で、内部リポジトリのメイン ページに移動します。
1. リポジトリ名の下の **[{% octicon "gear" aria-label="The gear icon" %} 設定]** をクリックします。
{% data reusables.repositories.settings-sidebar-actions-general %}
1. **[アクセス]** で、次のいずれかのアクセス設定を選択します。

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Actions コンポーネントへのアクセスを設定する](/assets/images/help/settings/actions-access-settings.png){% else %}![Actions コンポーネントへのアクセスを設定する](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **[アクセスできない]** - 他のリポジトリ内のワークフローは、このリポジトリにアクセスできません。
   * **[<Organization 名> Organization 内のリポジトリからアクセスできる]** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}<Organization 名> Organization の一部である他のリポジトリ内のワークフローから、このリポジトリ内のアクションとワークフローにアクセスできます。 アクセスは、プライベート リポジトリまたは内部リポジトリからのみ許可されます。{% else %}他のリポジトリ内のワークフローは、同じ Organization の一部であり、可視性がプライベートまたは内部である場合、このリポジトリ内のワークフローを使用できます。{% endif %}
   * **[<Enterprise 名> Enterprise 内のリポジトリからアクセスできる]** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}<Enterprise 名> Enterprise の一部である他のリポジトリ内のワークフローから、このリポジトリ内のアクションとワークフローにアクセスできます。 アクセスは、プライベート リポジトリまたは内部リポジトリからのみ許可されます。{% else %}他のリポジトリ内のワークフローは、同じ Enterprise の一部であり、可視性がプライベートまたは内部である場合、このリポジトリ内のワークフローを使用できます。{% endif %}
1. **[保存]** をクリックして設定を適用します。
{% endif %}

## リポジトリ内の {% data variables.product.prodname_actions %} の成果物とログの保持期間を構成する

リポジトリ内の {% data variables.product.prodname_actions %} アーティファクトとログの保持期間を設定できます。

{% data reusables.actions.about-artifact-log-retention %}

ワークフローによって作成された特定のアーティファクトのカスタム保存期間を定義することもできます。 詳細については、「[成果物の保持期間を設定する](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)」を参照してください。

## リポジトリの保持期間を設定する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## リポジトリ用のキャッシュ ストレージの構成

{% data reusables.actions.cache-default-size %} ただし、これらの既定のサイズは、エンタープライズ所有者によって変更されている場合、異なる場合があります。 {% data reusables.actions.cache-eviction-process %}

リポジトリのキャッシュ ストレージの合計サイズは、エンタープライズ ポリシー設定で許容されている最大サイズまで設定できます。

現在、{% data variables.product.prodname_actions %} キャッシュ ストレージのリポジトリ設定は、REST API を使用してのみ変更できます。

* リポジトリの現在のキャッシュ ストレージ制限を表示するには、「[リポジトリに対する GitHub Actions キャッシュ使用ポリシーを取得する](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository)」を参照してください。
* リポジトリのキャッシュ ストレージ制限を変更するには、「[リポジトリに対する GitHub Actions キャッシュ使用ポリシーを取得する](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository)」を参照してください。

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
