---
title: リポジトリの GitHub アクションの無効化や制限
intro: 'リポジトリのオーナーは、特定のリポジトリの {% data variables.product.prodname_actions %} の無効化、有効化、および制限ができます。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### リポジトリの {% data variables.product.prodname_actions %} 権限について

{% data reusables.github-actions.disabling-github-actions %} {% data variables.product.prodname_actions %} の詳細は、「[{% data variables.product.prodname_actions %}について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

リポジトリで {% data variables.product.prodname_actions %} を有効化できます。 {% data reusables.github-actions.enabled-actions-description %} リポジトリの {% data variables.product.prodname_actions %} を完全に無効化することができます。 {% data reusables.github-actions.disabled-actions-description %}

または、リポジトリで {% data variables.product.prodname_actions %} を有効化して、ワークフローで実行できるアクションを制限することもできます。 {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### リポジトリの {% data variables.product.prodname_actions %} 権限を管理する

{% note %}

**注釈:** Organization に優先ポリシーがあるか、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 詳しい情報については、「[Organization での {% data variables.product.prodname_actions %} を無効化または制限する](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」または{% if currentVersion == "free-pro-team@latest" %}「[Enterprise アカウントで {% data variables.product.prodname_actions %} ポリシーを施行する](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)」{% elsif currentVersion ver_gt "enterprise-server@2.21"%}「[Enterprise で {% data variables.product.prodname_actions %} ポリシーを施行する](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. [Actions permissions] で、オプションを選択します。 ![このリポジトリのアクションを有効化、無効化、または制限する](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### リポジトリの {% data variables.product.prodname_actions %} 権限を管理する

リポジトリに対するワークフローをすべて無効にすることも、リポジトリでどのアクションを使用できるかを設定するポリシーを設定することもできます。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注釈:** Organization に優先ポリシーがあるか、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 詳しい情報については、「[Organization での {% data variables.product.prodname_actions %} を無効化または制限する](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」または{% if currentVersion == "free-pro-team@latest" %}「[Enterprise アカウントで {% data variables.product.prodname_actions %} ポリシーを施行する](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)」{% elsif currentVersion ver_gt "enterprise-server@2.21" %}「[Enterprise で {% data variables.product.prodname_actions %} ポリシーを施行する](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. [**Actions permissions**] で、オプションを選択します。 ![この Organization に対するアクションポリシーを設定する](/assets/images/help/repository/actions-policy.png)
1. [**Save**] をクリックします。

### 特定のアクションの実行を許可する

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. [**Actions permissions**] で [**Allow select actions**] を選択し、必要なアクションをリストに追加します。 ![許可リストにアクションを追加する](/assets/images/help/repository/actions-policy-allow-list.png)
2. [**Save**] をクリックします。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### リポジトリのプライベートフォークポリシーを設定する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Setting the permissions of the `GITHUB_TOKEN` for your repository

{% data reusables.github-actions.workflow-permissions-intro %}

The default permissions can also be configured in the organization settings. If the more restricted default has been selected in the organization settings, the same option is auto-selected in your repository settings and the permissive option is disabled.

{% data reusables.github-actions.workflow-permissions-modifying %}

#### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Workflow permissions**, choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope. ![Set GITHUB_TOKEN permissions for this repository](/assets/images/help/settings/actions-workflow-permissions-repository.png)
1. **Save（保存）**をクリックして、設定を適用してください。
{% endif %}
