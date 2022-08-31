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
shortTitle: Manage access to runners
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
セルフホストランナーグループは、Organization レベルおよび Enterprise レベルでセルフホストランナーへのアクセスを制御するために使用されます。 Enterprise owners can configure access policies that control which organizations
{% ifversion restrict-groups-to-workflows %}and workflows {% endif %}in an enterprise have access to the runner group. Organization owners can configure access policies that control which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} in an organization have access to the runner group.

When an enterprise owner grants an organization access to a runner group, organization owners can see the runner group listed in the organization's self-hosted runner settings. The organization owners can then assign additional granular repository{% ifversion restrict-groups-to-workflows %} and workflow{% endif %} access policies to the enterprise runner group.

新しいランナーが作成されると、それらは自動的にデフォルトグループに割り当てられます。 ランナーは一度に1つのグループにのみ参加できます。 ランナーはデフォルトグループから別のグループに移動できます。 詳しい情報については、「[セルフホストランナーをグループに移動する](#moving-a-self-hosted-runner-to-a-group)」を参照してください。

## Organization のセルフホストランナーグループを作成する

すべての Organization には、単一のデフォルトのセルフホストランナーグループがあります。 Enterprise アカウント内の Organization は、追加のセルフホストグループを作成できます。 Organization の管理者は、個々のリポジトリにランナーグループへのアクセスを許可できます。 For information about how to create a self-hosted runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

セルフホストランナーは、作成時にデフォルトグループに自動的に割り当てられ、一度に 1 つのグループのメンバーになることができます。 ランナーはデフォルトグループから作成した任意のグループに移動できます。

When creating a group, you must choose a policy that defines which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
1. Enter a name for your runner group.
 {% data reusables.actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Warning**: {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

   {% endwarning %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Under {% ifversion ghes or ghae %}"Runners"{% endif %}, click **Add new**, and then **New group**.

    ![新しいランナーを追加](/assets/images/help/settings/actions-org-add-runner-group.png)
1. ランナーグループの名前を入力し、リポジトリアクセスのポリシーを割り当てます。

   ランナーグループを、特定のリポジトリのリスト、もしくはEnterprise内のすべてのリポジトリからアクセスできるように設定できます。{% ifversion ghec or ghes %}デフォルトでは、プライベートリポジトリのみがランナーグループ内のランナーにアクセスできますが、これは上書きできます。 この設定は、Enterpriseによって共有されているOrganizationのランナーグループを設定している場合には上書きできません。{% endif %}

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

Enterprise は、セルフホストランナーをグループに追加して、アクセス管理を行うことができます。 Enterprises can create groups of self-hosted runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. Organization owners can then assign additional granular repository{% ifversion restrict-groups-to-workflows %} or workflow{% endif %} access policies to the enterprise runner groups. For information about how to create a self-hosted runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups).

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
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。

{% endif %}

## セルフホストランナーグループのアクセスポリシーを変更する

For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group{% ifversion restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}. For runner groups in an organization, you can change what repositories in the organization can access a runner group{% ifversion restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}.

### Changing what organizations or repositories can access a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. For runner groups in an enterprise, under **Organization access**, modify what organizations can access the runner group. For runner groups in an organization, under **Repository access**, modify what repositories can access the runner group.

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

{% ifversion restrict-groups-to-workflows %}
### Changing what workflows can access a runner group
You can configure a self-hosted runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on self-hosted runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. This setting cannot be overridden if you are configuring an organization's runner group that was shared by an enterprise.
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. {% octicon "gear" aria-label="the gear icon" %} をクリックします。
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. 例: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. [**Save**] をクリックします。

{% endif %}

## Changing the name of a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Change the runner group name.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group %}
1. Change the runner group name.
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
1. In the {% ifversion ghes or ghae %}"Runner groups"{% endif %} section of the settings page, locate the current group of the runner you want to move and expand the list of group members. ![ランナーグループのメンバーを表示](/assets/images/help/settings/actions-org-runner-group-members.png)
2. セルフホストランナーの横にあるチェックボックスを選択し、[**Move to group**] をクリックして、利用可能な移動先を確認します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 移動先のグループをクリックして、ランナーを移動します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}

## セルフホストランナーグループを削除する

セルフホストランナーは、グループが削除されると自動的にデフォルトグループに戻ります。

{% ifversion ghes or ghae or ghec %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. グループを削除するには、[**Remove group**] をクリックします。
3. 確認プロンプトを確認し、[**Remove this runner group**] をクリックします。

{% endif %}
{% endif %}
