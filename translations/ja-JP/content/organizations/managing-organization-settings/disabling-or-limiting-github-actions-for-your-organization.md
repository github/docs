---
title: Organization について GitHub Actions を無効化または制限する
intro: Organization のオーナーは Organization の GitHub Actions を無効化、有効化、制限することができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b72b1e412906b1a2ec7520a9c939d5adefee7dd7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064683'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Organization の {% data variables.product.prodname_actions %} 権限について

{% data reusables.actions.disabling-github-actions %} {% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

Organization のすべてのリポジトリについて {% data variables.product.prodname_actions %} を有効化することができます。 {% data reusables.actions.enabled-actions-description %} 組織のすべてのリポジトリについて、{% data variables.product.prodname_actions %} を無効化できます。 {% data reusables.actions.disabled-actions-description %}

または、Organization 内のすべてのリポジトリに対して {% data variables.product.prodname_actions %} を有効にできますが、ワークフローが実行できるアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}にアクションを制限できます。

## Organization の {% data variables.product.prodname_actions %} 権限の管理

組織内のすべてのリポジトリに対して {% data variables.product.prodname_actions %} を無効にするか、特定のリポジトリのみを許可するかを選択できます。 また、パブリック アクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}の使用を制限して、{% ifversion ghec or ghes or ghae %}Enterprise{% else %}Organization{% endif %} 内に存在するローカル アクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}のみを使用できるようにすることもできます。

{% note %}

**注:** 組織が、優先ポリシーのあるエンタープライズによって管理されている場合、これらの設定を管理できない場合があります。 詳細については、「[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise (エンタープライズでフォーク pull request のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. [Policies] で、オプションを選択します。

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![この Organization のアクション ポリシーを設定する](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![この Organization のアクション ポリシーを設定する](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. **[保存]** をクリックします。

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. [ポリシー] で [{% data reusables.actions.policy-label-for-select-actions-workflows %}] を選び、必要なアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を一覧に追加します。

   {% ifversion actions-workflow-policy %} ![許可リストにアクションと再利用可能なワークフローを追加する](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![アクションを許可リストに追加する](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![アクションを許可リストに追加する](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. **[保存]** をクリックします。

{% ifversion fpt or ghec %}
## パブリックフォークからのワークフローに対する必須の承認の設定

{% data reusables.actions.workflow-run-approve-public-fork %}

Organizationのこの動作は、以下の手順で設定できます。 この設定を変更すると、Enterpriseレベルでの設定が上書きされます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Enterpriseでポリシーが無効化されていると、それをOrganizationで有効化することはできません。{% endif %}Organizationでポリシーが無効化されていると、それをリポジトリで有効化することはできません。 Organizationがポリシーを有効化していると、そのポリシーを個々のリポジトリで無効化することはできません。

{% data reusables.actions.private-repository-forks-options %}

### Organization のプライベートフォークポリシーを設定する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## 組織の `GITHUB_TOKEN` のアクセス許可の設定

{% data reusables.actions.workflow-permissions-intro %}

組織またはリポジトリの設定で、`GITHUB_TOKEN` の既定のアクセス許可を設定できます。 Organization の設定でデフォルトとして制限付きのオプションを選択した場合、そのオプションは Organization 内のリポジトリの設定でも選択され、制限の緩いオプションは無効化されます。 Organization が {% data variables.product.prodname_enterprise %} に属しており、Enterprise 設定でさらに制約の強いデフォルトが選択されている場合、Organization の設定でより制限の緩いデフォルトは選択できません。

{% data reusables.actions.workflow-permissions-modifying %}

### 既定の `GITHUB_TOKEN` のアクセス許可の構成

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} 既定では、新しい Organization を作成した場合、`GITHUB_TOKEN` には `contents` スコープの読み取りアクセス権のみが付与されます。
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. [ワークフローのアクセス許可] で、`GITHUB_TOKEN` に対して、すべてのスコープでの読み取りと書き込みアクセスを許可するか、`contents` スコープでの読み取りアクセスのみを許可するかを選択します。

   ![このOrganizationのGITHUB_TOKENの権限を設定](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. **[保存]** をクリックして設定を適用します。

{% ifversion allow-actions-to-approve-pr %}
### {% data variables.product.prodname_actions %} による pull request の{% ifversion allow-actions-to-approve-pr-with-ent-repo %}作成または{% endif %}承認を禁止する

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

既定では、新しい Organization を作成するとき、ワークフローで pull request を{% ifversion allow-actions-to-approve-pr-with-ent-repo %}作成または{% endif %}承認することは許可されていません。

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. [ワークフローのアクセス許可] で、 **[GitHub Actions が pull request を{% ifversion allow-actions-to-approve-pr-with-ent-repo %}作成または{% endif %}承認するのを許可する]** 設定を使って、`GITHUB_TOKEN` が pull request を{% ifversion allow-actions-to-approve-pr-with-ent-repo %}作成または{% endif %}承認できるかどうかを構成します。

   ![この組織の GITHUB_TOKEN pull request 承認アクセス許可を設定します](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. **[保存]** をクリックして設定を適用します。

{% endif %}
