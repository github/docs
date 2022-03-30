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
shortTitle: アクションの無効化もしくは制限
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Organization の {% data variables.product.prodname_actions %} 権限について

{% data reusables.actions.disabling-github-actions %} {% data variables.product.prodname_actions %} の詳細は、「[{% data variables.product.prodname_actions %}について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

Organization のすべてのリポジトリについて {% data variables.product.prodname_actions %} を有効化することができます。 {% data reusables.actions.enabled-actions-description %} Organization のすべてのリポジトリについて 、{% data variables.product.prodname_actions %} を無効化できます。 {% data reusables.actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} for all repositories in your organization but limit the actions {% if actions-workflow-policy %}and reusable workflows{% endif %} a workflow can run.

## Organization の {% data variables.product.prodname_actions %} 権限の管理

You can choose to disable {% data variables.product.prodname_actions %} for all repositories in your organization, or only allow specific repositories. You can also limit the use of public actions{% if actions-workflow-policy %} and reusable workflows{% endif %}, so that people can only use local actions {% if actions-workflow-policy %}and reusable workflows{% endif %} that exist in your {% ifversion ghec or ghes or ghae %}enterprise{% else %}organization{% endif %}.

{% note %}

**注釈:** Organizationが、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 詳しい情報については「[Enterpriseでの{% data variables.product.prodname_actions %}のポリシーの施行](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. [Policies] で、オプションを選択します。

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% if actions-workflow-policy %}
   ![この Organization に対するアクションポリシーを設定する](/assets/images/help/organizations/actions-policy-with-workflows.png)
   {%- else %}
   ![この Organization に対するアクションポリシーを設定する](/assets/images/help/organizations/actions-policy.png)
   {%- endif %}
1. [**Save**] をクリックします。

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Under "Policies", select {% data reusables.actions.policy-label-for-select-actions-workflows %} and add your required actions{% if actions-workflow-policy %} and reusable workflows{% endif %} to the list.

   {% if actions-workflow-policy %}
   ![Add actions and reusable workflows to the allow list](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes %}
   ![Add actions to the allow list](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![Add actions to the allow list](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
   {%- endif %}
1. [**Save**] をクリックします。

{% ifversion fpt or ghec %}
## パブリックフォークからのワークフローに対する必須の承認の設定

{% data reusables.actions.workflow-run-approve-public-fork %}

Organizationのこの動作は、以下の手順で設定できます。 この設定を変更すると、Enterpriseレベルでの設定が上書きされます。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Enterpriseでポリシーが無効化されていると、それをOrganizationで有効化することはできません。{% endif %}Organizationでポリシーが無効化されていると、それをリポジトリで有効化することはできません。 Organizationがポリシーを有効化していると、そのポリシーを個々のリポジトリで無効化することはできません。

{% data reusables.actions.private-repository-forks-options %}

### Organization のプライベートフォークポリシーを設定する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Organizationに対する`GITHUB_TOKEN`の権限の設定

{% data reusables.actions.workflow-permissions-intro %}

Organizationもしくはリポジトリの設定で、`GITHUB_TOKEN`のデフォルト権限を設定できます。 Organizationの設定でデフォルトとして制限付きのオプションを選択した場合、そのオプションはOrganization内のリポジトリの設定でも自動設定され、許可するようなオプションは無効化されます。 Organizationが{% data variables.product.prodname_enterprise %}に属しており、Enterprise設定でさらに制約の強いデフォルトが選択されている場合、Organizationの設定でもっと許可をするようなデフォルトは選択できません。

{% data reusables.actions.workflow-permissions-modifying %}

### デフォルトの`GITHUB_TOKEN`権限の設定

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. [**Workflow permissions**]の下で、`GITHUB_TOKEN`にすべてのスコープに対する読み書きアクセスを持たせたいか、あるいは`contents`スコープに対する読み取りアクセスだけを持たせたいかを選択してください。 ![このOrganizationのGITHUB_TOKENの権限を設定](/assets/images/help/settings/actions-workflow-permissions-organization.png)
1. **Save（保存）**をクリックして、設定を適用してください。
{% endif %}
