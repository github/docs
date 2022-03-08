---
title: グループを使用してセルフホストランナーへのアクセスを管理する
intro: ポリシーを使用して、Organization または Enterprise に追加されたセルフホストランナーへのアクセスを制限できます。
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Manage runner groups
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## セルフホストランナーのグループについて

{% ifversion fpt %}
{% note %}

**注釈:** すべての Organization には、単一のデフォルトのセルフホストランナーグループがあります。 Only enterprise accounts and organizations owned by enterprise accounts can create and manage additional self-hosted runner groups.

{% endnote %}

Self-hosted runner groups are used to control access to self-hosted runners. Organization の管理者は、Organization 内のどのリポジトリがランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。
ー

{% data variables.product.prodname_ghe_cloud %}, you can create additional runner groups; enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group; and organization admins can assign additional granular repository access policies to the enterprise runner group. 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)を参照してください。
{% endif %}

{% ifversion ghec or ghes or ghae %}
セルフホストランナーグループは、Organization レベルおよび Enterprise レベルでセルフホストランナーへのアクセスを制御するために使用されます。 Enterprise の管理者は、Enterprise 内のどの Organization がランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。 Organization の管理者は、Organization 内のどのリポジトリがランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。

Enterprise の管理者が Organization にランナーグループへのアクセスを許可すると、Organization の管理者は、Organization のセルフホストランナー設定にリストされたランナーグループを表示できます。 Organization の管理者は、追加の詳細なリポジトリアクセスポリシーを Enterprise ランナーグループに割り当てることができます。

新しいランナーが作成されると、それらは自動的にデフォルトグループに割り当てられます。 ランナーは一度に1つのグループにのみ参加できます。 ランナーはデフォルトグループから別のグループに移動できます。 詳しい情報については、「[セルフホストランナーをグループに移動する](#moving-a-self-hosted-runner-to-a-group)」を参照してください。

## Organization のセルフホストランナーグループを作成する

すべての Organization には、単一のデフォルトのセルフホストランナーグループがあります。 Enterprise アカウント内の Organization は、追加のセルフホストグループを作成できます。 Organization の管理者は、個々のリポジトリにランナーグループへのアクセスを許可できます。 For information about how to create a self-hosted runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

セルフホストランナーは、作成時にデフォルトグループに自動的に割り当てられ、一度に 1 つのグループのメンバーになることができます。 ランナーはデフォルトグループから作成した任意のグループに移動できます。

グループを作成する場合、ランナーグループにアクセスできるリポジトリを定義するポリシーを選択する必要があります。

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
 {% data reusables.actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Warning**: {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

   {% endwarning %}
{% data reusables.actions.self-hosted-runner-create-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.settings-sidebar-actions-runners %}
1. Under {% ifversion ghes > 3.1 or ghae %}"Runners"{% elsif ghes < 3.2 %}"Self-hosted runners"{% endif %}, click **Add new**, and then **New group**.

    ![新しいランナーを追加](/assets/images/help/settings/actions-org-add-runner-group.png)
1. ランナーグループの名前を入力し、リポジトリアクセスのポリシーを割り当てます。

   You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization.{% ifversion ghec or ghes %} By default, only private repositories can access runners in a runner group, but you can override this. This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.{% endif %}

   {%- ifversion ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

   {% endwarning %}
   {%- endif %}

   ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。
{% endif %}

## Enterprise のセルフホストランナーグループを作成する

Enterprise は、セルフホストランナーをグループに追加して、アクセス管理を行うことができます。 Enterprise は、Enterprise アカウント内の特定の Organization がアクセスできるセルフホストランナーのグループを作成できます。 Organization の管理者は、追加の詳細なリポジトリアクセスポリシーを Enterprise ランナーグループに割り当てることができます。 For information about how to create a self-hosted runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups).

セルフホストランナーは、作成時にデフォルトグループに自動的に割り当てられ、一度に 1 つのグループのメンバーになることができます。 登録処理中にランナーを特定のグループに割り当てることも、後でランナーをデフォルトグループからカスタムグループに移動することもできます。

グループを作成するときは、ランナーグループにアクセスできる Organization を定義するポリシーを選択する必要があります。

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, select the **Organization access** drop-down, and click a policy. You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.{% ifversion ghes %} By default, only private repositories can access runners in a runner group, but you can override this.{% endif %}

   {%- ifversion ghec or ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

   {% endwarning %}
   {%- endif %}
   {%- ifversion ghec or ghes %}

   ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。

{% endif %}

## セルフホストランナーグループのアクセスポリシーを変更する

ランナーグループのアクセスポリシーを更新したり、ランナーグループの名前を変更したりすることができます。
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Modify the access options, or change the runner group name.

   {%- ifversion fpt or ghec or ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

   {% endwarning %}
   {%- endif %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}

{% ifversion ghec or ghes or ghae %}
## Automatically adding a self-hosted runner to a group

You can use the configuration script to automatically add a new self-hosted runner to a group. For example, this command registers a new self-hosted runner and uses the `--runnergroup` parameter to add it to a group named `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

The command will fail if the runner group doesn't exist:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```

## セルフホストランナーをグループに移動する

If you don't specify a runner group during the registration process, your new self-hosted runners are automatically assigned to the default group, and can then be moved to another group.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. In the "Runners" list, click the runner that you want to configure.
2. Select the **Runner group** drop-down.
3. In "Move runner to group", choose a destination group for the runner.
{% elsif ghae or ghes < 3.4 %}
1. In the {% ifversion ghes > 3.1 or ghae %}"Runner groups"{% elsif ghes < 3.2 %}"Self-hosted runners"{% endif %} section of the settings page, locate the current group of the runner you want to move and expand the list of group members. ![ランナーグループのメンバーを表示](/assets/images/help/settings/actions-org-runner-group-members.png)
2. セルフホストランナーの横にあるチェックボックスを選択し、[**Move to group**] をクリックして、利用可能な移動先を確認します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 移動先のグループをクリックして、ランナーを移動します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}

## セルフホストランナーグループを削除する

セルフホストランナーは、グループが削除されると自動的にデフォルトグループに戻ります。

{% ifversion ghes > 3.1 or ghae or ghec %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. グループを削除するには、[**Remove group**] をクリックします。
3. 確認プロンプトを確認し、[**Remove this runner group**] をクリックします。
{% elsif ghes < 3.2 %}
1. In the "Self-hosted runners" section of the settings page, locate the group you want to delete, and click the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} button. ![ランナーグループの設定を表示](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. グループを削除するには、[**Remove group**] をクリックします。 ![ランナーグループの設定を表示](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. 確認プロンプトを確認し、[**Remove this runner group**] をクリックします。
{% endif %}
{% endif %}
