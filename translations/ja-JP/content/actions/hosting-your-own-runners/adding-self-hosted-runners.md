---
title: セルフホストランナーの追加
intro: リポジトリ、Organization、Enterpriseにセルフホストランナーを追加できます。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

リポジトリ、Organization、Enterpriseにセルフホストランナーを追加できます。

Organization または Enterprise 管理者の場合は、Organization または Enterprise レベルでセルフホストランナーを追加することをお勧めします。 このアプローチにより、Organization または Enterprise 内の複数のリポジトリでランナーを使用できるようになり、ランナーを1か所で管理することもできます。

セルフホストランナーでサポートされているオペレーティングシステム、あるいはプロキシサーバーとセルフホストランナーを使う方法に関する情報については、「[セルフホストランナーについて](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)」を参照してください。

{% ifversion not ghae %}
{% warning %}

**警告：** {% data reusables.github-actions.self-hosted-runner-security %}

詳しい情報については「[セルフホストランナーについて](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

{% endwarning %}
{% endif %}

## リポジトリへのセルフホストランナーの追加

単一のリポジトリにセルフホストランナーを追加できます。 セルフホストランナーをユーザのリポジトリに追加するには、リポジトリのオーナーでなければなりません。 Organizationのリポジトリの場合は、Organizationのオーナーであるか、そのリポジトリの管理アクセスを持っていなければなりません。 For information about how to add a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% ifversion fpt or ghec %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.settings-sidebar-actions %}
{% data reusables.github-actions.settings-sidebar-actions-runners-updated %}
1. Click **New self-hosted runner**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. GitHub Insightsの
{% ifversion fpt or ghes > 3.1 or ghae or ghec %}"ランナー"{% else %}"セルフホストランナー"{% endif %} で、[**Add runner**] をクリックします。
{% data reusables.github-actions.self-hosted-runner-configure %}
{% endif %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

## Organizationへのセルフホストランナーの追加

セルフホストランナーをOrganizationのレベルで追加し、Organization内の複数のリポジトリのジョブを処理するために使うことができます。 Organizationにセルフホストランナーを追加するには、Organizationのオーナーでなければなりません。 For information about how to add a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% ifversion fpt or ghec %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions %}
{% data reusables.github-actions.settings-sidebar-actions-runners-updated %}
1. Click **New runner**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. GitHub Insightsの
{% ifversion fpt or ghes > 3.1 or ghae or ghec %}"ランナー"{% else %}"セルフホストランナー"{% endif %} で、[**Add runner**] をクリックします。
{% data reusables.github-actions.self-hosted-runner-configure %}
{% endif %}

{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

## セルフホストランナーを Enterprise に追加する

セルフホストランナーを Enterprise に追加して、複数の Organization に割り当てることができます。 Organization の管理者は、そのランナーを使用できるリポジトリを制御できます。

新しいランナーがデフォルトグループに割り当てられます。 ランナーを登録した後、ランナーのグループを変更できます。 詳しい情報については、「[セルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。

{% ifversion fpt or ghec %}
セルフホストランナーを Enterprise アカウントに追加するには、Enterprise のオーナーである必要があります。 For information about how to add a self-hosted runner with the REST API, see the [Enterprise Administration GitHub Actions APIs](/rest/reference/enterprise-admin#github-actions).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Click **New runner**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% endif %}
{% ifversion ghae or ghes %}
セルフホストランナーを
{% data variables.product.product_location %} の Enterprise レベルで削除するには、サイト管理者である必要があります。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. [**Add new**] をクリックし、[**New runner**] をクリックします。
{% data reusables.github-actions.self-hosted-runner-configure %}
{% endif %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

### Enterprise ランナーをリポジトリで利用可能にする

デフォルトでは、Enterprise の「デフォルト」のセルフホストランナーグループのランナーは、Enterprise 内のすべての Organization で使用できますが、各 Organization のすべてのリポジトリで使用できるわけではありません。

Enterprise レベルのセルフホストランナーグループを Organization リポジトリで使用できるようにするには、ランナーグループの Organization の継承設定を変更して、Organization 内のリポジトリでランナーを使用できるようにする必要がある場合があります。

ランナーグループのアクセス設定の変更に関する詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
