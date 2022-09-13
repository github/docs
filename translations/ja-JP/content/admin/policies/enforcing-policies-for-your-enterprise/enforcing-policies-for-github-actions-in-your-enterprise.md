---
title: エンタープライズで GitHub Actions のポリシーを適用する
intro: 'Enterprise の Organization 内で {% data variables.product.prodname_actions %} に対してポリシーを適用したり、各 Organization でポリシーを設定したりできます。'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
ms.openlocfilehash: 21b2cfa73ef84ba6635f05b9fc25bb48df2b87cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147400339'
---
{% data reusables.actions.enterprise-beta %}

## エンタープライズの {% data variables.product.prodname_actions %} のポリシーについて

{% data variables.product.prodname_actions %} は、エンタープライズのメンバーが {% data variables.product.product_name %} でソフトウェア開発のワークフローを自動化する際に役立ちます。 詳細については、「[{% data variables.product.prodname_actions %} について](/actions/learn-github-actions/understanding-github-actions)」を参照してください。

{% ifversion ghes %}{% data variables.product.prodname_actions %} を有効にした場合、{% data variables.product.product_location %} のいかなる{% else %}{% endif %}組織でも、{% data variables.product.prodname_actions %} を使用できます。 {% data variables.product.product_name %} のエンタープライズのメンバーが {% data variables.product.prodname_actions %} を使用する方法を制御するポリシーを適用できます。 既定では、組織の所有者は、メンバーが {% data variables.product.prodname_actions %} を使用する方法を管理できます。 詳細については、「[組織での {% data variables.product.prodname_actions %} の無効化または制限](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」を参照してください。

## エンタープライズで {% data variables.product.prodname_actions %} の使用を制限するポリシーを適用する

Enterprise 内のすべての Organization に対して {% data variables.product.prodname_actions %} を無効化するか、特定の Organization のみを許可するかを選択できます。 また、パブリック アクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}の使用を制限して、Enterprise 内に存在するローカル アクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}のみを使用できるようにすることもできます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. "Policies（ポリシー）"の下で、オプションを選択してください。

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   **注:** パブリック アクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}へのアクセスを有効にするには、まず {% data variables.product.product_location %} を構成して、{% data variables.product.prodname_dotcom_the_website %} に接続する必要があります。 詳細については、「[GitHub Connect を使用して GitHub.com アクションへの自動アクセスを有効にする](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %} ![この Enterprise アカウントのアクションを有効化、無効化、または制限する](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![この Enterprise アカウントのアクションを有効化、無効化、または制限する](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}
1. **[保存]** をクリックします。

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. [ポリシー] で [{% data reusables.actions.policy-label-for-select-actions-workflows %}] を選び、必要なアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を一覧に追加します。
   {% ifversion actions-workflow-policy %} ![許可リストにアクションと再利用可能なワークフローを追加する](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png) {%- elsif ghes or ghae %} ![アクションを許可リストに追加する](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png) {%- elsif ghae %} ![アクションを許可リストに追加する](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png) {%- endif %}

## エンタープライズで成果物とログの保持に関するポリシーを適用する

{% data variables.product.prodname_actions %} では、成果物とログのファイルを格納できます。 詳細については、「[ワークフロー成果物のダウンロード](/actions/managing-workflow-runs/downloading-workflow-artifacts)」を参照してください。

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## エンタープライズでフォーク pull request のポリシーを適用する

エンタープライズのメンバー{% ifversion ghec %}または外部のコラボレーター{% endif %}がフォークからワークフローを実行する場合に、{% data variables.product.product_location %} に対する {% data variables.product.prodname_actions %} の動作を制御するポリシーを適用できます。

{% ifversion ghec %}

### 外部コラボレーターからの pull request の承認のためのポリシーを適用する

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### 非公開リポジトリでのフォーク pull request のポリシーを適用する

{% data reusables.actions.private-repository-forks-overview %}

エンタープライズでポリシーが有効になっている場合は、個々の組織またはリポジトリでポリシーを選択的に無効にすることができます。 エンタープライズでポリシーが無効になっている場合は、個々の組織またはリポジトリでそれを有効にすることはできません。

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## エンタープライズでワークフロー アクセス許可のポリシーを適用する

{% data reusables.actions.workflow-permissions-intro %}

エンタープライズ、組織、またはリポジトリの設定で、`GITHUB_TOKEN` の既定のアクセス許可を設定できます。 エンタープライズの設定で制限付きオプションを既定値として選択した場合、組織またはリポジトリの設定では、より制限の緩い設定は選択されなくなります。

{% data reusables.actions.workflow-permissions-modifying %}

### 既定の `GITHUB_TOKEN` のアクセス許可の構成

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}新しい Enterprise を作成すると、既定では、`GITHUB_TOKEN` には `contents` スコープの読み取りアクセス権のみが付与されます。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. [ワークフローのアクセス許可] で、`GITHUB_TOKEN` に対して、すべてのスコープでの読み取りと書き込みアクセスを許可するか、`contents` スコープでの読み取りアクセスのみを許可するかを選択します。

   ![このエンタープライズの GITHUB_TOKEN アクセス許可を設定する](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. **[保存]** をクリックして設定を適用します。

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### {% data variables.product.prodname_actions %} による pull request の作成または承認を回避する

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

既定では、新しいエンタープライズを作成した場合、ワークフローでの pull request の作成または承認は許可されません。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. [ワークフローのアクセス許可] にある、 **[GitHub Actions での pull request の作成と承認を許可する]** 設定を使用して、`GITHUB_TOKEN` で pull request の作成と承認ができるかどうかを構成します。

   ![このエンタープライズの GITHUB_TOKEN アクセス許可を設定する](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. **[保存]** をクリックして設定を適用します。

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## エンタープライズでキャッシュ ストレージのポリシーを適用する

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

ただし、エンタープライズ ポリシーを設定して、各リポジトリの既定の合計キャッシュ サイズと、リポジトリで許可される最大の合計キャッシュ サイズの両方をカスタマイズできます。 たとえば、各リポジトリの既定の合計キャッシュ サイズを 5 GB にする一方で、必要に応じてリポジトリ管理者が合計キャッシュ サイズを最大 15 GB に構成できるようにしたい場合があります。

リポジトリへの管理者アクセス権を持つユーザーは、エンタープライズ ポリシー設定で許可された最大キャッシュ サイズまで、リポジトリの合計キャッシュ サイズを設定できます。

現在、{% data variables.product.prodname_actions %} キャッシュ ストレージのポリシー設定は、REST API を使用してのみ変更できます。

* 現在のエンタープライズ ポリシー設定を表示するには、「[エンタープライズの GitHub Actions キャッシュ利用ポリシーを取得する](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)」を参照してください。
* エンタープライズ ポリシー設定を変更するには、「[エンタープライズの GitHub Actions キャッシュ利用ポリシーを設定する](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)」を参照してください。

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
