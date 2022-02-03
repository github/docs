---
title: Managing GitHub Actions settings for a repository
intro: 'You can disable or configure {% data variables.product.prodname_actions %} for a specific repository.'
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## リポジトリの {% data variables.product.prodname_actions %} 権限について

{% data reusables.github-actions.disabling-github-actions %} {% data variables.product.prodname_actions %} の詳細は、「[{% data variables.product.prodname_actions %}について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

リポジトリで {% data variables.product.prodname_actions %} を有効化できます。 {% data reusables.github-actions.enabled-actions-description %} リポジトリの {% data variables.product.prodname_actions %} を完全に無効化することができます。 {% data reusables.github-actions.disabled-actions-description %}

または、リポジトリで {% data variables.product.prodname_actions %} を有効化して、ワークフローで実行できるアクションを制限することもできます。 {% data reusables.github-actions.enabled-local-github-actions %}

## リポジトリの {% data variables.product.prodname_actions %} 権限を管理する

リポジトリに対するワークフローをすべて無効にすることも、リポジトリでどのアクションを使用できるかを設定するポリシーを設定することもできます。

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注釈:** Organization に優先ポリシーがあるか、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. [**Actions permissions**] で、オプションを選択します。

  ![この Organization に対するアクションポリシーを設定する](/assets/images/help/repository/actions-policy.png)

1. [**Save**] をクリックします。

## 特定のアクションの実行を許可する

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. [**Actions permissions**] で [**Allow select actions**] を選択し、必要なアクションをリストに追加します。

   {%- ifversion ghes > 3.0 %}
   ![許可リストにアクションを追加する](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![許可リストにアクションを追加する](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}

1. [**Save**] をクリックします。

{% ifversion fpt or ghec %}
## パブリックフォークからのワークフローに対する必須の承認の設定

{% data reusables.actions.workflow-run-approve-public-fork %}

You can configure this behavior for a repository using the procedure below. Modifying this setting overrides the configuration set at the organization or enterprise level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

## プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

### リポジトリのプライベートフォークポリシーを設定する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Setting the permissions of the `GITHUB_TOKEN` for your repository

{% data reusables.github-actions.workflow-permissions-intro %}

The default permissions can also be configured in the organization settings. If the more restricted default has been selected in the organization settings, the same option is auto-selected in your repository settings and the permissive option is disabled.

{% data reusables.github-actions.workflow-permissions-modifying %}

### デフォルトの`GITHUB_TOKEN`権限の設定

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. [**Workflow permissions**]の下で、`GITHUB_TOKEN`にすべてのスコープに対する読み書きアクセスを持たせたいか、あるいは`contents`スコープに対する読み取りアクセスだけを持たせたいかを選択してください。

  ![Set GITHUB_TOKEN permissions for this repository](/assets/images/help/settings/actions-workflow-permissions-repository.png)

1. **Save（保存）**をクリックして、設定を適用してください。
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Allowing access to components in an internal repository

Members of your enterprise can use internal repositories to work on projects without sharing information publicly. For information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)."

You can configure whether {% if internal-actions%}actions and {% endif %}workflows in an internal repository can be accessed from outside the repository.{% if internal-actions %} For more information, see "[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)."{% endif %}

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of the internal repository.
1. Under your repository name, click {% octicon "gear" aria-label="The gear icon" %} **Settings**.
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Access**, choose one of the access settings:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png){% else %}![Set the access to Actions components](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Not accessible** - Workflows in other repositories cannot access this repository.
   * **Accessible from repositories in the 'ORGANIZATION NAME' organization** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Workflows in other repositories that are part of the 'ORGANIZATION NAME' organization can access the actions and workflows in this repository. Access is allowed only from private or internal repositories.{% else %}Workflows in other repositories can use workflows in this repository if they are part of the same organization and their visibility is private or internal.{% endif %}
   * **Accessible from repositories in the 'ENTERPRISE NAME' enterprise** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Workflows in other repositories that are part of the 'ENTERPRISE NAME' enterprise can access the actions and workflows in this repository. Access is allowed only from private or internal repositories.{% else %}Workflows in other repositories can use workflows in this repository if they are part of the same enterprise and their visibility is private or internal.{% endif %}
1. **Save（保存）**をクリックして、設定を適用してください。
{% endif %}

## Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository

リポジトリ内の {% data variables.product.prodname_actions %} アーティファクトとログの保持期間を設定できます。

{% data reusables.actions.about-artifact-log-retention %}

ワークフローによって作成された特定のアーティファクトのカスタム保存期間を定義することもできます。 詳しい情報については、「[アーティファクトの保持期間を設定する](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)」を参照してください。

## リポジトリの保持期間を設定する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
