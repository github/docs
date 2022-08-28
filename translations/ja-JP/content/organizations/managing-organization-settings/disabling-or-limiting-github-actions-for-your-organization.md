---
title: Organization について GitHub Actions を無効化または制限する
intro: Organization のオーナーは Organization の GitHub Actions を無効化、有効化、制限することができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Organization の {% data variables.product.prodname_actions %} 権限について

{% data reusables.github-actions.disabling-github-actions %} {% data variables.product.prodname_actions %} の詳細は、「[{% data variables.product.prodname_actions %}について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

Organization のすべてのリポジトリについて {% data variables.product.prodname_actions %} を有効化することができます。 {% data reusables.github-actions.enabled-actions-description %} Organization のすべてのリポジトリについて 、{% data variables.product.prodname_actions %} を無効化できます。 {% data reusables.github-actions.disabled-actions-description %}

あるいは、Organization のすべてのリポジトリについて {% data variables.product.prodname_actions %} を有効化したうえで、ワークフローで実行できるアクションを制限することができます。 {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### Organization の {% data variables.product.prodname_actions %} 権限の管理

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. [**Local and third-party Actions**] で、オプションを選択します。 ![この Organization でアクションを有効化、無効化、制限](/assets/images/help/repository/enable-org-actions.png)
1. [**Save**] をクリックします。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### Organization の {% data variables.product.prodname_actions %} 権限の管理

Organization のワークフローをすべて無効にすることも、Organization でどのアクションを使用できるかを設定するポリシーを設定することもできます。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注釈:** Organizationが、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 詳しい情報については、 {% if currentVersion == "free-pro-team@latest" %}「[Enterprise アカウントで {% data variables.product.prodname_actions %} のポリシーを施行する](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)」{% else %}"[Enterprise で{% data variables.product.prodname_actions %} のポリシーを施行する](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」{% endif %}を参照してください。

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. [**Policies**] でオプションを選択します。 ![この Organization に対するアクションポリシーを設定する](/assets/images/help/organizations/actions-policy.png)
1. [**Save**] をクリックします。

### 特定のアクションの実行を許可する

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. [**Policies**] で [**Allow select actions**] を選択し、必要なアクションをリストに追加します。 ![許可リストにアクションを追加する](/assets/images/help/organizations/actions-policy-allow-list.png)
1. [**Save**] をクリックします。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### Organization のプライベートフォークポリシーを設定する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Organizationに対する`GITHUB_TOKEN`の権限の設定

{% data reusables.github-actions.workflow-permissions-intro %}

Organizationもしくはリポジトリの設定で、`GITHUB_TOKEN`のデフォルト権限を設定できます。 Organizationの設定でデフォルトとして制限付きのオプションを選択した場合、そのオプションはOrganization内のリポジトリの設定でも自動設定され、許可するようなオプションは無効化されます。 Organizationが{% data variables.product.prodname_enterprise %}に属しており、Enterprise設定でさらに制約の強いデフォルトが選択されている場合、Organizationの設定でもっと許可をするようなデフォルトは選択できません。

{% data reusables.github-actions.workflow-permissions-modifying %}

#### デフォルトの`GITHUB_TOKEN`権限の設定

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. [**Workflow permissions**]の下で、`GITHUB_TOKEN`にすべてのスコープに対する読み書きアクセスを持たせたいか、あるいは`contents`スコープに対する読み取りアクセスだけを持たせたいかを選択してください。 ![このOrganizationのGITHUB_TOKENの権限を設定](/assets/images/help/settings/actions-workflow-permissions-organization.png)
1. **Save（保存）**をクリックして、設定を適用してください。
{% endif %}
