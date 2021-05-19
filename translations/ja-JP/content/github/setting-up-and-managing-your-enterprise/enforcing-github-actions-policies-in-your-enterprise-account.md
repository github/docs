---
title: Enterprise アカウントで GitHub Actions のポリシーを施行する
intro: 'Enterprise のオーナーは、Enterprise アカウントについて {% data variables.product.prodname_actions %} の無効化、有効化、および制限ができます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### Enterprise アカウント の {% data variables.product.prodname_actions %} 権限について

デフォルトでは、Enterprise アカウントが所有するすべての Organization で {% data variables.product.prodname_actions %} が有効です。 Enterprise アカウントが所有するすべての Organization に対して {% data variables.product.prodname_actions %} を無効にすることも、特定の Organization に対して無効にすることもできます。 Organization にあるローカルのアクションだけ利用できるように、パブリックなアクションの利用を制限することもできます。

{% data variables.product.prodname_actions %} に関する詳しい情報については、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

### Enterprise アカウント の {% data variables.product.prodname_actions %} 権限の管理

Enterprise のワークフローをすべて無効にすることも、Organization でどのアクションを使用できるかを設定するポリシーを設定することもできます。

{% data reusables.actions.actions-use-policy-settings %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. [**Save**] をクリックします。

### 特定のアクションの実行を許可する

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. [**Policies**] で [**Allow select actions**] を選択し、必要なアクションをリストに追加します。 ![許可リストにアクションを追加する](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)

### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### Enterprise アカウントのプライベートフォークポリシーを設定する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}

### Setting the permissions of the `GITHUB_TOKEN` for your enterprise

{% data reusables.github-actions.workflow-permissions-intro %}

You can set the default permissions for the `GITHUB_TOKEN` in the settings for your enterprise, organizations, or repositories. If you choose the restricted option as the default in your enterprise settings, this prevents the more permissive setting being chosen in the organization or repository settings.

{% data reusables.github-actions.workflow-permissions-modifying %}

#### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under **Workflow permissions**, choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope. ![Set GITHUB_TOKEN permissions for this enterprise](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)
1. **Save（保存）**をクリックして、設定を適用してください。
